
function startProgram() {
    //create notes
    let melodyNotes = new Array(12);


    startMelodyFrequency = 659.2551138257398 / 2;

    //create Melody notes
    for (let i = 0; i < melodyNotes.length; i++) {
        melodyNotes[i] = startMelodyFrequency * (2 ** (i / 12))
    }


    console.log(melodyNotes)


    const context = new AudioContext()

    const gainMelodyNode = context.createGain()

    gainMelodyNode.gain.setValueAtTime(0.1, context.currentTime);

    gainMelodyNode.connect(context.destination)

    const duration = 200;



    setInterval(() => {

        const random = Math.floor(Math.random() * melodyNotes.length - 1) + 1

        const oscillator = context.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(melodyNotes[random], context.currentTime)
        oscillator.connect(gainMelodyNode)

        oscillator.start()
        oscillator.stop((context.currentTime + duration / 1000 - duration / 10000))
    }, duration);



























}
















let isPlaying = false;
document.body.addEventListener('click', () => {
    console.log(isPlaying)
    !isPlaying ? startProgram() : window.location.reload();;
    isPlaying = true;
})


