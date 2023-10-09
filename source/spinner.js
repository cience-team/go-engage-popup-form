const loadingScreen = document.getElementById('loadingScreen');

if(loadingScreen) {
    loadingScreen.addEventListener('transitionend', function() {
        if (loadingScreen.style.opacity === '0') {
            loadingScreen.style.display = 'none';
        }
    });
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
    }, 500);
}