 var data = [
    "Nasi Goreng",
    "Ayam Goreng",
    "Indomie",
    "Pempek",
    "Ayam Kecap"
  ];
  
  
  function randomsize(){

    let text1 = data[Math.floor(Math.random() * data.length)];
    let text2 = data[Math.floor(Math.random() * data.length)];
    let text3 = data[Math.floor(Math.random() * data.length)];
    if(data.length >= 3) {
      if(text1 != text2 && text1 != text3 && text2 != text3){
        document.getElementById("demo1").innerHTML = text2;
        document.getElementById("demo").innerHTML = text1;
        document.getElementById("demo2").innerHTML = text3;
      }
    }
    else{
      alert("Data makanan harus lebih dari 3!")
    }
  }
  
  
  function tampil() {
      var tabel = document.getElementById("tabel");
      tabel.innerHTML = "<tr><th>No</th><th>Makanan</th><th>Action</th></tr>";
      for (let i = 0; i < data.length; i++) {
          var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
          var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
          j = i + 1;
         tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</tr>";
      }
  }
  
  function tambah() {
      var input = document.querySelector("input[name=makanan]");
      if (input.value){
      data.push(input.value);
      tampil();
      input.value = "";
    
      alert("Data Berhasil Ditambahkan!!");
      }
      else{
        alert("Input data kosong. Silahkan isi!");
      }
  }
  
  function edit(id) {
      var baru = prompt("Edit", data[id]);
      data[id] = baru;

      if(baru){
      
      tampil();
      alert("Data Berhasil Diupdate!!");
      }
      else{
        alert("Data kosong, Silahkan Isi data!!");
      }
  }
  
  function hapus(id) {

    if(confirm("Apakah anda yakin menghapus data ini?")){
      data.splice(id, 1);
      tampil();
      alert("Data Berhasil diHapus!!");
    }
       
}
