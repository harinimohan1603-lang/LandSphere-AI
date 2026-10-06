import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ylfuhdxsweibhrtvhegt.supabase.co";

const supabaseKey = "sb_publishable_AVNFtOBK1r33VpF8pb36Ig_y5uHJpDy";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);