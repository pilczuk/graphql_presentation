import mongoose from 'mongoose';

var ArticleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

export default mongoose.model('Article', ArticleSchema);