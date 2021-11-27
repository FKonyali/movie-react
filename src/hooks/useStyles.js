import globalStyles from '../styles';

const useStyles = (styles = {}) => {
  const combinedStyles = { ...globalStyles, ...styles };

  const cx = (...args) => {
    let style = {};
    args && args.forEach(x => {
      switch (typeof x) {
        case 'string':
          let classes = x.split(' ');
          classes.forEach(y => {
            combinedStyles[y] && Object.assign(style, combinedStyles[y]);
          });
          break;
        default:
          break;
      }
    });
    return style;
  };

  return cx;
};

export default useStyles;
