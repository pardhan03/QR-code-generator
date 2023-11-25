let qrText=document.getElementById("qrText");
let imgBox=document.getElementById("imgBox");
let qrimage=document.getElementById("qrimage");

function generateQR(){
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
}