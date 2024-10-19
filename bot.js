const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const send = document.getElementById("send")
const restart = document.getElementById("restart")
const background = document.getElementById("background")
const loaders = document.getElementById("loaders")
const container = document.getElementById("container")

restart.style.display = "none"
let init = 0;

const botSay = (data) => {
    return [
        "Hallo myBot disini, siapa nama kamu?",
        `halo ${data?.Nama}, berapa usia kamu?`,
        `ohh ${data?.Usia}, kita seumuran dong!, btw hobby kamu apa?`,
        `wahhh aku juga suka ${data?.Hobi}, ehh iyaa kamu udah punya pacar?`,
        `ohh ${data?.Pacar}, yaudah kalo gitu, udahan ya?`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    init++
    if (jawaban.value === '') {
        pertanyaan.innerHTML = "harus di isi kalo ngga aku gigit nih"
        jawaban.style.display = "none"
        send.style.display = "none"
        restart.style.display = "block"
    }else if (init === 1) {
        botDelay({ Nama: jawaban.value })
        jawaban.value = ''
    } else if (init === 2) {
        botDelay({ Usia: jawaban.value })
        jawaban.value = ''
    } else if (init === 3) {
        botDelay({ Hobi: jawaban.value })
        jawaban.value = ''
    } else if (init === 4) {
        botDelay({ Pacar: jawaban.value })
        jawaban.value = 'iyaa'
    } else if (init === 5) {
        finishing()
        jawaban.value = 'dadahhh'
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    background.style.display = "block"
    container.style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        background.style.display = "none"
        container.style.filter = "none"
    }, [1000])
    userData.push(jawaban.value)
    jawaban.value - ""
}

function finishing() {
    pertanyaan.innerHTML = `makasih udah mau mampir ya ${userData[0]}, lain kali kita ${userData[2]} bareng ya!`
}

function botEnd() {
    send.style.display = "none"
    restart.style.display = "block"
    jawaban.style.display = "none"
    pertanyaan.innerHTML = "bye-bye!"
}

function ulang() {
    alert(`terima kasih ${userData[0]}, telah berkunjung ke web kita!, kamu akan di arah kan ke halaman utama lagi!`)
    location.reload()
}