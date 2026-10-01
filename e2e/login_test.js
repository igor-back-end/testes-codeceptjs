Feature('1. Autenticação e Segurança Básica');

Scenario('CT-01: Login válido', ({ I }) => {
    I.amOnPage('/');
    I.fillField('Username', 'standard_user');
    I.fillField('Password', 'secret_sauce');
    
    I.wait(1);
    I.click('Login');
    
    I.wait(2); 
    I.see('Products');
});

Scenario('CT-02: Senha errada', ({ I }) => {
    I.amOnPage('/');
    I.fillField('Username', 'standard_user');
    I.fillField('Password', 'errada');
    
    I.wait(1); 
    I.click('Login');
    
    I.wait(2);
    I.see('Username and password do not match');
});

Scenario('CT-03: Usuário inexistente', ({ I }) => {
    I.amOnPage('/');
    I.fillField('Username', 'nao_existo');
    I.fillField('Password', 'secret_sauce');
    
    I.wait(1);
    I.click('Login');
    
    I.wait(2);
    I.see('Username and password do not match');
});

Scenario('CT-04: Usuário em branco', ({ I }) => {
    I.amOnPage('/');
    I.fillField('Password', 'secret_sauce');
    
    I.wait(1);
    I.click('Login');
    
    I.wait(2);
    I.see('Username is required');
});

Scenario('CT-05: Senha em branco', ({ I }) => {
    I.amOnPage('/');
    I.fillField('Username', 'standard_user');
    
    I.wait(1);
    I.click('Login');
    
    I.wait(2);
    I.see('Password is required');
});

Scenario('CT-06: Usuário bloqueado', ({ I }) => {
    I.amOnPage('/');
    I.fillField('Username', 'locked_out_user');
    I.fillField('Password', 'secret_sauce');
    
    I.wait(1);
    I.click('Login');
    
    I.wait(2);
    I.see('Sorry, this user has been locked out');
});