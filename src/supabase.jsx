import { createClient } from "@supabase/supabase-js";

const URL = "https://xmuxnhttizwaxssvhlqa.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdXhuaHR0aXp3YXhzc3ZobHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NzEzMzMsImV4cCI6MjA1MDU0NzMzM30.sbBXsFve8AKsXKPS1PpixFTPwj0njh6Lr5UKKF5nGjE"

export const supabase = createClient(URL, key);
