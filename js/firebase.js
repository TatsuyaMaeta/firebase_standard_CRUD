// 参照サイト
// https://www.youtube.com/watch?v=oxqVnWPg0So

let nameV, rollV, secV, genV;
let isInsert = false;
const btnArr = ["insert", "select", "update", "delete"];

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
    isInsert = checkData(btnArr[0]);
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

    isInsert = checkData(btnArr[1]); //btnArr[1] = select;
    console.log(isInsert);
    if (!isInsert) {
        firebase
            .database()
            .ref("student/" + rollV)
            .on("value", function (snapshot) {
                // console.log("snapshot ", snapshot);
                console.log("snapshot ", snapshot.val());

                document.getElementById(
                    "namebox"
                ).value = snapshot.val().NameOfStudent;
                document.getElementById(
                    "sectionbox"
                ).value = snapshot.val().Section;
                document.getElementById(
                    "genderbox"
                ).value = snapshot.val().Gender;
                
            });
        isInsert = false;
    } else {
        setEmptyInputTag();
        console.log("Please enter Student Number.");
        isInsert = false;
    }
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
