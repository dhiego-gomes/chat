function getRandomColor() {

    let defaultColors = [
        "00FFFF",// Aqua
        "0000FF",// blue
        "8A2BE2",// BlueViolet
        "A52A2A",// Brown
        "DEB887",// BurlyWood
        "5F9EA0",// CadetBlue
        "7FFF00",// Chartreuse
        "D2691E",// Chocolate
        "FF7F50",// Coral
        "6495ED",// CornflowerBlue
        "00008B",// DarkBlue
        "7FFFD4",// Aquamarine
        "008B8B",// DarkCyan
        "B8860B",// DarkGoldenRod
        "006400",// DarkGreen
        "8B008B",// DarkMagenta
        "556B2F",// DarkOliveGreen
        "FF8C00",// DarkOrange
        "9932CC",// DarkOrchid
        "8B0000",// DarkRed
        "E9967A",// DarkSalmon
        "8FBC8F",// DarkSeaGreen
        "483D8B",// DarkSlateBlue
        "2F4F4F",// DarkSlateGray
        "FF1493",// DeepPink
        "696969",// DimGray
        "228B22",// ForestGreen
        "FFD700",// Gold
        "DAA520",// GoldenRod
        "808080",// Gray
        "008000",// Green
        "00FF00",// Lime
        "FF00FF",// Magenta
        "800000",// Maroon
        "0000CD",// MediumBlue
        "3CB371",// MediumSeaGreen
        "191970",// MidnightBlue
        "808000",// Olive
        "FFA500",// Orange
        "800080",// Purple
        "BC8F8F",// RosyBrown
        "4169E1",// RoyalBlue
        "8B4513",// SaddleBrown
        "2E8B57",// SeaGreen
        "708090",// SlateGray
        "FFFF00",// Yellow
        "9ACD32",// YellowGreen
        "C96C69",// cinza escuro 4
        "CB0C33",// rosa muito escuro 25
        "363636",// Gray21
        "5D478B",// MediumPurple4
        "CD3278",// VioletRed3
        "8B2252",// VioletRed4
        "8B636C",// Pink4
        "8B7E66",// Wheat4
        "8B8B7A",// LightYellow4
        "00CD00",// Green3
        "FF6347",// Tomato
        "000000",// Black
        "8B795E",// NavajoWhite4
        "27408B",// RoyalBlue4
        "00688B",// DeepSkyBlue4
        "668B8B",// PaleTurquoise4
        "53868B",// CadetBlue4
        "8B814C",// LightGoldenrod4
        "8B4C39",// Salmon4
        "8B0A50",// DeepPink4
        "551A8B",// Purple4
        "A9A9A9",// DarkGray
        "CDB5CD",// Thistle3
        "9B30FF",// Purple1
        "FF3E96",// VioletRed1
        "FFA07A",// LightSalmon1
        "FFD39B",// Burlywood1
        "8B864E",// Khaki4
        "C0FF3E",// OliveDrab1
        "00F5FF",// Turquoise1
        "838B8B",// Azure4
        "8B7D6B",// Bisque4
        "FFDEAD",// NavajoWhite1
        "FF69B4",// HotPink
        "32CD32",// LimeGreen
        "00BFFF",// DeepSkyBlue
        "BEBEBE",// Gray
        "8B668B",// Plum4
        "8B4500",// DarkOrange4
        "8B5A2B",// Tan4
        "FF7F24",// Chocolate1
        "CDCDB4",// LightYellow3
        "CDBE70",// LightGoldenrod3
        "8B8B83",// Ivory4
        "8B7D7B",// MistyRose4
        "104E8B",// DodgerBlue4
        "7A8B8B",// LightCyan4
        "7AC5CD",// CadetBlue3
        "CDAD00",// Gold3
        "CD9B1D",// Goldenrod3
        "CD950C" // DarkGoldenrod3
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
    $('.messages').append(`<div class="${messageClass}"><strong style='color:${message.color}'> ${authorClass}</strong> ${message.message}</div>`)
}

function rolar() {
    var message = document.querySelector('.messages')
    message.scrollTop = message.scrollHeight
}