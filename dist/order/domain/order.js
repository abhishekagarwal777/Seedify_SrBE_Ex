"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Order_id, _Order_productId, _Order_quantity, _Order_userId;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor({ id, productId, quantity, userId }) {
        _Order_id.set(this, void 0);
        _Order_productId.set(this, void 0);
        _Order_quantity.set(this, void 0);
        _Order_userId.set(this, void 0);
        __classPrivateFieldSet(this, _Order_id, id, "f");
        __classPrivateFieldSet(this, _Order_productId, productId, "f");
        __classPrivateFieldSet(this, _Order_quantity, quantity, "f");
        __classPrivateFieldSet(this, _Order_userId, userId, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _Order_id, "f");
    }
    get productId() {
        return __classPrivateFieldGet(this, _Order_productId, "f");
    }
    get quantity() {
        return __classPrivateFieldGet(this, _Order_quantity, "f");
    }
    get userId() {
        return __classPrivateFieldGet(this, _Order_userId, "f");
    }
}
exports.Order = Order;
_Order_id = new WeakMap(), _Order_productId = new WeakMap(), _Order_quantity = new WeakMap(), _Order_userId = new WeakMap();
//# sourceMappingURL=order.js.map