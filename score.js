export { scoreFrame }

function scoreFrame(frame) {
  // get score frame [1,2]
  let score = frame[0] + frame[1]
  if (score === 10) {
    return 'Nice Spare!'
  }
  // add [1 + 2] = 3
  return score
  // return 3
}
