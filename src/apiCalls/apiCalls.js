export const museumData = async () => {
  console.log(process.env.VUE_APP_API_KEY)
  const url = `https://api.harvardartmuseums.org/image?apikey=${process.env.VUE_APP_API_KEY}`
  const response = await fetch(url);
  if (!response.ok) {
    throw Error('There was an issue getting your museum data');
  }

  const images = await response.json();
  return images;
}