export const unCamelCase = string =>
  string.split(/(?=[A-Z])/)
    .map((word, index) =>
      index === 0
        ? word[0].toUpperCase() + word.slice(1)
        : word[0].toLowerCase() + word.slice(1)
    ).join(' ');

export const camelCase = string =>
  string.replace(/(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) =>
      index === 0
        ? letter.toLowerCase()
        : letter.toUpperCase()
  ).replace(/\s+/g, '');
// underscore _
export const allDash = string => string.replace(/[^a-z0-9]/gi, '-');