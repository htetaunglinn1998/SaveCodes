// Regular expression to match non-English characters
const regex = /[^\u0000-\u007F]+/g;

const matches = state.payee.name.match(regex); // Find non-English characters
const nonEnglishName = matches.join(""); // Concatenate all non-English characters
const englishName = state.payee.name.split(regex).join(""); // Remove non-English