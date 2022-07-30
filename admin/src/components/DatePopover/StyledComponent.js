import styled from 'styled-components';

export default styled.div`
  background-color: ${(props) => props.styles.container.backgroundColor};
  box-shadow: ${(props) => props.styles.container.boxShadow};
  border-radius: ${(props) => props.styles.container.borderRadius};
  padding: ${(props) => props.styles.container.padding};
  width: fit-content;
  position: absolute;
  top: calc(100% + 3px);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_prev-day {
      width: fit-content;
      cursor: pointer;

      & svg {
        height: 14px;
        fill: ${(props) => props.styles.header.buttonColor};
        transform: rotate(180deg);
      }
    }

    &_next-day {
      width: fit-content;
      cursor: pointer;

      & svg {
        height: 14px;
        fill: ${(props) => props.styles.header.buttonColor};
      }
    }

    &_current-day {
      min-width: 180px;
      text-align: center;
      font-size: ${(props) => props.styles.header.fontSize};
      color: ${(props) => props.styles.header.color};
      cursor: default;
      font-weight: ${(props) => props.styles.header.fontWeight};
    }
  }

  .day-weeks {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    color: ${(props) => props.styles.dayWeeks.color};
    font-size: ${(props) => props.styles.dayWeeks.fontSize};
    cursor: default;

    &_day {
      text-align: center;
    }
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    cursor: pointer;

    &_day-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      padding: 2px;
      box-sizing: border-box;
      color: ${(props) => props.styles.days.color};

      &.prev, &.next {
        opacity: 0.4;
      }
    }

    &_day {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;

      &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        border-radius: 50%;
        transition: all ${(props) => props.styles.days.transition}, color 0s;
        background-color: transparent;
        z-index: -1;
      }
    }
  }

  .days.only {
    .days_day-container {
      &:hover {
        .days_day:before {
          transition: all ${(props) => props.styles.days.transition};
          background-color: #ddd;
        }
      }

      &.selected {
        .days_day:before {
          background-color: ${(props) => props.styles.days.selectedBackgroundColor};
        }

        .days_day {
          color: ${(props) => props.styles.days.selectedColor};
        }
      }
    }
  }

  .days.range {
    .days_day-container {
      position: relative;

      &:hover {
        .days_day:before {
          background-color: #ddd;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: calc(100% - 4px);
        top: 2px;
        left: 0;
        transition: all ${(props) => props.styles.days.transition};
        background-color: transparent;
        z-index: -1;
      }

      &.selected-start:before, &.selected-end:before {
        transition: all ${(props) => props.styles.days.transition}, border-radius 0s;
      }
    }

    &:not(.has-range) {
      .days_day-container {
        &.selected, &.selected-start {
          .days_day:before {
            background-color: ${(props) => props.styles.days.selectedBackgroundColor};
          }

          .days_day {
            color: ${(props) => props.styles.days.selectedColor};
          }
        }
      }
    }

    &.has-range {
      .days_day-container {
        position: relative;
        z-index: 1;

        &.selected {
          color: ${(props) => props.styles.days.selectedColor};

          .days_day:before {
              background-color: transparent;
              opacity: .2;
            }

          &:hover {
            .days_day:before {
              background-color: ${(props) => props.styles.container.backgroundColor};
              opacity: .2;
            }
          }

          &:before {
            background-color: ${(props) => props.styles.days.selectedBackgroundColor};
          }
        }

        &.selected.selected-start {
          &:before {
            width: calc(100% - 2px);
            left: 2px;
            border-radius: 50% 0 0 50%;
          }
        }

        &.selected.selected-end {
          &:before {
            width: calc(100% - 2px);
            right: 2px;
            border-radius: 0 50% 50% 0;
          }
        }
      }
    }
  }
`;
