import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() currentPage: string ='';
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() selectedpage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLogOut: EventEmitter<boolean> = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }

  menuSwitch(){
    this.selectedpage.emit(this.currentPage);
  } 
  close(logout?: boolean){
    this.onCloseSidenav.emit(true);
    if(logout === true) {
      this.onLogOut.emit(logout)
    }
  }
}
