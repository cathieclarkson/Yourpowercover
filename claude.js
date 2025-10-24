// Simple backend proxy for Anthropic (Claude).
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { prompt, token } = req.body || {};
  const demoToken = process.env.DEMO_TOKEN || 'DEMO_TOKEN';
  const clientToken = process.env.CLIENT_TOKEN || 'CLIENT_TOKEN';
  if (!token) return res.status(401).json({ error: 'Missing token' });
  if (![demoToken, clientToken].includes(token) && !token.startsWith('paid_')) {
    return res.status(403).json({ error: 'Invalid token' });
  }
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 8000,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error('Claude proxy error', err);
    return res.status(500).json({ error: 'Claude proxy failed' });
  }
}