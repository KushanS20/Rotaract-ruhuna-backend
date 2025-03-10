const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, "First name is required"],
    },
    lName: {
        type: String,
        required: [true, "Last name is required"],
    },
    clubIdNumber: {
        type: String,
        required: [true, "Club ID is required"],
        unique: [true, "Club ID should be unique"],
        immutable: true,
    },
    StudentNumber: {
        type: String,
        required: [true, "Student ID is required"],
        unique: [true, "Student Number should be unique"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email should be unique"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
});

AdminSchema.set('id', false);
AdminSchema.virtual('id').get(function() {
    return this.clubIdNumber;
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
