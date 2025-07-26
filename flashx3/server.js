/*
    Project Name: FLASHX3
    Contributors:
        - Meghana Saisri Bisa
        - Mitha M K
        - Mrunal Manjunath Kudtarkar
*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({origin:'http://localhost:3001'}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/flashcardApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB:',err));

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true, required: true},
    password: String
});

const User = mongoose.model('User',userSchema);

app.post('/signup',async(req,res) => {
    const {name, email, password} = req.body;

    try
    {
        const existingUser = await User.findOne({email});

        if(existingUser)
        {
            return res.status(400).send('User already exists');
        }

        const newUser = new User({name, email, password});

        await newUser.save();

        console.log('User signed up',{name, email});
        res.status(201).send('User signed up successfully!');
    }catch(error){
        console.error('Error during sign-up:',error);
        res.status(500).send('Internal server error');
    }
});

app.post('/login',async(req,res) => {
    const {email, password} = req.body;

    try 
    {
        const user = await User.findOne({email});
        if(!user || user.password !== password)
        {
            return res.status(401).send('Invalid email or password');
        }

        console.log('User logged in: ',{email});
        res.status(200).send('User logged in successfully!');
    }catch(error){
        console.log('Error during login:',error);
        res.status(500).send('Internal server error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});