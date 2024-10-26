type OrderConstructorParameters = {
    id: string;
    productId: string;
    quantity: string;
    userId: string;
};
export declare class Order {
    #private;
    constructor({ id, productId, quantity, userId }: OrderConstructorParameters);
    get id(): string;
    get productId(): string;
    get quantity(): string;
    get userId(): string;
}
export {};
