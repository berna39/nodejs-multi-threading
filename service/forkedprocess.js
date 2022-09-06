process.on("message", message => {
    result = isNumberPrime(message.number);
    process.send(result);
})


function isNumberPrime(number){

    startTime = new Date();
    endTime = new Date();
    isPrime = true;

    for(let i = 3; i < number; i++){
        console.log(i);
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