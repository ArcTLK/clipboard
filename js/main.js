const accessToken = sessionStorage.getItem('access-token');

//window.apiUrl = 'http://localhost:3000';
window.apiUrl = 'https://clipboard-api-og.herokuapp.com';

if (accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    if (location.pathname === '/' || location.pathname === '/index.html') {
        location.href = '/dashboard.html';
    }
}

function onLogout() {
    sessionStorage.removeItem('access-token');
    location.href = '/';
}

toastr.options = {
    "progressBar": true,
    "positionClass": "toast-bottom-left",
};