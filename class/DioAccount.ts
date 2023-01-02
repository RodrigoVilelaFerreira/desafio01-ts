export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }
  
  getName = (): string => {
    return this.name
  }

  private setBalance = (balance: number): void => {
    this.balance = balance
    console.log('Saldo Alterado com sucesso!')
  }
  
  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.setBalance(this.balance += value)
      console.log('Voce depositou')
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.checkBalance(value)){
      this.setBalance(this.balance -= value)
      console.log('Voce sacou')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private checkBalance = (value: number): boolean => {
    if (this.balance > value) {
      return true
    }

    throw new Error('Saldo insuficiente')
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

}
