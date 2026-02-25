import{a as u,S as m,i}from"./assets/vendor-B5nsgUv9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f="54778423-d145f1f321679e99c9163e3ff";function d(s){const e=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return u.get(`https://pixabay.com/api/?${e}`).then(o=>o.data).catch(o=>{throw console.log(o),o})}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captions:!0,captionPosition:"bottom",captionsData:"alt",captionDelay:250});function p(s){const e=g(s);n.insertAdjacentHTML("beforeend",e),h.refresh()}function g(s){return s.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-img"
                src="${e.webformatURL}"
                alt="${e.tags}">
            </a>
            <ul class="list-ue">
                <li class="item-ue">
                <h2 class="item-title">likes</h2>
                <p class="item-value">${e.likes}</p>
                </li>
                <li class="item-ue">
                <h2 class="item-title">views</h2>
                <p class="item-value">${e.views}</p>
                </li>
                <li class="item-ue">
                <h2 class="item-title">comments</h2>
                <p class="item-value">${e.comments}</p>
                </li>
                <li class="item-ue">
                <h2 class="item-title">downloads</h2>
                <p class="item-value">${e.downloads}</p>
                </li>
            </ul>
        </li>`).join("")}function y(){n.innerHTML=""}function L(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",b);function b(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o.length===0)return i.show({title:"Hey",message:"Please enter a search query"});y(),L(),d(o).then(a=>{if(a.hits.length===0){i.show({title:"Sorry",message:"No images found"});return}p(a.hits)}).catch(a=>{i.show({title:"Error",message:"Something went wrong"})}).finally(()=>{w()})}
//# sourceMappingURL=index.js.map
