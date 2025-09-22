const p = require('./payroll-dates.js');
console.log('=== Test ===');
const year = 2025;

const expectedPayDates2024 = [
    '2024/02/01', // January
    '2024/03/01', // February
    '2024/03/27', // March
    '2024/04/30', // April
    '2024/05/31', // May
    '2024/06/28', // June
    '2024/08/01', // July
    '2024/08/30', // August
    '2024/10/01', // September
    '2024/11/01', // October
    '2024/11/29', // November
    '2024/12/30', // December
];
const expectedPayDates2025 = [
    '2025/01/31', // january
    '2025/02/28', // february
    '2025/04/01', // March
    '2025/04/30', // April
    '2025/05/30', // May
    '2025/07/01', // June
    '2025/07/31', // July
    '2025/08/29', // August
];

var expectedPayDates = {};
expectedPayDates['2024'] = expectedPayDates2024;
expectedPayDates['2025'] = expectedPayDates2025;

let passedTests = 0;
let failedTests = 0;

//const month = 5; // 0-based month
//const pd = '2025/07/01'; // Expected pay date for June 2025
//const calculatedPayDate = p.getPayDateFormatted(year, month);
//console.log(`Month: ${month + 1}, Calculated: ${calculatedPayDate}, Expected: ${pd}`);
//if (calculatedPayDate !== pd) {
//    console.error(`!!! Test failed for month ${month + 1}`);
//    failedTests++;
//} else {
//    passedTests++;
//}

expectedPayDates[year].forEach ((pd, index) => {
    const month = index; // 0-based month
    const calculatedPayDate = p.getPayDateFormatted(year, month);
    console.log(`Month: ${month + 1}, Calculated: ${calculatedPayDate}, Expected: ${pd}`);
    if (calculatedPayDate !== pd) {
        console.error(`!!! Test failed for month ${month + 1}`);
        failedTests++;
    } else {
        passedTests++;
    }
});

console.log('\n=== Test Summary ===');
console.log(`✅ Passed: ${passedTests}`);
console.log(`❌ Failed: ${failedTests}`);
console.log(`📊 Total: ${passedTests + failedTests}`);
console.log(failedTests === 0 ? 'All tests passed!' : `⚠️  ${failedTests} test(s) failed`);
console.log('\n=== All tests completed ===');