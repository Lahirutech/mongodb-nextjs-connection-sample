import { Document, Model } from "mongoose";
import * as Mongoose from "mongoose";

const postSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

interface IPost {
  name: string;
}

interface IPostDocument extends IPost, Document {}
interface IPostModel extends Model<IPostDocument> {}

// const PostModel: IPostModel = Mongoose.model<IPostDocument>("post", postSchema);

const PostModel: IPostModel =
  Mongoose.models.post || Mongoose.model<IPostDocument>("post", postSchema);

export default PostModel;
