const Board = require("../models/board");

const getBoard = async (req, res) => {
  try {
    console.log(req.userId);
    const boards = await Board.find();

    res.status(200).json({ boards });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Couldn't fetch, Try Again!" });
  }
};

const createBoard = async (req, res) => {
  try {
    const userId = req.body.userId;
    const title = req.body.title;
    const dateCreated = req.body.dateCreated;
    console.log(userId, title, dateCreated);
    const newBoard = new Board({
      creator: userId,
      title: title,
      dateCreated: dateCreated,
    });

    console.log(newBoard);
    await newBoard.save();
    return res.status(200).json({ message: "Board Created" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Couldn't create Board, Try Again!" });
  }
};

const updateBoard = async (req, res) => {
  try {
    console.log(req.query.id);
    const title = req.body.title;

    const lastModified = req.body.lastModified;

    const updatedBoard = await Board.findByIdAndUpdate(
      req.query.id,
      { title: title, lastModified: lastModified }, // Update the title and lastModified fields
      { new: true } // This option returns the updated document
    );
    console.log(updateBoard);
    if (!updatedBoard) {
      return res.status(404).json({ message: "Board not found" });
    }

    return res.status(200).json({ message: "Board updated successfully", board: updatedBoard });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Couldn't update Board, Try Again!" });
  }
};

const deleteBoard = async (req, res) => {
  try {
    console.log(req.query.id);
    const deletedBoard = await Board.findByIdAndDelete(req.query.id);
    if (!deletedBoard) {
      return res.status(404).json({ message: "Board not found" });
    }
    return res.status(200).json({ message: "Board deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Couldn't Delete Board, Try Again!" });
  }
};

module.exports = {
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
