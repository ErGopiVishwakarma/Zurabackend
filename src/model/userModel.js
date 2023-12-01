const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: { type: String, default: '' },
    email: { type: String, default: "" },
    profile: { type: String, default: '' }
}, {
    timestamps: true
})

const UserModel = mongoose.model('user',userSchema)

module.exports = UserModel;