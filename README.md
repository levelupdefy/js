# js

# guide
------------------------------------------------------------------
> 1. [js data types](#1)

> 2. [js functions](#2)

> 3. [js objects](#3)

> 4. [js strings](#4)






-----------------------------------------------------------------
# 1.
## 1. data types in javascript
```js

const number = 16;                                       

const string = "rsadhukhan";

const object = {
    myname:'rsadhukhan',
    mail:'r******@pm.me'
};

const array = [
    "one",
    "two",
    "three"
];

const bool = false;
const empty_string = '';
const empty_array = [];




// chechk data type
const dataType = (data) =>{
    const msg = "this is";
    const type = typeof(data)
    return console.log(msg, type)
}

dataType(number);
dataType(empty_string);
dataType(object);
dataType(number);
dataType(array);
dataType(bool);
```
[[code]](./js/f1/js1.js)

----------------------------------------------
# 2
## 2. js functions
```js
const js_function = ( parameter1, parameter2) =>{
    return parameter1*parameter2
}

// mod of vector function v = ai + bj + ck
const mod = (a, b, c) =>{
    const x = a**2 + b**2 + c**2
    const y = Math.sqrt(x);
    return console.log("mod of vector (", a, b, c,") is", y);

}

mod(3, 4, 0)
mod(0, 4, 3)
mod(4, 0, 3)
```
[[code]](./js/f2/js2.js)

----------------------------------------------
# 3
## 3 js objects
```js
const my_info_odject = {
    myName: 'rsadhukha',
    myGithub: 'sadhukhanr',
    reopName: 'js',
    repoUrl: 'https://github.com/sadhukhanr/js',
    repoMeta: () =>{
        const repo = this.reopName;
        const url = this.repoUrl;
        return console.log(repo, "=>",url);
    }
};

// objectName.popertyValue;

const me = my_info_odject.myName;
const github = my_info_odject.myGithub;
const meta = my_info_odject.repoMeta;

console.log(me, github, meta);
```
[[code]](./js/f3/js3.js)

------------------------------------------
# 4
## 4 js strings
```
4.1 js escape squences
```


|              |                      |
|--------------|----------------------|
|     \b       |  backspace           |
|     \f       |  from feed           |
|     \n       |  new line            |
|     \r	   | carriage return      |
|     \t       | horizontal tabulator |
|     \v	   | vertical tabulator   |

```js
console.log("we're taking \n over!");
```

```
# string as a object
```
```js
// string as a object
const a = new String("hello i am rsadhukhan");


// length of string ".length"
const len = a.length
console.log(len);
```

```
# slicing of string
```
```js
// .slice(start, end);
const slice1 = a.slice(11, 21);
console.log(slice1);


// .substr(start, length)
const slice2 = a.substr(11, 10);
console.log(slice2);
```
```
# replacing string content
```
```js
const b = `i am rsadhukhan`;
const replaced_b = b.replace("rsadhukhan", "sadhukhanr");
console.log(replaced_b);
```
```js
# javaScript string toUpperCase() , toLowerCase() & concat() 
```
```js
const str = `hello node!`;
const ne = `\n`
const upper = str.toUpperCase();
const lower = str.toLocaleLowerCase();
const add = upper.concat(" ", lower);
console.log(upper, ne, lower, ne , add);
```
```js
# javaScript string trim() , padStart(), padEnd()
```
```js
const str2 = `              yo! long time no see!            `;
const x = `3`
const trim_ = str2.trim();
const pad = x.padStart(5, "x");
const pad_e = x.padEnd(5, "x");
console.log(trim_, ne, pad, ne, pad_e);
```
```
# extracting string characters (Es5, 2009)
```
```js
const g = `have a good day!`;
const f = g[5];
console.log(f);
```
[[code]](./js/f4/node4.2.js)