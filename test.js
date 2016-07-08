import test from 'ava';
import libuiRichtexteditorNode from './';

test('it work!', t => {
	const result = libuiRichtexteditorNode();
	t.is(result, 42);
});
