const url = new URL("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");

function GetDataFromURL(url) {
    return {
        'host': url.host, 
        'path': url.pathname,
        'params': url.searchParams
    }
}

console.log(GetDataFromURL(url));