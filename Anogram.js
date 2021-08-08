// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase irrespective of spaces. 
// For example, "orchestra" and "carthorse." Another example is "rail safety" and  "fairy tales." Given two words or phrases, determine if they're anagrams of each other.

const isAnagram = (word1, word2) => {
  //split words into char array
  //sort arrays
  //finally join arrays back to a string
  word1 = word1.split("").sort().join("");
  word2 = word2.split("").sort().join("");

  ////compare strings and return result
  return word1 === word2;
}

console.log(isAnagram("orchestra", "carthorse"));
