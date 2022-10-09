import moment from "moment/moment";

export const formattedTime = (timeStamp) => {
  return moment(new Date(timeStamp.seconds * 1000)).format("D MMM YYYY");
  
};
