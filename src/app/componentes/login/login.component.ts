import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email= '';
  password= '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = this.formBuilder.group({
      password:['', [Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]]
    })
  }

  //copiado de arg programa
  Login(){
    this.authService.login(this.email, this.password);
  }

  ngOnInit(): void {
  }

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
  }


  //del video de yt falta completar if else para redirigir
  ingresar(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    console.log(password)
  }
 

}
