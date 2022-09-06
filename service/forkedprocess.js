process.on("message", message => {
    result = isNumberPrime(message.number);
    process.send(result);
    process.exit(); // Never forget to kill the child process
})


function isNumberPrime(number){

    startTime = new Date();
    endTime = new Date();
    isPrime = true;

    for(let i = 3; i < number; i++){

        if(number % i === 0){
            endTime = new Date();
            isPrime = false;
            break;
        }
    }

    if(isPrime) endTime = new Date();

    return {
        "number": number,
        "time": endTime.getTime() - startTime.getTime(),
        "isPrime": isPrime
    };
}