"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryOrderRepository = void 0;
class InMemoryOrderRepository {
    constructor() {
        this.orders = [];
    }
    findAll() {
        return this.orders;
    }
    findById(id) {
        return this.orders.find(order => order.id === id) || null;
    }
    save(order) {
        this.orders.push(order);
    }
    delete(id) {
        this.orders = this.orders.filter(order => order.id !== id);
    }
}
exports.InMemoryOrderRepository = InMemoryOrderRepository;
//# sourceMappingURL=in-memory-order.repository.js.map