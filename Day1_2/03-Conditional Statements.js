
let browserName = 'Chrome';
function launchBrowser() {

    if (browserName.startsWith('Chrome'))
        console.log("Chrome Browser is launched");
    else if (browserName.startsWith('Safari'))
        console.log("Safari Browser is launched");
    else if (browserName.startsWith('FireFox'))
        console.log("FireFox Browser is launched");
    else
        console.log("Default Browser is launched");
}

launchBrowser();
//////////////////********************************************/////////////////////
const testType = 'smoke';

function runTests() {
    switch (testType) {
        case 'smoke':
            console.log("Smoke Test will be performed");
            break;
        case 'sanity':
            console.log("Sanity Test will be performed");
            break;
        case 'regression':
            console.log("Regression Test will be performed");
            break;
        default:
            console.log("Smoke Test will be performed");
    }

}
runTests();