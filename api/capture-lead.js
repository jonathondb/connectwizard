// Vercel Serverless Function — writes Name + Email to Google Sheets
import { google } from 'googleapis';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email required' });

  try {
    // Auth via service account credentials stored in env vars
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID || '1nfOP05uBWfOQldBml1ICZzHRXg1E97cmQDMWVmh1jvs',
      range: 'Leads!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, name, email, 'ConnectWizard']],
      },
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Sheets error:', err);
    res.status(500).json({ error: 'Failed to save lead' });
  }
}
