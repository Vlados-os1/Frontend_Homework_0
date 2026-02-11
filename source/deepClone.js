"use strict";

/**
 * Создает глубокую копию объекта или массива
 * @param {*} obj - Значение, которое нужно клонировать
 *
 * @example
 * // Клонирование массива
 * const arr = [1, 2, { a: 3 }];
 * const clonned = deepClone(arr);
 * clonned[2].a = 99;
 * console.log(arr[2].a); // 3
 *
 * @returns {*} Глубокая копия исходного значения
 */
const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const clonned = Object.create(Object.getPrototypeOf(obj));
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonned[key] = deepClone(obj[key]);
    }
  }

  return clonned;
};
