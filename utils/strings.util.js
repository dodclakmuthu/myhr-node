/**
 * Generates a URL-friendly slug from a given string.
 *
 * @param {string} text - The string to convert into a slug.
 * @return {string} The generated slug.
 */
function generateSlug(text) {
  return text
    .toString() // Convert to string
    .normalize("NFD") // Normalize to NFD Unicode form
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace at the start and end
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}


export { generateSlug };