export class Todo{
    constructor(
        public id:number,
        public description:string,
        public isDone:boolean,
        public targetDate:Date
        ){}
}