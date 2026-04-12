const test = require('node:test')
const assert = require('node:assert/strict')

const Voice = require('../lib/voice')

test('setFilterMod updates filter modulation depth from provided value', () => {
  const mockVoice = {
    currentFilterMod: 0,
    modFilterGain: {
      gain: {
        value: 0
      }
    }
  }

  Voice.prototype.setFilterMod.call(mockVoice, 12)

  assert.equal(mockVoice.currentFilterMod, 12)
  assert.equal(mockVoice.modFilterGain.gain.value, 288)
})
