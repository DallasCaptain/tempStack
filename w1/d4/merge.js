Array.prototype.myslice = function (start = 0, end) {
    end = end || this.length
    const newarr = []
    for(let i = start; i < end; i++){
        newarr.push(this[i])
    }
    return newarr
}

//console.log([1,2,3,4,5].myslice(2,4))

function mergeSort (unsortedArray) {
    
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.myslice(0, middle);
    const right = unsortedArray.myslice(middle);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return resultArray
            .concat(left.myslice(leftIndex))
            .concat(right.myslice(rightIndex));
}


console.log(mergeSort([2,5,8,3,5,7,1,4,3,4]))

