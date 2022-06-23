export function phoneMask(phone: string) {
  if (!phone) {
    return '';
  }
  return phone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{3})/, '$1-$2')
    .replace(/(\d{5})(\d{4})(\d)/, '$1-$2');
}
