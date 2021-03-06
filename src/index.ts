import getVendors from './getVendors';
import scrapeInventoryFromVendor from './scrapeRoutines/index';
import AWS from 'aws-sdk';

const init = async () => {
    const vendors = await getVendors();
    for (const vendor of vendors) {
        await scrapeInventoryFromVendor(vendor);
    }
};

init()
    .then(() => console.log('yay'))
    .catch((e: unknown) => console.log('oh no!', e));
