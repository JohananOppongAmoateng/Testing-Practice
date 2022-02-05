const capitalize = (str) =>{
    if (str.length > 1){
        const first = str.substr(0,1).toUpperCase()
        const word = first.concat(str.substr(1))
        return word  
    }
    else{
        return str.toUpperCase()
    }
}

const reverseString = (string) => {
    let sentence =""
    for (let i =string.length -1;i >= 0;i--){
        sentence += string[i]
    }
    return sentence
}


const calculator = {
    add(num,num2) {
        return num + num2
    },

    multiply(a,b) {
        return a * b
    },
    divide(a,b) {
        return a / b
    },

    subtract (a,b){
        return a-b 
    } 
}

const analyzeArray = (array) =>{
    const length = array.length
    let total = 0 
    let min = array[0]
    let max = array[0]
    for (let i=0;i<array.length;i++){
        min > array[i] ? min = array[i]:min = min
        max < array[i] ? max = array[i]:max =max   
        total += array[i]
    }
    const average = total / length
    
    return {
        average,
        min,
        max,
        length
    }
}


const caesarCipher = (string) => {
    let sentence = ""
    const alphabet = {
        "a":"b",
        "b":"c",
        "c":"d",
        "d":"e",
        "e":"f",
        "f":"g",
        "g":"h",
        "h":"i",
        "i":"j",
        "j":"k",
        "k":"l",
        "l":"m",
        "m":"n",
        "n":"o",
        "o":"p",
        "p":"q",
        "q":"r",
        "r":"s",
        "s":"t",
        "t":"u",
        "u":"v",
        "v":"w",
        "w":"x",
        "x":"y",
        "y":"z",
        "z":"a",
        "A":"B",
        "B":"C",
        "C":"D",
        "D":"E",
        "E":"F",
        "F":"G",
        "G":"H",
        "H":"I",
        "I":"J",
        "J":"K",
        "K":"L",
        "L":"M",
        "M":"N",
        "N":"O",
        "O":"P",
        "P":"Q",
        "Q":"R",
        "R":"S",
        "S":"T",
        "T":"U",
        "U":"V",
        "V":"W",
        "W":"X",
        "X":"Y",
        "Y":"Z",
        "Z":"A",
    }
    for (let i = 0; i < string.length; i++) {
        if (alphabet.hasOwnProperty(string[i])){
            sentence += alphabet[string[i]]
        }
    else{
            sentence += string[i]
        }
    }
    return sentence
}




module.exports = {
    capitalize,
    analyzeArray,
    calculator,
    reverseString,
    caesarCipher
}