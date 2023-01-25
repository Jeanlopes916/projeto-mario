console.log('mostrar o document', document);

console.log(document.querySelector('.botao-trailer'));

const botaoTrailer = document.querySelector('.botao-trailer');
console.log(botaoTrailer);

botaoTrailer.addEventListener("click", () => { 
modal.classList.add("aberto");
video.setAttribute("src", linkdovideo);
});

const modal = document.querySelector(".modal");

const botaofecharmodal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");

const linkdovideo = video.src; 

botaofecharmodal.addEventListener("click", () => {
  
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});



