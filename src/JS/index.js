document.querySelector('#cartao').innerHTML =
`<div class="minhas-informacoes">
<img src="src/image/20211214_175806.jpg" alt="foto de perfil" />
<h1 class="nome">Johnata R. Santos</h1>
<h2 class="cargo">Desenvolvedor Frontend Júnior</h2>
</div>

<div class="conteudo">
<ul class="abas">
  <li class="aba selecionado"id="sobre-mim">
    <img src="src/image/sobre.gif" alt="ícone de sobre mim" />
  </li>
  <li class="aba" id="minhas-redes">
    <img src="src/image/coracao.gif" alt="ícone de redes sociais" />
  </li>
</ul>

<div class="informacoes-aba">
  <div class="informacao selecionado" id="informacao-sobre-mim">
    <h3 class="sub-titulo">Sobre</h3>

    <div class="descricao">
      <p>Oi! meu nome é Johnata Rodrigues dos Santos, seja bem-vindo(a)!</p>

      <p>
        Sou uma pessoa focada em me aprimorar, evoluir constantemente é uma das metas.
        Sempre tive vontade de trabalhar na área de <strong>Programação.</strong>
        Comecei a dar pequenos passos, estudando
        <span>HTML, CSS e JavaScript</span>. Gosto muito de café (Quase um vicio),
        adoro estudar, ler, academia, video games, animes e comida.
       <aside>Aprimorar e Evoluir!</aside>
      </p>
    </div>
  </div>

  <div class="informacao" id="informacao-minhas-redes">
    <h3 class="sub-titulo">Minhas redes</h3>

    <ul class="redes-sociais">
        <li>
            <a href="https://www.instagram.com/oh_johw/" target="_blank" class="instagram">Instagram</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/johnata-rodrigues-dos-santos-a8947814a/" target="_blank" class="linkedin">LinkedIn</a>
        </li>
        <li>
            <a href="https://github.com/OFabuloso" target="_blank" class="github">GitHub</a>
        </li>
    </ul>
  </div>

</div>
</div>`







const abas = document.querySelectorAll(".aba");
 abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.
    remove("selecionado");
    aba.classList.add("selecionado");
    
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoDaInformacaoDasAbas = "informacao-" + aba.id;

    const informacaoASerMostrada = document.getElementById(idDoElementoDaInformacaoDasAbas)
    informacaoASerMostrada.classList.add("selecionado")
}) 
});