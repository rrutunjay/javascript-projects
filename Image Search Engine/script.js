const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showmoreBtn = document.getElementById("show-more-btn");
const apikey = "leIyVGR5-reFu7ijxBgrd3ky88ttGpP2ZiB7X7IseWU";

let keyword = "";
let page = 1;


async function searchImages(){

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apikey}&per_page=12`;

    const response = await fetch(url);
   
    const data= await response.json();

    if(page === 1){
        searchResult.innerHTML = " ";
    }

    const results = data.results
    console.log(results);
    if (results.length === 0) {
        searchResult.innerHTML = "<p>404 Not Found.</p>";
        showmoreBtn.style.display = "none";
        return;
    }
    console.log(data);
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        
        imagelink.appendChild(image);
        searchResult.appendChild(imagelink)
    })

    showmoreBtn.style.display = "block";
    
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    keyword = searchBox.value;
    searchBox.value = ""
    searchImages();
})

showmoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages()
})



