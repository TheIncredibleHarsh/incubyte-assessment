import assert from 'node:assert'
import { addString } from '../src/StringCalculator.js'

describe("StringCalculator", () => {
    describe("addString", () => {
        it("should return 0 for empty string", () => {
            assert.equal(addString(""), 0);
        })

        it("should return the value if the string has only 1 number", () => {
            const num = "5";
            assert.equal(addString(num), parseInt(num));
        })

        it("should add comma separated numbers", () => {
            assert.equal(addString("1,4,7"), 12);
            assert.equal(addString("5,8"), 13);
            assert.equal(addString("34,52,87,95,62,87"), 417);
        })
    })
})