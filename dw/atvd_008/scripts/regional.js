const data_regionals = []

function addRegional() {
    const i = data_regionals.length;
    const regional = {}

    // Obtém referência do formulário
    const form = document.querySelector('#formRegional')
    // Obtém o valor dos campos de entrada
    const input_nome = form.querySelector('input[name="sigla"]')
    regional.sigla = input_nome
    const input_nome_cidade = form.querySelector('input[name="cidade"]')
    regional.cidade = input_nome_cidade
    const id = i+1;

    regional.id = id



    // TABELA
    // Obtém referência da tabela
    const table = document.querySelector('#table_regional');
    // Cria um elemento <tr>
    const line = document.createElement('tr')
    // Cria um elemento <td>
    const col_id = document.createElement('td')
    // Insere o conteúdo que será exigido pelo <td>   
    col_id.textContent = id
    const col_nome = document.createElement('td') 
    // Insere o conteúdo que será exigido pelo <td>     
    col_nome.textContent = input_nome.value
    // Adiciona os elementos <td> ao elemento <tr>
    const col_nome_cidade = document.createElement('td')
    col_nome_cidade.textContent = input_nome_cidade.value 

    
    line.appendChild(col_id);
    line.appendChild(col_nome);
    line.appendChild(col_nome_cidade)

    table.appendChild(line);
    data_regionals.push(regional)



    // SELECT
    // Obtém referência do select
    const select = document.querySelector('#select_regional');
    // Cria um elemento <option>
    const op = document.createElement("option");
    // Insere o conteúdo que será exigido pelo <option>     
    op.textContent = input_nome.value
    // Configura o valor que será retornado pelo <option> ao submeter o formuláro
    op.value = input_nome.value
    // Adiciona o elemento <option> ao elemento <select>
    select.appendChild(op)

    
    
    // RESET CAMPOS
    form .reset()
}