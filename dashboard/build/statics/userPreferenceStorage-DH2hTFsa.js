const NUM_USERS_PER_PAGE_LOCAL_STORAGE_KEY = "pasarguard-num-users-per-page";
const NUM_ADMINS_PER_PAGE_LOCAL_STORAGE_KEY = "pasarguard-num-admins-per-page";
const NUM_ITEMS_PER_PAGE_DEFAULT = 10;
const USERS_AUTO_REFRESH_INTERVAL_KEY = "pasarguard-users-auto-refresh-interval";
const DEFAULT_USERS_AUTO_REFRESH_INTERVAL_SECONDS = 0;
const DATE_PICKER_PREFERENCE_KEY = "pasarguard-date-picker-preference";
const DEFAULT_DATE_PICKER_PREFERENCE = "locale";
const getItemsPerPageLimitSize = (tableType = "users") => {
  const storageKey = tableType === "users" ? NUM_USERS_PER_PAGE_LOCAL_STORAGE_KEY : NUM_ADMINS_PER_PAGE_LOCAL_STORAGE_KEY;
  const numItemsPerPage = typeof localStorage !== "undefined" && localStorage.getItem(storageKey) || NUM_ITEMS_PER_PAGE_DEFAULT.toString();
  return parseInt(numItemsPerPage) || NUM_ITEMS_PER_PAGE_DEFAULT;
};
const setItemsPerPageLimitSize = (value, tableType = "users") => {
  const storageKey = tableType === "users" ? NUM_USERS_PER_PAGE_LOCAL_STORAGE_KEY : NUM_ADMINS_PER_PAGE_LOCAL_STORAGE_KEY;
  return typeof localStorage !== "undefined" && localStorage.setItem(storageKey, value);
};
const getUsersPerPageLimitSize = () => getItemsPerPageLimitSize("users");
const setUsersPerPageLimitSize = (value) => setItemsPerPageLimitSize(value, "users");
const getAdminsPerPageLimitSize = () => getItemsPerPageLimitSize("admins");
const setAdminsPerPageLimitSize = (value) => setItemsPerPageLimitSize(value, "admins");
const getUsersAutoRefreshIntervalSeconds = () => {
  const storedValue = typeof localStorage !== "undefined" && localStorage.getItem(USERS_AUTO_REFRESH_INTERVAL_KEY);
  const parsed = storedValue ? parseInt(storedValue, 10) : DEFAULT_USERS_AUTO_REFRESH_INTERVAL_SECONDS;
  return Number.isNaN(parsed) ? DEFAULT_USERS_AUTO_REFRESH_INTERVAL_SECONDS : parsed;
};
const setUsersAutoRefreshIntervalSeconds = (seconds) => {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(USERS_AUTO_REFRESH_INTERVAL_KEY, seconds.toString());
};
const getDatePickerPreference = () => {
  if (typeof localStorage === "undefined") return DEFAULT_DATE_PICKER_PREFERENCE;
  const storedValue = localStorage.getItem(DATE_PICKER_PREFERENCE_KEY);
  if (storedValue === "locale" || storedValue === "gregorian" || storedValue === "persian") {
    return storedValue;
  }
  return DEFAULT_DATE_PICKER_PREFERENCE;
};
const setDatePickerPreference = (preference) => {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(DATE_PICKER_PREFERENCE_KEY, preference);
};
export {
  DATE_PICKER_PREFERENCE_KEY as D,
  getAdminsPerPageLimitSize as a,
  setAdminsPerPageLimitSize as b,
  getUsersAutoRefreshIntervalSeconds as c,
  setUsersAutoRefreshIntervalSeconds as d,
  getUsersPerPageLimitSize as e,
  setUsersPerPageLimitSize as f,
  getDatePickerPreference as g,
  setDatePickerPreference as s
};
//# sourceMappingURL=userPreferenceStorage-DH2hTFsa.js.map
