export function getOnlyNumbers(textNumber: string) {
  if (!textNumber) {
    return '';
  }

  return textNumber.replace(/[^\d]/g, '');
}
