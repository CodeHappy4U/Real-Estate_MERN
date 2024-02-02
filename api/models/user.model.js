import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // USE FOR 1. CREATING TIME OF CRAFTING A/C 2.UPDATE THE INFO (REQUIRE-TIMESTAMPS)

const User = mongoose.model('User', userSchema);

export default User;