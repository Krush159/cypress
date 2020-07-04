describe("App inititalization", ()=>{
   
    it("should load data on loading", ()=>{
        
         cy.server()
         cy.route('GET', '/api/task', "fixture:task" )
         cy.visit('/')
 
         cy.get('.task-list li')
             .should('have.length', 4)
    })
    
})