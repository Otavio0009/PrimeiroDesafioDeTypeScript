# 🏦 Dio Bank

Projeto de estudos em **TypeScript** que simula contas bancárias usando **Programação Orientada a Objetos**: classe abstrata, herança, encapsulamento e modificadores de acesso.

> Desafio proposto no curso da [DIO](https://www.dio.me/), com enunciado original de [Nathally Souza](https://github.com/nathyts). A implementação deste repositório é minha.

## 🎯 Objetivo

Praticar os conceitos básicos de TypeScript aplicados a um sistema bancário simples:

- Classes e classes abstratas
- Herança (`extends` e `super`)
- Modificadores `private` e `readonly`
- Getters e setters
- Tipagem de atributos, parâmetros e retornos

## 🛠️ Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)

## 📁 Estrutura

```
src/
├── class/
│   ├── DioAccount.ts      # Classe abstrata base de todas as contas
│   ├── PeopleAccount.ts   # Conta de pessoa física (herda de DioAccount)
│   └── CompanyAccount.ts  # Conta empresarial, com empréstimo (herda de DioAccount)
└── app.ts                 # Criação das contas e execução dos métodos
```

> Ajuste os caminhos se a sua estrutura de pastas for diferente.

## 🧩 Classes

### `DioAccount` (abstrata)

| Membro | Tipo | Descrição |
| :--- | :--- | :--- |
| `name` | `private` | Nome do titular |
| `accountNumber` | `private readonly` | Número da conta, que não pode ser alterado |
| `balance` | `number` | Saldo da conta |
| `status` | `private boolean` | Indica se a conta está ativa |
| `getName()` / `setName()` | método | Lê e altera o nome |
| `deposit(value)` | método | Realiza um depósito |
| `withdraw(value)` | método | Realiza um saque |
| `getBalance()` | método | Exibe o saldo |
| `validateStatus()` | `private` | Valida se a conta está ativa |

### `PeopleAccount`

Conta de pessoa física. Estende `DioAccount` e adiciona o atributo `doc_id` (documento).

### `CompanyAccount`

Conta empresarial. Estende `DioAccount` e adiciona o método `getLoan()` para empréstimos.

## 🚀 Como rodar

```bash
# 1. Clone o repositório
git clone https://github.com/Otavio0009/TypeScript-Dio.git

# 2. Entre na pasta do projeto
cd TypeScript-Dio

# 3. Instale as dependências
npm install

# 4. Execute o projeto
npm run dev
```

## ✅ Desafios

- [ ] Implementar `deposit` e `withdraw` na classe `DioAccount`
  - O saldo deve ser alterado de acordo com o valor informado
  - Apenas contas com `status` verdadeiro e saldo maior que o valor solicitado podem sacar
- [ ] Implementar `getLoan` na classe `CompanyAccount`
  - O saldo deve ser acrescido do valor do empréstimo
  - Apenas contas com `status` verdadeiro podem pedir empréstimo
- [ ] Criar um novo tipo de conta a partir de `DioAccount`
  - Sem novos atributos
  - Com um depósito que acrescenta 10 ao valor informado (depósito de 100 vira 110)
- [x] Todos os atributos de qualquer conta devem ser privados
- [x] `name` e `accountNumber` não podem ser alterados interna ou externamente
- [ ] Criar instâncias de cada tipo de conta no `app.ts` e executar os métodos possíveis

> Marque com `[x]` conforme for concluindo cada item.

## 📝 Pontos de atenção

Itens que ainda precisam de ajuste no código atual:

- `deposit` e `withdraw` só exibem mensagens e não alteram o `balance`.
- `withdraw` não compara o saldo com o valor sacado, só verifica se `balance > 0`.
- `getLoan` está incompleto (`if ()` vazio) e não compila.
- `balance` e `valeu` ainda são públicos, mas o desafio pede todos os atributos privados. Como as subclasses precisam acessar `balance`, o ideal é usar `protected` ou getters e setters.
- O atributo `valeu` (provável erro de digitação de `value`) guarda um valor que deveria ser só parâmetro dos métodos.
- `validateStatus` lança um erro em vez de retornar `false`, então o `else` de `deposit` e `withdraw` nunca é executado.

## 📄 Licença

Projeto desenvolvido para fins de estudo.
