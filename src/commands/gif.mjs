import Axios from "axios";

import { randomInt }         from "../helpers.mjs";
import { GIPHY_GIF_API_URL } from "../consts.mjs";

const gif = async (msg) => {
    const params = { api_key: process.env.GIPHY_TOKEN, q: "Gordon Ramsay", random_id: Date.now() };
    const { data : { data: gifs } } = await Axios.get(GIPHY_GIF_API_URL, { params });
    const randomGif = gifs[randomInt(0, gifs.length)];
    await msg.channel.send(randomGif.images.original.url);
};

export default gif;
