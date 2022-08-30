function display(sum) {
    console.log(sum)
}

function add(num1,num2) {
    let sum = num1 + num2;
    display(sum)
}

add(2,3);

// callback meance a function want a parameter like a function that mean callback function. ..Parameter function called callback function

function display(sum) {
    console.log(sum);
}

function add(num1,num2,callback) {
    let sum = num1 + num2;
    if(callback) callback(sum);
    return sum
}

add(2,4,display);
add(2,8,display);

function add(num1,num2,callback) {
    let sum = num1 + num2;
    if(callback) callback(sum);
    return sum
}

add(10,10,function(sum){
    console.log(sum);
})