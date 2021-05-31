import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать строку "some String"  преобразовывать её в нижний регистр и возвращать строку с первой заглавной буквой в первом слове ', () => {
    const str = toCapitalizeFirstLetter('some String');
    expect(str).toBe('Some string');
  });
  test('Должна принимать пустую строку ""  и возвращать пустую строку', () => {
    const str = toCapitalizeFirstLetter('');
    expect(str).toBe('');
  });
});
