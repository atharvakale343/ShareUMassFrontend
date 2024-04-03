import "./index.js";
import { p as parseRequest, m as mergeDefaults, b as mapErrors, d as replaceInvalidDefaults } from "./productAddSchema.js";
import "just-clone";
import "./stores.js";
import "devalue";
async function superValidate(data, adapter, options) {
  if (data && "superFormValidationLibrary" in data) {
    options = adapter;
    adapter = data;
    data = void 0;
  }
  const validator = adapter;
  const defaults = options?.defaults ?? validator.defaults;
  const jsonSchema = validator.jsonSchema;
  const parsed = await parseRequest(data, jsonSchema, options);
  const addErrors = options?.errors ?? (options?.strict ? true : !!parsed.data);
  const parsedData = options?.strict ? parsed.data ?? {} : mergeDefaults(parsed.data, defaults);
  let status;
  if (!!parsed.data || addErrors) {
    status = await /* @__PURE__ */ validator.validate(parsedData);
  } else {
    status = { success: false, issues: [] };
  }
  const valid = status.success;
  const errors = valid || !addErrors ? {} : mapErrors(status.issues, validator.shape);
  const dataWithDefaults = valid ? status.data : replaceInvalidDefaults(options?.strict ? mergeDefaults(parsedData, defaults) : parsedData, defaults, jsonSchema, status.issues, options?.preprocessed);
  let outputData;
  if (jsonSchema.additionalProperties === false) {
    outputData = {};
    for (const key of Object.keys(jsonSchema.properties ?? {})) {
      if (key in dataWithDefaults)
        outputData[key] = dataWithDefaults[key];
    }
  } else {
    outputData = dataWithDefaults;
  }
  const output = {
    id: parsed.id ?? options?.id ?? validator.id,
    valid,
    posted: parsed.posted,
    errors,
    data: outputData
  };
  if (!parsed.posted) {
    output.constraints = validator.constraints;
    if (Object.keys(validator.shape).length) {
      output.shape = validator.shape;
    }
  }
  return output;
}
function withFiles(obj) {
  if (typeof obj !== "object")
    return obj;
  for (const key in obj) {
    const value = obj[key];
    if (value instanceof File)
      delete obj[key];
    else if (value && typeof value === "object")
      withFiles(value);
  }
  return obj;
}
export {
  superValidate as s,
  withFiles as w
};