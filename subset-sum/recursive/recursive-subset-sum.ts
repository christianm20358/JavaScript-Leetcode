// A recursive solution for subset sum problem

// Returns true if there is a subset of set[] with sum
// equal to given sum
/*
    function recursive_subset_sum(recurse_set: number[], recurse_n: number, recurse_sum: number): boolean
    {
        // Base Cases
        if (recurse_sum == 0)
            return true;
        if (recurse_n == 0)
            return false;

        // If last element is greater than sum,
        // then ignore it
        if (recurse_set[recurse_n - 1] > recurse_sum)
            return recursive_subset_sum(recurse_set, recurse_n - 1, recurse_sum);

        /* else, check if sum can be obtained
        by any of the following
        (a) including the last element
        (b) excluding the last element

        return recursive_subset_sum(recurse_set, recurse_n - 1, recurse_sum)
          || recursive_subset_sum(recurse_set, recurse_n - 1, recurse_sum - recurse_set[recurse_n - 1]);
    }

    let recurse_set = [ 3, 4, 2];
    let recurse_sum = 9;
    let recurse_n = recurse_set.length;
    if (recursive_subset_sum(recurse_set, recurse_n, recurse_sum) == true)
      document.write("Found a subset with given sum");
    else
      document.write("No subset with given sum");
      */
