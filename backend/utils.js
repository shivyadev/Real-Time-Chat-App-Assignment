// helper function to convert time to hh:mm format
const convertTime = (date) => {
  return date.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

module.exports = convertTime;
