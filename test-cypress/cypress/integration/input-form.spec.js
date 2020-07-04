
describe("Input form", ()=>{
    beforeEach(()=>{
        cy.server()
        cy.route('GET', '/api/task', "fixture:task" )
        cy.visit('/')
    })    
    it('focusing to specific element',()=>{
        cy.focused().should('have.class', 'task-input')
    })
    it('selecting input box and typing text',()=>{
        const text = "BUY BREAD"
        cy.get('.task-input').type(text).should('have.value', text)
    })
})