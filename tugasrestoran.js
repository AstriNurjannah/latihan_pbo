class Restaurant {
  constructor(nama) {
    this.nama = nama;

    //data menu, harga dan stok
    this.nasiGoreng = { harga: 20000, stok: 20, pesanan: 0 };
    this.ayamBakar = { harga: 15000, stok: 10, pesanan: 0 };
  }

  //setter untuk pesanan
  set order(pesanan) {
    if (pesanan.nasiGoreng <= this.nasiGoreng.stok) {
      this.nasiGoreng.pesanan = pesanan.nasiGoreng;
    } else {
      console.log("stok nasi goreng tidak cukup");
    }

    if (pesanan.ayamBakar <= this.ayamBakar.stok) {
      this.ayamBakar.pesanan = pesanan.ayamBakar;
    } else {
      console.log("Stok Ayam Bakar tidak cukup.");
    }
  }
  //getter untuk total bayar
  get totalBayar() {
    return (
      this.nasiGoreng.pesanan * this.nasiGoreng.harga +
      this.ayamBakar.pesanan * this.ayamBakar.harga
    );
  }

  //method untuk menampilkan semua informasi
  hitung() {
    console.log(this.nama);

    console.log("\n ==== MENU ===");
    console.log(
      `1. Nasi Goreng Rp. ${this.nasiGoreng.harga} (stok: ${this.nasiGoreng.stok})`
    );
    console.log(
      `2. Ayam Bakar Rp. ${this.ayamBakar.harga} (stok: ${this.ayamBakar.stok})`
    );

    console.log("\n Jumlah Pesanan");
    console.log(`Nasi Goreng: ${this.nasiGoreng.pesanan}`);
    console.log(`Ayam Bakar: ${this.ayamBakar.pesanan}`);

    console.log(`\n Total Bayar: Rp. ${this.totalBayar}`);
  }
}

const resto = new Restaurant("Warung Pecel");
resto.order = {
  nasiGoreng: 2,
  ayamBakar: 2,
};

resto.hitung();
