function getRandomColor() {

    let defaultColors = [
        "0d6efd",
        "d63384",
        "dc3545",
        "fd7e14",
        "ffc107",
        "198754",
        "20c997",
        "0dcaf0",
        "fff",
        "0d6efd",
        "198754",
        "0dcaf0",
        "ffc107",
        "dc3545",
        "f8f9fa"
    ]

    return defaultColors[Math.floor(Math.random() * defaultColors.length)]
}

function requestPermission() {
    if (!("Notification" in window)) {
        console.log('Esse browser não suporta notificações desktop');
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                var notification = new Notification('Notificações ativadas!')
            }
        })
    }
}

function notify(message) {
    if (!document.hasFocus()) {
        Notification.requestPermission(function() {
            var notification = new Notification(message.author, {
                body: message.message
            })
        })
    }            
}

function renderMessage(message) {
    const messageClass = (message.id == socket.id) ? 'my_message' : 'message'
    const authorClass = (message.id == socket.id) ? '' : message.author
    $('.messages').append(`<p class="${messageClass}"><strong style='color:${message.color}'> ${authorClass}</strong> ${message.message}</p>`)
}

function rolar() {
    var messages = document.querySelector('.messages')
    messages.scrollTop = messages.scrollHeight
}

function autoRolar() {
    var descer = document.querySelector('#descer')
    if (descer.style.display != 'inline') {
        rolar()
    }
}