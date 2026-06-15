export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('=== In-app Event Postback Received ===');
    console.log('Time:', new Date().toISOString());
    console.log('Body:', JSON.stringify(req.body));

    return res.status(200).json({ status: 'success' });

  } catch (error) {
    console.error('Event postback error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
