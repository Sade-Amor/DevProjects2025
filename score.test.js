import * as score from './score'
import { test, expect } from 'vitest'

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = score.scoreFrame(frame)

  expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
  const frame = [2, 3]
  const expected = 5
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', () => {
  const frame = [5, 5]
  const expected = 'Nice Spare! ' + 10
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [10, 0]
  const expected = 'STRIKE ' + 10
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  const frames = [
    [10, 0],
    [10, 0],
  ]
  const expected = 'Double'
  const actual = score.scoreFrames(frames)
  expect(actual).toBe(expected)
})
