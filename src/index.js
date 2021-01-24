exports.min = function min(array) {
    if (Array.isArray(array)) {
        const length = array.length;
        if (length == 0) return 0;
        const sortedArray = quickSortArray(array);
        const minValue = sortedArray[0]
        return minValue;
    }
    return 0;
}

exports.max = function max(array) {
    if (Array.isArray(array)) {
        const length = array.length;
        if (length == 0) return 0;
        const sortedArray = quickSortArray(array);
        const maxValue = sortedArray[length - 1];
        return maxValue;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (Array.isArray(array)) {
        const length = array.length;
        if (length == 0) return 0;
        const averageValue = (array.reduce((accum, index) => accum + index)) / length;
        return averageValue;
    }
    return 0;
}

function quickSortArray(array) {
    const length = array.length;
    if (length < 2) return array;
    let pivot = array[0];
    const leftArray = [];
    const rightArray = [];
    for (let i = 1; i < length; i++) {
        (pivot > array[i]) ? leftArray.push(array[i]): rightArray.push(array[i]);
    }
    return quickSortArray(leftArray).concat(pivot, quickSortArray(rightArray));

}