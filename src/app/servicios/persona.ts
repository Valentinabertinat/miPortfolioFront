export class Persona{
    nombre:string;
    email:string;
    puesto:string;
    ubicacion:string;
    img:string;

   constructor(nombre:string,  email:string, puesto:string, ubicacion:string, img:string)
   {
       this.nombre=nombre;
       this.email=email;
       this.puesto=puesto;
       this.ubicacion=ubicacion;
       this.img=img;
   }

}