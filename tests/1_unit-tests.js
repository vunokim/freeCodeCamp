const chai = require('chai');
const assert = chai.assert;

test('#isTrue, #isNotTrue', function() {
assert.isTrue(true, 'This will pass with the boolean value true');
assert.isNotTrue('true', 'This will NOT pass with the string value "true"');
assert.isTrue(1, 'This will NOT pass with the number value 1');
  );
});
