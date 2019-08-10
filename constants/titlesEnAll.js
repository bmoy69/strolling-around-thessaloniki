import info from './info.js';

const titlesEnAll = Object.values(info)             // Converts the object to array
  .map(monument => {
    return {key: monument.key, title: monument.en.title};  // Takes only two properties from the array
  })                                              // Sorts the array on the title after the accents have been removed
  .sort((a,b) => a.title > b.title);

export default titlesEnAll;