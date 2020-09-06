function onLogin() {
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    axios({
        method: 'post',
        url: apiUrl + '/user/login',
        headers: {
            Authorization: `Basic ${btoa(email + ':' + password)}`
        }
    }).then(response => {
        sessionStorage.setItem('access-token', response.data.accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        location.href = '/dashboard.html';
    }).catch(error => {
        toastr.error(error.response.data);
    });
}