
function startProgram() {
    //create notes
    let melodyNotes = new Array(12);


    startMelodyFrequency = 329.6275569128699;

    //create Melody notes
    for (let i = 0; i < melodyNotes.length; i++) {
        melodyNotes[i] = startMelodyFrequency * (2 ** (i / 12))
    }


    console.table(melodyNotes)


    const context = new AudioContext()

    const gainMelodyNode = context.createGain()
    gainMelodyNode.gain.setValueAtTime(0.1, context.currentTime);
    gainMelodyNode.connect(context.destination)

    const duration = 200;

const savedMelodyNotes = [...melodyNotes]


    var myFunction = function (divisor) {

        random = Math.floor(Math.random() * melodyNotes.length - 1) + 1;


        const oscillator = context.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(melodyNotes[random], context.currentTime)
        oscillator.connect(gainMelodyNode)
        oscillator.start()
        console.log(melodyNotes)
        melodyNotes.length >1? melodyNotes.splice(random,1) : melodyNotes = [...savedMelodyNotes];

   
        oscillator.stop((context.currentTime + duration / 1000/divisor -duration / 10000/divisor))

        setTimeout(()=>{myFunction(divisor)}, duration/divisor);
    }

    


setTimeout(()=>{myFunction(1)}, 0);















}
















let isPlaying = false;
document.body.addEventListener('click', () => {
    console.log(isPlaying)
    !isPlaying ? startProgram() : window.location.reload();;
    isPlaying = true;
})


// startProgram()