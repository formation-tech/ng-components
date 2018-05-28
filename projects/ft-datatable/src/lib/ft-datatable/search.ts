export function isPrimitive(value) {
  return typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string';
}

export function primitiveContains(primitive: boolean | number | string, needle: string) {
  const regexp = new RegExp(needle, 'i');

  if (typeof primitive === 'boolean' || typeof primitive === 'number') {
    primitive = String(primitive);
  }

  return regexp.test(primitive);
}

export function objectContains(object: any, needle: string, onlyKeys = []) {
  const keys = Object.keys(object);

  for (const key of keys) {
    if (onlyKeys.length && onlyKeys.indexOf(key) === -1) {
      continue;
    }

    const value = object[key];

    if (contains(value, needle)) {
      return true;
    }
  }

  return false;
}

export function contains(value: any, needle: string) {
  if (value === null || value === undefined) {
    return false;
  }

  if (isPrimitive(value)) {
    return primitiveContains(value, needle);
  }

  if (Array.isArray(value)) {
    return arrayContains(value, needle);
  }

  if (typeof value === 'object') {
    return objectContains(value, needle);
  }

  return false;
}

export function arrayContains(array: any[], needle: string) {
  for (const value of array) {
    if (contains(value, needle)) {
      return true;
    }
  }

  return false;
}
