Feature('Zero Bank Application - E2E Test')

Before(({ I }) => {
    console.log('Before Hook')
    I.amOnPage('http://zero.webappsecurity.com/index.html')
})

After(({ I }) => {
    console.log('After Hook')
})

Scenario('Login Test - Negative', ({ I, LoginPage }) => {
    I.click('#signin_button')
    I.seeElement('#login_form')
    // I.fillField('#user_login', 'invalid username')
    // I.fillField('#user_password', 'invalid password')
    // I.click('.btn-primary')
    LoginPage.submitLogin('invalid_username', 'invalid_password')
    LoginPage.assertLoginFormIsVisible()

    I.seeElement('.alert-error')
})