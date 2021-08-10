### Instruções

- Instalar o XAMPP e iniciar o serviço do MYSQL
- Criar um base de dados no MYSQL, com os dados abaixo:

#### DB

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_PORT=3306
DB_NAME=database

- Rodar as Query abaixo no database:

```sql
CREATE TABLE CLIENTES (
  ID bigint(20) NOT NULL AUTO_INCREMENT,
  NOME varchar(200) NOT NULL DEFAULT '',
  DATANASC datetime DEFAULT NULL,
  SEXO varchar(1) NOT NULL DEFAULT '',
  IDADE int(11) NOT NULL DEFAULT 0,
  CIDADE varchar(200) NOT NULL DEFAULT '',
  timestamp timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (ID)
) ;


CREATE TABLE CIDADES (
  ID bigint(20) NOT NULL AUTO_INCREMENT,
  NOME varchar(200) NOT NULL DEFAULT '',
  ESTADO varchar(200) DEFAULT '',
  timestamp timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (ID)
);

```

- Depois ir na raiz do projeto e digite YARN para baixar as dependências.

- Após isso, é só digitar Yarn dev, e aplicação estará rodando na porta 3333


### - ROTAS

#### GET CLIENTE BY ID

/api/clientes/cliente?id=1

#### GET CLIENTE BY NOME

/api/clientes/cliente?nome=kaique

#### GET CLIENTE BY NOME AND ID

/api/clientes/cliente?nome=kaique&id=1

#### POST CLIENTE

/api/clientes/postcliente

```json
{
 	"nome":"kaique",
     "data_nascimento":"20/10/1995",
     "sexo": "M",
     "idade": "25",
     "cidade":"campo grande"
}

```
#### PATCH CLIENTE
/api/clientes/updatecliente

```json
{               
    "id": 2,
    "nome": "kaique"
}

```
#### DELETE CLIENTE
/api/clientes/deletecliente

```json
{               
    "id": 2
}

```
#### GET CIDADE BY ESTADO
/api/cidades/cidade?estado=rj

#### GET CIDADE BY CIDADE
/api/cidades/cidade?cidade=campo grande

#### GET CIDADE BY CIDADE AND ESTADO 
/api/cidades/cidade?estado=rj&cidade=campo grande

#### POST CIDADE
/api/cidades/postcidade

```json
{
     "cidade":"rio de janeiro",
     "estado":"rj"
}

```

### LINK COLLECTION POSTMAN

https://www.getpostman.com/collections/dced705c625510d292ca









