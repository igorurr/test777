export interface IUser {
    id: number;
    color: string;
    name: string;
    online: boolean;
};

export interface IUserStore {
    user: number,
    users: Array<IUser>
};