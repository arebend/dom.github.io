function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gunting';
    if (comp >= 0.34 && comp < 0.67) return 'kertas';
    return 'batu';
};

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gunting') return (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
    if (player == 'kertas') return (comp == 'gunting') ? 'KALAH!' : 'MENANG!';
    if (player == 'batu') return (comp == 'kertas') ? 'KALAH' : 'MENANG!';
};


function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gunting', 'batu', 'kertas'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length) i = 0;
    }, 100)
};


const pilihan = document.querySelectorAll('li img'); //img didalam li
// console.log(pilihan);
pilihan.forEach(function (pilihGambar) {
    // console.log(pilihGambar);
    pilihGambar.addEventListener('click', function () {
        // console.log(pilihGambar);

        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pilihGambar.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer)

        putar();

        setTimeout(function () {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        })
    });
});


// const pilihGunting = document.querySelector('.gunting');
// pilihGunting.addEventListener('click', function () {
//     // alert('ok')
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihGunting.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     // console.log('comp :' + pilihanComputer);
//     // console.log('player :' + pilihanPlayer);
//     // console.log('hasil :' + hasil);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
//     // console.log(imgComputer);

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pilihKertas = document.querySelector('.kertas');
// pilihKertas.addEventListener('click', function () {
//     // alert('ok')
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihKertas.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pilihBatu = document.querySelector('.Batu');
// pilihBatu.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihBatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });