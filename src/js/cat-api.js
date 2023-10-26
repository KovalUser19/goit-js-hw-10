const URL_API = "https://api.thecatapi.com/v1";
const KEY_API = "live_GkaMJrvHZi6C0P8sn6FRSty8kkqb2BoMHd9iumyQ0qd2sbe4hCVTfuCDLvSJQ3HD";

export function fetchBreeds() {
  return fetch(`${URL_API}/breeds`, { headers: {'x-api-key': KEY_API} })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return (response).json();
    });
};

 export function fetchCatByBreed(breedId) {
  return fetch(`${URL_API}/images/search?breed_ids=${breedId}`, { headers: {'x-api-key': KEY_API} })
  .then(response => {
    if(!response.ok){
      throw new Error(response.statusText)
    }
    return (response).json();
  })
}