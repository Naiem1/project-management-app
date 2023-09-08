

/**
 * 
 * @param {string} key 
 * @param {[]} value 
 */
export const save = (key, value) => {
  if (typeof Storage !== 'undefined') {
    let data = JSON.parse(localStorage.getItem('users')) || [];
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
  }
};


/**
 * 
 * @param {string} key 
 * @returns 
 */
export const findFromStorage = (key) => {
  console.log('..', key);
  if (typeof Storage !== 'undefined') {
    const jsonData = localStorage.getItem(key);
    if (jsonData) {
      const parseData = JSON.parse(jsonData);

      return parseData ? parseData : [];
    }
  }
};



/**
 * 
 * @param {string} key 
 * @returns {Object} 
 */
export const getItemFromLocalStorage = (key) => {
  const parsedData =  localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key))
    : [];
  
  return parsedData;
};



/**
 * 
 * @param {string} key 
 * @param {{object}} value 
 */
export const setItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
