<?php

class RegistroAdministradorCest
{
    public function _before(FunctionalTester $I)
    {
    }

    // tests
    public function tryToTest(FunctionalTester $I)
    {
    }

    public function pruebaFuncionalRegistroAdmin(FunctionalTester $I)
    {
        $I->amOnPage('/');
        $I->wait(5);
        $I->click('Registro');
        $I->wait(5);
        $I->fillField('_carnet', '201213178');
        $I->fillField('_pass', '123456');
        $I->fillField('_name', 'prueba');
        $I->click('Registrar');
        $I->amGoingTo("Esperar alerta JS para ver si la sesión fue correcta");
        $I->executeInSelenium(function (\Facebook\WebDriver\WebDriver $webdriver) use ($I) {
            $webdriver->wait(1.5, 200)->until(
                WebDriverExpectedCondition::alertIsPresent()
            );
            if($webdriver->switchTo()->alert()->getText() == 'Usuario registrado correctamente') {
                $webdriver->switchTo()->alert()->accept();
            }else{
                $I->fail("Fallo");
            }
        });
    }
}
