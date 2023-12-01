const express = require('express')
const cors = require('cors')
const connection = require('./Config/db')
const userRouter = require('./Route/userRoute')
const projectRouter = require('./Route/ProjectRoute')
const episodesRouter = require('./Route/episodeRoute')
const multer = require('multer')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'));
// route for each section
app.use('/user', userRouter)
app.use('/project', projectRouter)
app.use('/episode', episodesRouter)

// uploading the image using multer 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./public")
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage })

app.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).send(JSON.stringify(req.file.filename))
})

app.listen(8080, async () => {
    try {
        await connection
        console.log('connected to db')
    } catch (error) {
        console.log(error)
    }
})