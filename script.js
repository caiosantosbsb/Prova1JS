class CalculadoraSalario {
    constructor() {
        this.salarios = [];
    }

    addSalario(salarioBruto, desconto, beneficios) {
        const salarioLiq = salarioBruto - desconto + beneficios;
        this.salarios.push({salarioBruto, desconto, beneficios, salarioLiq});
        this.atualizarLista();
    }

    getMaxSalario() {
        return Math.max(...this.salarios.map(s => s.salarioLiq), 0);
    }

    getTotalDescontos() {
        return this.salarios.reduce((total, current) => total + current.desconto, 0);
    }
    atualizarLista() {
        const listElement = document.getElementById('lista-salarios');
        listElement.innerHTML = ''; // Limpa a lista atual antes de adicionar os itens atualizados
        this.salarios.forEach((salary) => {
            const item = document.createElement('li');
            item.innerText = `R$${salary.salarioLiq.toFixed(2)}`;
            listElement.appendChild(item);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new CalculadoraSalario();
    const form = document.getElementById('formSalario');
    const maxSal1 = document.getElementById('maior-salario');
    const totalDesc1 = document.getElementById('total-descontos');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const salarioBruto = parseFloat(document.getElementById('gross-salary').value);
        const desconto = parseFloat(document.getElementById('desconto').value);
        const beneficios = parseFloat(document.getElementById('beneficios').value);

        calculator.addSalario(salarioBruto, desconto, beneficios);

        maxSal1.innerText = `Maior Salário: R$${calculator.getMaxSalario().toFixed(2)}`;
        totalDesc1.innerText = `Soma dos Descontos: R$${calculator.getTotalDescontos().toFixed(2)}`;
    });
});



    // Se os valores não forem válidos, exibe uma mensagem de erro
    document.getElementById('resultado').innerText = 'Por favor, insira numeros validos.';
    