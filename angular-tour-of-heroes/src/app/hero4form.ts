// 這裡用 class 隔壁用 interface ，
// 兩個東東原本同名，所以 export 會搞不清楚，必須要分開。 

export class Hero4form { 

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}