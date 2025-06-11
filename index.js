async function loadGitHubProfile() {
    try {
        const response = await fetch('https://api.github.com/users/lujke-dunn');
        const data = await response.json();
        document.getElementById('profile-pic').src = data.avatar_url;
    } catch (error) {
        console.error('Error loading GitHub profile:', error);
        document.getElementById('profile-pic').src = 'https://github.com/lujke-dunn.png';
    }
}

window.addEventListener('load', loadGitHubProfile);

function showPage(pageId, element) {
    
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
        document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    
    document.getElementById(pageId).classList.add('active');
    
    element.classList.add('active');
}