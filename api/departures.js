export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { stop } = req.query;

  if (!stop) {
    return res.status(400).json({ error: 'Missing stop parameter' });
  }

  try {
    const response = await fetch(`https://v0.ovapi.nl/tpc/${stop}`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'OVTransit/1.0',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'OVapi error: ' + response.status });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
