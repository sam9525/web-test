function fizzbuzz(x) {
    for (let i = 0; i <= x; i++){
        console.log(i)
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        }
    }
}
fizzbuzz(100)