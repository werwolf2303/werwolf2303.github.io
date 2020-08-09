function onLoad() {
    loader(false);
}
function loader(boolean) {
    var load = document.getElementById("load");
    if(boolean == true) {
        load.style.visibility = "visible";
    }else{
        load.style.visibility = "hidden";
    }
}
function error(string) {
    window.print(string);
}
function clearAll() {

}
function dateTime(string) {
    var d = new Date();
    var months = ["Januar", "Februar", "M&auml;rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    document.getElementById(string).innerHTML = months[d.getMonth()];
}
function ping(string) {
    var st = "unavailable";

    return st;
}