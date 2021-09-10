# 题目
    [989. 数组形式的整数加法](https://leetcode-cn.com/problems/add-to-array-form-of-integer/)
# 思路
根据 arr 的长度 在遍历过程中做幂等运算，得出 arr 转换后的数组
# 代码
    ```javascript

const addToArrayForm = function (arr, k) {

    let number = 0;
    // 根据 arr 的长度 在遍历过程中 做运算，得出 arr 转换后的数组
    // 0 + 1 * 1000 + 2 * 100 + 3 * 10 + 4

    for (let i = 0; i < arr.length; i++) {
        let len = arr.length - i - 1;
        number +=  arr[i] * Math.pow(10, len);
    }
    return number + k

}



````
# 复杂度分析

