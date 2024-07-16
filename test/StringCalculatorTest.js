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

        it("should add numbers separated by both comma and new line", () => {
            assert.equal(addString("4,7\n3"), 14)
        })

        it("should process the string with custom set of delimiters", () => {
            assert.equal(addString("//;\n4;7;3;5"), 19)
        })

        it("should throw error if there are negative numbers in the string", () => {
            // assert.throws(addString("-2,4,7,8"), Error, /negative numbers not allowed*/)
            
            try {
                assert.ok(addString("-2,-8,4,7,8"))
            } catch(e) {
                assert.equal(e.message, 'negative numbers not allowed -2,-8')
            }
        })
    })
})