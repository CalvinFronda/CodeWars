/**
 * Overview
Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

Task:
Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word".
 */

function i(word) {
    if (word === '') return 'Invalid word';
    let firstLetter = word[0];
    if (firstLetter === 'i' || firstLetter === 'I') return 'Invalid word';
    if (firstLetter === firstLetter.toLowerCase()) return 'Invalid word';
    let vowels = [];
    let consts = [];
    for (let i = 0; i < word.length; i++) {
        let reg = new RegExp(/[aeiouAEIOU]/);
        if (word[i].match(reg)) {
            vowels.push(word[i]);
        } else {
            consts.push(word[i]);
        }
    }

    if (consts.length <= vowels.length) return 'Invalid word';

    return `i${word}`;
}
