const data_agents = []

function addAgent() {
    const i = data_agents.length;
    const agent = {}

    // Obtém referência do formulário
    const form = document.querySelector('#formAgent')
    // Obtém o valor dos campos de entrada
    const input_nome = form.querySelector('input[name="nome"]')
    agent.nome = input_nome
    const input_regional = form.querySelector('select[name="regional"]')
    agent.regional = input_regional
    const id = i+1;

    agent.id = id



    // TABELA
    // Obtém referência da tabela
    const table = document.querySelector('#table_agent');
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
    const col_regional = document.createElement('td')
    col_regional.textContent = input_regional.value 
    line.appendChild(col_id);
    line.appendChild(col_nome);
    line.appendChild(col_regional)
    // Adiciona o elemento <tr> ao elemento <table>
    table.appendChild(line);
    data_agents.push(agent)



    // SELECT
    // Obtém referência do select
    const select = document.querySelector('#select_agent');
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