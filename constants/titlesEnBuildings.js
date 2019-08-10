
import info from './info.js';

const titlesEnBuildings = Object.values(info)                 // Converts the object to array
  .filter(monument => monument.type.includes("building"))   // Includes only this type
  .map(monument => {
      return {key: monument.key, title: monument.en.title}; // Takes only two properties from the array
  })                                                        // Sorts the array on the title after the accents have been removed
  .sort((a,b) => a.title > b.title);

export default titlesEnBuildings;
