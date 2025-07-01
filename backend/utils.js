const convertTime = (date) => {
  return date.toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

module.exports = convertTime;
