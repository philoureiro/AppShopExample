export function getDateBR(date: string | undefined) {
  if (!date) {
    return '';
  }
  return new Date(date).toLocaleDateString('pt-BR');
}
