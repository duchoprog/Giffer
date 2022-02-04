export     const getGifs= async (categoria)=>{
    const url = `https://api.unsplash.com/search/photos?query=${encodeURI(categoria)}&per_page=5&client_id=vk0kxVD6CuNYAtKjmKkF2QKgHCSUX_5DP_Hnj88746A`;
    const resp = await fetch(url)
    const data = await resp.json()


const gifs= data.results.map(img=>{
    return {
        id:img.id,
        title:img.alt_description,
        url:img.urls.regular
    }
})

return gifs
}