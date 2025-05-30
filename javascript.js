let luz = true;

function acendeLuz() {

    if (luz == true) {
        luz = false;
        document.documentElement.style.setProperty('--fundo', 'rgb(29, 29, 29)');
        document.documentElement.style.setProperty('--fundo-cabecalho', '#ffffff');
        document.documentElement.style.setProperty('--letra', '#ffffff');
        document.documentElement.style.setProperty('--letra-cabecalho', 'black');
    } else {
        luz = true;
        document.documentElement.style.setProperty('--fundo', '#ffffff');
        document.documentElement.style.setProperty('--fundo-cabecalho', 'rgb(29, 29, 29)');
        document.documentElement.style.setProperty('--letra', 'black');
        document.documentElement.style.setProperty('--letra-cabecalho', '#ffffff');
    }
}