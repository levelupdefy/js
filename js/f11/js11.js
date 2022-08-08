
// if statement
/*

   if (condition) {
      block of code to be executed if the condition is true
    }
*/

const hour = new Date().getHours();
if (hour < 12) {
    const msg = "good morning!";
    console.log(msg);
}

// if & else
const color = "blue";
const msg = "color is";
if (color == "red") {
    console.log(msg, color);
}
else {
    console.log(msg, "not red!");
}

// if, else if & else 
// !in my opinion, instead of {if, else if & else} use {if, if, if, and if only}

const a = 22;
if (a < 10) {
    console.log("a", "< 10");
}
if (10 <= a < 10) {
    if (a == 10) {
        const sing = "=";
        console.log(10, sing, "a", "< 20");

    }
    if (a > 10) {
        const sing = "<";
        console.log(10, sing, "a", "< 20");
    }

}
if (a >= 20) {
    if (a == 20) {
        const sing = "=";
        console.log("a", sing, 20);
    }
    if (a > 20) {
        const sing = ">";
        console.log("a", sing, 20);
    }
}
