import { r as reactExports } from "./react-D6OUsQqF.js";
async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error("Clipboard API failed:", err);
    }
  }
  const input = document.createElement("input");
  input.value = text;
  input.style.position = "fixed";
  input.style.left = "-9999px";
  input.style.top = "-9999px";
  document.body.appendChild(input);
  input.focus();
  input.select();
  try {
    const successful = document.execCommand("copy");
    document.body.removeChild(input);
    return successful;
  } catch (err) {
    document.body.removeChild(input);
    return false;
  }
}
function useClipboard({ timeout = 1500 } = {}) {
  const [error, setError] = reactExports.useState(null);
  const [copied, setCopied] = reactExports.useState(false);
  const [copyTimeout, setCopyTimeout] = reactExports.useState(null);
  const handleCopyResult = (value) => {
    window.clearTimeout(copyTimeout);
    setCopyTimeout(window.setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };
  const copy = reactExports.useCallback(
    async (text) => {
      try {
        const success = await copyToClipboard(text);
        if (success) {
          handleCopyResult(true);
          setError(null);
        } else {
          setError(new Error("useClipboard: copyToClipboard failed"));
          handleCopyResult(false);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("useClipboard: copyToClipboard failed"));
        handleCopyResult(false);
      }
    },
    [timeout]
  );
  const reset = () => {
    setCopied(false);
    setError(null);
    window.clearTimeout(copyTimeout);
  };
  return { copy, reset, error, copied };
}
export {
  useClipboard as u
};
//# sourceMappingURL=use-clipboard-C58gzIEw.js.map
