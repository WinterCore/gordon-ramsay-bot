import { readdirSync } from "fs";
import { resolve }     from "path";

import { AUDIO_INSULTS_BASE_PATH } from "../consts.mjs";
import { randomInt }               from "../helpers.mjs";

const audioFiles = readdirSync(AUDIO_INSULTS_BASE_PATH)
    .map(file => resolve(AUDIO_INSULTS_BASE_PATH, file));
const audioFilesLength = audioFiles.length;


const curse = async (msg) => {
    const { channel: voiceChannel } = msg.member.voice;
    if (!voiceChannel) {
        await msg.reply("You need to be in a voice channel before using this command Ya fucking doonkey.");
        return;
    }

    voiceChannel.join().then((connection) => {
        const dispatcher = connection.play(audioFiles[randomInt(0, audioFilesLength)]);
        dispatcher.on("finish", () => voiceChannel.leave());
    }).catch((err) => {
        console.log(err);
        msg.reply("Failed to join a voice channel").catch(console.log);
    });
};

export default curse;
