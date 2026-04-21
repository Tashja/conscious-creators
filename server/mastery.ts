import express from 'express';
const router = express.Router();

router.post('/api/mastery-waitlist', async (req, res) => {
  const { name, email, phone } = req.body;
  const API_KEY = process.env.BREVO_API_KEY || '';

  try {
    // Add to Brevo list (List ID: 6 for Mastery Waitlist)
    const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': API_KEY
      },
      body: JSON.stringify({
        email,
        attributes: { 
          FIRSTNAME: name,
          ...(phone ? { PHONE: phone } : {})
        },
        listIds: [6],
        updateEnabled: true
      })
    });

    let contactResult: any = {};
    if (contactResponse.status !== 204) {
      const responseText = await contactResponse.text();
      try {
        contactResult = JSON.parse(responseText);
      } catch (e) {
        contactResult = { message: responseText };
      }
    }

    if (!contactResponse.ok && contactResponse.status !== 204) {
      const isDuplicate = contactResult.code === 'duplicate_parameter' || 
                        contactResult.message?.toLowerCase().includes('already exist');
      
      if (!isDuplicate) {
        console.error('Brevo Contact Error (Mastery):', contactResult);
        return res.status(contactResponse.status).json({ 
          error: 'Brevo Contact Error', 
          details: contactResult 
        });
      }
    }

    // Success if OK or 204 or Duplicate
    res.json({ success: true });
  } catch (error) {
    console.error('Mastery Waitlist Error:', error);
    res.status(500).json({ error: 'Failed to join waitlist' });
  }
});

export default router;
