import qs from "query-string";

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

/**
 * Generates a URL query string by adding or updating a key-value pair in the existing query parameters
 *
 * @param {string} params.params - The current query string to parse
 * @param {string} params.key - The key to add or update in the query string
 * @param {string} params.value - The value to associate with the key
 *
 * @returns {string} A formatted URL string with the updated query parameters
 *
 * @example
 * ```ts
 * const result = formUrlQuery({
 *   params: "category=books",
 *   key: "page",
 *   value: "2"
 * });
 * // Returns: "/current/path?category=books&page=2"
 * ```
 */
export const formUrlQuery = ({ params, key, value }: UrlQueryParams): string => {
  const queryString = qs.parse(params);
  queryString[key] = value;
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams): string => {
  const queryString = qs.parse(params);
  keysToRemove.forEach((key) => {
    delete queryString[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    {
      skipNull: true,
    }
  );
};
