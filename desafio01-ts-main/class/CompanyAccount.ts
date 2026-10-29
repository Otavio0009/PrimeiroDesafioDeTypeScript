import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {
  
  getLoan(value: number): void {
    if (!this.validateStatus()) {
      console.log('Conta inválida')
      return
    }

    if (value <= 0) {
      console.log('Empréstimo inválido')
      return
    }

    this.increaseBalance(value)
    console.log(`Você pegou um empréstimo de ${value}`)
  }
}