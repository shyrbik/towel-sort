
// You should implement your task here.

module.exports = function towelSort (matrix) {
let sortedArray = [];
let k = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++, k++) {

        sortedArray[k] = matrix[i][j];
    }
}

return sortedArray.sort(function(a, b) {return a - b; })
}
