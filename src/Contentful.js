const contentful = require("contentful");

if(process.env.REACT_APP_API_SPACE){
  module.exports = contentful.createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  })
}
/*
export default contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
*/
