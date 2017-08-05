/** Lesson 4 Counting Elements - Task 2 PermCheck
Check whether array A is a permutation.
Task description
A non-empty zero-indexed array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given a zero-indexed array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

*/

function solution(A) {
    var N = A.length, p = new Array(N), isP = 1
    
    for(var i = 0; i < N; i++) {
        p[i] = false    
    }

    for(var j = 0; j < N; j++) {
        p[A[j] - 1] = true    
    }

    for(var k in p) {
        if(!p[k]) {
            isP = 0
            break
        }
    }
    
    return isP
}

function solutionA(A) {
	const N = A.length;
	return Number(new Set(A).length === N && Math.max(...A) === N);
}