const mongoose = require("mongoose");
const { Schema } = mongoose;

const ssStaffSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "User",
        "admin",
        "staff",
        "Technician",
        "Practioner",
        "Assistant",
        "Officer",
      ],
      default: "staff",
    },
    dateOfBirth: {
      type: Date,
    },
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    profilePicture: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "suspended", "deleted"],
      default: "active",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const SSStaffModel = mongoose.model("SSStaff", ssStaffSchema);
module.exports = SSStaffModel;
