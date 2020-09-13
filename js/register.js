function onRegister() {
    const email = $('#exampleInputEmail1').val();
    const name = $('#exampleInputName').val();
    const password = $('#exampleInputPassword1').val();
    const confirmPassword = $('#exampleConfirmPassword').val();

    if (password !== confirmPassword) {        
        toastr.error('The entered passwords do not match!');
        return;
    }
    axios.post(apiUrl + '/user/register', {
        name,
        password,
        email
    }).then(response => {
        sessionStorage.setItem('access-token', response.data.accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        location.href = '/dashboard.html';
    }).catch(error => {
        toastr.error(error.response.data);
    });
}