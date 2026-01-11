import { neon } from "@neondatabase/serverless";

// Vercel Serverless Function to handle volunteer form submission
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { captchaToken, nombres, apellidos, dni, celular, email, distrito, ayuda } = req.body;

  // Validate required fields including captcha token
  if (!captchaToken) {
    return res.status(400).json({ error: 'Token de verificación requerido' });
  }

  if (!nombres || !apellidos || !dni || !celular || !email || !distrito || !ayuda) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  // Verify reCAPTCHA token with Google
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

  if (!recaptchaSecret) {
    return res.status(500).json({ error: 'Error de configuración del servidor' });
  }

  try {
    // Verify the captcha token with reCAPTCHA v3
    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecret}&response=${captchaToken}`,
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return res.status(400).json({
        error: 'Verificación de captcha fallida',
        details: verifyData['error-codes']
      });
    }

    // reCAPTCHA v3 returns a score (0.0 - 1.0)
    // Higher score = more likely human, lower = more likely bot
    // Recommended threshold: 0.5
    if (verifyData.score < 0.5) {
      console.log('Low reCAPTCHA score:', verifyData.score);
      return res.status(400).json({
        error: 'Actividad sospechosa detectada. Por favor, intenta nuevamente.'
      });
    }

    console.log('reCAPTCHA score:', verifyData.score);

    // Check storage_DATABASE_URL environment variable
    if (!process.env.storage_DATABASE_URL) {
      console.error('storage_DATABASE_URL is not configured');
      return res.status(500).json({ error: 'Error de configuración del servidor' });
    }

    // Save to Neon database
    const sql = neon(process.env.storage_DATABASE_URL);

    console.log('Attempting to insert into database...');

    await sql`
      INSERT INTO volunteers (nombres, apellidos, dni, celular, email, distrito, ayuda, created_at)
      VALUES (${nombres}, ${apellidos}, ${dni}, ${celular}, ${email}, ${distrito}, ${ayuda}, NOW())
    `;

    console.log('Volunteer form submission saved to database:', {
      nombres,
      apellidos,
      dni,
      celular,
      email,
      distrito
    });

    return res.status(200).json({
      success: true,
      message: 'Formulario enviado correctamente'
    });

  } catch (error) {
    console.error('Error processing form:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return res.status(500).json({
      error: 'Error al procesar el formulario',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
