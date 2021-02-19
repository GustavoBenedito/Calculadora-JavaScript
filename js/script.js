function calcular(tipo, valor){
    if(tipo === 'acao'){
        //botao clear
        if(valor === 'c'){
            //limpar o visor
            document.getElementById('resultado').value = ""
        }

        if(valor ==='+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

        if(valor === "="){
            var resultado = eval(document.getElementById('resultado').value) 
            document.getElementById('resultado').value = resultado

            if(resultado === 666){
                document.getElementById('resultado').value = "vai simbora satanas"
            }
        }
    }
    
    
    
    else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }
}