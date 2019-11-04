export const getArtwork = async () => {
  const url = `https://api.harvardartmuseums.org/object?apikey=${process.env.VUE_APP_API_KEY}`
  const response = await fetch(url);
  if (!response.ok) {
    throw Error('There was an issue getting your museum data');
  }

  const data = await response.json();
  const cleanedData = data.records.map(obj => {
    return { title: obj.title, image: obj.primaryimageurl, culture: obj.culture, century: obj.century, artist: obj.people[0].name, showPicture: true }
  })
  return cleanedData;
}