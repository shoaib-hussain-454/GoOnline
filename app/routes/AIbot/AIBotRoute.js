const { textToSpeech } = require("../../controllers/AIBot/AIBotController");


module.exports = (app) => {
    app.post("/api/ai-bot", textToSpeech);
    // app.patch("/api/user/updatesingleuser/:userId", updateSingleUser);
    // app.delete("/api/user/deletesingleuser/:userId", deleteSingleUser);
}