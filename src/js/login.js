

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
        console.error(error);
    });
}

function dummyRequest() {
    axios.get(apiUrl + '/user/clipboard').then(data => {
        console.log(data);
        
    }).catch(error => {
        console.error(error);
    })
}

/* When uploading image
 * Include header:
    Content-Type: 'multipart/form-data'
    And use it like this
    const formdata = new FormData();
    formdata.append('key', 'value');
    // append a file like  this too
    axios({
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formdata
    })
 */