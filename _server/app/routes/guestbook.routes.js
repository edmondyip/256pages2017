module.exports = function (app) {

    var comments = require('../controllers/guestbook.controller.js');

    // Create a new Note
    app.post('/comments', comments.create);

    // Retrieve all Notes
    app.get('/comments', comments.findAll);

    // Retrieve a single Note with noteId
    app.get('/comments/:commentId', comments.findOne);

    // Update a Note with noteId
    app.put('/comments/:commentId', comments.update);

    // Delete a Note with noteId
    app.delete('/comments/:commentId', comments.delete);
}