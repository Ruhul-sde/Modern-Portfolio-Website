
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryKeyHashFn: (queryKey) => {
        return JSON.stringify(queryKey, (_, val) =>
          isPlainObject(val)
            ? Object.keys(val)
                .sort()
                .reduce((result, key) => {
                  result[key] = val[key];
                  return result;
                }, {})
            : val
        );
      },
    },
  },
});

function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }

  const ctor = o.constructor;
  if (ctor === undefined) {
    return true;
  }

  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }

  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }

  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
