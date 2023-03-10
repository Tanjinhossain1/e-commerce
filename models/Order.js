const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    prodduct: [
        {
            productId: {type: String},
            quantity: {type: Number, default: 1}
        }
    ], 
    address: {type: String, required: true},
    amount: {tyep: Number,required: true},
    status: {type: String, default: 'Pending', required: true}
  }, {timestamps: true});
  export default mongoose.model('Order', OrderSchema);