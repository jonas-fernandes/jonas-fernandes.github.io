// var price = 200
// if(price <= 100){
//     console.log("in budget")
// }
// var hungry = true
// if(hungry){
//     console.log("eat food")
// } else{
//     console.log("keep coding")
// }
// var trafficLight = "green"
// if(trafficLight === "green"){
//     console.log("go")
// } else if(trafficLight === "yellow") {
//     console.log("slow down")
// } else if(trafficLight === "red"){
//     console.log("stop")
// }
// var a = 100
// var b = 200
// if(a === b){
//     console.log("equal")
// } else if(a > b) {
//     console.log(a)
// } else {
//     console.log(b)
// }
//
// var c = 122
// if(c === 0){
//     console.log("the number is 0.")
// } else if(c % 2 === 1) {
//     console.log("the number is odd.")
// } else if(c % 2 === 0){
//     console.log("the number is even.")
// }

// var groceryList = ["chips", "dip", "cookies"]
// // groceryList.push("soda")
//
// var newGrocery = ["granola"]
// console.log(groceryList.concat(newGrocery))

// var numbers = [2, 4, 6, 8, 10]
// numbers.unshift(0)
// console.log(numbers)
//
// numbers.push(12)
// console.log(numbers)
//
// numbers.shift()
// console.log(numbers)
//
// var newArr = [0]
// console.log(newArr.concat(numbers))
// console.log(newNumber1)

// var numSet = [2, 13, 6, 8, 4, 2]
// console.log(numSet.lastIndexOf(2))

// var chars = ["y", "a", "r", "r", "a"]
// // console.log(chars.join(""))
// var charsReversed = chars
// console.log(charsReversed.reverse().join(""))

// var arr1 = ["Jonas", "Danny", "Julia"]
// var arr2 = ["Bob", "Deb", "Craig"]
// var combined = arr1.concat(arr2)
// console.log(combined.sort().reverse())

// var magicEightBall = ['Dont bet on it.', 'The stars say no.', 'No doubt about it', 'Focus and ask again.', 'Looks like yes.', 'Indications say yes.']
// var magicAnswer = Math.floor(Math.random() * 6)
// console.log(magicEightBall[magicAnswer])
//
// for (let i = 1; i < 21; i++){
//     console.log(i * 3)
// }

// for (i = 1; i < 21; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     } else if (i % 2 === 1){
//         console.log("ODD")
//     }
// }

// var nums = [3, 57, -9, 20, 67]
// var highest = 0
// for(let i = 0; i < nums.length; i++) {
//     // console.log(highest)
//     if(nums[i] > highest) {
//         highest = nums[i]
//     }
// }
// console.log(highest)

// var nums = [3, 57, -9, 20, 67]
// var lowest = 0
//
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] < lowest) {
//         lowest = nums[i]
//     }
// }
// console.log(lowest)

var nums = [3, 57, -9, 20, 67]
var remainder = 0;

for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 >= 1) {
        remainder = 1
    }  else if (nums[i] % 2 === 0){
        remainder = 0
    }else if(nums[i] % 2 <= 1){
        remainder = -1
    }
    console.log(remainder)
}
