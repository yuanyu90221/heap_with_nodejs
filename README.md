# heap_with_nodejs

This repository is implementation of data structure heap on nodejs

## Introduction

```
The (binary) heap data structure is an array object 

that we can view as a complete binary tree.

Each node of the tree corresponds to an element of the array.
```

![](https://i.imgur.com/T5pZn5T.png)

## Node index Relation
```
PARENT(i)
  RETURN Math.ceil(i/2) - 1

LEFT(i)
  RETURN 2*(i+1) - 1

RIGHT(i)
  RETURN 2*(i+1)
```
## Heap property

```
Each node in heap must satisfy Heap property
```

**Max-heap-property**:
```
for each node in Heap A

A[PARENT(i)] >= A[i]

Heap A is max-heap
```

**Min-heap-property**:
```
for each node in Heap A

A[PARENT(i)] <= A[i]

Heap A is min-heap
```

## Max-Heapify(A, i)
```
l = Left(i), r = Right(i), largest = 0
if l <= A.length and A[l] >= A[i]
   largest = l
else largest = r
if r <= A.length and A[r] >= A[largest]
   largest = r
if largest !== i
   exchange A[i] with A[largest]
   Max-Heapify(A, largest)
```
![](https://i.imgur.com/WEtOWlN.png)

## Build-max-heap(A)
```
for i = Math.floor(A.length/2) downto 0
  Max-Heapify(A,i)
```

## HeapSort(A)
```
Build-max-heap(A)
for i = A.length-1 downto 1
  exchange A[0] with A[i]
  remove last element of A
  Max-heapify(A, 0)
```
## Max-heap-increase-key(A, i, key)
```
A[i] = key
while i > 0 and A[PARENT(i)] < A[i]
  exchange A[i] with A[PARENT(i)]
  i = PARENT(i)
```
## Max-heap-insert(A, key)
```
append key to last element of A
Heap-increase-key(A, A.length-1, key)
```