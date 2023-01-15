import mongoose from 'mongoose';
const CarSchema = new mongoose.Schema(
  {
    timestamp: { type: String, required: true },
    date: { type: String, required: true, unique: true },
    year: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    origin: { type: String, required: true },
    cartype: { type: String, required: true },
    mileage: { type: String, required: true },
    color: { type: String, required: true },
    enginetype: { type: String, required: true },
    transmissiontype: { type: String, required: true },
    assembly: { type: String, required: true },
    registeredin: { type: String, required: true },
    sellertype: { type: String, required: true },
    email: { type: String, required: true },
    whatsappno: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Car = mongoose.models.Car || mongoose.model('Car', CarSchema);

export default Car;
