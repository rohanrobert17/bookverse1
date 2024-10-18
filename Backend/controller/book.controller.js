import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    console.log("Received request for books"); // Log request
    try {
        const books = await Book.find();
        console.log("Books found: ", books); // Log found books
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
