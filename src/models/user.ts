import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

if (mongoose.models?.User) {
    delete mongoose.models.User;
}

export const User = mongoose.model('User', userSchema);
