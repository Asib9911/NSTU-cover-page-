function generate(){

document.getElementById("t1").innerText =
document.getElementById("title").value;

document.getElementById("c1").innerText =
document.getElementById("course").value;

document.getElementById("c2").innerText =
document.getElementById("code").value;

document.getElementById("s1").innerText =
document.getElementById("student").value;

document.getElementById("s2").innerText =
document.getElementById("sid").value;

document.getElementById("s3").innerText =
document.getElementById("year").value;

document.getElementById("s4").innerText =
document.getElementById("term").value;

document.getElementById("t2").innerText =
document.getElementById("teacher").value;

document.getElementById("t3").innerText =
document.getElementById("designation").value;
}

function downloadPDF(){
let element=document.getElementById("cover");
html2pdf().from(element).save("cover-page.pdf");
