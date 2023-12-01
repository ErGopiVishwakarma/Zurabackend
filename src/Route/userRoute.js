const userRouter = require("express").Router();
const jwt = require('jsonwebtoken');
const UserModel = require("../model/userModel");

userRouter.post('/', async (req, res) => {
    const { email } = req.body

    try {
        const users = await UserModel.find({ email })
        console.log(users)
        if (users.length > 0) {
            res.status(200).send(users[0])
        } else {
            const user = new UserModel({ email })
            await user.save()
            res.status(200).send(user)
        }
    }
    catch (error) {
        res.status(400).send({ msg: error })
    }
})

module.exports = userRouter