import info from './info.js';

const mapMarkers = Object.values(info)
  .map(marker => {
    return {
      key: marker.key,
      type: marker.type,
      title: marker.gr.title,
      titleEN: marker.en.title,
      marker: marker.marker,
      coordinates: {
        latitude: marker.coordinates.latitude,
        longitude: marker.coordinates.longitude
      }  
    }
  });

export default mapMarkers;
