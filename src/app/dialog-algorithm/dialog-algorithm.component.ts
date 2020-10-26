import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Algo } from '../common/algorithm';

@Component({
  selector: 'app-dialog-algorithm',
  templateUrl: './dialog-algorithm.component.html',
  styleUrls: ['./dialog-algorithm.component.css']
})
export class DialogAlgorithmComponent implements OnInit {
  alg: Algo;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.alg = data.algorithm;
     }

  ngOnInit(): void {
  }
}
