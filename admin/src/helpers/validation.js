import _ from 'lodash';

// Пример объекта validates в аргументах
// {
//   name: {
//     required: true,
//     validates: [
//       {
//         errorText: 'Обязательно для заполнения',
//         checkFunc: 'notEmptyString',
//       }
//     ]
//   },
//   age: {
//     required: true,
//     validates: [
//       {
//         errorText: 'Возраст должен быть больше нуля',
//         checkFunc: 'notZeroValue',
//       }
//     ]
//   },
//   comment: {
//     validates: [
//       {
//         errorText: 'Максимальное количество символов 300',
//         checkFunc: ['maxSymbols', 300],
//       }
//     ]
//   }
// }

export default (state, fields) => {
  try {
    const errors = {};

    const validateFunctions = {
      notEmptyString: (string) => !!_.trim(string),
      notEmptyArray: (array) => !_.isEmpty(array),
      notZeroValue: (string) => string !== 0 && string !== '0',
      isNumber: (value) => _.isNumber(value),
      isPositive: (number) => number > 0,
      isFile: (data) => data instanceof File,
    };

    _.forEach(fields, (field, name) => {
      if (
        field.required
        && (
          !state[name]
          || !_.trim(state[name])
          || (
            (_.isArray(state[name]) || _.isObject(state[name]))
            && !(state[name] instanceof File) && _.isEmpty(state[name])
          )
        )
      ) {
        errors[name] = field.requiredMessage || 'Поле обязательно для заполнения';

        return;
      }

      _.forEach(field.validates, (validate) => {
        if (errors[name]) return;

        const { checkFunc: checkFuncData, errorText } = validate;

        let checkFuncName;
        let args = [];

        if (_.isArray(checkFuncData)) {
          [checkFuncName, ...args] = checkFuncData;
        } else {
          checkFuncName = checkFuncData;
        }

        const currentValidateFunction = validateFunctions[checkFuncName];

        if (!currentValidateFunction) {
          throw Error(`Некорректное имя функции - ${checkFuncName}`);
        }

        if (!currentValidateFunction(_.get(state, name), ...args)) {
          errors[name] = errorText;
        }
      });
    });

    return errors;
  } catch (error) {
    console.error(error);

    return {};
  }
};
