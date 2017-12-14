var mongoose = require('mongoose');

var GuestBookSchema = mongoose.Schema({
    name: String,
    email: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Guestbook', GuestBookSchema);