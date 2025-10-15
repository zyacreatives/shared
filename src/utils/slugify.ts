export const slugify = ({ value }: { value: string }) => {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_") // Replace non-alphanum with underscore
    .replace(/^_+|_+$/g, "") // Trim leading/trailing underscores
    .replace(/__+/g, "_"); // Collapse multiple underscores
};
