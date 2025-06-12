const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors'); // For colored console output

dotenv.config();

const connectDB = async () => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        maxPoolSize: 10,
        socketTimeoutMS: 45000,
        family: 4, // Use IPv4, skip trying IPv6
    };

    try {
        console.log('Connecting to MongoDB...'.yellow);
        const conn = await mongoose.connect(process.env.MONGO_URL, options);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`.green.bold);
        
        // Create indexes after connection
        await createIndexes();
        
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`.red.bold);
        
        // Retry logic for production
        if (process.env.NODE_ENV === 'production') {
            console.log('Retrying connection in 5 seconds...'.yellow);
            setTimeout(connectDB, 5000);
        } else {
            process.exit(1);
        }
    }
};

async function createIndexes() {
    // Example: Create indexes for your models
    // await mongoose.model('Task').createIndexes();
}

// Event listeners
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB cluster'.green);
});

mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`.red);
});

mongoose.connection.on('disconnected', () => {
    console.warn('Mongoose disconnected from DB'.yellow);
});

// Graceful shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to app termination'.cyan);
    process.exit(0);
});

module.exports = connectDB;