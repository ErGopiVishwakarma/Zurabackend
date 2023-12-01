const mongoose = require('mongoose')

const episodeSchema = mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: "" },
    projectId: {type:mongoose.Schema.Types.ObjectId,ref:'project'}
}, {
    timestamps: true
})

const EpisodeModel = mongoose.model('episode',episodeSchema)

module.exports = EpisodeModel