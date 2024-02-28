export class User{
    constructor(
        public _id: string,
        public name: string,
        public lastname: string,
        public nickname: string,
        public email: string,
        public password: string,
        public role: number,
        public profile_picture: string
    ){}
}