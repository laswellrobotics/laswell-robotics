import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import multer from 'multer';

// Configure multer for memory storage
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
    fileFilter: (req, file, cb) => {
        const allowedExtensions = ['.stl', '.step', '.stp', '.iges', '.igs', '.obj', '.dxf', '.dwg', '.pdf'];
        const ext = file.originalname.toLowerCase().slice(file.originalname.lastIndexOf('.'));
        if (allowedExtensions.includes(ext)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only CAD files are allowed.'));
        }
    }
});

// Helper to run middleware
function runMiddleware(req: any, res: any, fn: any) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Run multer middleware
        await runMiddleware(req, res, upload.single('file'));

        // Access fields from req.body (populated by multer)
        // Note: req.body might be null prototype object, so we cast or access carefully
        const body = (req as any).body || {};
        const { contactName, contactEmail, phone, serviceType, projectDetails } = body;
        const file = (req as any).file;

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
          ${file ? `
            <div style="margin: 20px 0; padding: 15px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 5px;">
              <p style="margin: 0;"><strong>📎 Attached File:</strong> ${file.originalname}</p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #92400e;">File size: ${(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          ` : ''}
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>This email was sent from the Laswell Robotics quote request form.</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
            replyTo: contactEmail,
                attachments: file ? [{
                    filename: file.originalname,
                    content: file.buffer
                }] : []
    };

    if (process.env.EMAIL_USER) {
        await transporter.sendMail(mailOptions);
    } else {
        console.log('Email not configured, skipping email send.');
    }

    res.status(200).json({
        success: true,
        message: 'Quote request submitted successfully'
    });

} catch (error) {
    console.error('Error processing quote request:', error);
    res.status(500).json({
        error: 'Failed to submit quote request. Please try again later.'
    });
}
}
