
function startProgram() {
    //create notes
    let bassNotes = new Array(13);
    let melodyNotes = new Array(25);


    startBassFrequency = 110;
    startMelodyFrequency = 220;

    //create Bass notes
    for (let i = 0; i < bassNotes.length; i++) {
        bassNotes[i] = startBassFrequency * (2 ** (i / 12))
    }

    //create Melody notes
    for (let i = 0; i < melodyNotes.length; i++) {
        melodyNotes[i] = startMelodyFrequency * (2 ** (i / 12))
    }



    function makeMinorScale(arr) {
        arr.splice(1, 1) //1,3,4,6,7; 8,10,11,13,14  //1,4,6,9,11; 13,16,18,21,23
        arr.splice(3, 1)
        arr.splice(4, 1)
        arr.splice(6, 1)
        arr.splice(7, 1)

        arr.splice(8, 1)
        arr.splice(10, 1)
        arr.splice(11, 1)
        arr.splice(13, 1)
        arr.splice(14, 1)
        return arr
    }
    function makeMajorScale(arr) {
        arr.splice(1, 1) //1,2,4,5,6; 8,9,11,12,13  //1,3,6,8,10; 13,15,18,20,22
        arr.splice(2, 1)
        arr.splice(4, 1)
        arr.splice(5, 1)
        arr.splice(6, 1)

        arr.splice(8, 1)
        arr.splice(9, 1)
        arr.splice(11, 1)
        arr.splice(12, 1)
        arr.splice(13, 1)
        return arr
    }

    bassNotes = makeMinorScale(bassNotes)
    melodyNotes = makeMinorScale(melodyNotes)

    console.log(bassNotes)
    console.log(melodyNotes)


    const context = new AudioContext()

    const gainBassNode = context.createGain()
    const gainMelodyNode = context.createGain()

    gainBassNode.gain.setValueAtTime(0.1, context.currentTime);
    gainMelodyNode.gain.setValueAtTime(0.1, context.currentTime);

    gainBassNode.connect(context.destination)
    gainMelodyNode.connect(context.destination)

    const duration = 800;



//Bass
    setInterval(() => {

        const random = Math.floor(Math.random() * bassNotes.length - 1) + 1

        const oscillator = context.createOscillator();
        oscillator.type = 'square';
        oscillator.type = 'sawtooth';
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(bassNotes[random], context.currentTime)
        oscillator.connect(gainBassNode)

        oscillator.start()
        oscillator.stop((context.currentTime + duration / 1000 - duration / 10000))
    }, duration);

//Melody
    setInterval(() => {

        const random = Math.floor(Math.random() * melodyNotes.length - 1) + 1

        const oscillator = context.createOscillator();
    oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(melodyNotes[random], context.currentTime)
        oscillator.connect(gainMelodyNode)

        oscillator.start()
        oscillator.stop((context.currentTime + duration / 1000/4 - duration / 10000/4))
    }, duration/4);



























}
















let isPlaying = false;
document.body.addEventListener('click', () => {
    console.log(isPlaying)
    !isPlaying ? startProgram() : window.location.reload();;
    isPlaying = true;
})

