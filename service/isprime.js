// This function may be expensive for large numbers
exports.isNumberPrime = (number) => {

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