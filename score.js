export { scoreFrame, scoreFrames }

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

function scoreFrames(frames) {
  if (frames.length >= 2) {
    const first = frames[0][0]
    const second = frames[1][0]

    // Double strike
    if (first === 10 && second === 10) {
      return 'Double'
    }
  }
}
