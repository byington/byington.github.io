 // Array com os textos que deseja exibir
var textos = ["Conceito",
"Uma unidade de conservação (UC) é um espaço territorial e/ou marinho, legalmente instituído pelo Poder Público, com objetivos de conservação e uso sustentável dos recursos naturais, que tem como objetivo proteger a biodiversidade e os recursos naturais, bem como promover o desenvolvimento sustentável.",
 "As UCs são divididas em dois grupos: UCs de proteção integral: Nessas áreas, é admitido apenas o uso indireto dos seus recursos naturais em atividades como pesquisa científica e turismo ecológico.UCs de uso sustentável: Nessas áreas, é permitido o uso direto dos recursos naturais, desde que de forma sustentável.",
  "No Brasil, as UCs são reguladas pela Lei nº 9.985/2000, que institui o Sistema Nacional de Unidades de Conservação (SNUC).Importância das unidades de conservaçãoAs UCs são fundamentais para a conservação da biodiversidade e dos recursos naturais. Elas contribuem para a manutenção da diversidade biológica, a proteção de espécies ameaçadas de extinção, a preservação dos ecossistemas e a provisão de serviços ambientais.",
  "Além disso, as UCs também podem promover o desenvolvimento sustentável, gerando emprego e renda para as populações locais.",
  "Alguns exemplos de unidades de conservação no Brasil são:Parques nacionais: Áreas protegidas com grande beleza cênica e relevância ecológica.Reservas biológicas: Áreas destinadas à preservação de espécies e ecossistemas.Reservas extrativistas: Áreas destinadas à exploração sustentável de recursos naturais.Áreas de proteção ambiental: Áreas destinadas à proteção de recursos naturais e culturais.",
  "Histórico",
  "Uma unidade de conservação (UC) histórica é uma área protegida que possui valor histórico, cultural ou arqueológico. Essas UCs são designadas para proteger e preservar o patrimônio cultural e natural do país.",
  "No Brasil, as UCs históricas são regulamentadas pelo Sistema Nacional de Unidades de Conservação da Natureza (SNUC), instituído pela Lei nº 9.985 de 18 de julho de 2000. O SNUC define as UCs históricas como áreas protegidas que possuem sítios de valor histórico, cultural ou arqueológico, tais como sítios arqueológicos, sítios paleontológicos, monumentos históricos, sítios arqueológicos subaquáticos, sítios históricos urbanos, sítios históricos rurais, sítios históricos religiosos e sítios históricos militares.",
  "As UCs históricas são divididas em duas categorias: Monumento Natural Histórico: área natural protegida com sítios de valor histórico, cultural ou arqueológico, que não pode ser alterada ou transformada.Área de Relevante Interesse Cultural (Aric): área que abriga sítios de valor histórico, cultural ou arqueológico, que pode ser alterada ou transformada, desde que sejam preservadas as características que conferem valor ao sítio.",
  "Alguns exemplos de UCs históricas no Brasil são:...",
  "Parque Nacional da Serra da Capivara: localizado no Piauí, abriga um dos maiores conjuntos de sítios arqueológicos da América Latina.Parque Nacional do Sítio Histórico de São Miguel das Missoes: localizado no Rio Grande do Sul, preserva a história das missões jesuíticas do século XVIII.Parque Nacional do Itatiaia: localizado no Rio de Janeiro, abriga o Pico das Agulhas Negras, um dos pontos mais altos do país.Parque Nacional da Serra do Cipó: localizado em Minas Gerais, abriga sítios arqueológicos pré-históricos.Parque Nacional do Guará: localizado no Distrito Federal, abriga sítios arqueológicos e paleontológicos.",
  "As UCs históricas são importantes para a preservação do patrimônio cultural e natural do país. Elas contribuem para a educação e a conscientização sobre a importância da conservação do meio ambiente.",
  "Parques Nacionais: São áreas com ecossistemas naturais de grande relevância ecológica e beleza cênica. Exemplos incluem o Parque Nacional da Tijuca, o Parque Nacional da Serra dos Órgãos e o Parque Nacional da Chapada dos Veadeiros.",
  " Existem diversas categorias de unidades de conservação, e as principais delas no Brasil incluem:",
  "Reservas Biológicas: São áreas destinadas à preservação integral da biodiversidade, sem interferência humana direta. Um exemplo é a Reserva Biológica do Tinguá.",
  "Estações Ecológicas: São áreas de preservação da natureza onde a pesquisa científica é prioritária. A Estação Ecológica de Taim, por exemplo, é uma importante unidade de conservação no Brasil.",
  "Áreas de Proteção Ambiental (APAs): São regiões onde atividades humanas são permitidas, desde que estejam de acordo com regras específicas para a proteção do ambiente. A APA de Cairuçu, em Paraty, é um exemplo.",
  "Florestas Nacionais: São áreas que têm como objetivo o uso sustentável dos recursos florestais, como a Floresta Nacional do Jamari, que permite a exploração controlada da madeira.",
  "Reservas Extrativistas: São áreas onde comunidades tradicionais podem extrair recursos naturais de forma sustentável. A Reserva Extrativista Chico Mendes é um exemplo notável.",
  "Monumentos Naturais: São áreas de preservação de elementos naturais raros e singulares, como o Monumento Natural das Árvores Fossilizadas do Tocantins.",
  "Reservas de Desenvolvimento Sustentável: São áreas onde a conservação da natureza se combina com o uso sustentável dos recursos naturais, como a Reserva de Desenvolvimento Sustentável Mamirauá."
  

];



var indiceAtual = 0; // Índice atual no array de textos


function mostrarProximo() {
    indiceAtual++;
    if (indiceAtual >= textos.length) {
      indiceAtual = 0; // Volta ao primeiro texto se chegar ao final
    }
    atualizarTexto();
  }
 
 

function mostrarAnterior() {
   indiceAtual--;
   if (indiceAtual < 0) {
     indiceAtual = textos.length - 1; // Volta ao último texto se estiver no primeiro
   }
   atualizarTexto();
 }


function atualizarTexto() {
    var h4Element = document.getElementById("textos");
    h4Element.textContent = textos[indiceAtual]; // Atualiza o texto
  }
