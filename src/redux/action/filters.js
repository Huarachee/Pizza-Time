// Action Creator - потому что эта функция создаёт "Action" и принимает динамические данные
export const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name,
});

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
});