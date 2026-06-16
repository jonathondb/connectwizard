// Vercel Serverless Function — proxies Claude API so key stays server-side
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { deviceA, deviceB } = req.body;

  if (!deviceA || !deviceB) {
    return res.status(400).json({ error: 'deviceA and deviceB are required' });
  }

  const prompt = `You are a device connectivity expert. A user wants to connect "${deviceA}" to "${deviceB}".
Respond ONLY with a valid JSON object (no markdown, no backticks, no extra text):
{
  "deviceA": "${deviceA}",
  "deviceB": "${deviceB}",
  "methods": [
    {
      "name": "Method name e.g. HDMI / Bluetooth / USB-C",
      "type": "wired OR wireless",
      "steps": ["Step 1","Step 2","Step 3"],
      "parts": [{ "name": "Part name", "searchQuery": "Amazon search query" }]
    }
  ],
  "tips": ["Tip 1","Tip 2"]
}
Include all realistic connection methods. If no part is needed, parts=[]. Include 2-4 methods. Be specific and practical.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();
    const text = data.content?.[0]?.text || '';
    const parsed = JSON.parse(text.replace(/```json|```/g, '').trim());

    res.status(200).json(parsed);
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: 'Failed to generate guide' });
  }
}
