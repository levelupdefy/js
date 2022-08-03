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
