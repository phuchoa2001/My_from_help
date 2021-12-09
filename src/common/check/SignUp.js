function Emailcheck(text) {
  const Blank = blankTest(text);
  if (Blank) {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!text.match(pattern)) {
      return "Bạn nhập không phải email";
    }
    return "";
  } else {
    return "Bạn chưa điền chỗ này";
  }
}
function Usernamecheck(text) {
  const Blank = blankTest(text);
  if (Blank) {
    return "";
  } else {
    return "Bạn chưa điền chỗ này";
  }
}
function Passwordcheck(text, retypeText) {
  const Blank = blankTest(text);
  const retypeBlank = blankTest(retypeText);
  if (Blank && retypeBlank) {
    if (text !== retypeText) {
      return "Mất khẩu không trùng nhau";
    }
    return "";
  } else {
    return "Bạn chưa điền chỗ này";
  }
}
function blankTest(text) {
  const isBool = text === "" ? false : true;
  return isBool;
}
function signUpCheck(name, text, retypeText) {
  switch (name) {
    case "email":
      var messgerEmail = Emailcheck(text);
      return messgerEmail;
    case "username":
      var messgeUser = Usernamecheck(text);
      return messgeUser;
    case "password":
      var messgerPassword = Passwordcheck(text, retypeText);
      return messgerPassword;
    default:
      return "";
  }
}
export default signUpCheck;
