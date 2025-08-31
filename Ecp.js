let rokuIp = "192.168.1.69"; // Replace with your Roku IP

export function setRokuHost(host) {
    rokuIp = host;
}

export function getRokuHost() {
    return rokuIp;
}


function buildECPRequest(command) {

    let commandFormatted = capitalizeFirstLetter(command);

    return fetch(`http://${rokuIp}:8060/keypress/${commandFormatted}`, { method: "POST" });
}

function capitalizeFirstLetter(str) {
    if (str.legth === 0) {
        return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const EcpNav = {
    home:       ()=> buildECPRequest("Home"),
    back:       ()=> buildECPRequest("Back"),
    up:         ()=> buildECPRequest("Up"),
    right:      ()=> buildECPRequest("Right"),
    down:       ()=> buildECPRequest("Down"),
    left:       ()=> buildECPRequest("Left"),
    select:     ()=> buildECPRequest("Select"),
}

export const EcpPlayback = {
    play:           ()=> buildECPRequest("Play"),
    rewind:         ()=> buildECPRequest("Rev"),
    fastForward:    ()=> buildECPRequest("Fwd"),
    instantReplay:  ()=> buildECPRequest("InstantReplay"),
}

export const EcpAppMenu = {
    info:     ()=> buildECPRequest("Info"),
    search:   ()=> buildECPRequest("Search"),
}

export const EcpVolume = {
    volumeUp:   ()=> buildECPRequest("VolumeUp"),
    volumeDown: ()=> buildECPRequest("VolumeDown"),
    mute:       ()=> buildECPRequest("VolumeMute"),
}

export const EcpSearch = {
    keyInput:   (ch)=> buildECPRequest(`Lit_${ch}`),
    Enter:      ()=> buildECPRequest("Enter"),
}

const Ecp = {setRokuHost, getRokuHost, EcpAppMenu, EcpNav, EcpPlayback, EcpSearch}
export default Ecp;