const fizzbuzz = (num) => {

    if(typeof(num) !== 'number'){
        return null
    }

    if(num === 0){
        return num
    }

    const divisor = (num, divisor) => num % divisor === 0

    if(divisor(num, 3) && divisor(num, 5)){
        return 'fizzbuzz'
    }

    if(divisor(num, 3)){
        return 'fizz'
    }

    if(divisor(num, 5)){
        return 'fizz'
    }

    return num
}


const printFizz = (num) => {
    for(let i =0; i <= num; i++){
        console.log(`${i}: ${fizzbuzz(i)}`)
    }
}


printFizz(16)


module.exports = fizzbuzz