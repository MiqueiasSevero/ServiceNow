var ViaCepIntegrationAjax = Class.create();
ViaCepIntegrationAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    _realizarRequisicao: function() {
        var baseUrl = 'https://viacep.com.br/ws/';
        var cep = this.getParameter('sysparm_cep');

        var request = new sn_ws.RESTMessageV2();
        request.setHttpMethod('get');
        request.setEndpoint(baseUrl + cep + '/json');
        var response = request.execute();
        var httpResponseStatus = response.getStatusCode();
        var body = JSON.parse(response.getBody());

        return {
            httpResponseStatus: httpResponseStatus,
            body: body
        };
    },

    buscarRua: function() {
        var resposta = this._realizarRequisicao();

        if (resposta.httpResponseStatus == 200) {
            return resposta.body.logradouro;
        }

    },
    buscarBairro: function() {
        var resposta = this._realizarRequisicao();

        if (resposta.httpResponseStatus == 200) {
            return resposta.body.bairro;
        }

    },
    buscarLocalidade: function() {
        var resposta = this._realizarRequisicao();

        if (resposta.httpResponseStatus == 200) {
            return resposta.body.localidade;
        }

    },
    buscarUf: function() {
        var resposta = this._realizarRequisicao();

        if (resposta.httpResponseStatus == 200) {
            return resposta.body.uf;
        }

    },
    buscarComplemento: function() {
        var resposta = this._realizarRequisicao();

        if (resposta.httpResponseStatus == 200) {
            return resposta.body.complemento;
        }

    },


    type: 'ViaCepIntegrationAjax'
});
