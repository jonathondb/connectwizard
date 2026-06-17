// ─── COMBO DATA ──────────────────────────────────────────────────────────────
// Each entry becomes a static, indexable page at /connect/[slug]
// Content is answer-first and structured for both Google ranking and AI citation.
// Amazon search queries use the site tag; ASINs can be added later via PA-API.

export const AMAZON_TAG = "connectwizard-20";

export const combos = [
  {
    slug: "macbook-to-4k-monitor",
    deviceA: "MacBook",
    deviceB: "4K Monitor",
    title: "How to Connect a MacBook to a 4K Monitor (2026 Guide)",
    metaDescription: "Step-by-step guide to connect any MacBook to a 4K monitor at 60Hz. Covers USB-C, HDMI, and DisplayPort methods plus the exact adapters you need.",
    intro: "To connect a MacBook to a 4K monitor, use a USB-C to HDMI or USB-C to DisplayPort cable that supports 4K at 60Hz. Modern MacBooks output video directly over their USB-C/Thunderbolt ports, so a single cable or adapter is usually all you need. For 4K at a smooth 60Hz, confirm the cable explicitly supports it — many cheaper adapters cap at 4K 30Hz, which looks choppy.",
    methods: [
      {
        name: "USB-C to HDMI",
        type: "wired",
        steps: [
          "Check your monitor's input — most 4K monitors use HDMI 2.0 or higher.",
          "Get a USB-C to HDMI adapter or cable rated for 4K at 60Hz (HDMI 2.0+).",
          "Plug the USB-C end into your MacBook and the HDMI end into the monitor.",
          "On your Mac, go to System Settings → Displays to detect and arrange the screen.",
          "Set resolution to the monitor's native 4K (3840×2160) and refresh rate to 60Hz.",
        ],
        parts: [{ name: "USB-C to HDMI Adapter (4K 60Hz)", searchQuery: "USB-C to HDMI adapter 4K 60Hz" }],
      },
      {
        name: "USB-C to DisplayPort",
        type: "wired",
        steps: [
          "Confirm your monitor has a DisplayPort input (most 4K monitors do).",
          "Get a USB-C to DisplayPort cable that supports 4K at 60Hz or higher.",
          "Connect USB-C to the MacBook and DisplayPort to the monitor.",
          "Open System Settings → Displays to configure resolution and refresh rate.",
        ],
        parts: [{ name: "USB-C to DisplayPort Cable", searchQuery: "USB-C to DisplayPort cable 4K 60Hz" }],
      },
    ],
    tips: [
      "If you want to drive two 4K monitors, a Thunderbolt dock is the cleanest solution.",
      "MacBook Air models (M1/M2) officially support only one external display without a DisplayLink dock.",
      "Always buy cables rated for 4K 60Hz — 30Hz feels laggy for everyday use.",
    ],
    faqs: [
      { q: "Can a MacBook run a 4K monitor at 60Hz?", a: "Yes. All USB-C MacBooks support 4K at 60Hz over USB-C, as long as your cable or adapter is rated for HDMI 2.0 or DisplayPort 1.2 and above." },
      { q: "Why is my MacBook only showing 4K at 30Hz?", a: "This is almost always a cable limitation. Replace the adapter with one explicitly rated for 4K 60Hz." },
      { q: "Do MacBook Air models support external monitors?", a: "Yes, but M1 and M2 MacBook Air models support only one external display natively. A DisplayLink dock is needed for more." },
    ],
  },
  {
    slug: "iphone-to-smart-tv",
    deviceA: "iPhone",
    deviceB: "Smart TV",
    title: "How to Connect an iPhone to a Smart TV (Wireless & Wired)",
    metaDescription: "Connect your iPhone to any smart TV using AirPlay wirelessly, or with a Lightning/USB-C to HDMI adapter. Step-by-step instructions and the parts you need.",
    intro: "The easiest way to connect an iPhone to a smart TV is wirelessly with AirPlay, which works on most modern TVs without any cables. If your TV doesn't support AirPlay, a Lightning to HDMI adapter (or USB-C to HDMI on iPhone 15 and later) gives you a reliable wired connection. AirPlay is best for streaming video and photos; the wired route is better for mirroring everything with zero lag.",
    methods: [
      {
        name: "AirPlay (Wireless)",
        type: "wireless",
        steps: [
          "Make sure your iPhone and TV are on the same Wi-Fi network.",
          "Confirm your TV supports AirPlay (most TVs from 2019 onward do).",
          "Open Control Center on your iPhone and tap Screen Mirroring.",
          "Select your TV from the list and enter the on-screen code if prompted.",
        ],
        parts: [],
      },
      {
        name: "Lightning / USB-C to HDMI",
        type: "wired",
        steps: [
          "Get a Lightning to HDMI adapter (iPhone 14 and earlier) or USB-C to HDMI (iPhone 15+).",
          "Connect the adapter to your iPhone, then run an HDMI cable to the TV.",
          "Switch the TV to the matching HDMI input.",
          "Your iPhone screen mirrors automatically.",
        ],
        parts: [
          { name: "Lightning to HDMI Adapter", searchQuery: "Lightning to HDMI adapter Apple" },
          { name: "HDMI Cable", searchQuery: "HDMI cable 6ft 4K" },
        ],
      },
    ],
    tips: [
      "If AirPlay doesn't appear, restart both devices and confirm they share one Wi-Fi network.",
      "For gaming or anything fast-moving, the wired HDMI route avoids wireless lag.",
      "An Apple TV box adds AirPlay to any TV that lacks it natively.",
    ],
    faqs: [
      { q: "Can I connect my iPhone to any smart TV?", a: "Yes. Use AirPlay if the TV supports it, otherwise a Lightning or USB-C to HDMI adapter works with any TV that has an HDMI port." },
      { q: "Why won't my iPhone find my TV with AirPlay?", a: "Both devices must be on the same Wi-Fi network. Restarting both and confirming the network usually resolves it." },
      { q: "Which adapter do I need for iPhone 15?", a: "iPhone 15 and later use USB-C, so you need a USB-C to HDMI adapter, not a Lightning one." },
    ],
  },
  {
    slug: "ps5-to-soundbar",
    deviceA: "PS5",
    deviceB: "Soundbar",
    title: "How to Connect a PS5 to a Soundbar (HDMI ARC & Optical)",
    metaDescription: "Get the best audio from your PS5 with a soundbar. Step-by-step setup for HDMI ARC and optical connections, plus the cables you need.",
    intro: "The best way to connect a PS5 to a soundbar is through your TV using HDMI ARC, which passes audio from the PS5 to the soundbar with full quality and a single cable. If your TV or soundbar lacks HDMI ARC, an optical cable is a reliable fallback. HDMI ARC supports higher-quality audio formats and lets one remote control volume, which is why it's the preferred route.",
    methods: [
      {
        name: "HDMI ARC (via TV)",
        type: "wired",
        steps: [
          "Connect the PS5 to any HDMI port on your TV with an HDMI 2.1 cable.",
          "Connect the soundbar to the TV's HDMI port labeled 'ARC' or 'eARC'.",
          "In the TV settings, enable HDMI-CEC and ARC audio output.",
          "On the PS5, go to Settings → Sound → Audio Output and confirm output via HDMI.",
        ],
        parts: [
          { name: "HDMI 2.1 Cable", searchQuery: "HDMI 2.1 cable 8K 120Hz PS5" },
          { name: "HDMI Cable for Soundbar (ARC)", searchQuery: "HDMI cable ARC soundbar" },
        ],
      },
      {
        name: "Optical Cable",
        type: "wired",
        steps: [
          "Connect the PS5 to the TV via HDMI.",
          "Run an optical (Toslink) cable from the TV's optical out to the soundbar.",
          "Set the TV audio output to the optical/external speaker option.",
        ],
        parts: [{ name: "Optical Audio Cable", searchQuery: "optical audio cable Toslink" }],
      },
    ],
    tips: [
      "Use eARC if both your TV and soundbar support it — it carries the highest-quality audio.",
      "Enable HDMI-CEC so your TV remote also controls soundbar volume.",
      "The PS5 doesn't have an optical port, so audio always routes through the TV.",
    ],
    faqs: [
      { q: "Does the PS5 have an optical audio port?", a: "No. The PS5 only outputs audio over HDMI, so an optical soundbar connection must route through your TV." },
      { q: "What's the best PS5 audio connection?", a: "HDMI ARC (or eARC) through your TV gives the best quality and lets one remote control volume." },
      { q: "Do I need a special HDMI cable for PS5?", a: "For 4K 120Hz gaming, use an HDMI 2.1 cable. The one included with the PS5 supports this." },
    ],
  },
  {
    slug: "laptop-to-projector",
    deviceA: "Laptop",
    deviceB: "Projector",
    title: "How to Connect a Laptop to a Projector (HDMI, USB-C, Wireless)",
    metaDescription: "Connect any laptop to a projector for presentations or movies. Step-by-step HDMI, USB-C, and wireless setup with the adapters you need.",
    intro: "To connect a laptop to a projector, the most reliable method is an HDMI cable from your laptop to the projector's HDMI input. If your laptop only has USB-C, use a USB-C to HDMI adapter. Most projectors and laptops support HDMI directly, making it a plug-and-play connection for presentations, movies, and screen sharing.",
    methods: [
      {
        name: "HDMI Cable",
        type: "wired",
        steps: [
          "Locate the HDMI port on both your laptop and the projector.",
          "Connect an HDMI cable between them.",
          "Power on the projector and select the correct HDMI input source.",
          "On Windows press Win+P, or on Mac open System Settings → Displays, to choose mirror or extend.",
        ],
        parts: [{ name: "HDMI Cable (10ft)", searchQuery: "HDMI cable 10ft projector" }],
      },
      {
        name: "USB-C to HDMI",
        type: "wired",
        steps: [
          "If your laptop has only USB-C, get a USB-C to HDMI adapter.",
          "Plug the adapter into the laptop and run an HDMI cable to the projector.",
          "Select the projector's HDMI input and configure display mode on your laptop.",
        ],
        parts: [{ name: "USB-C to HDMI Adapter", searchQuery: "USB-C to HDMI adapter projector" }],
      },
    ],
    tips: [
      "Carry your own HDMI cable and USB-C adapter to presentations — venue cables are unreliable.",
      "Use 'Duplicate' mode for presentations so you see what the audience sees.",
      "If the image is fuzzy, match your laptop resolution to the projector's native resolution.",
    ],
    faqs: [
      { q: "How do I connect a laptop to a projector without VGA?", a: "Use HDMI, or a USB-C to HDMI adapter if your laptop only has USB-C ports. VGA is rarely needed on modern equipment." },
      { q: "Why won't my projector show my laptop screen?", a: "Confirm the projector is on the correct input source and press Win+P (Windows) to enable the external display." },
    ],
  },
  {
    slug: "bluetooth-headphones-to-pc",
    deviceA: "Bluetooth Headphones",
    deviceB: "PC",
    title: "How to Connect Bluetooth Headphones to a PC (With or Without Bluetooth)",
    metaDescription: "Pair Bluetooth headphones with any Windows PC. Step-by-step pairing guide plus the USB Bluetooth adapter you need if your PC lacks Bluetooth.",
    intro: "To connect Bluetooth headphones to a PC, put the headphones in pairing mode and add them through Windows Bluetooth settings. If your desktop PC doesn't have built-in Bluetooth — most don't — a small USB Bluetooth adapter adds it instantly for under $15. Laptops almost always have Bluetooth built in, so no extra hardware is needed.",
    methods: [
      {
        name: "Built-in Bluetooth Pairing",
        type: "wireless",
        steps: [
          "Put your headphones into pairing mode (usually hold the power button until the light flashes).",
          "On your PC, open Settings → Bluetooth & devices.",
          "Click 'Add device' → Bluetooth, and select your headphones from the list.",
          "Once connected, set them as the default playback device in sound settings.",
        ],
        parts: [],
      },
      {
        name: "USB Bluetooth Adapter (if no Bluetooth)",
        type: "wireless",
        steps: [
          "Plug a USB Bluetooth adapter into a free USB port.",
          "Install drivers if prompted (most are plug-and-play on Windows 11).",
          "Put headphones in pairing mode, then add them via Bluetooth settings as above.",
        ],
        parts: [{ name: "USB Bluetooth 5.0 Adapter", searchQuery: "USB Bluetooth adapter 5.0 PC" }],
      },
    ],
    tips: [
      "Most desktop PCs lack Bluetooth — a USB adapter is the quick fix.",
      "If audio is choppy, move the adapter to a front USB port or use a short USB extension to reduce interference.",
      "Set the headphones as default device, or apps may keep using your speakers.",
    ],
    faqs: [
      { q: "Does my PC have Bluetooth?", a: "Most laptops do; most desktops don't. Check Settings → Bluetooth & devices. If there's no Bluetooth toggle, add a USB Bluetooth adapter." },
      { q: "Why do my Bluetooth headphones keep disconnecting from my PC?", a: "This is often USB interference or outdated drivers. Try a different USB port and update the Bluetooth adapter driver." },
    ],
  },
];

// Helper to build an Amazon affiliate search link
export function amazonLink(query) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
