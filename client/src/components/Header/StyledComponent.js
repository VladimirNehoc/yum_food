import styled from 'styled-components';

export default styled.div`
  background-color: ${(props) => props.theme.bgHeaderColor};

  .container {
    width: 100%;
    max-width: 1020px;
    padding: 10px;
    box-sizing: border-box;
    margin: auto;
    display: grid;
    grid-template-areas: 'logo search search'
                          'menu menu switcher';
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-row-gap: 10px;
    grid-column-gap: 10px;

    .logo {
      grid-area: logo;
      color: #fff;
      font-size: 32px;
      text-transform: uppercase;
      font-weight: 500;
      position: relative;
      display: flex;
      align-items: center;
      width: fit-content;
      height: 40px;

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: #fff;
        top: 0;
        left: 0;
        border-radius: 2px;
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: #fff;
        bottom: 0;
        left: 0;
        border-radius: 2px;
      }
    }

    .search {
      grid-area: search;
      display: flex;
      justify-content: end;

      &_ingredients {
        margin-right: 10px;

        & > button {
          height: 40px;
          padding: 0 20px;
          background-color: ${(props) => props.theme.bgColor1};
          color: #fff;
          font-size: 1em;
          border: none;
          border-radius: ${(props) => props.theme.borderRadiusXS};
          cursor: pointer;
          transition: .1s;

          &:hover {
            background-color: ${(props) => props.theme.bgColorHover1};
          }
        }
      }

      &_input-container {
        height: 40px;
        background-color: ${(props) => props.theme.bgColorDefault};
        border-radius: ${(props) => props.theme.borderRadiusXS};
        display: flex;
        align-items: center;
        width: 400px;
        box-sizing: border-box;
        overflow: hidden;

        &_input {
          flex-grow: 1;
          height: 100%;

          & > input {
            height: 100%;
            width: 100%;
            font-size: 1em;
            box-sizing: border-box;
            padding: 0 12px;
            border: none;
            outline: none;
            background-color: transparent;
            caret-color: ${(props) => props.theme.textColorContrast};
            color: ${(props) => props.theme.textColorContrast};

            &::placeholder {
              color: ${(props) => props.theme.textColorPlaceholder};;
            }
          }
        }

        &_button {
          height: 30px;
          margin-right: 5px;

          & > button {
            height: 100%;
            background-color: ${(props) => props.theme.bgColor1};
            color: #fff;
            font-size: 1em;
            padding: 0 25px;
            border: none;
            border-radius: ${(props) => props.theme.borderRadiusXS};
            cursor: pointer;
            transition: .1s;

            &:hover {
              background-color: ${(props) => props.theme.bgColorHover1};
            }
          }
        }
      }
    }

    .menu {
      grid-area: menu;

      & > *:not(:last-child) {
        margin-right: 10px;
      }
    }

    .switcher {
      grid-area: switcher;
    }
  }
`;
