module.exports = function towelSort (matrix) {
let sortedArray = [];
let k = 0;

for (let i = 0; i < matrix.length; i++) 
    {    
    if (i % 2 == 0){
        for (let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] != undefined)
          sortedArray[k] = matrix[i][j];
          k++;
        }
    }

    else {
    for (let j = matrix[i].length-1; j > -1; j--) {
        sortedArray[k] = matrix[i][j];
        k++;
        }
    }

}

return sortedArray;
}
