export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  getAccountNumber(): number {
    return this.accountNumber
  }

  getBalance(): number {
    return this.balance
  }

  deposit(value: number): void {
    if (!this.validateStatus()) {
      console.log('Conta inválida')
      return
    }

    if (value <= 0) {
      console.log('Depósito inválido')
      return
    }

    this.increaseBalance(value)
    console.log(`Você depositou ${value}`)
  }

  withdraw(value: number): void {
    if (!this.validateStatus()) {
      console.log('Conta inválida')
      return
    }

    if (value <= 0) {
      console.log('Saque inválido')
      return
    }

    if (this.balance > value) {
      this.balance -= value
      console.log(`Você sacou ${value}`)
    } else {
      console.log('Saldo insuficiente')
    }
  }

  protected validateStatus(): boolean {
    return this.status
  }

  protected increaseBalance(value: number): void {
    this.balance += value
  }
}