import mongoose = require("mongoose");

const uri: string = "mongodb://127.0.0.1:27017/local";
mongoose.connect(uri, (err: any) => {
    if(err) {
        console.log(err.message);
    }else {
        console.log("Successfully connected to mongoDB");
    }
});


//matchingSchema
 export const findMatchSchema = new mongoose.Schema({
     name:{type:String, required: true},
     age:{type:Number, required: true},
     sex:{type:Number, required: true},
     interest:{type:String}
 });


 //the model
 const findMatch = mongoose.model('findMatch', findMatchSchema);
 export defualt findMatch;