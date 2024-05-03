const shareButton = document.getElementById('shareBtn');
const label = document.getElementById('author')
const shareContainer = document.getElementById('shareContainer')
const socials = document.getElementById('socialLinks')

function handleClick() {
    console.log('share button clicked!')
    label.classList.add('hidden')
    shareContainer.style.background = '#48556A';
    shareButton.style.background = '#6E8098';
    shareButton.classList.add('share-btn-dark');
    socials.classList.remove('hidden')
}

shareButton.addEventListener('click', handleClick)