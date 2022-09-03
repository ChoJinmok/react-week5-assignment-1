const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  filter: {
    regionName: null,
    categoryId: null,
  },
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  const index = {
    setButtonData: () => {
      const { sort, data } = payload;

      return {
        ...state,
        [sort]: data,
      };
    },

    applyFilter: () => {
      const { filter } = state;
      const { field, content } = payload;

      return {
        ...state,
        filter: {
          ...filter,
          [field]: content,
        },
      };
    },

    setFilteredRestaurants: () => ({
      ...state,
      restaurants: payload.restaurants,
    }),

    default: () => state,
  };

  return (index[type] || index.default)();
}
