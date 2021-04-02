let nameV, rollV, secV, genV;
let isInsert = false;
//---------------------------- データ準備 ----------------------------

function Ready() {
    nameV = document.getElementById("namebox").value;
    rollV = document.getElementById("rollbox").value;
    secV = document.getElementById("sectionbox").value;
    genV = document.getElementById("genderbox").value;
}

//---------------------------- 挿入処理 ----------------------------

document.getElementById("insert").onclick = function () {
    Ready();

    //空白蘭が1つでもあるとtrueが戻り値に来る
    isInsert = checkData();
    console.log(isInsert);
    if (!isInsert) {
        console.dir(firebase.database());
        firebase
            .database()
            .ref("student/" + rollV)
            .set({
                NameOfStudent: nameV, //(Key: Value)
                RollNo: rollV, //(Key: Value)
                Section: secV, //(Key: Value)
                Gender: genV, //(Key: Value)
            });
        setEmptyInputTag();
        launch_toast();
        isInsert = false;
    } else {
        console.log("Please enter any info.");
        isInsert = false;
    }
};

if (isInsert) {
    launch_toast();
    isInsert = false;
}

//---------------------------- 項目選択 ----------------------------
document.getElementById("select").onclick = function () {
    Ready();

    firebase
        .database()
        .ref("student/" + rollV)
        .on("value", function (snapshot) {
            document.getElementById(
                "namebox"
            ).value = snapshot.val().NameOfStudent;
            document.getElementById(
                "sectionbox"
            ).value = snapshot.val().Section;
            document.getElementById("genderbox").value = snapshot.val().Gender;
        });
};

//---------------------------- 更新処理 ----------------------------

document.getElementById("update").onclick = function () {
    Ready();
    console.dir(firebase.database());
    firebase
        .database()
        .ref("student/" + rollV)
        .update({
            NameOfStudent: nameV,
            Section: secV,
            Gender: genV,
        });
};

//---------------------------- 削除処理 ----------------------------

document.getElementById("delete").onclick = function () {
    Ready();
    console.dir(firebase.database());
    firebase
        .database()
        .ref("student/" + rollV)
        .remove();
};
