<h1>&lt;Input&gt;</h1>

<h2>O que significa input?</h2>

<p>&emsp;Input é uma palavra do <i>inglês</i> que significa <strong>entrada</strong>.</p>

<h2>Quando devo usar a tag input?</h2>

<p>&emsp;A tag input - <code>&lt;input&gt;</code> - é usada quando precisamos que <strong>o usuário entre com alguma informação</strong>: nome, e-mail, data, fotos e etc... Normalmente usadas dentro da tag &lt;form&gt;</p>

<h2>O que devo ficar atento?</h2>

<p>&emsp;Caso o input não seja de texto, <strong>devo usar o atributo type</strong>.</p>

<h2>Anatomia de uma entrada de usuário</h2>

<img src="anatomia.png">

<h2>Input de texto</h2>

<code>&lt;input type="text" placeholder="Nome"&gt;</code>

<code>&lt;input type="password" placeholder="Senha"&gt;</code>

<code>&lt;input type="email" placeholder="E-mail"&gt;</code>

<code>&lt;input type="search" placeholder="Pesquisar"&gt;</code>

<h2>Input de número</h2>

<code>&lt;input type="range" min="0" max="100" step="10"&gt;</code>

<code>&lt;input type="number" placeholder="Idade"&gt;</code>

<code>&lt;input type="tel" placeholder="Fone"&gt;</code>


<h2>Input de data</h2>

<code>&lt;input type="datetime-local"&gt;</code>

<code>&lt;input type="date"&gt;</code>

<code>&lt;input type="month"&gt;</code>

<code>&lt;input type="time"&gt;</code>

<code>&lt;input type="week"&gt;</code>

<h2>Input de cor</h2>

<code>&lt;input type="color"&gt;</code>

<h2>Input booleano (sim ou não)</h2>

<code>
    &lt;input type="checkbox" name="musica" value="funk"&gt; Funk</code>
<code>
    &lt;input type="checkbox" name="musica" value="pagode"&gt; Pagode
</code>

<code>
    &lt;input type="radio" name="sexo" value="feminino"&gt;
</code>
<code>
    &lt;input type="radio" name="sexo" value="masculino"&gt;
</code>

<h2>Input de arquivo</h2>

<code>&lt;input type="file" accept=".jpg,.jpeg,.gif"&gt;</code>

<h2>Input de botão</h2>

<code>&lt;input type="reset"&gt;</code>

<code>&lt;input type="button"&gt;</code>

<code>&lt;input type="submit"&gt;</code>

<h2>Input de opções</h2>
<code>
&lt;input type="text" placeholder="Mc de sua preferência" list="mcs"&gt;<br>
&lt;datalist id="mcs"&gt;<br>
&emsp;&emsp;&lt;option value="Mc Hariel"&gt;<br>
&emsp;&emsp;&lt;option value="Mc Paiva"&gt;<br>
&emsp;&emsp;&lt;option value="Mc Ryan SP"&gt;<br>
&lt;/datalist&gt;
</code>

<h2>Aprofundando o assunto</h2>
<p>&emsp;Você reparou que devemos informar o <i>type</i> ao computador? Isso pode soar estranho e desnessário ao primeiro momento, mas isso é fruto de uma super habilidade que nós possuimos e o computador não: reconhecer o sentido das informações pelo contexto. <br />&emsp;Cada informação é lida de um jeito. Nós, seres humanos, lemos informações de tipos diferentes automaticamente. Por exemplo, se eu te disser <strong>"Eu sou de 96"</strong>, você é plenamente capaz de <i>ler</i> e entender que "Eu sou de" é um texto e "96" se refere à abreviação do ano de 1996. O mesmo não acontece com um computador, por isso devemos informar o tipo de informação para que ele saiba ler corretamente.</p>

<h2>Atividade de fixação</h2>
<p>&emsp;Bora fazer um projeto para ver se você entendeu? O objetivo é replicar este <a href="fixacao.html">projeto</a>.</p>
