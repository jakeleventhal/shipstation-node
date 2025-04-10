import type ShipStation from '../shipstation';

export abstract class BaseResource {
  protected shipstation: ShipStation;
  protected baseUrl: string;

  constructor(shipstation: ShipStation, baseUrl: string) {
    this.shipstation = shipstation;
    this.baseUrl = baseUrl;
  }
}
