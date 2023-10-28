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
