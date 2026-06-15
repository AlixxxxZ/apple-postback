export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data, signature } = req.body;

    if (!data || !signature) {
      return res.status(400).json({ error: 'Missing data or signature' });
    }

    const dataString = Buffer.from(data, 'base64').toString('utf-8');
    const dataJson = JSON.parse(dataString);

    console.log('Postback received:', JSON.stringify(dataJson));

    return res.status(200).json({ status: 'success' });

  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
