function mult (str: string) {
    num_str = str.split("*")
    answer = convertToText(parseFloat(num_str[0]) * parseFloat(num_str[1]))
}
function div (str: string) {
    num_str = str.split("/")
    answer = convertToText(parseFloat(num_str[0]) / parseFloat(num_str[1]))
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Square)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    line = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    answer = "?"
    if (line.includes("+")) {
        add(line)
    } else if (line.includes("-")) {
        sub(line)
    } else if (line.includes("*")) {
        mult(line)
    } else if (line.includes("/")) {
        div(line)
    }
    bluetooth.uartWriteLine(answer)
})
function add (str: string) {
    num_str = str.split("+")
    answer = convertToText(parseFloat(num_str[0]) + parseFloat(num_str[1]))
}
function sub (str: string) {
    num_str = str.split("-")
    answer = convertToText(parseFloat(num_str[0]) - parseFloat(num_str[1]))
}
let line = ""
let answer = ""
let num_str: string[] = []
basic.showIcon(IconNames.Heart)
bluetooth.startUartService()
