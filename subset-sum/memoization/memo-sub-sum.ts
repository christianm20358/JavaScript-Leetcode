  
        // JavaScript Program for the above approach
 
 
        // Check if possible subset with
        // given sum is possible or not
        function memo_subset_sum(a: number[], n: number, sum: number) {
 
            // If the sum is zero it means
            // we got our expected sum
            if (sum == 0)
                return 1;
 
            if (n <= 0)
                return 0;
 
            // If the value is not -1 it means it
            // already call the function
            // with the same value.
            // it will save our from the repetition.
            if (tab[n - 1][sum] != -1)
                return tab[n - 1][sum];
 
            // if the value of a[n-1] is
            // greater than the sum.
            // we call for the next value
            if (a[n - 1] > sum)
                return tab[n - 1][sum] = memo_subset_sum(a, n - 1, sum);
            else {
 
                // Here we do two calls because we
                // don't know which value is
                // full-fill our criteria
                // that's why we doing two calls
                return tab[n - 1][sum] = memo_subset_sum(a, n - 1, sum) ||
                    memo_subset_sum(a, n - 1, sum - a[n - 1]);
            }
        }
 
        // Driver Code
 
        // Storing the value -1 to the matrix
        let tab = Array(2000).fill().map(() => Array(2000).fill(-1));
 
        let n = 5;
        let a = [1, 5, 3, 7, 4];
        let sum = 12;
 
        if (memo_subset_sum(a, n, sum)) {
            document.write("YES" + "<br>");
        }
        else {
            document.write("NO" + "<br>");
        }
 
    // This code is contributed by Potta Lokesh
 