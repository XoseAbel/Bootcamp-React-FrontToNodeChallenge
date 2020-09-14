// const keys = 'abuelo.padre.hijo';
// const value = 'Soy el Hijo';
// const initObj = {abuelo:{padre:true,madre:'Soy la madre'}}

function buildObjectProperties(keys: string, value: any, obj: any = {}): any {
  let keysArray = keys.split('.');
  let currKey = keysArray.shift() as string;

  if (keysArray.length > 0) {
    const nextObj = obj[currKey] || {};
    if (nextObj.constructor.name !== 'Object') {
      throw new Error(`La propiedad ${currKey} no es un objeto`);
    }
    return {
      ...obj,
      [currKey]: buildObjectProperties(keysArray.join('.'), value, nextObj),
    };
  }
  return { ...obj, [currKey]: value };
}

export { buildObjectProperties };
