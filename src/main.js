


import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";

import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector('.form');




form.addEventListener('submit', handleSubmit);

function handleSubmit(event) { 
    event.preventDefault();
    const valueForm = event.target.elements["search-text"];
    const query = valueForm.value.trim();
    if (query.length === 0) {
        return iziToast.show({
    title: 'Hey',
    message: 'Please enter a search query'
});
    }
    clearGallery()
    showLoader();
    getImagesByQuery(query)
        .then(res => {
    if (res.hits.length === 0) {
        iziToast.show({
            title: 'Sorry',
            message: 'No images found'
        });
        return;
    }

    createGallery(res.hits);
})
        .catch(error => {
    iziToast.show({
        title: 'Error',
        message: 'Something went wrong'
    });
        })
        .finally(() => {
    hideLoader();
});

   
}


