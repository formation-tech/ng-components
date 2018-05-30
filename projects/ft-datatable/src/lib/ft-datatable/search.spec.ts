import { arrayContains, contains, isPrimitive, objectContains, primitiveContains } from './search';

describe('search functions', () => {
  describe('isPrimitive function', () => {
    it('should be true on boolean, number, string', () => {
      expect(isPrimitive('')).toBeTruthy();
      expect(isPrimitive('text')).toBeTruthy();
      expect(isPrimitive(0)).toBeTruthy();
      expect(isPrimitive(1)).toBeTruthy();
      expect(isPrimitive(false)).toBeTruthy();
      expect(isPrimitive(true)).toBeTruthy();
    });

    it('should be false on array, object, null, undefined', () => {
      expect(isPrimitive(null)).toBeFalsy();
      expect(isPrimitive(undefined)).toBeFalsy();
      expect(isPrimitive({})).toBeFalsy();
      expect(isPrimitive([])).toBeFalsy();
    });
  });

  describe('primitiveContains function', () => {
    it('should be true when value is present', () => {
      expect(primitiveContains('To be or not to be', 'not')).toBeTruthy();
      expect(primitiveContains('To be or not to be', 'NOT')).toBeTruthy();
      expect(primitiveContains('To be\n or not to be', 'not')).toBeTruthy();
      expect(primitiveContains('To be or not to be', 'e')).toBeTruthy();
      expect(primitiveContains(12345, '123')).toBeTruthy();
      expect(primitiveContains(12345, '234')).toBeTruthy();
      expect(primitiveContains(true, 'true')).toBeTruthy();
      expect(primitiveContains(false, 'false')).toBeTruthy();
    });

    it('should be false when value is not present', () => {
      expect(primitiveContains('To be or not to be', 'that')).toBeFalsy();
      expect(primitiveContains('To be or not to be', 'a')).toBeFalsy();
      expect(primitiveContains(12345, '987')).toBeFalsy();
      expect(primitiveContains(true, 'false')).toBeFalsy();
      expect(primitiveContains(false, 'true')).toBeFalsy();
    });
  });

  describe('objectContains function', () => {
    it('should be true when value is present', () => {
      expect(objectContains({firstName: 'Steve', lastName: 'Jobs'}, 'Steve')).toBeTruthy();
      expect(objectContains({firstName: 'Steve', lastName: 'Jobs'}, 'STEVE')).toBeTruthy();
      expect(objectContains({firstName: 'Steve', lastName: 'Jobs'}, 'o')).toBeTruthy();
      expect(
        objectContains({firstName: 'Steve', lastName: 'Jobs', company: {name: 'Apple'}}, 'Apple'),
      ).toBeTruthy();
    });

    it('should be false when value is not present', () => {
      expect(objectContains({firstName: 'Steve', lastName: 'Jobs'}, 'Bill')).toBeFalsy();
      expect(objectContains({firstName: 'Steve', lastName: 'Jobs'}, 'BILL')).toBeFalsy();
      expect(objectContains({firstName: 'Steve', lastName: 'Jobs'}, 'a')).toBeFalsy();
    });

    it('should look only in specified keys', () => {
      expect(objectContains({firstName: 'Steve', lastName: 'Jobs'}, 'Bill')).toBeFalsy();
      expect(objectContains({firstName: 'Steve', lastName: 'Jobs'}, 'BILL')).toBeFalsy();
      expect(objectContains({firstName: 'Steve', lastName: 'Jobs'}, 'a')).toBeFalsy();
    });
  });

  describe('arrayContains function', () => {
    it('should be true when value is present', () => {
      expect(arrayContains(['Steve', 'Bill'], 'Steve')).toBeTruthy();
      expect(arrayContains([['Steven', 'Paul'], ['William', 'Henry']], 'Steve')).toBeTruthy();
      expect(
        arrayContains([{firstName: 'Steve', lastName: 'Jobs'}, {firstName: 'Bill', lastName: 'Gates'}], 'Steve'),
      ).toBeTruthy();
      expect(
        arrayContains([{firstName: 'Steve', lastName: 'Jobs'}, {firstName: 'Bill', lastName: 'Gates'}], 'STEVE'),
      ).toBeTruthy();
      expect(
        arrayContains([{firstName: 'Steve', lastName: 'Jobs'}, {firstName: 'Bill', lastName: 'Gates'}], 'Bill'),
      ).toBeTruthy();
    });

    it('should be false when value is not present', () => {
      expect(
        arrayContains([{firstName: 'Steve', lastName: 'Jobs'}, {firstName: 'Bill', lastName: 'Gates'}], 'Elon'),
      ).toBeFalsy();
    });
  });

  describe('contains function', () => {
    it('should be true when value is present', () => {
      expect(contains(['Steve', 'Bill'], 'Steve')).toBeTruthy();
      expect(contains([['Steven', 'Paul'], ['William', 'Henry']], 'Steve')).toBeTruthy();
      expect(
        contains([{firstName: 'Steve', lastName: 'Jobs'}, {firstName: 'Bill', lastName: 'Gates'}], 'Steve'),
      ).toBeTruthy();
      expect(
        contains([{firstName: 'Steve', lastName: 'Jobs'}, {firstName: 'Bill', lastName: 'Gates'}], 'STEVE'),
      ).toBeTruthy();
      expect(
        contains([{firstName: 'Steve', lastName: 'Jobs'}, {firstName: 'Bill', lastName: 'Gates'}], 'Bill'),
      ).toBeTruthy();
      expect(contains({firstName: 'Steve', lastName: 'Jobs'}, 'Steve')).toBeTruthy();
    });

    it('should be false when value is not present', () => {
      expect(
        contains([{firstName: 'Steve', lastName: 'Jobs'}, {firstName: 'Bill', lastName: 'Gates'}], 'Elon'),
      ).toBeFalsy();
      expect(contains(null, 'Elon')).toBeFalsy();
      expect(contains(undefined, 'Elon')).toBeFalsy();
    });
  });
});
