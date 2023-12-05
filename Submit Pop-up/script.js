let popup = document.getElementById("popup")
let btn = document.querySelector(".btn")
let closebtn = document.getElementById("closebtn")

btn.addEventListener("click", function(){
    popup.classList.add("open-popup")
})
closebtn.addEventListener("click", function(){
    popup.classList.remove("open-popup")
})