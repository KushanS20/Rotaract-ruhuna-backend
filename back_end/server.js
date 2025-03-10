const app = require('./index');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3001;

const startServer = async () => {
    try {
        await mongoose.connect(uri, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
        app.listen(port, '0.0.0.0', () => {
            console.log(`Server started on port ${port}`);
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

startServer();
