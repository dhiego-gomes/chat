document.querySelector('.messages').addEventListener('scroll', function() { 
    if ((this.scrollTop + this.offsetHeight) > this.scrollHeight) {
        document.querySelector('#descer').style.display = 'none'
    } else {
        document.querySelector('#descer').style.display = 'inline'
    }
})