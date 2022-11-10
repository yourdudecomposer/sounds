
function startProgram() {
    //create notes ana durations
    let melodyNotes = new Array(12);
    let durations = new Array(12);

    let startMelodyFrequency = 329.6275569128699;
    let startDurations = 1000;

    //create Melody notes 
    for (let i = 0; i < melodyNotes.length; i++) {
        melodyNotes[i] = startMelodyFrequency * (2 ** (i / 12))
    }
    
    //create durations notes 
    for (let i = 0; i < durations.length; i++) {
        durations[i] = startDurations/(i+1);
    }

    console.log(durations)
    // for (let i = 0; i < durations.length; i++) {
    //     durations[i] = startDurations;
    //     startDurations /=2

    // }


    const context = new AudioContext()

    const gainMelodyNode = context.createGain()
    gainMelodyNode.gain.setValueAtTime(0.1, context.currentTime);
    gainMelodyNode.connect(context.destination)


    const savedMelodyNotes = [...melodyNotes]
    const savedDurations = [...durations]

    var myFunction = function () {

        randomForNote = Math.floor(Math.random() * melodyNotes.length - 1) + 1;
        randomForDuration = Math.floor(Math.random() * durations.length - 1) + 1;


        const oscillator = context.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(melodyNotes[randomForNote], context.currentTime)
        oscillator.connect(gainMelodyNode)
        oscillator.start()
    
        oscillator.stop((context.currentTime + durations[randomForDuration] / 1000 - durations[randomForDuration] / 10000))
        
        setTimeout(() => { myFunction() }, durations[randomForDuration]);
        
        melodyNotes.length > 1 ? melodyNotes.splice(randomForNote, 1) : melodyNotes = [...savedMelodyNotes];
        durations.length > 1 ? durations.splice(randomForDuration, 1) : durations = [...savedDurations];
   
    }




    setTimeout(() => { myFunction() }, 0);
  















}
















let isPlaying = false;
document.body.addEventListener('click', () => {
    console.log(isPlaying)
    !isPlaying ? startProgram() : window.location.reload();;
    isPlaying = true;
})


// startProgram()