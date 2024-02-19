/** 4 - Use assert.isTrue() or assert.isNotTrue() to make the tests pass. **/
// .isTrue(true) and .isNotTrue(everything else) will pass.
// .isFalse() and .isNotFalse() also exist.
test('#isTrue, #isNotTrue', function() {
  assert.isTrue(true, 'true is true');
  assert.isTrue(!!'double negation', 'double negation of a truthy is true');
  assert.isNotTrue(
    { value: 'truthy' },
    'A truthy object is NOT TRUE (neither is false...)'
  );
});
