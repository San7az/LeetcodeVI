/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const cars = position.map((p, i) => [p, speed[i]])
  cars.sort((a, b) => b[0] - a[0])
  const fleets = []
  for (const [pos, speed] of cars) {
    const time = (target - pos) / speed
    if (!fleets.length || time > fleets[fleets.length - 1]) {
      fleets.push(time)
    }
  }
  return fleets.length
}
