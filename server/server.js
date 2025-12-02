import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.server' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.stl', '.step', '.stp', '.iges', '.igs', '.obj', '.dxf', '.dwg', '.pdf'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only CAD files are allowed.'));
    }
  }
});

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Helper to log leads
const logLead = (type, data) => {
  const leadsFile = path.join(__dirname, '..', 'leads.json');
  let leads = [];
  if (fs.existsSync(leadsFile)) {
    try {
      leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));
    } catch (e) {
      console.error('Error reading leads file:', e);
    }
  }
  leads.push({
    id: Date.now(),
    type,
    timestamp: new Date().toISOString(),
    ...data
  });
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Log the lead
    logLead('contact', { name, email, phone, message });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || 'laswellrobotics@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
          </div>
          <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
            <h3 style="margin-top: 0; color: #374151;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>This email was sent from the Laswell Robotics contact form.</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: email
    };

    // Try to send email, but don't fail if it's not configured (for demo)
    if (process.env.EMAIL_USER) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Email not configured, skipping email send. Lead logged to leads.json');
    }

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully'
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// Quote request endpoint (with file upload)
app.post('/api/quote', upload.single('file'), async (req, res) => {
  try {
    const { contactName, contactEmail, phone, serviceType, projectDetails } = req.body;

    if (!contactName || !contactEmail || !serviceType) {
      return res.status(400).json({
        error: 'Contact name, email, and service type are required'
      });
    }

    // Log the lead
    logLead('quote', {
      contactName,
      contactEmail,
      phone,
      serviceType,
      projectDetails,
      hasFile: !!req.file,
      fileName: req.file ? req.file.originalname : null
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || 'laswellrobotics@gmail.com',
      subject: `New Quote Request: ${serviceType} - ${contactName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Quote Request
          </h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Contact Name:</strong> ${contactName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${contactEmail}">${contactEmail}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Service Type:</strong> <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px;">${serviceType}</span></p>
          </div>
          ${projectDetails ? `
            <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #374151;">Project Details:</h3>
              <p style="white-space: pre-wrap;">${projectDetails}</p>
            </div>
          ` : ''}
          ${req.file ? `
            <div style="margin: 20px 0; padding: 15px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 5px;">
              <p style="margin: 0;"><strong>📎 Attached File:</strong> ${req.file.originalname}</p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #92400e;">File size: ${(req.file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          ` : ''}
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>This email was sent from the Laswell Robotics quote request form.</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: contactEmail,
      attachments: req.file ? [{
        filename: req.file.originalname,
        path: req.file.path
      }] : []
    };

    if (process.env.EMAIL_USER) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Email not configured, skipping email send. Quote logged to leads.json');
    }

    // Clean up uploaded file after sending email
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }

    res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully'
    });
  } catch (error) {
    console.error('Error sending quote email:', error);

    // Clean up file if there was an error
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }

    res.status(500).json({
      error: 'Failed to submit quote request. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email configured: ${process.env.EMAIL_USER ? 'Yes' : 'No'}`);
  console.log(`📬 Recipient email: ${process.env.RECIPIENT_EMAIL || 'laswellrobotics@gmail.com'}\n`);
});
