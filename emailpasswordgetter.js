

const GetEmailPassword = async (from) => {

  const emailName = localStorage.getItem("username");
  console.log(emailName);
  const passwordName = localStorage.getItem("password");
  console.log(passwordName);
  GlobalUnityInstance.SendMessage(
    "FirstTimeEmailPasswordGetter",
    "FillTextComponents",
    emailName +":"+
    passwordName
  )
};
