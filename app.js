const STORAGE_KEYS = {
  USER:'ww_user', POINTS:'ww_points', ENTRIES:'ww_entries',
  POSTS:'ww_posts', RES:'ww_residents', BOOKINGS:'ww_bookings'
};

function load(key, def){ try { return JSON.parse(localStorage.getItem(key)) || def; } catch { return def; } }
function save(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

// TODO: Copy the JS logic from the single-file version here
// (mood tracker, forum posting, buddy matching, bookings, meditation, tabs, leaderboard, etc.)
