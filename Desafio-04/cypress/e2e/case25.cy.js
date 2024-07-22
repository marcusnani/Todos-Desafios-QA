describe('Scroll', () => {
    it('Rolagem scroll', () => {
        cy.visit("https://automationexercise.com/")

        cy.get('.single-widget > h2').should("have.text", "Subscription")
        cy.get('#scrollUp > .fa').click()
        cy.get('.active > :nth-child(1) > h2').should("have.text", "Full-Fledged practice website for Automation Engineers")
    });
});