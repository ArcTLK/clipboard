const apiUrl = 'http://localhost:3000';


function onLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    axios({
        method: 'post',
        url: apiUrl + '/user/login',
        headers: {
            Authorization: `Basic ${btoa(email + ':' + password)}`
        }
    }).then(response => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
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