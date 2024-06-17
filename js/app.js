const keys = document.querySelectorAll('.key')
const txt = document.getElementById('text')
const inp = document.getElementById('inp')
const main = document.querySelector('main')
const wrapper = document.querySelector('.wrapper')
const switches = document.querySelectorAll('.switch')
const monitor = document.querySelector('.monitor')

let switchUrl = 'audio/key05.wav'

switches.forEach((val)=> {
    let switchFlag = val.getAttribute('data-color')
    val.addEventListener('click', ()=> {
        switches.forEach(mySwitch => {
            mySwitch.classList.remove('active')
        })

        if(switchFlag != 'reset'){
            val.classList.add('active')
        }

        if(switchFlag == 'blue'){
            switchUrl = 'audio/blue-switch-2.mp3'
        } else if (switchFlag == 'red'){
            switchUrl = 'audio/red-switch.mp3'
        } else if (switchFlag == 'brown') {
            switchUrl = 'audio/brown-switch.mp3'
        } else {
            switchUrl = 'audio/key05.wav'
        }
    })
})


// Create a Set to keep track of active keys
const activeKeys = new Set();

// Function to play the key sound with slight variations
function playClickSound(event) {
    const key = event.key;
    // If the key is not already active
    if (!activeKeys.has(key)) {
        // Add the key to the set of active keys
        activeKeys.add(key);

        // Create a new Audio object for each key press
        let clickKey2 = new Audio(switchUrl);
        clickKey2.currentTime = 0

        clickKey2.volume =  (Math.random() * 0.4) + 0.3;

        // Play the sound
        clickKey2.play();

        // Remove the key from the set when the key is released
        const handleKeyUp = (keyupEvent) => {
            if (keyupEvent.key === key) {
                activeKeys.delete(key);
                window.removeEventListener('keyup', handleKeyUp);
            }
        };
        window.addEventListener('keyup', handleKeyUp);
    }
}

// Event listener for keydown
window.addEventListener('keydown', playClickSound);

main.addEventListener('pointermove', (e)=> {
    let x = ((main.clientWidth - (e.pageX)) / 90)
    let y = ((main.clientHeight - (e.pageY)) / 90) 
    // console.log("X = ", main.clientWidth - e.pageX);
    // console.log("Y = ", main.clientHeight - e.pageY);
    // txt.innerHTML = `x = ${x} :: y = ${y}`

    wrapper.style.transform = `
        translate(64px, -101px) rotateX(${59 + y}deg) rotateY(-1deg) rotateZ(${-35 + x}deg)
    `
})

inp.focus()
inp.addEventListener('input', ()=> {
    txt.innerText = inp.value
})


