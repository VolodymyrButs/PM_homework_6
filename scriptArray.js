let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arrayOfNumbers2 = [1, 2, 4, 5, 0];
const findFirstAndLastIndex = () => {
  console.log("Array", arrayOfNumbers);
  let number = prompt("input integer ");
  if (!isNaN(number) && !isNaN(parseFloat(number))) {
    let first = -1;
    let last = -1;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] == number && first == -1) {
        (first = i), (last = i);
      } else if (arrayOfNumbers[i] == number && first != -1) {
        last = i;
      }
    }
    console.log([first, last]);
    return;
  }
  console.log("wrong value");
};

const intersectionArray = () => {
  console.group("Array intersection");
  console.log("Array 1", arrayOfNumbers);
  console.log("Array 2", arrayOfNumbers2);
  console.log(
    "Array intersection",
    arrayOfNumbers.filter((value) => arrayOfNumbers2.includes(value))
  );
  console.groupEnd();
};

const arrayInArray = (arr1, arr2, index) => {
  console.group("Array In Array");
  console.log("arr1", arr1);
  console.log("arr2", arr2);
  console.log("index", index);
  let arr = [...arr1];
  arr.splice(index, 0, ...arr2);
  console.log("Result:", arr);
  console.log("arr1 no change", arr1);
  console.log("arr2 no change", arr2);
  console.groupEnd();
};

const putArrayInArray = () => arrayInArray([1, 2, 3, 4, 5, 6], [9, 8, 7], 3);

const sortArrayById = () => {
  console.log("before sorting", array);
  let sortingArray = [...array];
  console.log(
    "after sorting",
    sortingArray.sort((a, b) => b.id - a.id)
  );
};

const sortArrayByDate = () => {
  console.log("before sorting", array);
  let sortingArray = [...array];
  console.log(
    "after sorting",
    sortingArray.sort(
      (a, b) =>
        Date.parse(b.registrationDate.slice(4, -6)) -
        Date.parse(a.registrationDate.slice(4, -6))
    )
  );
};
