
function countVowels(word) {
    word = word.toLowerCase()
    let vowels = ["a", "e", "i", "o", "u"]
    let num = []
    for (i = 0; i < word.length; i +=1) {
        if (vowels.indexOf(word[i]) != -1) {
         num = num + word[i];
        }
    }
 return num.length
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2

console.log(countVowels("Aathrine"));
