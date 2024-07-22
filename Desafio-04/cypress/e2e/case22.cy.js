describe('Add card', () => {
    it('Add card recomendado', () => {
        cy.visit("https://automationexercise.com/")

        cy.get('.recommended_items > .title').should("have.text", "recommended items")
        cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.cart_description > h4').should("have.text", "Stylish Dress")
    });
});