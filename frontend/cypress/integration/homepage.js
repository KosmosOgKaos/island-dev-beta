describe('Applying for application', () => {
  it('Apply for application', () => {
    cy.visit('/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      '.useBoxStyles-blue100_2gQ88 > .Link-style_18De5 > .reset-style_16j1T',
    ).click()
    cy.url().should('include', '/login')
    cy.get('#login-username-input').type('2501893469')
    cy.get('.useBoxStyles-2_cOKIJ > .reset-style_16j1T').click()
    cy.url().should('include', '/umsokn/gagnaoflun')
    cy.get('.Checkbox-style_3TY6r').click()
    cy.get('.Button-primary_R1jtE').click()
    cy.url().should('include', '/umsokn/yfirlit')
    cy.get('#ssn').should('have.value', '1706941119')
    cy.get('#name').should('have.value', 'Guðrún Jónsdóttir')

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.Button-primary_R1jtE').click()
    cy.get(
      ':nth-child(3) > .useBoxStyles-3_2bzIJ > .useBoxStyles-row_2KHIC > :nth-child(2) > .RadioButton-style_3VAk_ > .RadioButton-style_3g0w_ > .RadioButton-style_3zOJd > .reset-style_16j1T',
    ).click()
    cy.get('#currentEmploymentStatus-1').check()
    cy.get('#company_name').clear()
    cy.get('#company_name').type('kosmos og kaos')
    cy.get('#contact').clear()
    cy.get('#contact').type('Guðmundur Klemens')
    cy.get('#contact_email').clear()
    cy.get('#contact_email').type('g@kogk.is')
    cy.get(
      '.react-datepicker__input-container > :nth-child(1) > .useBoxStyles-white_b1Pc9',
    ).click()
    cy.get('.react-datepicker__day--012').click()
    cy.get(
      ':nth-child(1) > .useBoxStyles-white_b1Pc9 > .RadioButton-style_3g0w_ > .RadioButton-style_3zOJd > .useBoxStyles-smallGutter_2RQHP',
    ).click()
    cy.get('#remainingVacation-0').check()
    cy.get(
      ':nth-child(14) > :nth-child(2) > :nth-child(1) > .useBoxStyles-white_b1Pc9',
    ).click()
    cy.get('#capital_income').clear()
    cy.get('#capital_income').type('45000')
    cy.get('#pension_payment').clear()
    cy.get('#pension_payment').type('10000')
    cy.get('.Button-primary_R1jtE').click()
    cy.url().should('include', '/umsokn/menntun-og-ferilskra')
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(
      ':nth-child(4) > :nth-child(1) > [data-testid=select-nam_profgrada] > #nam_profgrada > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-nam_profgrada-option-0').click()
    cy.get(
      '#haskolagrada > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-haskolagrada-option-0').click()
    cy.get(
      ':nth-child(3) > [data-testid=select-nam_hofst] > #nam_hofst > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-nam_hofst-option-81').click()
    cy.get(
      '.useBoxStyles-6_3duvT > [data-testid=select-nam_lauk] > #nam_lauk > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get(
      '.useBoxStyles-6_3duvT > [data-testid=select-nam_lauk] > #nam_lauk > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .css-b8ldur-Input > .Select-input_3muDH > #react-select-nam_lauk-input',
    ).clear()
    cy.get(
      '.useBoxStyles-6_3duvT > [data-testid=select-nam_lauk] > #nam_lauk > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .css-b8ldur-Input > .Select-input_3muDH > #react-select-nam_lauk-input',
    ).type('2002')
    cy.get('#react-select-nam_lauk-option-81').click()
    cy.get(
      '#annad_nam_profgrada_1 > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-annad_nam_profgrada_1-option-0').click()
    cy.get('#annad_nam_hofst_1 > .Select-container_2DBa7').click()
    cy.get('#react-select-annad_nam_hofst_1-option-71').click()
    cy.get(
      '#annad_nam_lauk_1 > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-annad_nam_lauk_1-option-71').click()
    cy.get(
      ':nth-child(11) > .reset-style_16j1T > [data-testid=select-nam_profgrada] > #nam_profgrada > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-nam_profgrada-option-0').click()
    cy.get(
      ':nth-child(1) > [data-testid=select-nam_hofst] > #nam_hofst',
    ).click()
    cy.get('#react-select-nam_hofst-option-0').click()
    cy.get(
      ':nth-child(2) > [data-testid=select-nam_lauk] > #nam_lauk > .Select-container_2DBa7',
    ).click()
    cy.get('#react-select-nam_lauk-option-0').click()
    cy.get(
      ':nth-child(13) > .reset-style_16j1T > [data-testid=select-nam_profgrada] > #nam_profgrada',
    ).click()
    cy.get('#react-select-nam_profgrada-option-0').click()
    cy.get('.Checkbox-style_3cKm2').check()
    cy.get(
      '#ritvinnsla_thekking > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-ritvinnsla_thekking-option-3').click()
    cy.get(
      '#toflureiknir_thekking > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-toflureiknir_thekking-option-3').click()
    cy.get(
      '#tolvuthekking_1 > .Select-container_2DBa7 > .Select-valueContainer_1sW7I',
    ).click()
    cy.get('#react-select-tolvuthekking_1-option-1').click()
    cy.get(
      '#tolvuthekking_1_thekking > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-tolvuthekking_1_thekking-option-3').click()
    cy.get(
      '#islenska_thekking > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-islenska_thekking-option-3').click()
    cy.get(
      '#enska_thekking > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-enska_thekking-option-3').click()
    cy.get(
      '#tungumal_1 > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-tungumal_1-option-0').click()
    cy.get('#tungumal_1_thekking').click()
    cy.get('#react-select-tungumal_1_thekking-option-3').click()
    cy.get('#umsagnaradili_1_heiti').clear()
    cy.get('#umsagnaradili_1_heiti').type('Stefán Hjalti')
    cy.get('#umsagnaradili_1_stada').clear()
    cy.get('#umsagnaradili_1_stada').type('Forritari')
    cy.get('#umsagnaradili_1_vinnustadur').clear()
    cy.get('#umsagnaradili_1_vinnustadur').type('Kosmos og Kaos')
    cy.get(
      ':nth-child(4) > :nth-child(1) > .useBoxStyles-white_b1Pc9 > .reset-style_16j1T > .Input-style_3x0hA',
    ).click()
    cy.get('#umsagnaradili_1_simi').clear()
    cy.get('#umsagnaradili_1_simi').type('8446969')
    cy.get('.Button-primary_R1jtE').click()
    cy.url().should('include', '/umsokn/atvinnuupplysingar')
    cy.get(
      '.useBoxStyles-3_2bzIJ > .useBoxStyles-row_2KHIC > :nth-child(1) > .RadioButton-style_3VAk_ > .RadioButton-style_3g0w_ > .RadioButton-style_3zOJd > .reset-style_16j1T',
    ).click()
    cy.get('#jobPercentageWish-0').check()
    cy.get(
      '#veldu_svaedi > .Select-container_2DBa7 > .Select-valueContainer_1sW7I',
    ).click()
    cy.get('#react-select-veldu_svaedi-option-0').click()
    cy.get('#start_date').click()
    cy.get('.react-datepicker__day--019').click()
    cy.get(
      '#oskastarf_1 > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-oskastarf_1-option-1').click()
    cy.get('.Select-style_2kMI3').click()
    cy.get('#react-select-oskastarf_2-option-3').click()
    cy.get(
      '.useBoxStyles-6_3duvT > .useBoxStyles-row_2KHIC > :nth-child(1) > .RadioButton-style_3VAk_ > .RadioButton-style_3g0w_ > .RadioButton-style_3zOJd > .reset-style_16j1T',
    ).click()
    cy.get('#workability-0').check()
    cy.get('.Button-primary_R1jtE').click()
    cy.url().should('include', '/umsokn/rettindi')
    cy.get('#banki').clear()
    cy.get('#banki').type('2222')
    cy.get('#hofudbok').clear()
    cy.get('#hofudbok').type('33')
    cy.get(
      '.GridColumn-span_xl_6-12_2XPon > :nth-child(1) > .useBoxStyles-white_b1Pc9',
    ).click()
    cy.get('#reikningsnumer').clear()
    cy.get('#reikningsnumer').type('222222')
    cy.get(
      '#lifeyrissjodur > .Select-container_2DBa7 > .Select-valueContainer_1sW7I > .Select-style_2kMI3',
    ).click()
    cy.get('#react-select-lifeyrissjodur-option-0').click()
    cy.get('#vidbotarlifeyrissparnadur').click()
    cy.get('#react-select-vidbotarlifeyrissparnadur-option-1').click()
    cy.get(
      '.useBoxStyles-height_full_boYTk > .useBoxStyles-row_2KHIC > :nth-child(2) > .RadioButton-style_3VAk_ > .RadioButton-style_3g0w_ > .RadioButton-style_2RfKK > .RadioButton-style_2GXaU',
    ).click()
    cy.get('#vidbotarlifeyrissparnadur_hlutfall-1').check()
    cy.get('#stettarfelag').click()
    cy.get('#react-select-stettarfelag-option-1').click()
    cy.get(
      ':nth-child(10) > :nth-child(1) > .RadioButton-style_3VAk_ > .RadioButton-style_3g0w_ > .RadioButton-style_3zOJd > .reset-style_16j1T',
    ).click()
    cy.get('#nyta_personuafslatt-0').check()
    cy.get('#upphafsdagsetning_botagreidslna').click()
    cy.get('.react-datepicker__day--019').click()
    cy.get('.Button-primary_R1jtE').click()
    cy.url().should('include', '/umsokn/senda-umsokn')
    cy.get(
      ':nth-child(1) > .useBoxStyles-relative_EeoS9 > .reset-style_2klNf',
    ).click()
    cy.get(
      ':nth-child(1) > .useBoxStyles-relative_EeoS9 > .reset-style_2klNf',
    ).click()
    cy.get(
      ':nth-child(2) > :nth-child(2) > .useBoxStyles-relative_EeoS9 > .reset-style_2klNf',
    ).click()
    cy.get(
      ':nth-child(2) > :nth-child(2) > .useBoxStyles-relative_EeoS9 > .reset-style_2klNf',
    ).click()
    cy.get('.Button-primary_R1jtE').click()
    cy.url().should('include', '/umsokn/umsokn-mottekin')
    /* ==== End Cypress Studio ==== */
  })
})
