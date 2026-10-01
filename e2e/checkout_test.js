Feature('4. Fluxo de Pagamento (Checkout)');

Before(({ I }) => {
    I.amOnPage('/');
    I.fillField('Username', 'standard_user');
    I.fillField('Password', 'secret_sauce');
    I.click('Login');
    I.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    I.click('.shopping_cart_link');
    I.click('Checkout');
});

Scenario('CT-19: Checkout completo', ({ I }) => {
    I.fillField('First Name', 'Francisco');
    I.fillField('Last Name', 'Igor');
    I.fillField('Zip/Postal Code', '62600000');
    
    I.wait(1);
    I.click('Continue');
    
    I.wait(1);
    I.click('Finish');
    
    I.wait(2);
    I.see('Thank you for your order!');
});

Scenario('CT-20: Faltando Primeiro Nome', ({ I }) => {
    I.fillField('Last Name', 'Igor');
    I.fillField('Zip/Postal Code', '62600000');
    
    I.wait(1);
    I.click('Continue');
    
    I.wait(2);
    I.see('First Name is required');
});

Scenario('CT-21: Faltando Sobrenome', ({ I }) => {
    I.fillField('First Name', 'Francisco');
    I.fillField('Zip/Postal Code', '62600000');
    
    I.wait(1);
    I.click('Continue');
    
    I.wait(2);
    I.see('Last Name is required');
});

Scenario('CT-22: Faltando CEP', ({ I }) => {
    I.fillField('First Name', 'Francisco');
    I.fillField('Last Name', 'Igor');
    
    I.wait(1);
    I.click('Continue');
    
    I.wait(2);
    I.see('Postal Code is required');
});

Scenario('CT-23: Cancelar checkout', ({ I }) => {
    I.wait(1);
    I.click('Cancel');
    
    I.wait(2);
    I.see('Your Cart');
});