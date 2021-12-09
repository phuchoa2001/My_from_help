function Passwordcheck(text) {
  const blank = blankTest(text);
  if (blank) {
  } else {
    return "Bạn chưa điền chỗ này";
  }
}
function Usernamecheck(text) {
  const blank = blankTest(text);
  if (blank) {
    return "";
  } else {
    return "Bạn chưa điền chỗ này";
  }
}
function blankTest(text) {
  const isBool = text === "" ? false : true;
  return isBool;
}
function signInCheck(name, text) {
  switch (name) {
    case "username":
      // code block
     const messgerUser =  Usernamecheck(text);
      return messgerUser;
    case "password":
      // code block
      const messgerPassword =  Passwordcheck(text);
      return messgerPassword;
    default:
      return "";
  }
}
export default signInCheck;
