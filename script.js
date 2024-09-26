// Seleciona todos os botões com a classe "comprar"
const botoesComprar = document.querySelectorAll('.comprar');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        // Define o número de telefone e a mensagem
        const numeroTelefone = '5511987654321'; // Substitua pelo seu número de telefone no formato internacional (código do país + número)
        const mensagem = encodeURIComponent('Olá! Gostaria de saber mais sobre o produto.'); // Mensagem pré-definida

        // Cria o link do WhatsApp
        const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;

        // Redireciona para o link do WhatsApp
        window.location.href = linkWhatsApp;
    });
});
