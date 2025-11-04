-- Remove overly permissive public storage policies that allow anonymous access
DO $$
BEGIN
  -- Drop public SELECT policy if it exists
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
      AND tablename = 'objects' 
      AND policyname = 'Files are publicly accessible'
  ) THEN
    DROP POLICY "Files are publicly accessible" ON storage.objects;
  END IF;

  -- Drop public INSERT policy if it exists
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
      AND tablename = 'objects' 
      AND policyname = 'Anyone can upload files'
  ) THEN
    DROP POLICY "Anyone can upload files" ON storage.objects;
  END IF;
END $$;

-- Ensure the project-files bucket remains private (idempotent)
UPDATE storage.buckets 
SET public = false 
WHERE id = 'project-files';