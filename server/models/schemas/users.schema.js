const mongoose = require('mongoose');
let UsersSchema = new mongoose.Schema({
    user_id: { type: String, unique: true, requried: true },
    first_name: String,
    last_name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    created_at: Date,
    updated_at: Date
});
mongoose.model('Users', UsersSchema);