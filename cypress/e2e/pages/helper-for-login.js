import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

function loginAndSubmit(username, password); {
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickSubmit();
  };