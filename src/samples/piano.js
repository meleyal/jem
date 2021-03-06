import sampleMap from '../sample-map'
import { pitches } from '../constants'

const {
  a0,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  cs1,
  cs2,
  cs3,
  cs4,
  cs5,
  cs6,
  cs7,
  c8,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
} = pitches

const resolve = (filename) => `${SAMPLES_URL}/piano/${filename}`

export default sampleMap(
  (note, octave) => resolve(`${note}${octave}.mp3`),
  [
    a0,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    cs1,
    cs2,
    cs3,
    cs4,
    cs5,
    cs6,
    cs7,
    c8,
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f7,
  ],
  a0,
  c8
)
