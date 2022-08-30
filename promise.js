const paymentStatus = true;
const courseMark = 80;

function enroll() {
    console.log('Course enroll is procesing...');
    
    const promise = new Promise(function(resolve,reject) {
            setTimeout(function() {
            if(paymentStatus) {
                resolve();
            }else{
                reject('Payment failed !')
            }
        },2000) 
    })
    return promise
}

function progress() {
    console.log('Course is progress...');

    const promise = new Promise(function(resolve,reject) {
            setTimeout(function() {
            if(courseMark >= 80){
                resolve();
            }else{
                reject('You are not eligible for certificate.');
            }
        },3000)
    })
    return promise
}

function getCertificate() {
    console.log('Preparing your certificate...');

    const promise = new Promise(function(resolve) {
            setTimeout(function() {
            resolve('Congrates. You got the certificate..')
            },1500)
    })
    return promise
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value) {
        console.log(value)
    })
    .catch(function(err) {
        console.log(err)
    })