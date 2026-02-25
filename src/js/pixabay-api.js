import axios from 'axios';


const API_KEY = "54778423-d145f1f321679e99c9163e3ff";



function getImagesByQuery(query) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"

});
    return axios.get(`https://pixabay.com/api/?${searchParams}`)
    .then(res => res.data )
        .catch((error) => {
            console.log(error);
            throw error;
     })
}
   
export { getImagesByQuery };


