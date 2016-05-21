const chai = require('chai');
const assert = chai.assert;

const CannonBase = require('../lib/cannon_base');
const CannonBarrel = require('../lib/cannon_barrel');

describe('CannonBarrel', function() {
  context('can move up and down', function() {
    var cannonBase = new CannonBase({x: 10, y:10});
    var cannonBarrel = new CannonBarrel(cannonBase);

    it('should start x & y + 17 to cannonBase cord.', function() {

      assert.equal(cannonBarrel.x, 27);
      assert.equal(cannonBarrel.y, 27);

    });

    it('should move Anglex and AngleY up ', function() {
      // anglex adds 50 to original cord of x
      // angley stays the same
      assert.equal(cannonBarrel.anglex, 77);
      assert.equal(cannonBarrel.angley, 27);

      cannonBarrel.moveUp();

      assert.equal(cannonBarrel.anglex, 76.99238475781956);
      assert.equal(cannonBarrel.angley, 25.25502516487495);
    });

    it('should move Anglex and AngleY down', function() {
      assert.equal(cannonBarrel.anglex, 76.99238475781956);
      assert.equal(cannonBarrel.angley, 25.25502516487495);

      cannonBarrel.moveDown();

      assert.equal(cannonBarrel.anglex, 76.99238475781956);
      assert.equal(cannonBarrel.angley, 27);
    });
  });
});
