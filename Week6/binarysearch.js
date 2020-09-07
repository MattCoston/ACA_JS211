
// binary search assumed that the list of elements you are looking through is ordered
//list is an ordered array of elements
//element is an element we are looking for in the ordered array passed in



function binarySearch(list, element){
    let min = 0;
    let max = list.length - 1;
    let mid;

    while(max >= min){
        mid = (min + max) /2
        mid = Math.floor(mid)

        let middleElement = list[mid];

        if (middleElement == element){
            return mid;
        } else if(element > middleElement) {
            min = mid + 1;
        } else if (element < middleElement) {
            min = mid - 1;
        }
    }

    return -1;
}

let foundAt = binarySearch(
    ["apple", "banana", "carrot", "eggs", "grapes", "jalapenos", "kiwi", "radishes", "squash", "watermelon", "zuchini"],
    "jalapenos"
)

console.log(foundAt)