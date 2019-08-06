import Unsplash from 'unsplash-js'

// Regenerate at https://unsplash.com/oauth/applications/84988
const unsplash = new Unsplash({
  applicationId: '3b1404423cef3f2b479552f3aff2703e4d6557c5e58926ee3ca5d403ea9f16e3',
  secret: 'b1b9971b34aedcf64e084e9fd91728ffc398b56c70c61a8e8cc92013e96d79d1',
  bearerToken: '9745ce0ee8e24b29462ae376a04c69e79538db1d602366b1e069af10adc8264e',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
})

export default unsplash
