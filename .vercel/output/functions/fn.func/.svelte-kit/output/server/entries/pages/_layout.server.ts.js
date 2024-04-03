import "../../chunks/stores.js";
import { a as zod, f as formSchema } from "../../chunks/productAddSchema.js";
import "just-clone";
import "ts-deepmerge";
import "../../chunks/index.js";
import "devalue";
import { s as superValidate } from "../../chunks/superValidate.js";
import "memoize-weak";
const load = async () => {
  return {
    form: await superValidate(zod(formSchema))
  };
};
export {
  load
};
