/** Lesson 5 Prefix Sum - Task 4 GenomicRangeQuery
Find the minimal nucleotide from a range of sequence DNA.
Task description
A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:

The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
Write a function:

function solution(S, P, Q);

that, given a non-empty zero-indexed string S consisting of N characters and two non-empty zero-indexed arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

The sequence should be returned as:

a Results structure (in C), or
a vector of integers (in C++), or
a Results record (in Pascal), or
an array of integers (in any other programming language).
For example, given the string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.

Assume that:

N is an integer within the range [1..100,000];
M is an integer within the range [1..50,000];
each element of arrays P, Q is an integer within the range [0..N − 1];
P[K] ≤ Q[K], where 0 ≤ K < M;
string S consists only of upper-case English letters A, C, G, T.
Complexity:

expected worst-case time complexity is O(N+M);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/

//naive solution O(N*M) 62%
function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 6.4.0)
    const N = S.length, M = P.length,
        impacts = {"A": 1, "C": 2, "G": 3, "T": 4};
    let r = new Array(M);
        
    //naive solution
    let s = new Array(N);
    for(let l = 0; l < N; l++) {
        s[l] = impacts[S[l]];    
    }
    for(let k = 0; k < M; k++) {
        r[k] = Math.min(...s.slice(P[k], (Q[k] + 1)))
    }
    
    return r;
}

//O(N*M) 75%
function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 6.4.0)
    const N = S.length, M = P.length;
    let r = new Array(M);
    
    for(let j = 0; j < M; j++) {
        let st = P[j], ed = Q[j],
            s = S.substring(st, (ed+1));
        if(s.split("A").length === 1) { //no A
            if(s.split("C").length === 1) { //no C
                if(s.split("G").length === 1) { //no G
                    r[j] = 4;
                } else {
                    r[j] = 3
                }
            } else {
                r[j] = 2;
            }
        } else {
            r[j] = 1;
        }
    }
    
    return r;
}

// weird O(M+N) 100% - only works for JS?
// Doesn't codility count built-in functions O(N) time complexity?
function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 6.4.0)
    let r = new Array(P.length);
    
    for(let i =  0; i < P.length; i++) {
        let dna = S.slice(P[i], Q[i]+1);
        
        if(dna.indexOf("A") > -1) {
            r[i] = 1;
        } else if(dna.indexOf("C") > -1) {
            r[i] = 2;
        } else if(dna.indexOf("G") > -1) {
            r[i] = 3;
        } else {
            r[i] = 4;
        }
    }
    
    return r;
}

// O(M+N) 83%: wrong answer for "double character string"
function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 6.4.0)
    const imp = {
            "A" : 1,
            "C" : 2,
            "G" : 3,
            "T" : 4
        };
    let result = new Array(P.length);
    let A = new Array(S.length + 1);
    let C = new Array(S.length + 1);
    let G = new Array(S.length + 1);
    A[0] = C[0] = G[0] = 0;
    
    for(let i = 1; i < S.length + 1; i++) {
        A[i] = A[i-1] + (S[i] === "A" ? 1 : 0);
        C[i] = C[i-1] + (S[i] === "C" ? 1 : 0);
        G[i] = G[i-1] + (S[i] === "G" ? 1 : 0);
    }
    
    for(let j = 0; j < P.length; j++) {
        if(P[j] === Q[j]) {
            result[j] = imp[S[P[j]]];
        }  else {
            let end = Q[j], start = P[j] === 0 ? 0 : P[j] - 1;
            if(A[end] - A[start] > 0) {
                result[j] = imp["A"];
            } else if (C[end] - C[start] > 0) {
                result[j] = imp["C"];
            } else if (G[end] - G[start] > 0) {
                result[j] = imp["G"];
            } else {
                result[j] = imp["T"]
            }
        }
    }
    
    return result;
}






