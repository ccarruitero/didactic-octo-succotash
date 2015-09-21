'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include table with correct data', function() {
    expect(page.headerEl.getText()).toMatch('Changelist');
    expect(page.rowEls.first().getText()).toMatch('432462');
  });

  it('should list 3 builds', function () {
    expect(page.rowEls.count()).toBeGreaterThan(3);
  });

  it('should show details when click accepted build', function() {
    var row = page.rowEls.get(0);
    row.click();
    expect(row.element(by.css('.build-details')).isDisplayed()).toBe(true);
  });

  it('should hide details when click 2 times in accepted build', function() {
    var row = page.rowEls.get(0);
    row.click();
    row.click();
    expect(row.element(by.css('.build-details')).isDisplayed()).toBe(false);
  });

  it('should only show details for one build at the time', function() {
    var row0 = page.rowEls.get(0);
    var row1 = page.rowEls.get(1);
    row0.click();
    row1.click();
    expect(row0.element(by.css('.build-details')).isDisplayed()).toBe(false);
    expect(row1.element(by.css('.build-details')).isDisplayed()).toBe(true);
  });

  it('should not show details when click rejected build', function() {
    var row = page.rowEls.get(2);
    row.click();
    expect(row.element(by.css('.build-details')).isDisplayed()).toBe(false);
  });

  it('should not show details for running build', function() {
    var row = page.rowEls.get(3);
    row.click();
    expect(row.element(by.css('.build-details')).isDisplayed()).toBe(false);
  });

  it('should not show fail build', function() {
    var row = page.rowEls.last();
    expect(row.element(by.binding('build.state')).getText()).not.toBe('fail');
  });
});
