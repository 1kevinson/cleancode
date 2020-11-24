class Customer {
    lastPurchaseDate: any;

    getLastPurchaseDate() {
        return this.lastPurchaseDate.date;
    }
}

class DeliveryJob {
    customer: any;
    warehouse: any;

    constructor(customer, warehouse) {
        this.customer = customer;
        this.warehouse = warehouse;
    }

    deliverLastPurchase() {
        // ---- Line below is not good because I'm calling "lastPurchase" from another class , that i don't know ----
        // const date = this.customer.lastPurchase.date;

        // this.warehouse.deliverPurchasesByDate(this.customer, date);
        // const date = this.customer.getLastPurchaseDate();

        // Tell, don't Ask
        this.warehouse.deliverPurchase(this.customer.lastPurchase);
    }
}