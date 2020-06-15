//Objective is to list all possible letter combinations based on a phone number.

let nums = '23'


//O(3^N * 4^M) solution

let result = []
let data = []

let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

for (let i = 0; i < nums.length; i++) {
    data.push(map[nums[i]])
}

backtrack(data, result, 0, '', nums.length)

function backtrack(data, result, currentLevel, tempRes, endLevel) {
    //If we have reached the length of the digits
    if (tempRes.length == endLevel) {
        result.push(tempRes)
        return
    }

    for (let i = 0; i < data[currentLevel].length; i++) {
        //Add letter to the temporary result and recursively call w/
        //second set of letters
        tempRes += data[currentLevel][i]
        backtrack(data, result, currentLevel + 1, tempRes, endLevel)

        //Remove the second character and permute again
        tempRes = tempRes.slice(0, tempRes.length - 1)
    }
}

console.log(result)