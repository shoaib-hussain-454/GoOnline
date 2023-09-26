const { asyncWrapper, apiResponse } = require("../../helper");
// const { TaskModel } = require("../../models/index")
const gTTS = require("gtts");
const fs = require("fs");

exports.textToSpeech = [
    asyncWrapper(async (req, res) => {
        const { speech } = req.body;
        const  gtts = new gTTS(speech, 'en');

        fs.unlink('./uploads/Voice.mp3',function(err){
            if(err) return console.log(err);
            console.log('file deleted successfully');
       });  

        await gtts.save('uploads/Voice.mp3');
        let Data = { audioLink: "Voice.mp3"}
        return apiResponse.succesReponseWithData(res, `Successfully`, Data)
    })
]

