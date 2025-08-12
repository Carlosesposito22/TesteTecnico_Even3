document.addEventListener('DOMContentLoaded', () => {
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const inscricaoForm = document.getElementById('inscricao-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const lista = document.getElementById('lista');
    const errorMessage = document.getElementById('error-message');

    const inscritos = [];

    inscricaoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();

        if (nome === '' || email === '') {
            errorMessage.textContent = 'Preencha todos os campos.';
            return; 
        }

        if (!emailRegex.test(email)) {
            errorMessage.textContent = 'Insira um formato de e-mail válido (ex: nome@dominio.com)';
            return;
        }

        errorMessage.textContent = '';

        const inscrito = {
            nome: nome,
            email: email
        };

        inscritos.push(inscrito);

        nomeInput.value = '';
        emailInput.value = '';

        renderizarLista();
    });

    function renderizarLista() {
        lista.innerHTML = '';

        if (inscritos.length === 0) {
            return;
        }

        const titulo = document.createElement('h2');
        titulo.textContent = `Participantes (${inscritos.length})`;
        titulo.className = 'border-bottom pb-2 mb-3';
        lista.appendChild(titulo);

        const ul = document.createElement('ul');
        ul.className = 'list-group'; 

        inscritos.forEach(inscrito => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';

            li.innerHTML = `
                <div>
                    <strong>${inscrito.nome}</strong><br>
                    <small class="text-muted">${inscrito.email}</small>
                </div>
            `;
            ul.appendChild(li);
        });

        lista.appendChild(ul);
    }
});