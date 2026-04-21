import express from 'express';
const router = express.Router();

router.post('/api/masterclass-waitlist', async (req, res) => {
  const { name, email } = req.body;
  const API_KEY = process.env.BREVO_API_KEY || '';

  try {
    // Add to Brevo list (List ID: 5)
    const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || ''
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name },
        listIds: [5],
        updateEnabled: true
      })
    });

    let contactResult: any = {};
    if (contactResponse.status !== 204) {
      contactResult = await contactResponse.json();
      console.log('Contact result (Masterclass):', JSON.stringify(contactResult));
    } else {
      console.log('Contact already exists and was updated (204 No Content) for Masterclass');
    }

    if (!contactResponse.ok && contactResponse.status !== 204) {
      const isDuplicate = contactResult.code === 'duplicate_parameter' || 
                        contactResult.message?.toLowerCase().includes('already exist');
      
      if (!isDuplicate) {
        console.error('Brevo Contact Error (Masterclass):', contactResult);
        return res.status(contactResponse.status).json({ 
          error: 'Brevo Contact Error', 
          details: contactResult 
        });
      } else {
        console.log('Proceeding with existing contact for Masterclass...');
      }
    }

    // Send transactional email (Template ID: 4)
    const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || ''
      },
      body: JSON.stringify({
        sender: { name: "Tashja | Conscious Creators", email: "natashja.denteuling@gmail.com" },
        to: [{ email, name }],
        templateId: 4,
        params: { FIRSTNAME: name }
      })
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.json();
      console.error('Brevo Email Error (Masterclass):', error);
      return res.status(emailResponse.status).json({ 
        error: 'Brevo Email Error', 
        details: error 
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Masterclass Waitlist Error:', error);
    res.status(500).json({ error: 'Failed to join waitlist' });
  }
});

export default router;
