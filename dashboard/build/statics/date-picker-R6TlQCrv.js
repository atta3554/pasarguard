import { b as React, r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { c as cn, ar as Period, a as useDirDetection, g as useTheme, aY as toUnixSeconds, at as formatOffsetDateTime } from "./index-C_i3x-Gf.js";
import { b as buttonVariants, B as Button$1 } from "./button-BOH66nN-.js";
import { C as ChevronLeft } from "./chevron-left-Bre8eEMe.js";
import { C as ChevronRight } from "./chevron-right-DkXHvvEa.js";
import { C as ChevronDown } from "./chevron-down-CYTM5oAI.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { u as useIsMobile } from "./use-mobile-mll3IbV8.js";
import { g as getDatePickerPreference, D as DATE_PICKER_PREFERENCE_KEY } from "./userPreferenceStorage-DH2hTFsa.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { X } from "./x-C6aLLO-Y.js";
import { C as Calendar$2 } from "./calendar-BM3jGkln.js";
const millisecondsInWeek$1 = 6048e5;
const millisecondsInDay$1 = 864e5;
const constructFromSymbol$1 = /* @__PURE__ */ Symbol.for("constructDateFrom");
function constructFrom$1(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol$1 in date)
    return date[constructFromSymbol$1](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}
function toDate$1(argument, context) {
  return constructFrom$1(context || argument, argument);
}
function addDays$1(date, amount, options) {
  const _date = toDate$1(date, options?.in);
  if (isNaN(amount)) return constructFrom$1(date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}
function addMonths$1(date, amount, options) {
  const _date = toDate$1(date, options?.in);
  if (isNaN(amount)) return constructFrom$1(date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom$1(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}
let defaultOptions$1 = {};
function getDefaultOptions$2() {
  return defaultOptions$1;
}
function startOfWeek$1(date, options) {
  const defaultOptions2 = getDefaultOptions$2();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate$1(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function startOfISOWeek$1(date, options) {
  return startOfWeek$1(date, { ...options, weekStartsOn: 1 });
}
function getISOWeekYear$1(date, options) {
  const _date = toDate$1(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom$1(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek$1(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom$1(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek$1(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function getTimezoneOffsetInMilliseconds$1(date) {
  const _date = toDate$1(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
function normalizeDates$1(context, ...dates) {
  const normalize = constructFrom$1.bind(
    null,
    dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}
function startOfDay$1(date, options) {
  const _date = toDate$1(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function differenceInCalendarDays$1(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates$1(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay$1(laterDate_);
  const earlierStartOfDay = startOfDay$1(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds$1(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds$1(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay$1);
}
function startOfISOWeekYear$1(date, options) {
  const year = getISOWeekYear$1(date, options);
  const fourthOfJanuary = constructFrom$1(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek$1(fourthOfJanuary);
}
function addWeeks$1(date, amount, options) {
  return addDays$1(date, amount * 7, options);
}
function addYears$1(date, amount, options) {
  return addMonths$1(date, amount * 12, options);
}
function max$1(dates, options) {
  let result;
  let context = options?.in;
  dates.forEach((date) => {
    if (!context && typeof date === "object")
      context = constructFrom$1.bind(null, date);
    const date_ = toDate$1(date, context);
    if (!result || result < date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom$1(context, result || NaN);
}
function min$1(dates, options) {
  let result;
  let context = options?.in;
  dates.forEach((date) => {
    if (!context && typeof date === "object")
      context = constructFrom$1.bind(null, date);
    const date_ = toDate$1(date, context);
    if (!result || result > date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom$1(context, result || NaN);
}
function isSameDay$1(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates$1(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay$1(dateLeft_) === +startOfDay$1(dateRight_);
}
function isDate$1(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid$1(date) {
  return !(!isDate$1(date) && typeof date !== "number" || isNaN(+toDate$1(date)));
}
function differenceInCalendarMonths$1(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates$1(
    options?.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}
function endOfMonth$1(date, options) {
  const _date = toDate$1(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function normalizeInterval$1(context, interval2) {
  const [start, end] = normalizeDates$1(context, interval2.start, interval2.end);
  return { start, end };
}
function eachMonthOfInterval$1(interval2, options) {
  const { start, end } = normalizeInterval$1(options?.in, interval2);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  let step = 1;
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom$1(start, date));
    date.setMonth(date.getMonth() + step);
  }
  return reversed ? dates.reverse() : dates;
}
function startOfMonth$1(date, options) {
  const _date = toDate$1(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function endOfYear$1(date, options) {
  const _date = toDate$1(date, options?.in);
  const year = _date.getFullYear();
  _date.setFullYear(year + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function startOfYear$1(date, options) {
  const date_ = toDate$1(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
function endOfWeek$1(date, options) {
  const defaultOptions2 = getDefaultOptions$2();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate$1(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function endOfISOWeek$1(date, options) {
  return endOfWeek$1(date, { ...options, weekStartsOn: 1 });
}
const formatDistanceLocale$1 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance$2 = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale$1[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
function buildFormatLongFn$1(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
const dateFormats$1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats$1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats$1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong$1 = {
  date: buildFormatLongFn$1({
    formats: dateFormats$1,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn$1({
    formats: timeFormats$1,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn$1({
    formats: dateTimeFormats$1,
    defaultWidth: "full"
  })
};
const formatRelativeLocale$1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative$2 = (token, _date, _baseDate, _options) => formatRelativeLocale$1[token];
function buildLocalizeFn$1(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
const eraValues$1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues$1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
const monthValues$1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
const dayValues$1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
const dayPeriodValues$1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues$1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber$1 = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize$1 = {
  ordinalNumber: ordinalNumber$1,
  era: buildLocalizeFn$1({
    values: eraValues$1,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn$1({
    values: quarterValues$1,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn$1({
    values: monthValues$1,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn$1({
    values: dayValues$1,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn$1({
    values: dayPeriodValues$1,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues$1,
    defaultFormattingWidth: "wide"
  })
};
function buildMatchFn$1(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex$1(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey$1(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey$1(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex$1(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn$1(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
const matchOrdinalNumberPattern$1 = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern$1 = /\d+/i;
const matchEraPatterns$1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns$1 = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns$1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns$1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns$1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns$1 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns$1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns$1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns$1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns$1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match$1 = {
  ordinalNumber: buildMatchPatternFn$1({
    matchPattern: matchOrdinalNumberPattern$1,
    parsePattern: parseOrdinalNumberPattern$1,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn$1({
    matchPatterns: matchEraPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns$1,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn$1({
    matchPatterns: matchQuarterPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns$1,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn$1({
    matchPatterns: matchMonthPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns$1,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn$1({
    matchPatterns: matchDayPatterns$1,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns$1,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn$1({
    matchPatterns: matchDayPeriodPatterns$1,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns$1,
    defaultParseWidth: "any"
  })
};
const enUS = {
  code: "en-US",
  formatDistance: formatDistance$2,
  formatLong: formatLong$1,
  formatRelative: formatRelative$2,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function getDayOfYear$1(date, options) {
  const _date = toDate$1(date, options?.in);
  const diff = differenceInCalendarDays$1(_date, startOfYear$1(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
function getISOWeek$1(date, options) {
  const _date = toDate$1(date, options?.in);
  const diff = +startOfISOWeek$1(_date) - +startOfISOWeekYear$1(_date);
  return Math.round(diff / millisecondsInWeek$1) + 1;
}
function getWeekYear$1(date, options) {
  const _date = toDate$1(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions$2();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom$1(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek$1(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom$1(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek$1(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear$1(date, options) {
  const defaultOptions2 = getDefaultOptions$2();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear$1(date, options);
  const firstWeek = constructFrom$1(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek$1(firstWeek, options);
  return _date;
}
function getWeek$1(date, options) {
  const _date = toDate$1(date, options?.in);
  const diff = +startOfWeek$1(_date, options) - +startOfWeekYear$1(_date, options);
  return Math.round(diff / millisecondsInWeek$1) + 1;
}
function addLeadingZeros$1(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
const lightFormatters$1 = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros$1(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros$1(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros$1(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros$1(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros$1(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros$1(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros$1(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds2 = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds2 * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros$1(fractionalSeconds, token.length);
  }
};
const dayPeriodEnum$1 = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters$1 = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters$1.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear$1(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros$1(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros$1(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear$1(date);
    return addLeadingZeros$1(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros$1(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros$1(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros$1(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters$1.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros$1(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek$1(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros$1(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek$1(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros$1(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters$1.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear$1(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros$1(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros$1(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros$1(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros$1(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum$1.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum$1.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum$1.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum$1.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum$1.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum$1.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters$1.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters$1.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros$1(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros$1(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters$1.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters$1.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters$1.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes$1(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone$1(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes$1(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone$1(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort$1(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort$1(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros$1(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros$1(+date, token.length);
  }
};
function formatTimezoneShort$1(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros$1(minutes, 2);
}
function formatTimezoneWithOptionalMinutes$1(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros$1(Math.abs(offset) / 60, 2);
  }
  return formatTimezone$1(offset, delimiter);
}
function formatTimezone$1(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros$1(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros$1(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
const dateLongFormatter$1 = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
const timeLongFormatter$1 = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
const dateTimeLongFormatter$1 = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter$1(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter$1(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter$1(timePattern, formatLong2));
};
const longFormatters$1 = {
  p: timeLongFormatter$1,
  P: dateTimeLongFormatter$1
};
const dayOfYearTokenRE$1 = /^D+$/;
const weekYearTokenRE$1 = /^Y+$/;
const throwTokens$1 = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken$1(token) {
  return dayOfYearTokenRE$1.test(token);
}
function isProtectedWeekYearToken$1(token) {
  return weekYearTokenRE$1.test(token);
}
function warnOrThrowProtectedError$1(token, format2, input) {
  const _message = message$1(token, format2, input);
  console.warn(_message);
  if (throwTokens$1.includes(token)) throw new RangeError(_message);
}
function message$1(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const formattingTokensRegExp$3 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp$2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp$3 = /^'([^]*?)'?$/;
const doubleQuoteRegExp$3 = /''/g;
const unescapedLatinCharacterRegExp$3 = /[a-zA-Z]/;
function format$1(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions$2();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate$1(date, options?.in);
  if (!isValid$1(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp$2).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp$3).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString$3(substring) };
    }
    if (formatters$1[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp$3)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken$1(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken$1(token)) {
      warnOrThrowProtectedError$1(token, formatStr, String(date));
    }
    const formatter = formatters$1[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString$3(input) {
  const matched = input.match(escapedStringRegExp$3);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp$3, "'");
}
function getDaysInMonth$1(date, options) {
  const _date = toDate$1(date, options?.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth2 = constructFrom$1(_date, 0);
  lastDayOfMonth2.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth2.setHours(0, 0, 0, 0);
  return lastDayOfMonth2.getDate();
}
function getMonth$2(date, options) {
  return toDate$1(date, options?.in).getMonth();
}
function getYear$1(date, options) {
  return toDate$1(date, options?.in).getFullYear();
}
function isAfter$1(date, dateToCompare) {
  return +toDate$1(date) > +toDate$1(dateToCompare);
}
function isBefore$1(date, dateToCompare) {
  return +toDate$1(date) < +toDate$1(dateToCompare);
}
function isSameMonth$1(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates$1(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
function isSameYear$1(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates$1(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear();
}
function setMonth$2(date, month, options) {
  const _date = toDate$1(date, options?.in);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const midMonth = constructFrom$1(date, 0);
  midMonth.setFullYear(year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth$1(midMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}
function setYear$1(date, year, options) {
  const date_ = toDate$1(date, options?.in);
  if (isNaN(+date_)) return constructFrom$1(date, NaN);
  date_.setFullYear(year);
  return date_;
}
const offsetFormatCache = {};
const offsetCache = {};
function tzOffset(timeZone, date) {
  try {
    const format2 = offsetFormatCache[timeZone] ||= new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "numeric",
      timeZoneName: "longOffset"
    }).format;
    const offsetStr = format2(date).split("GMT")[1] || "";
    if (offsetStr in offsetCache) return offsetCache[offsetStr];
    return calcOffset(offsetStr, offsetStr.split(":"));
  } catch {
    if (timeZone in offsetCache) return offsetCache[timeZone];
    const captures = timeZone?.match(offsetRe);
    if (captures) return calcOffset(timeZone, captures.slice(1));
    return NaN;
  }
}
const offsetRe = /([+-]\d\d):?(\d\d)?/;
function calcOffset(cacheStr, values) {
  const hours = +values[0];
  const minutes = +(values[1] || 0);
  return offsetCache[cacheStr] = hours > 0 ? hours * 60 + minutes : hours * 60 - minutes;
}
class TZDateMini extends Date {
  //#region static
  constructor(...args) {
    super();
    if (args.length > 1 && typeof args[args.length - 1] === "string") {
      this.timeZone = args.pop();
    }
    this.internal = /* @__PURE__ */ new Date();
    if (isNaN(tzOffset(this.timeZone, this))) {
      this.setTime(NaN);
    } else {
      if (!args.length) {
        this.setTime(Date.now());
      } else if (typeof args[0] === "number" && (args.length === 1 || args.length === 2 && typeof args[1] !== "number")) {
        this.setTime(args[0]);
      } else if (typeof args[0] === "string") {
        this.setTime(+new Date(args[0]));
      } else if (args[0] instanceof Date) {
        this.setTime(+args[0]);
      } else {
        this.setTime(+new Date(...args));
        adjustToSystemTZ(this);
        syncToInternal(this);
      }
    }
  }
  static tz(tz, ...args) {
    return args.length ? new TZDateMini(...args, tz) : new TZDateMini(Date.now(), tz);
  }
  //#endregion
  //#region time zone
  withTimeZone(timeZone) {
    return new TZDateMini(+this, timeZone);
  }
  getTimezoneOffset() {
    return -tzOffset(this.timeZone, this);
  }
  //#endregion
  //#region time
  setTime(time) {
    Date.prototype.setTime.apply(this, arguments);
    syncToInternal(this);
    return +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](date) {
    return new TZDateMini(+new Date(date), this.timeZone);
  }
  //#endregion
}
const re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
  if (!re.test(method)) return;
  const utcMethod = method.replace(re, "$1UTC");
  if (!TZDateMini.prototype[utcMethod]) return;
  if (method.startsWith("get")) {
    TZDateMini.prototype[method] = function() {
      return this.internal[utcMethod]();
    };
  } else {
    TZDateMini.prototype[method] = function() {
      Date.prototype[utcMethod].apply(this.internal, arguments);
      syncFromInternal(this);
      return +this;
    };
    TZDateMini.prototype[utcMethod] = function() {
      Date.prototype[utcMethod].apply(this, arguments);
      syncToInternal(this);
      return +this;
    };
  }
});
function syncToInternal(date) {
  date.internal.setTime(+date);
  date.internal.setUTCMinutes(date.internal.getUTCMinutes() - date.getTimezoneOffset());
}
function syncFromInternal(date) {
  Date.prototype.setFullYear.call(date, date.internal.getUTCFullYear(), date.internal.getUTCMonth(), date.internal.getUTCDate());
  Date.prototype.setHours.call(date, date.internal.getUTCHours(), date.internal.getUTCMinutes(), date.internal.getUTCSeconds(), date.internal.getUTCMilliseconds());
  adjustToSystemTZ(date);
}
function adjustToSystemTZ(date) {
  const offset = tzOffset(date.timeZone, date);
  const prevHour = /* @__PURE__ */ new Date(+date);
  prevHour.setUTCHours(prevHour.getUTCHours() - 1);
  const systemOffset = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset();
  const prevHourSystemOffset = -(/* @__PURE__ */ new Date(+prevHour)).getTimezoneOffset();
  const systemDSTChange = systemOffset - prevHourSystemOffset;
  const dstShift = Date.prototype.getHours.apply(date) !== date.internal.getUTCHours();
  if (systemDSTChange && dstShift) date.internal.setUTCMinutes(date.internal.getUTCMinutes() + systemDSTChange);
  const offsetDiff = systemOffset - offset;
  if (offsetDiff) Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetDiff);
  const postOffset = tzOffset(date.timeZone, date);
  const postSystemOffset = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset();
  const postOffsetDiff = postSystemOffset - postOffset;
  const offsetChanged = postOffset !== offset;
  const postDiff = postOffsetDiff - offsetDiff;
  if (offsetChanged && postDiff) {
    Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + postDiff);
    const newOffset = tzOffset(date.timeZone, date);
    const offsetChange = postOffset - newOffset;
    if (offsetChange) {
      date.internal.setUTCMinutes(date.internal.getUTCMinutes() + offsetChange);
      Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetChange);
    }
  }
}
class TZDate extends TZDateMini {
  //#region static
  static tz(tz, ...args) {
    return args.length ? new TZDate(...args, tz) : new TZDate(Date.now(), tz);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [sign, hours, minutes] = this.tzComponents();
    const tz = `${sign}${hours}:${minutes}`;
    return this.internal.toISOString().slice(0, -1) + tz;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [day, date, month, year] = this.internal.toUTCString().split(" ");
    return `${day?.slice(0, -1)} ${month} ${date} ${year}`;
  }
  toTimeString() {
    const time = this.internal.toUTCString().split(" ")[4];
    const [sign, hours, minutes] = this.tzComponents();
    return `${time} GMT${sign}${hours}${minutes} (${tzName(this.timeZone, this)})`;
  }
  toLocaleString(locales, options) {
    return Date.prototype.toLocaleString.call(this, locales, {
      ...options,
      timeZone: options?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(locales, options) {
    return Date.prototype.toLocaleDateString.call(this, locales, {
      ...options,
      timeZone: options?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(locales, options) {
    return Date.prototype.toLocaleTimeString.call(this, locales, {
      ...options,
      timeZone: options?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const offset = this.getTimezoneOffset();
    const sign = offset > 0 ? "-" : "+";
    const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
    const minutes = String(Math.abs(offset) % 60).padStart(2, "0");
    return [sign, hours, minutes];
  }
  //#endregion
  withTimeZone(timeZone) {
    return new TZDate(+this, timeZone);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](date) {
    return new TZDate(+new Date(date), this.timeZone);
  }
  //#endregion
}
function tzName(tz, date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    timeZoneName: "long"
  }).format(date).slice(12);
}
var UI;
(function(UI2) {
  UI2["Root"] = "root";
  UI2["Chevron"] = "chevron";
  UI2["Day"] = "day";
  UI2["DayButton"] = "day_button";
  UI2["CaptionLabel"] = "caption_label";
  UI2["Dropdowns"] = "dropdowns";
  UI2["Dropdown"] = "dropdown";
  UI2["DropdownRoot"] = "dropdown_root";
  UI2["Footer"] = "footer";
  UI2["MonthGrid"] = "month_grid";
  UI2["MonthCaption"] = "month_caption";
  UI2["MonthsDropdown"] = "months_dropdown";
  UI2["Month"] = "month";
  UI2["Months"] = "months";
  UI2["Nav"] = "nav";
  UI2["NextMonthButton"] = "button_next";
  UI2["PreviousMonthButton"] = "button_previous";
  UI2["Week"] = "week";
  UI2["Weeks"] = "weeks";
  UI2["Weekday"] = "weekday";
  UI2["Weekdays"] = "weekdays";
  UI2["WeekNumber"] = "week_number";
  UI2["WeekNumberHeader"] = "week_number_header";
  UI2["YearsDropdown"] = "years_dropdown";
})(UI || (UI = {}));
var DayFlag;
(function(DayFlag2) {
  DayFlag2["disabled"] = "disabled";
  DayFlag2["hidden"] = "hidden";
  DayFlag2["outside"] = "outside";
  DayFlag2["focused"] = "focused";
  DayFlag2["today"] = "today";
})(DayFlag || (DayFlag = {}));
var SelectionState;
(function(SelectionState2) {
  SelectionState2["range_end"] = "range_end";
  SelectionState2["range_middle"] = "range_middle";
  SelectionState2["range_start"] = "range_start";
  SelectionState2["selected"] = "selected";
})(SelectionState || (SelectionState = {}));
var Animation;
(function(Animation2) {
  Animation2["weeks_before_enter"] = "weeks_before_enter";
  Animation2["weeks_before_exit"] = "weeks_before_exit";
  Animation2["weeks_after_enter"] = "weeks_after_enter";
  Animation2["weeks_after_exit"] = "weeks_after_exit";
  Animation2["caption_after_enter"] = "caption_after_enter";
  Animation2["caption_after_exit"] = "caption_after_exit";
  Animation2["caption_before_enter"] = "caption_before_enter";
  Animation2["caption_before_exit"] = "caption_before_exit";
})(Animation || (Animation = {}));
const FIVE_WEEKS = 5;
const FOUR_WEEKS = 4;
function getBroadcastWeeksInMonth(month, dateLib) {
  const firstDayOfMonth = dateLib.startOfMonth(month);
  const firstDayOfWeek = firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;
  const broadcastStartDate = dateLib.addDays(month, -firstDayOfWeek + 1);
  const lastDateOfLastWeek = dateLib.addDays(broadcastStartDate, FIVE_WEEKS * 7 - 1);
  const numberOfWeeks = dateLib.getMonth(month) === dateLib.getMonth(lastDateOfLastWeek) ? FIVE_WEEKS : FOUR_WEEKS;
  return numberOfWeeks;
}
function startOfBroadcastWeek(date, dateLib) {
  const firstOfMonth = dateLib.startOfMonth(date);
  const dayOfWeek = firstOfMonth.getDay();
  if (dayOfWeek === 1) {
    return firstOfMonth;
  } else if (dayOfWeek === 0) {
    return dateLib.addDays(firstOfMonth, -1 * 6);
  } else {
    return dateLib.addDays(firstOfMonth, -1 * (dayOfWeek - 1));
  }
}
function endOfBroadcastWeek(date, dateLib) {
  const startDate = startOfBroadcastWeek(date, dateLib);
  const numberOfWeeks = getBroadcastWeeksInMonth(date, dateLib);
  const endDate = dateLib.addDays(startDate, numberOfWeeks * 7 - 1);
  return endDate;
}
class DateLib {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(options, overrides) {
    this.Date = Date;
    this.today = () => {
      if (this.overrides?.today) {
        return this.overrides.today();
      }
      if (this.options.timeZone) {
        return TZDate.tz(this.options.timeZone);
      }
      return new this.Date();
    };
    this.newDate = (year, monthIndex, date) => {
      if (this.overrides?.newDate) {
        return this.overrides.newDate(year, monthIndex, date);
      }
      if (this.options.timeZone) {
        return new TZDate(year, monthIndex, date, this.options.timeZone);
      }
      return new Date(year, monthIndex, date);
    };
    this.addDays = (date, amount) => {
      return this.overrides?.addDays ? this.overrides.addDays(date, amount) : addDays$1(date, amount);
    };
    this.addMonths = (date, amount) => {
      return this.overrides?.addMonths ? this.overrides.addMonths(date, amount) : addMonths$1(date, amount);
    };
    this.addWeeks = (date, amount) => {
      return this.overrides?.addWeeks ? this.overrides.addWeeks(date, amount) : addWeeks$1(date, amount);
    };
    this.addYears = (date, amount) => {
      return this.overrides?.addYears ? this.overrides.addYears(date, amount) : addYears$1(date, amount);
    };
    this.differenceInCalendarDays = (dateLeft, dateRight) => {
      return this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(dateLeft, dateRight) : differenceInCalendarDays$1(dateLeft, dateRight);
    };
    this.differenceInCalendarMonths = (dateLeft, dateRight) => {
      return this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(dateLeft, dateRight) : differenceInCalendarMonths$1(dateLeft, dateRight);
    };
    this.eachMonthOfInterval = (interval2) => {
      return this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(interval2) : eachMonthOfInterval$1(interval2);
    };
    this.endOfBroadcastWeek = (date) => {
      return this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(date) : endOfBroadcastWeek(date, this);
    };
    this.endOfISOWeek = (date) => {
      return this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(date) : endOfISOWeek$1(date);
    };
    this.endOfMonth = (date) => {
      return this.overrides?.endOfMonth ? this.overrides.endOfMonth(date) : endOfMonth$1(date);
    };
    this.endOfWeek = (date, options2) => {
      return this.overrides?.endOfWeek ? this.overrides.endOfWeek(date, options2) : endOfWeek$1(date, this.options);
    };
    this.endOfYear = (date) => {
      return this.overrides?.endOfYear ? this.overrides.endOfYear(date) : endOfYear$1(date);
    };
    this.format = (date, formatStr, options2) => {
      const formatted = this.overrides?.format ? this.overrides.format(date, formatStr, this.options) : format$1(date, formatStr, this.options);
      if (this.options.numerals && this.options.numerals !== "latn") {
        return this.replaceDigits(formatted);
      }
      return formatted;
    };
    this.getISOWeek = (date) => {
      return this.overrides?.getISOWeek ? this.overrides.getISOWeek(date) : getISOWeek$1(date);
    };
    this.getMonth = (date, options2) => {
      return this.overrides?.getMonth ? this.overrides.getMonth(date, this.options) : getMonth$2(date, this.options);
    };
    this.getYear = (date, options2) => {
      return this.overrides?.getYear ? this.overrides.getYear(date, this.options) : getYear$1(date, this.options);
    };
    this.getWeek = (date, options2) => {
      return this.overrides?.getWeek ? this.overrides.getWeek(date, this.options) : getWeek$1(date, this.options);
    };
    this.isAfter = (date, dateToCompare) => {
      return this.overrides?.isAfter ? this.overrides.isAfter(date, dateToCompare) : isAfter$1(date, dateToCompare);
    };
    this.isBefore = (date, dateToCompare) => {
      return this.overrides?.isBefore ? this.overrides.isBefore(date, dateToCompare) : isBefore$1(date, dateToCompare);
    };
    this.isDate = (value) => {
      return this.overrides?.isDate ? this.overrides.isDate(value) : isDate$1(value);
    };
    this.isSameDay = (dateLeft, dateRight) => {
      return this.overrides?.isSameDay ? this.overrides.isSameDay(dateLeft, dateRight) : isSameDay$1(dateLeft, dateRight);
    };
    this.isSameMonth = (dateLeft, dateRight) => {
      return this.overrides?.isSameMonth ? this.overrides.isSameMonth(dateLeft, dateRight) : isSameMonth$1(dateLeft, dateRight);
    };
    this.isSameYear = (dateLeft, dateRight) => {
      return this.overrides?.isSameYear ? this.overrides.isSameYear(dateLeft, dateRight) : isSameYear$1(dateLeft, dateRight);
    };
    this.max = (dates) => {
      return this.overrides?.max ? this.overrides.max(dates) : max$1(dates);
    };
    this.min = (dates) => {
      return this.overrides?.min ? this.overrides.min(dates) : min$1(dates);
    };
    this.setMonth = (date, month) => {
      return this.overrides?.setMonth ? this.overrides.setMonth(date, month) : setMonth$2(date, month);
    };
    this.setYear = (date, year) => {
      return this.overrides?.setYear ? this.overrides.setYear(date, year) : setYear$1(date, year);
    };
    this.startOfBroadcastWeek = (date, dateLib) => {
      return this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(date, this) : startOfBroadcastWeek(date, this);
    };
    this.startOfDay = (date) => {
      return this.overrides?.startOfDay ? this.overrides.startOfDay(date) : startOfDay$1(date);
    };
    this.startOfISOWeek = (date) => {
      return this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(date) : startOfISOWeek$1(date);
    };
    this.startOfMonth = (date) => {
      return this.overrides?.startOfMonth ? this.overrides.startOfMonth(date) : startOfMonth$1(date);
    };
    this.startOfWeek = (date, options2) => {
      return this.overrides?.startOfWeek ? this.overrides.startOfWeek(date, this.options) : startOfWeek$1(date, this.options);
    };
    this.startOfYear = (date) => {
      return this.overrides?.startOfYear ? this.overrides.startOfYear(date) : startOfYear$1(date);
    };
    this.options = { locale: enUS, ...options };
    this.overrides = overrides;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals = "latn" } = this.options;
    const formatter = new Intl.NumberFormat("en-US", {
      numberingSystem: numerals
    });
    const digitMap = {};
    for (let i = 0; i < 10; i++) {
      digitMap[i.toString()] = formatter.format(i);
    }
    return digitMap;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(input) {
    const digitMap = this.getDigitMap();
    return input.replace(/\d/g, (digit) => digitMap[digit] || digit);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(value) {
    return this.replaceDigits(value.toString());
  }
}
const defaultDateLib = new DateLib();
class CalendarDay {
  constructor(date, displayMonth, dateLib = defaultDateLib) {
    this.date = date;
    this.displayMonth = displayMonth;
    this.outside = Boolean(displayMonth && !dateLib.isSameMonth(date, displayMonth));
    this.dateLib = dateLib;
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(day) {
    return this.dateLib.isSameDay(day.date, this.date) && this.dateLib.isSameMonth(day.displayMonth, this.displayMonth);
  }
}
class CalendarMonth {
  constructor(month, weeks) {
    this.date = month;
    this.weeks = weeks;
  }
}
class CalendarWeek {
  constructor(weekNumber, days2) {
    this.days = days2;
    this.weekNumber = weekNumber;
  }
}
function rangeIncludesDate(range, date, excludeEnds = false, dateLib = defaultDateLib) {
  let { from, to } = range;
  const { differenceInCalendarDays: differenceInCalendarDays2, isSameDay: isSameDay2 } = dateLib;
  if (from && to) {
    const isRangeInverted = differenceInCalendarDays2(to, from) < 0;
    if (isRangeInverted) {
      [from, to] = [to, from];
    }
    const isInRange = differenceInCalendarDays2(date, from) >= (excludeEnds ? 1 : 0) && differenceInCalendarDays2(to, date) >= (excludeEnds ? 1 : 0);
    return isInRange;
  }
  if (!excludeEnds && to) {
    return isSameDay2(to, date);
  }
  if (!excludeEnds && from) {
    return isSameDay2(from, date);
  }
  return false;
}
function isDateInterval(matcher) {
  return Boolean(matcher && typeof matcher === "object" && "before" in matcher && "after" in matcher);
}
function isDateRange(value) {
  return Boolean(value && typeof value === "object" && "from" in value);
}
function isDateAfterType(value) {
  return Boolean(value && typeof value === "object" && "after" in value);
}
function isDateBeforeType(value) {
  return Boolean(value && typeof value === "object" && "before" in value);
}
function isDayOfWeekType(value) {
  return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
function isDatesArray(value, dateLib) {
  return Array.isArray(value) && value.every(dateLib.isDate);
}
function dateMatchModifiers(date, matchers, dateLib = defaultDateLib) {
  const matchersArr = !Array.isArray(matchers) ? [matchers] : matchers;
  const { isSameDay: isSameDay2, differenceInCalendarDays: differenceInCalendarDays2, isAfter: isAfter2 } = dateLib;
  return matchersArr.some((matcher) => {
    if (typeof matcher === "boolean") {
      return matcher;
    }
    if (dateLib.isDate(matcher)) {
      return isSameDay2(date, matcher);
    }
    if (isDatesArray(matcher, dateLib)) {
      return matcher.includes(date);
    }
    if (isDateRange(matcher)) {
      return rangeIncludesDate(matcher, date, false, dateLib);
    }
    if (isDayOfWeekType(matcher)) {
      if (!Array.isArray(matcher.dayOfWeek)) {
        return matcher.dayOfWeek === date.getDay();
      }
      return matcher.dayOfWeek.includes(date.getDay());
    }
    if (isDateInterval(matcher)) {
      const diffBefore = differenceInCalendarDays2(matcher.before, date);
      const diffAfter = differenceInCalendarDays2(matcher.after, date);
      const isDayBefore = diffBefore > 0;
      const isDayAfter = diffAfter < 0;
      const isClosedInterval = isAfter2(matcher.before, matcher.after);
      if (isClosedInterval) {
        return isDayAfter && isDayBefore;
      } else {
        return isDayBefore || isDayAfter;
      }
    }
    if (isDateAfterType(matcher)) {
      return differenceInCalendarDays2(date, matcher.after) > 0;
    }
    if (isDateBeforeType(matcher)) {
      return differenceInCalendarDays2(matcher.before, date) > 0;
    }
    if (typeof matcher === "function") {
      return matcher(date);
    }
    return false;
  });
}
function createGetModifiers(days2, props, dateLib) {
  const { disabled, hidden, modifiers, showOutsideDays, broadcastCalendar, today } = props;
  const { isSameDay: isSameDay2, isSameMonth: isSameMonth2, startOfMonth: startOfMonth2, isBefore: isBefore2, endOfMonth: endOfMonth2, isAfter: isAfter2 } = dateLib;
  const startMonth = props.startMonth && startOfMonth2(props.startMonth);
  const endMonth = props.endMonth && endOfMonth2(props.endMonth);
  const internalModifiersMap = {
    [DayFlag.focused]: [],
    [DayFlag.outside]: [],
    [DayFlag.disabled]: [],
    [DayFlag.hidden]: [],
    [DayFlag.today]: []
  };
  const customModifiersMap = {};
  for (const day of days2) {
    const { date, displayMonth } = day;
    const isOutside = Boolean(displayMonth && !isSameMonth2(date, displayMonth));
    const isBeforeStartMonth = Boolean(startMonth && isBefore2(date, startMonth));
    const isAfterEndMonth = Boolean(endMonth && isAfter2(date, endMonth));
    const isDisabled = Boolean(disabled && dateMatchModifiers(date, disabled, dateLib));
    const isHidden = Boolean(hidden && dateMatchModifiers(date, hidden, dateLib)) || isBeforeStartMonth || isAfterEndMonth || // Broadcast calendar will show outside days as default
    !broadcastCalendar && !showOutsideDays && isOutside || broadcastCalendar && showOutsideDays === false && isOutside;
    const isToday2 = isSameDay2(date, today ?? dateLib.today());
    if (isOutside)
      internalModifiersMap.outside.push(day);
    if (isDisabled)
      internalModifiersMap.disabled.push(day);
    if (isHidden)
      internalModifiersMap.hidden.push(day);
    if (isToday2)
      internalModifiersMap.today.push(day);
    if (modifiers) {
      Object.keys(modifiers).forEach((name) => {
        const modifierValue = modifiers?.[name];
        const isMatch2 = modifierValue ? dateMatchModifiers(date, modifierValue, dateLib) : false;
        if (!isMatch2)
          return;
        if (customModifiersMap[name]) {
          customModifiersMap[name].push(day);
        } else {
          customModifiersMap[name] = [day];
        }
      });
    }
  }
  return (day) => {
    const dayFlags = {
      [DayFlag.focused]: false,
      [DayFlag.disabled]: false,
      [DayFlag.hidden]: false,
      [DayFlag.outside]: false,
      [DayFlag.today]: false
    };
    const customModifiers = {};
    for (const name in internalModifiersMap) {
      const days3 = internalModifiersMap[name];
      dayFlags[name] = days3.some((d) => d === day);
    }
    for (const name in customModifiersMap) {
      customModifiers[name] = customModifiersMap[name].some((d) => d === day);
    }
    return {
      ...dayFlags,
      // custom modifiers should override all the previous ones
      ...customModifiers
    };
  };
}
function getClassNamesForModifiers(modifiers, classNames, modifiersClassNames = {}) {
  const modifierClassNames = Object.entries(modifiers).filter(([, active]) => active === true).reduce((previousValue, [key]) => {
    if (modifiersClassNames[key]) {
      previousValue.push(modifiersClassNames[key]);
    } else if (classNames[DayFlag[key]]) {
      previousValue.push(classNames[DayFlag[key]]);
    } else if (classNames[SelectionState[key]]) {
      previousValue.push(classNames[SelectionState[key]]);
    }
    return previousValue;
  }, [classNames[UI.Day]]);
  return modifierClassNames;
}
function Button(props) {
  return React.createElement("button", { ...props });
}
function CaptionLabel(props) {
  return React.createElement("span", { ...props });
}
function Chevron(props) {
  const { size = 24, orientation = "left", className } = props;
  return React.createElement(
    "svg",
    { className, width: size, height: size, viewBox: "0 0 24 24" },
    orientation === "up" && React.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
    orientation === "down" && React.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
    orientation === "left" && React.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
    orientation === "right" && React.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
  );
}
function Day(props) {
  const { day, modifiers, ...tdProps } = props;
  return React.createElement("td", { ...tdProps });
}
function DayButton(props) {
  const { day, modifiers, ...buttonProps } = props;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (modifiers.focused)
      ref.current?.focus();
  }, [modifiers.focused]);
  return React.createElement("button", { ref, ...buttonProps });
}
function Dropdown(props) {
  const { options, className, components: components2, classNames, ...selectProps } = props;
  const cssClassSelect = [classNames[UI.Dropdown], className].join(" ");
  const selectedOption = options?.find(({ value }) => value === selectProps.value);
  return React.createElement(
    "span",
    { "data-disabled": selectProps.disabled, className: classNames[UI.DropdownRoot] },
    React.createElement(components2.Select, { className: cssClassSelect, ...selectProps }, options?.map(({ value, label, disabled }) => React.createElement(components2.Option, { key: value, value, disabled }, label))),
    React.createElement(
      "span",
      { className: classNames[UI.CaptionLabel], "aria-hidden": true },
      selectedOption?.label,
      React.createElement(components2.Chevron, { orientation: "down", size: 18, className: classNames[UI.Chevron] })
    )
  );
}
function DropdownNav(props) {
  return React.createElement("div", { ...props });
}
function Footer(props) {
  return React.createElement("div", { ...props });
}
function Month(props) {
  const { calendarMonth, displayIndex, ...divProps } = props;
  return React.createElement("div", { ...divProps }, props.children);
}
function MonthCaption(props) {
  const { calendarMonth, displayIndex, ...divProps } = props;
  return React.createElement("div", { ...divProps });
}
function MonthGrid(props) {
  return React.createElement("table", { ...props });
}
function Months(props) {
  return React.createElement("div", { ...props });
}
const dayPickerContext = reactExports.createContext(void 0);
function useDayPicker() {
  const context = reactExports.useContext(dayPickerContext);
  if (context === void 0) {
    throw new Error("useDayPicker() must be used within a custom component.");
  }
  return context;
}
function MonthsDropdown(props) {
  const { components: components2 } = useDayPicker();
  return React.createElement(components2.Dropdown, { ...props });
}
function Nav(props) {
  const { onPreviousClick, onNextClick, previousMonth, nextMonth, ...navProps } = props;
  const { components: components2, classNames, labels: { labelPrevious: labelPrevious2, labelNext: labelNext2 } } = useDayPicker();
  const handleNextClick = reactExports.useCallback((e) => {
    if (nextMonth) {
      onNextClick?.(e);
    }
  }, [nextMonth, onNextClick]);
  const handlePreviousClick = reactExports.useCallback((e) => {
    if (previousMonth) {
      onPreviousClick?.(e);
    }
  }, [previousMonth, onPreviousClick]);
  return React.createElement(
    "nav",
    { ...navProps },
    React.createElement(
      components2.PreviousMonthButton,
      { type: "button", className: classNames[UI.PreviousMonthButton], tabIndex: previousMonth ? void 0 : -1, "aria-disabled": previousMonth ? void 0 : true, "aria-label": labelPrevious2(previousMonth), onClick: handlePreviousClick },
      React.createElement(components2.Chevron, { disabled: previousMonth ? void 0 : true, className: classNames[UI.Chevron], orientation: "left" })
    ),
    React.createElement(
      components2.NextMonthButton,
      { type: "button", className: classNames[UI.NextMonthButton], tabIndex: nextMonth ? void 0 : -1, "aria-disabled": nextMonth ? void 0 : true, "aria-label": labelNext2(nextMonth), onClick: handleNextClick },
      React.createElement(components2.Chevron, { disabled: nextMonth ? void 0 : true, orientation: "right", className: classNames[UI.Chevron] })
    )
  );
}
function NextMonthButton(props) {
  const { components: components2 } = useDayPicker();
  return React.createElement(components2.Button, { ...props });
}
function Option(props) {
  return React.createElement("option", { ...props });
}
function PreviousMonthButton(props) {
  const { components: components2 } = useDayPicker();
  return React.createElement(components2.Button, { ...props });
}
function Root(props) {
  const { rootRef, ...rest } = props;
  return React.createElement("div", { ...rest, ref: rootRef });
}
function Select(props) {
  return React.createElement("select", { ...props });
}
function Week(props) {
  const { week, ...trProps } = props;
  return React.createElement("tr", { ...trProps });
}
function Weekday(props) {
  return React.createElement("th", { ...props });
}
function Weekdays(props) {
  return React.createElement(
    "thead",
    { "aria-hidden": true },
    React.createElement("tr", { ...props })
  );
}
function WeekNumber(props) {
  const { week, ...thProps } = props;
  return React.createElement("th", { ...thProps });
}
function WeekNumberHeader(props) {
  return React.createElement("th", { ...props });
}
function Weeks(props) {
  return React.createElement("tbody", { ...props });
}
function YearsDropdown(props) {
  const { components: components2 } = useDayPicker();
  return React.createElement(components2.Dropdown, { ...props });
}
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button,
  CaptionLabel,
  Chevron,
  Day,
  DayButton,
  Dropdown,
  DropdownNav,
  Footer,
  Month,
  MonthCaption,
  MonthGrid,
  Months,
  MonthsDropdown,
  Nav,
  NextMonthButton,
  Option,
  PreviousMonthButton,
  Root,
  Select,
  Week,
  WeekNumber,
  WeekNumberHeader,
  Weekday,
  Weekdays,
  Weeks,
  YearsDropdown
}, Symbol.toStringTag, { value: "Module" }));
function getComponents(customComponents) {
  return {
    ...components,
    ...customComponents
  };
}
function getDataAttributes(props) {
  const dataAttributes = {
    "data-mode": props.mode ?? void 0,
    "data-required": "required" in props ? props.required : void 0,
    "data-multiple-months": props.numberOfMonths && props.numberOfMonths > 1 || void 0,
    "data-week-numbers": props.showWeekNumber || void 0,
    "data-broadcast-calendar": props.broadcastCalendar || void 0,
    "data-nav-layout": props.navLayout || void 0
  };
  Object.entries(props).forEach(([key, val]) => {
    if (key.startsWith("data-")) {
      dataAttributes[key] = val;
    }
  });
  return dataAttributes;
}
function getDefaultClassNames() {
  const classNames = {};
  for (const key in UI) {
    classNames[UI[key]] = `rdp-${UI[key]}`;
  }
  for (const key in DayFlag) {
    classNames[DayFlag[key]] = `rdp-${DayFlag[key]}`;
  }
  for (const key in SelectionState) {
    classNames[SelectionState[key]] = `rdp-${SelectionState[key]}`;
  }
  for (const key in Animation) {
    classNames[Animation[key]] = `rdp-${Animation[key]}`;
  }
  return classNames;
}
function formatCaption(month, options, dateLib) {
  return (dateLib ?? new DateLib(options)).format(month, "LLLL y");
}
const formatMonthCaption = formatCaption;
function formatDay(date, options, dateLib) {
  return (dateLib ?? new DateLib(options)).format(date, "d");
}
function formatMonthDropdown(month, dateLib = defaultDateLib) {
  return dateLib.format(month, "LLLL");
}
function formatWeekNumber(weekNumber, dateLib = defaultDateLib) {
  if (weekNumber < 10) {
    return dateLib.formatNumber(`0${weekNumber.toLocaleString()}`);
  }
  return dateLib.formatNumber(`${weekNumber.toLocaleString()}`);
}
function formatWeekNumberHeader() {
  return ``;
}
function formatWeekdayName(weekday, options, dateLib) {
  return (dateLib ?? new DateLib(options)).format(weekday, "cccccc");
}
function formatYearDropdown(year, dateLib = defaultDateLib) {
  return dateLib.format(year, "yyyy");
}
const formatYearCaption = formatYearDropdown;
const defaultFormatters = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption,
  formatDay,
  formatMonthCaption,
  formatMonthDropdown,
  formatWeekNumber,
  formatWeekNumberHeader,
  formatWeekdayName,
  formatYearCaption,
  formatYearDropdown
}, Symbol.toStringTag, { value: "Module" }));
function getFormatters(customFormatters) {
  if (customFormatters?.formatMonthCaption && !customFormatters.formatCaption) {
    customFormatters.formatCaption = customFormatters.formatMonthCaption;
  }
  if (customFormatters?.formatYearCaption && !customFormatters.formatYearDropdown) {
    customFormatters.formatYearDropdown = customFormatters.formatYearCaption;
  }
  return {
    ...defaultFormatters,
    ...customFormatters
  };
}
function getMonthOptions(displayMonth, navStart, navEnd, formatters2, dateLib) {
  const { startOfMonth: startOfMonth2, startOfYear: startOfYear2, endOfYear: endOfYear2, eachMonthOfInterval: eachMonthOfInterval2, getMonth: getMonth2 } = dateLib;
  const months2 = eachMonthOfInterval2({
    start: startOfYear2(displayMonth),
    end: endOfYear2(displayMonth)
  });
  const options = months2.map((month) => {
    const label = formatters2.formatMonthDropdown(month, dateLib);
    const value = getMonth2(month);
    const disabled = navStart && month < startOfMonth2(navStart) || navEnd && month > startOfMonth2(navEnd) || false;
    return { value, label, disabled };
  });
  return options;
}
function getStyleForModifiers(dayModifiers, styles = {}, modifiersStyles = {}) {
  let style = { ...styles?.[UI.Day] };
  Object.entries(dayModifiers).filter(([, active]) => active === true).forEach(([modifier]) => {
    style = {
      ...style,
      ...modifiersStyles?.[modifier]
    };
  });
  return style;
}
function getWeekdays(dateLib, ISOWeek, broadcastCalendar) {
  const today = dateLib.today();
  const start = ISOWeek ? dateLib.startOfISOWeek(today) : dateLib.startOfWeek(today);
  const days2 = [];
  for (let i = 0; i < 7; i++) {
    const day = dateLib.addDays(start, i);
    days2.push(day);
  }
  return days2;
}
function getYearOptions(navStart, navEnd, formatters2, dateLib) {
  if (!navStart)
    return void 0;
  if (!navEnd)
    return void 0;
  const { startOfYear: startOfYear2, endOfYear: endOfYear2, addYears: addYears2, getYear: getYear2, isBefore: isBefore2, isSameYear: isSameYear2 } = dateLib;
  const firstNavYear = startOfYear2(navStart);
  const lastNavYear = endOfYear2(navEnd);
  const years = [];
  let year = firstNavYear;
  while (isBefore2(year, lastNavYear) || isSameYear2(year, lastNavYear)) {
    years.push(year);
    year = addYears2(year, 1);
  }
  return years.map((year2) => {
    const label = formatters2.formatYearDropdown(year2, dateLib);
    return {
      value: getYear2(year2),
      label,
      disabled: false
    };
  });
}
function labelGrid(date, options, dateLib) {
  return (dateLib ?? new DateLib(options)).format(date, "LLLL y");
}
const labelCaption = labelGrid;
function labelGridcell(date, modifiers, options, dateLib) {
  let label = (dateLib ?? new DateLib(options)).format(date, "PPPP");
  if (modifiers?.today) {
    label = `Today, ${label}`;
  }
  return label;
}
function labelDayButton(date, modifiers, options, dateLib) {
  let label = (dateLib ?? new DateLib(options)).format(date, "PPPP");
  if (modifiers.today)
    label = `Today, ${label}`;
  if (modifiers.selected)
    label = `${label}, selected`;
  return label;
}
const labelDay = labelDayButton;
function labelNav() {
  return "";
}
function labelMonthDropdown(options) {
  return "Choose the Month";
}
function labelNext(month) {
  return "Go to the Next Month";
}
function labelPrevious(month) {
  return "Go to the Previous Month";
}
function labelWeekday(date, options, dateLib) {
  return (dateLib ?? new DateLib(options)).format(date, "cccc");
}
function labelWeekNumber(weekNumber, options) {
  return `Week ${weekNumber}`;
}
function labelWeekNumberHeader(options) {
  return "Week Number";
}
function labelYearDropdown(options) {
  return "Choose the Year";
}
const defaultLabels = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption,
  labelDay,
  labelDayButton,
  labelGrid,
  labelGridcell,
  labelMonthDropdown,
  labelNav,
  labelNext,
  labelPrevious,
  labelWeekNumber,
  labelWeekNumberHeader,
  labelWeekday,
  labelYearDropdown
}, Symbol.toStringTag, { value: "Module" }));
const asHtmlElement = (element) => {
  if (element instanceof HTMLElement)
    return element;
  return null;
};
const queryMonthEls = (element) => [
  ...element.querySelectorAll("[data-animated-month]") ?? []
];
const queryMonthEl = (element) => asHtmlElement(element.querySelector("[data-animated-month]"));
const queryCaptionEl = (element) => asHtmlElement(element.querySelector("[data-animated-caption]"));
const queryWeeksEl = (element) => asHtmlElement(element.querySelector("[data-animated-weeks]"));
const queryNavEl = (element) => asHtmlElement(element.querySelector("[data-animated-nav]"));
const queryWeekdaysEl = (element) => asHtmlElement(element.querySelector("[data-animated-weekdays]"));
function useAnimation(rootElRef, enabled, { classNames, months: months2, focused, dateLib }) {
  const previousRootElSnapshotRef = reactExports.useRef(null);
  const previousMonthsRef = reactExports.useRef(months2);
  const animatingRef = reactExports.useRef(false);
  reactExports.useLayoutEffect(() => {
    const previousMonths = previousMonthsRef.current;
    previousMonthsRef.current = months2;
    if (!enabled || !rootElRef.current || // safety check because the ref can be set to anything by consumers
    !(rootElRef.current instanceof HTMLElement) || // validation required for the animation to work as expected
    months2.length === 0 || previousMonths.length === 0 || months2.length !== previousMonths.length) {
      return;
    }
    const isSameMonth2 = dateLib.isSameMonth(months2[0].date, previousMonths[0].date);
    const isAfterPreviousMonth = dateLib.isAfter(months2[0].date, previousMonths[0].date);
    const captionAnimationClass = isAfterPreviousMonth ? classNames[Animation.caption_after_enter] : classNames[Animation.caption_before_enter];
    const weeksAnimationClass = isAfterPreviousMonth ? classNames[Animation.weeks_after_enter] : classNames[Animation.weeks_before_enter];
    const previousRootElSnapshot = previousRootElSnapshotRef.current;
    const rootElSnapshot = rootElRef.current.cloneNode(true);
    if (rootElSnapshot instanceof HTMLElement) {
      const currentMonthElsSnapshot = queryMonthEls(rootElSnapshot);
      currentMonthElsSnapshot.forEach((currentMonthElSnapshot) => {
        if (!(currentMonthElSnapshot instanceof HTMLElement))
          return;
        const previousMonthElSnapshot = queryMonthEl(currentMonthElSnapshot);
        if (previousMonthElSnapshot && currentMonthElSnapshot.contains(previousMonthElSnapshot)) {
          currentMonthElSnapshot.removeChild(previousMonthElSnapshot);
        }
        const captionEl = queryCaptionEl(currentMonthElSnapshot);
        if (captionEl) {
          captionEl.classList.remove(captionAnimationClass);
        }
        const weeksEl = queryWeeksEl(currentMonthElSnapshot);
        if (weeksEl) {
          weeksEl.classList.remove(weeksAnimationClass);
        }
      });
      previousRootElSnapshotRef.current = rootElSnapshot;
    } else {
      previousRootElSnapshotRef.current = null;
    }
    if (animatingRef.current || isSameMonth2 || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    focused) {
      return;
    }
    const previousMonthEls = previousRootElSnapshot instanceof HTMLElement ? queryMonthEls(previousRootElSnapshot) : [];
    const currentMonthEls = queryMonthEls(rootElRef.current);
    if (currentMonthEls && currentMonthEls.every((el) => el instanceof HTMLElement) && previousMonthEls && previousMonthEls.every((el) => el instanceof HTMLElement)) {
      animatingRef.current = true;
      rootElRef.current.style.isolation = "isolate";
      const navEl = queryNavEl(rootElRef.current);
      if (navEl) {
        navEl.style.zIndex = "1";
      }
      currentMonthEls.forEach((currentMonthEl, index) => {
        const previousMonthEl = previousMonthEls[index];
        if (!previousMonthEl) {
          return;
        }
        currentMonthEl.style.position = "relative";
        currentMonthEl.style.overflow = "hidden";
        const captionEl = queryCaptionEl(currentMonthEl);
        if (captionEl) {
          captionEl.classList.add(captionAnimationClass);
        }
        const weeksEl = queryWeeksEl(currentMonthEl);
        if (weeksEl) {
          weeksEl.classList.add(weeksAnimationClass);
        }
        const cleanUp = () => {
          animatingRef.current = false;
          if (rootElRef.current) {
            rootElRef.current.style.isolation = "";
          }
          if (navEl) {
            navEl.style.zIndex = "";
          }
          if (captionEl) {
            captionEl.classList.remove(captionAnimationClass);
          }
          if (weeksEl) {
            weeksEl.classList.remove(weeksAnimationClass);
          }
          currentMonthEl.style.position = "";
          currentMonthEl.style.overflow = "";
          if (currentMonthEl.contains(previousMonthEl)) {
            currentMonthEl.removeChild(previousMonthEl);
          }
        };
        previousMonthEl.style.pointerEvents = "none";
        previousMonthEl.style.position = "absolute";
        previousMonthEl.style.overflow = "hidden";
        previousMonthEl.setAttribute("aria-hidden", "true");
        const previousWeekdaysEl = queryWeekdaysEl(previousMonthEl);
        if (previousWeekdaysEl) {
          previousWeekdaysEl.style.opacity = "0";
        }
        const previousCaptionEl = queryCaptionEl(previousMonthEl);
        if (previousCaptionEl) {
          previousCaptionEl.classList.add(isAfterPreviousMonth ? classNames[Animation.caption_before_exit] : classNames[Animation.caption_after_exit]);
          previousCaptionEl.addEventListener("animationend", cleanUp);
        }
        const previousWeeksEl = queryWeeksEl(previousMonthEl);
        if (previousWeeksEl) {
          previousWeeksEl.classList.add(isAfterPreviousMonth ? classNames[Animation.weeks_before_exit] : classNames[Animation.weeks_after_exit]);
        }
        currentMonthEl.insertBefore(previousMonthEl, currentMonthEl.firstChild);
      });
    }
  });
}
function getDates(displayMonths, maxDate, props, dateLib) {
  const firstMonth = displayMonths[0];
  const lastMonth = displayMonths[displayMonths.length - 1];
  const { ISOWeek, fixedWeeks, broadcastCalendar } = props ?? {};
  const { addDays: addDays2, differenceInCalendarDays: differenceInCalendarDays2, differenceInCalendarMonths: differenceInCalendarMonths2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfMonth: endOfMonth2, endOfWeek: endOfWeek2, isAfter: isAfter2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const startWeekFirstDate = broadcastCalendar ? startOfBroadcastWeek2(firstMonth, dateLib) : ISOWeek ? startOfISOWeek2(firstMonth) : startOfWeek2(firstMonth);
  const endWeekLastDate = broadcastCalendar ? endOfBroadcastWeek2(lastMonth) : ISOWeek ? endOfISOWeek2(endOfMonth2(lastMonth)) : endOfWeek2(endOfMonth2(lastMonth));
  const nOfDays = differenceInCalendarDays2(endWeekLastDate, startWeekFirstDate);
  const nOfMonths = differenceInCalendarMonths2(lastMonth, firstMonth) + 1;
  const dates = [];
  for (let i = 0; i <= nOfDays; i++) {
    const date = addDays2(startWeekFirstDate, i);
    if (maxDate && isAfter2(date, maxDate)) {
      break;
    }
    dates.push(date);
  }
  const nrOfDaysWithFixedWeeks = broadcastCalendar ? 35 : 42;
  const extraDates = nrOfDaysWithFixedWeeks * nOfMonths;
  if (fixedWeeks && dates.length < extraDates) {
    const daysToAdd = extraDates - dates.length;
    for (let i = 0; i < daysToAdd; i++) {
      const date = addDays2(dates[dates.length - 1], 1);
      dates.push(date);
    }
  }
  return dates;
}
function getDays(calendarMonths) {
  const initialDays = [];
  return calendarMonths.reduce((days2, month) => {
    const weekDays = month.weeks.reduce((weekDays2, week) => {
      return [...weekDays2, ...week.days];
    }, initialDays);
    return [...days2, ...weekDays];
  }, initialDays);
}
function getDisplayMonths(firstDisplayedMonth, calendarEndMonth, props, dateLib) {
  const { numberOfMonths = 1 } = props;
  const months2 = [];
  for (let i = 0; i < numberOfMonths; i++) {
    const month = dateLib.addMonths(firstDisplayedMonth, i);
    if (calendarEndMonth && month > calendarEndMonth) {
      break;
    }
    months2.push(month);
  }
  return months2;
}
function getInitialMonth(props, dateLib) {
  const { month, defaultMonth, today = dateLib.today(), numberOfMonths = 1, endMonth, startMonth } = props;
  let initialMonth = month || defaultMonth || today;
  const { differenceInCalendarMonths: differenceInCalendarMonths2, addMonths: addMonths2, startOfMonth: startOfMonth2 } = dateLib;
  if (endMonth && differenceInCalendarMonths2(endMonth, initialMonth) < 0) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths2(endMonth, offset);
  }
  if (startMonth && differenceInCalendarMonths2(initialMonth, startMonth) < 0) {
    initialMonth = startMonth;
  }
  return startOfMonth2(initialMonth);
}
function getMonths(displayMonths, dates, props, dateLib) {
  const { addDays: addDays2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfMonth: endOfMonth2, endOfWeek: endOfWeek2, getISOWeek: getISOWeek2, getWeek: getWeek2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const dayPickerMonths = displayMonths.reduce((months2, month) => {
    const firstDateOfFirstWeek = props.broadcastCalendar ? startOfBroadcastWeek2(month, dateLib) : props.ISOWeek ? startOfISOWeek2(month) : startOfWeek2(month);
    const lastDateOfLastWeek = props.broadcastCalendar ? endOfBroadcastWeek2(month) : props.ISOWeek ? endOfISOWeek2(endOfMonth2(month)) : endOfWeek2(endOfMonth2(month));
    const monthDates = dates.filter((date) => {
      return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
    });
    const nrOfDaysWithFixedWeeks = props.broadcastCalendar ? 35 : 42;
    if (props.fixedWeeks && monthDates.length < nrOfDaysWithFixedWeeks) {
      const extraDates = dates.filter((date) => {
        const daysToAdd = nrOfDaysWithFixedWeeks - monthDates.length;
        return date > lastDateOfLastWeek && date <= addDays2(lastDateOfLastWeek, daysToAdd);
      });
      monthDates.push(...extraDates);
    }
    const weeks = monthDates.reduce((weeks2, date) => {
      const weekNumber = props.ISOWeek ? getISOWeek2(date) : getWeek2(date);
      const week = weeks2.find((week2) => week2.weekNumber === weekNumber);
      const day = new CalendarDay(date, month, dateLib);
      if (!week) {
        weeks2.push(new CalendarWeek(weekNumber, [day]));
      } else {
        week.days.push(day);
      }
      return weeks2;
    }, []);
    const dayPickerMonth = new CalendarMonth(month, weeks);
    months2.push(dayPickerMonth);
    return months2;
  }, []);
  if (!props.reverseMonths) {
    return dayPickerMonths;
  } else {
    return dayPickerMonths.reverse();
  }
}
function getNavMonths(props, dateLib) {
  let { startMonth, endMonth } = props;
  const { startOfYear: startOfYear2, startOfDay: startOfDay2, startOfMonth: startOfMonth2, endOfMonth: endOfMonth2, addYears: addYears2, endOfYear: endOfYear2, newDate: newDate2, today } = dateLib;
  const { fromYear, toYear, fromMonth, toMonth } = props;
  if (!startMonth && fromMonth) {
    startMonth = fromMonth;
  }
  if (!startMonth && fromYear) {
    startMonth = dateLib.newDate(fromYear, 0, 1);
  }
  if (!endMonth && toMonth) {
    endMonth = toMonth;
  }
  if (!endMonth && toYear) {
    endMonth = newDate2(toYear, 11, 31);
  }
  const hasYearDropdown = props.captionLayout === "dropdown" || props.captionLayout === "dropdown-years";
  if (startMonth) {
    startMonth = startOfMonth2(startMonth);
  } else if (fromYear) {
    startMonth = newDate2(fromYear, 0, 1);
  } else if (!startMonth && hasYearDropdown) {
    startMonth = startOfYear2(addYears2(props.today ?? today(), -100));
  }
  if (endMonth) {
    endMonth = endOfMonth2(endMonth);
  } else if (toYear) {
    endMonth = newDate2(toYear, 11, 31);
  } else if (!endMonth && hasYearDropdown) {
    endMonth = endOfYear2(props.today ?? today());
  }
  return [
    startMonth ? startOfDay2(startMonth) : startMonth,
    endMonth ? startOfDay2(endMonth) : endMonth
  ];
}
function getNextMonth(firstDisplayedMonth, calendarEndMonth, options, dateLib) {
  if (options.disableNavigation) {
    return void 0;
  }
  const { pagedNavigation, numberOfMonths = 1 } = options;
  const { startOfMonth: startOfMonth2, addMonths: addMonths2, differenceInCalendarMonths: differenceInCalendarMonths2 } = dateLib;
  const offset = pagedNavigation ? numberOfMonths : 1;
  const month = startOfMonth2(firstDisplayedMonth);
  if (!calendarEndMonth) {
    return addMonths2(month, offset);
  }
  const monthsDiff = differenceInCalendarMonths2(calendarEndMonth, firstDisplayedMonth);
  if (monthsDiff < numberOfMonths) {
    return void 0;
  }
  return addMonths2(month, offset);
}
function getPreviousMonth(firstDisplayedMonth, calendarStartMonth, options, dateLib) {
  if (options.disableNavigation) {
    return void 0;
  }
  const { pagedNavigation, numberOfMonths } = options;
  const { startOfMonth: startOfMonth2, addMonths: addMonths2, differenceInCalendarMonths: differenceInCalendarMonths2 } = dateLib;
  const offset = pagedNavigation ? numberOfMonths ?? 1 : 1;
  const month = startOfMonth2(firstDisplayedMonth);
  if (!calendarStartMonth) {
    return addMonths2(month, -offset);
  }
  const monthsDiff = differenceInCalendarMonths2(month, calendarStartMonth);
  if (monthsDiff <= 0) {
    return void 0;
  }
  return addMonths2(month, -offset);
}
function getWeeks(months2) {
  const initialWeeks = [];
  return months2.reduce((weeks, month) => {
    return [...weeks, ...month.weeks];
  }, initialWeeks);
}
function useControlledValue(defaultValue, controlledValue) {
  const [uncontrolledValue, setValue] = reactExports.useState(defaultValue);
  const value = controlledValue === void 0 ? uncontrolledValue : controlledValue;
  return [value, setValue];
}
function useCalendar(props, dateLib) {
  const [navStart, navEnd] = getNavMonths(props, dateLib);
  const { startOfMonth: startOfMonth2, endOfMonth: endOfMonth2 } = dateLib;
  const initialMonth = getInitialMonth(props, dateLib);
  const [firstMonth, setFirstMonth] = useControlledValue(
    initialMonth,
    // initialMonth is always computed from props.month if provided
    props.month ? initialMonth : void 0
  );
  reactExports.useEffect(() => {
    const newInitialMonth = getInitialMonth(props, dateLib);
    setFirstMonth(newInitialMonth);
  }, [props.timeZone]);
  const displayMonths = getDisplayMonths(firstMonth, navEnd, props, dateLib);
  const dates = getDates(displayMonths, props.endMonth ? endOfMonth2(props.endMonth) : void 0, props, dateLib);
  const months2 = getMonths(displayMonths, dates, props, dateLib);
  const weeks = getWeeks(months2);
  const days2 = getDays(months2);
  const previousMonth = getPreviousMonth(firstMonth, navStart, props, dateLib);
  const nextMonth = getNextMonth(firstMonth, navEnd, props, dateLib);
  const { disableNavigation, onMonthChange } = props;
  const isDayInCalendar = (day) => weeks.some((week) => week.days.some((d) => d.isEqualTo(day)));
  const goToMonth = (date) => {
    if (disableNavigation) {
      return;
    }
    let newMonth = startOfMonth2(date);
    if (navStart && newMonth < startOfMonth2(navStart)) {
      newMonth = startOfMonth2(navStart);
    }
    if (navEnd && newMonth > startOfMonth2(navEnd)) {
      newMonth = startOfMonth2(navEnd);
    }
    setFirstMonth(newMonth);
    onMonthChange?.(newMonth);
  };
  const goToDay = (day) => {
    if (isDayInCalendar(day)) {
      return;
    }
    goToMonth(day.date);
  };
  const calendar = {
    months: months2,
    weeks,
    days: days2,
    navStart,
    navEnd,
    previousMonth,
    nextMonth,
    goToMonth,
    goToDay
  };
  return calendar;
}
var FocusTargetPriority;
(function(FocusTargetPriority2) {
  FocusTargetPriority2[FocusTargetPriority2["Today"] = 0] = "Today";
  FocusTargetPriority2[FocusTargetPriority2["Selected"] = 1] = "Selected";
  FocusTargetPriority2[FocusTargetPriority2["LastFocused"] = 2] = "LastFocused";
  FocusTargetPriority2[FocusTargetPriority2["FocusedModifier"] = 3] = "FocusedModifier";
})(FocusTargetPriority || (FocusTargetPriority = {}));
function isFocusableDay(modifiers) {
  return !modifiers[DayFlag.disabled] && !modifiers[DayFlag.hidden] && !modifiers[DayFlag.outside];
}
function calculateFocusTarget(days2, getModifiers, isSelected, lastFocused) {
  let focusTarget;
  let foundFocusTargetPriority = -1;
  for (const day of days2) {
    const modifiers = getModifiers(day);
    if (isFocusableDay(modifiers)) {
      if (modifiers[DayFlag.focused] && foundFocusTargetPriority < FocusTargetPriority.FocusedModifier) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.FocusedModifier;
      } else if (lastFocused?.isEqualTo(day) && foundFocusTargetPriority < FocusTargetPriority.LastFocused) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.LastFocused;
      } else if (isSelected(day.date) && foundFocusTargetPriority < FocusTargetPriority.Selected) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.Selected;
      } else if (modifiers[DayFlag.today] && foundFocusTargetPriority < FocusTargetPriority.Today) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.Today;
      }
    }
  }
  if (!focusTarget) {
    focusTarget = days2.find((day) => isFocusableDay(getModifiers(day)));
  }
  return focusTarget;
}
function getFocusableDate(moveBy, moveDir, refDate, navStart, navEnd, props, dateLib) {
  const { ISOWeek, broadcastCalendar } = props;
  const { addDays: addDays2, addMonths: addMonths2, addWeeks: addWeeks2, addYears: addYears2, endOfBroadcastWeek: endOfBroadcastWeek2, endOfISOWeek: endOfISOWeek2, endOfWeek: endOfWeek2, max: max2, min: min2, startOfBroadcastWeek: startOfBroadcastWeek2, startOfISOWeek: startOfISOWeek2, startOfWeek: startOfWeek2 } = dateLib;
  const moveFns = {
    day: addDays2,
    week: addWeeks2,
    month: addMonths2,
    year: addYears2,
    startOfWeek: (date) => broadcastCalendar ? startOfBroadcastWeek2(date, dateLib) : ISOWeek ? startOfISOWeek2(date) : startOfWeek2(date),
    endOfWeek: (date) => broadcastCalendar ? endOfBroadcastWeek2(date) : ISOWeek ? endOfISOWeek2(date) : endOfWeek2(date)
  };
  let focusableDate = moveFns[moveBy](refDate, moveDir === "after" ? 1 : -1);
  if (moveDir === "before" && navStart) {
    focusableDate = max2([navStart, focusableDate]);
  } else if (moveDir === "after" && navEnd) {
    focusableDate = min2([navEnd, focusableDate]);
  }
  return focusableDate;
}
function getNextFocus(moveBy, moveDir, refDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt = 0) {
  if (attempt > 365) {
    return void 0;
  }
  const focusableDate = getFocusableDate(moveBy, moveDir, refDay.date, calendarStartMonth, calendarEndMonth, props, dateLib);
  const isDisabled = Boolean(props.disabled && dateMatchModifiers(focusableDate, props.disabled, dateLib));
  const isHidden = Boolean(props.hidden && dateMatchModifiers(focusableDate, props.hidden, dateLib));
  const targetMonth = focusableDate;
  const focusDay = new CalendarDay(focusableDate, targetMonth, dateLib);
  if (!isDisabled && !isHidden) {
    return focusDay;
  }
  return getNextFocus(moveBy, moveDir, focusDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt + 1);
}
function useFocus(props, calendar, getModifiers, isSelected, dateLib) {
  const { autoFocus } = props;
  const [lastFocused, setLastFocused] = reactExports.useState();
  const focusTarget = calculateFocusTarget(calendar.days, getModifiers, isSelected || (() => false), lastFocused);
  const [focusedDay, setFocused] = reactExports.useState(autoFocus ? focusTarget : void 0);
  const blur = () => {
    setLastFocused(focusedDay);
    setFocused(void 0);
  };
  const moveFocus = (moveBy, moveDir) => {
    if (!focusedDay)
      return;
    const nextFocus = getNextFocus(moveBy, moveDir, focusedDay, calendar.navStart, calendar.navEnd, props, dateLib);
    if (!nextFocus)
      return;
    calendar.goToDay(nextFocus);
    setFocused(nextFocus);
  };
  const isFocusTarget = (day) => {
    return Boolean(focusTarget?.isEqualTo(day));
  };
  const useFocus2 = {
    isFocusTarget,
    setFocused,
    focused: focusedDay,
    blur,
    moveFocus
  };
  return useFocus2;
}
function useMulti(props, dateLib) {
  const { selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const { isSameDay: isSameDay2 } = dateLib;
  const isSelected = (date) => {
    return selected?.some((d) => isSameDay2(d, date)) ?? false;
  };
  const { min: min2, max: max2 } = props;
  const select = (triggerDate, modifiers, e) => {
    let newDates = [...selected ?? []];
    if (isSelected(triggerDate)) {
      if (selected?.length === min2) {
        return;
      }
      if (required && selected?.length === 1) {
        return;
      }
      newDates = selected?.filter((d) => !isSameDay2(d, triggerDate));
    } else {
      if (selected?.length === max2) {
        newDates = [triggerDate];
      } else {
        newDates = [...newDates, triggerDate];
      }
    }
    if (!onSelect) {
      setSelected(newDates);
    }
    onSelect?.(newDates, triggerDate, modifiers, e);
    return newDates;
  };
  return {
    selected,
    select,
    isSelected
  };
}
function addToRange(date, initialRange, min2 = 0, max2 = 0, required = false, dateLib = defaultDateLib) {
  const { from, to } = initialRange || {};
  const { isSameDay: isSameDay2, isAfter: isAfter2, isBefore: isBefore2 } = dateLib;
  let range;
  if (!from && !to) {
    range = { from: date, to: min2 > 0 ? void 0 : date };
  } else if (from && !to) {
    if (isSameDay2(from, date)) {
      if (required) {
        range = { from, to: void 0 };
      } else {
        range = void 0;
      }
    } else if (isBefore2(date, from)) {
      range = { from: date, to: from };
    } else {
      range = { from, to: date };
    }
  } else if (from && to) {
    if (isSameDay2(from, date) && isSameDay2(to, date)) {
      if (required) {
        range = { from, to };
      } else {
        range = void 0;
      }
    } else if (isSameDay2(from, date)) {
      range = { from, to: min2 > 0 ? void 0 : date };
    } else if (isSameDay2(to, date)) {
      range = { from: date, to: min2 > 0 ? void 0 : date };
    } else if (isBefore2(date, from)) {
      range = { from: date, to };
    } else if (isAfter2(date, from)) {
      range = { from, to: date };
    } else if (isAfter2(date, to)) {
      range = { from, to: date };
    } else {
      throw new Error("Invalid range");
    }
  }
  if (range?.from && range?.to) {
    const diff = dateLib.differenceInCalendarDays(range.to, range.from);
    if (max2 > 0 && diff > max2) {
      range = { from: date, to: void 0 };
    } else if (min2 > 1 && diff < min2) {
      range = { from: date, to: void 0 };
    }
  }
  return range;
}
function rangeContainsDayOfWeek(range, dayOfWeek, dateLib = defaultDateLib) {
  const dayOfWeekArr = !Array.isArray(dayOfWeek) ? [dayOfWeek] : dayOfWeek;
  let date = range.from;
  const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
  const totalDaysLimit = Math.min(totalDays, 6);
  for (let i = 0; i <= totalDaysLimit; i++) {
    if (dayOfWeekArr.includes(date.getDay())) {
      return true;
    }
    date = dateLib.addDays(date, 1);
  }
  return false;
}
function rangeOverlaps(rangeLeft, rangeRight, dateLib = defaultDateLib) {
  return rangeIncludesDate(rangeLeft, rangeRight.from, false, dateLib) || rangeIncludesDate(rangeLeft, rangeRight.to, false, dateLib) || rangeIncludesDate(rangeRight, rangeLeft.from, false, dateLib) || rangeIncludesDate(rangeRight, rangeLeft.to, false, dateLib);
}
function rangeContainsModifiers(range, modifiers, dateLib = defaultDateLib) {
  const matchers = Array.isArray(modifiers) ? modifiers : [modifiers];
  const nonFunctionMatchers = matchers.filter((matcher) => typeof matcher !== "function");
  const nonFunctionMatchersResult = nonFunctionMatchers.some((matcher) => {
    if (typeof matcher === "boolean")
      return matcher;
    if (dateLib.isDate(matcher)) {
      return rangeIncludesDate(range, matcher, false, dateLib);
    }
    if (isDatesArray(matcher, dateLib)) {
      return matcher.some((date) => rangeIncludesDate(range, date, false, dateLib));
    }
    if (isDateRange(matcher)) {
      if (matcher.from && matcher.to) {
        return rangeOverlaps(range, { from: matcher.from, to: matcher.to }, dateLib);
      }
      return false;
    }
    if (isDayOfWeekType(matcher)) {
      return rangeContainsDayOfWeek(range, matcher.dayOfWeek, dateLib);
    }
    if (isDateInterval(matcher)) {
      const isClosedInterval = dateLib.isAfter(matcher.before, matcher.after);
      if (isClosedInterval) {
        return rangeOverlaps(range, {
          from: dateLib.addDays(matcher.after, 1),
          to: dateLib.addDays(matcher.before, -1)
        }, dateLib);
      }
      return dateMatchModifiers(range.from, matcher, dateLib) || dateMatchModifiers(range.to, matcher, dateLib);
    }
    if (isDateAfterType(matcher) || isDateBeforeType(matcher)) {
      return dateMatchModifiers(range.from, matcher, dateLib) || dateMatchModifiers(range.to, matcher, dateLib);
    }
    return false;
  });
  if (nonFunctionMatchersResult) {
    return true;
  }
  const functionMatchers = matchers.filter((matcher) => typeof matcher === "function");
  if (functionMatchers.length) {
    let date = range.from;
    const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
    for (let i = 0; i <= totalDays; i++) {
      if (functionMatchers.some((matcher) => matcher(date))) {
        return true;
      }
      date = dateLib.addDays(date, 1);
    }
  }
  return false;
}
function useRange(props, dateLib) {
  const { disabled, excludeDisabled, selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const isSelected = (date) => selected && rangeIncludesDate(selected, date, false, dateLib);
  const select = (triggerDate, modifiers, e) => {
    const { min: min2, max: max2 } = props;
    const newRange = triggerDate ? addToRange(triggerDate, selected, min2, max2, required, dateLib) : void 0;
    if (excludeDisabled && disabled && newRange?.from && newRange.to) {
      if (rangeContainsModifiers({ from: newRange.from, to: newRange.to }, disabled, dateLib)) {
        newRange.from = triggerDate;
        newRange.to = void 0;
      }
    }
    if (!onSelect) {
      setSelected(newRange);
    }
    onSelect?.(newRange, triggerDate, modifiers, e);
    return newRange;
  };
  return {
    selected,
    select,
    isSelected
  };
}
function useSingle(props, dateLib) {
  const { selected: initiallySelected, required, onSelect } = props;
  const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
  const selected = !onSelect ? internallySelected : initiallySelected;
  const { isSameDay: isSameDay2 } = dateLib;
  const isSelected = (compareDate) => {
    return selected ? isSameDay2(selected, compareDate) : false;
  };
  const select = (triggerDate, modifiers, e) => {
    let newDate2 = triggerDate;
    if (!required && selected && selected && isSameDay2(triggerDate, selected)) {
      newDate2 = void 0;
    }
    if (!onSelect) {
      setSelected(newDate2);
    }
    if (required) {
      onSelect?.(newDate2, triggerDate, modifiers, e);
    } else {
      onSelect?.(newDate2, triggerDate, modifiers, e);
    }
    return newDate2;
  };
  return {
    selected,
    select,
    isSelected
  };
}
function useSelection(props, dateLib) {
  const single = useSingle(props, dateLib);
  const multi = useMulti(props, dateLib);
  const range = useRange(props, dateLib);
  switch (props.mode) {
    case "single":
      return single;
    case "multiple":
      return multi;
    case "range":
      return range;
    default:
      return void 0;
  }
}
function DayPicker$1(initialProps) {
  let props = initialProps;
  if (props.timeZone) {
    props = {
      ...initialProps
    };
    if (props.today) {
      props.today = new TZDate(props.today, props.timeZone);
    }
    if (props.month) {
      props.month = new TZDate(props.month, props.timeZone);
    }
    if (props.defaultMonth) {
      props.defaultMonth = new TZDate(props.defaultMonth, props.timeZone);
    }
    if (props.startMonth) {
      props.startMonth = new TZDate(props.startMonth, props.timeZone);
    }
    if (props.endMonth) {
      props.endMonth = new TZDate(props.endMonth, props.timeZone);
    }
    if (props.mode === "single" && props.selected) {
      props.selected = new TZDate(props.selected, props.timeZone);
    } else if (props.mode === "multiple" && props.selected) {
      props.selected = props.selected?.map((date) => new TZDate(date, props.timeZone));
    } else if (props.mode === "range" && props.selected) {
      props.selected = {
        from: props.selected.from ? new TZDate(props.selected.from, props.timeZone) : void 0,
        to: props.selected.to ? new TZDate(props.selected.to, props.timeZone) : void 0
      };
    }
  }
  const { components: components2, formatters: formatters2, labels, dateLib, locale, classNames } = reactExports.useMemo(() => {
    const locale2 = { ...enUS, ...props.locale };
    const dateLib2 = new DateLib({
      locale: locale2,
      weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
      firstWeekContainsDate: props.firstWeekContainsDate,
      useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
      timeZone: props.timeZone,
      numerals: props.numerals
    }, props.dateLib);
    return {
      dateLib: dateLib2,
      components: getComponents(props.components),
      formatters: getFormatters(props.formatters),
      labels: { ...defaultLabels, ...props.labels },
      locale: locale2,
      classNames: { ...getDefaultClassNames(), ...props.classNames }
    };
  }, [
    props.locale,
    props.broadcastCalendar,
    props.weekStartsOn,
    props.firstWeekContainsDate,
    props.useAdditionalWeekYearTokens,
    props.useAdditionalDayOfYearTokens,
    props.timeZone,
    props.numerals,
    props.dateLib,
    props.components,
    props.formatters,
    props.labels,
    props.classNames
  ]);
  const { captionLayout, mode, navLayout, numberOfMonths = 1, onDayBlur, onDayClick, onDayFocus, onDayKeyDown, onDayMouseEnter, onDayMouseLeave, onNextClick, onPrevClick, showWeekNumber, styles } = props;
  const { formatCaption: formatCaption2, formatDay: formatDay2, formatMonthDropdown: formatMonthDropdown2, formatWeekNumber: formatWeekNumber2, formatWeekNumberHeader: formatWeekNumberHeader2, formatWeekdayName: formatWeekdayName2, formatYearDropdown: formatYearDropdown2 } = formatters2;
  const calendar = useCalendar(props, dateLib);
  const { days: days2, months: months2, navStart, navEnd, previousMonth, nextMonth, goToMonth } = calendar;
  const getModifiers = createGetModifiers(days2, props, dateLib);
  const { isSelected, select, selected: selectedValue } = useSelection(props, dateLib) ?? {};
  const { blur, focused, isFocusTarget, moveFocus, setFocused } = useFocus(props, calendar, getModifiers, isSelected ?? (() => false), dateLib);
  const { labelDayButton: labelDayButton2, labelGridcell: labelGridcell2, labelGrid: labelGrid2, labelMonthDropdown: labelMonthDropdown2, labelNav: labelNav2, labelPrevious: labelPrevious2, labelNext: labelNext2, labelWeekday: labelWeekday2, labelWeekNumber: labelWeekNumber2, labelWeekNumberHeader: labelWeekNumberHeader2, labelYearDropdown: labelYearDropdown2 } = labels;
  const weekdays = reactExports.useMemo(() => getWeekdays(dateLib, props.ISOWeek), [dateLib, props.ISOWeek]);
  const isInteractive = mode !== void 0 || onDayClick !== void 0;
  const handlePreviousClick = reactExports.useCallback(() => {
    if (!previousMonth)
      return;
    goToMonth(previousMonth);
    onPrevClick?.(previousMonth);
  }, [previousMonth, goToMonth, onPrevClick]);
  const handleNextClick = reactExports.useCallback(() => {
    if (!nextMonth)
      return;
    goToMonth(nextMonth);
    onNextClick?.(nextMonth);
  }, [goToMonth, nextMonth, onNextClick]);
  const handleDayClick = reactExports.useCallback((day, m) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFocused(day);
    select?.(day.date, m, e);
    onDayClick?.(day.date, m, e);
  }, [select, onDayClick, setFocused]);
  const handleDayFocus = reactExports.useCallback((day, m) => (e) => {
    setFocused(day);
    onDayFocus?.(day.date, m, e);
  }, [onDayFocus, setFocused]);
  const handleDayBlur = reactExports.useCallback((day, m) => (e) => {
    blur();
    onDayBlur?.(day.date, m, e);
  }, [blur, onDayBlur]);
  const handleDayKeyDown = reactExports.useCallback((day, modifiers) => (e) => {
    const keyMap = {
      ArrowLeft: ["day", props.dir === "rtl" ? "after" : "before"],
      ArrowRight: ["day", props.dir === "rtl" ? "before" : "after"],
      ArrowDown: ["week", "after"],
      ArrowUp: ["week", "before"],
      PageUp: [e.shiftKey ? "year" : "month", "before"],
      PageDown: [e.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (keyMap[e.key]) {
      e.preventDefault();
      e.stopPropagation();
      const [moveBy, moveDir] = keyMap[e.key];
      moveFocus(moveBy, moveDir);
    }
    onDayKeyDown?.(day.date, modifiers, e);
  }, [moveFocus, onDayKeyDown, props.dir]);
  const handleDayMouseEnter = reactExports.useCallback((day, modifiers) => (e) => {
    onDayMouseEnter?.(day.date, modifiers, e);
  }, [onDayMouseEnter]);
  const handleDayMouseLeave = reactExports.useCallback((day, modifiers) => (e) => {
    onDayMouseLeave?.(day.date, modifiers, e);
  }, [onDayMouseLeave]);
  const handleMonthChange = reactExports.useCallback((date) => (e) => {
    const selectedMonth = Number(e.target.value);
    const month = dateLib.setMonth(dateLib.startOfMonth(date), selectedMonth);
    goToMonth(month);
  }, [dateLib, goToMonth]);
  const handleYearChange = reactExports.useCallback((date) => (e) => {
    const selectedYear = Number(e.target.value);
    const month = dateLib.setYear(dateLib.startOfMonth(date), selectedYear);
    goToMonth(month);
  }, [dateLib, goToMonth]);
  const { className, style } = reactExports.useMemo(() => ({
    className: [classNames[UI.Root], props.className].filter(Boolean).join(" "),
    style: { ...styles?.[UI.Root], ...props.style }
  }), [classNames, props.className, props.style, styles]);
  const dataAttributes = getDataAttributes(props);
  const rootElRef = reactExports.useRef(null);
  useAnimation(rootElRef, Boolean(props.animate), {
    classNames,
    months: months2,
    focused,
    dateLib
  });
  const contextValue = {
    dayPickerProps: props,
    selected: selectedValue,
    select,
    isSelected,
    months: months2,
    nextMonth,
    previousMonth,
    goToMonth,
    getModifiers,
    components: components2,
    classNames,
    styles,
    labels,
    formatters: formatters2
  };
  return React.createElement(
    dayPickerContext.Provider,
    { value: contextValue },
    React.createElement(
      components2.Root,
      { rootRef: props.animate ? rootElRef : void 0, className, style, dir: props.dir, id: props.id, lang: props.lang, nonce: props.nonce, title: props.title, role: props.role, "aria-label": props["aria-label"], ...dataAttributes },
      React.createElement(
        components2.Months,
        { className: classNames[UI.Months], style: styles?.[UI.Months] },
        !props.hideNavigation && !navLayout && React.createElement(components2.Nav, { "data-animated-nav": props.animate ? "true" : void 0, className: classNames[UI.Nav], style: styles?.[UI.Nav], "aria-label": labelNav2(), onPreviousClick: handlePreviousClick, onNextClick: handleNextClick, previousMonth, nextMonth }),
        months2.map((calendarMonth, displayIndex) => {
          const dropdownMonths = getMonthOptions(calendarMonth.date, navStart, navEnd, formatters2, dateLib);
          const dropdownYears = getYearOptions(navStart, navEnd, formatters2, dateLib);
          return React.createElement(
            components2.Month,
            { "data-animated-month": props.animate ? "true" : void 0, className: classNames[UI.Month], style: styles?.[UI.Month], key: displayIndex, displayIndex, calendarMonth },
            navLayout === "around" && !props.hideNavigation && displayIndex === 0 && React.createElement(
              components2.PreviousMonthButton,
              { type: "button", className: classNames[UI.PreviousMonthButton], tabIndex: previousMonth ? void 0 : -1, "aria-disabled": previousMonth ? void 0 : true, "aria-label": labelPrevious2(previousMonth), onClick: handlePreviousClick, "data-animated-button": props.animate ? "true" : void 0 },
              React.createElement(components2.Chevron, { disabled: previousMonth ? void 0 : true, className: classNames[UI.Chevron], orientation: props.dir === "rtl" ? "right" : "left" })
            ),
            React.createElement(components2.MonthCaption, { "data-animated-caption": props.animate ? "true" : void 0, className: classNames[UI.MonthCaption], style: styles?.[UI.MonthCaption], calendarMonth, displayIndex }, captionLayout?.startsWith("dropdown") ? React.createElement(
              components2.DropdownNav,
              { className: classNames[UI.Dropdowns], style: styles?.[UI.Dropdowns] },
              captionLayout === "dropdown" || captionLayout === "dropdown-months" ? React.createElement(components2.MonthsDropdown, { className: classNames[UI.MonthsDropdown], "aria-label": labelMonthDropdown2(), classNames, components: components2, disabled: Boolean(props.disableNavigation), onChange: handleMonthChange(calendarMonth.date), options: dropdownMonths, style: styles?.[UI.Dropdown], value: dateLib.getMonth(calendarMonth.date) }) : React.createElement("span", null, formatMonthDropdown2(calendarMonth.date, dateLib)),
              captionLayout === "dropdown" || captionLayout === "dropdown-years" ? React.createElement(components2.YearsDropdown, { className: classNames[UI.YearsDropdown], "aria-label": labelYearDropdown2(dateLib.options), classNames, components: components2, disabled: Boolean(props.disableNavigation), onChange: handleYearChange(calendarMonth.date), options: dropdownYears, style: styles?.[UI.Dropdown], value: dateLib.getYear(calendarMonth.date) }) : React.createElement("span", null, formatYearDropdown2(calendarMonth.date, dateLib)),
              React.createElement("span", { role: "status", "aria-live": "polite", style: {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
                wordWrap: "normal"
              } }, formatCaption2(calendarMonth.date, dateLib.options, dateLib))
            ) : React.createElement(components2.CaptionLabel, { className: classNames[UI.CaptionLabel], role: "status", "aria-live": "polite" }, formatCaption2(calendarMonth.date, dateLib.options, dateLib))),
            navLayout === "around" && !props.hideNavigation && displayIndex === numberOfMonths - 1 && React.createElement(
              components2.NextMonthButton,
              { type: "button", className: classNames[UI.NextMonthButton], tabIndex: nextMonth ? void 0 : -1, "aria-disabled": nextMonth ? void 0 : true, "aria-label": labelNext2(nextMonth), onClick: handleNextClick, "data-animated-button": props.animate ? "true" : void 0 },
              React.createElement(components2.Chevron, { disabled: nextMonth ? void 0 : true, className: classNames[UI.Chevron], orientation: props.dir === "rtl" ? "left" : "right" })
            ),
            displayIndex === numberOfMonths - 1 && navLayout === "after" && !props.hideNavigation && React.createElement(components2.Nav, { "data-animated-nav": props.animate ? "true" : void 0, className: classNames[UI.Nav], style: styles?.[UI.Nav], "aria-label": labelNav2(), onPreviousClick: handlePreviousClick, onNextClick: handleNextClick, previousMonth, nextMonth }),
            React.createElement(
              components2.MonthGrid,
              { role: "grid", "aria-multiselectable": mode === "multiple" || mode === "range", "aria-label": labelGrid2(calendarMonth.date, dateLib.options, dateLib) || void 0, className: classNames[UI.MonthGrid], style: styles?.[UI.MonthGrid] },
              !props.hideWeekdays && React.createElement(
                components2.Weekdays,
                { "data-animated-weekdays": props.animate ? "true" : void 0, className: classNames[UI.Weekdays], style: styles?.[UI.Weekdays] },
                showWeekNumber && React.createElement(components2.WeekNumberHeader, { "aria-label": labelWeekNumberHeader2(dateLib.options), className: classNames[UI.WeekNumberHeader], style: styles?.[UI.WeekNumberHeader], scope: "col" }, formatWeekNumberHeader2()),
                weekdays.map((weekday, i) => React.createElement(components2.Weekday, { "aria-label": labelWeekday2(weekday, dateLib.options, dateLib), className: classNames[UI.Weekday], key: i, style: styles?.[UI.Weekday], scope: "col" }, formatWeekdayName2(weekday, dateLib.options, dateLib)))
              ),
              React.createElement(components2.Weeks, { "data-animated-weeks": props.animate ? "true" : void 0, className: classNames[UI.Weeks], style: styles?.[UI.Weeks] }, calendarMonth.weeks.map((week, weekIndex) => {
                return React.createElement(
                  components2.Week,
                  { className: classNames[UI.Week], key: week.weekNumber, style: styles?.[UI.Week], week },
                  showWeekNumber && React.createElement(components2.WeekNumber, { week, style: styles?.[UI.WeekNumber], "aria-label": labelWeekNumber2(week.weekNumber, {
                    locale
                  }), className: classNames[UI.WeekNumber], scope: "row", role: "rowheader" }, formatWeekNumber2(week.weekNumber, dateLib)),
                  week.days.map((day) => {
                    const { date } = day;
                    const modifiers = getModifiers(day);
                    modifiers[DayFlag.focused] = !modifiers.hidden && Boolean(focused?.isEqualTo(day));
                    modifiers[SelectionState.selected] = isSelected?.(date) || modifiers.selected;
                    if (isDateRange(selectedValue)) {
                      const { from, to } = selectedValue;
                      modifiers[SelectionState.range_start] = Boolean(from && to && dateLib.isSameDay(date, from));
                      modifiers[SelectionState.range_end] = Boolean(from && to && dateLib.isSameDay(date, to));
                      modifiers[SelectionState.range_middle] = rangeIncludesDate(selectedValue, date, true, dateLib);
                    }
                    const style2 = getStyleForModifiers(modifiers, styles, props.modifiersStyles);
                    const className2 = getClassNamesForModifiers(modifiers, classNames, props.modifiersClassNames);
                    const ariaLabel = !isInteractive && !modifiers.hidden ? labelGridcell2(date, modifiers, dateLib.options, dateLib) : void 0;
                    return React.createElement(components2.Day, { key: `${dateLib.format(date, "yyyy-MM-dd")}_${dateLib.format(day.displayMonth, "yyyy-MM")}`, day, modifiers, className: className2.join(" "), style: style2, role: "gridcell", "aria-selected": modifiers.selected || void 0, "aria-label": ariaLabel, "data-day": dateLib.format(date, "yyyy-MM-dd"), "data-month": day.outside ? dateLib.format(date, "yyyy-MM") : void 0, "data-selected": modifiers.selected || void 0, "data-disabled": modifiers.disabled || void 0, "data-hidden": modifiers.hidden || void 0, "data-outside": day.outside || void 0, "data-focused": modifiers.focused || void 0, "data-today": modifiers.today || void 0 }, !modifiers.hidden && isInteractive ? React.createElement(components2.DayButton, { className: classNames[UI.DayButton], style: styles?.[UI.DayButton], type: "button", day, modifiers, disabled: modifiers.disabled || void 0, tabIndex: isFocusTarget(day) ? 0 : -1, "aria-label": labelDayButton2(date, modifiers, dateLib.options, dateLib), onClick: handleDayClick(day, modifiers), onBlur: handleDayBlur(day, modifiers), onFocus: handleDayFocus(day, modifiers), onKeyDown: handleDayKeyDown(day, modifiers), onMouseEnter: handleDayMouseEnter(day, modifiers), onMouseLeave: handleDayMouseLeave(day, modifiers) }, formatDay2(date, dateLib.options, dateLib)) : !modifiers.hidden && formatDay2(day.date, dateLib.options, dateLib));
                  })
                );
              }))
            )
          );
        })
      ),
      props.footer && React.createElement(components2.Footer, { className: classNames[UI.Footer], style: styles?.[UI.Footer], role: "status", "aria-live": "polite" }, props.footer)
    )
  );
}
function Calendar$1({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters: formatters2,
  components: components2,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DayPicker$1,
    {
      showOutsideDays,
      className: cn(
        "group/calendar bg-background p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters2
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
        button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
        button_next: cn(buttonVariants({ variant: buttonVariant }), "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
        month_caption: cn("flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]", defaultClassNames.month_caption),
        dropdowns: cn("flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium dark:text-foreground", defaultClassNames.dropdowns),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border dark:bg-popover dark:text-foreground",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("absolute inset-0 opacity-0 dark:bg-popover", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-[--cell-size] select-none", defaultClassNames.week_number_header),
        week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          "[tr:has(td:last-child:not(:nth-child(7)))_&]:aspect-auto [tr:has(td:last-child:not(:nth-child(7)))_&]:w-[calc(100%/7)]",
          defaultClassNames.day
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
        outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-slot": "calendar", ref: rootRef, className: cn(className2), ...props2 });
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton$1,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-[--cell-size] items-center justify-center text-center", children }) });
        },
        ...components2
      },
      ...props
    }
  );
}
function CalendarDayButton$1({ className, day, modifiers, ...props }) {
  const defaultClassNames = getDefaultClassNames();
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button$1,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-end=true]:bg-primary data-[range-middle=true]:bg-accent data-[range-start=true]:bg-primary data-[selected-single=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:text-accent-foreground data-[range-start=true]:text-primary-foreground data-[selected-single=true]:text-primary-foreground group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
const daysInWeek = 7;
const daysInYear = 365.2425;
const millisecondsInWeek = 6048e5;
const millisecondsInDay = 864e5;
const millisecondsInMinute = 6e4;
const millisecondsInHour = 36e5;
const millisecondsInSecond = 1e3;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = /* @__PURE__ */ Symbol.for("constructDateFrom");
const PERSIAN_EPOCH = 1948320;
const PERSIAN_NUM_DAYS = [
  0,
  31,
  62,
  93,
  124,
  155,
  186,
  216,
  246,
  276,
  306,
  336
];
function toJalali(gy, gm, gd) {
  return d2j(g2d(gy, gm, gd));
}
function toGregorian(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd));
}
function isLeapJalaliYear(jy) {
  if (jy === -3) {
    return false;
  }
  const m = mod(25 * jy + 11, 33);
  return m < 8 && m >= -1 || m <= -27;
}
function j2d(jy, jm, jd) {
  const [ny, nm] = normalizeMonth(jy, jm);
  jy = ny;
  jm = nm;
  const month = jm - 1;
  const year = jy;
  const day = jd;
  let julianDay = PERSIAN_EPOCH - 1 + 365 * (year - 1) + div(8 * year + 21, 33);
  if (month != 0) {
    julianDay += PERSIAN_NUM_DAYS[month];
  }
  return julianDay + day;
}
function d2j(julianDay) {
  if (isNaN(julianDay)) {
    return { jy: NaN, jm: NaN, jd: NaN };
  }
  let month, dayOfYear;
  const daysSinceEpoch = julianDay - PERSIAN_EPOCH;
  let year = 1 + div(33 * daysSinceEpoch + 3, 12053);
  dayOfYear = daysSinceEpoch - (365 * (year - 1) + div(8 * year + 21, 33));
  if (dayOfYear < 0) {
    year--;
    dayOfYear = daysSinceEpoch - (365 * (year - 1) + div(8 * year + 21, 33));
  }
  if (dayOfYear < 216) {
    month = div(dayOfYear, 31);
  } else {
    month = div(dayOfYear - 6, 30);
  }
  const dayOfMonth = dayOfYear - PERSIAN_NUM_DAYS[month] + 1;
  dayOfYear++;
  const jy = year;
  const jm = month + 1;
  const jd = dayOfMonth;
  return { jy, jm, jd };
}
function g2d(gy, gm, gd) {
  const [ny, nm] = normalizeMonth(gy, gm);
  gy = ny;
  gm = nm;
  return div(1461 * (gy + 4800 + div(gm - 14, 12)), 4) + div(367 * (gm - 2 - 12 * div(gm - 14, 12)), 12) - div(3 * div(gy + 4900 + div(gm - 14, 12), 100), 4) + gd - 32075;
}
function d2g(jdn) {
  if (isNaN(jdn)) {
    return { gy: NaN, gm: NaN, gd: NaN };
  }
  let L = jdn + 68569;
  const n = div(4 * L, 146097);
  L = L - div(146097 * n + 3, 4);
  const i = div(4e3 * (L + 1), 1461001);
  L = L - div(1461 * i, 4) + 31;
  const j = div(80 * L, 2447);
  const gd = L - div(2447 * j, 80);
  L = div(j, 11);
  const gm = j + 2 - 12 * L;
  const gy = 100 * (n - 49) + i + L;
  return { gy, gm, gd };
}
function normalizeMonth(year, month) {
  month = month - 1;
  if (month < 0) {
    const old_month = month;
    month = pmod(month, 12);
    year -= div(month - old_month, 12);
  }
  if (month > 11) {
    year += div(month, 12);
    month = mod(month, 12);
  }
  return [year, month + 1];
}
function div(a, b) {
  return ~~(a / b);
}
function mod(a, b) {
  return a - ~~(a / b) * b;
}
function pmod(a, b) {
  return mod(mod(a, b) + b, b);
}
function newDate$1(...args) {
  if (args.length > 1) {
    const [year, month, day = 1, ...rest] = args;
    const g = toGregorian(year, month + 1, day);
    return new Date(...[g.gy, g.gm - 1, g.gd, ...rest]);
  }
  return new Date(...args);
}
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return newDate$1(value);
}
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}
function getDate$1(cleanDate) {
  const gd = cleanDate.getDate();
  const gm = cleanDate.getMonth() + 1;
  const gy = cleanDate.getFullYear();
  return toJalali(gy, gm, gd).jd;
}
function setDate$1(cleanDate, ...args) {
  const gd = cleanDate.getDate();
  const gm = cleanDate.getMonth() + 1;
  const gy = cleanDate.getFullYear();
  const j = toJalali(gy, gm, gd);
  const [date] = args;
  const g = toGregorian(j.jy, j.jm, date);
  return cleanDate.setFullYear(g.gy, g.gm - 1, g.gd);
}
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) return _date;
  setDate$1(_date, getDate$1(_date) + amount);
  return _date;
}
function getMonth$1(cleanDate) {
  const gd = cleanDate.getDate();
  const gm = cleanDate.getMonth() + 1;
  const gy = cleanDate.getFullYear();
  return toJalali(gy, gm, gd).jm - 1;
}
function setMonth$1(cleanDate, ...args) {
  const gd = cleanDate.getDate();
  const gm = cleanDate.getMonth() + 1;
  const gy = cleanDate.getFullYear();
  const j = toJalali(gy, gm, gd);
  const [month, date = j.jd] = args;
  const g = toGregorian(j.jy, month + 1, date);
  return cleanDate.setFullYear(g.gy, g.gm - 1, g.gd);
}
function getFullYear(cleanDate) {
  const gd = cleanDate.getDate();
  const gm = cleanDate.getMonth() + 1;
  const gy = cleanDate.getFullYear();
  return toJalali(gy, gm, gd).jy;
}
function setFullYear(cleanDate, ...args) {
  const gd = cleanDate.getDate();
  const gm = cleanDate.getMonth() + 1;
  const gy = cleanDate.getFullYear();
  const j = toJalali(gy, gm, gd);
  const [year, month = j.jm - 1, date = j.jd] = args;
  const g = toGregorian(year, month + 1, date);
  return cleanDate.setFullYear(g.gy, g.gm - 1, g.gd);
}
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = getDate$1(_date);
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  setMonth$1(endOfDesiredMonth, getMonth$1(_date) + amount + 1, 0);
  const daysInMonth = getDate$1(endOfDesiredMonth);
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    setFullYear(
      _date,
      getFullYear(endOfDesiredMonth),
      getMonth$1(endOfDesiredMonth),
      dayOfMonth
    );
    return _date;
  }
}
function add(date, duration, options) {
  const {
    years = 0,
    months: months2 = 0,
    weeks = 0,
    days: days2 = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  const _date = toDate(date, options?.in);
  const dateWithMonths = months2 || years ? addMonths(_date, months2 + years * 12) : _date;
  const dateWithDays = days2 || weeks ? addDays(dateWithMonths, days2 + weeks * 7) : dateWithMonths;
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1e3;
  return constructFrom(options?.in || date, +dateWithDays + msToAdd);
}
function isFriday(date, options) {
  return toDate(date, options?.in).getDay() === 5;
}
function isWeekend(date, options) {
  const day = toDate(date, options?.in).getDay();
  return day === 5;
}
function addBusinessDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  const startedOnWeekend = isWeekend(_date, options);
  if (isNaN(amount)) return constructFrom(options?.in, NaN);
  const hours = _date.getHours();
  const sign = amount < 0 ? -1 : 1;
  const fullWeeks = Math.trunc(amount / 6);
  setDate$1(_date, getDate$1(_date) + fullWeeks * 7);
  let restDays = Math.abs(amount % 6);
  while (restDays > 0) {
    setDate$1(_date, getDate$1(_date) + sign);
    if (!isWeekend(_date, options)) restDays -= 1;
  }
  if (startedOnWeekend && isWeekend(_date, options) && amount !== 0) {
    if (isFriday(_date, options))
      setDate$1(_date, getDate$1(_date) + (sign < 0 ? 1 : -2));
  }
  _date.setHours(hours);
  return _date;
}
function addMilliseconds(date, amount, options) {
  return constructFrom(options?.in || date, +toDate(date) + amount);
}
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour, options);
}
let defaultOptions = {};
function getDefaultOptions$1() {
  return defaultOptions;
}
function setDefaultOptions$1(newOptions) {
  defaultOptions = newOptions;
}
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 6;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  setDate$1(_date, getDate$1(_date) - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
function setISOWeekYear(date, weekYear, options) {
  let _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(
    _date,
    startOfISOWeekYear(_date, options)
  );
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(weekYear, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  _date = startOfISOWeekYear(fourthOfJanuary);
  _date.setDate(_date.getDate() + diff);
  return _date;
}
function addISOWeekYears(date, amount, options) {
  return setISOWeekYear(date, getISOWeekYear(date, options) + amount, options);
}
function addMinutes(date, amount, options) {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}
function addQuarters(date, amount, options) {
  return addMonths(date, amount * 3, options);
}
function addSeconds(date, amount, options) {
  return addMilliseconds(date, amount * 1e3, options);
}
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}
function areIntervalsOverlapping(intervalLeft, intervalRight, options) {
  const [leftStartTime, leftEndTime] = [
    +toDate(intervalLeft.start, options?.in),
    +toDate(intervalLeft.end, options?.in)
  ].sort((a, b) => a - b);
  const [rightStartTime, rightEndTime] = [
    +toDate(intervalRight.start, options?.in),
    +toDate(intervalRight.end, options?.in)
  ].sort((a, b) => a - b);
  if (options?.inclusive)
    return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
  return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}
function max(dates, options) {
  let result;
  let context = options?.in;
  dates.forEach((date) => {
    if (!context && typeof date === "object")
      context = constructFrom.bind(null, date);
    const date_ = toDate(date, context);
    if (!result || result < date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom(context, result || NaN);
}
function min(dates, options) {
  let result;
  let context = options?.in;
  dates.forEach((date) => {
    if (!context && typeof date === "object")
      context = constructFrom.bind(null, date);
    const date_ = toDate(date, context);
    if (!result || result > date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom(context, result || NaN);
}
function clamp(date, interval2, options) {
  const [date_, start, end] = normalizeDates(
    options?.in,
    date,
    interval2.start,
    interval2.end
  );
  return min([max([date_, start], options), end], options);
}
function closestIndexTo(dateToCompare, dates) {
  const timeToCompare = +toDate(dateToCompare);
  if (isNaN(timeToCompare)) return NaN;
  let result;
  let minDistance;
  dates.forEach((date, index) => {
    const date_ = toDate(date);
    if (isNaN(+date_)) {
      result = NaN;
      minDistance = NaN;
      return;
    }
    const distance = Math.abs(timeToCompare - +date_);
    if (result == null || distance < minDistance) {
      result = index;
      minDistance = distance;
    }
  });
  return result;
}
function closestTo(dateToCompare, dates, options) {
  const [dateToCompare_, ...dates_] = normalizeDates(
    options?.in,
    dateToCompare,
    ...dates
  );
  const index = closestIndexTo(dateToCompare_, dates_);
  if (typeof index === "number" && isNaN(index))
    return constructFrom(dateToCompare_, NaN);
  if (index !== void 0) return dates_[index];
}
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
}
function compareDesc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff > 0) return -1;
  else if (diff < 0) return 1;
  return diff;
}
function constructNow(date) {
  return constructFrom(date, Date.now());
}
function daysToWeeks(days2) {
  const result = Math.trunc(days2 / daysInWeek);
  return result === 0 ? 0 : result;
}
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}
function differenceInBusinessDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  if (!isValid(laterDate_) || !isValid(earlierDate_)) return NaN;
  const diff = differenceInCalendarDays(laterDate_, earlierDate_);
  const sign = diff < 0 ? -1 : 1;
  const weeks = Math.trunc(diff / 7);
  let result = weeks * 6;
  let movingDate = addDays(earlierDate_, weeks * 7);
  while (!isSameDay(laterDate_, movingDate)) {
    result += isWeekend(movingDate, options) ? 0 : sign;
    movingDate = addDays(movingDate, sign);
  }
  return result === 0 ? 0 : result;
}
function differenceInCalendarISOWeekYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return getISOWeekYear(laterDate_, options) - getISOWeekYear(earlierDate_, options);
}
function differenceInCalendarISOWeeks(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const startOfISOWeekLeft = startOfISOWeek(laterDate_);
  const startOfISOWeekRight = startOfISOWeek(earlierDate_);
  const timestampLeft = +startOfISOWeekLeft - getTimezoneOffsetInMilliseconds(startOfISOWeekLeft);
  const timestampRight = +startOfISOWeekRight - getTimezoneOffsetInMilliseconds(startOfISOWeekRight);
  return Math.round((timestampLeft - timestampRight) / millisecondsInWeek);
}
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = getFullYear(laterDate_) - getFullYear(earlierDate_);
  const monthsDiff = getMonth$1(laterDate_) - getMonth$1(earlierDate_);
  return yearsDiff * 12 + monthsDiff;
}
function getQuarter(date, options) {
  const _date = toDate(date, options?.in);
  const quarter = Math.trunc(getMonth$1(_date) / 3) + 1;
  return quarter;
}
function differenceInCalendarQuarters(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = getFullYear(laterDate_) - getFullYear(earlierDate_);
  const quartersDiff = getQuarter(laterDate_) - getQuarter(earlierDate_);
  return yearsDiff * 4 + quartersDiff;
}
function differenceInCalendarWeeks(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfWeek = startOfWeek(laterDate_, options);
  const earlierStartOfWeek = startOfWeek(earlierDate_, options);
  const laterTimestamp = +laterStartOfWeek - getTimezoneOffsetInMilliseconds(laterStartOfWeek);
  const earlierTimestamp = +earlierStartOfWeek - getTimezoneOffsetInMilliseconds(earlierStartOfWeek);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInWeek);
}
function differenceInCalendarYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return getFullYear(laterDate_) - getFullYear(earlierDate_);
}
function differenceInDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const sign = compareLocalAsc(laterDate_, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarDays(laterDate_, earlierDate_)
  );
  setDate$1(laterDate_, getDate$1(laterDate_) - sign * difference);
  const isLastDayNotFull = Number(
    compareLocalAsc(laterDate_, earlierDate_) === -sign
  );
  const result = sign * (difference - isLastDayNotFull);
  return result === 0 ? 0 : result;
}
function compareLocalAsc(laterDate, earlierDate) {
  const diff = getFullYear(laterDate) - getFullYear(earlierDate) || getMonth$1(laterDate) - getMonth$1(earlierDate) || getDate$1(laterDate) - getDate$1(earlierDate) || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
  if (diff < 0) return -1;
  if (diff > 0) return 1;
  return diff;
}
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}
function differenceInHours(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const diff = (+laterDate_ - +earlierDate_) / millisecondsInHour;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
function subISOWeekYears(date, amount, options) {
  return addISOWeekYears(date, -amount, options);
}
function differenceInISOWeekYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(laterDate_, earlierDate_);
  const diff = Math.abs(
    differenceInCalendarISOWeekYears(laterDate_, earlierDate_, options)
  );
  const adjustedDate = subISOWeekYears(laterDate_, sign * diff, options);
  const isLastISOWeekYearNotFull = Number(
    compareAsc(adjustedDate, earlierDate_) === -sign
  );
  const result = sign * (diff - isLastISOWeekYearNotFull);
  return result === 0 ? 0 : result;
}
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
function endOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function endOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = getMonth$1(_date);
  setFullYear(_date, getFullYear(_date), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function isLastDayOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_)
  );
  if (difference < 1) return 0;
  if (getMonth$1(workingLaterDate) === 1 && getDate$1(workingLaterDate) > 27)
    setDate$1(workingLaterDate, 30);
  setMonth$1(
    workingLaterDate,
    getMonth$1(workingLaterDate) - sign * difference
  );
  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}
function differenceInQuarters(laterDate, earlierDate, options) {
  const diff = differenceInMonths(laterDate, earlierDate, options) / 3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
function differenceInWeeks(laterDate, earlierDate, options) {
  const diff = differenceInDays(laterDate, earlierDate, options) / 7;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
function differenceInYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(laterDate_, earlierDate_);
  const diff = Math.abs(differenceInCalendarYears(laterDate_, earlierDate_));
  setFullYear(laterDate_, 1399);
  setFullYear(earlierDate_, 1399);
  const partial = compareAsc(laterDate_, earlierDate_) === -sign;
  const result = sign * (diff - +partial);
  return result === 0 ? 0 : result;
}
function normalizeInterval(context, interval2) {
  const [start, end] = normalizeDates(context, interval2.start, interval2.end);
  return { start, end };
}
function eachDayOfInterval(interval2, options) {
  const { start, end } = normalizeInterval(options?.in, interval2);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    setDate$1(date, getDate$1(date) + step);
    date.setHours(0, 0, 0, 0);
  }
  return reversed ? dates.reverse() : dates;
}
function eachHourOfInterval(interval2, options) {
  const { start, end } = normalizeInterval(options?.in, interval2);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setMinutes(0, 0, 0);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date.setHours(date.getHours() + step);
  }
  return reversed ? dates.reverse() : dates;
}
function eachMinuteOfInterval(interval2, options) {
  const { start, end } = normalizeInterval(options?.in, interval2);
  start.setSeconds(0, 0);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  let date = reversed ? end : start;
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date = addMinutes(date, step);
  }
  return reversed ? dates.reverse() : dates;
}
function eachMonthOfInterval(interval2, options) {
  const { start, end } = normalizeInterval(options?.in, interval2);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  setDate$1(date, 1);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    setMonth$1(date, getMonth$1(date) + step);
  }
  return reversed ? dates.reverse() : dates;
}
function startOfQuarter(date, options) {
  const _date = toDate(date, options?.in);
  const currentMonth = getMonth$1(_date);
  const month = currentMonth - currentMonth % 3;
  setMonth$1(_date, month, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function eachQuarterOfInterval(interval2, options) {
  const { start, end } = normalizeInterval(options?.in, interval2);
  let reversed = +start > +end;
  const endTime = reversed ? +startOfQuarter(start) : +startOfQuarter(end);
  let date = reversed ? startOfQuarter(end) : startOfQuarter(start);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date = addQuarters(date, step);
  }
  return reversed ? dates.reverse() : dates;
}
function eachWeekOfInterval(interval2, options) {
  const { start, end } = normalizeInterval(options?.in, interval2);
  let reversed = +start > +end;
  const startDateWeek = reversed ? startOfWeek(end, options) : startOfWeek(start, options);
  const endDateWeek = reversed ? startOfWeek(start, options) : startOfWeek(end, options);
  startDateWeek.setHours(15);
  endDateWeek.setHours(15);
  const endTime = +endDateWeek.getTime();
  let currentDate = startDateWeek;
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+currentDate <= endTime) {
    currentDate.setHours(0);
    dates.push(constructFrom(start, currentDate));
    currentDate = addWeeks(currentDate, step);
    currentDate.setHours(15);
  }
  return reversed ? dates.reverse() : dates;
}
function eachWeekendOfInterval(interval2, options) {
  const { start, end } = normalizeInterval(options?.in, interval2);
  const dateInterval = eachDayOfInterval({ start, end }, options);
  const weekends = [];
  let index = 0;
  while (index < dateInterval.length) {
    const date = dateInterval[index++];
    if (isWeekend(date)) weekends.push(constructFrom(start, date));
  }
  return weekends;
}
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  setDate$1(_date, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function eachWeekendOfMonth(date, options) {
  const start = startOfMonth(date, options);
  const end = endOfMonth(date, options);
  return eachWeekendOfInterval({ start, end }, options);
}
function endOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = getFullYear(_date);
  setFullYear(_date, year + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  setFullYear(date_, getFullYear(date_), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
function eachWeekendOfYear(date, options) {
  const start = startOfYear(date, options);
  const end = endOfYear(date, options);
  return eachWeekendOfInterval({ start, end }, options);
}
function eachYearOfInterval(interval2, options) {
  const { start, end } = normalizeInterval(options?.in, interval2);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  setMonth$1(date, 0, 1);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    setFullYear(date, getFullYear(date) + step);
  }
  return reversed ? dates.reverse() : dates;
}
function endOfDecade(date, options) {
  const _date = toDate(date, options?.in);
  const year = getFullYear(_date);
  const decade = 9 + Math.floor(year / 10) * 10;
  setFullYear(_date, decade + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function endOfHour(date, options) {
  const _date = toDate(date, options?.in);
  _date.setMinutes(59, 59, 999);
  return _date;
}
function endOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 6;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  setDate$1(_date, getDate$1(_date) + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function endOfISOWeek(date, options) {
  return endOfWeek(date, { ...options, weekStartsOn: 1 });
}
function endOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuaryOfNextYear = constructFrom(options?.in || date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const _date = startOfISOWeek(fourthOfJanuaryOfNextYear, options);
  _date.setMilliseconds(_date.getMilliseconds() - 1);
  return _date;
}
function endOfMinute(date, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}
function endOfQuarter(date, options) {
  const _date = toDate(date, options?.in);
  const currentMonth = getMonth$1(_date);
  const month = currentMonth - currentMonth % 3 + 3;
  setMonth$1(_date, month, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function endOfSecond(date, options) {
  const _date = toDate(date, options?.in);
  _date.setMilliseconds(999);
  return _date;
}
function endOfToday(options) {
  return endOfDay(Date.now(), options);
}
function endOfTomorrow(options) {
  const now = constructNow(options?.in);
  const year = getFullYear(now);
  const month = getMonth$1(now);
  const day = getDate$1(now);
  const date = constructNow(options?.in);
  setFullYear(date, year, month, day + 1);
  date.setHours(23, 59, 59, 999);
  return options?.in ? options.in(date) : date;
}
function endOfYesterday(options) {
  const now = constructNow(options?.in);
  const date = constructFrom(options?.in, 0);
  setFullYear(
    date,
    getFullYear(now),
    getMonth$1(now),
    getDate$1(now) - 1
  );
  date.setHours(23, 59, 59, 999);
  return date;
}
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "کمتر از یک ثانیه",
    other: "کمتر از {{count}} ثانیه"
  },
  xSeconds: {
    one: "1 ثانیه",
    other: "{{count}} ثانیه"
  },
  halfAMinute: "نیم دقیقه",
  lessThanXMinutes: {
    one: "کمتر از یک دقیقه",
    other: "کمتر از {{count}} دقیقه"
  },
  xMinutes: {
    one: "1 دقیقه",
    other: "{{count}} دقیقه"
  },
  aboutXHours: {
    one: "حدود 1 ساعت",
    other: "حدود {{count}} ساعت"
  },
  xHours: {
    one: "1 ساعت",
    other: "{{count}} ساعت"
  },
  xDays: {
    one: "1 روز",
    other: "{{count}} روز"
  },
  aboutXWeeks: {
    one: "حدود 1 هفته",
    other: "حدود {{count}} هفته"
  },
  xWeeks: {
    one: "1 هفته",
    other: "{{count}} هفته"
  },
  aboutXMonths: {
    one: "حدود 1 ماه",
    other: "حدود {{count}} ماه"
  },
  xMonths: {
    one: "1 ماه",
    other: "{{count}} ماه"
  },
  aboutXYears: {
    one: "حدود 1 سال",
    other: "حدود {{count}} سال"
  },
  xYears: {
    one: "1 سال",
    other: "{{count}} سال"
  },
  overXYears: {
    one: "بیشتر از 1 سال",
    other: "بیشتر از {{count}} سال"
  },
  almostXYears: {
    one: "نزدیک 1 سال",
    other: "نزدیک {{count}} سال"
  }
};
const formatDistance$1 = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "در " + result;
    } else {
      return result + " قبل";
    }
  }
  return result;
};
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
const dateFormats = {
  full: "EEEE do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "yyyy/MM/dd"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'در' {{time}}",
  long: "{{date}} 'در' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
const formatRelativeLocale = {
  lastWeek: "eeee 'گذشته در' p",
  yesterday: "'دیروز در' p",
  today: "'امروز در' p",
  tomorrow: "'فردا در' p",
  nextWeek: "eeee 'در' p",
  other: "P"
};
const formatRelative$1 = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
const eraValues = {
  narrow: ["ق", "ب"],
  abbreviated: ["ق.ه.", "ب.ه."],
  wide: ["قبل از هجرت", "بعد از هجرت"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["س‌م1", "س‌م2", "س‌م3", "س‌م4"],
  wide: ["سه‌ماهه 1", "سه‌ماهه 2", "سه‌ماهه 3", "سه‌ماهه 4"]
};
const monthValues = {
  narrow: [
    "فر",
    "ار",
    "خر",
    "تی",
    "مر",
    "شه",
    "مه",
    "آب",
    "آذ",
    "دی",
    "به",
    "اس"
  ],
  abbreviated: [
    "فرو",
    "ارد",
    "خرد",
    "تیر",
    "مرد",
    "شهر",
    "مهر",
    "آبا",
    "آذر",
    "دی",
    "بهم",
    "اسف"
  ],
  wide: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
  ]
};
const dayValues = {
  narrow: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
  short: ["1ش", "2ش", "3ش", "4ش", "5ش", "ج", "ش"],
  abbreviated: [
    "یک‌شنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه"
  ],
  wide: [
    "یک‌شنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "ق",
    pm: "ب",
    midnight: "ن",
    noon: "ظ",
    morning: "ص",
    afternoon: "ب.ظ.",
    evening: "ع",
    night: "ش"
  },
  abbreviated: {
    am: "ق.ظ.",
    pm: "ب.ظ.",
    midnight: "نیمه‌شب",
    noon: "ظهر",
    morning: "صبح",
    afternoon: "بعدازظهر",
    evening: "عصر",
    night: "شب"
  },
  wide: {
    am: "قبل‌ازظهر",
    pm: "بعدازظهر",
    midnight: "نیمه‌شب",
    noon: "ظهر",
    morning: "صبح",
    afternoon: "بعدازظهر",
    evening: "عصر",
    night: "شب"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "ق",
    pm: "ب",
    midnight: "ن",
    noon: "ظ",
    morning: "ص",
    afternoon: "ب.ظ.",
    evening: "ع",
    night: "ش"
  },
  abbreviated: {
    am: "ق.ظ.",
    pm: "ب.ظ.",
    midnight: "نیمه‌شب",
    noon: "ظهر",
    morning: "صبح",
    afternoon: "بعدازظهر",
    evening: "عصر",
    night: "شب"
  },
  wide: {
    am: "قبل‌ازظهر",
    pm: "بعدازظهر",
    midnight: "نیمه‌شب",
    noon: "ظهر",
    morning: "صبح",
    afternoon: "بعدازظهر",
    evening: "عصر",
    night: "شب"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + "-ام";
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
const matchOrdinalNumberPattern = /^(\d+)(-?ام)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(ق|ب)/i,
  abbreviated: /^(ق\.?\s?ه\.?|ب\.?\s?ه\.?|ه\.?)/i,
  wide: /^(قبل از هجرت|هجری شمسی|بعد از هجرت)/i
};
const parseEraPatterns = {
  any: [/^قبل/i, /^بعد/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^(ف|Q|س‌م)[1234]/i,
  wide: /^(فصل|quarter|سه‌ماهه) [1234](-ام|ام)?/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^(فر|ار|خر|تی|مر|شه|مه|آب|آذ|دی|به|اس)/i,
  abbreviated: /^(فرو|ارد|خرد|تیر|مرد|شهر|مهر|آبا|آذر|دی|بهم|اسف)/i,
  wide: /^(فروردین|اردیبهشت|خرداد|تیر|مرداد|شهریور|مهر|آبان|آذر|دی|بهمن|اسفند)/i
};
const parseMonthPatterns = {
  narrow: [
    /^فر/i,
    /^ار/i,
    /^خر/i,
    /^تی/i,
    /^مر/i,
    /^شه/i,
    /^مه/i,
    /^آب/i,
    /^آذ/i,
    /^دی/i,
    /^به/i,
    /^اس/i
  ],
  any: [
    /^فر/i,
    /^ار/i,
    /^خر/i,
    /^تی/i,
    /^مر/i,
    /^شه/i,
    /^مه/i,
    /^آب/i,
    /^آذ/i,
    /^دی/i,
    /^به/i,
    /^اس/i
  ]
};
const matchDayPatterns = {
  narrow: /^[شیدسچپج]/i,
  short: /^(ش|ج|1ش|2ش|3ش|4ش|5ش)/i,
  abbreviated: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i,
  wide: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i
};
const parseDayPatterns = {
  narrow: [/^ی/i, /^دو/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
  any: [
    /^(ی|1ش|یکشنبه)/i,
    /^(د|2ش|دوشنبه)/i,
    /^(س|3ش|سه‌شنبه)/i,
    /^(چ|4ش|چهارشنبه)/i,
    /^(پ|5ش|پنجشنبه)/i,
    /^(ج|جمعه)/i,
    /^(ش|شنبه)/i
  ]
};
const matchDayPeriodPatterns = {
  narrow: /^(ب|ق|ن|ظ|ص|ب.ظ.|ع|ش)/i,
  any: /^(ق.ظ.|ب.ظ.|قبل‌ازظهر|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^(ق|ق.ظ.|قبل‌ازظهر)/i,
    pm: /^(ب|ب.ظ.|بعدازظهر)/i,
    midnight: /^(‌نیمه‌شب|ن)/i,
    noon: /^(ظ|ظهر)/i,
    morning: /^(ص|صبح)/i,
    afternoon: /^(ب|ب.ظ.|بعدازظهر)/i,
    evening: /^(ع|عصر)/i,
    night: /^(ش|شب)/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const faIR$1 = {
  code: "fa-IR",
  formatDistance: formatDistance$1,
  formatLong,
  formatRelative: formatRelative$1,
  localize,
  match,
  options: {
    weekStartsOn: 6,
    firstWeekContainsDate: 1
  }
};
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = getFullYear(_date);
  const defaultOptions2 = getDefaultOptions$1();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  setFullYear(firstWeekOfNextYear, year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  setFullYear(firstWeekOfThisYear, year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  setFullYear(firstWeek, year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
const lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = getFullYear(date);
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = getMonth$1(date);
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(getDate$1(date), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds2 = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds2 * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
const dayPeriodEnum = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = getFullYear(date) > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = getFullYear(date);
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = getFullYear(date);
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((getMonth$1(date) + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((getMonth$1(date) + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = getMonth$1(date);
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = getMonth$1(date);
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(getDate$1(date), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
const dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
const timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
const dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const formattingTokensRegExp$2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp$2 = /^'([^]*?)'?$/;
const doubleQuoteRegExp$2 = /''/g;
const unescapedLatinCharacterRegExp$2 = /[a-zA-Z]/;
function format(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const locale = options?.locale ?? defaultOptions2.locale ?? faIR$1;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 6;
  const originalDate = toDate(date, options?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp$1).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp$2).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString$2(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp$2)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString$2(input) {
  const matched = input.match(escapedStringRegExp$2);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp$2, "'");
}
function formatDistance(laterDate, earlierDate, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const locale = options?.locale ?? defaultOptions2.locale ?? faIR$1;
  const minutesInAlmostTwoDays = 2520;
  const comparison = compareAsc(laterDate, earlierDate);
  if (isNaN(comparison)) throw new RangeError("Invalid time value");
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison
  });
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]
  );
  const seconds = differenceInSeconds(earlierDate_, laterDate_);
  const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months2;
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < minutesInMonth) {
    const days2 = Math.round(minutes / minutesInDay);
    return locale.formatDistance("xDays", days2, localizeOptions);
  } else if (minutes < minutesInMonth * 2) {
    months2 = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("aboutXMonths", months2, localizeOptions);
  }
  months2 = differenceInMonths(earlierDate_, laterDate_);
  if (months2 < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    const monthsSinceStartOfYear = months2 % 12;
    const years = Math.trunc(months2 / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}
function formatDistanceStrict(laterDate, earlierDate, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const locale = options?.locale ?? defaultOptions2.locale ?? faIR$1;
  const comparison = compareAsc(laterDate, earlierDate);
  if (isNaN(comparison)) {
    throw new RangeError("Invalid time value");
  }
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison
  });
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]
  );
  const roundingMethod = getRoundingMethod(options?.roundingMethod ?? "round");
  const milliseconds2 = earlierDate_.getTime() - laterDate_.getTime();
  const minutes = milliseconds2 / millisecondsInMinute;
  const timezoneOffset = getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_);
  const dstNormalizedMinutes = (milliseconds2 - timezoneOffset) / millisecondsInMinute;
  const defaultUnit = options?.unit;
  let unit;
  if (!defaultUnit) {
    if (minutes < 1) {
      unit = "second";
    } else if (minutes < 60) {
      unit = "minute";
    } else if (minutes < minutesInDay) {
      unit = "hour";
    } else if (dstNormalizedMinutes < minutesInMonth) {
      unit = "day";
    } else if (dstNormalizedMinutes < minutesInYear) {
      unit = "month";
    } else {
      unit = "year";
    }
  } else {
    unit = defaultUnit;
  }
  if (unit === "second") {
    const seconds = roundingMethod(milliseconds2 / 1e3);
    return locale.formatDistance("xSeconds", seconds, localizeOptions);
  } else if (unit === "minute") {
    const roundedMinutes = roundingMethod(minutes);
    return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions);
  } else if (unit === "hour") {
    const hours = roundingMethod(minutes / 60);
    return locale.formatDistance("xHours", hours, localizeOptions);
  } else if (unit === "day") {
    const days2 = roundingMethod(dstNormalizedMinutes / minutesInDay);
    return locale.formatDistance("xDays", days2, localizeOptions);
  } else if (unit === "month") {
    const months2 = roundingMethod(dstNormalizedMinutes / minutesInMonth);
    return months2 === 12 && defaultUnit !== "month" ? locale.formatDistance("xYears", 1, localizeOptions) : locale.formatDistance("xMonths", months2, localizeOptions);
  } else {
    const years = roundingMethod(dstNormalizedMinutes / minutesInYear);
    return locale.formatDistance("xYears", years, localizeOptions);
  }
}
function formatDistanceToNow(date, options) {
  return formatDistance(date, constructNow(date), options);
}
function formatDistanceToNowStrict(date, options) {
  return formatDistanceStrict(date, constructNow(date), options);
}
const defaultFormat = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds"
];
function formatDuration(duration, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const locale = options?.locale ?? defaultOptions2.locale ?? faIR$1;
  const format2 = options?.format ?? defaultFormat;
  const zero = options?.zero ?? false;
  const delimiter = options?.delimiter ?? " ";
  if (!locale.formatDistance) {
    return "";
  }
  const result = format2.reduce((acc, unit) => {
    const token = `x${unit.replace(/(^.)/, (m) => m.toUpperCase())}`;
    const value = duration[unit];
    if (value !== void 0 && (zero || duration[unit])) {
      return acc.concat(locale.formatDistance(token, value));
    }
    return acc;
  }, []).join(delimiter);
  return result;
}
function formatISO(date, options) {
  const date_ = toDate(date, options?.in);
  if (isNaN(+date_)) {
    throw new RangeError("Invalid time value");
  }
  const format2 = options?.format ?? "extended";
  const representation = options?.representation ?? "complete";
  let result = "";
  let tzOffset2 = "";
  const dateDelimiter = format2 === "extended" ? "-" : "";
  const timeDelimiter = format2 === "extended" ? ":" : "";
  if (representation !== "time") {
    const day = addLeadingZeros(date_.getDate(), 2);
    const month = addLeadingZeros(date_.getMonth() + 1, 2);
    const year = addLeadingZeros(date_.getFullYear(), 4);
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
  }
  if (representation !== "date") {
    const offset = date_.getTimezoneOffset();
    if (offset !== 0) {
      const absoluteOffset = Math.abs(offset);
      const hourOffset = addLeadingZeros(Math.trunc(absoluteOffset / 60), 2);
      const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
      const sign = offset < 0 ? "+" : "-";
      tzOffset2 = `${sign}${hourOffset}:${minuteOffset}`;
    } else {
      tzOffset2 = "Z";
    }
    const hour = addLeadingZeros(date_.getHours(), 2);
    const minute = addLeadingZeros(date_.getMinutes(), 2);
    const second = addLeadingZeros(date_.getSeconds(), 2);
    const separator = result === "" ? "" : "T";
    const time = [hour, minute, second].join(timeDelimiter);
    result = `${result}${separator}${time}${tzOffset2}`;
  }
  return result;
}
function formatISO9075(date, options) {
  const date_ = toDate(date, options?.in);
  if (!isValid(date_)) {
    throw new RangeError("Invalid time value");
  }
  const format2 = options?.format ?? "extended";
  const representation = options?.representation ?? "complete";
  let result = "";
  const dateDelimiter = format2 === "extended" ? "-" : "";
  const timeDelimiter = format2 === "extended" ? ":" : "";
  if (representation !== "time") {
    const day = addLeadingZeros(date_.getDate(), 2);
    const month = addLeadingZeros(date_.getMonth() + 1, 2);
    const year = addLeadingZeros(date_.getFullYear(), 4);
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
  }
  if (representation !== "date") {
    const hour = addLeadingZeros(date_.getHours(), 2);
    const minute = addLeadingZeros(date_.getMinutes(), 2);
    const second = addLeadingZeros(date_.getSeconds(), 2);
    const separator = result === "" ? "" : " ";
    result = `${result}${separator}${hour}${timeDelimiter}${minute}${timeDelimiter}${second}`;
  }
  return result;
}
function formatISODuration(duration) {
  const {
    years = 0,
    months: months2 = 0,
    days: days2 = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  return `P${years}Y${months2}M${days2}DT${hours}H${minutes}M${seconds}S`;
}
function formatRFC3339(date, options) {
  const date_ = toDate(date, options?.in);
  if (!isValid(date_)) {
    throw new RangeError("Invalid time value");
  }
  const fractionDigits = options?.fractionDigits ?? 0;
  const day = addLeadingZeros(date_.getDate(), 2);
  const month = addLeadingZeros(date_.getMonth() + 1, 2);
  const year = date_.getFullYear();
  const hour = addLeadingZeros(date_.getHours(), 2);
  const minute = addLeadingZeros(date_.getMinutes(), 2);
  const second = addLeadingZeros(date_.getSeconds(), 2);
  let fractionalSecond = "";
  if (fractionDigits > 0) {
    const milliseconds2 = date_.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds2 * Math.pow(10, fractionDigits - 3)
    );
    fractionalSecond = "." + addLeadingZeros(fractionalSeconds, fractionDigits);
  }
  let offset = "";
  const tzOffset2 = date_.getTimezoneOffset();
  if (tzOffset2 !== 0) {
    const absoluteOffset = Math.abs(tzOffset2);
    const hourOffset = addLeadingZeros(Math.trunc(absoluteOffset / 60), 2);
    const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
    const sign = tzOffset2 < 0 ? "+" : "-";
    offset = `${sign}${hourOffset}:${minuteOffset}`;
  } else {
    offset = "Z";
  }
  return `${year}-${month}-${day}T${hour}:${minute}:${second}${fractionalSecond}${offset}`;
}
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function formatRFC7231(date) {
  const _date = toDate(date);
  if (!isValid(_date)) {
    throw new RangeError("Invalid time value");
  }
  const dayName = days[_date.getUTCDay()];
  const dayOfMonth = addLeadingZeros(_date.getUTCDate(), 2);
  const monthName = months[_date.getUTCMonth()];
  const year = _date.getUTCFullYear();
  const hour = addLeadingZeros(_date.getUTCHours(), 2);
  const minute = addLeadingZeros(_date.getUTCMinutes(), 2);
  const second = addLeadingZeros(_date.getUTCSeconds(), 2);
  return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`;
}
function formatRelative(date, baseDate, options) {
  const [date_, baseDate_] = normalizeDates(options?.in, date, baseDate);
  const defaultOptions2 = getDefaultOptions$1();
  const locale = options?.locale ?? defaultOptions2.locale ?? faIR$1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const diff = differenceInCalendarDays(date_, baseDate_);
  if (isNaN(diff)) {
    throw new RangeError("Invalid time value");
  }
  let token;
  if (diff < -6) {
    token = "other";
  } else if (diff < -1) {
    token = "lastWeek";
  } else if (diff < 0) {
    token = "yesterday";
  } else if (diff < 1) {
    token = "today";
  } else if (diff < 2) {
    token = "tomorrow";
  } else if (diff < 7) {
    token = "nextWeek";
  } else {
    token = "other";
  }
  const formatStr = locale.formatRelative(token, date_, baseDate_, {
    locale,
    weekStartsOn
  });
  return format(date_, formatStr, { locale, weekStartsOn });
}
function fromUnixTime(unixTime, options) {
  return toDate(unixTime * 1e3, options?.in);
}
function getDate(date, options) {
  return getDate$1(toDate(date, options?.in));
}
function getDay(date, options) {
  return toDate(date, options?.in).getDay();
}
function getDaysInMonth(date, options) {
  const _date = toDate(date, options?.in);
  const year = getFullYear(_date);
  const monthIndex = getMonth$1(_date);
  const lastDayOfMonth2 = constructFrom(_date, 0);
  setFullYear(lastDayOfMonth2, year, monthIndex + 1, 0);
  lastDayOfMonth2.setHours(0, 0, 0, 0);
  return getDate$1(lastDayOfMonth2);
}
function isLeapYear$1(year) {
  return isLeapJalaliYear(year);
}
function isLeapYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = getFullYear(_date);
  return isLeapYear$1(year);
}
function getDaysInYear(date, options) {
  const _date = toDate(date, options?.in);
  if (Number.isNaN(+_date)) return NaN;
  return isLeapYear(_date) ? 366 : 365;
}
function getDecade(date, options) {
  const _date = toDate(date, options?.in);
  const year = getFullYear(_date);
  const decade = Math.floor(year / 10) * 10;
  return decade;
}
function getDefaultOptions() {
  return Object.assign({}, getDefaultOptions$1());
}
function getHours(date, options) {
  return toDate(date, options?.in).getHours();
}
function getISODay(date, options) {
  const day = toDate(date, options?.in).getDay();
  return day === 0 ? 7 : day;
}
function getISOWeeksInYear(date, options) {
  const thisYear = startOfISOWeekYear(date, options);
  const nextYear = startOfISOWeekYear(addWeeks(thisYear, 60));
  const diff = +nextYear - +thisYear;
  return Math.round(diff / millisecondsInWeek);
}
function getMilliseconds(date) {
  return toDate(date).getMilliseconds();
}
function getMinutes(date, options) {
  return toDate(date, options?.in).getMinutes();
}
function getMonth(date, options) {
  return getMonth$1(toDate(date, options?.in));
}
function getOverlappingDaysInIntervals(intervalLeft, intervalRight) {
  const [leftStart, leftEnd] = [
    +toDate(intervalLeft.start),
    +toDate(intervalLeft.end)
  ].sort((a, b) => a - b);
  const [rightStart, rightEnd] = [
    +toDate(intervalRight.start),
    +toDate(intervalRight.end)
  ].sort((a, b) => a - b);
  const isOverlapping = leftStart < rightEnd && rightStart < leftEnd;
  if (!isOverlapping) return 0;
  const overlapLeft = rightStart < leftStart ? leftStart : rightStart;
  const left = overlapLeft - getTimezoneOffsetInMilliseconds(overlapLeft);
  const overlapRight = rightEnd > leftEnd ? leftEnd : rightEnd;
  const right = overlapRight - getTimezoneOffsetInMilliseconds(overlapRight);
  return Math.ceil((right - left) / millisecondsInDay);
}
function getSeconds(date) {
  return toDate(date).getSeconds();
}
function getTime(date) {
  return +toDate(date);
}
function getUnixTime(date) {
  return Math.trunc(+toDate(date) / 1e3);
}
function getWeekOfMonth(date, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 6;
  const currentDayOfMonth = getDate(toDate(date, options?.in));
  if (isNaN(currentDayOfMonth)) return NaN;
  const startWeekDay = getDay(startOfMonth(date, options));
  let lastDayOfFirstWeek = weekStartsOn - startWeekDay;
  if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7;
  const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
  return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
}
function lastDayOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = getMonth$1(_date);
  setFullYear(_date, getFullYear(_date), month + 1, 0);
  _date.setHours(0, 0, 0, 0);
  return toDate(_date, options?.in);
}
function getWeeksInMonth(date, options) {
  const contextDate = toDate(date, options?.in);
  return differenceInCalendarWeeks(
    lastDayOfMonth(contextDate, options),
    startOfMonth(contextDate, options),
    options
  ) + 1;
}
function getYear(date, options) {
  return getFullYear(toDate(date, options?.in));
}
function hoursToMilliseconds(hours) {
  return Math.trunc(hours * millisecondsInHour);
}
function hoursToMinutes(hours) {
  return Math.trunc(hours * minutesInHour);
}
function hoursToSeconds(hours) {
  return Math.trunc(hours * secondsInHour);
}
function interval(start, end, options) {
  const [_start, _end] = normalizeDates(options?.in, start, end);
  if (isNaN(+_start)) throw new TypeError("Start date is invalid");
  if (isNaN(+_end)) throw new TypeError("End date is invalid");
  if (options?.assertPositive && +_start > +_end)
    throw new TypeError("End date must be after start date");
  return { start: _start, end: _end };
}
function intervalToDuration(interval2, options) {
  const { start, end } = normalizeInterval(options?.in, interval2);
  const duration = {};
  const years = differenceInYears(end, start);
  if (years) duration.years = years;
  const remainingMonths = add(start, { years: duration.years });
  const months2 = differenceInMonths(end, remainingMonths);
  if (months2) duration.months = months2;
  const remainingDays = add(remainingMonths, { months: duration.months });
  const days2 = differenceInDays(end, remainingDays);
  if (days2) duration.days = days2;
  const remainingHours = add(remainingDays, { days: duration.days });
  const hours = differenceInHours(end, remainingHours);
  if (hours) duration.hours = hours;
  const remainingMinutes = add(remainingHours, { hours: duration.hours });
  const minutes = differenceInMinutes(end, remainingMinutes);
  if (minutes) duration.minutes = minutes;
  const remainingSeconds = add(remainingMinutes, { minutes: duration.minutes });
  const seconds = differenceInSeconds(end, remainingSeconds);
  if (seconds) duration.seconds = seconds;
  return duration;
}
function intlFormat(date, formatOrLocale, localeOptions) {
  let formatOptions;
  if (isFormatOptions(formatOrLocale)) {
    formatOptions = formatOrLocale;
  } else {
    localeOptions = formatOrLocale;
  }
  return new Intl.DateTimeFormat(localeOptions?.locale, formatOptions).format(
    toDate(date)
  );
}
function isFormatOptions(opts) {
  return opts !== void 0 && !("locale" in opts);
}
function intlFormatDistance(laterDate, earlierDate, options) {
  let value = 0;
  let unit;
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  if (!options?.unit) {
    const diffInSeconds = differenceInSeconds(laterDate_, earlierDate_);
    if (Math.abs(diffInSeconds) < secondsInMinute) {
      value = differenceInSeconds(laterDate_, earlierDate_);
      unit = "second";
    } else if (Math.abs(diffInSeconds) < secondsInHour) {
      value = differenceInMinutes(laterDate_, earlierDate_);
      unit = "minute";
    } else if (Math.abs(diffInSeconds) < secondsInDay && Math.abs(differenceInCalendarDays(laterDate_, earlierDate_)) < 1) {
      value = differenceInHours(laterDate_, earlierDate_);
      unit = "hour";
    } else if (Math.abs(diffInSeconds) < secondsInWeek && (value = differenceInCalendarDays(laterDate_, earlierDate_)) && Math.abs(value) < 7) {
      unit = "day";
    } else if (Math.abs(diffInSeconds) < secondsInMonth) {
      value = differenceInCalendarWeeks(laterDate_, earlierDate_);
      unit = "week";
    } else if (Math.abs(diffInSeconds) < secondsInQuarter) {
      value = differenceInCalendarMonths(laterDate_, earlierDate_);
      unit = "month";
    } else if (Math.abs(diffInSeconds) < secondsInYear) {
      if (differenceInCalendarQuarters(laterDate_, earlierDate_) < 4) {
        value = differenceInCalendarQuarters(laterDate_, earlierDate_);
        unit = "quarter";
      } else {
        value = differenceInCalendarYears(laterDate_, earlierDate_);
        unit = "year";
      }
    } else {
      value = differenceInCalendarYears(laterDate_, earlierDate_);
      unit = "year";
    }
  } else {
    unit = options?.unit;
    if (unit === "second") {
      value = differenceInSeconds(laterDate_, earlierDate_);
    } else if (unit === "minute") {
      value = differenceInMinutes(laterDate_, earlierDate_);
    } else if (unit === "hour") {
      value = differenceInHours(laterDate_, earlierDate_);
    } else if (unit === "day") {
      value = differenceInCalendarDays(laterDate_, earlierDate_);
    } else if (unit === "week") {
      value = differenceInCalendarWeeks(laterDate_, earlierDate_);
    } else if (unit === "month") {
      value = differenceInCalendarMonths(laterDate_, earlierDate_);
    } else if (unit === "quarter") {
      value = differenceInCalendarQuarters(laterDate_, earlierDate_);
    } else if (unit === "year") {
      value = differenceInCalendarYears(laterDate_, earlierDate_);
    }
  }
  const rtf = new Intl.RelativeTimeFormat(options?.locale, {
    numeric: "auto",
    ...options
  });
  return rtf.format(value, unit);
}
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}
function isBefore(date, dateToCompare) {
  return +toDate(date) < +toDate(dateToCompare);
}
function isEqual(leftDate, rightDate) {
  return +toDate(leftDate) === +toDate(rightDate);
}
function isExists(year, month, day) {
  const date = newDate$1(year, month, day);
  return getFullYear(date) === year && getMonth$1(date) === month && getDate$1(date) === day;
}
function isFirstDayOfMonth(date, options) {
  return getDate$1(toDate(date, options?.in)) === 1;
}
function isFuture(date) {
  return +toDate(date) > Date.now();
}
function transpose(date, constructor) {
  const date_ = isConstructor(constructor) ? new constructor(0) : constructFrom(constructor, 0);
  setFullYear(
    date_,
    getFullYear(date),
    getMonth$1(date),
    getDate$1(date)
  );
  date_.setHours(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
  return date_;
}
function isConstructor(constructor) {
  return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
}
const TIMEZONE_UNIT_PRIORITY = 10;
class Setter {
  subPriority = 0;
  validate(_utcDate, _options) {
    return true;
  }
}
class ValueSetter extends Setter {
  constructor(value, validateValue, setValue, priority, subPriority) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }
  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }
  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}
class DateTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  constructor(context, reference) {
    super();
    this.context = context || ((date) => constructFrom(reference, date));
  }
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return constructFrom(date, transpose(date, this.context));
  }
}
class Parser {
  run(dateString, token, match2, options) {
    const result = this.parse(dateString, token, match2, options);
    if (!result) {
      return null;
    }
    return {
      setter: new ValueSetter(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: result.rest
    };
  }
  validate(_utcDate, _value, _options) {
    return true;
  }
}
class EraParser extends Parser {
  priority = 140;
  parse(dateString, token, match2) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return match2.era(dateString, { width: "abbreviated" }) || match2.era(dateString, { width: "narrow" });
      // A, B
      case "GGGGG":
        return match2.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return match2.era(dateString, { width: "wide" }) || match2.era(dateString, { width: "abbreviated" }) || match2.era(dateString, { width: "narrow" });
    }
  }
  set(date, flags, value) {
    flags.era = value;
    setFullYear(date, value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
}
const numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
const timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex$1(year) {
  return isLeapYear(newDate$1(year, 0));
}
class YearParser extends Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(dateString, token, match2) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "yy"
    });
    switch (token) {
      case "y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "yo":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "year"
          }),
          valueCallback
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value) {
    const currentYear = getFullYear(date);
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      setFullYear(date, normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    setFullYear(date, year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}
class LocalWeekYearParser extends Parser {
  priority = 130;
  parse(dateString, token, match2) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY"
    });
    switch (token) {
      case "Y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "Yo":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "year"
          }),
          valueCallback
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value, options) {
    const currentYear = getWeekYear(date, options);
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear
      );
      setFullYear(
        date,
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate
      );
      date.setHours(0, 0, 0, 0);
      return startOfWeek(date, options);
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    setFullYear(date, year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return startOfWeek(date, options);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
}
class ISOWeekYearParser extends Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "R") {
      return parseNDigitsSigned(4, dateString);
    }
    return parseNDigitsSigned(token.length, dateString);
  }
  set(date, _flags, value) {
    const firstWeekOfYear = constructFrom(date, 0);
    setFullYear(firstWeekOfYear, value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return startOfISOWeek(firstWeekOfYear);
  }
  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
}
class ExtendedYearParser extends Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "u") {
      return parseNDigitsSigned(4, dateString);
    }
    return parseNDigitsSigned(token.length, dateString);
  }
  set(date, _flags, value) {
    setFullYear(date, value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class QuarterParser extends Parser {
  priority = 120;
  parse(dateString, token, match2) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match2.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return match2.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match2.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return match2.quarter(dateString, {
          width: "wide",
          context: "formatting"
        }) || match2.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    setMonth$1(date, (value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class StandAloneQuarterParser extends Parser {
  priority = 120;
  parse(dateString, token, match2) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match2.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return match2.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match2.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return match2.quarter(dateString, {
          width: "wide",
          context: "standalone"
        }) || match2.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    setMonth$1(date, (value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class MonthParser extends Parser {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
  priority = 110;
  parse(dateString, token, match2) {
    const valueCallback = (value) => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      // 01, 02, ..., 12
      case "MM":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return match2.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.month(dateString, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return match2.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return match2.month(dateString, { width: "wide", context: "formatting" }) || match2.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.month(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    setMonth$1(date, value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}
class StandAloneMonthParser extends Parser {
  priority = 110;
  parse(dateString, token, match2) {
    const valueCallback = (value) => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback
        );
      // 01, 02, ..., 12
      case "LL":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "month"
          }),
          valueCallback
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return match2.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.month(dateString, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return match2.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return match2.month(dateString, { width: "wide", context: "standalone" }) || match2.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.month(dateString, { width: "narrow", context: "standalone" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    setMonth$1(date, value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
function setWeek(date, week, options) {
  const date_ = toDate(date, options?.in);
  const diff = getWeek(date_, options) - week;
  setDate$1(date_, getDate$1(date_) - diff * 7);
  return toDate(date_, options?.in);
}
class LocalWeekParser extends Parser {
  priority = 100;
  parse(dateString, token, match2) {
    switch (token) {
      case "w":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "wo":
        return match2.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value, options) {
    return startOfWeek(setWeek(date, value, options), options);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
}
function setISOWeek(date, week, options) {
  const _date = toDate(date, options?.in);
  const diff = getISOWeek(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}
class ISOWeekParser extends Parser {
  priority = 100;
  parse(dateString, token, match2) {
    switch (token) {
      case "I":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "Io":
        return match2.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value) {
    return startOfISOWeek(setISOWeek(date, value));
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
}
const DAYS_IN_MONTH = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
const DAYS_IN_MONTH_LEAP_YEAR = [
  31,
  31,
  31,
  31,
  31,
  31,
  30,
  30,
  30,
  30,
  30,
  30
];
class DateParser extends Parser {
  priority = 90;
  subPriority = 1;
  parse(dateString, token, match2) {
    switch (token) {
      case "d":
        return parseNumericPattern(numericPatterns.date, dateString);
      case "do":
        return match2.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = getFullYear(date);
    const isLeapYear2 = isLeapYearIndex$1(year);
    const month = getMonth$1(date);
    if (isLeapYear2) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }
  set(date, _flags, value) {
    setDate$1(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class DayOfYearParser extends Parser {
  priority = 90;
  subpriority = 1;
  parse(dateString, token, match2) {
    switch (token) {
      case "D":
      case "DD":
        return parseNumericPattern(numericPatterns.dayOfYear, dateString);
      case "Do":
        return match2.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = getFullYear(date);
    const isLeapYear2 = isLeapYearIndex$1(year);
    if (isLeapYear2) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }
  set(date, _flags, value) {
    setMonth$1(date, 0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
function setDay(date, day, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 6;
  const date_ = toDate(date, options?.in);
  const currentDay = date_.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return addDays(date_, diff, options);
}
class DayParser extends Parser {
  priority = 90;
  parse(dateString, token, match2) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return match2.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return match2.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return match2.day(dateString, { width: "wide", context: "formatting" }) || match2.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
class LocalDayParser extends Parser {
  priority = 90;
  parse(dateString, token, match2, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6 + 1) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "e":
      case "ee":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      // Tue
      case "eee":
        return match2.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return match2.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return match2.day(dateString, { width: "wide", context: "formatting" }) || match2.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.day(dateString, { width: "short", context: "formatting" }) || match2.day(dateString, { width: "narrow", context: "formatting" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T"
  ];
}
class StandAloneLocalDayParser extends Parser {
  priority = 90;
  parse(dateString, token, match2, options) {
    const valueCallback = (value) => {
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6 + 1) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "c":
      case "cc":
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return mapValue(
          match2.ordinalNumber(dateString, {
            unit: "day"
          }),
          valueCallback
        );
      // Tue
      case "ccc":
        return match2.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.day(dateString, { width: "short", context: "standalone" }) || match2.day(dateString, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return match2.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return match2.day(dateString, { width: "short", context: "standalone" }) || match2.day(dateString, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return match2.day(dateString, { width: "wide", context: "standalone" }) || match2.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match2.day(dateString, { width: "short", context: "standalone" }) || match2.day(dateString, { width: "narrow", context: "standalone" });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T"
  ];
}
function setISODay(date, day, options) {
  const date_ = toDate(date, options?.in);
  const currentDay = getISODay(date_, options);
  const diff = day - currentDay;
  return addDays(date_, diff, options);
}
class ISODayParser extends Parser {
  priority = 90;
  parse(dateString, token, match2) {
    const valueCallback = (value) => {
      if (value === 0) {
        return 7;
      }
      return value;
    };
    switch (token) {
      // 2
      case "i":
      case "ii":
        return parseNDigits(token.length, dateString);
      // 2nd
      case "io":
        return match2.ordinalNumber(dateString, { unit: "day" });
      // Tue
      case "iii":
        return mapValue(
          match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // T
      case "iiiii":
        return mapValue(
          match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // Tu
      case "iiiiii":
        return mapValue(
          match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
      // Tuesday
      case "iiii":
      default:
        return mapValue(
          match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }),
          valueCallback
        );
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 7;
  }
  set(date, _flags, value) {
    date = setISODay(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T"
  ];
}
class AMPMParser extends Parser {
  priority = 80;
  parse(dateString, token, match2) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return match2.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
class AMPMMidnightParser extends Parser {
  priority = 80;
  parse(dateString, token, match2) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return match2.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
class DayPeriodParser extends Parser {
  priority = 80;
  parse(dateString, token, match2) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return match2.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match2.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
}
class Hour1to12Parser extends Parser {
  priority = 70;
  parse(dateString, token, match2) {
    switch (token) {
      case "h":
        return parseNumericPattern(numericPatterns.hour12h, dateString);
      case "ho":
        return match2.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 12;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
}
class Hour0to23Parser extends Parser {
  priority = 70;
  parse(dateString, token, match2) {
    switch (token) {
      case "H":
        return parseNumericPattern(numericPatterns.hour23h, dateString);
      case "Ho":
        return match2.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 23;
  }
  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}
class Hour0To11Parser extends Parser {
  priority = 70;
  parse(dateString, token, match2) {
    switch (token) {
      case "K":
        return parseNumericPattern(numericPatterns.hour11h, dateString);
      case "Ko":
        return match2.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
}
class Hour1To24Parser extends Parser {
  priority = 70;
  parse(dateString, token, match2) {
    switch (token) {
      case "k":
        return parseNumericPattern(numericPatterns.hour24h, dateString);
      case "ko":
        return match2.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 24;
  }
  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}
class MinuteParser extends Parser {
  priority = 60;
  parse(dateString, token, match2) {
    switch (token) {
      case "m":
        return parseNumericPattern(numericPatterns.minute, dateString);
      case "mo":
        return match2.ordinalNumber(dateString, { unit: "minute" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
}
class SecondParser extends Parser {
  priority = 50;
  parse(dateString, token, match2) {
    switch (token) {
      case "s":
        return parseNumericPattern(numericPatterns.second, dateString);
      case "so":
        return match2.ordinalNumber(dateString, { unit: "second" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
}
class FractionOfSecondParser extends Parser {
  priority = 30;
  parse(dateString, token) {
    const valueCallback = (value) => Math.trunc(value * Math.pow(10, -token.length + 3));
    return mapValue(parseNDigits(token.length, dateString), valueCallback);
  }
  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }
  incompatibleTokens = ["t", "T"];
}
class ISOTimezoneWithZParser extends Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "X":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        );
      case "XX":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "XXXX":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        );
      case "XXXXX":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        );
      case "XXX":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value
    );
  }
  incompatibleTokens = ["t", "T", "x"];
}
class ISOTimezoneParser extends Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "x":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        );
      case "xx":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "xxxx":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        );
      case "xxxxx":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        );
      case "xxx":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value
    );
  }
  incompatibleTokens = ["t", "T", "X"];
}
class TimestampSecondsParser extends Parser {
  priority = 40;
  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }
  set(date, _flags, value) {
    return [constructFrom(date, value * 1e3), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
}
class TimestampMillisecondsParser extends Parser {
  priority = 20;
  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }
  set(date, _flags, value) {
    return [constructFrom(date, value), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
}
const parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};
const formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp$1 = /^'([^]*?)'?$/;
const doubleQuoteRegExp$1 = /''/g;
const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
function parse(dateStr, formatStr, referenceDate, options) {
  const invalidDate = () => constructFrom(options?.in || referenceDate, NaN);
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? faIR$1;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 6;
  if (!formatStr)
    return dateStr ? invalidDate() : toDate(referenceDate, options?.in);
  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  const setters = [new DateTimezoneSetter(options?.in, referenceDate)];
  const tokens = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter in longFormatters) {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp$1);
  const usedTokens = [];
  for (let token of tokens) {
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    if (!options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    const firstCharacter = token[0];
    const parser = parsers[firstCharacter];
    if (parser) {
      const { incompatibleTokens } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(
          (usedToken) => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter
        );
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`
          );
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`
        );
      }
      usedTokens.push({ token: firstCharacter, fullToken: token });
      const parseResult = parser.run(
        dateStr,
        token,
        locale.match,
        subFnOptions
      );
      if (!parseResult) {
        return invalidDate();
      }
      setters.push(parseResult.setter);
      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
        );
      }
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString$1(token);
      }
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return invalidDate();
      }
    }
  }
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return invalidDate();
  }
  const uniquePrioritySetters = setters.map((setter) => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map(
    (priority) => setters.filter((setter) => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)
  ).map((setterArray) => setterArray[0]);
  let date = toDate(referenceDate, options?.in);
  if (isNaN(+date)) return invalidDate();
  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return invalidDate();
    }
    const result = setter.set(date, flags, subFnOptions);
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
    } else {
      date = result;
    }
  }
  return date;
}
function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
}
function isMatch(dateStr, formatStr, options) {
  return isValid(parse(dateStr, formatStr, newDate$1(), options));
}
function isMonday(date, options) {
  return toDate(date, options?.in).getDay() === 1;
}
function isPast(date) {
  return +toDate(date) < Date.now();
}
function startOfHour(date, options) {
  const _date = toDate(date, options?.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}
function isSameHour(dateLeft, dateRight, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    dateLeft,
    dateRight
  );
  return +startOfHour(dateLeft_) === +startOfHour(dateRight_);
}
function isSameWeek(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options);
}
function isSameISOWeek(laterDate, earlierDate, options) {
  return isSameWeek(laterDate, earlierDate, { ...options, weekStartsOn: 1 });
}
function isSameISOWeekYear(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfISOWeekYear(laterDate_) === +startOfISOWeekYear(earlierDate_);
}
function startOfMinute(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
}
function isSameMinute(laterDate, earlierDate) {
  return +startOfMinute(laterDate) === +startOfMinute(earlierDate);
}
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return getFullYear(laterDate_) === getFullYear(earlierDate_) && getMonth$1(laterDate_) === getMonth$1(earlierDate_);
}
function isSameQuarter(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfQuarter(dateLeft_) === +startOfQuarter(dateRight_);
}
function startOfSecond(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setMilliseconds(0);
  return date_;
}
function isSameSecond(laterDate, earlierDate) {
  return +startOfSecond(laterDate) === +startOfSecond(earlierDate);
}
function isSameYear(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return getFullYear(laterDate_) === getFullYear(earlierDate_);
}
function isSaturday(date, options) {
  return toDate(date, options?.in).getDay() === 6;
}
function isSunday(date, options) {
  return toDate(date, options?.in).getDay() === 0;
}
function isThisHour(date, options) {
  return isSameHour(
    toDate(date, options?.in),
    constructNow(options?.in || date)
  );
}
function isThisISOWeek(date, options) {
  return isSameISOWeek(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date)
  );
}
function isThisMinute(date) {
  return isSameMinute(date, constructNow(date));
}
function isThisMonth(date, options) {
  return isSameMonth(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date)
  );
}
function isThisQuarter(date, options) {
  return isSameQuarter(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date)
  );
}
function isThisSecond(date) {
  return isSameSecond(date, constructNow(date));
}
function isThisWeek(date, options) {
  return isSameWeek(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
    options
  );
}
function isThisYear(date, options) {
  return isSameYear(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date)
  );
}
function isThursday(date, options) {
  return toDate(date, options?.in).getDay() === 4;
}
function isToday(date, options) {
  return isSameDay(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date)
  );
}
function isTomorrow(date, options) {
  return isSameDay(
    date,
    addDays(constructNow(options?.in || date), 1),
    options
  );
}
function isTuesday(date, options) {
  return toDate(date, options?.in).getDay() === 2;
}
function isWednesday(date, options) {
  return toDate(date, options?.in).getDay() === 3;
}
function isWithinInterval(date, interval2, options) {
  const time = +toDate(date, options?.in);
  const [startTime, endTime] = [
    +toDate(interval2.start, options?.in),
    +toDate(interval2.end, options?.in)
  ].sort((a, b) => a - b);
  return time >= startTime && time <= endTime;
}
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}
function isYesterday(date, options) {
  return isSameDay(
    constructFrom(options?.in || date, date),
    subDays(constructNow(options?.in || date), 1)
  );
}
function lastDayOfDecade(date, options) {
  const _date = toDate(date, options?.in);
  const year = getFullYear(_date);
  const decade = 9 + Math.floor(year / 10) * 10;
  setFullYear(_date, decade + 1, 0, 0);
  _date.setHours(0, 0, 0, 0);
  return toDate(_date, options?.in);
}
function lastDayOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 6;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setHours(0, 0, 0, 0);
  setDate$1(_date, getDate$1(_date) + diff);
  return _date;
}
function lastDayOfISOWeek(date, options) {
  return lastDayOfWeek(date, { ...options, weekStartsOn: 1 });
}
function lastDayOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year + 1, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  const date_ = startOfISOWeek(fourthOfJanuary, options);
  date_.setDate(date_.getDate() - 1);
  return date_;
}
function lastDayOfQuarter(date, options) {
  const date_ = toDate(date, options?.in);
  const currentMonth = getMonth$1(date_);
  const month = currentMonth - currentMonth % 3 + 3;
  setMonth$1(date_, month, 0);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
function lastDayOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  const year = getFullYear(date_);
  setFullYear(date_, year + 1, 0, 0);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
const formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function lightFormat(date, formatStr) {
  const date_ = toDate(date);
  if (!isValid(date_)) {
    throw new RangeError("Invalid time value");
  }
  const tokens = formatStr.match(formattingTokensRegExp);
  if (!tokens) return "";
  const result = tokens.map((substring) => {
    if (substring === "''") {
      return "'";
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    const formatter = lightFormatters[firstCharacter];
    if (formatter) {
      return formatter(date_, substring);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  const matches = input.match(escapedStringRegExp);
  if (!matches) return input;
  return matches[1].replace(doubleQuoteRegExp, "'");
}
function milliseconds({
  years,
  months: months2,
  weeks,
  days: days2,
  hours,
  minutes,
  seconds
}) {
  let totalDays = 0;
  if (years) totalDays += years * daysInYear;
  if (months2) totalDays += months2 * (daysInYear / 12);
  if (weeks) totalDays += weeks * 7;
  if (days2) totalDays += days2;
  let totalSeconds = totalDays * 24 * 60 * 60;
  if (hours) totalSeconds += hours * 60 * 60;
  if (minutes) totalSeconds += minutes * 60;
  if (seconds) totalSeconds += seconds;
  return Math.trunc(totalSeconds * 1e3);
}
function millisecondsToHours(milliseconds2) {
  const hours = milliseconds2 / millisecondsInHour;
  return Math.trunc(hours);
}
function millisecondsToMinutes(milliseconds2) {
  const minutes = milliseconds2 / millisecondsInMinute;
  return Math.trunc(minutes);
}
function millisecondsToSeconds(milliseconds2) {
  const seconds = milliseconds2 / millisecondsInSecond;
  return Math.trunc(seconds);
}
function minutesToHours(minutes) {
  const hours = minutes / minutesInHour;
  return Math.trunc(hours);
}
function minutesToMilliseconds(minutes) {
  return Math.trunc(minutes * millisecondsInMinute);
}
function minutesToSeconds(minutes) {
  return Math.trunc(minutes * secondsInMinute);
}
function monthsToQuarters(months2) {
  const quarters = months2 / monthsInQuarter;
  return Math.trunc(quarters);
}
function monthsToYears(months2) {
  const years = months2 / monthsInYear;
  return Math.trunc(years);
}
function newDate(year, monthIndex, date, hours = 0, minutes = 0, seconds = 0, ms = 0) {
  return newDate$1(year, monthIndex, date, hours, minutes, seconds, ms);
}
function nextDay(date, day, options) {
  let delta = day - getDay(date, options);
  if (delta <= 0) delta += 7;
  return addDays(date, delta, options);
}
function nextFriday(date, options) {
  return nextDay(date, 5, options);
}
function nextMonday(date, options) {
  return nextDay(date, 1, options);
}
function nextSaturday(date, options) {
  return nextDay(date, 6, options);
}
function nextSunday(date, options) {
  return nextDay(date, 0, options);
}
function nextThursday(date, options) {
  return nextDay(date, 4, options);
}
function nextTuesday(date, options) {
  return nextDay(date, 2, options);
}
function nextWednesday(date, options) {
  return nextDay(date, 3, options);
}
function parseISO(argument, options) {
  const invalidDate = () => constructFrom(options?.in, NaN);
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(+date)) return invalidDate();
  const timestamp = +date;
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = toDate(0, options?.in);
    result.setFullYear(
      tmpDate.getUTCFullYear(),
      tmpDate.getUTCMonth(),
      tmpDate.getUTCDate()
    );
    result.setHours(
      tmpDate.getUTCHours(),
      tmpDate.getUTCMinutes(),
      tmpDate.getUTCSeconds(),
      tmpDate.getUTCMilliseconds()
    );
    return result;
  }
  return toDate(timestamp + time + offset, options?.in);
}
const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length
      );
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)"
  );
  const captures = dateString.match(regex);
  if (!captures) return { year: NaN, restDateString: "" };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null) return /* @__PURE__ */ new Date(NaN);
  const captures = dateString.match(dateRegex);
  if (!captures) return /* @__PURE__ */ new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN;
  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}
function parseJSON(dateStr, options) {
  const parts = dateStr.match(
    /(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/
  );
  if (!parts) return toDate(NaN, options?.in);
  return toDate(
    Date.UTC(
      +parts[1],
      +parts[2] - 1,
      +parts[3],
      +parts[4] - (+parts[9] || 0) * (parts[8] == "-" ? -1 : 1),
      +parts[5] - (+parts[10] || 0) * (parts[8] == "-" ? -1 : 1),
      +parts[6],
      +((parts[7] || "0") + "00").substring(0, 3)
    ),
    options?.in
  );
}
function previousDay(date, day, options) {
  let delta = getDay(date, options) - day;
  if (delta <= 0) delta += 7;
  return subDays(date, delta, options);
}
function previousFriday(date, options) {
  return previousDay(date, 5, options);
}
function previousMonday(date, options) {
  return previousDay(date, 1, options);
}
function previousSaturday(date, options) {
  return previousDay(date, 6, options);
}
function previousSunday(date, options) {
  return previousDay(date, 0, options);
}
function previousThursday(date, options) {
  return previousDay(date, 4, options);
}
function previousTuesday(date, options) {
  return previousDay(date, 2, options);
}
function previousWednesday(date, options) {
  return previousDay(date, 3, options);
}
function quartersToMonths(quarters) {
  return Math.trunc(quarters * monthsInQuarter);
}
function quartersToYears(quarters) {
  const years = quarters / quartersInYear;
  return Math.trunc(years);
}
function roundToNearestHours(date, options) {
  const nearestTo = options?.nearestTo ?? 1;
  if (nearestTo < 1 || nearestTo > 12)
    return constructFrom(options?.in || date, NaN);
  const date_ = toDate(date, options?.in);
  const fractionalMinutes = date_.getMinutes() / 60;
  const fractionalSeconds = date_.getSeconds() / 60 / 60;
  const fractionalMilliseconds = date_.getMilliseconds() / 1e3 / 60 / 60;
  const hours = date_.getHours() + fractionalMinutes + fractionalSeconds + fractionalMilliseconds;
  const method = options?.roundingMethod ?? "round";
  const roundingMethod = getRoundingMethod(method);
  const roundedHours = roundingMethod(hours / nearestTo) * nearestTo;
  date_.setHours(roundedHours, 0, 0, 0);
  return date_;
}
function roundToNearestMinutes(date, options) {
  const nearestTo = options?.nearestTo ?? 1;
  if (nearestTo < 1 || nearestTo > 30) return constructFrom(date, NaN);
  const date_ = toDate(date, options?.in);
  const fractionalSeconds = date_.getSeconds() / 60;
  const fractionalMilliseconds = date_.getMilliseconds() / 1e3 / 60;
  const minutes = date_.getMinutes() + fractionalSeconds + fractionalMilliseconds;
  const method = options?.roundingMethod ?? "round";
  const roundingMethod = getRoundingMethod(method);
  const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
  date_.setMinutes(roundedMinutes, 0, 0);
  return date_;
}
function secondsToHours(seconds) {
  const hours = seconds / secondsInHour;
  return Math.trunc(hours);
}
function secondsToMilliseconds(seconds) {
  return seconds * millisecondsInSecond;
}
function secondsToMinutes(seconds) {
  const minutes = seconds / secondsInMinute;
  return Math.trunc(minutes);
}
function setMonth(date, month, options) {
  const _date = toDate(date, options?.in);
  const year = getFullYear(_date);
  const day = getDate$1(_date);
  const midMonth = constructFrom(options?.in || date, 0);
  setFullYear(midMonth, year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(midMonth);
  setMonth$1(_date, month, Math.min(day, daysInMonth));
  return _date;
}
function set(date, values, options) {
  let _date = toDate(date, options?.in);
  if (isNaN(+_date)) return constructFrom(options?.in || date, NaN);
  if (values.year != null) setFullYear(_date, values.year);
  if (values.month != null) _date = setMonth(_date, values.month);
  if (values.date != null) setDate$1(_date, values.date);
  if (values.hours != null) _date.setHours(values.hours);
  if (values.minutes != null) _date.setMinutes(values.minutes);
  if (values.seconds != null) _date.setSeconds(values.seconds);
  if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
  return _date;
}
function setDate(date, dayOfMonth, options) {
  const _date = toDate(date, options?.in);
  setDate$1(_date, dayOfMonth);
  return _date;
}
function setDayOfYear(date, dayOfYear, options) {
  const date_ = toDate(date, options?.in);
  setMonth$1(date_, 0);
  setDate$1(date_, dayOfYear);
  return date_;
}
function setDefaultOptions(options) {
  const result = {};
  const defaultOptions2 = getDefaultOptions$1();
  for (const property in defaultOptions2) {
    if (Object.prototype.hasOwnProperty.call(defaultOptions2, property)) {
      result[property] = defaultOptions2[property];
    }
  }
  for (const property in options) {
    if (Object.prototype.hasOwnProperty.call(options, property)) {
      if (options[property] === void 0) {
        delete result[property];
      } else {
        result[property] = options[property];
      }
    }
  }
  setDefaultOptions$1(result);
}
function setHours(date, hours, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(hours);
  return _date;
}
function setMilliseconds(date, milliseconds2, options) {
  const _date = toDate(date, options?.in);
  _date.setMilliseconds(milliseconds2);
  return _date;
}
function setMinutes(date, minutes, options) {
  const date_ = toDate(date, options?.in);
  date_.setMinutes(minutes);
  return date_;
}
function setQuarter(date, quarter, options) {
  const date_ = toDate(date, options?.in);
  const oldQuarter = Math.trunc(getMonth$1(date_) / 3) + 1;
  const diff = quarter - oldQuarter;
  return setMonth(date_, getMonth$1(date_) + diff * 3);
}
function setSeconds(date, seconds, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(seconds);
  return _date;
}
function setWeekYear(date, weekYear, options) {
  const defaultOptions2 = getDefaultOptions$1();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const diff = differenceInCalendarDays(
    toDate(date, options?.in),
    startOfWeekYear(date, options),
    options
  );
  const firstWeek = constructFrom(options?.in || date, 0);
  setFullYear(firstWeek, weekYear, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const date_ = startOfWeekYear(firstWeek, options);
  setDate$1(date_, getDate$1(date_) + diff);
  return date_;
}
function setYear(date, year, options) {
  const date_ = toDate(date, options?.in);
  if (isNaN(+date_)) return constructFrom(options?.in || date, NaN);
  setFullYear(date_, year);
  return date_;
}
function startOfDecade(date, options) {
  const _date = toDate(date, options?.in);
  const year = getFullYear(_date);
  const decade = Math.floor(year / 10) * 10;
  setFullYear(_date, decade, 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function startOfToday(options) {
  return startOfDay(Date.now(), options);
}
function startOfTomorrow(options) {
  const now = constructNow(options?.in);
  const year = getFullYear(now);
  const month = getMonth$1(now);
  const day = getDate$1(now);
  const date = constructFrom(options?.in, 0);
  setFullYear(date, year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfYesterday(options) {
  const now = constructNow(options?.in);
  const year = getFullYear(now);
  const month = getMonth$1(now);
  const day = getDate$1(now);
  const date = constructNow(options?.in);
  setFullYear(date, year, month, day - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function subMonths(date, amount, options) {
  return addMonths(date, -amount, options);
}
function sub(date, duration, options) {
  const {
    years = 0,
    months: months2 = 0,
    weeks = 0,
    days: days2 = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  const withoutMonths = subMonths(date, months2 + years * 12, options);
  const withoutDays = subDays(withoutMonths, days2 + weeks * 7, options);
  const minutesToSub = minutes + hours * 60;
  const secondsToSub = seconds + minutesToSub * 60;
  const msToSub = secondsToSub * 1e3;
  return constructFrom(options?.in || date, +withoutDays - msToSub);
}
function subBusinessDays(date, amount, options) {
  return addBusinessDays(date, -amount, options);
}
function subHours(date, amount, options) {
  return addHours(date, -amount, options);
}
function subMilliseconds(date, amount, options) {
  return addMilliseconds(date, -amount, options);
}
function subMinutes(date, amount, options) {
  return addMinutes(date, -amount, options);
}
function subQuarters(date, amount, options) {
  return addQuarters(date, -amount, options);
}
function subSeconds(date, amount, options) {
  return addSeconds(date, -amount, options);
}
function subWeeks(date, amount, options) {
  return addWeeks(date, -amount, options);
}
function subYears(date, amount, options) {
  return addYears(date, -amount, options);
}
function weeksToDays(weeks) {
  return Math.trunc(weeks * daysInWeek);
}
function yearsToDays(years) {
  return Math.trunc(years * daysInYear);
}
function yearsToMonths(years) {
  return Math.trunc(years * monthsInYear);
}
function yearsToQuarters(years) {
  return Math.trunc(years * quartersInYear);
}
const dateFnsJalali = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add,
  addBusinessDays,
  addDays,
  addHours,
  addISOWeekYears,
  addMilliseconds,
  addMinutes,
  addMonths,
  addQuarters,
  addSeconds,
  addWeeks,
  addYears,
  areIntervalsOverlapping,
  clamp,
  closestIndexTo,
  closestTo,
  compareAsc,
  compareDesc,
  constructFrom,
  constructNow,
  daysToWeeks,
  differenceInBusinessDays,
  differenceInCalendarDays,
  differenceInCalendarISOWeekYears,
  differenceInCalendarISOWeeks,
  differenceInCalendarMonths,
  differenceInCalendarQuarters,
  differenceInCalendarWeeks,
  differenceInCalendarYears,
  differenceInDays,
  differenceInHours,
  differenceInISOWeekYears,
  differenceInMilliseconds,
  differenceInMinutes,
  differenceInMonths,
  differenceInQuarters,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
  eachDayOfInterval,
  eachHourOfInterval,
  eachMinuteOfInterval,
  eachMonthOfInterval,
  eachQuarterOfInterval,
  eachWeekOfInterval,
  eachWeekendOfInterval,
  eachWeekendOfMonth,
  eachWeekendOfYear,
  eachYearOfInterval,
  endOfDay,
  endOfDecade,
  endOfHour,
  endOfISOWeek,
  endOfISOWeekYear,
  endOfMinute,
  endOfMonth,
  endOfQuarter,
  endOfSecond,
  endOfToday,
  endOfTomorrow,
  endOfWeek,
  endOfYear,
  endOfYesterday,
  format,
  formatDate: format,
  formatDistance,
  formatDistanceStrict,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  formatDuration,
  formatISO,
  formatISO9075,
  formatISODuration,
  formatRFC3339,
  formatRFC7231,
  formatRelative,
  formatters,
  fromUnixTime,
  getDate,
  getDay,
  getDayOfYear,
  getDaysInMonth,
  getDaysInYear,
  getDecade,
  getDefaultOptions,
  getHours,
  getISODay,
  getISOWeek,
  getISOWeekYear,
  getISOWeeksInYear,
  getMilliseconds,
  getMinutes,
  getMonth,
  getOverlappingDaysInIntervals,
  getQuarter,
  getSeconds,
  getTime,
  getUnixTime,
  getWeek,
  getWeekOfMonth,
  getWeekYear,
  getWeeksInMonth,
  getYear,
  hoursToMilliseconds,
  hoursToMinutes,
  hoursToSeconds,
  interval,
  intervalToDuration,
  intlFormat,
  intlFormatDistance,
  isAfter,
  isBefore,
  isDate,
  isEqual,
  isExists,
  isFirstDayOfMonth,
  isFriday,
  isFuture,
  isLastDayOfMonth,
  isLeapYear,
  isMatch,
  isMonday,
  isPast,
  isSameDay,
  isSameHour,
  isSameISOWeek,
  isSameISOWeekYear,
  isSameMinute,
  isSameMonth,
  isSameQuarter,
  isSameSecond,
  isSameWeek,
  isSameYear,
  isSaturday,
  isSunday,
  isThisHour,
  isThisISOWeek,
  isThisMinute,
  isThisMonth,
  isThisQuarter,
  isThisSecond,
  isThisWeek,
  isThisYear,
  isThursday,
  isToday,
  isTomorrow,
  isTuesday,
  isValid,
  isWednesday,
  isWeekend,
  isWithinInterval,
  isYesterday,
  lastDayOfDecade,
  lastDayOfISOWeek,
  lastDayOfISOWeekYear,
  lastDayOfMonth,
  lastDayOfQuarter,
  lastDayOfWeek,
  lastDayOfYear,
  lightFormat,
  lightFormatters,
  longFormatters,
  max,
  milliseconds,
  millisecondsToHours,
  millisecondsToMinutes,
  millisecondsToSeconds,
  min,
  minutesToHours,
  minutesToMilliseconds,
  minutesToSeconds,
  monthsToQuarters,
  monthsToYears,
  newDate,
  nextDay,
  nextFriday,
  nextMonday,
  nextSaturday,
  nextSunday,
  nextThursday,
  nextTuesday,
  nextWednesday,
  parse,
  parseISO,
  parseJSON,
  parsers,
  previousDay,
  previousFriday,
  previousMonday,
  previousSaturday,
  previousSunday,
  previousThursday,
  previousTuesday,
  previousWednesday,
  quartersToMonths,
  quartersToYears,
  roundToNearestHours,
  roundToNearestMinutes,
  secondsToHours,
  secondsToMilliseconds,
  secondsToMinutes,
  set,
  setDate,
  setDay,
  setDayOfYear,
  setDefaultOptions,
  setHours,
  setISODay,
  setISOWeek,
  setISOWeekYear,
  setMilliseconds,
  setMinutes,
  setMonth,
  setQuarter,
  setSeconds,
  setWeek,
  setWeekYear,
  setYear,
  startOfDay,
  startOfDecade,
  startOfHour,
  startOfISOWeek,
  startOfISOWeekYear,
  startOfMinute,
  startOfMonth,
  startOfQuarter,
  startOfSecond,
  startOfToday,
  startOfTomorrow,
  startOfWeek,
  startOfWeekYear,
  startOfYear,
  startOfYesterday,
  sub,
  subBusinessDays,
  subDays,
  subHours,
  subISOWeekYears,
  subMilliseconds,
  subMinutes,
  subMonths,
  subQuarters,
  subSeconds,
  subWeeks,
  subYears,
  toDate,
  transpose,
  weeksToDays,
  yearsToDays,
  yearsToMonths,
  yearsToQuarters
}, Symbol.toStringTag, { value: "Module" }));
const faIR = faIR$1;
function DayPicker(props) {
  const dateLib = getDateLib({
    locale: props.locale,
    weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
    firstWeekContainsDate: props.firstWeekContainsDate,
    useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
    timeZone: props.timeZone
  });
  return React.createElement(DayPicker$1, { ...props, locale: props.locale ?? faIR, numerals: props.numerals ?? "arabext", dir: props.dir ?? "rtl", dateLib });
}
const getDateLib = (options) => {
  return new DateLib(options, dateFnsJalali);
};
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters: formatters2,
  components: components2,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DayPicker,
    {
      dir: "ltr",
      showOutsideDays,
      className: cn(
        "group/calendar bg-background p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters2
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
        button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
        button_next: cn(buttonVariants({ variant: buttonVariant }), "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
        month_caption: cn("flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]", defaultClassNames.month_caption),
        dropdowns: cn("flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium dark:text-foreground", defaultClassNames.dropdowns),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border dark:bg-popover dark:text-foreground",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("absolute inset-0 opacity-0 dark:bg-popover", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-[--cell-size] select-none", defaultClassNames.week_number_header),
        week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          "[tr:has(td:last-child:not(:nth-child(7)))_&]:aspect-auto [tr:has(td:last-child:not(:nth-child(7)))_&]:w-[calc(100%/7)]",
          defaultClassNames.day
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
        outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-slot": "calendar", ref: rootRef, className: cn(className2), ...props2 });
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-[--cell-size] items-center justify-center text-center", children }) });
        },
        ...components2
      },
      ...props
    }
  );
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
  const defaultClassNames = getDefaultClassNames();
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button$1,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-end=true]:bg-primary data-[range-middle=true]:bg-accent data-[range-start=true]:bg-primary data-[selected-single=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:text-accent-foreground data-[range-start=true]:text-primary-foreground data-[selected-single=true]:text-primary-foreground group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
const getPeriodFromDateRange = (range) => {
  if (!range?.from || !range?.to) {
    return Period.hour;
  }
  const diffTime = Math.abs(range.to.getTime() - range.from.getTime());
  const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  if (diffDays <= 2) {
    return Period.hour;
  }
  return Period.day;
};
const formatDateByLocale = (date, isPersianLocale, includeTime = false) => {
  if (isPersianLocale) {
    if (includeTime) {
      return date.toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }) + " " + date.toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
    }
    return new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(date);
  }
  if (includeTime) {
    return date.toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }) + " " + date.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  }
  return format$1(date, "LLL dd, y");
};
const formatDateShort = (date, isPersianLocale) => {
  if (isPersianLocale) {
    return date.toLocaleDateString("fa-IR", {
      month: "2-digit",
      day: "2-digit"
    });
  }
  return format$1(date, "MMM dd");
};
const isDateDisabled = (date, minDate, maxDate) => {
  const now = /* @__PURE__ */ new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const compareDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const min2 = minDate || today;
  const minCompare = new Date(min2.getFullYear(), min2.getMonth(), min2.getDate());
  if (compareDate < minCompare) {
    return true;
  }
  const max2 = maxDate || new Date(now.getFullYear() + 15, 11, 31);
  const maxCompare = new Date(max2.getFullYear(), max2.getMonth(), max2.getDate());
  if (compareDate > maxCompare) {
    return true;
  }
  if (!minDate) {
    if (date.getFullYear() === now.getFullYear()) {
      if (date.getMonth() < now.getMonth()) {
        return true;
      }
      if (date.getMonth() === now.getMonth() && compareDate < today) {
        return true;
      }
    }
  }
  return false;
};
function DatePicker({
  mode,
  onDateChange,
  onRangeChange,
  date,
  range,
  showTime = false,
  useUtcTimestamp = false,
  label,
  placeholder,
  minDate,
  maxDate,
  defaultRange,
  disableAfter,
  numberOfMonths = mode === "range" ? 2 : 1,
  className,
  open: controlledOpen,
  onOpenChange,
  formatDate: customFormatDate,
  fieldName = "date",
  onFieldChange,
  align,
  side
}) {
  const { t, i18n } = useTranslation();
  const dir = useDirDetection();
  const isRTL = dir === "rtl";
  const [datePreference, setDatePreference] = reactExports.useState("locale");
  const isPersianCalendar = datePreference === "persian" || datePreference === "locale" && i18n.language === "fa";
  const isMobile = useIsMobile();
  const { resolvedTheme } = useTheme();
  const [internalOpen, setInternalOpen] = reactExports.useState(false);
  const [internalDate, setInternalDate] = reactExports.useState(date || void 0);
  const [internalRange, setInternalRange] = reactExports.useState(range || defaultRange || (mode === "range" ? { from: addDays$1(/* @__PURE__ */ new Date(), -7), to: /* @__PURE__ */ new Date() } : void 0));
  const isOpen = controlledOpen !== void 0 ? controlledOpen : internalOpen;
  const setIsOpen = (open) => {
    if (controlledOpen === void 0) {
      setInternalOpen(open);
    }
    onOpenChange?.(open);
  };
  reactExports.useEffect(() => {
    if (date !== void 0) {
      setInternalDate(date || void 0);
    }
  }, [date]);
  reactExports.useEffect(() => {
    if (range !== void 0) {
      setInternalRange(range);
    }
  }, [range]);
  reactExports.useEffect(() => {
    if (mode === "range" && internalRange && onRangeChange) {
      onRangeChange(internalRange);
    }
  }, []);
  reactExports.useEffect(() => {
    const storedPreference = getDatePickerPreference();
    setDatePreference(storedPreference);
    const handleStorageChange = (event) => {
      if (event.key === DATE_PICKER_PREFERENCE_KEY) {
        setDatePreference(getDatePickerPreference());
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  const handleDateSelect = reactExports.useCallback(
    (selectedDate) => {
      if (!selectedDate) {
        setInternalDate(void 0);
        onDateChange(void 0);
        onFieldChange?.(fieldName, void 0);
        return;
      }
      const now2 = /* @__PURE__ */ new Date();
      const today = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate());
      let selectedDateOnly = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
      if (minDate === void 0 && selectedDateOnly < today) {
        selectedDate = new Date(now2);
        selectedDateOnly = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
      }
      const isToday2 = selectedDateOnly.getTime() === today.getTime();
      if (isToday2) {
        selectedDate.setHours(23, 59, 59, 999);
      } else if (internalDate) {
        selectedDate.setHours(internalDate.getHours(), internalDate.getMinutes(), internalDate.getSeconds(), internalDate.getMilliseconds());
      } else {
        selectedDate.setHours(now2.getHours(), now2.getMinutes(), now2.getSeconds(), now2.getMilliseconds());
      }
      setInternalDate(selectedDate);
      const value = useUtcTimestamp ? toUnixSeconds(selectedDate) : formatOffsetDateTime(selectedDate);
      onDateChange(selectedDate);
      onFieldChange?.(fieldName, value);
      setTimeout(() => {
        setIsOpen(false);
      }, 0);
    },
    [onDateChange, onFieldChange, fieldName, useUtcTimestamp, minDate, internalDate, showTime]
  );
  const handleDateSelectWrapper = reactExports.useCallback(
    (selectedDate) => {
      handleDateSelect(selectedDate);
    },
    [handleDateSelect]
  );
  const handleTimeChange = reactExports.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (internalDate && e.target.value) {
        const [hours, minutes] = e.target.value.split(":");
        const newDate2 = new Date(internalDate);
        newDate2.setHours(parseInt(hours), parseInt(minutes));
        const now2 = /* @__PURE__ */ new Date();
        if (newDate2.toDateString() === now2.toDateString() && newDate2 < now2) {
          newDate2.setTime(now2.getTime());
        }
        const value = useUtcTimestamp ? toUnixSeconds(newDate2) : formatOffsetDateTime(newDate2);
        setInternalDate(newDate2);
        onDateChange(newDate2);
        onFieldChange?.(fieldName, value);
      }
    },
    [internalDate, onDateChange, onFieldChange, fieldName, useUtcTimestamp]
  );
  const handleRangeSelect = reactExports.useCallback(
    (selectedRange) => {
      setInternalRange(selectedRange);
      onRangeChange?.(selectedRange);
      if (selectedRange?.from && selectedRange?.to) {
        setIsOpen(false);
      }
    },
    [onRangeChange]
  );
  const formatDate = reactExports.useCallback(
    (date2) => {
      if (customFormatDate) {
        return customFormatDate(date2);
      }
      return formatDateByLocale(date2, isPersianCalendar, showTime);
    },
    [customFormatDate, isPersianCalendar, showTime]
  );
  const dateDisabled = reactExports.useCallback(
    (date2) => {
      if (mode === "range" && disableAfter && date2 > disableAfter) {
        return true;
      }
      if (mode === "single" && (minDate || maxDate)) {
        return isDateDisabled(date2, minDate, maxDate);
      }
      if (mode === "single" && !minDate && !maxDate) {
        return isDateDisabled(date2);
      }
      return false;
    },
    [mode, disableAfter, minDate, maxDate]
  );
  const now = /* @__PURE__ */ new Date();
  if (mode === "single") {
    const displayDate = internalDate || (date ? new Date(date) : void 0);
    const timeValue = displayDate ? `${String(displayDate.getHours()).padStart(2, "0")}:${String(displayDate.getMinutes()).padStart(2, "0")}` : "";
    const handleClear = reactExports.useCallback(
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        setInternalDate(void 0);
        onDateChange(void 0);
        onFieldChange?.(fieldName, void 0);
      },
      [onDateChange, onFieldChange, fieldName]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("grid gap-2", className), children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button$1,
          {
            dir,
            variant: "outline",
            className: cn("w-full justify-start font-normal", isRTL ? "text-right" : "text-left", !displayDate && "text-muted-foreground"),
            type: "button",
            children: [
              displayDate ? formatDate(displayDate) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: placeholder || label || t("timeSelector.pickDate") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-1", isRTL ? "mr-auto" : "ml-auto"), children: [
                displayDate && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleClear,
                    className: "rounded-sm opacity-50 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    "aria-label": t("clear", { defaultValue: "Clear" }),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$2, { className: "h-4 w-4 opacity-50" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          PopoverContent,
          {
            className: "w-auto p-0",
            align: align ? align : "end",
            side: side ? side : isMobile ? "bottom" : "left",
            onInteractOutside: () => {
              setIsOpen(false);
            },
            onEscapeKeyDown: () => setIsOpen(false),
            children: [
              isPersianCalendar ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Calendar,
                {
                  mode: "single",
                  selected: displayDate,
                  onSelect: handleDateSelectWrapper,
                  disabled: dateDisabled,
                  captionLayout: "dropdown",
                  defaultMonth: displayDate || now,
                  startMonth: minDate || new Date(now.getFullYear(), 0, 1),
                  endMonth: maxDate || new Date(now.getFullYear() + 15, 11, 31),
                  formatters: {
                    formatMonthDropdown: (date2) => date2.toLocaleString("fa-IR", { month: "short" })
                  }
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Calendar$1,
                {
                  mode: "single",
                  selected: displayDate,
                  onSelect: handleDateSelectWrapper,
                  disabled: dateDisabled,
                  captionLayout: "dropdown",
                  defaultMonth: displayDate || now,
                  startMonth: minDate || new Date(now.getFullYear(), 0, 1),
                  endMonth: maxDate || new Date(now.getFullYear() + 15, 11, 31),
                  formatters: {
                    formatMonthDropdown: (date2) => date2.toLocaleString("default", { month: "short" })
                  }
                }
              ),
              showTime && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dir: "ltr", className: "hidden flex-wrap items-center gap-1 border-t p-2 lg:flex", children: [
                  { label: "+7d", days: 7 },
                  { label: "+1m", days: 30 },
                  { label: "+2m", days: 60 },
                  { label: "+3m", days: 90 },
                  { label: "+1y", days: 365 }
                ].map(({ label: label2, days: days2 }) => {
                  const handleShortcut = () => {
                    const baseDate = displayDate || now;
                    const targetDate = new Date(baseDate);
                    targetDate.setDate(baseDate.getDate() + days2);
                    handleDateSelect(targetDate);
                  };
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button$1,
                    {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      className: "h-5 px-1.5 text-[10px] text-muted-foreground hover:text-foreground",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleShortcut();
                      },
                      children: label2
                    },
                    label2
                  );
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 border-t p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "time",
                    value: timeValue,
                    onChange: handleTimeChange,
                    className: cn(
                      "w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:brightness-0 [&::-webkit-calendar-picker-indicator]:hue-rotate-0 [&::-webkit-calendar-picker-indicator]:saturate-100",
                      resolvedTheme === "dark" && "[&::-webkit-calendar-picker-indicator]:invert"
                    ),
                    style: {
                      colorScheme: resolvedTheme
                    },
                    dir: "ltr"
                  }
                ) })
              ] })
            ]
          }
        )
      ] })
    ] });
  }
  const displayRange = internalRange || range;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("grid gap-2", className), children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button$1, { id: "date", variant: "outline", className: cn("w-full justify-start overflow-hidden text-left font-normal", !displayRange && "text-muted-foreground"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$2, { className: "mr-2 h-4 w-4 flex-shrink-0" }),
        displayRange?.from ? displayRange.to ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:inline", children: [
            formatDate(displayRange.from),
            " - ",
            formatDate(displayRange.to)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sm:hidden", children: [
            formatDateShort(displayRange.from, isPersianCalendar),
            " - ",
            formatDateShort(displayRange.to, isPersianCalendar)
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: formatDate(displayRange.from) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: formatDateShort(displayRange.from, isPersianCalendar) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: placeholder || t("timeSelector.pickDate") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-auto p-0", align: align ? align : "start", side: side ? side : "bottom", sideOffset: 4, collisionPadding: 8, children: isPersianCalendar ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Calendar,
        {
          mode: "range",
          defaultMonth: displayRange?.from,
          selected: displayRange,
          onSelect: handleRangeSelect,
          numberOfMonths,
          disabled: disableAfter ? { after: disableAfter } : void 0
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Calendar$1,
        {
          mode: "range",
          defaultMonth: displayRange?.from,
          selected: displayRange,
          onSelect: handleRangeSelect,
          numberOfMonths,
          disabled: disableAfter ? { after: disableAfter } : void 0
        }
      ) })
    ] })
  ] });
}
export {
  DatePicker as D,
  addDays$1 as a,
  formatDateByLocale as f,
  getPeriodFromDateRange as g
};
//# sourceMappingURL=date-picker-R6TlQCrv.js.map
