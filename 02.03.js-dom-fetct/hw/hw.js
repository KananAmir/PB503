// 4) Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
// racecar - polidromdur
// hello - polidrom deyil

// function isPolidrom(word){
//     let reverse = ""
//     for (let i = word.length-1; i >=0; i--) {
//        reverse += word[i]
//     }

//     return reverse === word ? "polidromdur" : "polidrom deyil"
// }

const isPolidrom = (word) => word.split("").reverse().join("") === word  ? "polidromdur" : "polidrom deyil"


console.log(isPolidrom("hello"));
console.log(isPolidrom("racecar"));


// 1) Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.
// sentenceCapitalization("a short sentence")
// Expected Output:"A Short Sentence"


function sentenceCapitalization(sentence){
    return sentence.split(" ").map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(" ")
}

console.log(sentenceCapitalization("a short sentence"));
console.log(sentenceCapitalization("how are u"));




// 2) Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'Example:
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN


const convert = (str) =>{
    let result = ""
    str.split("").forEach(char => {
        if(char.toUpperCase()  ===  char){
            result += char.toLowerCase()
        }else{
            result += char.toUpperCase()
        }
    })

    return result
}

console.log(convert('saLamNecesen'))
