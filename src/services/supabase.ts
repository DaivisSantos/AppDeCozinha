import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://lekjyocqknmanlssilny.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxla2p5b2Nxa25tYW5sc3NpbG55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0Njg2ODAsImV4cCI6MjA2NDA0NDY4MH0.GOLIr10c4NvRggN4fHvL2BarfRJKPLRB3Xg3gFIbkew'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)