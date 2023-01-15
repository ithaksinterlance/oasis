import nc from 'next-connect';
import Car from '../../../models/car.js';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const Cars = await Car.find({});
  await db.disconnect();
  res.send(Cars);
});

export default handler;
