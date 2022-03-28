const formatDate = (date) => {
  const dateconvert = new Date(date);
  const stringDateConvert =
    dateconvert.getDate() +
    "/" +
    (dateconvert.getMonth() + 1) +
    "/" +
    dateconvert.getFullYear() +
    ", " +
    dateconvert.toLocaleTimeString();
  return stringDateConvert;
};
export default formatDate;
