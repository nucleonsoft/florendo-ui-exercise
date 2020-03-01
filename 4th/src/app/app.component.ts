import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './api.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private cookieValue: string;

  title = 'apiRequest';
  newCards = [];
  card = 4;
  isGreen: boolean = false;
  showImages: boolean = false;
  public Images = [];
  
  constructor(private http: HttpClient, private cookieService: CookieService, private api: ApiService) { }

  ceateCard() {
    this.newCards.push(this.newCards.length);
    console.log("clicked");
  }

  checkGreen(cards) {
    this.isGreen = !this.isGreen;
  }

  getPics = () => {
    this.api.getImages().subscribe(
      data => {
        this.Images = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  ngOnInit() {

    this.cookieService.set( '__cfduid', 'dd5c0516df2693290eb502a7446d9328d1582937420');
    this.cookieValue = this.cookieService.get('__cfduid');

    var addclass = 'green';
    var $cols = $('.cont .cards').click(function(e) {
      e.preventDefault();
      $('.dCards').removeClass('green');
      var func = $(this).hasClass('green') ? 'removeClass' : 'addClass';
      $(".cards").removeClass("green");
      $(this)[func]("green");

      $('.dCards').click(function() {
        $('.cards').removeClass('green');
      });
    });
  }

}