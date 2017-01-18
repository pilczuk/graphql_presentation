import mongoose from 'mongoose';

var commentSchema = new mongoose.Schema({
    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model('Comment', commentSchema);