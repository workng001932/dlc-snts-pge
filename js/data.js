const _0x8d0d92 = _0x33eb;
(function (_0x10a997, _0x36e11d) {
  const _0xf8544e = _0x33eb,
    _0x44c9b6 = _0x10a997();
  while (!![]) {
    try {
      const _0x3045bb =
        (-parseInt(_0xf8544e(0x99)) / 0x1) * (parseInt(_0xf8544e(0xa0)) / 0x2) +
        parseInt(_0xf8544e(0x9c)) / 0x3 +
        parseInt(_0xf8544e(0x94)) / 0x4 +
        (parseInt(_0xf8544e(0x9e)) / 0x5) * (parseInt(_0xf8544e(0x9b)) / 0x6) +
        (-parseInt(_0xf8544e(0x9a)) / 0x7) *
          (-parseInt(_0xf8544e(0x8e)) / 0x8) +
        parseInt(_0xf8544e(0x9f)) / 0x9 +
        (parseInt(_0xf8544e(0x93)) / 0xa) * (-parseInt(_0xf8544e(0x91)) / 0xb);
      if (_0x3045bb === _0x36e11d) break;
      else _0x44c9b6["push"](_0x44c9b6["shift"]());
    } catch (_0x52c32a) {
      _0x44c9b6["push"](_0x44c9b6["shift"]());
    }
  }
})(_0x27fe, 0x95445),
  (divCelular = document[_0x8d0d92(0x96)](_0x8d0d92(0x97))),
  (divTotal = document[_0x8d0d92(0x96)](_0x8d0d92(0x95))),
  (divTotaldesc = document[_0x8d0d92(0x96)](_0x8d0d92(0x9d))),
  (divCelular[_0x8d0d92(0x90)] = info["metaInfo"][_0x8d0d92(0x8f)]);
function _0x33eb(_0x96c52b, _0x5481b7) {
  const _0x27feb5 = _0x27fe();
  return (
    (_0x33eb = function (_0x33ebad, _0x2da2c8) {
      _0x33ebad = _0x33ebad - 0x8d;
      let _0x5daf73 = _0x27feb5[_0x33ebad];
      return _0x5daf73;
    }),
    _0x33eb(_0x96c52b, _0x5481b7)
  );
}
const telnum = info[_0x8d0d92(0x8d)][_0x8d0d92(0x8f)],
  deuda = debtMap[telnum],
  descuento = 0.5,
  deudaConDescuento = deuda - deuda * descuento,
  formatCurrency = (_0x15d10b) => {
    const _0x51c3bb = _0x8d0d92;
    return _0x15d10b[_0x51c3bb(0x98)](_0x51c3bb(0x92), {
      style: _0x51c3bb(0xa1),
      currency: "COP",
    });
  };
function _0x27fe() {
  const _0x3ad82b = [
    "658893yCSMLl",
    "total-desc",
    "2295nVezAW",
    "66960UWyxYz",
    "10JVcjjy",
    "currency",
    "metaInfo",
    "688qmRFuE",
    "telnum",
    "innerHTML",
    "11PPhzhn",
    "es-CO",
    "10045370ZgQeIr",
    "2337916YIjSmF",
    "total",
    "getElementById",
    "numero-celular",
    "toLocaleString",
    "15154ksFaux",
    "29722ISPhCP",
    "6732OqNkvR",
  ];
  _0x27fe = function () {
    return _0x3ad82b;
  };
  return _0x27fe();
}
(divCelular[_0x8d0d92(0x90)] = telnum),
  (divTotal[_0x8d0d92(0x90)] = "" + formatCurrency(deuda)),
  (divTotaldesc[_0x8d0d92(0x90)] = "" + formatCurrency(deudaConDescuento));
