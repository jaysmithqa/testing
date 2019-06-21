const assert = require('assert')
module.exports = function () {
    this.When(/^I visited "([^"]*)"$/, function (url) {
      helpers.loadPage(url).then(() => {});
    }); 
    this.Then(/^I Click Link Button "([^"]*)"$/, function(button, callback){
      driver.findElement(By.className("btn-register")).click();
      callback();
    })
    this.Then(/^I input "([^"]*)" and "([^"]*)" and "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, arg3, arg4, callback) {
         // Write code here that turns the phrase above into concrete actions
         driver.findElement(By.id("wallet_user_nickname")).sendKeys(arg1);
         driver.findElement(By.id("wallet_user_email")).sendKeys(arg2);
         driver.findElement(By.id("wallet_user_password")).sendKeys(arg3);
         driver.findElement(By.id("wallet_user_password_confirmation")).sendKeys(arg4);
         driver.findElement(By.id("wallet_user_agreed")).click()
         driver.findElement(By.className("btn-primary")).click();
         callback();
       });
};
