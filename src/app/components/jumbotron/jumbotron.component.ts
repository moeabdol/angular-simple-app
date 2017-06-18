import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-jumbotron',
  templateUrl: 'jumbotron.component.html',
  styleUrls: ['jumbotron.component.css']
})
export class JumbotronComponent {
  jbtHeading = 'Hello World!';
  jbtText = 'This is a simple hero unit, a simple jumbotron-style component ' +
    'for calling extra attention to featured content or information.';
  jbtBtnText = 'Read More';
  jbtBtnUrl = 'http://test.com';
}
