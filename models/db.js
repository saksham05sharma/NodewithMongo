// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/StudentDB',
// err=>{
//     if(!err){
//         console.log('Connection Successful!!')
//     }else{
//         console.log('Error in Connection'+err)
//     }
// })


// require('./student.model')

// const mongoose = require('mongoose');

// async function connectToDatabase() {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/StudentDB', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('Connection Successful!!');
//     } catch (err) {
//         console.log('Error in Connection: ' + err);
//     }
// }

// connectToDatabase();

// require('./student.model');


const express = require('express');
const mongoose = require('mongoose');
const studentModel = require('./student.model'); // Example: import your Mongoose model

const app = express();

// Middleware and route setup
app.use(express.json()); // Parse JSON bodies

// MongoDB connection setup
mongoose.connect('mongodb+srv://sakshamsharma8982:uZhckiM2PhzGOkvQ@cluster0.xp9y2hx.mongodb.net/StudentDB')
.then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful MongoDB connection
    // app.listen(5000, () => {
    //     console.log(`Server is running on port 5000`);
    // });
})
.catch((error) => {
    console.error('MongoDB connection error:', error.message);
});

module.exports = app; // Export the Express app for testing or external use
