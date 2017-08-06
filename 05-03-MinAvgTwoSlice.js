/** Lesson 5 - Task 3 MinAvgTwoSlice
Find the minimal average of any slice containing at least two elements.
Task description
A non-empty zero-indexed array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

function solution(A);

that, given a non-empty zero-indexed array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Assume that:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

*/

//90%
function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    const N = A.length;
    let minIdx = 0;
    
    if(N === 2) return minIdx;
    
    let minAvg = Number.MAX_VALUE;
    
    for(let i = 0; i < (N - 2); i++) {
        let a1 = (A[i] + A[i+1]) / 2;
        let a2 = (A[i] + A[i+1] + A[i+2]) / 3;
                
        if(minAvg > Math.min(minAvg, a1, a2)) {
            minAvg = Math.min(minAvg, a1, a2)
            minIdx = i;        
        }

    }
    
    return minIdx;
    
}

//100%
function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    const N = A.length;
    let minIdx = 0, minAvg = Number.MAX_VALUE;
    
    if(N <= 2) return minIdx;
    
    for(let i = 1; i < N-1; i++) {
        let a1 = (A[i-1] + A[i]) / 2;
        let a2 = (A[i-1] + A[i] + A[i+1]) / 3;
        let a3 = (A[i] + A[i+1]) / 2;
        let amin = Math.min(a1, a2, a3);
        if(minAvg > amin) {
            minAvg = amin;
            if(a1 === amin || a2 === amin) {
                minIdx = i-1;    
            } else {
                minIdx = i;
            }
        }
    }
    
    return minIdx;
}
