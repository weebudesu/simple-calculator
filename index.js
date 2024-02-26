const readline = require('readline');
const calculator = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan angka pertama: ', (a) => {
    rl.question('Masukkan angka kedua: ', (b) => {
        console.log('Hasil penjumlahan:', calculator.tambah(parseFloat(a), parseFloat(b)));
        console.log('Hasil pengurangan:', calculator.kurang(parseFloat(a), parseFloat(b)));
        console.log('Hasil perkalian:', calculator.kali(parseFloat(a), parseFloat(b)));
        console.log('Hasil pembagian:', calculator.bagi(parseFloat(a), parseFloat(b)));
        rl.close();
    });
});
