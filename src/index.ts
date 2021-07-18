import MaxHeap from "./heap/maxHeap";
import MinHeap from "./heap/minHeap";

const arr = [ 5, 1, 4, 3, 2, -1];

const minHeap = new MinHeap();
const maxHeap = new MaxHeap();
minHeap.build_min_heap(arr);
// minHeap.insert(0);
console.log("MinHeap loop");
while(minHeap.len()>=1) {

  console.log(minHeap.pop());
}
maxHeap.build_max_heap(arr);
console.log("MaxHeap loop");
while(maxHeap.len()>=1) {
  console.log(maxHeap.pop());
}