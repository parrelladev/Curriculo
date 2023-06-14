<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"></script>

      <!-- Adicionando o jQuery e o Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

      <!-- Adicionando funcionalidade do modo noturno -->
      <script>
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
      </script>

      <!-- Adicionando funcionalidade de ocultar fotos -->
      <script>
        $(window).resize(function () {
          if (window.innerWidth < 768) {
            $(".imagem-responsiva").hide();
          } else {
            $(".imagem-responsiva").show();
          }
        });
      </script>