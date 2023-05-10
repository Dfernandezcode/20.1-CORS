const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allowedCountries = ["SPAIN", "RUSSIA", "ITALY", "CZECHOSLOVAKIA", "FRANCE", "GERMANY", "ARGENTINA", "COLOMBIA", "UNITED KINGDOM", "ENGLAND", "USA", "JAPAN", "CHINA", "INDIA"];

/*
--------- GET DATE BY CURRENT YEAR. ---------
const currentDate = new Date(); // consult current date.
const currentYear = currentDate.getFullYear(); // Specific function for obtaining current year.
*/

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
      min: [1, "Minimum page count is 1"],
      max: [3000, "Maximum page count is 3000"],
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
          uppercase: true,
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
