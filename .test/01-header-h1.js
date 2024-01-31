// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium

class MyTest extends BaseTest
{
	async test() {
        // testejem H1 a la home page
        //////////////////////////////////////////////////////
        await this.driver.get("http://localhost:8000/browser/www/");
        var currentText = await this.driver.findElement(By.tagName("h1")).getText();
        var expectedText = "TASKLIST";
        assert( currentText==expectedText, "Títol H1 de la pàgina principal incorrecte");

        console.log("TEST OK");
	}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();