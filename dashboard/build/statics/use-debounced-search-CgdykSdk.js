import { r as reactExports } from "./react-D6OUsQqF.js";
import { d as debounce } from "./debounce-DDhqqvFm.js";
function useDebouncedSearch(initialValue = "", delay = 300) {
  const [search, setSearch] = reactExports.useState(initialValue);
  const [debouncedSearch, setDebouncedSearch] = reactExports.useState(void 0);
  const debouncedSearchRef = reactExports.useRef(
    debounce((value) => {
      setDebouncedSearch(value || void 0);
    }, delay)
  );
  reactExports.useEffect(() => {
    return () => {
      debouncedSearchRef.current.cancel();
    };
  }, []);
  const handleSearchChange = reactExports.useCallback((value) => {
    setSearch(value);
    debouncedSearchRef.current(value);
  }, []);
  return {
    search,
    debouncedSearch,
    setSearch: handleSearchChange
  };
}
export {
  useDebouncedSearch as u
};
//# sourceMappingURL=use-debounced-search-CgdykSdk.js.map
