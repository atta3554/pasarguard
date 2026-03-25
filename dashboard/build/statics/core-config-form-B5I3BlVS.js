import { o as objectType, b as booleanType, s as stringType, a as arrayType } from "./types-CANcSf0A.js";
const coreConfigFormSchema = objectType({
  name: stringType().min(1, "Name is required"),
  config: stringType().min(1, "Configuration is required"),
  fallback_id: arrayType(stringType()).optional(),
  excluded_inbound_ids: arrayType(stringType()).optional(),
  public_key: stringType().optional(),
  private_key: stringType().optional(),
  restart_nodes: booleanType().optional()
});
const coreConfigFormDefaultValues = {
  name: "",
  config: JSON.stringify({}, null, 2),
  fallback_id: [],
  excluded_inbound_ids: [],
  restart_nodes: true
};
export {
  coreConfigFormSchema as a,
  coreConfigFormDefaultValues as c
};
//# sourceMappingURL=core-config-form-B5I3BlVS.js.map
