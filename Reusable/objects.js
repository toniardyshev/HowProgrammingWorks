'use strict';

//Objects
// 1.Define constant object with single field name.
const OBJECT_CONSTANT = { name: 'Alina' };

//2.Define variable object with single field name.
let OBJECT_VARIABLE = { surname : 'Panteleeva' };

//3.Try to change field name and assign other object to both identifiers. Explain script behaviour.
OBJECT_CONSTANT.name = 'Alina Ardysheva';
OBJECT_VARIABLE.surname = 'Ardysheva';

/*
const создаёт константу (новую именованную ссылку на область памяти), доступную только для чтения.
Это не означает, что указываемое значение неизменно, но это означает, что идентификатор не может быть переназначен.
Например, если константа указывает на объект, то сам объект может быть изменён.
*/

//4.Implement function createUser with signature createUser(name: string, city: string): object.
// Example: createUser('Marcus Aurelius', 'Roma') will return object { name: 'Marcus Aurelius', city: 'Roma' }

const createUser = (name, city) => ({ name, city });
console.log(createUser('Marcus Aurelius', 'Roma'));