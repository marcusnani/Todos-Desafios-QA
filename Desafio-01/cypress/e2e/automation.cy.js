describe('Compras', () => {
    it('Cadastrar um login', () => {
        cy.visit("https://automationexercise.com/")
        
        cy.contains(" Signup / Login").click()

        cy.get('.signup-form > h2')
        cy.get('[data-qa="signup-name"]').type("QabpMarcus1")
        cy.get('[data-qa="signup-email"]').type("qabpvass1@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender1').click()
        cy.get('#id_gender2').click()
        cy.get('[data-qa="password"]').type("12121212")
        cy.get('[data-qa="days"]').select('25')
        cy.get('[data-qa="months"]').select('August')
        cy.get('[data-qa="years"]').select('2000')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('[data-qa="first_name"]').type("QaDev21212")
        cy.get('[data-qa="last_name"]').type("Oliveira")
        cy.get('[data-qa="company"]').type("DMS")
        cy.get('[data-qa="address"]').type("Rua Barao Silva")
        cy.get('[data-qa="address2"]').type("Rua Doutor Silva")
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type("Ontario")
        cy.get('[data-qa="city"]').type("Toronto")
        cy.get('[data-qa="zipcode"]').type("123567890-90")
        cy.get('[data-qa="mobile_number"]').type("21999098778")
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click() //ate aqui foi registro
        
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click() //logout
        
        cy.get('[data-qa="login-email"]').type("qabpvass1@gmail.com") //tentativa de login com informação errada
        cy.get('[data-qa="login-password"]').type("121212122")
        cy.get('[data-qa="login-button"]').click()
        cy.get('[data-qa="login-email"]').clear()
        cy.get('[data-qa="login-password"]').clear()

    
        cy.get('[data-qa="login-email"]').type("qabpvass1@gmail.com") //tentativa correta
        cy.get('[data-qa="login-password"]').type("12121212")
        cy.get('[data-qa="login-button"]').click()

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click() //logout

        cy.get('[data-qa="signup-name"]').type("QabpMarcus1")
        cy.get('[data-qa="signup-email"]').type("qabpvass1@gmail.com") //registro com conta existente
        cy.get('[data-qa="signup-button"]').click()

        cy.get(':nth-child(8) > a').click()
        cy.get('[data-qa="name"]').type("QabpMarcus1")
        cy.get('[data-qa="email"]').type("qabpvass1@gmail.com")
        cy.get('[data-qa="subject"]').type("pipipopo")
        cy.get('[data-qa="message"]').type("pipipipipipopopopo") //contact us
        cy.get('[type="file').selectFile('cypress/Foto/download.jpg', { force: true });
        cy.get('[data-qa="submit-button"]').click()
        cy.get('#form-section > .btn').click()

        cy.contains(" Signup / Login").click()
        cy.get('[data-qa="login-email"]').type("qabpvass1@gmail.com") //login
        cy.get('[data-qa="login-password"]').type("12121212")
        cy.get('[data-qa="login-button"]').click()
        
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click() //conta deletada
        cy.get('[data-qa="continue-button"]').click()




    

    });
});