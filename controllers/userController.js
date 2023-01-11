
const User=require("../models/User")
const addUser = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;

    const data = await User.create({
        name: name,
        email: email,
        phoneNo: phoneNo
    });
    res.status(201).json({
        newUserDetail: data
    });
}

const getUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        console.log('err getting');
        res.status(500).json({
            err: err
        })
    }
}
const deleteUser = async (req, res, next) => {

    try {
        let userId = req.params.id;
        if (!userId) {
            res.status(400).json({
                err: 'Id missing!!'
            })
        }
        await User.destroy({
            where: {
                id: userId
            }
        });
        console.log('delete working');

        res.sendStatus(200);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            err: 'isErrored deletete section'
        })
    }
}
module.exports = {
    addUser,
    getUser,
    deleteUser
}