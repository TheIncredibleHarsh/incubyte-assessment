import assert from 'node:assert'
import { addString } from '../src/StringCalculator.js'

describe("StringCalculator", () => {
    describe("addString", () => {
        it("should return 0 for empty string", () => {
            assert.equal(addString(""), 0);
        })
    })
})