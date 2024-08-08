import { unstable_flag as flag } from '@vercel/flags/next';
import { get } from '@vercel/edge-config';

export const showSearchInNavbar = flag({
  key: 'search-in-navbar',
  async decide() {
    const value = await get(this.key);
    return value ?? false;
  },
});
