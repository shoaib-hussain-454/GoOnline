const { asyncWrapper, apiResponse } = require("../../helper");
// const { TaskModel } = require("../../models/index")
const gTTS = require("gtts")

exports.textToSpeech = [
    asyncWrapper(async (req, res) => {
        const { speech } = req.body;
        const  gtts = new gTTS(speech, 'en');
        await gtts.save('uploads/Voice.mp3');
        let Data = { audioLink: "Voice.mp3"}
        return apiResponse.succesReponseWithData(res, `Successfully`, Data)
    })
]

