# js

# guide
------------------------------------------------------------------
> 1. [js data types](#1)

> 2. [js functions](#2)

> 3. [js objects](#3)







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
