export const stepFields = {
  image: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
  },
  title: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
  },
  content: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
  },
};

export const ingredientFields = {
  ingredientId: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
  },
  count: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
    validates: [
      {
        errorText: 'Укажите количество',
        checkFunc: 'notZeroValue',
      },
      {
        errorText: 'Некорректное значение',
        checkFunc: 'isPositive',
      },
    ],
  },
  unitId: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
  },
};

export default {
  name: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
  },
  description: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
  },
  image: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
  },
  ingredients: {
    required: true,
    requiredMessage: 'Не выбраны ингредиенты',
  },
  recipesGroupId: {
    required: true,
    requiredMessage: 'Не выбрана группа',
  },
  difficultId: {
    required: true,
    requiredMessage: 'Не выбрана сложность',
  },
  calories: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
    validates: [
      {
        errorText: 'Укажите количество',
        checkFunc: 'notZeroValue',
      },
      {
        errorText: 'Некорректное значение',
        checkFunc: 'isPositive',
      },
    ],
  },
  proteins: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
    validates: [
      {
        errorText: 'Укажите количество',
        checkFunc: 'notZeroValue',
      },
      {
        errorText: 'Некорректное значение',
        checkFunc: 'isPositive',
      },
    ],
  },
  fats: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
    validates: [
      {
        errorText: 'Укажите количество',
        checkFunc: 'notZeroValue',
      },
      {
        errorText: 'Некорректное значение',
        checkFunc: 'isPositive',
      },
    ],
  },
  carbohydrates: {
    required: true,
    requiredMessage: 'Поле обязательно для заполнения',
    validates: [
      {
        errorText: 'Укажите количество',
        checkFunc: 'notZeroValue',
      },
      {
        errorText: 'Некорректное значение',
        checkFunc: 'isPositive',
      },
    ],
  },
};
