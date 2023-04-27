import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const rickMortyService = {};

// character
rickMortyService.getAllCharacters = async (page = 1) => {
   const apiUrl = `${BASE_URL}/character/?page=${page}`;

   await sleep(500); // TODO forzar una demora
   return (await axios.get(apiUrl)).data;
};

rickMortyService.getCharacterById = async (id) => {
   await sleep(500); // TODO forzar una demora
   const apiUrl = `${BASE_URL}/character/${id}`;

   return (await axios.get(apiUrl)).data;
};

// episode
rickMortyService.getEpisodeByUrl = async (url) => {
   return (await axios.get(url)).data;
};

rickMortyService.getEpisodesByUrlList = async (urlList) => {
   const episodes = [];

   for (const url of urlList) {
      const episode = (await axios.get(url)).data;
      episodes.push(episode);
   }

   return new Promise((resolve, reject) => {
      resolve(episodes);
   });
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default rickMortyService;
