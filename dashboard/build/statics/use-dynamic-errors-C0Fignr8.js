import { t as toast } from "./index-C_i3x-Gf.js";
import { i as isEmptyObject } from "./isEmptyObject-Ce3qPfrc.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
const useDynamicErrorHandler = () => {
  const { t } = useTranslation();
  return ({ error, fields, form, contextKey }) => {
    console.error("Operation failed:", error);
    console.error("Error response:", error?.response);
    form.clearErrors();
    const responseData = error?.response?._data || error?.response?.data;
    if (responseData && !isEmptyObject(responseData)) {
      const detail = responseData.detail;
      if (typeof detail === "object" && detail !== null && !Array.isArray(detail)) {
        const firstField = Object.keys(detail)[0];
        const firstMessage = detail[firstField];
        Object.entries(detail).forEach(([field, message]) => {
          if (fields.includes(field)) {
            form.setError(field, {
              type: "manual",
              message: typeof message === "string" ? message : t("validation.invalid", {
                field: t(`${contextKey}.${field}`, { defaultValue: field }),
                defaultValue: `${field} is invalid`
              })
            });
          }
        });
        toast.error(
          firstMessage || t("validation.invalid", {
            field: t(`${contextKey}.${firstField}`, { defaultValue: firstField }),
            defaultValue: `${firstField} is invalid`
          })
        );
      } else if (typeof detail === "string") {
        toast.error(detail);
      }
    } else if (responseData) {
      let errorMessage = "";
      if (typeof responseData === "string") {
        errorMessage = responseData;
      } else if (Array.isArray(responseData.detail)) {
        responseData.detail.forEach((err) => {
          const field = err?.loc?.[1];
          if (field) {
            form.setError(field, {
              type: "manual",
              message: err.msg
            });
          }
        });
        errorMessage = responseData.detail[0]?.msg || "Validation error";
      } else if (typeof responseData.detail === "string") {
        errorMessage = responseData.detail;
      } else if (responseData.message) {
        errorMessage = responseData.message;
      } else {
        errorMessage = "An unexpected error occurred";
      }
      toast.error(errorMessage);
    } else {
      toast.error(error?.message || t(`${contextKey}.genericError`, { defaultValue: "An error occurred" }));
    }
  };
};
export {
  useDynamicErrorHandler as u
};
//# sourceMappingURL=use-dynamic-errors-C0Fignr8.js.map
