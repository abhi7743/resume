import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isvisible=false;
    handleclick(event){
        this.isvisible=true;

    }  

}