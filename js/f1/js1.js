
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