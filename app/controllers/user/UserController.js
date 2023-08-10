const { UserModel } = require("../../models/index");
const { apiResponse, asyncWrapper } = require("../../helper/index");
const { createCustomeError } = require("./../../error/CustomeError");

exports.getSingleUser = [
    asyncWrapper (async (req, res, next) => {
            const { userId } = req.params;
            const userDetail = await UserModel.findOne({ _id: userId }, { first_name: 1, last_name: 1, email: 1, dob: 1, role: 1 })
            if(!userDetail){
                return next(createCustomeError(`No user with user id : ${userId}`, 404))
            }
            return apiResponse.succesReponseWithData(res, `User details get successfully`, userDetail)
    })
]

exports.updateSingleUser = [
    asyncWrapper (async (req, res, next) => {
            const { userId } = req.params;
            const updates = Object.keys(req.body);

            const allowedUpdates =  [ 'first_name', 'last_name', 'dob']
            const isValidOprations =  updates.every((update)=> allowedUpdates.includes(update));

            if(!isValidOprations){
                return next(createCustomeError(`Invalid Updates!`, 400))
            }

            const userDetail = await UserModel.findByIdAndUpdate({ _id: userId }, req.body, { new:true, runValidators:true })

            if(!userDetail){
                return next(createCustomeError(`No user with user id : ${userId}`, 404))
            }
            return apiResponse.succesReponseWithData(res, `User updated successfully`, userDetail)
    })
]

exports.deleteSingleUser = [
    asyncWrapper(async (req, res, next) => {
            const { userId } = req.params;
            const userDetail = await UserModel.deleteOne({ _id: userId })
            if(!userDetail){
                return next(createCustomeError(`No user with user id : ${userId}`, 404))
            }
    })
]


exports.listOfUser= [
    asyncWrapper(async (req, res, next) => {
            const user = await UserModel.find();
            return apiResponse.succesReponseWithData(res, `User updated successfully`, user)
    })
]