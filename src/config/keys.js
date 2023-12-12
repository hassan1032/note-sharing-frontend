import config from "./config.json";
console.log("process.env.", process.env.REACT_APP_ENV);
export const obj = config[process.env.REACT_APP_ENV]
console.log("keys", obj, process.env.REACT_APP_ENV);

