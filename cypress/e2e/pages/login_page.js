
export class LoginPage{
    username_textbox = '#username'
    password_textbox = '#password'
    submit_button = '#submit'

    enterUsername(username){
        cy.get('#username').type(username)
    }

    enterPassword(password){
        cy.get('#password').type(password)
    }

    clickSubmit(){
        cy.get('#submit').click()
    }
}