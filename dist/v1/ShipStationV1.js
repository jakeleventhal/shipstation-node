import BaseAPI from '../BaseAPI';
import { Accounts } from './resources/Accounts';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
import { Products } from './resources/Products';
import { Shipments } from './resources/Shipments';
import { Stores } from './resources/Stores';
import { Users } from './resources/Users';
import { Warehouses } from './resources/Warehouses';
import { Webhooks } from './resources/Webhooks';
export class V1Resources extends BaseAPI {
    constructor(options) {
        super('https://ssapi.shipstation.com/', options);
        this.accounts = new Accounts(this);
        this.carriers = new Carriers(this);
        this.fulfillments = new Fulfillments(this);
        this.orders = new Orders(this);
        this.products = new Products(this);
        this.shipments = new Shipments(this);
        this.stores = new Stores(this);
        this.warehouses = new Warehouses(this);
        this.webhooks = new Webhooks(this);
        this.users = new Users(this);
    }
}
