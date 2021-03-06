var missingVars = [];

if (process.env.BNET_KEY == undefined) {
  missingVars.push('BNET_KEY');
}

if (process.env.BNET_SECRET == undefined) {
  missingVars.push('BNET_SECRET');
}

if (process.env.BNET_HOSTNAME == undefined) {
  missingVars.push('BNET_HOSTNAME');
}

if (process.env.BNET_REGION == undefined) {
  missingVars.push('BNET_REGION');
}

if (missingVars.length) {
  throw new Error(`Missing ENV variables:${missingVars.join(',')}`)
}

module.exports = {
  key: process.env.BNET_KEY,
  secret: process.env.BNET_SECRET,
  callbackUrl: `https://${process.env.BNET_HOSTNAME}/auth/bnet/callback`,
  region: process.env.BNET_REGION
};
