export default class Alumno{
    constructor(username, dni){
        this.username = username;
        this.dni = dni;
    }

    CadenaUsername() {
        return `El username es ${this.username}`;
    }
}
