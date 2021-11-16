# Avaliação Sprint 1



<h2>Desenvolvimento do projeto:</h2>
  <p>Escolhi a API RESTful: https://github.com/xjhofernandes/RagnarokAPI que lista os monstros e itens do jogo Ragnarok Online. Nessa versão foi feita a implementação do consumo da API de monstros via NodeJS, e dada a oportunidade futura desejo finalizar a implementação do consumo da API de itens.</p>
  <p>Implementei o projeto me baseando na criação da interface e organização dos dados, utilizando das diversas técnicas aprendidas na Sprint 1, como data-attributes, template Strings, conteinerização, versionamento via Git, ... </p>
  <p>Usei do express e do express router no back-end para renderizar o HTML para o front-end do projeto. O container foi implementado com a imagem do node:10, e originalmente fiz uma implementação do consumo da API via Axios no back e JSDom para front, porém consegui reduzir a complexidade do código e uso de dependências posteriormente. Foi feita também a prototipação de interface via Figma no inicio do desenvolvimento, o que ajudou na visão da implementação e escopo do projeto.</p>
  
  ![image](https://user-images.githubusercontent.com/81719133/141923726-b709c2f6-2af0-479a-8e9c-5aeadba84df1.png)

<h2>Entrega e uso: </h2>
  <p>O projeto ficou hospedado no heroku (https://ragnarok-api-viewer.herokuapp.com), de acordo com a especificação da avaliação.</p>
  <p>Para o uso, há apenas um campo, onde o usuário insere o ID do monstro no jogo, usualmente entre 1001-3500, e a interface representa o consumo da API com esse parâmetro para o usuário de forma organizada.</p>

