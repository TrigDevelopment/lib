"use strict";
var lib = {
    /**
     * # (2, 3) => [0, 1, 0]
     * @param {number} number
     * @param {number[]} arrayLength
     * @returns {boolean[]}
     */
    numberToBinaryArray(number, arrayLength) {
        if (arrayLength === undefined) {
            console.error("arrayLength is undefined");
        }
        var binaryNumber = number.toString(2);
        var binaryString = binaryNumber.padStart(arrayLength, "0");
        var binaryInputs = [];
        for (var i = 0; i < arrayLength; i++) {
            binaryInputs.push(binaryString[i] === '1');
        }
        return binaryInputs;
    },
    /**
     * @param {boolean[]} binaryArray
     */
    binaryArrayToNumber(binaryArray) {
        var number = 0;
        var power = 1;
        for (var i = binaryArray.length - 1; i >= 0; --i) {
            if (binaryArray[i]) {
                number += power;
            }
            power *= 2;
        }
        return number;
    },
    /**
     * 2 => [[false, false], [false, true], [true, false], [true, true]]
     * @param {number} arraysLength
     */
    allBinaryArrays(arraysLength) {
        var result = [];
        for (var i = 0; i < Math.pow(2, arraysLength); ++i) {
            result.push(lib.numberToBinaryArray(i, arraysLength));
        }
        return result;
    },
    /**
     * in the next example 0 means false, 1 means true:
     * # 3 => [[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1]]
     * @param {number} selectionI
     * @param {number} nElements
     * @returns {number[]}
     */
    allSelectionsMarks(nElements) {
        return lib.allBinaryArrays(nElements).sort(function (array1, array2) {
            if (lib.nTrues(array1) != lib.nTrues(array2)) {
                return lib.nTrues(array1) - lib.nTrues(array2);
            } else {
                return lib.binaryArrayToNumber(array2) - lib.binaryArrayToNumber(array1);
            }
        });
    },
    /**
     * 
     * @param {any[]} array
     * @param {boolean[]} selectionMarks
     */
    select(array, selectionMarks) {
        var selection = [];
        for (var i = 0; i < array.length; ++i) {
            if (selectionMarks[i]) {
                selection.push(array[i]);
            }
        }
        return selection;
    },
    /**
     * @param {boolean[]} binaryArray
     */
    nTrues(binaryArray) {
        var nTrues = 0;
        for (var i = 0; i < binaryArray.length; ++i) {
            if (binaryArray[i] === true) {
                ++nTrues;
            }
        }
        return nTrues;
    },
    /**
     * 
     * @param {any[]} array1
     * @param {any[]} array2
     */
    areArraysEqual(array1, array2) {
        for (var i = 0; i < array1.length; ++i) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return array1.length == array2.length;
    },
    /**
     * @param {function(number): number} _function
     * @param {number} x
     */
    derivative(_function, x) {
        var smallNumber = 0.0001;
        var functionIncrement = _function(x + smallNumber) - _function(x);
        return functionIncrement / smallNumber;
    },
    /**
     * @param {number} arrayLength
     * @returns {number[]}
     */
    zeroArray(arrayLength) {
        var array = [];
        for (var i = 0; i < arrayLength; i++) {
            array.push(0);
        }
        return array;
    },
    /**
     * @param {number} nRows
     * @param {number} nColumns
     * @returns {number[][]}
     */
    zeroMatrix(nRows, nColumns) {
        var matrix = [];
        for (var rowI = 0; rowI < nRows; ++rowI) {
            matrix.push([]);
            for (var columnI = 0; columnI < nColumns; ++columnI) {
                matrix[rowI].push(0);
            }
        }
        return matrix;
    },
    /**
     * vector is vertical
     * @param {number[][]} matrix
     * @param {number[]} vector
     */
    multiplyMatrixOnVector(matrix, vector) {
        for (var i = 0; i < matrix.length; ++i) {
            if (matrix[i].length != vector.length) {
                console.error("matrix[i].length != vector.length");
            }
        }

        var resultVector = [];
        for (var rowI = 0; rowI < matrix.length; ++rowI) {
            var rowMultiplication = 0;
            for (var i = 0; i < vector.length; ++i) {
                rowMultiplication += matrix[rowI][i] * vector[i];
            }
            resultVector.push(rowMultiplication);
        }
        console.log(matrix);
        return resultVector;
    },
    /**
     * Supports matrixes with rows with different lengths
     * @param {number[][]} matrix
     * @param {function(any):any} _function
     * @returns {number[][]} Same-sized matrix
     */
    matrixMap(matrix, _function) {
        var newMatrix = [];
        for (var rowI = 0; rowI < matrix.length; ++rowI) {
            newMatrix.push([]);
            for (var columnI = 0; columnI < matrix[rowI].length; ++columnI) {
                newMatrix[rowI].push(_function(matrix[rowI][columnI]));
            }
        }
        return newMatrix;
    },
    /**
     * @param {number} nSpaces
     * @returns {string}
     */
    spaces(nSpaces) {
        var spaces = "";
        for (var i = 0; i < nSpaces; ++i) {
            spaces += '\u00A0';
        }
        return spaces;
    },
    heaviside(value) {
        return value < 0 ? 0 : 1;
    },

    generateThreshold() {

    },
    br() {
        document.body.appendChild(document.createElement("br"));
    },
    /**
     * Output text into body, then br
     * @param {string} text
     */
    println(text) {
        var span = document.createElement("span");
        span.innerText = text;
        document.body.appendChild(span);
        lib.br();
    },
};
