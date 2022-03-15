import { LightningElement, track, api, wire } from "lwc";


export default class Fed extends LightningElement {

  @api name;
  @api icon;
  @api introduction;
  @api skills;

  get skillset(){

  }
  
}