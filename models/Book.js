const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allowedCountries = ["SPAIN", "ITALY", "GERMANY", "COLOMBIA", "UNITED KINGDOM", "USA"];
// Creamos el schema del usuario
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 36,
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: false,
      minLength: 3,
      maxLength: 36,
      trim: true,
    },
    pages: {
      type: Number,
      required: false,
      minLength: 1,
      maxLength: 3000,
      trim: true,
    },
    publisher: {
      type: {
        name: {
          type: String,
          required: true,
          minLength: 3,
          maxLength: 36,
          trim: true,
        },
        country: {
          type: String,
          required: true,
          minLength: 3,
          maxLength: 36,
          enum: allowedCountries,
          trim: true,
        },
      },
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
    trim: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = { Book };
