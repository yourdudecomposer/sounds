
function startProgram() {
    //create notes
    let notes = new Array(13);


    startFrequency = 220;

    const patterns = {
        wellTemperate: (i) => startFrequency * (2 ** (i / 12))
    }


    for (let i = 0; i < notes.length; i++) {
        notes[i] = {
            name: i,
            frequency: patterns.wellTemperate(i),
        }
    }

    

    function makeMinorScale(arr){
      arr.splice(1, 1) //1,4,6,9,11
      arr.splice(3,1)
      arr.splice(4,1)
      arr.splice(6,1)
      arr.splice(7,1)
        return arr
    }
    function makeMajorScale(arr){
        arr.splice(1,1) //1,2,4,5,6
        arr.splice(2,1)
        arr.splice(4,1)
        arr.splice(5,1)
        arr.splice(6,1)
        return arr
    }
  
 notes = makeMajorScale(notes)

    console.log(notes)


    const context = new AudioContext()

    const gainNode = context.createGain()
    gainNode.gain.setValueAtTime(0.01, context.currentTime);
    gainNode.connect(context.destination)

    const duration = 100;

    setInterval(() => {
        const random = Math.floor(Math.random() * notes.length - 1) + 1
        const frequency = notes[random].frequency;

        const oscillator = context.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(frequency, context.currentTime)
        oscillator.connect(gainNode)

        oscillator.start()
        oscillator.stop((context.currentTime + duration / 1000 - duration / 10000))
    }, duration);


    setInterval(() => {

        const random0to11 = Math.floor(Math.random() * notes.length - 1) + 1
        const frequency = notes[random0to11].frequency;

        const oscillator = context.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(frequency, context.currentTime)
        oscillator.connect(gainNode)

        oscillator.start()
        oscillator.stop((context.currentTime + duration / 1000 - duration / 10000))
    }, duration*3);

























}
















let isPlaying = false;
document.body.addEventListener('click', () => {
    console.log(isPlaying)
    !isPlaying ? startProgram() : window.location.reload();;
    isPlaying = true;
})