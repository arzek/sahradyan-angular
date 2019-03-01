import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

import * as faker from 'faker';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('Add Todo', async () => {
    browser.sleep(1000);
    const title = faker.name.firstName();
    await page.addTodo(title);
    browser.sleep(1000);
    await page.deleteFirstTodo();
    browser.sleep(1000);
  });

  it('Delete Todo', async () => {
    browser.sleep(1000);
    const title = faker.name.firstName();
    await page.addTodo(title);
    browser.sleep(1000);
    await page.deleteFirstTodo();
    browser.sleep(1000);
  });

  it('Completed todo', async () => {
    browser.sleep(1000);
    const title = faker.name.firstName();
    await page.addTodo(title);
    browser.sleep(1000);
    await page.deleteFirstTodo();
    browser.sleep(1000);
  });

  it('Archived todo', async () => {
    browser.sleep(1000);
    const title = faker.name.firstName();
    await page.addTodo(title);
    browser.sleep(1000);
    await page.archivedFirstTodo();
    browser.sleep(1000);
    await page.deleteFirstTodo();
    browser.sleep(1000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
