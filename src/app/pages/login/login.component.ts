import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { SimloadingService } from '../../shared/services/simloading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;
  loading: boolean = false;
  
  constructor(private router: Router, private loadingService: SimloadingService, private authService: AuthService) { }

  ngOnInit(): void {
  }
 
  async login(){
    this.loading = true;
    const emailcim = this.email.value;
    const pword = this.password.value;
      this.authService.login(this.email.value, this.password.value).then(cred => {
      if(emailcim == "admin@gmail.com" && pword == "adminka"){
        this.router.navigateByUrl('/admin');
        this.loading = false;
      }else{
        this.router.navigateByUrl('/main');
        this.loading = false;
      }
    }).catch(error => {
      console.error(error);
      this.loading = false;
    });
    
  }
  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
}
