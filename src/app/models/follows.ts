export class Follow{
    constructor(
        public _id: string,
        public user_following: string,
        public user_followed: string,
    ){}
}