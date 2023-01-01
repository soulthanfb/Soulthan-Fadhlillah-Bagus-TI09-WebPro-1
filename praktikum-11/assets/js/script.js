<<<<<<< HEAD
// isi logic gamemu disini
// menangkap elemernt a dengan menggunakan looping
document.querySelectorAll('#option a').forEach((anchor)=> {
    anchor.addEventListener('click', (element) => {
        computerChoice(element);
    })
});

function computerChoice(element){
    // menangkap pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap pilihan komouter pada result
    let pilihanKomputer = document.querySelector('#result');

    //menangkap hasil pertandingan
    let hasil = document.querySelector('#result2');

    // membuat pilihan untuk komputer
    let choices = ['Rock', 'Paper', 'Scissors'];

    // membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;


    // jika user yang menang
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
        hasil.innerHTML = ('You Win');
    }

    if (pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        hasil.innerHTML = ('You Win');
    }

    if (pilihanUser == 'Scissors' && pilihanKomputer == 'Paper'){
        hasil.innerHTML = ('You Win');
    }

    // jika komputer yang menang
    if (pilihanUser == 'scissors' && pilihanKomputer == 'Rock'){
        hasil.innerHTML = ('You Lose');
    }

    if (pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        hasil.innerHTML = ('You Lose');
    }

    if (pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
        hasil.innerHTML = ('You Lose');
    }

    // jika komputer dan user draw
    if(pilihanUser == pilihanKomputer){
        hasil.innerHTML = ('You Draw');
    }



=======
// isi logic gamemu disini
// menangkap elemernt a dengan menggunakan looping
document.querySelectorAll('#option a').forEach((anchor)=> {
    anchor.addEventListener('click', (element) => {
        computerChoice(element);
    })
});

function computerChoice(element){
    // menangkap pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap pilihan komouter pada result
    let pilihanKomputer = document.querySelector('#result');

    //menangkap hasil pertandingan
    let hasil = document.querySelector('#result2');

    // membuat pilihan untuk komputer
    let choices = ['Rock', 'Paper', 'Scissors'];

    // membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;


    // jika user yang menang
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
        hasil.innerHTML = ('You Win');
    }

    if (pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        hasil.innerHTML = ('You Win');
    }

    if (pilihanUser == 'Scissors' && pilihanKomputer == 'Paper'){
        hasil.innerHTML = ('You Win');
    }

    // jika komputer yang menang
    if (pilihanUser == 'scissors' && pilihanKomputer == 'Rock'){
        hasil.innerHTML = ('You Lose');
    }

    if (pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        hasil.innerHTML = ('You Lose');
    }

    if (pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
        hasil.innerHTML = ('You Lose');
    }

    // jika komputer dan user draw
    if(pilihanUser == pilihanKomputer){
        hasil.innerHTML = ('You Draw');
    }



>>>>>>> aa4cf99c8623560f496d1f85c23b807c0f1e6740
}