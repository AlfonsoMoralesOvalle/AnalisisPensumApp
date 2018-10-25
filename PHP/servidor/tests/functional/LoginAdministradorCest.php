<?php

class LoginAdministradorCest
{
    public function _before(FunctionalTester $I)
    {
    }

    // tests
    public function tryToTest(FunctionalTester $I)
    {
    }

    public function pruebaFuncionalLoginAdmin(FunctionalTester $I) {

        $I->amOnPage('/');
        $I->wait(5);
        $I->fillField('_carnet', '201213177');
        $I->fillField('_pass', '123456');
        $I->click('Login');
        $I->amGoingTo("Esperar alerta JS para ver si la sesión fue correcta");
        $I->executeInSelenium(function (\Facebook\WebDriver\WebDriver $webdriver) use ($I) {
            $webdriver->wait(1.5, 200)->until(
                WebDriverExpectedCondition::alertIsPresent()
            );
            if($webdriver->switchTo()->alert()->getText() == "Sesión correcta") {
                $webdriver->switchTo()->alert()->accept();
            }else{
                $I->fail("Fallo");
            }
        });

    }
}
