// BigO -O(n)- notation is a mathematical notation that describes the limiting behavior of a function
// when the argument tends towards a particular value of infinity

// We use BigO to describe the performance of the 

//O(1) -----------> Below method takes an array of integers and prints the first element 
// on the console
// This method has a single operation and takes const amount of time to run
// The run time complexity of this method is O(1) - meaning constant time
const array = []
function log(array){
    console.log(array[0])
}

//O(n) ------------> Here the size of the input matters
// Cost of this algo grows linearly, n represents the size of the input

function log(array){
    for (i =0; i < (array.length); i++){
        console.log(array[i])
    }
}


//O(n+2) in the below function the complexity for the loops remains O(n)
// here we are also having two statements outside the loop whose complexity is 
// O(1) for each
// Thus the total time complexity is O(1 + n + 1) == O(n+2)
// But it doesn't matter to have the +2 in the time complexity as what matters is that
// the complexity of the algo increases linearly and in direct proportion to the size of i/p
// even if we have two loops then complexity is O(2n) but still we can say 0(n)
function log(array){
    console.log(array)
    for (i =0; i < (array.length); i++){
        console.log(array[i])
    }
    console.log(array)
}

