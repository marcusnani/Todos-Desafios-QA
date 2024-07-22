describe('Review', () => {
    it('Review de Produtos', () => {
        cy.visit("https://automationexercise.com/")
        
        cy.contains("Products").click()
        cy.get('.title').should("have.text", "All Products")
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.active > a').should("have.text", "Write Your Review")
        cy.get('#name').type("Marcus")
        cy.get('#email').type("marcusqa12@gmail.com")
        cy.get('#review').type("pipippopopo")
        cy.get('#button-review').click()
        cy.get('.alert-success > span').should("have.text", "Thank you for your review.")

    });
});