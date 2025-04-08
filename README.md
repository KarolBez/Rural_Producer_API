# 🌾 rural-producers-api

API RESTful construída com **NestJS**, **PostgreSQL** e **TypeScript** para gerenciamento de produtores rurais, áreas de fazenda e culturas plantadas. Projeto desenvolvido com princípios de **DDD**, **SOLID**, **Clean Architecture** e suporte completo a **Docker** e **testes com Jest**.

---

## 🚀 Tecnologias

- ✅ **Node.js**
- ✅ **NestJS**
- ✅ **PostgreSQL**
- ✅ **TypeScript**
- ✅ **Docker & Docker Compose**
- ✅ **Jest** (testes unitários e e2e)
- ✅ **Arquitetura Hexagonal**
- ✅ **DDD & SOLID principles**

---

## 📦 Instalação

### Requisitos:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- (opcional) [Node.js v18+](https://nodejs.org/)

### 🔧 Passos para rodar:

git clone https://github.com/seu-usuario/rural-producers-api.git
cd rural-producers-api
cp .env.example .env
docker-compose up --build 
A aplicação estará disponível em:
📍 http://localhost:3000

🧪 Testes
Executar testes unitários, integração e cobertura:

bash
Copiar
Editar
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura
npm run test:cov

📌 Funcionalidades
✅ Cadastro de produtor rural

✅ Listagem de produtores

✅ Validação de CPF/CNPJ

✅ Validação de áreas (total, agricultável, vegetação)

✅ Culturas plantadas (crops)

✅ Boas práticas de Clean Code

✅ Pronto para produção com Docker

📨 Exemplos de uso
➕ Criar produtor rural
POST /producers

json
Copiar
Editar
{
  "cpfCnpj": "12345678909",
  "name": "João da Silva",
  "farmName": "Fazenda Santa Maria",
  "city": "Ribeirão Preto",
  "state": "SP",
  "totalArea": 100,
  "agriculturalArea": 60,
  "vegetationArea": 40,
  "crops": ["Soja", "Milho"]
}
📄 Listar todos os produtores
GET /producers

🧠 Arquitetura
✅ Separação entre camadas de domínio, aplicação, infraestrutura e interfaces

✅ Uso de DTOs, services, entities e repositories

✅ Injeção de dependência via @nestjs/common

 Autor
Desenvolvido por Karoline Bezerra Costa
📧 karolinebezerrac@gmail.com
