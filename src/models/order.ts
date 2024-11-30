import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    number: {type: String, required: true},
    at: {type: Date, required: true},
    countDevices: {type: Number, required: true},
    totalCost: {type: Number, required: true},
});

if (mongoose.models?.Order) {
    delete mongoose.models.Order;
}

export const Order = mongoose.model('Order', orderSchema);
