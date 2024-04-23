/// <reference types="cypress" />

describe('Testeamos nuestra app', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Se renderiza correctamente',() => {
        cy.contains('Task List v2 - hosted on Firebase')
    })
    it('Podemos añadir una nueva tarea', () => {
        const textNewTask = "Testeamos en cypress"
        cy.get('input[placeholder="New Task"]').type(textNewTask)
        cy.get('button.btn-add').click()
        cy.wait(3000);
        cy.get('.todo-list li').last().contains(textNewTask)
    })
})