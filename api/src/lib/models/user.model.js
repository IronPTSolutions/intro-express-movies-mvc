import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    birthDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          const age =
            (Date.now() - value.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
          return age >= 18;
        },
        message: "User must be at least 18 years old",
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.password;
        delete ret._id;
        return ret;
      },
    },
  },
);

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const User = model("User", userSchema);

export default User;
