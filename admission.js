
function change(){
    let Files = document.getElementById("uploadDoc").files;     
    let fileNames = [];
    let read = new FileReader();

    for (var i = 0; i < Files.length; i++) {
        fileNames.push(Files[i].name);
    }
    document.getElementById("update").innerHTML = "Documents Selected:- "+fileNames.join(', ');
}