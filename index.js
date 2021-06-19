// Introduction to Algorithms
// Link 

// Sort the laundry

let dirtyClothes = [
    'Green Pants',
    'White Towel', 
    'Blue Flannel', 
    'White Socks', 
    'Orange Socks',
    'Magenta T-Shirt', 
    'White Socks',  
    'White Dress Shirt',
    'Blue Jeans',
    'White Slacks',
    'White Tang Top', 
    'Tye-Dye Towel',
    'White Headband',
    'Off-White Blouse' 
]

function sortLaundry(arr){
    let colors = []
    let whites = []
    arr.forEach(item => {
        item.toLowerCase().includes('white') ? whites.push(item) : colors.push(item)
    })
    return 'There are ' + colors.length + ' items in the colored laundry load: ' + colors.join(', ') 
        + '\n' + 'There are ' + whites.length + ' items in the white laundry load: ' + whites.join(', ') + '.'
} 

console.log(sortLaundry(dirtyClothes)) 

// Find the shortest word and it's length

function findShortWord(str){
    str = str.split(' ')
    let shortWord = str[0]
    str.forEach(word => {
        shortWord.length >= word.length ? shortWord = word : null
    })
    return 'The shortest word in the sentence is, ' + shortWord + 
        ', and it is ' + shortWord.length + ' letters long'
}

console.log(findShortWord("Bitcoin may take over the world maybe who knows perhaps"))
console.log(findShortWord("Turns out random test cases are easier than writing out basic ones")) 
console.log(findShortWord("Let's travel abroad shall we"))
console.log(findShortWord("Let's talk about javascript the best language")) 
console.log(findShortWord("I want to travel the world writing code one day")) 
console.log(findShortWord("Lets all go on holiday somewhere very cold")) 
console.log(findShortWord("Test where final word shortest see")) 
console.log(findShortWord("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo")) 
console.log(findShortWord("Home is where the heart is")) 



