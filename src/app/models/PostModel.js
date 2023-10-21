import mongoose, { model, models } from 'mongoose';

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Post = models.Post || model('Post', postSchema);
export default Post;
