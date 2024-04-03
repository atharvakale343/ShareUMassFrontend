import { f as fail } from "../../chunks/index.js";
import "../../chunks/stores.js";
import { a as zod, f as formSchema } from "../../chunks/productAddSchema.js";
import "just-clone";
import "ts-deepmerge";
import "devalue";
import { s as superValidate, w as withFiles } from "../../chunks/superValidate.js";
import "memoize-weak";
const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return fail(400, {
        form
      });
    }
    console.log(form);
    return withFiles({
      form
    });
  }
};
export {
  actions
};
