import { Document, Model } from "mongoose";
import * as Mongoose from "mongoose";

const postSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
});
//how our post looks like
interface IPost {
  name: string;
  type: string;
}

interface IPostDocument extends IPost, Document {}
interface IPostModel extends Model<IPostDocument> {}

//postSchema->Document->Model

// const PostModel: IPostModel = Mongoose.model<IPostDocument>("post", postSchema);

const PostModel: IPostModel =
  Mongoose.models.post || Mongoose.model<IPostDocument>("post", postSchema);

export default PostModel;
