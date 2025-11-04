-- Make project-files bucket private
UPDATE storage.buckets 
SET public = false 
WHERE id = 'project-files';

-- Add RLS policies for storage.objects to control file access
CREATE POLICY "Users can upload own files"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'project-files' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can access own files"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'project-files' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Admins can access all files"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'project-files' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can upload files"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'project-files' 
  AND has_role(auth.uid(), 'admin'::app_role)
);