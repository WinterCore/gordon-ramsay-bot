import { readFileSync } from "fs";

import { randomInt }            from "../helpers.mjs";
import {TEXT_INSULTS_BASE_PATH} from "../consts.mjs";

const insults = JSON.parse(readFileSync(TEXT_INSULTS_BASE_PATH));
const insultsLength = insults.length;

const randomInsult = () => insults[randomInt(0, insultsLength)];

const insult = async (msg) => {
    if (msg.mentions.everyone) {
        msg.channel.members.forEach((guildMember) => {
            msg.channel.send(`${guildMember.user}, ${randomInsult()}`).catch(console.log);
        });
    } else if (msg.mentions.users.size == 0) {
        await msg.reply(randomInsult())
    } else {
        msg.mentions.users.forEach((user) => {
            msg.channel.send(`${user}, ${randomInsult()}`).catch(console.log);
        });
    }
};

export default insult;
