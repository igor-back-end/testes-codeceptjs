Feature('3. Carrinho de Compras');

Before(({ I }) => {
    I.amOnPage('/');
    I.fillField('Username', 'standard_user');
    I.fillField('Password', 'secret_sauce');
    I.click('Login');
});

Scenario('CT-13, CT-14 e CT-15: Adicionar e remover na Home', ({ I }) => {
    I.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    I.wait(1);
    I.see('1', '.shopping_cart_badge'); 
    
    I.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    I.wait(1);
    I.see('2', '.shopping_cart_badge');
    
    I.click('[data-test="remove-sauce-labs-backpack"]');
    I.wait(2);
    I.see('1', '.shopping_cart_badge');
});

Scenario('CT-16, CT-17 e CT-18: Navegação no carrinho', ({ I }) => {
    I.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    I.click('.shopping_cart_link');
    
    I.wait(2);
    I.see('Your Cart');
    I.see('Sauce Labs Backpack');
    
    I.click('[data-test="remove-sauce-labs-backpack"]');
    I.wait(2);
    I.dontSee('Sauce Labs Backpack'); 
    
    I.click('Continue Shopping');
    I.wait(2);
    I.see('Products');
});