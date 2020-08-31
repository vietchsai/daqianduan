require('./index.scss');

console.log("hello world");

// 根据不提供环境提供的支持
if (process.env.NODE_ENV === "development"){
  console.log("localhost test mode");
}else{
  console.log("online mode");
}
