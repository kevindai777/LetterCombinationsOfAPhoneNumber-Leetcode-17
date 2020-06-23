//Objective is to list all possible letter combinations based on a phone number.

let nums = '23'


//O(3^N * 4^M) solution where N represents the digits with 3 characters and M represents the digits with 4 characters.
//It is exponential since we recurse through all possible combinations.

let result = []
let data = []

if (digits.length == 0) {
    return result
}

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

backtrack(data, 0, '', nums.length)

function backtrack(data, currentLevel, tempRes, endLevel) {
    //If we have reached the length of the digits...
    if (tempRes.length == endLevel) {
        result.push(tempRes)
        return
    }

    for (let i = 0; i < data[currentLevel].length; i++) {
        //Add letter to the temporary result and recursively call w/
        //second set of letters
        tempRes += data[currentLevel][i]
        backtrack(data, currentLevel + 1, tempRes, endLevel)

        //Remove the second character and permute again
        tempRes = tempRes.slice(0, tempRes.length - 1)
    }
}

return result
