export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
};

export const formatMoney = (str) => {
  return parseFloat(str).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
