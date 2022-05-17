import {Replicache} from 'replicache';

test('tslocke example', async () => {
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

