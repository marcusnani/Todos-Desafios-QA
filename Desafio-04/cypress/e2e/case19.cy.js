describe('Verificação', () => {
    it('Verificação e Clicagem', () => {
        cy.visit("https://automationexercise.com/")

        cy.contains("Products").click()
        cy.get('.brands_products > h2').should("have.text", "Brands")
        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
        cy.get('.title').should("have.text", "Brand - Polo Products")
        cy.get('.brands-name > .nav > :nth-child(3) > a').click()
        cy.get('.title').should("have.text", "Brand - Madame Products")
    });
});