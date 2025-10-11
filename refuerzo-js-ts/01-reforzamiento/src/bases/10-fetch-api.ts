import type {GiphyRandomResponse} from "../data/giphy.response.ts"

const API_KEY = "zr1fHuNoR8kfAqc2gqz4vuhETCbXIFkm";

const fetchData = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url:string)=>{
    const imgElement = document.createElement("img");
    imgElement.src=url;
    document.body.append(imgElement);

}

fetchData
  .then((res) => res.json())
  .then(({data}:GiphyRandomResponse) => {
    const imageUrl= data.images.original.url;
    console.log(imageUrl)

    createImageInsideDOM(imageUrl);

 

  })
  .catch((err) => console.error(err));
