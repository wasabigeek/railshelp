import FieldTypeSplitter from './FieldTypeSplitter';

describe('split()', () => {
  it('returns type if there is no config', () => {
    const splitter = new FieldTypeSplitter({ text: 'references' });

    expect(splitter.split()).toEqual(['references', '']);
  });
  it('returns type and single config', () => {
    const splitter = new FieldTypeSplitter({ text: 'references{polymorphic}' });

    expect(splitter.split()).toEqual(['references', '{polymorphic}']);
  });
  it('returns type and multiple configs', () => {
    const splitter = new FieldTypeSplitter({ text: 'decimal{10,2}' });

    expect(splitter.split()).toEqual(['decimal', '{10,2}']);
  });
});
