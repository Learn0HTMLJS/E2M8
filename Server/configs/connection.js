const dotenv = require('dotenv');
dotenv.config({path: '.env'});
const {createClient} = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
console.log(supabaseUrl);
const supabase = createClient("https://dmvmfmvhsayymxujtnsn.supabase.co",
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtdm1mbXZoc2F5eW14dWp0bnNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAzNDkxMDYsImV4cCI6MTk2NTkyNTEwNn0.nR7N_ox4HzcD3zxaq_e3RTLk4xuL0N5v6hLReTBPuz8");
//const supabase = createClient(supabaseUrl,supabaseKey);
module.exports = supabase;