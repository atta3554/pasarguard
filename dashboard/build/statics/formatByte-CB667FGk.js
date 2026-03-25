function formatBytes(bytes, decimals = 2, size = true, asArray = false, forceUnit) {
  if (!+bytes) return size ? "0 B" : "0";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  if (forceUnit && sizes.includes(forceUnit)) {
    const i2 = sizes.indexOf(forceUnit);
    const value2 = parseFloat((bytes / Math.pow(k, i2)).toFixed(dm));
    if (asArray) return [value2, forceUnit];
    return size ? `${value2} ${forceUnit}` : `${value2}`;
  }
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
  if (asArray) return [value, sizes[i]];
  return size ? `${value} ${sizes[i]}` : `${value}`;
}
function formatGigabytes(gb, decimals = 2) {
  return formatBytes(gb * 1024 * 1024 * 1024, decimals);
}
const numberWithCommas = (x) => {
  if (x === void 0 || x === null) return "0";
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const toPersianNumerals = (num) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};
function gbToBytes(gb) {
  if (gb === void 0 || gb === null || gb === "") return void 0;
  return Math.round(Number(gb) * 1024 * 1024 * 1024);
}
export {
  formatGigabytes as a,
  formatBytes as f,
  gbToBytes as g,
  numberWithCommas as n,
  toPersianNumerals as t
};
//# sourceMappingURL=formatByte-CB667FGk.js.map
