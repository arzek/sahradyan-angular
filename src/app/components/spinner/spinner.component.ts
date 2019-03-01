import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  @Input() mode = 'absolute';
  @Input() ratio = 3;

  @Select(store => store.app.showSpinner) showSpinner$: Observable<boolean>;
}
