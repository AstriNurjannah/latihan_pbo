// Membuat class Restaurant
class Restaurant {
  // Constructor dijalankan saat object baru dibuat
  constructor(nama) {
    this.nama = nama; // simpan nama restoran

    // Data menu dengan harga, stok, dan jumlah pesanan awal
    this.nasiGoreng = { harga: 20000, stok: 20, pesanan: 0 };
    this.ayamBakar = { harga: 15000, stok: 10, pesanan: 0 };
  }

  // Setter untuk mengatur pesanan pelanggan
  set order(pesanan) {
    // cek apakah pesanan nasi goreng tidak melebihi stok
    if (pesanan.nasiGoreng <= this.nasiGoreng.stok) {
      this.nasiGoreng.pesanan = pesanan.nasiGoreng;
    } else {
      console.log("Stok nasi goreng tidak cukup");
    }

    // cek apakah pesanan ayam bakar tidak melebihi stok
    if (pesanan.ayamBakar <= this.ayamBakar.stok) {
      this.ayamBakar.pesanan = pesanan.ayamBakar;
    } else {
      console.log("Stok ayam bakar tidak cukup");
    }
  }

  // Getter untuk menghitung total pembayaran (harga * jumlah pesanan)
  get totalBayar() {
    return (
      this.nasiGoreng.pesanan * this.nasiGoreng.harga +
      this.ayamBakar.pesanan * this.ayamBakar.harga
    );
  }

  // Method untuk menampilkan semua informasi restoran, menu, pesanan, dan total bayar
  hitung() {
    console.log(this.nama); // tampilkan nama restoran

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

// Membuat object restoran baru dengan nama "Warung Pecel"
const resto = new Restaurant("Warung Pecel");

// Pesan 2 nasi goreng dan 2 ayam bakar
resto.order = {
  nasiGoreng: 2,
  ayamBakar: 2,
};

// Jalankan method hitung() untuk menampilkan info pesanan
resto.hitung();
