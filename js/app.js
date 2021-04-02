let nameV, rollV, secV, genV;

var f_data = firebase.database(); 

function Ready() {
    nameV = document.getElementById("namebox").Value;
    rollV = document.getElementById("rollbox").Value;
    secV = document.getElementById("sectionbox").Value;
    genV = document.getElementById("genderbox").Value;
}

//--------------------- 挿入処理 ---------------------

document.getElementById("insert").onclick = function () {
    Ready();
    firebase
        .database()
        .ref("student/" + rollV)
        .set({
            NameOfStudent: nameV,
            RollNo: rollV,
            Section: secV,
            Gender: genV,
        });
};