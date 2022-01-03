const myForeach = (array, callback) => {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        callback(element, index, array)
    }
}

const arr = [54, 56, 87];

// arr.forEach((element, index, tableau) => {
//     console.log(element);
//     console.log(index);
//     console.log(tableau);
// })
myForeach(arr, (element, index, tableau) => {
    console.log(element);
    console.log(index);
    console.log(tableau);
})

const mult2 = (array) => {
    myForeach(array, (element, index, array) => {
        element = element * 2
        array[index] = element;
    });
}

mult2(arr)
console.log(arr);