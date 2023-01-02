import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Rodrigo', 11)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 23)
companyAccount.deposit(200)
companyAccount.withdraw(210)
console.log(companyAccount)