export class JwtDto {
    token:string;
    type: string;
    nombreUsuario: string;
    authorities: string[];

   public constructor (token:string, type:string, nombreUsuario: string, authorities:string[]){
        this.token = token;
        this.type =type;
        this.nombreUsuario = nombreUsuario;
        this.authorities = authorities;
    }
}
