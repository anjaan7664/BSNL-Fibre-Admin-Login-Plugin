window.onload = () => {
    document.getElementById('passSaveButton').
    addEventListener('click', function () {
        const pass = document.getElementById('usern').value;
        chrome.storage.local.set({
                'savedPass': pass
            }, function () {
                console.log('Value is set to ' + pass);
                chrome.tabs.getSelected(null, function (tab) {
                    chrome.tabs.reload(tab.id);
                });
            }

        );
    });
    const checkBox = document.getElementById('usePassCheckbox');
    checkBox.addEventListener('click', () => setThisPassword(checkBox.checked));
    chrome.storage.local.get(["savedPass"], function (items) {
        document.getElementById('usern').value = items.savedPass;
    });

    chrome.storage.local.get(["setPassCheckBox"], function (items) {
        checkBox.checked = items.setPassCheckBox;

    });

}

function setThisPassword(val) {

    chrome.storage.local.set({
        'setPassCheckBox': val
    }, () => {
        console.log('CheckBox Value is set to ' + val);
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.reload(tab.id);
        });
    })
}