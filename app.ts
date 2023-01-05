import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Rodrigo', 11)
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log(peopleAccount)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 23)
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
companyAccount.deposit(200)
companyAccount.getLoan(400)
companyAccount.withdraw(210)

console.log(companyAccount)

const bonusAccount: BonusAccount = new BonusAccount('DigitalBonusOne', 26)
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
bonusAccount.deposit(150)
bonusAccount.bonusDeposit(100)
bonusAccount.withdraw(50)

console.log(bonusAccount)
