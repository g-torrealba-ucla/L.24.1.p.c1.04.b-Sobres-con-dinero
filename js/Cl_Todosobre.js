export default class Cl_Todosobre {
    constructor() {
        this.acummonto=0;
    }

    //metodos
    procesarsobre(so){
        this.acummonto+=so.calculartotaldinero();
    }

    devolveracummonto(){
        return this.acummonto;
    }
}