/*
  # Create consultation submissions table

  1. New Tables
    - `consultation_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `state` (text, required)
      - `country` (text, required)
      - `phone` (text, optional)
      - `project_description` (text, required)
      - `preferred_day` (text, required)
      - `preferred_time` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `consultation_submissions` table
    - Add policy for inserting consultation submissions
*/

CREATE TABLE IF NOT EXISTS consultation_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  state text NOT NULL,
  country text NOT NULL,
  phone text,
  project_description text NOT NULL,
  preferred_day text NOT NULL,
  preferred_time text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultation submissions (for public consultation form)
CREATE POLICY "Anyone can submit consultation requests"
  ON consultation_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read consultation submissions (for admin access)
CREATE POLICY "Authenticated users can read consultation submissions"
  ON consultation_submissions
  FOR SELECT
  TO authenticated
  USING (true);