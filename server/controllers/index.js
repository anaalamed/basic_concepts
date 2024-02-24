import axios from "axios";
import redisClient from "./redis.js";

async function fetchApiData(species) {
  const apiResponse = await axios.get(
    `https://www.fishwatch.gov/api/species/${species}`
  );
  console.log("Request sent to the API");
  return apiResponse.data;
}

export async function getSpeciesData(req, res) {
  const species = req.params.species;
  let isCached = false;

  try {
    let results;
    const cacheResults = await redisClient.get(species);

    if (cacheResults) {
      isCached = true;
      results = JSON.parse(cacheResults);
    } else {
      results = await fetchApiData(species);
      if (results.length === 0) {
        throw "API returned an empty array";
      }
      await redisClient.set(species, JSON.stringify(results));
    }

    res.send({
      fromCache: isCached,
      data: results,
    });
  } catch (error) {
    console.error(error);
    res.status(404).send("Data unavailable");
  }
}
