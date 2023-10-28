document.addEventListener("DOMContentLoaded", function () {
  // Selecione o elemento "Sobre Nós" pelo id
  const sobreNos = document.getElementById("sobre-nos");

  // Adicione um evento de clique ao elemento
  sobreNos.addEventListener("click", function (event) {
      event.preventDefault(); // Evita que o link redirecione para outra página
      const h3Noticias = document.getElementById("noticias"); // Selecione o h3
      h3Noticias.textContent = "A Escola Byington Junior é um lugar onde uma série de eventos acontecem, incluindo tanto aspectos positivos quanto desafiadores. Como você é um jovem talentoso, é importante que você tenha uma compreensão abrangente das situações que podem ocorrer em um ambiente escolar.Em Byington Junior, é comum encontrar uma mistura de experiências. Por um lado, há muitas coisas boas acontecendo. Os alunos têm a oportunidade de aprender, fazer novos amigos, explorar seus interesses e desenvolver habilidades valiosas. A educação é uma ferramenta poderosa, e Byington Junior oferece um ambiente propício para o crescimento intelectual.No entanto, como em qualquer escola, também podem surgir desafios. Isso inclui brigas entre alunos, que são situações que devem ser tratadas com sensibilidade e resolução pacífica. Além disso, as fofocas são um fenômeno comum em muitos ambientes escolares, mas é importante lembrar a importância da comunicação aberta e do respeito mútuo.O importante é que, como estudante inteligente e capaz, você pode fazer a diferença. Você pode ser um modelo positivo, promovendo a empatia, a tolerância e a busca pelo conhecimento. É essencial reconhecer que em qualquer escola, há uma oportunidade para crescer e aprender, tanto academicamente quanto pessoalmente."; // Atualize o texto do h3
  });
});


document.addEventListener("DOMContentLoaded", function () {

  const ultima_noticia = document.getElementById("ult_noticia");

  ultima_noticia.addEventListener("click", function (event){
    event.preventDefault();
    const h3Noticias = document.getElementById("noticias");
    h3Noticias.textContent = "Tem prova, vai estudar rapaz";
  })
});


document.addEventListener("DOMContentLoaded", function () {
  // Detecta o tipo de dispositivo (celular, tablet, etc.)
  const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Verifica se é um dispositivo móvel
  if (isMobileDevice) {
    // Exibe um alerta sugerindo que o usuário altere para o modo de computador
    alert("recomendamos usar o site no modo de computador para obter a melhor experiência.");
  }
});
