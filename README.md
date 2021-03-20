# 📗 Gerador de Citações '.bib'

<p align=”justify” style="text-align: justify;">
Já pensou em quanto tempo gasto criando as variáveis de citação do latex, usando compiladores em sua máquina ou o próprio <a href="https://www.overleaf.com/">Overleaf</a>? Pode parecer pouca coisa, mas já que temos a programação ao nosso lado para automatizar tarefas e facilitar a vida das pessoas, por que não criar um gerador de citações em que o usuário entra com os valores e a citação já sai prontinha? Podendo inclusive salvar o arquivo. Este é o objetivo deste projeto.
</p>

### 💡 Como usar?

#### Passo 1:

<p align=”justify” style="text-align: justify;">
Entre com todos os atributo da sua citação, como na imagem abaixo (atualmente, a aplicação suporta Livros e Artigos).
</p>

<p align="center"> 
    <img align="center" src="./img/use-example.png" alt="Primeiro Passo: Entrada dos dados"/>
</p> 

#### Passo 2:

<p align=”justify” style="text-align: justify;">
Clique no botão 'Gerar' - a citação vai ser criada, abrindo uma caixa de texto de leitura.
</p>

<p align="center"> 
    <img align="center" src="./img/use-example-3.png" alt="Segundo Passo: Criação da citação"/>
</p>

#### Passo 3:

<p align=”justify” style="text-align: justify;">
Clique no botão 'Copiar' - um alerta vai aparecer na tela, indicando que a citação foi copiada. Uma outra opção é clicar no arquvio 'Salvar', que vai fazer o download de um arquivo na extensão '.bib'.
</p>

<p align="center"> 
    <img align="center" src="./img/use-example-4.png" alt="Terceiro Passo: Copiar/Salvar"/>
</p>

<br/>

#### ✂️ Funcionalidades:
- Plataforma em dois idiomas.
- Geração de citações para livros e artigos.
- Utilização de até 6 autores.
- Download de arquivo com extensão 'bib'.
- Redirecionamento para GitHub do desenvolvedor.
- Email para o desenvolvedor.

<br/>

#### ↖️ Melhorias (Versão 2.0):
- Componentização (atual é single component).
- Melhoria na atualização dinâmica de autores.
- Login e Histórico de citações criadas.
- Geração de arquivo com mais de uma citação.
- Estilização da barra superior.
- Inclusão de rodapé (footer).
- Adição de opções na barra lateral, como LinkedIn.
- Integração com projetos do Overleaf.

<br/>

#### 🔡 Tecnologias Utilizadas:
- Node.js
- Javascript
- HTML5 e CSS3
- Vue.Js (Vuetify)

<br/>

#### 🛠️ Instalação do Projeto

- Clonar o repositório, rodando o comando a seguir dentro da pasta criada:

```
yarn install
npm i
```

<br/>

#### 🔗 Link - Firebase
- https://quote-generator-bib.web.app/

<br/>

#### 🖥️ Interface e exemplos

Para o desenvolvimento deste projeto, um arquivo de configuração '.json' foi utilizado, contendo todos os aspectos visuais da interface, além de contar com a opção de tradução da plataforma para o inglês. As imagens a seguir mostram a interface principal (contendo o formulário e os atributos da citação a ser gerada).

<br/>

##### 📰 Geração de Citações para Artigos (Exemplo - Ingês/Português)

<img src="./img/main-menu-article-en.PNG" height="650px"></img>
<img src="./img/main-menu-article-pt.PNG" height="650px"></img>

<br/>


##### 📖 Geração de Citações para Livros (Exemplo - Ingês/Português)

<img src="./img/main-menu-book-en.PNG" height="650px"></img>
<img src="./img/main-menu-book-pt.png" height="650px"></img>

<br/>

##### 📖 Geração de Citações (Exemplo)

<img src="./img/example-1.png" height="650px" align="center"></img>

<br/>

##### 📖 Geração de Citações - Download de Arquivo (Exemplo)

<img src="./img/example-2.png" witdh="500px" align="center"></img>

<br/>
