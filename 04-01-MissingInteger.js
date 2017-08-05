/** Lesson 4 Counting Elements - Task 1 MissingInteger
Find the minimal positive integer not occurring in a given sequence.
Task description
Write a function:

function solution(A);

that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
*/

function solution(A) {
    var N = A.length, s = new Array(N), m = N+1
    
    for(var i = 0; i < N; i++) {
        s[i] = true    
    }

    for(var j in A) {
        var x = A[j]
        if(x <= 0 || x > N) continue
        s[x-1] = false
    }

    for(var k = 0; k < N; k++){        
        if(s[k]){
            m = k+1  
            break
        }
    }
    
    return m
}

