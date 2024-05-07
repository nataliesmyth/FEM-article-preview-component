const shareButton = document.getElementById('shareBtn');
const shareButtonDark = document.getElementById('shareBtnDark')
const label = document.getElementById('author');
const shareContainer = document.getElementById('shareContainer');
const shareActive = document.getElementById('shareActive');
const socials = document.getElementById('socialLinks');
const arrow = document.getElementById('arrow')

// const currentWidth = 
console.log('innerWidth', innerWidth);
let currentWidth = window.innerWidth;
function updateWidth() {
    currentWidth = window.innerWidth;
    console.log(currentWidth)
}

function updateDisplay() {
    if (currentWidth < 730) {
        console.log('mobile view')
    } else {
        console.log('desktop view')
    }
}

function handleClick() {
    console.log('share button clicked!')
    console.log(innerWidth)
    shareActive.classList.remove('hidden')
    socials.classList.remove('hidden');
    // shareButton.classList.add('share-btn-dark');
    shareButtonDark.classList.remove('hidden')
    if (currentWidth < 730) {
        shareContainer.classList.add('hidden');
        shareContainer.style.background = '#48556A';
        shareButtonDark.classList.remove('hidden')
    } 
    // else {
        
        // }
        if (currentWidth >= 730) {
            shareActive.style.borderRadius = '10px';
            arrow.classList.remove('hidden');
            shareButton.classList.add('hidden')

        }
        console.log(socials)
}
console.log(shareActive.classList.contains('hidden'))

shareButton.addEventListener('click', handleClick)
window.addEventListener('resize', updateWidth)