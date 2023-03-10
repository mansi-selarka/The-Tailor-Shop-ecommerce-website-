
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId : {type:String, required:True},

    products : [
        {
            productId : {type:String},
            qunatity: {type:Number, default:1},

        }
    ],
    address: {type:String, required:true},
    amount: {type:Number, required:true},
    status: {type:String, default:'Pending', required:true}
  },{timeStamps:true});
  
  mongoose.models = {}

  export default mongoose.model("Order",OrderSchema)