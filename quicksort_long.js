function quicksort(array) {
    if(array.length === 1) {
        return array;
    }

    const pivot = array[array.length -1];
    const leftArr = [];
    const rightArr = [];

    for(let i = 0; i < array.length -1; i++) {
        if(array[i] < pivot) {
            leftArr.push(array[i])
        }
        else {
            rightArr.push(array[i])
        }
    }
    if(leftArr.length > 0 && rightArr.length > 0) {
        return [...quicksort(leftArr), pivot, ...quicksort(rightArr)]
    }
}

const arr = [5,7,3,7,8,1,2,11,17,554,72,81,4]

console.log(quicksort(arr));