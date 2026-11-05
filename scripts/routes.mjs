// Stable content keys mapped to public URLs; checked against Hugo's built output.
export const productSlugs = ['', 'features/', 'security/', 'privacy/', 'getting-started/', 'pricing/', 'faq/', 'request/', 'compare/', 'proof/', 'market/', 'download/', 'code-signing-policy/', 'client/', 'support/', 'demo/', 'compare-tactical-rmm/', 'compare-veyon/', 'compare-netsupport-school/', 'compare-faronics-insight/', 'compare-lanschool/', 'compare-impero-education-pro/', 'compare-windows-take-a-test/', 'compare-remote-tools/', 'compare-approaches/'];
const lithuanian = ['', 'funkcijos/', 'saugumas/', 'privatumas/', 'pradzia/', 'kainos/', 'duk/', 'kontaktai/', 'palyginimas/', 'faktai/', 'rinka/', 'atsisiuntimas/', 'kodo-pasirasymo-politika/', 'klientas/', 'pagalba/', 'demonstracija/', 'palyginimas-tactical-rmm/', 'palyginimas-veyon/', 'palyginimas-netsupport-school/', 'palyginimas-faronics-insight/', 'palyginimas-lanschool/', 'palyginimas-impero-education-pro/', 'palyginimas-microsoft-take-a-test/', 'palyginimas-nuotolinio-darbalaukio-irankiai/', 'palyginimas-skirtingi-budai/'];
export function productPath(lang, slug = '') {
  const index = productSlugs.indexOf(slug);
  if (index < 0 || !['en', 'lt'].includes(lang)) throw new Error('Unknown product route');
  return lang === 'lt' ? `mokykloms/${lithuanian[index]}` : `school/${slug}`;
}
export const privacyPath = lang => lang === 'lt' ? 'privatumas/' : 'privacy/';
