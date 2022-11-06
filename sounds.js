
function startProgram() {
    //create notes
    const notes = new Array(12);
    startFrequency = 440;



    for (let i = 0; i < notes.length; i++) {
        notes[i] = {
            name: i,
            frequency: startFrequency * (2 ** (i / 12)),
        }
    }


    const context = new AudioContext()
   
    const gainNode = context.createGain()
    gainNode.gain.setValueAtTime(0.01, context.currentTime);
    gainNode.connect(context.destination)



    const duration = 100;



    setInterval(() => {

        const random0to11 = Math.floor(Math.random() * 11) + 1
        const frequency = notes[random0to11].frequency;

        const oscillator = context.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(frequency, context.currentTime)
        oscillator.connect(gainNode)


      
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