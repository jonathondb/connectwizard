// Vercel Serverless Function — logs searched device combos (demand data)
// and captures explicit guide requests. Writes to separate tabs in the lead sheet.
import { google } from 'googleapis';

const SHEET_ID = process.env.GOOGLE_SHEET_ID || '1nfOP05uBWfOQldBml1ICZzHRXg1E97cmQDMWVmh1jvs';

function getSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // type: "search" (silent demand logging) or "request" (explicit ask + email)
  const { type, deviceA, deviceB, email } = req.body;
  if (!deviceA || !deviceB) return res.status(400).json({ error: 'Both devices required' });

  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });

  try {
    const sheets = getSheets();

    if (type === 'request') {
      // Explicit "build me this guide" request, with optional email
      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: 'Requests!A:D',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [[timestamp, deviceA, deviceB, email || '']] },
      });
    } else {
      // Silent demand logging — every generated combo
      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: 'Searches!A:C',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [[timestamp, deviceA, deviceB]] },
      });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Demand log error:', err);
    // Non-blocking: never break the user experience over logging
    res.status(200).json({ success: false });
  }
}
