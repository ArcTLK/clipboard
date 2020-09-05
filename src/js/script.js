var expand=document.getElementsByClassName("expand");

var i;

for(i=0;i<expand.length;i++){
    expand[i].addEventListener("click",function(){
        this.classList.toggle("activate");
        var content=this.nextElementSibling;
        if(content.style.display==="block"){
            content.style.display="none";
        }
        else{
            content.style.display="block";
        }
    })
}

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
                console.error(error);
            });
        },
        onAddClipText() {
            axios.post(apiUrl + '/clipboard', {
                type: 'text',
                content: this.newClip.content
            }).then(response => {
                this.clips.push(response.data);
                $('#modal').modal('hide');
            }).catch(error => {
                console.error(error);
            });
        },
        onClickCard(item) {
            item.editing = true;
        },
        onCloseCard(item) {
            item.editing = false;
        }
    };
}