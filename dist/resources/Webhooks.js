var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseResource } from './Base';
export class Webhooks extends BaseResource {
    constructor(shipstation) {
        super(shipstation, 'webhooks');
        this.shipstation = shipstation;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: this.baseUrl,
                method: 'GET'
            });
        });
    }
    subscribe(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/subscribe`,
                method: 'POST',
                data
            });
        });
    }
    unsubscribe(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.shipstation.request({
                url: `${this.baseUrl}/${id}`,
                method: 'DELETE'
            });
            return null;
        });
    }
}
