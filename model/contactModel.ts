import mongoose from "mongoose";

interface iContact {
 name: string,
 phoneNumber: string,
 type : string,
 contactAvatar

}

interface iContactData extends iContact, mongoose.Document {}

const contactModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
     
    },

    contactAvatar:{
type : String,
toUpperCase: String
    },
type: {
      type: String,
    },
    phoneNumber: {
        type: String,
        unique : true,
        required : true,
        trim : true,
        max : 11
      },
    createdAt: { type: Date, default: Date.now },
  
  },
  { timestamps: true }
);

export default mongoose.model<iContactData>("contacts", contactModel);
