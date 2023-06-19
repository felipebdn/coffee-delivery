export function formatCoffeeValue(value: number) {
  const numberFormated = value.toFixed(2).replace('.', ',')
  return numberFormated
}
