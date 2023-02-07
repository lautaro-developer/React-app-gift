export let getGifs = ({ keyword }) => {
  const apiKey = "sifFBuu3WBDHuYgWoht9728JyaMc25oS";
  const apiurl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=2&offset=0&rating=g&lang=en`;

  return fetch(apiurl).then((e) =>
    e.json().then((response) => {
      const { data } = response;
      const gif = data.map((img) => {
        const {images, title, id} = img
        const {url} = images.fixed_width_small;
        return {title, id, url}
      });
      return gif;
    })
  );
};
