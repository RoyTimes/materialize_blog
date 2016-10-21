import mongoose, {Schema} from 'mongoose';
var deepPopulate = require('mongoose-deep-populate')(mongoose);

const CategorySchema = new Schema({
	title: String, index: Number,
	password: String, logo: String
});
const AuthorSchema = new Schema({
	nick_name: String, avatar: String, full_name: String
});
const PostSchema = new Schema({
	category: {type: Schema.Types.ObjectId, ref: "category"},
	author: {type: Schema.Types.ObjectId, ref: "author"},
	title: String, time: {type: Date, default: Date.now},
	perfix: String, excerpt: String, markdown: String
});
const PageSchema = new Schema({
	author: {type: Schema.Types.ObjectId, ref: "author"},
	title: String, markdown: String, time: {type: Date, default: Date.now}
});

CategorySchema.plugin(deepPopulate);
AuthorSchema.plugin(deepPopulate);
PostSchema.plugin(deepPopulate);
PageSchema.plugin(deepPopulate);

const Category = mongoose.model('category', CategorySchema);
const Author = mongoose.model('author', AuthorSchema);
const Post = mongoose.model('post', PostSchema);
const Page = mongoose.model('page', PageSchema);

// export module
export { Category, Author, Post, Page };
