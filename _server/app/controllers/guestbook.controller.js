//Start
var GuestBook = require('../models/guestbook.model.js')

exports.create = function (req, res) {
    // Create and Save a new Note
    if (!req.body.content) {
        res.status(400).send({
            message: "Please leave some comment."
        });
    }
    var book = new GuestBook({
        name: req.body.name || "Someone",
        email: req.body.email || "No email",
        content: req.body.content
    });

    book.save(function (err, data) {
        console.log(data);
        if (err) {
            console.log(err);
            res.status(500).send({
                message: "Some error occurred while creating the comment."
            });
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.
    GuestBook.find(function (err, comments) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving comments."
            });
        } else {
            res.send(comments);
        }
    });
};

exports.findOne = function (req, res) {
    // Find a single note with a noteId
    GuestBook.findById(req.params.commentId, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Could not retrieve note with id " + req.params.commentId
            });
        } else {
            res.send(data);
        }
    });
};

exports.update = function (req, res) {
    // Update a note identified by the noteId in the request
    GuestBook.findById(req.params.commentId, function (err, book) {
        if (err) {
            res.status(500).send({
                message: "Could not find a note with id " + req.params.commentId
            });
        }

        book.name = req.body.name;
        book.email = req.body.email;
        book.content = req.body.content;

        book.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: "Could not update note with id " + req.params.commentId
                });
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function (req, res) {
    // Delete a note with the specified noteId in the request
    GuestBook.remove({
        _id: req.params.commentId
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Could not delete note with id " + req.params.id
            });
        } else {
            res.send({
                message: "Note deleted successfully!"
            })
        }
    });
};