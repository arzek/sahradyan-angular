import { browser, by, element, $$ } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  async addTodo(value: string) {
    await element(by.id('app-input-add')).sendKeys(value);
    await element(by.id('app-btn-add')).click();
  }

  deleteFirstTodo() {
    return element.all(by.css('.app-todo-close')).first().click();
  }

  archivedFirstTodo() {
    return element.all(by.css('.app-todo-archived')).first().click();
  }

  async goToTab(name: string) {
    await element(by.css(`link-${name}`)).click();
  }
}
