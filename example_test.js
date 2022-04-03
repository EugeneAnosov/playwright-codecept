Feature('My test Suite');

Scenario('Should load example.com website', ({ I }) => {
    I.amOnPage("https://example.com")
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#idonttext')
})

Scenario('Should load example.com website - second test', ({ I }) => {
    I.amOnPage("https://example.com")
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#idonttext')
})


