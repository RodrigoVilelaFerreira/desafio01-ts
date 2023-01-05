import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {

  constructor(name: string, accountNumber: number,){
    super(name, accountNumber)
  }

  bonusDeposit = (value: number): void => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance() + value + 10)
      console.log('Um depósito foi realizado com o bonus de 10')
    }
  }
}
