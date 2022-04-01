import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname="Zero to Hero"
    title="aura"
    changeHandler(event){
        this.title = event.target.value;
    }

    address={
        city:'Bassra',
        postcode:3008,
        country:'Iraq'
    }
    trackHandler(event){
        this.address = {...this.address,"city":event.target.value}

    }
    users = ["john" , "smith" , "mike"];
    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[0].toUpperCase();
    }
    get multiply(){
        return this.num1 * this.num2 ;
    }

}