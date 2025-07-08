/*
  # Fix consultation submissions RLS policies

  1. Security Updates
    - Drop all existing conflicting policies on consultation_submissions table
    - Create clean, working policies for anonymous submissions
    - Ensure proper access control for reading submissions

  2. Changes
    - Remove all existing INSERT policies that might be conflicting
    - Create single INSERT policy for anonymous users (anon role)
    - Create single SELECT policy for authenticated users
    - Add public role access for form submissions
*/

-- First, drop ALL existing policies on consultation_submissions to start clean
DROP POLICY IF EXISTS "Enable consultation submissions for anonymous users" ON consultation_submissions;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON consultation_submissions;
DROP POLICY IF EXISTS "Allow insert for all users" ON consultation_submissions;
DROP POLICY IF EXISTS "Allow public insert" ON consultation_submissions;
DROP POLICY IF EXISTS "Anyone can submit consultation requests" ON consultation_submissions;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON consultation_submissions;
DROP POLICY IF EXISTS "Authenticated users can read consultation submissions" ON consultation_submissions;

-- Create a single INSERT policy that allows both anon and public roles
CREATE POLICY "Allow consultation form submissions"
  ON consultation_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create a SELECT policy for authenticated users to read submissions
CREATE POLICY "Authenticated users can view consultation submissions"
  ON consultation_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Ensure RLS is enabled
ALTER TABLE consultation_submissions ENABLE ROW LEVEL SECURITY;