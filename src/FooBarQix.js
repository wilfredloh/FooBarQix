// function helloWorld() {
//     return 'Hello world!';
// }

function checkNum(num) {
    let message = ''
    let numArr = [3, 5, 7];
    let stringNumArr = ['3', '5', '7'];
    let messageArr = ['Foo', 'Bar', 'Qix']

    for (let i=0; i<numArr.length; i++) {
        if (num % numArr[i] === 0){
            message += messageArr[i];
        }
        let stringNum = num.toString();
        // let splittednum = num.toString().split("")

        // if (splittednum[0] === splittednum[1]){
        //     message += messageArr[i];
        // }
        if (stringNum.includes(stringNumArr[i])) {
            message += messageArr[i];
        }
    }
    if (message !== ''){
        return message;
    }
    return num;
}

module.exports = {
    // helloWorld,
    checkNum
};