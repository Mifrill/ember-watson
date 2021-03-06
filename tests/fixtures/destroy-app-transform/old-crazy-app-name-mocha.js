/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

describe('Acceptance: Index', function() {
  var cahRayZeeName;

  beforeEach(function() {
    cahRayZeeName = startApp();
  });

  afterEach(function() {
    Ember.run(cahRayZeeName, 'destroy');
  });

  it('can visit /index', function() {
    visit('/index');

    andThen(function() {
      expect(currentPath()).to.equal('index');
    });
  });
});
