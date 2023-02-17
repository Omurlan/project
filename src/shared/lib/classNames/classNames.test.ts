import classNames from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', ['additional'])).toBe(
      'someClass additional'
    );
  });

  test('conditional class', () => {
    expect(
      classNames('someClass', ['additional'], {
        condition: true,
      })
    ).toBe('someClass additional condition');
  });

  test('conditional false', () => {
    expect(
      classNames('someClass', ['additional'], {
        active: false,
      })
    ).toBe('someClass additional');
  });

  test('conditional undefined', () => {
    expect(
      classNames('someClass', ['additional'], {
        active: undefined,
      })
    ).toBe('someClass additional');
  });
});
