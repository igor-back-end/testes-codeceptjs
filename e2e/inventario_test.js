Feature('2. Catálogo e Filtros');

Before(({ I }) => {
    I.amOnPage('/');
    I.fillField('Username', 'standard_user');
    I.fillField('Password', 'secret_sauce');
    I.click('Login');
});

Scenario('CT-07: Ordem A a Z', ({ I }) => {
    I.selectOption('.product_sort_container', 'Name (A to Z)');
    I.wait(2);
    I.see('Sauce Labs Backpack');
});

Scenario('CT-08: Ordem Z a A', ({ I }) => {
    I.selectOption('.product_sort_container', 'Name (Z to A)');
    I.wait(2); 
    I.see('Test.allTheThings() T-Shirt (Red)');
});

Scenario('CT-09: Menor preço', ({ I }) => {
    I.selectOption('.product_sort_container', 'Price (low to high)');
    I.wait(2); 
    I.see('Sauce Labs Onesie');
});

Scenario('CT-10: Maior preço', ({ I }) => {
    I.selectOption('.product_sort_container', 'Price (high to low)');
    I.wait(2); 
    I.see('Sauce Labs Fleece Jacket');
});

Scenario('CT-11 e CT-12: Detalhes do produto e Voltar', ({ I }) => {
    I.click('Sauce Labs Backpack');
    
    I.wait(2);
    I.see('carry.allTheThings()'); 
    
    I.click('Back to products');
    
    I.wait(2);
    I.see('Products');
});