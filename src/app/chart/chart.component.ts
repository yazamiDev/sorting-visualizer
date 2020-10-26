import { Component, Input, OnInit } from '@angular/core';
import { random, nearly_sorted, reversed, few_unique } from "./data";
import { _Left } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  single: any[];
  multi: any[];
  @Input() size: number;
  @Input() condition: String;
  @Input() algorithm: String;
  @Input() sorted: Boolean;

  // colors and size
  view: any[] = [177, 157];
  SORTED_COLOR = "#81c784";
  UNSORTED_COLOR = "#3f51b5";

  // timer
  WAIT_TIME = 300;
  

  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = '';
  showYAxisLabel = false;
  yAxisLabel = '';
  myChartData = new Array();

  // default color
  colorScheme = {
    domain: [this.UNSORTED_COLOR]
  };

  constructor() {
  }

  onSelect(event) {
  }

  ngOnInit(): void {
  }

  // chart condition
  async ngOnChanges() {
    let theTypeOfGraph: any;
    switch (this.condition) {
      case "random": {
        theTypeOfGraph = random;
        break;
      }
      case "nearly_sorted": {
        theTypeOfGraph = nearly_sorted;
        break;
      }
      case "reversed": {
        theTypeOfGraph = reversed;
        break;
      }
      case "few_unique": {
        theTypeOfGraph = few_unique;
        break;
      }
      default: {
        theTypeOfGraph = random;
        break;
      }
    }

    // size of chart update
    let tempChart = new Array();
    for (let i = 0; i < this.size; i++) {
      tempChart.push(theTypeOfGraph[i]);
    }
    this.myChartData = [...tempChart];

    // sorting algorithms call
    await this.myChartData;
    if (this.sorted) {
      switch (this.algorithm) {
        case "Selection": {
          this.myChartData = [...await this.selectionSort(this.myChartData)];
          break;
        }
        case "Insertion": {
          this.myChartData = [...await this.insertionSort(this.myChartData)];
          break;
        }
        case "Bubble": {
          this.myChartData = [...await this.bubbleSort(this.myChartData)];
          break;
        }
        case "Heap": {
          this.myChartData = [...await this.heapSort(this.myChartData)];
          break;
        }
        case "Merge": {
          this.myChartData = [... await this.mergeSort(this.myChartData)];
          break;
        }
        case "Quick": {
          this.myChartData = [... await this.quickSort(this.myChartData)];
          break;
        }
      }
      // sorted color change
      this.colorScheme = {
        domain: [this.SORTED_COLOR]
      };

      // async sorted check
      if (this.sorted == false) {
        this.myChartData = [...tempChart];
        this.colorScheme = {
          domain: [this.UNSORTED_COLOR]
        };
      }
    } else {
      this.myChartData = [...tempChart];
      this.colorScheme = {
        domain: [this.UNSORTED_COLOR]
      };
    }

  }

  // --------------------------------- SELECTION SORT --------------------------------- //

  async selectionSort(nums): Promise<number[]> {
    let size = nums.length;
    for (let i = 0; i < size - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < size; j++) {
        await this.delay(this.WAIT_TIME);
        if (nums[j].value < nums[minIndex].value) {
          minIndex = j;
        }
      }
      let temp = nums[minIndex];
      nums[minIndex] = nums[i];
      nums[i] = temp;
      this.myChartData = [...nums];
    }
    return nums;
  }

  // --------------------------------- INSERTION SORT (2 VERSIONS) --------------------------------- //

  // version 1.0
  // async insertionSort(nums): Promise<number[]> {
  //   let size = nums.length;
  //   for (let i = 1; i < size; i++) {

  //     let key = nums[i];
  //     let j = i - 1;
  //     while ((j >= 0) && (nums[j].value > key.value)) {
  //       await this.delay(this.WAIT_TIME);
  //       nums[j + 1] = nums[j];
  //       this.myChartData = [...nums];
  //       j--;
  //     }
  //     nums[j + 1] = key;
  //   }
  //   return nums;
  // }

  // version 2.0 (includes swapping)
  async insertionSort(nums): Promise<number[]> {
    let size = nums.length;
    let j
    for (let i = 1; i < size; i++) {
      j = i;
      while ((j > 0) && (nums[j].value < nums[j - 1].value)) {
        await this.delay(this.WAIT_TIME);
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
        this.myChartData = [...nums];
        j--;
      }
    }
    return nums;
  }

  // --------------------------------- BUBBLE SORT --------------------------------- //

  async bubbleSort(nums): Promise<number[]> {
    let size = nums.length;
    for (let i = 0; i < size; i++) {
      let swapped = false;
      for (let j = 1; j < size - i; j++) {
        await this.delay(this.WAIT_TIME);
        if (nums[j].value < nums[j - 1].value) {
          let temp = nums[j - 1];
          nums[j - 1] = nums[j];
          nums[j] = temp;
          swapped = true;
          this.myChartData = [...nums];
        }
      }
      if (!swapped) break;
    }
    return nums;
  }

  // --------------------------------- HEAP SORT --------------------------------- //
 
  async heapSort(nums): Promise<number[]> {
    let size = nums.length;
    for (let i = size / 2 - 1; i >= 0; i--) {
      await this.delay(this.WAIT_TIME);
      this.heapify(nums, size, i);
      this.myChartData = [...nums];
    }
    for (let i = size - 1; i >= 0; i--) {
      await this.delay(this.WAIT_TIME);
      let temp = nums[0];
      nums[0] = nums[i];
      nums[i] = temp;
      this.myChartData = [...nums];
      this.heapify(nums, i, 0);
    }
    return nums;
  }

  heapify(nums, size, i): void {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if ((left < size) && (nums[left].value > nums[largest].value)) {
      largest = left;
    }
    if ((right < size) && (nums[right].value > nums[largest].value)) {
      largest = right;
    }
    if (largest != i) {
      let temp = nums[i];
      nums[i] = nums[largest];
      nums[largest] = temp;
      this.myChartData = [...nums];
      this.heapify(nums, size, largest);
    }
  }

  // --------------------------------- MERGE SORT --------------------------------- //

  async mergeSort(nums): Promise<number[]> {
    let result = await this.mergeSortRange(nums, 0, nums.length - 1);
    return result;

  }

  async mergeSortRange(nums, left, right): Promise<any> {
    if (this.condition == "reversed") {
      await this.delay(this.WAIT_TIME);
    }
    left = Math.floor(left);
    right = Math.floor(right);
    if (left < right) {
      let mid = left + (right - left) / 2;
      mid = Math.floor(mid);
      await this.mergeSortRange(nums, left, mid);
      await this.mergeSortRange(nums, mid + 1, right);
      await this.merge(nums, left, mid, right);
    }
    return nums;
  }

  async merge(nums, left, mid, right): Promise<void> {
    let size1 = mid - left + 1;
    let size2 = right - mid;
    var leftArray: any[] = new Array(size1);
    var rightArray: any[] = new Array(size2);
    for (let i = 0; i < size1; i++) {
      leftArray[i] = nums[left + i];
    }
    for (let j = 0; j < size2; j++) {
      rightArray[j] = nums[mid + 1 + j];
    }
    let i = 0;
    let j = 0;
    let k = left;
    while (i < size1 && j < size2) {
      if (leftArray[i].value <= rightArray[j].value) {
        await this.delay(this.WAIT_TIME);
        nums[k] = leftArray[i];
        i++;
        this.myChartData = [...nums];
      } else {
        nums[k] = rightArray[j];
        j++;
        this.myChartData = [...nums];
      }
      k++;
    }
    while (i < size1) {
      nums[k] = leftArray[i];
      i++;
      k++;
      this.myChartData = [...nums];
    }
    while (j < size2) {
      nums[k] = rightArray[j];
      j++;
      k++;
      this.myChartData = [...nums];
    }
    return nums;
  }

  // --------------------------------- QUICK SORT (2 VERSIONS) --------------------------------- //

  // version 1.0 (end pivot)
  // async quick(nums): Promise<number[]> {
  //   let rArray = await this.quickSort(nums, 0, nums.length - 1);
  //   return rArray;
  // }

  // async quickSort(nums, low: number, high: number): Promise<number[]> {
  //   let index;
  //   if (low < high) {
  //     index = await this.partition(nums, low, high);
  //     await this.quickSort(nums, low, index - 1);
  //     await this.quickSort(nums, index + 1, high);
  //   }
  //   return nums;
  // }

  // async partition(nums, low: number, high: number): Promise<number> {
  //   let pivot = nums[high];
  //   let i = low - 1;
  //   for (let j = low; j < high; j++) {
  //     if (nums[j].value < pivot.value) {
  //       await this.delay(this.WAIT_TIME);
  //       i++;
  //       let temp = nums[i];
  //       nums[i] = nums[j];
  //       nums[j] = temp;
  //       this.myChartData = [...nums];
  //     }
  //   }
  //   let temp = nums[i + 1];
  //   nums[i + 1] = nums[high];
  //   nums[high] = temp;
  //   this.myChartData = [...nums];
  //   return i + 1;
  // }

  // version 2.0 (mid pivot)
  async quickSort(nums): Promise<number[]> {
    let result = await this.quick(nums, 0, nums.length - 1);
    return result;
  }

  async quick(nums, low, high): Promise<number[]> {
    if (low >= high) return;
    let middle = low + (high - low) / 2
    let pivot = nums[Math.floor(middle)];
    let i = Math.floor(low);
    let j = Math.floor(high);
    while (i <= j) {
      if (this.condition == "reversed") {
        await this.delay(this.WAIT_TIME);
      } else {
        await this.delay(250);
      }
      while (nums[i].value < pivot.value) {
        await this.delay(50);
        i++;
      }
      while (nums[j].value > pivot.value) {
        await this.delay(50);
        j--;
      }
      if (i <= j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
        this.myChartData = [...nums];
      }
    }
    if (low < j) await this.quick(nums, low, j);
    if (high > i) await this.quick(nums, i, high);
    return nums;
  }

  // chart animations  
  callAnimation(myChartData) {
    Object.assign(this, { myChartData })
  }

  delay(ms: number) {
    // check if sorting cancelled 
    if (!this.sorted) return;
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

