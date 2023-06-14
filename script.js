// <!-- Adicionando funcionalidade do modo noturno -->
const nightModeBtn = document.querySelector("#night-mode-btn");
nightModeBtn.addEventListener("click", function () {
    const body = document.querySelector("body");
    body.style.backgroundColor = body.style.backgroundColor === "white" ? "#2a2f33" : "white";

const elements = document.querySelectorAll(".white, .black");
    for (let i = 0; i < elements.length; i++) {
    var containsWhite = elements[i].classList.contains('white')

    if (containsWhite) {
        elements[i].classList.add('black');
        elements[i].classList.remove('white');
    }
    else {
        elements[i].classList.add('white');
        elements[i].classList.remove('black');
    }
}

const captions = document.querySelectorAll(".bg-transparent, .legenda");
for (let i = 0; i < captions.length; i++) {
    captions[i].style.color = body.style.backgroundColor === "white" ? "#4f4f4f" : "white";
}

});

// <!-- Adicionando funcionalidade de ocultar fotos -->

$(window).resize(function () {
if (window.innerWidth < 768) {
    $(".imagem-responsiva").hide();
} else {
    $(".imagem-responsiva").show();
}
});