const url = " http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";

function IsURL(url) {
    try {
        let urlValid = new URL(url);
        return urlValid;
    } catch (_) {
        return false;
    }
}

function GetDataFromURL(url) {
    const validURL = IsURL(url);
    if (validURL) {
        let data = {
            'host': validURL.host,
            'path': validURL.pathname,
            'params': validURL.searchParams
        }
        return data;
    } 
    else {
        return "ERROR!!!";
    }
}

console.log(GetDataFromURL(url));