var form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
});
let selectLowongan = document.getElementById('selectLowongan');
let pilihanLowongan = ['Database administrator', 'Backend Developer', 'Frontend Developer','System administrator','UI/UX'];

for (let i = 0; i < pilihanLowongan.length; i++) {
    const pilih = pilihanLowongan[i];
    let option = document.createElement('option');
    option.textContent=pilih;
    option.value = pilih;
    selectLowongan.appendChild(option);
}

let selectPosisi = document.getElementById('selectPosisi');
let pilihanPosisi = ['Jakarta','Bogor','Bandung'];

for (let i = 0; i < pilihanPosisi.length; i++) {
    const pilih = pilihanPosisi[i];
    let option = document.createElement('option');
    option.textContent = pilih;
    option.value = pilih;
    selectPosisi.appendChild(option);
}
function kirim() {
    var fullname = document.getElementById("form").fullname.value;
    var email = document.getElementById("form").email.value;
    var nomor = document.getElementById("form").nomor.value;
    var lowongan = document.getElementById("form").lowongan.value;
    var posisi = document.getElementById("form").posisi.value;
    document.getElementById('fullname').innerHTML = fullname;
    document.getElementById('email').innerHTML = email;
    document.getElementById('nomor').innerHTML = nomor;
    document.getElementById('lowongan').innerHTML = lowongan;
    document.getElementById('posisi').innerHTML = posisi;
    document.getElementById('title').style.color='green';
    document.getElementById('title').innerHTML = 'Terima kasih telah melakukan pengisian data, permintaan anda segera kami proses';
}