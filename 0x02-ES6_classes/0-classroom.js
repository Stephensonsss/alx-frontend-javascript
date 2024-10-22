// 0-classroom.test.js
import ClassRoom from './0-classroom.js';

test('ClassRoom has correct maxStudentsSize', () => {
  const room = new ClassRoom(10);
  expect(room._maxStudentsSize).toBe(10);
});

