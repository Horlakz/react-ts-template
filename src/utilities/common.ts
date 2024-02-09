export function convertToCamelCase(str: string): string {
  return str
    .replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace("-", "").replace("_", "");
    })
    .replace(str[0], str[0].toLowerCase());
}

export function joinPaths(...params: string[]): string {
  // Filter and clean up the path segments
  const cleanedSegments = params.map((segment) =>
    segment.replace(/^\/+|\/+$/g, "")
  );

  // Join the cleaned segments with a single slash between them
  return cleanedSegments.join("/");
}

export function randomString(length: number = 12) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));

  return result;
}

export function formatDate(date: string | Date) {
  const newDate = new Date(date);

  return newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function replaceWith(text: string, target = " ", seperator = "_") {
  return text.toLowerCase().replace(target, seperator);
}

type AnyObject = Record<string, unknown>;

export function popKeys<T extends AnyObject, K extends keyof T>(
  object: T,
  ...keys: K[]
): Partial<T> {
  /*
    @author: ChatGPT
  */

  const poppedValues: Partial<T> = {};

  keys.forEach((key) => {
    const value = object[key];
    delete object[key];
    poppedValues[key] = value;
  });

  return poppedValues;
}

export function formatCurrency(price: number) {
  return `₦ ${new Intl.NumberFormat().format(price)}`;
}
