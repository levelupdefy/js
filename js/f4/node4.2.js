// string as a object
const a = new String("hello i am rsadhukhan");


// length of string ".length"
const len = a.length
console.log(len);

// slicing of string 

// .slice(start, end);
const slice1 = a.slice(11, 21);
console.log(slice1);


// .substr(start, length)
const slice2 = a.substr(11, 10);
console.log(slice2);

// replacing string content
const b = `i am rsadhukhan`;                                
const replaced_b = b.replace("rsadhukhan", "sadhukhanr");
console.log(replaced_b);


// javaScript string toUpperCase() , toLowerCase() & concat() 
const str = `hello node!`;
const ne = `\n`
const upper = str.toUpperCase();
const lower = str.toLocaleLowerCase();
const add = upper.concat(" ", lower);
console.log(upper, ne, lower, ne , add);

// javaScript string trim() , padStart(), padEnd()

const str2 = `              yo! long time no see!            `;
const x = `3`
const trim_ = str2.trim();
const pad = x.padStart(5, "x");
const pad_e = x.padEnd(5, "x");
console.log(trim_, ne, pad, ne, pad_e);

// extracting string characters (Es5, 2009)
const g = `have a good day!`;
const f = g[5];
console.log(f);






