export function zipcodeMask(zipcode: string) {
  if (!zipcode) {
    return '';
  }
  return zipcode.replace(/\D/g, '').replace(/^(\d{5})(\d{3})/, '$1-$2');
}
