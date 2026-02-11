'use strict';

/**
 * Сортирует массив чисел по частоте их появления.
 * Элементы с большей частотой появляются раньше в результирующем массиве.
 * Если два элемента имеют одинаковую частоту, они сортируются по возрастанию значени> *
 * @param {number[]} arr Входной массив чисел для сортировки
 * @returns {number[]} Новый массив, отсортированный по частоте появления элементов
 */
function sortByFrequency(arr) {
  if (arr.length === 0) {
    return [];
  }

  const frequencyMap = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (frequencyMap[num] === undefined) {
      frequencyMap[num] = 1;
    } else {
      frequencyMap[num]++;
    }
  }

  const result = arr.slice();

  result.sort(function(a, b) {
    const freqA = frequencyMap[a];
    const freqB = frequencyMap[b];

    if (freqA !== freqB) {
      return freqB - freqA;
    }

    return a - b;
  });

 return result;
}

