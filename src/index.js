module.exports = function reverse (n) {

    let arrNum = String(n).split('');
    if ( arrNum[0] === '-'){
        arrNum.splice(0, 1);
            arrNum.reverse();
            arrNum = arrNum.join('');
            return arrNum;

        // if (arrNum[arrNum.length - 1] === '0'){
        //     arrNum.splice(-1, 1);
        //     arrNum.reverse();
        //     arrNum = arrNum.join('');
        //     return +arrNum;
        //}
    } else if (arrNum[arrNum.length - 1] === '0'){
        arrNum.splice(-1, 1);
        arrNum.reverse();
        arrNum = arrNum.join('');
        return arrNum;
    } else {
        arrNum.reverse();
        arrNum = arrNum.join('');
        return arrNum;
    }
    
}
