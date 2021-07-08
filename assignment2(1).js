// FIZZ BUZZ
for (i = 0; i <= 100; i++) {
    // numbers divisible by 15 print"FizzBuzz"
    if (mod(i, 15) == 0) {
        console.log("FizzBuzz")
    }
    // numbers divisible by 3 print "Fizz"
    else if (mod(i, 3) == 0) {
        console.log("Fizz")
    }
    // numbers divisible by 5 print "Buzz"
    else if (mod(i, 5) == 0) {
        console.log("Buzz")
    }
    // else print the number
    else {
        console.log(i)
    }
}

const mod = (num, div) => {
    const res = (num / div) | 0; // coerce to int
    return num - (res * div);
}