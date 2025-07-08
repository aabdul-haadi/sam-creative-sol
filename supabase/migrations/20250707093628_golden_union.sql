/*
  # Fix Contact Submissions RLS Policy

  1. Security Updates
    - Drop existing INSERT policy for contact_submissions
    - Create new INSERT policy with proper conditions for anonymous users
    - Ensure anonymous users can submit contact forms without authentication

  2. Changes
    - Remove restrictive policy conditions that might be blocking anonymous submissions
    - Allow all anonymous users to insert contact form data
    - Maintain security by only allowing INSERT operations for anon role
*/

-- Drop existing INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;

-- Create new INSERT policy that explicitly allows anonymous submissions
CREATE POLICY "Allow anonymous contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure the policy for authenticated users to read submissions still exists
DROP POLICY IF EXISTS "Authenticated users can read contact submissions" ON contact_submissions;

CREATE POLICY "Authenticated users can read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);