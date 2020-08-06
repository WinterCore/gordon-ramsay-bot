import { readFileSync } from "fs";

import { randomInt } from "../helpers.mjs";

const insults = JSON.parse(readFileSync("data/insults.json"));
const insultsLength = insults.length;

const randomInsult = () => insults[randomInt(0, insultsLength)];

const insult = (msg) => {
    if (msg.mentions.everyone) {
        msg.channel.members.forEach((guildMember) => {
            msg.channel.send(`${guildMember.user}, ${randomInsult()}`);
        });
    } else if (msg.mentions.users.size == 0) {
        msg.reply(randomInsult());
    } else {
        msg.mentions.users.forEach((user) => {
            msg.channel.send(`${user}, ${randomInsult()}`);
        });
    }
};

export default insult;
