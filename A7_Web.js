/*O objetivo deste script é criar um array que deve armazenar informações de três times de seus esportes preferidos, 
exibindo essas informações na página. As informações que devem compor os elementos da lista são:

Tipo de modalidade do time. Por exemplo: Basquete, Futebol, Vôlei.
Nome do time. Por exemplo: Lakers, São Paulo, Nestlé.
A quantidade de jogadores do time. Por exemplo: 6, 12, 6.
Cor predominante do time. Por exemplo: dourado, vermelho, azul.
Mostrar na página web:

O array (com todas as informações).
Escolha uma cor predominante (if) e mostre:
✔ a modalidade;
✔ o time;
✔ a quantidade de jogadores;
✔ a imagem do Brasão.

Atenção! Não serão aceitas propriedades aplicadas em HTML5. A partir de agora, somente em CSS. Apesar disso, 
não delete seus arquivos. Eles serão utilizados ao longo de todas as aulas.

Lembre-se de manter salva todas as suas páginas HTML, pois elas serão necessárias para 
as postagens de atividades durante toda a disciplina.*/
// Declaração do array
const times = [
    {
      modalide: "Basquete",
      time: "Lakers",
      jogadores: 6,
      cor: "Dourado",
    },
    {
      modalide: "Futebol",
      time: "Corinthians",
      jogadores: 12,
      cor: "Vermelho",
    },
    {
      modalide: "Vôlei",
      time: "Nestlé",
      jogadores: 6,
      cor: "Azul",
    },
  ];
  
  const timeInfo = (
    <div key={Basquete.time}>
      <h2>{timePredominante.modalide}</h2>
      <h3>{timePredominante.time}</h3>
      <p>{timePredominante.jogadores} jogadores</p>
      <img src={timePredominante.imagem} alt={timePredominante.time} />
    </div>
  );
  
  // Renderiza o HTML
  document.write("#container")= times;
  document.write("#time")= timeInfo;
  
