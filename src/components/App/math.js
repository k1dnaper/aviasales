export const cheapest = (tickets) => {
  return tickets.sort((a, b) => a.price - b.price)
}

export const optimal = (tickets) => {
  return tickets.sort((a, b) => {
    const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
    const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
    const priceDiff = a.price - b.price
    const durationDiff = durationA - durationB
    return priceDiff + durationDiff
  })
}

export const fastest = (tickets) => {
  return [...tickets].sort((a, b) => {
    const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
    const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
    return durationA - durationB
  })
}
