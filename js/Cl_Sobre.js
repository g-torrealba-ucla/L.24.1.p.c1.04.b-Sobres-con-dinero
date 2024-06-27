export default class Cl_Sobre {
    constructor(n,vb,c) {
        this.numero=n;
        this.valorb=vb;
        this.cant=c;
    }

    //metodos
    set numero(n){
        this._numero=n;
    }

    get numero(){
        return this._numero;
    }

    set valorb(vb){
        this._valorb=+vb;
    }   

    get valorb(){        
        return this._valorb;
    }

    set cant(c){
        this._cant=+c;
    }

    get cant(){
        return this._cant;
    }
    //metodo de cálculo de el monto por cada sobre

    calculartotaldinero(){
        return this.valorb*this.cant;
    }
}