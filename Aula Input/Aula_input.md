<h1>&lt;Input&gt;</h1>
    
<div class="content">
<h2>O que significa input?</h2>
<p>&emsp;Input é uma palavra em <i>inglês</i> que significa <strong>entrada</strong>.</p>

<h2>Quando devo usar a tag input?</h2>
<p>&emsp;A tag input - <code>&lt;input&gt;</code> - é usada quando precisamos que <strong>o usuário entre com alguma informação</strong>: nome, e-mail, data, fotos e etc... Normalmente usadas dentro da tag &lt;form&gt;</p>

<h2>O que devo ficar atento?</h2>
<p>&emsp;Caso o input não seja de texto, <strong>devo usar o atributo type</strong>.</p>

<h2>Anatomia de uma entrada de usuário</h2>
<img src="anatomia_input.png">
</div>

<form action="" method="post">
<div>
<h2>Input de textos</h2>
<div class="demo">
<div class="code">
<code>&lt;input type="text" placeholder="Nome"&gt;</code> 
</div>
<input type="text" id="text" placeholder="Nome">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="password" placeholder="Senha"&gt;</code> 
</div>
<input type="password" id="password" placeholder="Senha">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="email" placeholder="E-mail"&gt;</code> 
</div>
<input type="email" id="email" placeholder="E-mail">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="search" placeholder="Pesquisar"&gt;</code> 
</div>
<input type="search" id="search" placeholder="Pesquisar">
</div>
</div>

<div>    
<h2>Input de números</h2>

<div class="demo">
<div class="code">
<code>&lt;input type="range" min="0" max="100" step="10"&gt;</code> 
</div>
<input type="range" min="0" max="100" step="10">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="number" placeholder="Idade"&gt;</code> 
</div>
<input type="number" id="number" placeholder="Idade">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="tel" placeholder="Fone"&gt;</code> 
</div>
<input type="tel" id="tel" placeholder="Fone">
</div>
</div>

<div>
<h2>Input de data</h2>

<div class="demo">
<div class="code">
<code>&lt;input type="datetime-local"&gt;</code> 
</div>
<input type="datetime-local" id="datetime-local">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="date"&gt;</code> 
</div>
<input type="date" id="date">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="month"&gt;</code> 
</div>
<input type="month" id="month">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="time"&gt;</code> 
</div>
<input type="time" id="time">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="week"&gt;</code> 
</div>
<input type="week" id="week">
</div>
</div>

<div>
<h2>Input de cor</h2>

<div class="demo">
<div class="code">
<code>&lt;input type="color"&gt;</code> 
</div>
<input type="color" id="color">
</div>
</div>
<div>
<h2>Input booleanos (sim ou não)</h2>

<div class="demo">
<div class="code">
<code>
&lt;input type="checkbox" name="musica" value="funk"&gt; Funk<br>
&lt;input type="checkbox" name="musica" value="pagode"&gt; Pagode<br>
</code> 
</div>
<div>
<input type="checkbox" id="checkbox" name="musica" value="funk"> <label>Funk</label>
<input type="checkbox" id="checkbox" name="musica" value="pagode"> <label>Pagode</label>
</div>
</div>

<div class="demo padding">
<div class="code">
<code>
&lt;input type="radio" name="sexo" value="feminino"&gt;<br>
&lt;input type="radio" name="sexo" value="masculino"&gt;<br>
</code>
</div>
<div>
<input type="radio" id="radio" name="sexo" value="feminino"> <label>Feminino</label>
<input type="radio" id="radio" name="sexo" value="masculino"> <label>Masculino</label>
</div>
</div>   
</div>

<div>
<h2>Input de arquivos</h2>

<div class="demo">
<div class="code">
<code>&lt;input type="file" accept=".jpg,.jpeg,.gif"&gt;</code> 
</div>
<input type="file" id="file" accept=".jpg,.jpeg,.gif">
</div>
</div>

<div>
<h2>Input de botões</h2>

<div class="demo">
<div class="code">
<code>&lt;input type="reset"&gt;</code> 
</div>
<input type="reset" id="reset">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="button"&gt;</code> 
</div>
<input type="button" id="button">
</div>

<div class="demo">
<div class="code">
<code>&lt;input type="submit"&gt;</code> 
</div>
<input type="submit" id="submit">
</div>
</div>
</form>
<div class="content">
<h2>Aprofundando o assunto</h2>
<p>&emsp;Você reparou que devemos informar o <i>type</i> ao computador? Isso pode soar estranho e desnessário ao primeiro momento, mas isso é fruto de uma super habilidade que nós possuimos e o computador não: reconhecer o sentido das informações pelo contexto. <br>&emsp;Cada informação é lida de um jeito. Nós, seres humanos, lemos informações de tipos diferentes automaticamente. Por exemplo, se eu te disser <strong>"Eu sou de 96"</strong>, você é plenamente capaz de <i>ler</i> e entender que "Eu sou de" é um texto e "96" se refere à abreviação do ano de 1996. O mesmo não acontece com um computador, por isso devemos informar o tipo de informação para que ele saiba ler corretamente.</p>

</div>
</body>
</html>