/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
let shortestToChar = function(s, c) {

    // 将 string 转为数组, 根据字符串所在位置组成目标字符串数组，在原数组中找到每个字符串具体目标字符串索引最近的位置
    // 关键词：绝对值以及 索引位置

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

// 输入: S = "loveleetcode", C = 'e'
// 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
