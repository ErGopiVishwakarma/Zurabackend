const EpisodeModel = require('../model/EpisodeModel')

const episodesRouter = require('express').Router()

// adding a post to database 
episodesRouter.post('/', async (req, res) => {
    const { name, description, projectId } = req.body
    try {
        const episodes = new EpisodeModel({ name, description, projectId })
        await episodes.save()
        res.status(200).send(episodes)
    } catch (error) {
        res.status(400).send({ error })
    }
})

// getting all post from database

// getting particular user posts 
episodesRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await EpisodeModel.find({ projectId: id })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ error })
    }
})

// edit episodes 
episodesRouter.patch('/:id', async (req, res) => {
    const { id,description } = req.params
    try {
        const data = await EpisodeModel.findByIdAndUpdate(id,{$set:{description:description}},{new:true})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ error })
    }
})

module.exports = episodesRouter