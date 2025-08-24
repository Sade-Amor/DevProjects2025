export { scoreFrame }

function scoreFrame(frame) {
  // get score frame [1,2]
  // add [1 + 2] = 3
  let score = frame[0] + frame[1]
  if (frame[0] === 10) {
    return 'STRIKE ' + 10
  }

  if (score === 10) {
    return 'Nice Spare! ' + score
  }
  return score
  // return 3
}
