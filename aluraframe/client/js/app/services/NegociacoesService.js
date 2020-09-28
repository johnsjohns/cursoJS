class NegociacoesService{
    
    constructor() {

        this._http = new HttpService();
    
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possivel oter as negociações da semana 1')
                })
        });
    }

    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possivel oter as negociações da semana anterior')
                })
        });
    }

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possivel oter as negociações da semana retrasada ')
                })
        });
    }


    
}