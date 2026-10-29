import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { BonusAccount } from './class/BonusAccount'

const peopleAccount = new PeopleAccount(1, 'Nathally', 10)
peopleAccount.deposit(500)
peopleAccount.withdraw(200)
peopleAccount.withdraw(1000)
console.log('Saldo pessoa:', peopleAccount.getBalance())

const companyAccount = new CompanyAccount('Dio Company', 20)
companyAccount.getLoan(1000)
companyAccount.withdraw(400)
console.log('Saldo empresa:', companyAccount.getBalance())

const bonusAccount = new BonusAccount('Conta Bônus', 30)
bonusAccount.deposit(100)
bonusAccount.withdraw(50)
console.log('Saldo bônus:', bonusAccount.getBalance())