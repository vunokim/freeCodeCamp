const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
    // #4
    test('#isTrue, #isNotTrue', function () {
      assert.fail(true, 'true is true');
      assert.fail(!!'double negation', 'Double negation of a truthy value is true');
      assert.fail({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
    });
  });
