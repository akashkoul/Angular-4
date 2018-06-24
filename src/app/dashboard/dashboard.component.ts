/**
 * Angular 4 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
  DoCheck
} from '@angular/core';
import { AppState } from '../app.service';
import { User } from '../_models'
import { Router } from '@angular/router';
import { MdSidenav } from '@angular/material';
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'dashboard',
  // encapsulation: ViewEncapsulation.None,
  styles: [`
  .dash-card{
    width: 100%;
    background-color: grey;
  }
  .card-header{
      font-size:16;
      margin-top: -5px;
  }`],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public dashboardData;
  constructor(
    public appState: AppState,
    private router: Router
  ) {

    this.dashboardData = [
      {
        "firstName": "Abc",
        "lastName": "xyz",
        "discription": "good developer",
        "avatar": "/assets/img/avatar4.png"
      },
      {
        "firstName": "William",
        "lastName": "Carney",
        "discription": "nice architect",
        "avatar": "/assets/img/avatar2.png"
      },
      {
        "firstName": "Sarah",
        "lastName": "Dunne",
        "discription": "great designer",
        "avatar": "/assets/img/avatar1.png"
      },
      {
        "firstName": "Merriana",
        "lastName": "Sean",
        "discription": "nice manager",
        "avatar": "/assets/img/avatar5.png"
      },
      {
        "firstName": "Geneva",
        "lastName": "Wilson",
        "discription": "team player",
        "avatar": "/assets/img/avatar2.png"
      },
      {
        "firstName": "Sneh",
        "lastName": "Sopori",
        "discription": "hard worker",
        "avatar": "/assets/img/avatar5.png"
      },
      {
        "firstName": "Diljet",
        "lastName": "Singh",
        "discription": "resorcefull person",
        "avatar": "/assets/img/avatar1.png"
      },
      {
        "firstName": "Mark",
        "lastName": "Carney",
        "discription": "friendly person",
        "avatar": "/assets/img/avatar5.png"
      },
      {
        "firstName": "Aki",
        "lastName": "Sing",
        "discription": "great at cricket",
        "avatar": "/assets/img/avatar1.png"
      }
    ]
    console.log(this.dashboardData)
  }



  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public ngOnInit() {

  }
}
