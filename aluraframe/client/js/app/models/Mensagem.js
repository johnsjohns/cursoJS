class Mensagem {

    constructor(texto) {

        this._texto = texto || ''; //  Se texto for undefined, vai passar ''
    }

    get texto() {

        return this._texto;
    }

    set texto(texto) {

        this._texto = texto;
    }
}