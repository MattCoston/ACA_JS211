//returns pos of first vowel
// no vowels returns -1


const pigLatinVowelFinder = (word) => {
    let letters = word.split('')
    
    
    
    for(i = 0; i < word.length; i++)
    {
        let letter = letters[i]
        
        //check if the letter is a vowel.
        //If letter is a vowel return position
        let hasVowel = 'aeiou'.includes(letter)
        if(hasVowel) {
            return i
        }
        
    }
    return -1

}

console.log(pigLatinVowelFinder("create"))

// if statements

