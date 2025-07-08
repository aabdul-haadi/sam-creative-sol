/*
  # Fix RLS policies for consultation submissions

  1. Security Updates
    - Drop existing problematic policies on `consultation_submissions` table
    - Create new working policy for anonymous users to insert consultation requests
    - Ensure authenticated users can read consultation data

  2. Changes
    - Remove duplicate and conflicting INSERT policies
    - Add single, clear INSERT policy for anonymous users
    - Maintain SELECT policy for authenticated users
*/

-- Drop existing policies that might be conflicting
DROP POLICY IF EXISTS "Allow insert for all users" ON consultation_submissions;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON consultation_submissions;
DROP POLICY IF EXISTS "Allow public insert" ON consultation_submissions;

-- Create a single, clear INSERT policy for anonymous users
CREATE POLICY "Enable consultation submissions for anonymous users"
  ON consultation_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure the SELECT policy for authenticated users is properly configured
DROP POLICY IF EXISTS "Enable read for authenticated users" ON consultation_submissions;

CREATE POLICY "Enable read for authenticated users"
  ON consultation_submissions
  FOR SELECT
  TO authenticated
  USING (true);