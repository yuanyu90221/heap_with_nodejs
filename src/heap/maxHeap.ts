export default class MaxHeap {
  private h: number[] = [];
  constructor() {
  }
  public len(): number {
    return this.h.length;
  }
  public parent(i: number): number {
    return Math.ceil(i/2)-1;
  }
  public left(i: number): number {
    return 2*(i+1)-1;
  }
  public right(i: number): number {
    return 2*(i+1);
  }
  public build_max_heap(arr: number[]) {
    this.h = arr.slice();
    for (let i = Math.floor(this.h.length/2); i >=0 ; i--) {
      this.max_heapify(i);
    }    
  }
  public max_heapify( i: number) {
    let l = this.left(i);
    let r = this.right(i);
    let largest = 0;
    const arr = this.h;
    if (l < arr.length && arr[l] > arr[i]) {
      largest = l;
    } else {
      largest = i;
    }
    if (r < arr.length && arr[r] > arr[largest]) {
      largest = r;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      this.max_heapify(largest);
    }
  }
  public heap_increase_key(i:number, key: number) {
    this.h[i] = key;
    const arr = this.h;
    while (i > 0 && arr[this.parent(i)] > arr[i]) {
      [arr[i], arr[this.parent(i)]] = [ arr[this.parent(i)], arr[i]]
      i = this.parent(i)
    }
  }
  public insert(key: number) {
    this.h.push(key);
    this.heap_increase_key(this.h.length-1, key);
  }
  public pop(): number {
    const len = this.len();
    if (len == 0) {
      return 0
    }
    let min = this.h[0]
    this.h[0] = this.h[len-1]
    this.h.splice(len-1, 1);
    this.max_heapify(0);
    return min;
  }
}