document.addEventListener('click', ()=> {
    inp.focus()
})
// keydown effects
document.addEventListener('keydown', (e)=>{
    myKey = e.code
    // console.log(myKey);
    // console.log(myKeyCode);
    // if(myKeyCode == 32){
    //     keys[71].classList.add('press')
    // }

    // on keyboard Effects
    switch (myKey) {
        case 'Escape':
            keys[0].classList.add('press')
            break;
        case 'F1':
            keys[1].classList.add('press')
            break;
        
        case 'F2':
            keys[2].classList.add('press')
            break;
        
        case 'F3':
            keys[3].classList.add('press')
            break;
        
        case 'F4':
            keys[4].classList.add('press')
            break;
        
        case 'F5':
            keys[5].classList.add('press')
            break;
        
        case 'F6':
            keys[6].classList.add('press')
            break;
        
        case 'F7':
            keys[7].classList.add('press')
            break;
        
        case 'F8':
            keys[8].classList.add('press')
            break;
        
        case 'F9':
            keys[9].classList.add('press')
            break;
        
        case 'F10':
            keys[10].classList.add('press')
            break;
        
        case 'F11':
            keys[11].classList.add('press')
            break;
        
        case 'F12':
            keys[12].classList.add('press')
            break;
        
        case 'PrintScreen':
            keys[13].classList.add('press')
            // console.log(keys[13].innerHTML);
            break;
        
        case 'Delete':
            keys[14].classList.add('press')
            break;
        
        case 'Lamp':
            keys[15].classList.add('press')
            break;
        
        case '`':
            keys[16].classList.add('press')
            break;
        
        case 'Digit1':
            keys[17].classList.add('press')
            break;
        
        case 'Digit2':
            keys[18].classList.add('press')
            break;
        
        case 'Digit3':
            keys[19].classList.add('press')
            break;
        
        case 'Digit4':
            keys[20].classList.add('press')
            break;
        
        case 'Digit5':
            keys[21].classList.add('press')
            break;
        
        case 'Digit6':
            keys[22].classList.add('press')
            break;
        
        case 'Digit7':
            keys[23].classList.add('press')
            break;
        
        case 'Digit8':
            keys[24].classList.add('press')
            break;
        
        case 'Digit9':
            keys[25].classList.add('press')
            break;
        
        case 'Digit0':
            keys[26].classList.add('press')
            break;
        
        case 'Minus':
            keys[27].classList.add('press')
            break;
        
        case 'Equal':
            keys[28].classList.add('press')
            break;
        
        case 'Backspace':
            keys[29].classList.add('press')
            break;
        
        case 'PageUp':
            keys[30].classList.add('press')
            break;
        
        case 'Tab':
            keys[31].classList.add('press')
            break;
        
        case 'KeyQ':
            keys[32].classList.add('press')
            break;
        
        case 'KeyW':
            keys[33].classList.add('press')
            break;
        
        case 'KeyE':
            keys[34].classList.add('press')
            break;
        
        case 'KeyR':
            keys[35].classList.add('press')
            break;
        
        case 'KeyT':
            keys[36].classList.add('press')
            break;
        
        case 'KeyY':
            keys[37].classList.add('press')
            break;
        
        case 'KeyU':
            keys[38].classList.add('press')
            break;
        
        case 'KeyI':
            keys[39].classList.add('press')
            break;
        
        case 'KeyO':
            keys[40].classList.add('press')
            break;
        
        case 'KeyP':
            keys[41].classList.add('press')
            break;
        // *#*#*#

        case 'BracketLeft':
            keys[42].classList.add('press')
            break;
        
        case 'BracketRight':
            keys[43].classList.add('press')
            break;
        
        case "Backslash":
            keys[44].classList.add('press')
            break;
        
        case 'PageDown':
            keys[45].classList.add('press')
            break;
        
        case 'CapsLock':
            keys[46].classList.add('press')
            break;
        
        case 'KeyA':
            keys[47].classList.add('press')
            break;
        
        case 'KeyS':
            keys[48].classList.add('press')
            break;
        
        case 'KeyD':
            keys[49].classList.add('press')
            break;
        
        case 'KeyF':
            keys[50].classList.add('press')
            break;
        
        case 'KeyG':
            keys[51].classList.add('press')
            break;
        
        case 'KeyH':
            keys[52].classList.add('press')
            break;
        
        case 'KeyJ':
            keys[53].classList.add('press')
            break;
        
        case 'KeyK':
            keys[54].classList.add('press')
            break;
        
        case 'KeyL':
            keys[55].classList.add('press')
            break;

        case 'Semicolon':
            keys[56].classList.add('press')
            break;
        
        case "Quote":
            keys[57].classList.add('press')
            break;
        
        case 'Enter':
            keys[58].classList.add('press')
            break;
        
        case 'Home':
            keys[59].classList.add('press')
            break;
        
        case 'ShiftLeft':
            keys[60].classList.add('press')
            break;
        
        case 'KeyZ':
            keys[61].classList.add('press')
            break;
        
        case 'KeyX':
            keys[62].classList.add('press')
            break;
        
        case 'KeyC':
            keys[63].classList.add('press')
            break;
        
        case 'KeyV':
            keys[64].classList.add('press')
            break;
        
        case 'KeyB':
            keys[65].classList.add('press')
            break;
        
        case 'KeyN':
            keys[66].classList.add('press')
            break;
        
        case 'KeyM':
            keys[67].classList.add('press')
            break;
        

        case 'Comma':
            keys[68].classList.add('press')
            break;
        
        case 'Period':
            keys[69].classList.add('press')
            break;
        
        case 'Slash':
            keys[70].classList.add('press')
            break;
        
        case 'ShiftRight':
            keys[71].classList.add('press')
            break;
        
        case 'ArrowUp':
            keys[72].classList.add('press')
            break;
        
        case 'End':
            keys[73].classList.add('press')
            break;
        
        case 'ControlLeft':
            keys[74].classList.add('press')
            break;
        
        case 'MetaLeft':
            keys[75].classList.add('press')
            break;
        
        case 'AltLeft':
            keys[76].classList.add('press')
            break;
        
        case 'Space':
            keys[77].classList.add('press')
            break;
        
        case 'AltRight':
            keys[78].classList.add('press')
            break;
        
        case 'Fn':
            keys[79].classList.add('press')
            break;
        
        case 'ControlRight':
            keys[80].classList.add('press')
            break;
        
        case 'ArrowLeft':
            keys[81].classList.add('press')
            break;
        
        case 'ArrowDown':
            keys[82].classList.add('press')
            break;
        
        case 'ArrowRight':
            keys[83].classList.add('press')
            break;
        
        default:
            break;
    }
})

