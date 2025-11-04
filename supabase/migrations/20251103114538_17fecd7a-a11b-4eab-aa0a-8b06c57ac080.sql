-- Fix uploads table: Restrict INSERT to authenticated users creating their own uploads
DROP POLICY IF EXISTS "Users can create uploads" ON public.uploads;

CREATE POLICY "Authenticated users can create own uploads"
ON public.uploads
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Fix user_roles table: Only admins can assign roles
CREATE POLICY "Only admins can assign roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));