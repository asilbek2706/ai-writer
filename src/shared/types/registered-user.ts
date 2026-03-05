export type TRegisteredUser = {
    find(arg0: (u: any) => boolean): unknown;
    login: string;
    password: string;
    createAt: Date;
}