function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let s1 = nums1.length;
    let s2 = nums2.length;
    let total = s1 + s2;
    let rest = Math.floor(total / 2) - 1;
    console.log(rest)
    let rest1 = s1;
    let rest2 = s2;
    let last1;
    let last2;

    while (rest) {
        if (!rest1) {
            rest2 -= rest;
            rest = 0;
        } else if (!rest2) {
            rest1 -= rest;
            rest = 0;
        } else {
            if (rest === 1) {
                let last1 = nums1[s1 - (rest1 - 1) - 1];
                let last2 = nums2[s2 - (rest2 - 1) - 1];
                if (last2 > last1) {
                    rest1--;
                } else {
                    rest2--;
                }
                rest--;
            } else {
                let half = Math.floor(rest / 2);
                let select1 = half;
                let select2 = rest - select1;
                if (rest1 < rest2 && select1 > rest1) {
                    select1 = rest1;
                    select2 = rest - select1;
                } else if (rest2 < rest1 && select2 > rest2) {
                    select2 = rest2;
                    select1 = rest - select2;
                }
                last1 = nums1[s1 - (rest1 - select1) - 1];
                last2 = nums2[s2 - (rest2 - select2) - 1];
                if (last1 > last2) {
                    rest -= select2;
                    rest2 -= select2;
                } else {
                    rest -= select1;
                    rest1 -= select1;
                }
            }
        }
    }

    let middle;
    if (!rest1) {
        middle = nums2[s2 - (rest2 - 1) - 1];
        rest2--;
    } else if (!rest2) {
        middle = nums1[s1 - (rest1 - 1) - 1];
        rest1--;
    } else {
        let last1 = nums1[s1 - (rest1 - 1) - 1];
        let last2 = nums2[s2 - (rest2 - 1) - 1];
        if (last1 > last2) {
            middle = last2;
            rest2--;
        } else {
            middle = last1;
            rest1--;
        }
    }

    let midNext;
    if (!rest1) {
        midNext = nums2[s2 - (rest2 - 1) - 1];
    } else if (!rest2) {
        midNext = nums1[s1 - (rest1 - 1) - 1];
    } else {
        let last1 = nums1[s1 - (rest1 - 1) - 1];
        let last2 = nums2[s2 - (rest2 - 1) - 1];
        midNext = Math.min(last1, last2);
    }

    let isOdd = total % 2;
    if (isOdd) {
        return midNext;
    } else {
        return (middle + midNext) / 2;
    }
}
let nums1: number[] = [1, 3], nums2: number[] = [2]
console.log(findMedianSortedArrays(nums1, nums2))