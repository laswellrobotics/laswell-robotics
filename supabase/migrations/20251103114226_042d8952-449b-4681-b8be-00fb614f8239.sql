-- Drop the existing permissive INSERT policy
DROP POLICY IF EXISTS "Users can create requests" ON public.service_requests;

-- Create a new INSERT policy that requires authentication and user_id match
CREATE POLICY "Authenticated users can create own requests"
ON public.service_requests
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);