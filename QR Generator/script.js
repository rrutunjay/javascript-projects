const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const input = document.getElementById("inpt");
const btn = document.getElementById("btn");
const imgBox = document.querySelector(".imgBox");
const wrapper = document.querySelector(".wrapper");
const img = document.querySelector("#img");
const closebtn = document.querySelector(".close");

btn.addEventListener("click", function() {
    if (input.value.length > 0) {
        img.src = url + input.value;
        wrapper.classList.add("show")
    } 
    else {
        console.log("hiii");
        input.classList.add("error")
        setTimeout(() => {
            input.classList.remove("error")
        }, 1000);
    }   
}); 

closebtn.addEventListener("click", function(){
    input.value = "";
    wrapper.classList.remove("show")
    setTimeout(() => {
        img.src = "";
    }, 400);
})

