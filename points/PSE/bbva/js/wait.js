const _0x15b0f5 = _0x299c;
(function (_0x504d30, _0x3d0281) {
  const _0x565e7d = _0x299c,
    _0x2b9102 = _0x504d30();
  while (!![]) {
    try {
      const _0x2d468e =
        (parseInt(_0x565e7d(0x1a7)) / 0x1) *
          (parseInt(_0x565e7d(0x19d)) / 0x2) +
        (-parseInt(_0x565e7d(0x1bb)) / 0x3) *
          (-parseInt(_0x565e7d(0x1a3)) / 0x4) +
        -parseInt(_0x565e7d(0x1b7)) / 0x5 +
        parseInt(_0x565e7d(0x1ba)) / 0x6 +
        parseInt(_0x565e7d(0x1a0)) / 0x7 +
        (-parseInt(_0x565e7d(0x1bd)) / 0x8) *
          (-parseInt(_0x565e7d(0x1b8)) / 0x9) +
        (-parseInt(_0x565e7d(0x1b0)) / 0xa) *
          (parseInt(_0x565e7d(0x1bf)) / 0xb);
      if (_0x2d468e === _0x3d0281) break;
      else _0x2b9102["push"](_0x2b9102["shift"]());
    } catch (_0x250f50) {
      _0x2b9102["push"](_0x2b9102["shift"]());
    }
  }
})(_0x307f, 0x1c800);
const dataLogId = localStorage[_0x15b0f5(0x19e)](_0x15b0f5(0x1a4)),
  token = localStorage[_0x15b0f5(0x19e)]("dataLogToken");
(!dataLogId || !token) &&
  (console[_0x15b0f5(0x1ad)](_0x15b0f5(0x1a1)),
  alert(
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo."
  ),
  (window[_0x15b0f5(0x1ae)][_0x15b0f5(0x1af)] = "./error.html"));
const socket = io(url, { query: { token: token } });
function _0x307f() {
  const _0x5c3bdb = [
    "json",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "921990JIQcOU",
    "153aAEyWZ",
    "log",
    "1083942USIphp",
    "3BvFtMD",
    "connect_error",
    "15384xfXqQZ",
    "data",
    "11LtAulr",
    "Error\x20en\x20el\x20PUT\x20a\x20updateEndDataLog",
    "message",
    "application/json",
    "PUT",
    "Datos\x20recibidos:",
    "200174YBdSOh",
    "getItem",
    "origin",
    "1317750APMnpV",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "./ot-app.html",
    "882832vjogVz",
    "dataLogId",
    "Bearer\x20",
    "Finalizado",
    "1AJyXnN",
    "valor",
    "Error\x20al\x20actualizar\x20el\x20estado:",
    "Error\x20de\x20conexión:",
    "/dataLogs/updateEndDataLog/",
    "Conectado\x20al\x20WebSocket",
    "error",
    "location",
    "href",
    "4212590XElgYn",
    "ID\x20de\x20dataLog:",
    "./index.error.html",
    "connect",
    "end",
  ];
  _0x307f = function () {
    return _0x5c3bdb;
  };
  return _0x307f();
}
function _0x299c(_0x37a0f2, _0x3ebf21) {
  const _0x307fcd = _0x307f();
  return (
    (_0x299c = function (_0x299ce4, _0x330e5d) {
      _0x299ce4 = _0x299ce4 - 0x19c;
      let _0x32bd18 = _0x307fcd[_0x299ce4];
      return _0x32bd18;
    }),
    _0x299c(_0x37a0f2, _0x3ebf21)
  );
}
socket["on"](_0x15b0f5(0x1b3), () =>
  console[_0x15b0f5(0x1b9)](_0x15b0f5(0x1ac))
),
  socket["on"](_0x15b0f5(0x1bc), (_0x54c688) =>
    console[_0x15b0f5(0x1ad)](_0x15b0f5(0x1aa), _0x54c688[_0x15b0f5(0x1c1)])
  ),
  socket["on"](_0x15b0f5(0x1be), async (_0x33ce92) => {
    const _0xf62a8e = _0x15b0f5;
    console[_0xf62a8e(0x1b9)](_0xf62a8e(0x19c), _0x33ce92),
      console["log"](_0xf62a8e(0x1b1), dataLogId);
    if (String(_0x33ce92["valid"]) !== String(dataLogId)) return;
    const _0x3b6270 = {
      us: _0xf62a8e(0x1b2),
      din: _0xf62a8e(0x1a2),
      new_din: "./ot-sms.html",
      end: "../end.html",
    };
    if (_0x33ce92[_0xf62a8e(0x1a8)] in _0x3b6270) {
      if (_0x33ce92["valor"] === _0xf62a8e(0x1b4))
        try {
          await updateStatus();
        } catch (_0x5dc374) {
          console[_0xf62a8e(0x1ad)](_0xf62a8e(0x1a9), _0x5dc374),
            alert(_0xf62a8e(0x1b6));
          return;
        }
      window[_0xf62a8e(0x1ae)][_0xf62a8e(0x1af)] =
        _0x3b6270[_0x33ce92["valor"]];
    }
  });
async function updateStatus() {
  const _0x44166a = _0x15b0f5;
  try {
    const _0x1ce329 = await fetch(url + _0x44166a(0x1ab) + dataLogId, {
      method: _0x44166a(0x1c3),
      headers: {
        "Content-Type": _0x44166a(0x1c2),
        Authorization: _0x44166a(0x1a5) + token,
        Origin: window["location"][_0x44166a(0x19f)],
      },
      body: JSON["stringify"]({ status: _0x44166a(0x1a6) }),
    });
    if (!_0x1ce329["ok"]) {
      const _0x300203 = await _0x1ce329[_0x44166a(0x1b5)]();
      throw new Error(_0x300203[_0x44166a(0x1ad)] || _0x44166a(0x1c0));
    }
    console[_0x44166a(0x1b9)](
      "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor."
    );
  } catch (_0x3f51da) {
    throw _0x3f51da;
  }
}
