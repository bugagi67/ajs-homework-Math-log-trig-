import MathChar from './Math';
import Daemon from './Daemon';
import Magician from './Magician';

export const magician = new Magician('magician', 100, false, 2);
export const daemon = new Daemon('daemon', 100, true, 2);
export const math = new MathChar('math', 100, true, 5);
