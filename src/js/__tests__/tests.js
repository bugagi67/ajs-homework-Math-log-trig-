import { daemon, magician } from '../app';

test('Тест падения атаки без отравления', () => {
  expect(magician.attack).toBe(90);
});

test('Тест падения атаки с отравлением', () => {
  expect(daemon.attack).toBe(85);
});
