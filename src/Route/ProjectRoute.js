const ProjectModel = require('../model/projectModel')
const projectRouter = require('express').Router()

// adding a post to database 
projectRouter.post('/', async (req, res) => {
    const { name, authId } = req.body
    try {
        const project = new ProjectModel({ name, authId })
        await project.save()
        res.status(200).send(project)
    } catch (error) {
        res.status(400).send({ error })
    }
})

// getting all post from database

// getting particular user posts 
projectRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await ProjectModel.find({ authId: id })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ error })
    }
})

module.exports = projectRouter