import nc from 'next-connect';
import Car from '../../../models/car.js';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const cars = await Car.find({});
  await db.disconnect();
  res.send(cars);
});

handler.post(async (req, res) => {
  await db.connect();
  try {
    const {
      timestamp,
      date,
      year,
      make,
      model,
      origin,
      cartype,
      mileage,
      color,
      engineType,
      transmissionType,
      assembly,
      registeredin,
      sellertype,
      email,
      whatsappNo,
    } = req.body;
    var carcreated = new Car({
      timestamp,
      date,
      year,
      make,
      model,
      origin,
      cartype,
      mileage,
      color,
      engineType,
      transmissionType,
      assembly,
      registeredin,
      sellertype,
      email,
      whatsappNo,
    });
    console.log(carcreated);
    var carsend = await carcreated.save();
    await db.disconnect();
    console.log(carsend);
    return res.status(200).send(carsend);
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

export default handler;
