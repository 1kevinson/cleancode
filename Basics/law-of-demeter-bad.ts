class DeliveryJob {
    customer: any;
    warehouse: any;

    constructor(customer, warehouse) {
        this.customer = customer;
        this.warehouse = warehouse;
    }

    deliverLastPurchase() {
        // ---- Line below is not good because I'm getting "lastPurchase" from another class, (indirect property) ----
        const date = this.customer.lastPurchase.date;
        this.warehouse.deliverPurchasesByDate(this.customer, date);
    }
}