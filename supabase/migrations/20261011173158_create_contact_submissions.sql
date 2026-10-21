/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `project_type` (text, not null) — type of project inquiry (e.g. "Web Development", "E-Commerce", "Dashboard", "API Integration", "Other")
  - `message` (text, not null) — the project inquiry message
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT so the public contact form (no login) can submit.
- Allow anon + authenticated SELECT so submissions are publicly readable (single-tenant portfolio, intentionally public).
- No UPDATE or DELETE policies needed — submissions are append-only.

3. Notes
- This is a portfolio landing page with no sign-in flow. The contact form is public.
- Using `TO anon, authenticated` so the anon-key frontend client can insert submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_select_contact_submissions"
  ON contact_submissions FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
