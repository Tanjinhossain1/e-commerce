import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    availableQty: {type: Number, default: 1},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},

  }, {timestamps: true});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);


// const ProductSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     description: {type: String, required: true},
//     image: {type: String, required: true},
//     price: {type: Number, required: true},
//     category: {type: String, required: true},
//     availableQty: {type: Number, default: 1},
//     createdAt: {type: Date, default: Date.now},
//     updatedAt: {type: Date, default: Date.now},

//   }, {timestamps: true});

//   mongoose.model = {};
  
//   export default mongoose.model('Product', ProductSchema);