///// ************** /////
// keyup Effects
document.addEventListener('keyup', (e)=>{
    myKey = e.code
    // on keyboard Effects
    switch (myKey) {
        case 'Escape':
            keys[0].classList.remove('press')
            break;
        case 'F1':
            keys[1].classList.remove('press')
            break;
        
        case 'F2':
            keys[2].classList.remove('press')
            break;
        
        case 'F3':
            keys[3].classList.remove('press')
            break;
        
        case 'F4':
            keys[4].classList.remove('press')
            break;
        
        case 'F5':
            keys[5].classList.remove('press')
            break;
        
        case 'F6':
            keys[6].classList.remove('press')
            break;
        
        case 'F7':
            keys[7].classList.remove('press')
            break;
        
        case 'F8':
            keys[8].classList.remove('press')
            break;
        
        case 'F9':
            keys[9].classList.remove('press')
            break;
        
        case 'F10':
            keys[10].classList.remove('press')
            break;
        
        case 'F11':
            keys[11].classList.remove('press')
            break;
        
        case 'F12':
            keys[12].classList.remove('press')
            break;
        
        case 'PrintScreen':
            keys[13].classList.remove('press')
            // console.log(keys[13].innerHTML);
            break;
        
        case 'Delete':
            keys[14].classList.remove('press')
            break;
        
        case 'Lamp':
            keys[15].classList.remove('press')
            break;
        
        case '`':
            keys[16].classList.remove('press')
            break;
        
        case 'Digit1':
            keys[17].classList.remove('press')
            break;
        
        case 'Digit2':
            keys[18].classList.remove('press')
            break;
        
        case 'Digit3':
            keys[19].classList.remove('press')
            break;
        
        case 'Digit4':
            keys[20].classList.remove('press')
            break;
        
        case 'Digit5':
            keys[21].classList.remove('press')
            break;
        
        case 'Digit6':
            keys[22].classList.remove('press')
            break;
        
        case 'Digit7':
            keys[23].classList.remove('press')
            break;
        
        case 'Digit8':
            keys[24].classList.remove('press')
            break;
        
        case 'Digit9':
            keys[25].classList.remove('press')
            break;
        
        case 'Digit0':
            keys[26].classList.remove('press')
            break;
        
        case 'Minus':
            keys[27].classList.remove('press')
            break;
        
        case 'Equal':
            keys[28].classList.remove('press')
            break;
        
        case 'Backspace':
            keys[29].classList.remove('press')
            break;
        
        case 'PageUp':
            keys[30].classList.remove('press')
            break;
        
        case 'Tab':
            keys[31].classList.remove('press')
            break;
        
        case 'KeyQ':
            keys[32].classList.remove('press')
            break;
        
        case 'KeyW':
            keys[33].classList.remove('press')
            break;
        
        case 'KeyE':
            keys[34].classList.remove('press')
            break;
        
        case 'KeyR':
            keys[35].classList.remove('press')
            break;
        
        case 'KeyT':
            keys[36].classList.remove('press')
            break;
        
        case 'KeyY':
            keys[37].classList.remove('press')
            break;
        
        case 'KeyU':
            keys[38].classList.remove('press')
            break;
        
        case 'KeyI':
            keys[39].classList.remove('press')
            break;
        
        case 'KeyO':
            keys[40].classList.remove('press')
            break;
        
        case 'KeyP':
            keys[41].classList.remove('press')
            break;
        // *#*#*#

        case 'BracketLeft':
            keys[42].classList.remove('press')
            break;
        
        case 'BracketRight':
            keys[43].classList.remove('press')
            break;
        
        case "Backslash":
            keys[44].classList.remove('press')
            break;
        
        case 'PageDown':
            keys[45].classList.remove('press')
            break;
        
        case 'CapsLock':
            keys[46].classList.remove('press')
            break;
        
        case 'KeyA':
            keys[47].classList.remove('press')
            break;
        
        case 'KeyS':
            keys[48].classList.remove('press')
            break;
        
        case 'KeyD':
            keys[49].classList.remove('press')
            break;
        
        case 'KeyF':
            keys[50].classList.remove('press')
            break;
        
        case 'KeyG':
            keys[51].classList.remove('press')
            break;
        
        case 'KeyH':
            keys[52].classList.remove('press')
            break;
        
        case 'KeyJ':
            keys[53].classList.remove('press')
            break;
        
        case 'KeyK':
            keys[54].classList.remove('press')
            break;
        
        case 'KeyL':
            keys[55].classList.remove('press')
            break;

        case 'Semicolon':
            keys[56].classList.remove('press')
            break;
        
        case "Quote":
            keys[57].classList.remove('press')
            break;
        
        case 'Enter':
            keys[58].classList.remove('press')
            break;
        
        case 'Home':
            keys[59].classList.remove('press')
            break;
        
        case 'ShiftLeft':
            keys[60].classList.remove('press')
            break;
        
        case 'KeyZ':
            keys[61].classList.remove('press')
            break;
        
        case 'KeyX':
            keys[62].classList.remove('press')
            break;
        
        case 'KeyC':
            keys[63].classList.remove('press')
            break;
        
        case 'KeyV':
            keys[64].classList.remove('press')
            break;
        
        case 'KeyB':
            keys[65].classList.remove('press')
            break;
        
        case 'KeyN':
            keys[66].classList.remove('press')
            break;
        
        case 'KeyM':
            keys[67].classList.remove('press')
            break;
        

        case 'Comma':
            keys[68].classList.remove('press')
            break;
        
        case 'Period':
            keys[69].classList.remove('press')
            break;
        
        case 'Slash':
            keys[70].classList.remove('press')
            break;
        
        case 'ShiftRight':
            keys[71].classList.remove('press')
            break;
        
        case 'ArrowUp':
            keys[72].classList.remove('press')
            break;
        
        case 'End':
            keys[73].classList.remove('press')
            break;
        
        case 'ControlLeft':
            keys[74].classList.remove('press')
            break;
        
        case 'MetaLeft':
            keys[75].classList.remove('press')
            break;
        
        case 'AltLeft':
            keys[76].classList.remove('press')
            break;
        
        case 'Space':
            keys[77].classList.remove('press')
            break;
        
        case 'AltRight':
            keys[78].classList.remove('press')
            break;
        
        case 'Fn':
            keys[79].classList.remove('press')
            break;
        
        case 'ControlRight':
            keys[80].classList.remove('press')
            break;
        
        case 'ArrowLeft':
            keys[81].classList.remove('press')
            break;
        
        case 'ArrowDown':
            keys[82].classList.remove('press')
            break;
        
        case 'ArrowRight':
            keys[83].classList.remove('press')
            break;
        
        default:
            break;
    }
})


