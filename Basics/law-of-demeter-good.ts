/**
 * @DEMETER_LAW Don't depend on the internals of "strangers" (other objects which you don't directly know)
 * -------------------------------------------------------------------------------------------------------
 * Code in a method may only access direct internals (properties and methods)
 * - the object it belongs to
 * - objects that are stored in properties of that object
 * - object which are received as method parameters
 * - objects which are created in the method
 */


class DeliveryJob {
    customer: any;
    warehouse: any;

    constructor(customer, warehouse) {
        this.customer = customer;
        this.warehouse = warehouse;
    }

    deliverLastPurchase() {
        // Tell, Don't Ask
        // access "lastPurchase" which is received as method parameters
        this.warehouse.deliverPurchase(this.customer.lastPurchase);
    }
}