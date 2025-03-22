import{i as l,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const h="https://pixabay.com/api/",m="49479304-89a48f16eaa5319308b7de96a";function p(){document.querySelector(".loader").style.display="block"}function y(){document.querySelector(".loader").style.display="none"}function g(o){return p(),fetch(`${h}?key=${m}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(`Failed to fetch! Status: ${e.status}`);return e.json()}).then(e=>e.hits).catch(e=>{throw e}).finally(()=>{y()})}let s=null;function v(o){if(o.length===0)return l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"});const e=document.querySelector(".gallery");e.innerHTML="";const i=o.map(({webformatURL:a,largeImageURL:t,tags:r,likes:n,views:c,comments:u,downloads:d})=>`<li class="gallery-item">
	<a class="gallery-link" href="${t}">
		<img
			class="gallery-image"
			src="${a}"
			alt="${r}"
			/>
	</a>
    <div class="info">
        <div class="info-item">
            <h3>Likes</h3>
            <p>${n}</p>
        </div>
        <div class="info-item">
            <h3>Views</h3>
            <p>${c}</p>
        </div>
        <div class="info-item">
            <h3>Comments</h3>
            <p>${u}</p>
        </div>
        <div class="info-item">
            <h3>Downloads</h3>
            <p>${d}</p>
        </div> 
    </div>
</li>`).join("");e.insertAdjacentHTML("beforeend",i),s=new f(".gallery-link",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8}),s.refresh()}const L=document.querySelector(".search-form"),S=document.querySelector('input[name="search-input"]');L.addEventListener("submit",o=>{o.preventDefault();const e=S.value.trim();if(!e)return l.error({title:"",message:"Please enter a search query!"});g(e).then(i=>{v(i)}).catch(i=>{throw i.message})});
//# sourceMappingURL=index.js.map
