const data_subjects = []


function addSubject() {
    const i = data_subjects.length;
    const assunto = {}

    // Obtém referência do formulário
    const form = document.querySelector('#formSubject')
    // Obtém o valor dos campos de entrada
    const input_nome = form.querySelector('input[name="descricao"]')
    const id = i+1;

    assunto.nome = input_nome
    assunto.id = id



    // TABELA
    // Obtém referência da tabela
    const table = document.querySelector('#table_subject');
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
    line.appendChild(col_id);
    line.appendChild(col_nome);
    // Adiciona o elemento <tr> ao elemento <table>
    table.appendChild(line);
    data_subjects.push(assunto)


    // SELECT
    // Obtém referência do select
    const select = document.querySelector('#select_subject');
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