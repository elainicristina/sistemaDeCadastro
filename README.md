# sistema de cadastro

Projeto desenvolvido como desafio na etapa tecnica do processo seletivo para AP CODERS. O objetivo do desafio é um sistema responsável por gerenciar as sistema de condominios.

# Sobre o projeto

A implementação do projeto foi todo com typescript, express, manipulando com typeorm. Tudo sobre projeto foi usado e resolvido lendo a documentação do typeorm. E contem um arquivo dockerFile para ajudar na visualização.

# Como rodar

Projeto está preparado para usar msql.
Arquivo de configuraçao do banco é ormconfig.js
Dockerfile para facilitar a instalação.

# Dados importantes

- url: localhost:3001
- rotas: despesas / unidade / inquilino

- Para criar unidade req JSON.

 ```json
{
    "indetificacao": "ap 1",
    "proprietario": "João Paulo",
    "condominio": "SunSheyin",
    "endereco": "rua dos bobos, n"
}
```

- Para criar inquilino req do JSON.

 ```json
{
    "nome": "João Paulo",
    "idade": 20,
    "sexo": "masculino",
    "telefone": "933004849",
    "email": "jjpaulo2@protonmail.com" 
}
```

- Para criar despesa, req JSON

 ```json
{
    "descricao": "sitio da barbie",
    "tipo_despesa": "entretenimento",
    "valor": "20000",
    "vencimento_fatura": "2022-01-20",
    "status_pagamento": false,
    "unidade": 1
}
```

- Para filtrar por despesa por vencimento da fatura

![Captura de tela de 2022-01-14 21-34-27](https://user-images.githubusercontent.com/81453546/150709021-1a69ec0f-90b8-4820-9222-13fae2a3c781.png)

- Para filtrar por unidade, precisa apenas do id da unidade

![unidade](https://user-images.githubusercontent.com/81453546/150709121-42ab7fd6-4172-411e-9ee3-cd376524cc62.png)

# Observações 

Muito gratificante participar desse projeto, amei realiza-lo, tive dificuldades em algumas implementações mas conseguir concluir e me orgulho disso.





