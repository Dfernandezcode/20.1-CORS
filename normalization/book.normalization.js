const { mongoose } = require("mongoose");
const { connect } = require("../db.js");
const { Book } = require("../models/Book.js");

// Ensures parameters in DB are standardized across the DB
const bookNormalization = async () => {
  try {
    await connect();
    console.log("Connection achieved correctly.");

    const books = await Book.find();
    console.log(`Hemos recuperado ${books.length} marcas de la base de datos`);

    // Update data according to values required.
    // Even delete data that we don't want.
    for (let i = 0; i < books.length; i++) {
      // run the array
      const book = books[i];
      book.publisher.country = book.publisher.country.toUpperCase(); // change book.country to uppercase.
      await book.save();

      console.log(`${book.name} has been modified!`);
    }

    console.log("Modifying our book database!");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

bookNormalization();
