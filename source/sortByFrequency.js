/**
 * Сортирует массив чисел по частоте появления элементов
 * @param {Array<number>} arr - исходный массив чисел
 * @returns {Array<number>} новый массив, отсортированный по частоте
 * @example
 * // returns [1, 1, 1, 3, 3, 2, 2]
 * sortByFrequency([1, 2, 3, 3, 2, 1, 1])
 */
const sortByFrequency = function(arr) {
    // 1. Подсчитываем частоту каждого числа
    const frequency = {};
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    // 2. Сортируем числа: сначала по частоте (убывание), потом по значению (возрастание)
    const sortedNumbers = Object.keys(frequency).sort((a, b) => {
        const freqA = frequency[a];
        const freqB = frequency[b];
        
        
        if (freqB !== freqA) {
            return freqB - freqA;
        }
        
       
        return Number(a) - Number(b);
    });
    
    
    const result = [];
    
    for (let i = 0; i < sortedNumbers.length; i++) {
        const num = Number(sortedNumbers[i]);
        const count = frequency[sortedNumbers[i]];
        
        for (let j = 0; j < count; j++) {
            result.push(num);
        }
    }
    
    return result;
};