//***247. CONTAINS DUPLICATE***//
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.//
var containsDuplicate = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            return true;
        }
        map.set(nums[i], true)
    }
    return false;
};

//***242. VALID ANAGRAM***//
//Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.//
