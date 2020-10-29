const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');
const Schema = require('./models/schema')
// const postsRoutes = require('./routes/posts');

const db = require('./db/connection')
const PORT = process.env.PORT || 3000

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

// app.use('/api', postsRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send("Elections Back-end Root; Test CRUD in postman with localhost:3000/users"))

app.get('/users', async (req, res) => {
    try {
        const users = await Schema.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const users = await Schema.findById(id)
        if (!user) throw Error('User not found!')
        res.json(user)
    } catch (e) {
        console.log(e)
        res.send('User not found!')
    }
})

app.post('/users', async (req, res) => {
    try {
        const user = await new Schema(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

app.put('/users/:id', async (req, res) => {
    const { id } = req.params
    await Schema.findByIdAndUpdate(id, req.body, { new: true }, (error, user) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!user) {
            return res.status(404).json({ message: 'Post not found!' })
        }
        res.status(200).json(user)
    })
})

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Schema.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User deleted")
        }
        throw new Error("User not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
