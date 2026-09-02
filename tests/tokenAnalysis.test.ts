import test from 'node:test';
import assert from 'node:assert/strict';
import { encoding_for_model } from 'tiktoken';
import { analyzeTokens } from '../src/tokenAnalysis.js';

const MODEL = 'gpt-3.5-turbo';

test('analyzeTokens uses input pricing by default', () => {
  const encoder = encoding_for_model(MODEL);
  try {
    const analysis = analyzeTokens('Hello', MODEL, encoder);
    assert.equal(analysis.totalTokens, encoder.encode('Hello').length);
    assert.ok(analysis.estimatedCost > 0);
  } finally {
    encoder.free();
  }
});

test('analyzeTokens applies output pricing when requested', () => {
  const encoder = encoding_for_model(MODEL);
  try {
    const text = 'Hello';
    const tokenCount = encoder.encode(text).length;
    const analysis = analyzeTokens(text, MODEL, encoder, 'output');
    const expectedCost = tokenCount * (0.0015 / 1000);
    assert.equal(analysis.estimatedCost, expectedCost);
  } finally {
    encoder.free();
  }
});

test('analyzeTokens handles empty text without non-finite efficiency metrics', () => {
  const encoder = encoding_for_model(MODEL);
  try {
    const analysis = analyzeTokens('', MODEL, encoder);
    assert.equal(analysis.totalTokens, 0);
    assert.equal(analysis.efficiency.charactersPerToken, '0.00');
    assert.equal(analysis.efficiency.wordsPerToken, '0.00');
    assert.equal(analysis.efficiency.efficiency, 'Faible');
  } finally {
    encoder.free();
  }
});
