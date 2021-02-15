module.exports = function towelSort (matrix) {
let sortedArray = [];
let k = 0;

for (let i = 0; i < matrix.length; i++) {
    console.log("i / 2 =" + i % 2);
    if (i % 2 == 0){
        for (let j = 0; j < matrix[0].length; j++) {
          sortedArray[k] = matrix[i][j];
          k++;
        }
    }

    else {
    for (let j = matrix[0].length-1; j > -1; j--) {
        sortedArray[k] = matrix[i][j];
        k++;
    }
    }

}

return sortedArray;
}
