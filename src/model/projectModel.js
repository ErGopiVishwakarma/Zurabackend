const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: { type: String, default: '' },
    authId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
}, {
    timestamps: true
})

const ProjectModel = mongoose.model('project', projectSchema)

module.exports = ProjectModel;