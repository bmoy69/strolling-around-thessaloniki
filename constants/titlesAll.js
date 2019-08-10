import greekUtils from 'greek-utils';
import info from './info.js';

const titlesAll = Object.values(info)             // Converts the object to array
  .map(monument => {
     return {key: monument.key, title: monument.gr.title};  // Takes only two properties from the array
  })                                              // Sorts the array on the title after the accents have been removed
  .sort((a,b) => greekUtils.sanitizeDiacritics(a.title).localeCompare(greekUtils.sanitizeDiacritics(b.title), 'el'));

export default titlesAll;
