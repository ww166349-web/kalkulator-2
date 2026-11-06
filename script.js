
const display = document.getElementById("display");

// Menampilkan angka dan operator
function appendValue(value) {
    display.value += value;
}

// Menghapus semua angka
function clearDisplay() {
    display.value = "";
}

// Menghapus satu karakter
function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

// Fungsi penjumlahan
function tambah(a, b) {
    return a + b;
}

// Fungsi pengurangan
function kurang(a, b) {
    return a - b;
}

// Fungsi perkalian
function kali(a, b) {
    return a * b;
}

// Fungsi pembagian
function bagi(a, b) {
    if (b === 0) {
        throw new Error("Tidak bisa dibagi nol!");
    }
    return a / b;
}

// Menghitung hasil
function calculate() {
    try {
        const expression = display.value;

        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            throw new Error("Input tidak valid");
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Hasil tidak valid");
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
