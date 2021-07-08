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



// palindrome
let s = "madam and deed are some palindormes";
s = s + " ";
str = ""
revs = ""
for (i of s) {
    if (i != " ") {
        str = i + str
        revs = revs + i
        if (s == revs) {
            console.log(str + "is a palindrome");
        }
        else {
            console.log(str + "is not a palindrome");
        }
    }
    else {
        str = ""
        revs = ""
    }
}
