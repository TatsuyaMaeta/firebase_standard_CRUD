const nameArr = ["namebox", "sectionbox", "rollbox", "genderbox"];

function checkData(btnName) {
    let resultBool = false;
    let nLengthArr = [];

    for (let i = 0; i < nameArr.length; i++) {
        nLengthArr[i] = document.getElementById(
            nameArr[i].toString()
        ).value.length;

        //全ての入力値がない場合を判定 (insert)
        if (nLengthArr[i] == 0 && btnName == btnArr[0]) {
            console.log(btnName);
            resultBool = true;
        }
    }
    //全ての入力値がない場合を判定 (select)
    if (
        nLengthArr[2] < 1 &&
        // nLengthArr[2] > 0 &&
        // nLengthArr[0] == nLengthArr[1] &&
        // nLengthArr[1] == nLengthArr[3] &&
        // nLengthArr[1] == 0 &&
        btnName == btnArr[1]
    ) {
        console.log(btnName);
        resultBool = true;
    }

    console.log(nLengthArr);
    console.log(resultBool);
    return resultBool;
}

function setEmptyInputTag() {
    for (let i = 0; i < nameArr.length; i++) {
        document.getElementById(nameArr[i]).value = "";
    }
}
