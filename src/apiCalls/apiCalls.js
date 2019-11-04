export const museumData = async () => {
  const url = 'https://api.harvardartmuseums.org/image?apikey=1eb425c0-fe67-11e9-9058-a9d79115374a'
  const response = await fetch(url);
  if (!response.ok) {
    throw Error('There was an issue getting your museum data');
  }

  const images = await response.json();
  return images;
}