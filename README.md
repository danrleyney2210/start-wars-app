## Desafio Técnico: Aplicativo de Informações sobre Planetas de Star Wars

### Descrição:

Crie um aplicativo da web React que permite aos usuários buscar informações sobre planetas da saga Star Wars usando a API pública do Star Wars (SWAPI). O aplicativo deve permitir que os usuários possam buscar pelo nome de um planeta e, em seguida, exiba informações detalhadas sobre esse planeta, incluindo nome, clima, terreno, população, filmes em que apareceu e residentes (caso haja).

### Requisitos Funcionais:

- Interface de Busca:
  > Faça filtro por: nome e população.
- Chamada de API:
  > Faça uma chamada à API pública do Star Wars (SWAPI) para obter informações sobre o planeta
  > inserido pelo usuário.
  > Exibição de Informações
- Exiba as seguintes informações sobre o planeta: Nome do planeta, Clima, Terreno, População,Filmes em que o planeta apareceu (lista de títulos) e sua contagem, Residentes do planeta (caso haja, liste seus nomes).
- Importante: a SWAPI não retorna as imagens dos planetas, nós passaremos os links do S3 das imagens de cada planeta, você deverá ao exibir os planetas exibir também sua respectiva imagem, mesclando da maneira mais performática possível.

> Edição de Informações

- Embora a API não forneça endpoints para edição, você deverá permitir com que o nome dos
  planetas possa ser alterado localmente, de forma que se a página for atualizada, os dados
  voltam a ser como eram originalmente retornados pela API.

### Requisitos Técnicos:

- Use React para criar o aplicativo.
- Faça chamadas à API SWAPI para obter informações sobre os planetas (documentação da API:
  https://swapi.dev/documentation#planets).
- Gerencie o estado do aplicativo de forma apropriada, faça um código performático e bem construído.
- Trate erros de chamada à API (por exemplo, se o planeta não for encontrado) e forneça feedback ao
  usuário.
- O Design será fornecido por nós e deverá ser replicado da maneira mais fiel possível.

### Pontos Extras (Opcionais):

- Aplicação de TDD.
  Entrega e prazo:
  A partir do recebimento deste documento você terá 3 dias úteis para entregar. A entrega poderá ser feita de
  duas formas, ou nos enviar um arquivo zipado do projeto e/ou link para o repositório do projeto e as instruções
  para rodar. Também poderá ser colocado em um servidor gratuito (Vercel, Netlify, etc) e nos enviado o link da
  aplicação.

### Avaliação:

O objetivo deste desafio é avaliar a capacidade do desenvolvedor de trabalhar com chamadas de API,
manipular dados e criar uma experiência de usuário agradável. Avaliamos seu código, implementações
utilizadas, design e funcionalidade e performance geral do aplicativo.

### Design

Abaixo segue o Design e também o link para o figma do mesmo.
https://www.figma.com/file/Z7rryquU677ifYXJIWCipC/Star-Wars?type=design&node-id=0%3A1&mode=design&t
=nGI8aWVhNX6L3EBh-1
