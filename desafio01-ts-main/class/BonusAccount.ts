import { DioAccount } from './DioAccount'

export class BonusAccount extends DioAccount {
  deposit(value: number): void {
    // o bônus de 10 só vale para depósitos válidos
    super.deposit(value > 0 ? value + 10 : value)
  }
}