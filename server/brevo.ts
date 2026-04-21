import express from 'express';
const router = express.Router();

router.post('/api/subscribe', async (req, res) => {
  const { name, email } = req.body;
  
  const API_KEY = process.env.BREVO_API_KEY || '';

  try {
    // Add contact to list
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
        listIds: [2],
        updateEnabled: true
      })
    });

    let contactResult: any = {};
    if (contactResponse.status !== 204) {
      contactResult = await contactResponse.json();
      console.log('Contact result:', JSON.stringify(contactResult));
    } else {
      console.log('Contact already exists and was updated (204 No Content)');
    }

    if (!contactResponse.ok && contactResponse.status !== 204) {
      // If contact already exists, Brevo might return an error even with updateEnabled in some cases,
      // or we just want to proceed if they are already there.
      const isDuplicate = contactResult.code === 'duplicate_parameter' || 
                        contactResult.message?.toLowerCase().includes('already exist');
      
      if (!isDuplicate) {
        console.error('Brevo Contact Error:', contactResult);
        return res.status(contactResponse.status).json({ 
          error: 'Brevo Contact Error', 
          details: contactResult 
        });
      } else {
        console.log('Proceeding with existing contact...');
      }
    }

    // Send welcome email with guide
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
        templateId: 1,
        params: { FIRSTNAME: name }
      })
    });

    const emailResult = await emailResponse.json();
    console.log('Email result:', JSON.stringify(emailResult));

    if (!emailResponse.ok) {
      console.error('Brevo Email Error:', emailResult);
      return res.status(emailResponse.status).json({ 
        error: 'Brevo Email Error', 
        details: emailResult 
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Subscription Error:', error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

export default router;
