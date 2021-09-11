# 题目

给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

```text
示例 1:

输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
说明:
```

# 思路

- 将 s 转为 S数组，找s里所有c的位置组成数组，遍历S数组逐一和c的数组进行差值计算，找到最小值，新建数组存放最小值
- 关键词：绝对值以及 索引位置



```javascript

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 * 将 s 转为 S数组，找s里所有c的位置组成数组，遍历S数组逐一和c的数组进行差值计算，找到最小值，新建数组存放最小值
 * 关键词：绝对值以及 索引位置
 */
let shortestToChar = function(s, c) {

    let array = [];
    let S = s.split('');
    let placeArray = [];

    for (let i = 0; i < S.length; i++) {
        if (S[i] == c) placeArray.push(i);
    }

    for (let i = 0; i < S.length ; i++) {

        let min = 0;
        let subtract = 0;

        for (let j = 0; j < placeArray.length ; j++) {

            subtract = Math.abs(placeArray[j] - i)

            if (j === 0 || min > subtract) {
                min = subtract
            }

        }

        array.push(min)
    }

    return array;

};

shortestToChar("loveleetcode", 'e')

```

# 复杂度分析
1. 时间复杂度：log(n) + n
2. 空间复杂度:
