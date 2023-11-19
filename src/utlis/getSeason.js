export const getSeason = (date) => {
  const d = new Date(date)
  const seasonValue = ["WINTER", "SPRING", "SUMMER", "FALL"]
  const seasonToday = Math.floor(d.getMonth() / 12 * 4) % 4

  return seasonValue[seasonToday]
}