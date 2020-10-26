import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlgorithmComponent } from './dialog-algorithm/dialog-algorithm.component';
import { Algo, ALGS } from './common/algorithm'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  condition: string;
  title = 'sampleAngular';
  isLinear = false;
  status = true;
  sorted = false;
  algs = ALGS;
  size = 10;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  // open dialog
  openDialog(theAlg: Algo): void {
    this.dialog.open(DialogAlgorithmComponent, { data: { algorithm: theAlg } });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  // sort charts
  sort(): void {
    this.sorted = true;
  }
  
  // refresh charts
  refreshSort(): void {
    this.sorted = false;
  }

  // generate chart data
  generateData(): any {
    const chartData = new Array<any>();
    for (let i = 0; i < this.size; i++) {
      let randValue = Math.floor(Math.random() * 100) + 10;
      const temp = { "name": randValue, "value": randValue };
      chartData.push(temp);
    }
    return chartData;
  }
}
