export class User
{
    constructor( 
        public name:string,
        public email:string,
        public passward:string,
        public topic:string,
        public confirmPassward?:string,
    )
    {

    }
}