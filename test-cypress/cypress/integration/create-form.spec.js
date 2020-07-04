describe("Create form", ()=>{
    beforeEach(()=>{
        cy.server()
         cy.route('GET', '/api/task', "fixture:task" )
         cy.visit('/')
    })
    it('Add a new item on submit of form', ()=>{
        const text = "BUY MILK"

        cy.server()
        cy.route("POST", "/api/task", {
            title:text,
            id :1,
            completed:false
        })
        cy.get('.task-input')
            .type(text)
            .type('{enter}')
        
        cy.get('.task-list li').should("have.length",5).and('contain',text)

    })
    it('Add a new item, on failure, show message',()=>{
        const text = "BUY MILK"
         
        cy.server()
        cy.route({
            url: "/api/task",
            status:500,
            method: "POST",
            response: {}
        })
        cy.get('.task-input').type(text).type("{enter}")
        cy.get('.error').should('be.visible')
    })
})