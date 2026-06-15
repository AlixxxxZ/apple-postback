export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('=== Event Postback ===');
    console.log('Time:', new Date().toISOString());

    const data = req.query;

    console.log('Event:', JSON.stringify({
      campaign_id: data.campaign_id,
      campaign: data.campaign,
      country_code: data.country_code,
      af_siteid: data.af_siteid,
      app_id: data.app_id,
      app_id_ios: data.app_id_ios,
      platform: data.platform,
      ad: data.ad,
      ad_id: data.ad_id,
      adset: data.adset,
      adset_id: data.adset_id,
      install_time: data.install_time,
      event_name: data.event_name,
      event_revenue: data.event_revenue,
      event_revenue_currency: data.event_revenue_currency,
      action_type: data.action_type,
      skad_coarse_value: data.skad_coarse_value,
      skad_sequence_index: data.skad_sequence_index,
      skad_transaction_id: data.skad_transaction_id
    }));

    return res.status(200).json({ status: 'success' });

  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
