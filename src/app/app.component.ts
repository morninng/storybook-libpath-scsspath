import { Component, OnInit } from '@angular/core';

import { TestServiceService } from '@lib-path/test-lib/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor( private testServiceService: TestServiceService){} 

  ngOnInit() {
    this.testServiceService.aaa();
  }

}
