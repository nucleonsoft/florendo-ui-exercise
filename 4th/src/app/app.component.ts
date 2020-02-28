import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

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

  httpHeaders = new HttpHeaders();

  img = {
    src: 'https://shibe.online/api/shibes'
  }
  
  constructor(private http: HttpClient) { }

  ceateCard() {
    this.newCards.push(this.newCards.length);
    console.log("clicked");
  }

  checkGreen(cards) {
    this.isGreen = !this.isGreen;
  }

  ngOnInit() {

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