const hammer = document.querySelector('.hammer')
monitor.addEventListener('mousemove', (e) =>{
        hammer.style.display = 'flex'
        hammer.style.left = e.offsetX + 'px'
        hammer.style.top = e.offsetY + 'px'
        console.log(`mx = ${mx} my = ${my}`);
    })

monitor.addEventListener('mouseup', ()=> {
    hammer.style.transform = 'translate(-5%, -50%)rotate(5deg)'
})
monitor.addEventListener('mouseleave', ()=> {
    hammer.style.display = 'none'
})
// monitor effect
monitor.addEventListener('mousedown', (e)=> {
    setTimeout(()=>{
        hammer.style.transform = 'translate(-5%, -50%)rotate(0deg)'
    },100)
    let x
    let y
    //<img class="crack" src="img/crack.png" alt="">
    x = (e.offsetX)
    y = (e.offsetY)

    createImage(x, y)
    createImage(x, y)
    createImage(x, y)
    createImage(x, y)
    inp.setAttribute('disabled', 'disabled')
    txt.style.color = 'red'
    txt.innerHTML = 'Error'
})

function createImage(x,y){
    myCrack = document.createElement('img')
    myCrack.classList.add('crack')
    monitor.appendChild(myCrack)
    myCrack.setAttribute('src', 'img/crack.png')
    console.log("X : " , x, "Y : ", y);
    myCrack.style.userSelect = 'none'
    myCrack.style.left = x + 'px'
    myCrack.style.top = y + 'px'
    myCrack.style.transform = 'translate(-50%, -50%)'
    myCrack.classList.add("cracking")
}



const activeCrack = new Set();

function playCrackSound(event) {
    const key = event.key;

    if (!activeCrack.has(key)) {    
        activeCrack.add(key)

        let clickKey2 = new Audio(switchUrl)
        clickKey2.currentTime = 0

        clickKey2.volume =  (Math.random() * 0.4) + 0.3
        clickKey2.play()

        const handleKeyUp = (keyupEvent) => {
            if (keyupEvent.key === key) {
                activeCrack.delete(key)
                window.removeEventListener('keyup', handleKeyUp)
            }
        };
        window.addEventListener('keyup', handleKeyUp)
    }
}
