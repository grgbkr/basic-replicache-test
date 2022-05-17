import {Replicache} from 'replicache';

test('basic test', async () => {
  const rep = new Replicache({
    name: 'oops',
    mutators: {},
    pushURL: '',
    pullURL: '',
    licenseKey: 'my-key',
  });
  await rep.query(async _tx => {
    console.log(123);
  });
  console.log('here');
});

