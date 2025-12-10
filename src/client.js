import { createClient } from '@supabase/supabase-js';

const URL = 'https://tqculkvewlhkksymqoog.supabase.co';
const API_KEY = 'sb_publishable_cA24a7pIwdtmFbKcF_ZelA_PhEhgqGa';

export const supabase = createClient(URL, API_KEY);
