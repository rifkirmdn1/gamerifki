function tekan(){
    swal({
    title: "Selamat bermain",
    text: "Silahkan Pilih :",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Pilih Antara Kertas, Gunting dan Batu"
  },
  function(inputValue){
      var comp = Math.floor((Math.random() * 3) + 1);
      
      if (comp === 1){
        comp = "kertas";
      }else if (comp === 2){
        comp = "batu";
      }else{
        comp = "gunting";
      }
    if (inputValue === false) return false;
    
      
    if (inputValue === "") {
      swal.showInputError("Pilihan anda Kosong");
      return false
    }else if(inputValue === "batu"){
      hasil = comp === "kertas" ? "Anda Kalah" : "Anda Menang";
    }else if (inputValue === comp){
      hasil = "Seri!!!"
    }else if(inputValue === "kertas"){
      hasil = comp === "gunting" ? "Anda Kalah" : "Anda Menang";
    } else if (inputValue === "gunting"){
      hasil = inputValue === "batu" ? "Anda Kalah" : "Anda Menang";
    }else{
      swal("Harap Masukan Gunting, Kertas dan Batu saja");
    }
      
    
    swal("Hasilnya "+ hasil + ", Komputer memilih "+ comp + " Dan Anda Memilih "+ inputValue);
  });
  }