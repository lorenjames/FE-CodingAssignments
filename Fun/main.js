gsap.config({ trialWarn: false });
console.clear()
gsap.set('#mainSVG', {
    visibility: 'visible'
})
let allParticles = gsap.utils.toArray('#pContainer path'),
    colorArray = ['#FFF8EF', '#FFB156', '#F1CB5E', '#D16A09']

function createSparks() {
    console.log('sparks')
    let xPos = gsap.utils.random(190, 240)
    gsap.set(allParticles, {
        x: xPos,
        y: gsap.utils.random(260, 310),
        scale: 'random(0.1, 2)',
        transformOrigin: '50% 50%',
        fill: gsap.utils.wrap(colorArray)
    })
    //return;
    let angle = xPos > 190 + (240 - 190) / 2 ? 'random(-45,45)' : 'random(-135,-90)'
    //console.log(xPos, angle)
    gsap.to(allParticles, {
        duration: 'random(0.5, 3)',
        physics2D: {
            gravity: 400,
            velocity: 'random(6, 180)',
            angle: angle
        },
        ease: 'expo',
        fill: '#FFF',
        scale: 0
    })

}

//createSparks()
let count = 0;
function flash() {

    gsap.set('.anger', {
        opacity: gsap.utils.random(0.7, 1)
    })
    count++;
    if (count % 12) return;

    let n = gsap.utils.random(0, 1);
    gsap.set('.letterD', {
        opacity: n > 0.75 ? gsap.utils.random(0, 0.7) : 0
    })

    if (count % 22) return;
    if (gsap.utils.random(0, 1) > 0.5) return;
    createSparks()
}

gsap.ticker.add(flash);
//gsap.ticker.fps(24)