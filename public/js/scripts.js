document.querySelector('.messages').addEventListener('scroll', function() { 
    console.log("ScrollTop: ", this.scrollTop);
    console.log("OffsetHeight: ", this.offsetHeight);
    console.log("ScrollHeight: ", this.scrollHeight);
    console.log("Total: ", this.scrollTop + this.offsetHeight);
    if ((this.scrollTop + this.offsetHeight) >= this.scrollHeight) {
        document.querySelector('#descer').style.display = 'none'
        console.log('final')
    } else {
        document.querySelector('#descer').style.display = 'inline'
    }
})

function showButton() {
    var input = document.querySelector('#message_content')
    if (input.value == '') {
        document.querySelector('#send').style.display = 'none'
    } else {
        document.querySelector('#send').style.display = 'inline'
    }
}
