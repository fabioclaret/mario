//crio uma variavel que vai guardar a imagem do mario
const mario = document.querySelector('.mario')

//crio uma funcao seta (arrow function)
const jump = () => {
    //aqui ele vai adicionar a classe jump do css na imagem do mario fazendo ele pular
    mario.classList.add('jump');
    setTimeout(() => {
        //removo a classe para poder colocar novamente ao clicar qualquer tecla
        mario.classList.remove('jump');
    }, 500);
};

//ao precionar a tecla, chamo a funcao seta jump
document.addEventListener('keydown', jump)
