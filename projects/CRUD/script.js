let pass = document.querySelector("#pass")
let pass2 = document.querySelector("#pass2")
let warn = document.querySelector("#warn")
let warn2 = document.querySelector("#warn2")

function Checkpass(){
    if(pass.value.trim().length !== pass2.value.trim().length){
    warn.classList.add("active")
    }
    else if(pass2.value.trim() == null){warn.classList.remove("active")}
    else {warn.classList.remove("active")}
}
function Checkpass2(){
    if(pass.value.trim().length < 8){
    warn2.classList.add("active")
    }
    else if(pass2.value.trim() == null){warn2.classList.remove("active")}
    else {warn2.classList.remove("active")}
}

