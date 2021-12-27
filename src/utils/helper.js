export const currency = ({
  value, type = 'Rp', thousandSeparator = '.', decimal = false, convertMinus = false,
}) => {

  let formattedNumber;

  if (decimal) {
      const toFixedNum = parseFloat(value).toFixed(2); // set two decimal places
      const decimalSplit = (toFixedNum) ? toFixedNum.split('.') : ['0', '00'];
      decimalSplit[0] = decimalSplit[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${thousandSeparator}`);
      formattedNumber = decimalSplit.join((thousandSeparator === ',' ? '.' : ','));
  } else {
      formattedNumber = Math.round(value).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${thousandSeparator}`);
  }

  if (convertMinus && parseFloat(value) < 0) {
      const numberWithoutMinus = formattedNumber.toString().replace('-', '');
      return (type.length > 0) ? `( ${type} ${numberWithoutMinus} )` : `( ${numberWithoutMinus} )`;
  }

  return (type.length > 0) ? `${type} ${formattedNumber}` : formattedNumber;
};