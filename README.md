# Restfulbooker

# What you tested and how

Manual Test Cases were first documented against the requirements. Additional test cases were captured that are gaps in requirements that need consultation with Project teams to ensure successful requirements delivery to the development team.

#HomePage

- Verify User can see room options (Bug - only 1 room option is available) [FAIL]
- Verify user can click 'Book this room' and see the system load the "availability" calendar [PASS]
- Verify Contact info is still present below the calendar once user clicks on 'Book this room' button [PASS]
- Verify calendar opens in edit mode [PASS]
- Verify Calendar is default to the next month [PASS]
- Verify previous month and next month dates are color grey on the calendar dates [PASS]
- Verify user is not able to select past dates to book on the calendar [FAIL]

#ContactInfo

- Verify contact information form is available next to the calendar in edit mode [PASS]
- Verify placeholder text is "First name" in contact info input field [FAIL]
- Verify "First name" character count is between 3 and 20 [FAIL][error message states size must be 3-18/ error message is not clear]
- Verify error message when user inputs less than 3 characters [PASS]
- Verify constraint when user attempts to enter 20 characters in the "First name" input field [FAIL]
- Verify placeholder text is "Last name" in contact info input field [FAIL]
- Verify "Last name" character count is between 3 and 30 [consistency in character count would be suggested] [FAIL]
- Verify error message when user inputs less than 3 characters in "Last name" [PASS]
- Verify constraint when user attempts to enter 30 characters in the "Last name" input field [FAIL]
- Verify placeholder text is "Email" in contact info input field [PASS]
- Verify error state when user inputs improper email format 'must be a well-formed email address' [PASS] wording can be improved by designers
- Verify placeholder text is "Phone" in contact info input field [PASS]
- Verify phone input field are numeric digits only [FAIL]
- Verify phone input field numbers are separated by a dash - (000-000-000) [FAIL]
- Verify error message when user inputs less than 11 digits in the phone input field [PASS]
- Verify constaint when user attempts to enter more than 21 digits in phone input field [FAIL]
- Verify all fields are required. When user clicks 'Book' without filling out contact info, an error message appears [Design can be improved] [PASS]
- Verify when user clicks 'Cancel' the calendar and contact info collapses [PASS]

#Booking

- Verify user is able to go 'Back' and 'Next' on the calendar to view months [PASS]
- Verify when user clicks 'Today' the calendar defaults to the current month [PASS]
- Verify when user selects less than 2 nights (minimum stay), they see an error message appear 'Minimum stay is 2 nights' [FAIL]
- Verify when user highlights more than 7 days on the calendar, the highlight in blue select all days and is not separated by row of the week [FAIL]
- Verify 7+ nights and price is displayed once on the first row [FAIL]
- Verify when user clicks "Book", popup appears "Booking Successful!" and displays the dates selected [PASS]
- Verify date format dispayed on the popup yyyy-mm-dd [DESIGN] / would raise with design on standard of displaying dates mm-dd-yyyy
- Verify user can click "Close" button to close pop up [PASS]
- Verify user can make another booking after previous booking in the current browser [PASS]
- Verify user cannot select 'Unavailable' dates to book [PASS] [FAIL] DESIGN - error message is dev error 'must not be null' should update to error state a customer can understand

# PlaywrightAutomation with JS

Automation Cross Browser Testing on Chrome, Firefox, Edge, Safari Webkit

# Description of bugs found

Bugs are derived from [FAIL] test cases

- User can only see 1 room option available on the home page 
user should see room options available 
- [Contact Form] Error messages are repeated when user does not fill out required fileds
must not be empty / must not be null
- User should not be able to book past dates from the calendar (user should receive an error message to let user to select present or future dates)
- [Contact form] Placeholder ‘Firstname’ should be ‘First name’ 
- [Contact form] ‘First name’ input field should be between 3 - 20 characters
error message states size must be 3-18 instead of 3 - 20
- [Contact form] Placeholder ‘Lastname’ should be ‘Last name’
- User can select less than 2 nights (minimum stay) and successfully book a room
- [Calendar] When user highlights more than 7 days on the calendar, the highlight in blue is separated by row of the week
 all dates should be 1 highlight instead of being separated
- Number of nights and price are repeated when user books 7+ nights on the calendar
- When user selects ‘Unavailable’ dates, ‘must not be null’ error message appears twice

Enhancements: 
- Contact form - all error messages need improvement, not clear and consise to the user what the error is
- Limit number of characters allowed in contact info form input fields
- Phone input field should be numeric digits only
- Phone input field should be separated by a dash 
- night(s) on the calendar should be ‘nights’ since minimum stay  is 2 nights
- Date format displayed on the popup after user creates a booking, the date format standard should be mm-dd-yyyy


# Instructions on how to run the project - stack etc

To install playwright: "npm init playwright@latest" 
See documentation here: https://playwright.dev/docs/intro

To run test file: "npx playwright test create-booking.spec.js"
To view report: "npx playwright show-report"

Expected test result: 12 tests using 4 workers (browsers) - 12 passed 


