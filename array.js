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

var isAnagram = function(s, t){
    let str1 = s.split("").sort().join("");
    let str2 = t.split("").sort(). join("");

    return str1 === str2;
};

//***1. TWO SUM***/
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.//

var twoSum = function(nums, target) {
    // let hash = {}
    // for(let i in nums){
    //     let dif = target - nums[i];
    //     if(hash[dif]){
    //         return[hash[dif], i]
    //     }
    //     hash[dif] = i
    // }
    // return hash
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(target-nums[i])){
            targetIndex = map.get(target-nums[i]);
            return [i, targetIndex];
        }
        map.set(nums[i], i);
    }
};

//***49. GROUP ANAGRAMS***//
//Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.//

var groupAnagrams = function(strs){
    let hash = {};
    strs.forEach(str =>{
        sortedStr = str.split("").sort().join("");
        if(hash[sortedStr]){
            hash[sortedStr].push(str);
        }
        else{
            hash[sortedStr] = [str]
        }
    })
    return Object.values(hash);
};