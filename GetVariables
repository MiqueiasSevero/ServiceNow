			try {
       
        		var Table = '';
            var grTask = new GlideRecord(Table);
            if (!grTask.isValid()) {
                throw new Error("Tabela '"+Table +"' não encontrada ou inválida.");
            }

            var query = "sys_id="+ SysID;
            gs.info("Executando query: " + query);
            grTask.addEncodedQuery(query);
            grTask.orderByDesc("sys_created_on");
            grTask.setLimit(1);
            grTask.query();


            if (grTask.next()) {
                gs.info("Registro encontradon na Tabela "+ Table +" para o registro: " + SysID);
                var variables = grTask.variables.getElements(); // Pega todas as variáveis do catálogo
                var arrAnswer = []; // Array para armazenar as variáveis

               
                for (var i = 0; i < variables.length; i++) {
                    var now_V = variables[i];

                    if (!now_V.isMultiRow()) { // Verifica se a variável não é multi-linha
                        var question = now_V.getQuestion();
                        var obj = {
                            question: question.getName().toString(), // Nome da variável
                            value: now_V.getValue(), // Valor da variável
                            isMultiRow: false
                        };
                        arrAnswer.push(obj); // Adiciona ao array de respostas
                    }
                }
              
                return JSON.stringify(arrAnswer);
            } else {
                gs.info("Nenhum registro encontrado para o usuário: " + user);
                return JSON.stringify([]);
            }
        } catch (err) {
            gs.error("Erro ao executar getFieldValue: " + err.message);
            return JSON.stringify({
                error: err.message
            });
        }
