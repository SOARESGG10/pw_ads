    
    //Função calcularMedia para calcular os valores das notas informadas.

    function calcularMedia(){

        let notas = 2;

        let nota1 = parseFloat(document.getElementById('nota1').value);
        let nota2 = parseFloat(document.getElementById('nota2').value);

        media = (nota1 + nota2)/notas;

        document.getElementById('confirmacao').innerHTML = ('Operação concluída com sucesso!');
        document.getElementById('info-media').innerHTML = (media + ' PONTOS');

        sistemaMedia(media)
    }

    /*
     Função média para informar ao usuários se ele está
     APROVADO OU REPROVADO
    */
    

    function sistemaMedia(media){

        if (media >= 6){
            situacao = 'APROVADO(A)';
            document.getElementById('info-situacao').style.color = 'blue';
            document.getElementById('info-situacao').style.fontWeight = 'bold';
        }
        else if(media < 6 && media >= 0){
            situacao = 'REPROVADO(A)';
            document.getElementById('info-situacao').style.color = 'red';
            document.getElementById('info-situacao').style.fontWeight = 'bold';
        }
        else{
            situacao = 'Situação não calculada';
        }

        document.getElementById('info-situacao').innerHTML = (situacao);
    }






