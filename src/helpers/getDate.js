let getDate = (date) => {
  let dateObj = new Date(Date.parse(date));
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  };
  let day = dateObj.getDate();
  return `${day}.${month}.${year}`;
};

export default getDate;