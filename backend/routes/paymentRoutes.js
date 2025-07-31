const express = require('express');
const router = express.Router();
const mercadopago = require('mercadopago');

// Asegúrate de tener esta variable definida en Railway como MERCADOPAGO_ACCESS_TOKEN
mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
});

// Ruta para crear preferencia de pago
router.post('/create_preference', async (req, res) => {
  try {
    console.log("Datos recibidos del frontend:", req.body);

    const items = req.body.items.map(item => ({
      title: item.product.name,
      unit_price: Number(item.product.price),
      quantity: item.quantity,
      currency_id: "PEN"
    }));

    console.log("Items para MercadoPago:", items);

    const preference = await mercadopago.preferences.create({
      items,
      back_urls: {
        success: "https://ecommerce-production-c45a.up.railway.app/success",
        failure: "https://ecommerce-production-c45a.up.railway.app/failure",
        pending: "https://ecommerce-production-c45a.up.railway.app/pending"
      },
      auto_return: "approved" // opcional, redirige automáticamente al success
    });

    res.json({ init_point: preference.body.init_point });

  } catch (error) {
    console.error("Error al crear preferencia:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
