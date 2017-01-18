import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    }
});

export default mongoose.model('User', UserSchema);