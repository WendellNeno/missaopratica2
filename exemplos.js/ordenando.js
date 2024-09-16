const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        let idx1 = Math.floor(Math.random() * arr.length);
        let idx2 = Math.floor(Math.random() * arr.length);
        swap(arr, idx1, idx2);
    }
};

const bubble_sort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

const selection_sort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

const quick_sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = particionamento(arr, left, right);
        quick_sort(arr, left, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, right);
    }
};

const particionamento = (arr, left, right) => {
    let pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, right);
    return i;
};

