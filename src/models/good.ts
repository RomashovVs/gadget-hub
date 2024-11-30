import mongoose from 'mongoose';

const goodSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    img_src: {
        type: String,
        required: true,
    },
    hit_label: {
        type: Boolean,
    },
    new_label: {
        type: Boolean,
    },
    price: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    color: {
        type: Array,
    },
    type: {
        type: Array,
    },
});

if (mongoose.models?.Good) {
    delete mongoose.models.Good;
}

export const Good = mongoose.model('Good', goodSchema);
