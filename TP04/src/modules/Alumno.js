class Alumno{
    constructor(username, dni){
        this.username = username;
        this.dni = dni;
    }

    CadenaUsername() {
        return `El username es ${this.username}`;
    }
}

let patito = 3; // no sale exportar esto tmb

export default Alumno;