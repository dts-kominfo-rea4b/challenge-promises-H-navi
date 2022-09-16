const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
    const ixx = await promiseTheaterIXX();
    const vgc = await promiseTheaterVGC();
    const mergedData = [...ixx, ...vgc];

    let jumlahEmosi = 0;
    ixx.forEach(hitung);
    vgc.forEach(hitung);

    function hitung(item, index) {
        if (item.hasil == emosi) { jumlahEmosi++ }
    }
    return jumlahEmosi;
};

module.exports = {
    promiseOutput,
};