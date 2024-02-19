const chai = require('chai');
const assert = chai.assert;

test('#isTrue, #isNotTrue', function() {
  assert.isTrue(true, 'true is true');
  assert.isTrue(!!'double negation', 'double negation of a truthy is true');
  assert.isNotTrue(
    { value: 'truthy' },
    'A truthy object is NOT TRUE (neither is false...)'
  );
});
