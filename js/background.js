const captchaValue = document.getElementById('check_code').value;
var checkBoxValue = null;
document.querySelector("#username1").value = 'admin';
document.querySelector("#verification_code").value = captchaValue;
document.querySelector("#psd1").type = 'text';
chrome.storage.local.get(["setPassCheckBox"], function (items) {
     checkBoxValue = items.setPassCheckBox;
     if (checkBoxValue == true) {
          chrome.storage.local.get(["savedPass"], function (items) {
               document.querySelector("#psd1").value = items.savedPass;
          });
     }
});
