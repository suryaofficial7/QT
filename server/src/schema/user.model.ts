import mongoose from "mongoose";
export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  contact: string;
  displayName?: string;
  subscription?: number;
  img?: string | null;
  bio?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema= new mongoose.Schema<IUser>(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },

    contact: {
      type: String,
      require: true,
    },

    displayName: {
      type: String,
    },

    subscription: {
      type: Number,
      default: 0,
    },

    img : {
      type:String,
      default:null
    },

    bio:{
type:String,
default:"I am A user of QuickTrack..."
    }
    

  },

  { timestamps: true }
);

export const userModel = mongoose.model("user", userSchema);

