//toast sessage function

let v = document.getElementById("rollbox").value;

function launch_toast() {
    console.dir(document.getElementById("rollbox").value.toString());

    if (v != "" || v != null || v.length > 1) {
        var x = document.getElementById("toast");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    } else {
        console.log(1111111111);
    }
}
