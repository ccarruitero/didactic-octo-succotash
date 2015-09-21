/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.tableEl = element(by.css('.list-group'));
  this.headerEl = this.tableEl.element(by.css('.header'));
  this.rowEls = element(by.css('body')).all(by.repeater('build in main.builds'));
};

module.exports = new MainPage();
