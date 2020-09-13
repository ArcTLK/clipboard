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

function data() {
    return {
        clips: [],
        newClip: {
            content: ''
        },
        mode: 'text',
        getClips() {
            axios.get(apiUrl + '/clipboard').then(response => {
                this.clips = response.data;
            }).catch(error => {
                toastr.error(error.response.data);
            });
        },
        onAddClipText() {
            axios.post(apiUrl + '/clipboard', {
                type: 'text',
                content: this.newClip.content
            }).then(response => {
                this.clips.push(response.data);
                $('#modal').modal('hide');
                toastr.success('New clip added!');
            }).catch(error => {
                toastr.error(error.response.data);
            });
        },
        onClickCard(event, item) {
            item.editing = true;
            item.oldContent = item.content;
            setTimeout(() => $(event.target).children('textarea').focus() && $(event.target).siblings('textarea').focus(), 10);
        },
        onCloseCard(event, item) {
            event.stopPropagation();
            item.content = item.oldContent;
            item.editing = false;
        },
        onSaveCard(event, item) {
            event.stopPropagation();
            axios.put(apiUrl + `/clipboard/${item.id}`, {
                content: item.content
            }).then(response => {
                item.editing = false;
                toastr.success('Clip updated!');
            }).catch(error => {
                toastr.error(error.response.data);
            });
        }
    };
}