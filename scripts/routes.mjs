// Stable content keys mapped to public URLs; checked against Hugo's built output.
export const productSlugs = ['', 'features/', 'security/', 'privacy/', 'getting-started/', 'pricing/', 'faq/', 'request/'];
const lithuanian = ['', 'funkcijos/', 'saugumas/', 'privatumas/', 'pradzia/', 'kainos/', 'duk/', 'kontaktai/'];
export function productPath(lang, slug = '') {
  const index = productSlugs.indexOf(slug);
  if (index < 0 || !['en', 'lt'].includes(lang)) throw new Error('Unknown product route');
  return lang === 'lt' ? `mokykloms/${lithuanian[index]}` : `school/${slug}`;
}
export const privacyPath = lang => lang === 'lt' ? 'privatumas/' : 'privacy/';
