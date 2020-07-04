describe("toggle function", ()=>{
    beforeEach(()=>{
        cy.server()
        cy.route('GET', '/api/task', "fixture:task" )
        cy.visit('/')
    }) 
    it( "check if the checkbox is present", ()=>{
        cy.get('[type="checkbox"]')
    })
    it("check the class should change to a success", ()=>{
        cy.get('.task-list li')
        .filter('.completed')
        .find('.toggle')
        .should('be.checked')
    })
})