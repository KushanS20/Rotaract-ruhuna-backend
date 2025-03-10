const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    images: [{ type: String }]
});

const AvenueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String },
    projects: [ProjectSchema]
});

const Avenue = mongoose.model('Avenue', AvenueSchema);

module.exports = Avenue;
