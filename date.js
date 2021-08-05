//custom module to create the date
exports.getDate = function () {
  const today = new Date();
  //   const currDay = today.getDay();
  //   let day = "";
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);

  //if else for >5
  //   if (currDay === 0) day = "Sunday";
  //   else if (currDay === 1) day = "Monday";
  //   else if (currDay === 2) day = "Tuesday";
  //   else if (currDay === 3) day = "Wednesday";
  //   else if (currDay === 4) day = "Thursday";
  //   else if (currDay === 5) day = "Friday";
  //   else if (currDay === 6) day = "Saturday";

  //switch for 5+
  //   switch (currDay) {
  //     case 0:
  //       day = "Sunday";
  //       break;
  //     case 1:
  //       day = "Monday";
  //       break;
  //     case 2:
  //       day = "Tuesday";
  //       break;
  //     case 3:
  //       day = "Wednesday";
  //       break;
  //     case 4:
  //       day = "Thursday";
  //       break;
  //     case 5:
  //       day = "Friday";
  //       break;
  //     case 6:
  //       day = "Saturday";
  //       break;
  //     default:
  //       console.log(`Error: current day is equal to: ${currDay}`);
  //   }
};
exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
