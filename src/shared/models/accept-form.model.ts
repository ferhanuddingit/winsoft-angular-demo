export class AcceptFormModel {
  constructor(
    public drugs: Drug[],
    public subtotal: number,
    public discount: number,
    public deliveryfee: number,
    public loyalitydiscount: number,
    public insuredamount: number,
    public totaluserpayable: number
  ) {}
}

export class Drug {
  constructor(
    public drugname: string,
    public quantity: number,
    public status: string,
    public price: number,
    public total: number
  ) {}
}
