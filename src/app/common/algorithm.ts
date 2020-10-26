export interface Algo {
    title: string;
    img: string;
    analysis: string;
    use_case: string;
}

export const ALGS: Algo[] = [
    {
        title: "Selection",
        img: "/assets/algorithms/selection.png",
        analysis: "Two loops are required, an outer loop and an inner loop. The outer loop executes n - 1 times. The inner loop executes approximately n / 2 times on average; from n to two times. Swapping of elements in the inner loop takes constant time. Therefore, the time required for Selection Sort is (n - 1) * (n / 2). Hence, the time complexity is O(n^2) and the space complexity is O(1). ",
        use_case: "Selection Sort is a slow sorting algorithm in general, but it minimizes the number of swaps. It is most effective when the data set is nearly sorted or when swapping elements is expensive."
    },
    {
        title: "Insertion",
        img: "/assets/algorithms/insertion.png",
        analysis: "Two loops are required, an other loop and an inner loop. The outer loop executes once, inserting each of n elements (factor of n). On average, there are n/2 elements already sorted. The inner loop looks and moves half (factor of n / 4). Therefore, the time required for Insertion Sort of n elements is (n^2) / 4. Hence, the time complexity is O(n^2) and space complexity is O(1).",
        use_case: "Insertion Sort on average has a quadratic time complexity, but it is most effective when the data set is nearly sorted or when size of the data set is relatively small."
    },
    {
        title: "Bubble",
        img: "/assets/algorithms/bubble.png",
        analysis: "Two loops are required, an other loop and an inner loop. The outer loop executes n - 1 times. Each time the outer loop is executed, the inner loop is executed. The inner loop executes n - 1 times at first, linearly dropping to just once. On average the inner loop executes approximately n / 2 timesfor each execution of the outer loop. The comparisons and swap done in the inner loop takes constant time. Therefore, the time required for Bubble Sort takes n * (n / 2 * k). Hence, the time complexity is O(n^2) and space complexity is O(1).",
        use_case: "Bubble Sort is most effective when the data set is nearly sorted or when or when the size of the data set is relatively small."
    },
    {
        title: "Heap",
        img: "/assets/algorithms/heap.png",
        analysis: "Two loops are required. The first loop puts the array appropriate heap order (factor of n). The second loop repeatedly extracts the maximum and restores heap order (factor of n * log(n)). Therefore, the time required for Heap Sort is n + n * logn. Hence, the time complexity is O(n * log(n)) and space complexity is O(1).",
        use_case: "Heap Sort is most effective when the data set is in reverse order or when the data set is random."
    },
    {
        title: "Merge",
        img: "/assets/algorithms/merge.png",
        analysis: "Merge Sort is a divide and conquer algorithm that uses recursion. Two functions are required. The first function recrusively calls itself to divide the list in half until the size becomes one. The second function is used to merge the two halves together. Hence, the time complexity is O(n * log(n)) and the space complexity is O(n).",
        use_case: "Merge Sort is most effective when using large data sets or when there is no memory or storage constraints. It is also effective when items in the data set can be accessed sequentially. Merge Sort does require extra storage, but it does not require the storage all at once. One can utilize Merge Sort to sort a large data set that does not fit in memory, but keep on a backup media such as a hard drive."
    },
    {
        title: "Quick",
        img: "/assets/algorithms/quick.png",
        analysis: "Quick Sort is a divide and conquer algorithm that uses recursion. A two-point approach is needed to sort. One pointer begins at the start index checking whether the value larger than the pivot and the second pointer begins at the end index checking whether the value is less than the pivot. If they are both true, swap the first and second pointers. Hence, the time complexity is O(n * log(n)) and space complexity O(log(n)). However, selecting a bad value as a pivot will cause the run-time to be quadratic.",
        use_case: "Quick Sort is a fast all-around sorting algorithm. It is most effective when using large data sets or when ordering of equal elements is not important."
    },
]