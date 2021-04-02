let nameArr = ["namebox", "rollbox", "sectionbox", "genderbox"];

function checkData() {
    let resultBool = false;
    let nLengthArr = [];

    for (let i = 0; i < nameArr.length; i++) {
        nLengthArr[i] = document.getElementById(
            nameArr[i].toString()
        ).value.length;

        if (nLengthArr[i] == 0) {
            console.log("0");
            resultBool = true;
        }
    }

    return resultBool;
}

function setEmptyInputTag() {
    for (let i = 0; i < nameArr.length; i++) {
        document.getElementById(nameArr[i]).value = "";
    }
}
