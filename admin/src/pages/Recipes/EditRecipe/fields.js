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
    validates: [
      {
        errorText: 'Загрузите изображение',
        checkFunc: 'isFile',
      },
    ],
  },
  ingredients: {
    required: true,
    requiredMessage: 'Не выбраны ингредиенты',
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
