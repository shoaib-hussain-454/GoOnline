const { asyncWrapper, apiResponse } = require("../../helper");
// const { TaskModel } = require("../../models/index")
const gTTS = require("gtts");

exports.textToSpeech = [
    asyncWrapper(async (req, res) => {
        const { speech } = req.body;
        const  gtts = new gTTS(speech, 'en');

    //     fs.unlink('./uploads/Voice.mp3',function(err){
    //         if(err) return console.log(err);
    //         console.log('file deleted successfully');
    //    });  

       
        let nameOfAudio = `${Math.floor(new Date().getTime() / 1000)}Voice.mp3`
        await gtts.save(`uploads/${nameOfAudio}`);
        let Data = { audioLink: nameOfAudio}
        return apiResponse.succesReponseWithData(res, `Successfully`, Data)
    })
]

