class NegociacoesService{
    obterNegociacoesDaSemana{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () =>{
            /*
            0: requisição não iniciada

            1: conexão com o servidor estabelecida

            2: requisição recebida

            4: requisição concluída e a resposta esta pronta
            */

            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    
                    JSON.parse(xhr.responseText).map(objeto  => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    ).forEach(negociacao => 
                        this._listaNegociacoes.adiciona(negociacao)
                        
                    );
                } else { 
                
            }
            }

        };
        xhr.send();
    }
}