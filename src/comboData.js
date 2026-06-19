// ─── COMBO DATA (Full Library, 55 guides) ─────────────────────────────────────
// Each entry becomes a static, indexable page at /connect/[slug]
// Content is answer-first and structured for Google ranking and AI citation.

export const AMAZON_TAG = "connectwizard-20";

export const combos = [
  {
    slug: "macbook-to-4k-monitor",
    deviceA: "MacBook", deviceB: "4K Monitor",
    title: "How to Connect a MacBook to a 4K Monitor (2026 Guide)",
    metaDescription: "Step-by-step guide to connect any MacBook to a 4K monitor at 60Hz. Covers USB-C, HDMI, and DisplayPort methods plus the exact adapters you need.",
    intro: "To connect a MacBook to a 4K monitor, use a USB-C to HDMI or USB-C to DisplayPort cable that supports 4K at 60Hz. Modern MacBooks output video directly over their USB-C/Thunderbolt ports, so a single cable or adapter is usually all you need. For 4K at a smooth 60Hz, confirm the cable explicitly supports it — many cheaper adapters cap at 4K 30Hz, which looks choppy.",
    methods: [
      { name: "USB-C to HDMI", type: "wired", steps: ["Check your monitor's input — most 4K monitors use HDMI 2.0 or higher.","Get a USB-C to HDMI adapter rated for 4K at 60Hz (HDMI 2.0+).","Plug USB-C into your MacBook and HDMI into the monitor.","Open System Settings → Displays to detect and arrange the screen.","Set resolution to native 4K (3840×2160) and refresh to 60Hz."], parts: [{ name: "USB-C to HDMI Adapter (4K 60Hz)", searchQuery: "USB-C to HDMI adapter 4K 60Hz" }] },
      { name: "USB-C to DisplayPort", type: "wired", steps: ["Confirm your monitor has a DisplayPort input.","Get a USB-C to DisplayPort cable supporting 4K 60Hz+.","Connect USB-C to the MacBook and DisplayPort to the monitor.","Configure resolution and refresh rate in System Settings → Displays."], parts: [{ name: "USB-C to DisplayPort Cable", searchQuery: "USB-C to DisplayPort cable 4K 60Hz" }] },
    ],
    tips: ["For two 4K monitors, a Thunderbolt dock is the cleanest solution.","M1/M2 MacBook Air supports only one external display without a DisplayLink dock.","Always buy cables rated for 4K 60Hz — 30Hz feels laggy."],
    faqs: [
      { q: "Can a MacBook run a 4K monitor at 60Hz?", a: "Yes. All USB-C MacBooks support 4K at 60Hz over USB-C, as long as your cable or adapter is rated for HDMI 2.0 or DisplayPort 1.2 and above." },
      { q: "Why is my MacBook only showing 4K at 30Hz?", a: "This is almost always a cable limitation. Replace the adapter with one explicitly rated for 4K 60Hz." },
      { q: "Do MacBook Air models support external monitors?", a: "Yes, but M1 and M2 MacBook Air models support only one external display natively. A DisplayLink dock is needed for more." },
    ],
  },
  {
    slug: "iphone-to-smart-tv",
    deviceA: "iPhone", deviceB: "Smart TV",
    title: "How to Connect an iPhone to a Smart TV (Wireless & Wired)",
    metaDescription: "Connect your iPhone to any smart TV using AirPlay wirelessly, or with a Lightning/USB-C to HDMI adapter. Step-by-step instructions and the parts you need.",
    intro: "The easiest way to connect an iPhone to a smart TV is wirelessly with AirPlay, which works on most modern TVs without any cables. If your TV doesn't support AirPlay, a Lightning to HDMI adapter (or USB-C to HDMI on iPhone 15 and later) gives you a reliable wired connection.",
    methods: [
      { name: "AirPlay (Wireless)", type: "wireless", steps: ["Make sure your iPhone and TV are on the same Wi-Fi network.","Confirm your TV supports AirPlay (most TVs from 2019 onward do).","Open Control Center and tap Screen Mirroring.","Select your TV and enter the on-screen code if prompted."], parts: [] },
      { name: "Lightning / USB-C to HDMI", type: "wired", steps: ["Get a Lightning to HDMI adapter (iPhone 14 and earlier) or USB-C to HDMI (iPhone 15+).","Connect the adapter to your iPhone, then run an HDMI cable to the TV.","Switch the TV to the matching HDMI input.","Your iPhone screen mirrors automatically."], parts: [{ name: "Lightning to HDMI Adapter", searchQuery: "Lightning to HDMI adapter Apple" },{ name: "HDMI Cable", searchQuery: "HDMI cable 6ft 4K" }] },
    ],
    tips: ["If AirPlay doesn't appear, restart both devices and confirm one Wi-Fi network.","For gaming, the wired HDMI route avoids wireless lag.","An Apple TV box adds AirPlay to any TV that lacks it."],
    faqs: [
      { q: "Can I connect my iPhone to any smart TV?", a: "Yes. Use AirPlay if the TV supports it, otherwise a Lightning or USB-C to HDMI adapter works with any TV that has an HDMI port." },
      { q: "Why won't my iPhone find my TV with AirPlay?", a: "Both devices must be on the same Wi-Fi network. Restarting both and confirming the network usually resolves it." },
      { q: "Which adapter do I need for iPhone 15?", a: "iPhone 15 and later use USB-C, so you need a USB-C to HDMI adapter, not a Lightning one." },
    ],
  },
  {
    slug: "ps5-to-soundbar",
    deviceA: "PS5", deviceB: "Soundbar",
    title: "How to Connect a PS5 to a Soundbar (HDMI ARC & Optical)",
    metaDescription: "Get the best audio from your PS5 with a soundbar. Step-by-step setup for HDMI ARC and optical connections, plus the cables you need.",
    intro: "To connect a PS5 to a soundbar, route it through your TV using HDMI ARC, which passes audio from the PS5 to the soundbar with full quality over a single cable. If your TV or soundbar lacks HDMI ARC, an optical cable is a reliable fallback.",
    methods: [
      { name: "HDMI ARC (via TV)", type: "wired", steps: ["Connect the PS5 to any TV HDMI port with an HDMI 2.1 cable.","Connect the soundbar to the TV's HDMI port labeled 'ARC' or 'eARC'.","In TV settings, enable HDMI-CEC and ARC audio output.","On the PS5, go to Settings → Sound → Audio Output and confirm HDMI output."], parts: [{ name: "HDMI 2.1 Cable", searchQuery: "HDMI 2.1 cable 8K 120Hz PS5" },{ name: "HDMI Cable (ARC)", searchQuery: "HDMI cable ARC soundbar" }] },
      { name: "Optical Cable", type: "wired", steps: ["Connect the PS5 to the TV via HDMI.","Run an optical (Toslink) cable from the TV's optical out to the soundbar.","Set the TV audio output to optical/external speaker."], parts: [{ name: "Optical Audio Cable", searchQuery: "optical audio cable Toslink" }] },
    ],
    tips: ["Use eARC if both devices support it — it carries the highest-quality audio.","Enable HDMI-CEC so your TV remote controls soundbar volume.","The PS5 has no optical port, so audio routes through the TV."],
    faqs: [
      { q: "Does the PS5 have an optical audio port?", a: "No. The PS5 only outputs audio over HDMI, so an optical soundbar connection must route through your TV." },
      { q: "What's the best PS5 audio connection?", a: "HDMI ARC (or eARC) through your TV gives the best quality and lets one remote control volume." },
      { q: "Do I need a special HDMI cable for PS5?", a: "For 4K 120Hz gaming, use an HDMI 2.1 cable. The one included with the PS5 supports this." },
    ],
  },
  {
    slug: "laptop-to-projector",
    deviceA: "Laptop", deviceB: "Projector",
    title: "How to Connect a Laptop to a Projector (HDMI, USB-C, Wireless)",
    metaDescription: "Connect any laptop to a projector for presentations or movies. Step-by-step HDMI, USB-C, and wireless setup with the adapters you need.",
    intro: "To connect a laptop to a projector, the most reliable method is an HDMI cable from your laptop to the projector's HDMI input. If your laptop only has USB-C, use a USB-C to HDMI adapter. Most projectors and laptops support HDMI directly.",
    methods: [
      { name: "HDMI Cable", type: "wired", steps: ["Locate the HDMI port on both your laptop and the projector.","Connect an HDMI cable between them.","Power on the projector and select the correct HDMI input.","On Windows press Win+P, or on Mac open System Settings → Displays."], parts: [{ name: "HDMI Cable (10ft)", searchQuery: "HDMI cable 10ft projector" }] },
      { name: "USB-C to HDMI", type: "wired", steps: ["If your laptop has only USB-C, get a USB-C to HDMI adapter.","Plug the adapter into the laptop and run HDMI to the projector.","Select the projector's HDMI input and configure display mode."], parts: [{ name: "USB-C to HDMI Adapter", searchQuery: "USB-C to HDMI adapter projector" }] },
    ],
    tips: ["Carry your own HDMI cable and USB-C adapter — venue cables are unreliable.","Use 'Duplicate' mode for presentations.","If fuzzy, match laptop resolution to the projector's native resolution."],
    faqs: [
      { q: "How do I connect a laptop to a projector without VGA?", a: "Use HDMI, or a USB-C to HDMI adapter if your laptop only has USB-C ports." },
      { q: "Why won't my projector show my laptop screen?", a: "Confirm the projector is on the correct input source and press Win+P (Windows) to enable the external display." },
    ],
  },
  {
    slug: "bluetooth-headphones-to-pc",
    deviceA: "Bluetooth Headphones", deviceB: "PC",
    title: "How to Connect Bluetooth Headphones to a PC (With or Without Bluetooth)",
    metaDescription: "Pair Bluetooth headphones with any Windows PC. Step-by-step pairing guide plus the USB Bluetooth adapter you need if your PC lacks Bluetooth.",
    intro: "To connect Bluetooth headphones to a PC, put the headphones in pairing mode and add them through Windows Bluetooth settings. If your desktop PC doesn't have built-in Bluetooth — most don't — a small USB Bluetooth adapter adds it instantly.",
    methods: [
      { name: "Built-in Bluetooth Pairing", type: "wireless", steps: ["Put your headphones into pairing mode (hold power until the light flashes).","Open Settings → Bluetooth & devices.","Click 'Add device' → Bluetooth, and select your headphones.","Set them as the default playback device."], parts: [] },
      { name: "USB Bluetooth Adapter", type: "wireless", steps: ["Plug a USB Bluetooth adapter into a free USB port.","Install drivers if prompted (plug-and-play on Windows 11).","Put headphones in pairing mode, then add via Bluetooth settings."], parts: [{ name: "USB Bluetooth 5.0 Adapter", searchQuery: "USB Bluetooth adapter 5.0 PC" }] },
    ],
    tips: ["Most desktop PCs lack Bluetooth — a USB adapter is the quick fix.","If choppy, use a front USB port to reduce interference.","Set headphones as default device or apps keep using speakers."],
    faqs: [
      { q: "Does my PC have Bluetooth?", a: "Most laptops do; most desktops don't. Check Settings → Bluetooth & devices. If there's no toggle, add a USB Bluetooth adapter." },
      { q: "Why do my Bluetooth headphones keep disconnecting?", a: "Often USB interference or outdated drivers. Try a different USB port and update the adapter driver." },
    ],
  },
  {
    slug: "macbook-to-external-monitor",
    deviceA: "MacBook", deviceB: "External Monitor",
    title: "How to Connect a MacBook to an External Monitor (USB-C & HDMI)",
    metaDescription: "Connect your MacBook to any external monitor with USB-C or HDMI. Step-by-step setup, display arrangement, and the adapters you need.",
    intro: "To connect a MacBook to an external monitor, use a USB-C to HDMI adapter or cable — modern MacBooks output video directly through their USB-C/Thunderbolt ports. Plug in the adapter, connect HDMI to the monitor, and macOS detects the display automatically.",
    methods: [
      { name: "USB-C to HDMI", type: "wired", steps: ["Get a USB-C to HDMI adapter or cable.","Connect USB-C to the MacBook and HDMI to the monitor.","Open System Settings → Displays.","Click 'Arrange' to position the monitor and choose mirror or extend."], parts: [{ name: "USB-C to HDMI Adapter", searchQuery: "USB-C to HDMI adapter" }] },
    ],
    tips: ["Use 'Extend' to gain workspace, 'Mirror' to duplicate.","Hold Option and click 'Scaled' for more resolution choices.","A USB-C hub adds monitor plus USB ports and charging in one."],
    faqs: [
      { q: "How do I connect my MacBook to a monitor?", a: "Use a USB-C to HDMI adapter from your MacBook's USB-C port to the monitor's HDMI input. macOS detects it automatically." },
      { q: "Why won't my MacBook detect the monitor?", a: "Try System Settings → Displays and click 'Detect Displays' (hold Option to reveal it). Reseat the cable and confirm the monitor's input source." },
    ],
  },
  {
    slug: "macbook-to-dual-monitors",
    deviceA: "MacBook", deviceB: "Dual Monitors",
    title: "How to Connect a MacBook to Dual Monitors (Docking Station Guide)",
    metaDescription: "Run two external monitors from your MacBook. Learn which docks work, the M1/M2 limitation, and the exact docking station to buy.",
    intro: "To connect a MacBook to dual monitors, use a USB-C docking station with two display outputs. Important: M1 and M2 MacBook Air and base Pro models natively support only one external display — for dual monitors on those, you need a dock with DisplayLink technology, which works around the limit.",
    methods: [
      { name: "USB-C Docking Station", type: "wired", steps: ["Check your MacBook chip — M1/M2 base models need a DisplayLink dock for two displays.","Connect the dock to your MacBook's USB-C port.","Plug both monitors into the dock's HDMI/DisplayPort outputs.","Install DisplayLink Manager if your dock requires it.","Arrange displays in System Settings → Displays."], parts: [{ name: "USB-C Docking Station (Dual Monitor)", searchQuery: "USB-C docking station dual monitor DisplayLink" }] },
    ],
    tips: ["MacBook Pro with M1 Pro/Max and later support multiple displays natively.","DisplayLink docks work on any MacBook regardless of chip limits.","One Thunderbolt dock can also charge your MacBook."],
    faqs: [
      { q: "Why can my MacBook Air only run one monitor?", a: "M1 and M2 MacBook Air have a hardware limit of one external display. A DisplayLink dock bypasses this to run two or more." },
      { q: "What dock do I need for two monitors on a MacBook?", a: "A USB-C dock with DisplayLink for base M1/M2 chips, or any standard Thunderbolt dock for M1 Pro/Max and newer." },
    ],
  },
  {
    slug: "windows-laptop-to-external-monitor",
    deviceA: "Windows Laptop", deviceB: "External Monitor",
    title: "How to Connect a Windows Laptop to an External Monitor (HDMI)",
    metaDescription: "Connect any Windows laptop to an external monitor with HDMI. Step-by-step setup plus how to extend or duplicate your display.",
    intro: "To connect a Windows laptop to an external monitor, plug an HDMI cable from the laptop's HDMI port into the monitor, then press Win+P to choose how the screen appears. Most Windows laptops have a full-size HDMI port, making this a direct plug-and-play connection.",
    methods: [
      { name: "HDMI Cable", type: "wired", steps: ["Connect an HDMI cable from the laptop to the monitor.","Power on the monitor and select the HDMI input.","Press Win+P on your keyboard.","Choose Duplicate, Extend, or Second screen only."], parts: [{ name: "HDMI Cable (6ft)", searchQuery: "HDMI cable 6ft 4K" }] },
    ],
    tips: ["'Extend' gives you more desktop space across both screens.","If no signal, confirm the monitor's input source matches the cable.","Update graphics drivers if the resolution looks wrong."],
    faqs: [
      { q: "How do I use a second monitor with my laptop?", a: "Connect via HDMI, press Win+P, and select 'Extend' to use it as additional screen space." },
      { q: "Why is my external monitor not detected?", a: "Press Win+P and pick a display mode, confirm the monitor input source, and check the cable. Updating graphics drivers often fixes detection." },
    ],
  },
  {
    slug: "windows-laptop-to-4k-monitor",
    deviceA: "Windows Laptop", deviceB: "4K Monitor",
    title: "How to Connect a Windows Laptop to a 4K Monitor (DisplayPort & HDMI)",
    metaDescription: "Connect a Windows laptop to a 4K monitor at 60Hz. DisplayPort and HDMI setup, plus how to get full 4K resolution and refresh rate.",
    intro: "To connect a Windows laptop to a 4K monitor at 60Hz, use DisplayPort 1.2+ or HDMI 2.0+. DisplayPort generally gives the best 4K performance. Connect the cable, then set the resolution to 3840×2160 and refresh rate to 60Hz in Windows display settings.",
    methods: [
      { name: "DisplayPort Cable", type: "wired", steps: ["Connect a DisplayPort 1.4 cable from laptop to monitor.","Press Win+P and select your display mode.","Right-click desktop → Display settings.","Set resolution to 3840×2160 and refresh rate to 60Hz under Advanced display."], parts: [{ name: "DisplayPort Cable 1.4", searchQuery: "DisplayPort cable 1.4 8K" }] },
      { name: "HDMI 2.0 Cable", type: "wired", steps: ["Use an HDMI 2.0 or higher cable for 4K 60Hz.","Connect laptop to monitor and select HDMI input.","Configure 4K resolution and 60Hz in Display settings."], parts: [{ name: "HDMI 2.0 Cable", searchQuery: "HDMI 2.0 cable 4K 60Hz" }] },
    ],
    tips: ["DisplayPort 1.2+ handles 4K 60Hz reliably; older HDMI may cap at 30Hz.","Set scaling to 150% so 4K text isn't tiny.","Confirm your laptop's GPU supports 4K output."],
    faqs: [
      { q: "Can my laptop output 4K at 60Hz?", a: "Most laptops from the last several years can via DisplayPort 1.2+ or HDMI 2.0+. Check your laptop's port specs." },
      { q: "Why is my 4K monitor stuck at 30Hz?", a: "The cable or port is likely HDMI 1.4. Switch to DisplayPort or an HDMI 2.0+ cable for 60Hz." },
    ],
  },
  {
    slug: "laptop-usb-c-to-vga-projector",
    deviceA: "Laptop", deviceB: "VGA Projector",
    title: "How to Connect a USB-C Laptop to a VGA Projector",
    metaDescription: "Connect a modern USB-C laptop to an older VGA projector. The adapter you need and step-by-step setup for presentations.",
    intro: "To connect a USB-C laptop to a VGA projector, use a USB-C to VGA adapter. Many conference rooms still use VGA projectors, so this adapter bridges your modern laptop to older equipment. VGA carries video only — you'll need a separate cable for audio.",
    methods: [
      { name: "USB-C to VGA Adapter", type: "wired", steps: ["Get a USB-C to VGA adapter.","Connect USB-C to the laptop and a VGA cable to the projector.","Select the projector's VGA/RGB input.","Press Win+P (Windows) or configure Displays (Mac) to project."], parts: [{ name: "USB-C to VGA Adapter", searchQuery: "USB-C to VGA adapter" }] },
    ],
    tips: ["VGA is analog and video-only — run a 3.5mm cable for sound.","VGA maxes out around 1080p; don't expect 4K.","Carry the adapter to meetings; rooms rarely supply them."],
    faqs: [
      { q: "Can I connect a USB-C laptop to a VGA projector?", a: "Yes, with a USB-C to VGA adapter. It converts your laptop's digital output to the projector's analog VGA input." },
      { q: "Does VGA carry audio?", a: "No. VGA is video-only. Use a separate 3.5mm audio cable to the projector or external speakers." },
    ],
  },
  {
    slug: "vga-laptop-to-hdmi-monitor",
    deviceA: "Old Laptop (VGA)", deviceB: "Modern Monitor",
    title: "How to Connect an Old VGA Laptop to a Modern HDMI Monitor",
    metaDescription: "Connect an older VGA-only laptop to a new HDMI monitor with a powered VGA to HDMI converter. Step-by-step setup.",
    intro: "To connect an old VGA laptop to a modern HDMI monitor, use a VGA to HDMI converter. Because VGA is analog and HDMI is digital, you need an active (powered) converter, not a passive cable. Many include a USB power lead and a 3.5mm audio input to carry sound.",
    methods: [
      { name: "VGA to HDMI Converter", type: "wired", steps: ["Get an active VGA to HDMI converter (powered).","Connect the laptop's VGA out to the converter.","Run HDMI from the converter to the monitor.","Plug in the converter's USB power and optional 3.5mm audio.","Select the monitor's HDMI input."], parts: [{ name: "VGA to HDMI Converter", searchQuery: "VGA to HDMI converter adapter powered" }] },
    ],
    tips: ["Passive VGA-to-HDMI cables don't work — you need an active converter.","Connect the 3.5mm audio input if you want sound over HDMI.","Output is limited to the laptop's VGA resolution, typically 1080p."],
    faqs: [
      { q: "Can I plug VGA into HDMI directly?", a: "No. VGA is analog and HDMI is digital. You need an active converter that changes the signal, plus power for the conversion." },
      { q: "Will I get audio through a VGA to HDMI converter?", a: "Only if the converter has a 3.5mm audio input that you connect to the laptop's headphone jack." },
    ],
  },
  {
    slug: "macbook-to-tv-wireless",
    deviceA: "MacBook", deviceB: "TV",
    title: "How to Connect a MacBook to a TV Wirelessly (AirPlay)",
    metaDescription: "Mirror your MacBook to a TV wirelessly with AirPlay, or connect with HDMI. Step-by-step setup for both methods.",
    intro: "To connect a MacBook to a TV wirelessly, use AirPlay to an AirPlay-compatible TV or Apple TV on the same Wi-Fi network. Click the Screen Mirroring icon in the menu bar and select your TV. For TVs without AirPlay, a USB-C to HDMI cable gives a wired alternative.",
    methods: [
      { name: "AirPlay (Wireless)", type: "wireless", steps: ["Ensure the MacBook and TV are on the same Wi-Fi.","Confirm the TV supports AirPlay 2, or use an Apple TV.","Click Control Center → Screen Mirroring in the menu bar.","Select your TV and enter the code if shown."], parts: [] },
      { name: "USB-C to HDMI", type: "wired", steps: ["Get a USB-C to HDMI adapter or cable.","Connect the MacBook to the TV's HDMI input.","Select that HDMI input on the TV.","Arrange the display in System Settings → Displays."], parts: [{ name: "USB-C to HDMI Adapter", searchQuery: "USB-C to HDMI adapter 4K" }] },
    ],
    tips: ["No AirPlay TV? An Apple TV box adds it to any HDMI TV.","Wired HDMI avoids any wireless lag for video.","Keep both devices on the same network band for stable AirPlay."],
    faqs: [
      { q: "How do I AirPlay from my MacBook?", a: "Click the Screen Mirroring icon in Control Center and pick your AirPlay TV. Both must be on the same Wi-Fi network." },
      { q: "My MacBook doesn't show the TV for AirPlay — why?", a: "Confirm both are on the same network and the TV supports AirPlay 2. Restart both devices if it still doesn't appear." },
    ],
  },
  {
    slug: "iphone-to-tv-hdmi",
    deviceA: "iPhone", deviceB: "TV",
    title: "How to Connect an iPhone to a TV with HDMI",
    metaDescription: "Connect your iPhone to a TV using a Lightning or USB-C HDMI adapter. Step-by-step wired mirroring setup and the adapter you need.",
    intro: "To connect an iPhone to a TV with HDMI, use a Lightning Digital AV Adapter (iPhone 14 and earlier) or a USB-C to HDMI adapter (iPhone 15 and later). Plug the adapter into your iPhone, connect an HDMI cable to the TV, and your screen mirrors instantly with no Wi-Fi needed.",
    methods: [
      { name: "Lightning to HDMI (iPhone 14 and earlier)", type: "wired", steps: ["Get an official Lightning Digital AV Adapter.","Plug it into your iPhone's Lightning port.","Connect an HDMI cable from the adapter to the TV.","Select the TV's HDMI input — mirroring starts automatically."], parts: [{ name: "Lightning Digital AV Adapter", searchQuery: "Lightning Digital AV adapter Apple" }] },
      { name: "USB-C to HDMI (iPhone 15+)", type: "wired", steps: ["Get a USB-C to HDMI adapter.","Connect it to your iPhone's USB-C port.","Run HDMI to the TV and select that input."], parts: [{ name: "USB-C to HDMI Adapter", searchQuery: "USB-C to HDMI adapter iPhone 15" }] },
    ],
    tips: ["The wired route needs no Wi-Fi — great for hotels.","Official or certified adapters avoid HDCP playback errors.","The Lightning adapter has a spare port to charge while mirroring."],
    faqs: [
      { q: "Why does my iPhone HDMI adapter say 'cannot display'?", a: "Some streaming apps enforce HDCP copy protection. Use an official/certified adapter to avoid playback blocks." },
      { q: "Do I need Wi-Fi to connect iPhone to TV with HDMI?", a: "No. A wired HDMI adapter works without any network, unlike AirPlay." },
    ],
  },
  {
    slug: "android-phone-to-tv-hdmi",
    deviceA: "Android Phone", deviceB: "TV",
    title: "How to Connect an Android Phone to a TV with HDMI",
    metaDescription: "Connect an Android phone to a TV using a USB-C to HDMI cable. Step-by-step wired mirroring plus which phones support it.",
    intro: "To connect an Android phone to a TV with HDMI, use a USB-C to HDMI cable or adapter — provided your phone supports video output (DisplayPort Alt Mode). Plug USB-C into the phone and HDMI into the TV. Not all Android phones support video out, so check yours first.",
    methods: [
      { name: "USB-C to HDMI", type: "wired", steps: ["Confirm your phone supports USB-C DisplayPort Alt Mode (video out).","Get a USB-C to HDMI cable or adapter.","Connect USB-C to the phone and HDMI to the TV.","Select the TV's HDMI input — the screen mirrors."], parts: [{ name: "USB-C to HDMI Cable", searchQuery: "USB-C to HDMI cable Android phone" }] },
    ],
    tips: ["Many budget phones lack video-out over USB-C — check specs first.","If wired won't work, use Chromecast for wireless casting.","Samsung phones add DeX desktop mode over the same cable."],
    faqs: [
      { q: "Does my Android phone support HDMI out?", a: "Only phones with USB-C DisplayPort Alt Mode do. Many Samsung, recent Pixel, and flagship phones support it; budget phones often don't." },
      { q: "What if my phone doesn't support USB-C video out?", a: "Use a Chromecast or a Miracast wireless display dongle to cast instead." },
    ],
  },
  {
    slug: "android-phone-to-smart-tv-chromecast",
    deviceA: "Android Phone", deviceB: "Smart TV",
    title: "How to Connect an Android Phone to a Smart TV (Chromecast)",
    metaDescription: "Cast your Android phone to a smart TV wirelessly with Chromecast or built-in Cast. Step-by-step setup and tips.",
    intro: "To connect an Android phone to a smart TV wirelessly, use Chromecast (built into many TVs) or a Chromecast device. With both on the same Wi-Fi, tap the Cast icon in a supported app, or mirror your whole screen from Quick Settings. It's the easiest cable-free option for Android.",
    methods: [
      { name: "Chromecast / Cast", type: "wireless", steps: ["Ensure phone and TV are on the same Wi-Fi network.","Confirm the TV has Chromecast built-in, or plug in a Chromecast.","Open a Cast-enabled app (YouTube, Netflix) and tap the Cast icon.","To mirror everything, use 'Cast screen' in Quick Settings."], parts: [{ name: "Google Chromecast", searchQuery: "Google Chromecast 4K" }] },
    ],
    tips: ["Built-in Cast (Google TV, many Sonys) needs no extra hardware.","Screen mirroring drains battery — keep the phone charging.","5GHz Wi-Fi gives smoother casting than 2.4GHz."],
    faqs: [
      { q: "How do I cast my Android phone to my TV?", a: "Connect both to the same Wi-Fi, then tap the Cast icon in a supported app or use 'Cast screen' in Quick Settings." },
      { q: "Do I need a Chromecast if my TV has Google TV?", a: "No. Google TV and many smart TVs have Cast built in, so you can cast directly without extra hardware." },
    ],
  },
  {
    slug: "iphone-to-car-stereo-carplay",
    deviceA: "iPhone", deviceB: "Car Stereo",
    title: "How to Connect an iPhone to a Car Stereo (CarPlay)",
    metaDescription: "Set up Apple CarPlay to connect your iPhone to a car stereo. Wired USB cable steps and the cable you need.",
    intro: "To connect an iPhone to a car stereo with CarPlay, plug a quality USB-to-Lightning (or USB-C) cable from your iPhone into the car's CarPlay USB port. CarPlay launches on the car's screen automatically. Use a data-capable cable — charge-only cables won't establish the CarPlay connection.",
    methods: [
      { name: "Wired CarPlay", type: "wired", steps: ["Confirm your car supports CarPlay (look for the USB port marked with a phone/CarPlay icon).","Use a data-capable Lightning or USB-C cable.","Plug your iPhone into that USB port.","CarPlay appears on the car display; follow the prompt to enable it."], parts: [{ name: "USB to Lightning Cable (MFi)", searchQuery: "USB to Lightning cable MFi data" }] },
    ],
    tips: ["Use an MFi-certified cable — cheap cables drop the connection.","If CarPlay won't start, check Settings → General → CarPlay on the iPhone.","Some head units support wireless CarPlay over Bluetooth + Wi-Fi."],
    faqs: [
      { q: "Why won't CarPlay connect with my cable?", a: "You're likely using a charge-only cable. CarPlay needs a data-capable, ideally MFi-certified, cable." },
      { q: "Can I use CarPlay wirelessly?", a: "Only if your car stereo supports wireless CarPlay. Otherwise the wired USB connection is required." },
    ],
  },
  {
    slug: "android-phone-to-car-stereo",
    deviceA: "Android Phone", deviceB: "Car Stereo",
    title: "How to Connect an Android Phone to a Car Stereo (Android Auto)",
    metaDescription: "Connect your Android phone to a car stereo with Android Auto. Wired USB setup and the data cable you need.",
    intro: "To connect an Android phone to a car stereo with Android Auto, plug a data-capable USB cable from your phone into the car's Android Auto USB port. Android Auto launches on the car display. As with CarPlay, the cable must support data transfer, not just charging.",
    methods: [
      { name: "Wired Android Auto", type: "wired", steps: ["Confirm your car supports Android Auto.","Use a high-quality data-capable USB cable (USB-C for most phones).","Plug the phone into the car's Android Auto USB port.","Accept the prompts on your phone to launch Android Auto."], parts: [{ name: "USB-C Data Cable", searchQuery: "USB-C cable Android Auto data" }] },
    ],
    tips: ["A short, high-quality cable reduces dropouts.","Update the Android Auto app for best compatibility.","Many newer cars also support wireless Android Auto."],
    faqs: [
      { q: "Why does Android Auto keep disconnecting?", a: "Usually a low-quality or charge-only cable. Switch to a short, data-capable cable." },
      { q: "Does my car need a special port for Android Auto?", a: "Use the USB port marked for Android Auto/phone projection — not all USB ports on a car support it." },
    ],
  },
  {
    slug: "ipad-to-external-monitor",
    deviceA: "iPad", deviceB: "External Monitor",
    title: "How to Connect an iPad to an External Monitor (USB-C)",
    metaDescription: "Connect a USB-C iPad to an external monitor with a USB-C to HDMI adapter. Setup steps and how Stage Manager extends your display.",
    intro: "To connect a USB-C iPad to an external monitor, use a USB-C to HDMI adapter into the monitor's HDMI input. iPads mirror by default; on iPadOS with Stage Manager, supported iPad Pro and Air models can use the monitor as a true extended display.",
    methods: [
      { name: "USB-C to HDMI", type: "wired", steps: ["Get a USB-C to HDMI adapter (4K capable).","Connect USB-C to the iPad and HDMI to the monitor.","Select the monitor's HDMI input.","Enable Stage Manager (supported iPads) for an extended workspace."], parts: [{ name: "USB-C to HDMI Adapter", searchQuery: "USB-C to HDMI adapter iPad Pro" }] },
    ],
    tips: ["Most iPads mirror; only M-series iPad Pro/Air extend via Stage Manager.","A USB-C hub adds power and ports while connected.","Lightning iPads need a Lightning Digital AV Adapter instead."],
    faqs: [
      { q: "Can an iPad use an external monitor as a second screen?", a: "M-series iPad Pro and Air can extend the display via Stage Manager. Other iPads mirror the screen." },
      { q: "What adapter connects an iPad to a monitor?", a: "A USB-C to HDMI adapter for USB-C iPads, or a Lightning Digital AV Adapter for older Lightning iPads." },
    ],
  },
  {
    slug: "ipad-to-keyboard",
    deviceA: "iPad", deviceB: "Keyboard",
    title: "How to Connect a Keyboard to an iPad (Bluetooth)",
    metaDescription: "Pair a Bluetooth keyboard with your iPad in seconds. Step-by-step pairing plus tips for switching between devices.",
    intro: "To connect a keyboard to an iPad, put the Bluetooth keyboard in pairing mode, open Settings → Bluetooth on the iPad, and tap the keyboard to pair. Once connected it reconnects automatically. Magnetic Smart Connector keyboards attach without any pairing at all.",
    methods: [
      { name: "Bluetooth Pairing", type: "wireless", steps: ["Turn on the keyboard and put it in pairing mode.","On the iPad, open Settings → Bluetooth.","Tap the keyboard under 'Other Devices'.","Type the pairing code if prompted, then press Return."], parts: [{ name: "Bluetooth Keyboard for iPad", searchQuery: "Bluetooth keyboard iPad" }] },
    ],
    tips: ["Smart Connector keyboards (Magic Keyboard) need no pairing.","Hold the Command key to see available keyboard shortcuts.","Multi-device keyboards switch between iPad and other devices with a button."],
    faqs: [
      { q: "How do I pair a Bluetooth keyboard with my iPad?", a: "Put the keyboard in pairing mode, open Settings → Bluetooth on the iPad, and tap the keyboard to connect." },
      { q: "Why won't my keyboard pair with my iPad?", a: "Make sure it's in pairing mode and charged. Remove it under Bluetooth settings and re-pair if it's stuck." },
    ],
  },
  {
    slug: "ipad-to-external-ssd",
    deviceA: "iPad", deviceB: "External SSD",
    title: "How to Connect an External SSD to an iPad (USB-C)",
    metaDescription: "Connect an external SSD to a USB-C iPad and access files in the Files app. Setup steps and formatting tips.",
    intro: "To connect an external SSD to a USB-C iPad, plug it into the iPad's USB-C port with a USB-C cable. The drive appears in the Files app under Locations. For best compatibility, format the SSD as exFAT or APFS. iPadOS reads most drives directly without extra apps.",
    methods: [
      { name: "USB-C Cable", type: "wired", steps: ["Connect the SSD to the iPad's USB-C port via USB-C cable.","Open the Files app and look under 'Locations'.","Tap the drive to browse, copy, and move files.","Eject by removing it only after transfers finish."], parts: [{ name: "USB-C to USB-C Cable", searchQuery: "USB-C to USB-C cable SSD" }] },
    ],
    tips: ["Format drives as exFAT for cross-device compatibility.","High-power drives may need a powered USB-C hub.","Tap and hold files in the Files app to copy between drive and iPad."],
    faqs: [
      { q: "Can an iPad read an external SSD?", a: "Yes. USB-C iPads read external SSDs directly in the Files app, ideally formatted as exFAT or APFS." },
      { q: "Why doesn't my iPad see my external drive?", a: "Check the format (exFAT works best) and ensure the drive isn't drawing more power than the port supplies — try a powered hub." },
    ],
  },
  {
    slug: "samsung-tablet-to-monitor-dex",
    deviceA: "Samsung Tablet", deviceB: "Monitor",
    title: "How to Connect a Samsung Tablet to a Monitor (Samsung DeX)",
    metaDescription: "Use Samsung DeX to connect a Galaxy Tab to a monitor for a desktop experience. USB-C to HDMI setup and tips.",
    intro: "To connect a Samsung tablet to a monitor, use a USB-C to HDMI adapter and launch Samsung DeX for a desktop-style interface. DeX turns your Galaxy Tab into a windowed desktop on the big screen. Connect the adapter, select the monitor's HDMI input, and start DeX from the notification shade.",
    methods: [
      { name: "USB-C to HDMI (DeX)", type: "wired", steps: ["Get a USB-C to HDMI adapter.","Connect USB-C to the tablet and HDMI to the monitor.","Select the monitor's HDMI input.","Tap the DeX notification to start desktop mode."], parts: [{ name: "USB-C to HDMI Adapter", searchQuery: "USB-C to HDMI Samsung DeX" }] },
    ],
    tips: ["Pair a Bluetooth mouse and keyboard for a true desktop feel.","DeX supports resizable windows like a PC.","A USB-C hub adds power and USB ports during DeX sessions."],
    faqs: [
      { q: "What is Samsung DeX?", a: "DeX is a Samsung feature that turns a Galaxy phone or tablet into a desktop-style interface on an external monitor." },
      { q: "Which adapter do I need for Samsung DeX?", a: "A USB-C to HDMI adapter. Connect it to the monitor and DeX launches from the tablet's notification shade." },
    ],
  },
  {
    slug: "ps5-to-tv",
    deviceA: "PS5", deviceB: "TV",
    title: "How to Connect a PS5 to a TV (4K 120Hz Setup)",
    metaDescription: "Connect your PS5 to a TV for 4K 120Hz gaming. HDMI 2.1 setup, the right cable, and how to enable performance mode.",
    intro: "To connect a PS5 to a TV, plug the included HDMI 2.1 cable from the console into an HDMI 2.1 port on your TV. For 4K 120Hz gaming, the TV port must support HDMI 2.1 — enable 4K 120Hz and VRR in the TV's settings, then confirm output in the PS5's video settings.",
    methods: [
      { name: "HDMI 2.1 Cable", type: "wired", steps: ["Use the HDMI 2.1 cable included with the PS5.","Plug it into a TV HDMI port that supports 2.1 (often labeled).","On the TV, enable 4K 120Hz / Enhanced HDMI mode for that port.","On PS5: Settings → Screen and Video → confirm resolution and 120Hz."], parts: [{ name: "HDMI 2.1 Cable", searchQuery: "HDMI 2.1 cable 8K 120Hz PS5" }] },
    ],
    tips: ["Only some HDMI ports on a TV support 2.1 — check which one.","Enable the TV's 'Enhanced' or 'HDMI 2.1' mode or 120Hz won't appear.","Turn on VRR and ALLM for the smoothest gaming."],
    faqs: [
      { q: "Which HDMI port should I use for PS5 4K 120Hz?", a: "The TV port that supports HDMI 2.1 — often only one or two ports do. Check your TV manual for which are labeled 2.1." },
      { q: "Why is my PS5 not showing 120Hz?", a: "Enable the TV port's enhanced/2.1 mode, use an HDMI 2.1 cable, and confirm 120Hz in the PS5 video settings." },
    ],
  },
  {
    slug: "ps5-to-gaming-headset",
    deviceA: "PS5", deviceB: "Gaming Headset",
    title: "How to Connect a Gaming Headset to a PS5 (Wireless & Wired)",
    metaDescription: "Connect any gaming headset to a PS5 — wireless USB dongle, Bluetooth, or 3.5mm. Step-by-step audio setup.",
    intro: "To connect a gaming headset to a PS5, plug a wireless USB dongle into the console, connect via the controller's 3.5mm jack, or pair compatible Bluetooth headsets. The PS5 doesn't support standard Bluetooth audio for most headphones, so a USB dongle or wired connection is usually required.",
    methods: [
      { name: "Wireless USB Dongle", type: "wireless", steps: ["Plug the headset's USB dongle into the PS5.","Power on the headset to pair with the dongle.","Go to Settings → Sound → Audio Output and select USB headset.","Adjust chat/game balance in the headset or PS5 settings."], parts: [{ name: "PS5 Wireless Gaming Headset", searchQuery: "PS5 wireless gaming headset" }] },
      { name: "3.5mm Wired", type: "wired", steps: ["Plug the headset's 3.5mm jack into the DualSense controller.","Go to Settings → Sound → Audio Output.","Select 'Headset Connected to Controller'."], parts: [] },
    ],
    tips: ["The PS5 doesn't support standard Bluetooth headphones — use a dongle.","The controller's 3.5mm jack is the simplest wired option.","Set 'Output to Headphones' to All Audio to hear everything."],
    faqs: [
      { q: "Can I use Bluetooth headphones with a PS5?", a: "Not most standard ones — the PS5 lacks general Bluetooth audio. Use a USB dongle headset or the controller's 3.5mm jack." },
      { q: "How do I hear game audio in my PS5 headset?", a: "Set Settings → Sound → Audio Output → Output to Headphones to 'All Audio'." },
    ],
  },
  {
    slug: "xbox-series-x-to-tv",
    deviceA: "Xbox Series X", deviceB: "TV",
    title: "How to Connect an Xbox Series X to a TV (4K 120Hz)",
    metaDescription: "Connect your Xbox Series X to a TV for 4K 120Hz gaming. HDMI 2.1 cable and setup steps for the best picture.",
    intro: "To connect an Xbox Series X to a TV, use the included HDMI 2.1 cable into an HDMI 2.1 port on your TV. For 4K 120Hz, the TV port must support HDMI 2.1. The Xbox auto-detects your TV's capabilities, but you can confirm and force settings under Display & sound.",
    methods: [
      { name: "HDMI 2.1 Cable", type: "wired", steps: ["Use the HDMI 2.1 cable included with the Xbox.","Connect to a TV port that supports HDMI 2.1.","Enable the TV's enhanced/2.1 mode on that port.","On Xbox: Settings → General → TV & display options → set 4K and 120Hz."], parts: [{ name: "HDMI 2.1 Cable", searchQuery: "HDMI 2.1 cable Xbox Series X" }] },
    ],
    tips: ["Run the Xbox 4K TV details test under display settings.","Enable Auto Low Latency Mode (ALLM) on the TV.","Use VRR if your TV supports it for tear-free gaming."],
    faqs: [
      { q: "How do I get 120Hz on Xbox Series X?", a: "Use an HDMI 2.1 cable into an HDMI 2.1 TV port, enable the port's enhanced mode, and set 120Hz in TV & display options." },
      { q: "Does the Xbox Series X need a special HDMI cable?", a: "For 4K 120Hz, yes — an HDMI 2.1 cable. The one included in the box supports it." },
    ],
  },
  {
    slug: "xbox-series-x-to-soundbar",
    deviceA: "Xbox Series X", deviceB: "Soundbar",
    title: "How to Connect an Xbox Series X to a Soundbar (HDMI ARC)",
    metaDescription: "Route Xbox Series X audio to a soundbar with HDMI ARC. Step-by-step setup for the best game sound.",
    intro: "To connect an Xbox Series X to a soundbar, run the console's HDMI to your TV, then connect the soundbar to the TV's HDMI ARC port. The TV passes Xbox audio to the soundbar. Enable HDMI-CEC and set the Xbox audio output to match your soundbar's capabilities.",
    methods: [
      { name: "HDMI ARC (via TV)", type: "wired", steps: ["Connect Xbox to the TV via HDMI.","Connect the soundbar to the TV's HDMI ARC/eARC port.","Enable HDMI-CEC and ARC in TV settings.","On Xbox: Settings → General → Volume & audio output → set HDMI audio."], parts: [{ name: "HDMI Cable (ARC)", searchQuery: "HDMI cable ARC soundbar" }] },
    ],
    tips: ["eARC carries uncompressed and Dolby Atmos audio if supported.","Enable CEC so one remote controls soundbar volume.","Match Xbox audio format to what your soundbar decodes."],
    faqs: [
      { q: "How do I connect Xbox audio to a soundbar?", a: "Connect Xbox to the TV via HDMI, then the soundbar to the TV's HDMI ARC port. Audio passes through the TV to the soundbar." },
      { q: "Can I get Dolby Atmos from Xbox to my soundbar?", a: "Yes, over HDMI eARC with an Atmos-capable soundbar and the matching Xbox audio setting." },
    ],
  },
  {
    slug: "nintendo-switch-to-tv",
    deviceA: "Nintendo Switch", deviceB: "TV",
    title: "How to Connect a Nintendo Switch to a TV (Dock Setup)",
    metaDescription: "Connect your Nintendo Switch to a TV using the dock. Step-by-step setup and what to do if there's no signal.",
    intro: "To connect a Nintendo Switch to a TV, place the console in its official dock, which connects to the TV via HDMI. Plug the dock's HDMI into the TV and the AC adapter into power, then insert the Switch. The console automatically outputs to the TV in docked mode.",
    methods: [
      { name: "Dock + HDMI", type: "wired", steps: ["Open the dock's back panel.","Connect the AC adapter to the dock's USB-C power port.","Connect an HDMI cable from the dock to the TV.","Insert the Switch into the dock and select the TV's HDMI input."], parts: [{ name: "Switch Dock + HDMI Cable", searchQuery: "Nintendo Switch dock HDMI" }] },
    ],
    tips: ["Only the official or quality third-party docks deliver enough power.","If no signal, reseat the Switch and confirm the AC adapter is connected.","The Switch Lite cannot output to a TV — it has no video out."],
    faqs: [
      { q: "Why won't my Switch connect to the TV?", a: "Ensure the AC adapter is plugged into the dock, the HDMI is secure, and you've selected the right TV input. Reseat the console firmly." },
      { q: "Can the Switch Lite connect to a TV?", a: "No. The Switch Lite is handheld-only and cannot output video to a TV." },
    ],
  },
  {
    slug: "nintendo-switch-to-portable-monitor",
    deviceA: "Nintendo Switch", deviceB: "Portable Monitor",
    title: "How to Connect a Nintendo Switch to a Portable Monitor (USB-C)",
    metaDescription: "Play your Switch on a portable monitor with a USB-C hub. Setup steps for travel gaming without the dock.",
    intro: "To connect a Nintendo Switch to a portable monitor, use a compatible USB-C hub that supports Switch video output, connecting HDMI to the monitor and power to the hub. The official dock is bulky for travel — a compact USB-C hub replicates docked mode in a portable form.",
    methods: [
      { name: "USB-C Hub", type: "wired", steps: ["Get a USB-C hub known to support Switch (HDMI + PD power).","Connect the Switch's USB-C to the hub.","Run HDMI from the hub to the portable monitor.","Connect the Switch AC adapter to the hub's power port."], parts: [{ name: "USB-C Hub for Switch", searchQuery: "USB-C hub Nintendo Switch HDMI" }] },
    ],
    tips: ["Not all USB-C hubs work with Switch — buy one that lists Switch support.","Provide power to the hub or the Switch won't output video.","A portable monitor with USB-C power-in simplifies cabling."],
    faqs: [
      { q: "Can I use the Switch without the dock?", a: "Yes, with a Switch-compatible USB-C hub that provides HDMI output and power delivery." },
      { q: "Why won't my Switch output through a USB-C hub?", a: "Many hubs lack the exact handshake the Switch needs. Use one specifically advertised as Switch-compatible and supply power." },
    ],
  },
  {
    slug: "steam-deck-to-tv",
    deviceA: "Steam Deck", deviceB: "TV",
    title: "How to Connect a Steam Deck to a TV or Monitor (Dock)",
    metaDescription: "Connect your Steam Deck to a TV or monitor with a USB-C dock. Setup steps for big-screen PC gaming.",
    intro: "To connect a Steam Deck to a TV or monitor, use a USB-C dock or hub with HDMI or DisplayPort output. Connect the dock to the Deck's USB-C port, run video to the display, and supply power. The Deck outputs to the external screen and works great with a Bluetooth controller.",
    methods: [
      { name: "USB-C Dock", type: "wired", steps: ["Connect a USB-C dock to the Steam Deck.","Run HDMI or DisplayPort from the dock to the TV.","Plug the Deck's charger into the dock's power input.","Select the display's input; pair a Bluetooth controller to play."], parts: [{ name: "Steam Deck Docking Station", searchQuery: "Steam Deck dock HDMI" }] },
    ],
    tips: ["Power the dock so the Deck charges during play.","Set the external resolution in Steam settings for best results.","A Bluetooth or USB controller makes couch gaming easier."],
    faqs: [
      { q: "Can the Steam Deck connect to a TV?", a: "Yes, via a USB-C dock or hub with HDMI/DisplayPort output, plus power to the dock." },
      { q: "Do I need the official Steam Deck dock?", a: "No. Most quality USB-C hubs with video output and power delivery work fine." },
    ],
  },
  {
    slug: "tv-to-soundbar-hdmi-arc",
    deviceA: "TV", deviceB: "Soundbar",
    title: "How to Connect a Soundbar to a TV with HDMI ARC",
    metaDescription: "Connect a soundbar to your TV with HDMI ARC for the best sound. Step-by-step setup and how to enable ARC.",
    intro: "To connect a soundbar to a TV with HDMI ARC, run an HDMI cable from the TV's HDMI ARC (or eARC) port to the soundbar's HDMI ARC port. ARC sends TV audio — including from connected devices — to the soundbar over one cable, and lets your TV remote control the volume.",
    methods: [
      { name: "HDMI ARC", type: "wired", steps: ["Find the TV's HDMI port labeled 'ARC' or 'eARC'.","Connect it to the soundbar's HDMI ARC/OUT port.","Enable HDMI-CEC and ARC in the TV's audio settings.","Set the TV's audio output to the external speaker/ARC."], parts: [{ name: "HDMI Cable (ARC)", searchQuery: "HDMI cable ARC 4K" }] },
    ],
    tips: ["eARC supports higher-quality audio like Dolby Atmos.","Enable CEC so the TV remote controls soundbar volume.","Use the correct ARC-labeled HDMI port or it won't work."],
    faqs: [
      { q: "What is HDMI ARC?", a: "Audio Return Channel — it sends audio from the TV (and its connected devices) to a soundbar over a single HDMI cable." },
      { q: "Why is HDMI ARC not working?", a: "Use the ARC-labeled port, enable HDMI-CEC/ARC in TV settings, and set the TV output to the external speaker." },
    ],
  },
  {
    slug: "tv-to-soundbar-optical",
    deviceA: "TV", deviceB: "Soundbar",
    title: "How to Connect a Soundbar to a TV with an Optical Cable",
    metaDescription: "Connect a soundbar to your TV using an optical (Toslink) cable. Step-by-step setup when HDMI ARC isn't available.",
    intro: "To connect a soundbar to a TV with an optical cable, run a Toslink optical cable from the TV's optical audio out to the soundbar's optical in, then set the TV's audio output to the optical/external option. Optical is the best choice when your TV or soundbar lacks HDMI ARC.",
    methods: [
      { name: "Optical Cable", type: "wired", steps: ["Locate the TV's optical (Toslink) output and the soundbar's optical input.","Remove the protective caps and connect the optical cable.","In TV audio settings, select optical/external speaker output.","Set the audio format to PCM if you hear no sound."], parts: [{ name: "Optical Audio Cable", searchQuery: "optical Toslink cable" }] },
    ],
    tips: ["Optical doesn't carry the newest Atmos formats — HDMI ARC does.","If silent, switch the TV's digital audio format to PCM.","Optical can't be controlled by the TV remote like ARC can."],
    faqs: [
      { q: "Optical vs HDMI ARC — which is better?", a: "HDMI ARC supports higher-quality formats and remote volume control. Optical is a solid fallback when ARC isn't available." },
      { q: "Why is there no sound over my optical cable?", a: "Set the TV's digital audio output format to PCM, and confirm the optical cable is fully seated at both ends." },
    ],
  },
  {
    slug: "tv-to-bluetooth-headphones",
    deviceA: "TV", deviceB: "Bluetooth Headphones",
    title: "How to Connect Bluetooth Headphones to a TV",
    metaDescription: "Connect Bluetooth headphones to any TV — built-in Bluetooth or a transmitter. Step-by-step private-listening setup.",
    intro: "To connect Bluetooth headphones to a TV, pair them directly if the TV has Bluetooth, or add a Bluetooth audio transmitter to the TV's optical or 3.5mm output. A low-latency (aptX) transmitter keeps audio in sync with the picture for private, late-night listening.",
    methods: [
      { name: "Built-in TV Bluetooth", type: "wireless", steps: ["Check if your TV supports Bluetooth audio output (many do).","Put the headphones in pairing mode.","In TV settings, open Sound → Bluetooth/Audio devices and select them."], parts: [] },
      { name: "Bluetooth Transmitter", type: "wireless", steps: ["Connect a Bluetooth transmitter to the TV's optical or 3.5mm output.","Power the transmitter and put it in pairing mode.","Put the headphones in pairing mode to connect.","Choose a low-latency (aptX LL) transmitter to avoid lip-sync delay."], parts: [{ name: "Bluetooth Audio Transmitter", searchQuery: "Bluetooth transmitter TV aptX low latency" }] },
    ],
    tips: ["Pick an aptX Low Latency transmitter to keep audio synced to video.","Optical input keeps the TV speakers usable simultaneously on some models.","Some TVs limit Bluetooth to one device at a time."],
    faqs: [
      { q: "Does my TV support Bluetooth headphones?", a: "Many modern TVs do — check Sound settings for a Bluetooth/audio device option. If not, use a Bluetooth transmitter." },
      { q: "Why is the TV audio out of sync with my headphones?", a: "Standard Bluetooth adds latency. Use an aptX Low Latency transmitter and headphones to fix lip-sync issues." },
    ],
  },
  {
    slug: "turntable-to-powered-speakers",
    deviceA: "Turntable", deviceB: "Powered Speakers",
    title: "How to Connect a Turntable to Powered Speakers",
    metaDescription: "Connect a turntable to powered/active speakers with RCA cables. Setup steps and when you need a phono preamp.",
    intro: "To connect a turntable to powered speakers, run RCA cables from the turntable to the speakers' RCA inputs. If your turntable has a built-in preamp (or 'LINE' switch), connect directly. If not, you'll need a phono preamp between them, because phono-level signal is too quiet for powered speakers alone.",
    methods: [
      { name: "RCA Direct (turntable with preamp)", type: "wired", steps: ["Set the turntable's switch to LINE (if it has one).","Connect RCA cables from the turntable to the powered speakers' RCA input.","Connect the speakers' power and the ground wire if provided.","Set the speaker input to the matching RCA/AUX source."], parts: [{ name: "RCA to RCA Cable", searchQuery: "RCA cable turntable" }] },
    ],
    tips: ["No preamp and no LINE switch? Add a phono preamp in between.","Always connect the ground wire to avoid hum.","Active/powered speakers have the amp built in — no receiver needed."],
    faqs: [
      { q: "Do I need a preamp for my turntable?", a: "Only if the turntable lacks a built-in phono preamp and your speakers have no phono input. A phono preamp boosts the signal to line level." },
      { q: "Why does my turntable hum through the speakers?", a: "Connect the turntable's ground wire to the speaker or preamp ground terminal to eliminate the hum." },
    ],
  },
  {
    slug: "turntable-to-receiver",
    deviceA: "Turntable", deviceB: "Receiver",
    title: "How to Connect a Turntable to a Receiver Without a Phono Input",
    metaDescription: "Connect a turntable to a receiver that lacks a phono input using a phono preamp. Step-by-step setup.",
    intro: "To connect a turntable to a receiver without a phono input, add a phono preamp between them. Run the turntable into the preamp, then the preamp into any line-level input (AUX, CD) on the receiver. The preamp boosts the quiet phono signal to line level the receiver can use.",
    methods: [
      { name: "Phono Preamp", type: "wired", steps: ["Connect the turntable's RCA cables to the phono preamp input.","Connect the turntable's ground wire to the preamp ground.","Run RCA from the preamp output to a receiver line input (AUX/CD).","Select that input on the receiver and set volume low to start."], parts: [{ name: "Phono Preamp", searchQuery: "phono preamp turntable" }] },
    ],
    tips: ["Skip the preamp only if the turntable has one built in.","Use the AUX or CD input — never the PHONO-bypassed inputs.","Keep the ground wire connected to avoid hum."],
    faqs: [
      { q: "Can I connect a turntable to any receiver?", a: "Yes. If the receiver has no PHONO input, use a phono preamp into a line input like AUX or CD." },
      { q: "What does a phono preamp do?", a: "It boosts the very low phono-level signal from the turntable up to line level and applies RIAA equalization for correct sound." },
    ],
  },
  {
    slug: "phone-to-bluetooth-speaker",
    deviceA: "Phone", deviceB: "Bluetooth Speaker",
    title: "How to Connect a Phone to a Bluetooth Speaker",
    metaDescription: "Pair your phone with a Bluetooth speaker in seconds. Step-by-step pairing for iPhone and Android plus troubleshooting.",
    intro: "To connect a phone to a Bluetooth speaker, put the speaker in pairing mode, open your phone's Bluetooth settings, and tap the speaker to connect. Once paired it reconnects automatically when both are on. This works the same way on iPhone and Android.",
    methods: [
      { name: "Bluetooth Pairing", type: "wireless", steps: ["Turn on the speaker and hold its Bluetooth button until it flashes (pairing mode).","Open Bluetooth in your phone's settings.","Tap the speaker's name in the device list.","Wait for the confirmation tone — you're connected."], parts: [{ name: "Portable Bluetooth Speaker", searchQuery: "portable Bluetooth speaker" }] },
    ],
    tips: ["If it won't connect, remove/forget the speaker and re-pair.","Most speakers connect to the last device automatically.","Keep the speaker charged — low battery can cause dropouts."],
    faqs: [
      { q: "How do I put my Bluetooth speaker in pairing mode?", a: "Usually hold the Bluetooth or power button until the indicator light flashes rapidly. Check your speaker's manual." },
      { q: "Why won't my phone find the Bluetooth speaker?", a: "Make sure the speaker is in pairing mode and not already connected to another device. Forget and re-pair if needed." },
    ],
  },
  {
    slug: "airpods-to-macbook",
    deviceA: "AirPods", deviceB: "MacBook",
    title: "How to Connect AirPods to a MacBook",
    metaDescription: "Connect AirPods to your MacBook automatically or manually. Step-by-step pairing and switching between Apple devices.",
    intro: "To connect AirPods to a MacBook, if they're already linked to your iCloud account they appear in the Mac's Bluetooth or sound menu — just select them. To pair fresh, open the case lid near the Mac, then choose the AirPods in System Settings → Bluetooth.",
    methods: [
      { name: "Automatic (same Apple ID)", type: "wireless", steps: ["Ensure your MacBook is signed into the same Apple ID as your iPhone.","Click the sound/Control Center icon in the menu bar.","Select your AirPods from the output list."], parts: [] },
      { name: "Manual Pairing", type: "wireless", steps: ["Open System Settings → Bluetooth on the Mac.","Open the AirPods case lid and hold the back button until it flashes white.","Click 'Connect' next to the AirPods in the list."], parts: [] },
    ],
    tips: ["AirPods linked to your Apple ID switch automatically between devices.","If they won't switch, select them manually in the sound menu.","Reset AirPods (hold case button) if pairing fails repeatedly."],
    faqs: [
      { q: "Why won't my AirPods connect to my MacBook?", a: "Select them manually in the menu-bar sound control. If still failing, reset the AirPods by holding the case button until the light flashes amber." },
      { q: "Do AirPods switch automatically to my Mac?", a: "Yes, if the Mac uses the same Apple ID and automatic switching is enabled — though you can always select them manually." },
    ],
  },
  {
    slug: "bluetooth-headphones-to-pc-no-bluetooth",
    deviceA: "Bluetooth Headphones", deviceB: "PC (no Bluetooth)",
    title: "How to Add Bluetooth to a PC for Wireless Headphones",
    metaDescription: "Add Bluetooth to a desktop PC with a USB adapter and pair your wireless headphones. Step-by-step setup.",
    intro: "To use Bluetooth headphones with a PC that has no Bluetooth, plug in a USB Bluetooth adapter — most desktops need one. Once installed, put your headphones in pairing mode and add them through Windows Bluetooth settings. The adapter costs around $15 and works instantly on Windows 11.",
    methods: [
      { name: "USB Bluetooth Adapter", type: "wireless", steps: ["Plug a USB Bluetooth 5.0 adapter into a USB port.","Let Windows install drivers (automatic on Windows 11).","Put the headphones in pairing mode.","Open Settings → Bluetooth & devices → Add device → select the headphones."], parts: [{ name: "USB Bluetooth 5.0 Adapter", searchQuery: "USB Bluetooth adapter 5.0 PC" }] },
    ],
    tips: ["Disable any onboard Bluetooth if you add a dongle to avoid conflicts.","Front-panel USB ports reduce interference vs rear ports behind metal.","Set the headphones as default playback device after pairing."],
    faqs: [
      { q: "How do I know if my PC has Bluetooth?", a: "Open Settings → Bluetooth & devices. If there's no Bluetooth toggle, your PC lacks it and needs a USB adapter." },
      { q: "Are USB Bluetooth adapters easy to set up?", a: "Yes. On Windows 11 most are plug-and-play — just insert it and pair your device." },
    ],
  },
  {
    slug: "macbook-to-projector",
    deviceA: "MacBook", deviceB: "Projector",
    title: "How to Connect a MacBook to a Projector (USB-C to HDMI)",
    metaDescription: "Connect your MacBook to a projector with a USB-C to HDMI adapter. Step-by-step presentation setup and display tips.",
    intro: "To connect a MacBook to a projector, use a USB-C to HDMI adapter into the projector's HDMI input. Connect the adapter, select the projector's HDMI source, and configure mirroring in System Settings → Displays. This is the standard setup for presentations from any modern MacBook.",
    methods: [
      { name: "USB-C to HDMI", type: "wired", steps: ["Get a USB-C to HDMI adapter.","Connect USB-C to the MacBook and HDMI to the projector.","Turn on the projector and select its HDMI input.","Open System Settings → Displays and choose mirror for presentations."], parts: [{ name: "USB-C to HDMI Adapter", searchQuery: "USB-C to HDMI adapter projector" }] },
    ],
    tips: ["Use Displays → 'Mirror' so the audience sees your screen.","Click 'Detect Displays' (hold Option) if the projector isn't found.","Carry your own adapter — meeting rooms rarely have USB-C ones."],
    faqs: [
      { q: "What adapter connects a MacBook to a projector?", a: "A USB-C to HDMI adapter for modern MacBooks. Plug it into the MacBook and run HDMI to the projector." },
      { q: "Why won't my MacBook show on the projector?", a: "Confirm the projector's input source and click Detect Displays in System Settings → Displays (hold Option to reveal it)." },
    ],
  },
  {
    slug: "phone-to-projector-wireless",
    deviceA: "Phone", deviceB: "Projector",
    title: "How to Connect a Phone to a Projector (Wireless & Wired)",
    metaDescription: "Connect your phone to a projector wirelessly or with a cable. Wireless HDMI, screen mirroring, and adapter options.",
    intro: "To connect a phone to a projector, use a wireless HDMI kit or the projector's built-in screen mirroring, or go wired with a USB-C/Lightning to HDMI adapter. Wireless is convenient for quick sharing; a wired adapter is the most reliable for lag-free video and presentations.",
    methods: [
      { name: "Wireless HDMI Kit", type: "wireless", steps: ["Plug the wireless HDMI receiver into the projector's HDMI port.","Power the receiver via USB.","Connect your phone to the transmitter per its app/instructions.","Select the projector's HDMI input to see your screen."], parts: [{ name: "Wireless HDMI Kit", searchQuery: "wireless HDMI transmitter projector" }] },
      { name: "Wired Adapter", type: "wired", steps: ["Get a USB-C to HDMI (Android/newer iPhone) or Lightning AV adapter.","Connect the adapter to the phone and HDMI to the projector.","Select the projector's HDMI input."], parts: [{ name: "USB-C to HDMI Adapter", searchQuery: "USB-C to HDMI adapter phone" }] },
    ],
    tips: ["Wired adapters avoid the lag and dropouts of wireless.","Check your phone supports video-out before buying a USB-C adapter.","Some projectors have native Miracast/AirPlay built in."],
    faqs: [
      { q: "Can I connect my phone to a projector wirelessly?", a: "Yes, with a wireless HDMI kit or a projector that supports Miracast/AirPlay screen mirroring." },
      { q: "What's more reliable, wired or wireless to a projector?", a: "Wired (HDMI adapter) is more reliable and lag-free; wireless is more convenient for quick sharing." },
    ],
  },
  {
    slug: "roku-to-projector",
    deviceA: "Roku Stick", deviceB: "Projector",
    title: "How to Connect a Roku Stick to a Projector",
    metaDescription: "Use a Roku streaming stick with a projector for big-screen streaming. HDMI and USB power setup explained.",
    intro: "To connect a Roku stick to a projector, plug the Roku into the projector's HDMI port and power it via USB or the included adapter. Select the HDMI input, connect the Roku to Wi-Fi, and you have full streaming on the big screen. Audio routes through the projector or a connected sound system.",
    methods: [
      { name: "HDMI + USB Power", type: "wired", steps: ["Plug the Roku stick into the projector's HDMI port.","Power the Roku from a USB port or wall adapter.","Select the projector's HDMI input.","Complete Roku's Wi-Fi setup with the remote."], parts: [{ name: "Roku Streaming Stick", searchQuery: "Roku streaming stick 4K" }] },
    ],
    tips: ["Use the wall adapter if the projector's USB port is underpowered.","An HDMI extender helps if the port placement is tight.","Route audio to external speakers since projector speakers are weak."],
    faqs: [
      { q: "Can I use a Roku with a projector?", a: "Yes. Plug it into the projector's HDMI port and power it via USB, then select that HDMI input." },
      { q: "How do I get sound from a Roku on a projector?", a: "Audio comes out of the projector's speakers, or connect the projector's audio out to external speakers or a soundbar." },
    ],
  },
  {
    slug: "laptop-to-external-hard-drive",
    deviceA: "Laptop", deviceB: "External Hard Drive",
    title: "How to Connect an External Hard Drive to a Laptop",
    metaDescription: "Connect an external hard drive to any laptop via USB. Setup, formatting for Windows or Mac, and safe ejection.",
    intro: "To connect an external hard drive to a laptop, plug its USB cable into the laptop — USB-A or USB-C depending on the drive and your ports. The drive mounts automatically. For use across both Windows and Mac, format it as exFAT. Always eject safely before unplugging to avoid data loss.",
    methods: [
      { name: "USB Connection", type: "wired", steps: ["Connect the drive's USB cable to your laptop.","Use a USB-C adapter if the drive is USB-A and your laptop is USB-C only.","Wait for the drive to mount (File Explorer or Finder).","Eject safely before unplugging."], parts: [{ name: "USB 3.0 Cable", searchQuery: "USB 3.0 cable external hard drive" }] },
    ],
    tips: ["Format as exFAT to share the drive between Windows and Mac.","USB 3.0+ is much faster than USB 2.0 for large transfers.","Always eject to prevent corruption on portable drives."],
    faqs: [
      { q: "Why doesn't my laptop recognize my external drive?", a: "Try another port/cable, check Disk Management (Windows) or Disk Utility (Mac), and confirm the drive has power if it's a desktop model." },
      { q: "What format should an external drive be for both Windows and Mac?", a: "exFAT — it's read/write compatible with both operating systems." },
    ],
  },
  {
    slug: "pc-to-nas-drive",
    deviceA: "PC", deviceB: "NAS Drive",
    title: "How to Connect a PC to a NAS Drive",
    metaDescription: "Connect your PC to a NAS over your network with an Ethernet cable. Setup steps to map the network drive.",
    intro: "To connect a PC to a NAS drive, connect the NAS to your router with an Ethernet cable, then access it over the network from your PC. Find the NAS in File Explorer's Network section or map it as a drive letter using its IP address or hostname. Wired Ethernet gives the fastest, most reliable access.",
    methods: [
      { name: "Ethernet (Network)", type: "wired", steps: ["Connect the NAS to your router with a Cat6 Ethernet cable.","Power on the NAS and complete its initial setup.","On the PC, open File Explorer → Network and find the NAS.","Right-click → 'Map network drive' to assign a drive letter."], parts: [{ name: "Cat6 Ethernet Cable", searchQuery: "Cat6 ethernet cable 10ft" }] },
    ],
    tips: ["Wired Ethernet beats Wi-Fi for large transfers and streaming.","Map the NAS as a drive letter for quick everyday access.","Use the NAS admin page to set up user accounts and permissions."],
    faqs: [
      { q: "How do I access my NAS from my PC?", a: "Find it under Network in File Explorer, or map it as a network drive using its IP/hostname and your NAS credentials." },
      { q: "Should I connect my NAS by Wi-Fi or Ethernet?", a: "Ethernet — it's faster and far more reliable for backups and media streaming than Wi-Fi." },
    ],
  },
  {
    slug: "laptop-to-router-ethernet",
    deviceA: "Laptop (no Ethernet)", deviceB: "Router",
    title: "How to Connect a Laptop With No Ethernet Port to a Router",
    metaDescription: "Add a wired connection to a thin laptop using a USB-C to Ethernet adapter. Step-by-step setup for faster, stabler internet.",
    intro: "To connect a laptop with no Ethernet port to a router, use a USB-C to Ethernet adapter. Plug the adapter into the laptop's USB-C port and run an Ethernet cable to the router. Windows and macOS recognize the adapter automatically, giving you a faster, more stable wired connection than Wi-Fi.",
    methods: [
      { name: "USB-C to Ethernet Adapter", type: "wired", steps: ["Get a USB-C to Gigabit Ethernet adapter.","Plug it into the laptop's USB-C port.","Run an Ethernet cable from the adapter to the router.","The wired connection activates automatically."], parts: [{ name: "USB-C to Ethernet Adapter", searchQuery: "USB-C to Ethernet adapter gigabit" }] },
    ],
    tips: ["Gigabit adapters keep full speed on fast connections.","Wired beats Wi-Fi for video calls, gaming, and big downloads.","A USB-C hub with Ethernet adds ports and charging too."],
    faqs: [
      { q: "Can I add an Ethernet port to my laptop?", a: "Yes, with a USB-C (or USB-A) to Ethernet adapter. It's plug-and-play on modern Windows and macOS." },
      { q: "Is wired Ethernet faster than Wi-Fi on a laptop?", a: "Usually yes — it's more stable with lower latency, which matters for gaming and video calls." },
    ],
  },
  {
    slug: "desktop-pc-to-wifi",
    deviceA: "Desktop PC", deviceB: "WiFi Network",
    title: "How to Connect a Desktop PC to WiFi (USB Adapter)",
    metaDescription: "Add WiFi to a desktop PC with a USB WiFi adapter. Step-by-step setup to get online without Ethernet.",
    intro: "To connect a desktop PC to WiFi, add a USB WiFi adapter if the PC has no built-in wireless — most desktops don't. Plug in the adapter, install drivers if needed, then select your network from the Windows WiFi list. A WiFi 6 adapter gives the best speed on modern routers.",
    methods: [
      { name: "USB WiFi Adapter", type: "wireless", steps: ["Plug a USB WiFi adapter into a USB port.","Install drivers from the included disc or Windows Update.","Click the network icon in the taskbar.","Select your WiFi network and enter the password."], parts: [{ name: "USB WiFi 6 Adapter", searchQuery: "USB WiFi 6 adapter desktop" }] },
    ],
    tips: ["WiFi 6 adapters get the most from modern routers.","A USB extension can improve signal vs a port behind metal.","For heavy use, an internal PCIe WiFi card performs even better."],
    faqs: [
      { q: "Why doesn't my desktop have WiFi?", a: "Most desktops ship without built-in WiFi. Add a USB WiFi adapter or an internal PCIe WiFi card to get wireless." },
      { q: "Are USB WiFi adapters good enough for gaming?", a: "A WiFi 6 adapter with good signal works, but wired Ethernet remains best for low-latency gaming." },
    ],
  },
  {
    slug: "printer-to-laptop-wireless",
    deviceA: "Printer", deviceB: "Laptop",
    title: "How to Connect a Wireless Printer to a Laptop",
    metaDescription: "Connect a wireless printer to your laptop over WiFi. Step-by-step setup for Windows and Mac, no cables needed.",
    intro: "To connect a wireless printer to a laptop, put the printer on your WiFi network, then add it on your laptop through the printer settings. On Windows use Settings → Bluetooth & devices → Printers & scanners → Add device; on Mac use System Settings → Printers & Scanners. Both detect networked printers automatically.",
    methods: [
      { name: "WiFi Setup", type: "wireless", steps: ["Connect the printer to your WiFi via its panel or setup app.","Ensure the laptop is on the same network.","Windows: Settings → Printers & scanners → Add device.","Mac: System Settings → Printers & Scanners → Add. Select the printer."], parts: [] },
    ],
    tips: ["Keep printer and laptop on the same network band.","Install the maker's drivers/app for full scanning features.","If it won't appear, restart the printer and re-run Add device."],
    faqs: [
      { q: "How do I add a wireless printer to my laptop?", a: "Connect the printer to WiFi, then add it via Printers & scanners (Windows) or Printers & Scanners (Mac). It's detected on the network." },
      { q: "Why won't my laptop find my wireless printer?", a: "Confirm both are on the same WiFi network, restart the printer, and re-run the Add device step. Installing the maker's app helps." },
    ],
  },
  {
    slug: "old-printer-to-modern-laptop",
    deviceA: "Old Printer (USB)", deviceB: "Modern Laptop",
    title: "How to Connect an Old USB Printer to a Modern Laptop",
    metaDescription: "Connect an older USB printer to a USB-C laptop with the right cable or adapter. Setup and driver tips.",
    intro: "To connect an old USB printer to a modern laptop, use a USB-B to USB-C cable (or a USB-A to USB-C adapter with the printer's existing cable). Plug it in, install drivers if Windows or macOS doesn't add them automatically, and the printer is ready. Most older printers still have up-to-date drivers available.",
    methods: [
      { name: "USB-B to USB-C", type: "wired", steps: ["Get a USB-B to USB-C cable (the square-ish USB-B end fits the printer).","Connect the printer to the laptop's USB-C port.","Let the OS detect it; install drivers if prompted.","Add it under Printers & scanners if needed."], parts: [{ name: "USB-B to USB-C Printer Cable", searchQuery: "USB-B to USB-C printer cable" }] },
    ],
    tips: ["USB-B is the square connector on most older printers.","Download current drivers from the maker if auto-install fails.","A USB-A to USB-C adapter reuses the printer's original cable."],
    faqs: [
      { q: "What cable connects an old printer to a USB-C laptop?", a: "A USB-B to USB-C cable, or a USB-A to USB-C adapter used with the printer's existing USB-B cable." },
      { q: "My old printer has no driver for my new laptop — what now?", a: "Check the manufacturer's support site; most still offer updated drivers. Windows Update also installs many automatically." },
    ],
  },
  {
    slug: "gopro-to-macbook",
    deviceA: "GoPro", deviceB: "MacBook",
    title: "How to Connect a GoPro to a MacBook (Transfer Footage)",
    metaDescription: "Transfer GoPro footage to a MacBook via USB-C or an SD card reader. Step-by-step import for fast offloading.",
    intro: "To connect a GoPro to a MacBook, either plug it in directly with a USB-C cable or remove the microSD card and use a USB-C card reader. The card reader is usually faster for offloading large 4K/5K files. Footage appears in the Photos app or Finder for import.",
    methods: [
      { name: "USB-C Cable", type: "wired", steps: ["Connect the GoPro to the MacBook with a USB-C cable.","Power on the GoPro; it mounts as a drive/camera.","Import via Photos or drag files from Finder."], parts: [{ name: "USB-C to USB-C Cable", searchQuery: "USB-C cable GoPro" }] },
      { name: "SD Card Reader", type: "wired", steps: ["Remove the microSD card from the GoPro.","Insert it into a USB-C microSD card reader.","Plug the reader into the MacBook and copy files in Finder."], parts: [{ name: "USB-C SD Card Reader", searchQuery: "SD card reader USB-C microSD" }] },
    ],
    tips: ["A card reader offloads big 4K/5K files faster than the camera.","Use a UHS-II reader to match fast GoPro cards.","Copy files before editing to avoid working off the card."],
    faqs: [
      { q: "What's the fastest way to transfer GoPro footage to a Mac?", a: "A USB-C microSD card reader (ideally UHS-II) is typically faster than connecting the camera by cable." },
      { q: "Why won't my Mac see my GoPro over USB?", a: "Make sure the GoPro is powered on and use a data-capable USB-C cable. Otherwise pull the card and use a reader." },
    ],
  },
  {
    slug: "dslr-to-pc-streaming",
    deviceA: "DSLR Camera", deviceB: "PC",
    title: "How to Use a DSLR as a Webcam for Live Streaming",
    metaDescription: "Turn your DSLR into a high-quality webcam for streaming with an HDMI capture card. Step-by-step setup.",
    intro: "To use a DSLR as a webcam for streaming, connect the camera's HDMI output to a USB HDMI capture card, then plug the card into your PC. The camera appears as a video source in OBS, Zoom, or any app. This gives far better image quality than a built-in webcam.",
    methods: [
      { name: "HDMI Capture Card", type: "wired", steps: ["Connect a micro/mini HDMI cable from the DSLR to the capture card.","Plug the capture card into a USB port on the PC.","Set the camera to clean HDMI output (no overlays).","Select the capture card as the camera in OBS/Zoom."], parts: [{ name: "HDMI Capture Card", searchQuery: "HDMI capture card USB streaming" }] },
    ],
    tips: ["Enable 'clean HDMI output' so menus don't show on stream.","Use a dummy battery to power the camera for long sessions.","A USB 3.0 capture card supports 1080p60 smoothly."],
    faqs: [
      { q: "Can I use my DSLR as a webcam?", a: "Yes. Connect its HDMI output to a USB HDMI capture card; the PC then sees it as a webcam in any app." },
      { q: "Why does my camera turn off during streaming?", a: "Cameras auto-power-off on battery. Use a DC dummy battery adapter for continuous power." },
    ],
  },
  {
    slug: "webcam-to-pc",
    deviceA: "Webcam", deviceB: "PC",
    title: "How to Connect a Webcam to a PC or Monitor",
    metaDescription: "Connect a USB webcam to your PC and set it as the default camera. Quick setup for video calls and streaming.",
    intro: "To connect a webcam to a PC, plug its USB cable into a free USB port — most webcams are plug-and-play. Windows installs it automatically. Then select it as the camera in your video app's settings. Mount it on top of your monitor for the best eye-line.",
    methods: [
      { name: "USB Connection", type: "wired", steps: ["Plug the webcam into a USB port (USB 3.0 preferred for 1080p+).","Wait for Windows to install it automatically.","Open Settings → Bluetooth & devices → Cameras to confirm it.","Select the webcam in your video app (Zoom, Teams) settings."], parts: [{ name: "USB Webcam 1080p", searchQuery: "USB webcam 1080p" }] },
    ],
    tips: ["Use a USB 3.0 port for 1080p/4K webcams to avoid bandwidth limits.","Clip it to the top of your monitor for a natural eye-line.","Pick the webcam explicitly in each app's video settings."],
    faqs: [
      { q: "Why isn't my webcam working on my PC?", a: "Check it's selected in the app's settings and allowed under Windows camera privacy settings. Try another USB port." },
      { q: "Do USB webcams need drivers?", a: "Most are plug-and-play on Windows. Some advanced models offer optional software for extra features." },
    ],
  },
  {
    slug: "dslr-to-external-monitor",
    deviceA: "DSLR Camera", deviceB: "External Monitor",
    title: "How to Connect a DSLR to an External Monitor",
    metaDescription: "Connect a DSLR to an external monitor for a larger live view. Micro HDMI setup for video and photography.",
    intro: "To connect a DSLR to an external monitor, run a micro HDMI to HDMI cable from the camera to the monitor. The camera's live view appears on the larger screen — useful for video work, focus checking, and studio shoots. Most DSLRs use a micro or mini HDMI output, so match the cable to your camera.",
    methods: [
      { name: "Micro HDMI to HDMI", type: "wired", steps: ["Identify your camera's HDMI port size (micro or mini).","Connect a micro/mini HDMI to HDMI cable to the monitor.","Set the monitor to that HDMI input.","Enable HDMI output / live view on the camera."], parts: [{ name: "Micro HDMI to HDMI Cable", searchQuery: "micro HDMI to HDMI cable camera" }] },
    ],
    tips: ["Match the cable to your camera's exact HDMI port size.","Enable 'clean output' to hide camera overlays if needed.","A dedicated field monitor adds focus peaking and exposure tools."],
    faqs: [
      { q: "What cable connects a DSLR to a monitor?", a: "Usually a micro HDMI to HDMI cable, though some cameras use mini HDMI. Match it to your camera's port." },
      { q: "Can I see live view on an external monitor?", a: "Yes. Connect via HDMI and enable the camera's HDMI output/live view to mirror it on the monitor." },
    ],
  },
  {
    slug: "echo-dot-to-speaker",
    deviceA: "Echo Dot", deviceB: "Speaker",
    title: "How to Connect an Echo Dot to a Speaker (Aux & Bluetooth)",
    metaDescription: "Connect an Amazon Echo Dot to an external speaker via 3.5mm aux or Bluetooth for bigger sound. Setup steps.",
    intro: "To connect an Echo Dot to a speaker, use a 3.5mm aux cable from the Dot's output to the speaker (on models with a jack), or pair over Bluetooth. The aux connection is plug-and-play and lag-free; Bluetooth is wireless and works with most powered speakers.",
    methods: [
      { name: "3.5mm Aux Cable", type: "wired", steps: ["Connect a 3.5mm cable from the Echo Dot's audio out to the speaker's input.","Set the speaker to the AUX/line input.","Audio now plays through the external speaker."], parts: [{ name: "3.5mm Aux Cable", searchQuery: "3.5mm aux cable" }] },
      { name: "Bluetooth", type: "wireless", steps: ["Put the speaker in Bluetooth pairing mode.","In the Alexa app, go to Settings → your Echo → Bluetooth Devices → Pair.","Select the speaker to connect."], parts: [] },
    ],
    tips: ["Not all Echo models have a 3.5mm jack — check yours.","Aux avoids any Bluetooth lag.","Use the Alexa app to manage and reconnect Bluetooth speakers."],
    faqs: [
      { q: "Does the Echo Dot have an aux output?", a: "Most full-size Echo Dot models include a 3.5mm output, but check your specific generation." },
      { q: "How do I pair a Bluetooth speaker to my Echo Dot?", a: "In the Alexa app, open your Echo's settings → Bluetooth Devices → Pair, with the speaker in pairing mode." },
    ],
  },
  {
    slug: "phone-to-smart-tv-no-cast",
    deviceA: "Phone", deviceB: "Smart TV",
    title: "How to Connect a Phone to a TV Without Casting (Wireless Dongle)",
    metaDescription: "Mirror a phone to a TV that lacks casting using a wireless display dongle. Step-by-step Miracast/AirPlay setup.",
    intro: "To connect a phone to a TV without built-in casting, use a wireless display dongle that supports Miracast (Android) or AirPlay (iPhone). Plug the dongle into the TV's HDMI port, connect it to your phone, and mirror your screen. This adds casting to any TV with an HDMI input.",
    methods: [
      { name: "Wireless Display Dongle", type: "wireless", steps: ["Plug the dongle into the TV's HDMI port and power it via USB.","Select that HDMI input on the TV.","Connect the dongle to your Wi-Fi via its setup screen.","Mirror from your phone (Smart View on Android, Screen Mirroring on iPhone with AirPlay dongles)."], parts: [{ name: "Wireless Display Dongle", searchQuery: "wireless display dongle Miracast AirPlay" }] },
    ],
    tips: ["Match the dongle to your phone — Miracast for Android, AirPlay for iPhone.","Some dongles support both ecosystems.","A wired HDMI adapter is more reliable if mirroring stutters."],
    faqs: [
      { q: "How do I mirror my phone to a TV without Chromecast?", a: "Use a Miracast (Android) or AirPlay (iPhone) wireless display dongle plugged into the TV's HDMI port." },
      { q: "Does a wireless dongle work with both iPhone and Android?", a: "Some do, but many are ecosystem-specific. Check that it supports AirPlay for iPhone or Miracast for Android." },
    ],
  },
  {
    slug: "usb-c-laptop-to-usb-a-devices",
    deviceA: "USB-C Laptop", deviceB: "USB-A Devices",
    title: "How to Connect USB-A Devices to a USB-C Laptop (Hub)",
    metaDescription: "Use USB-A accessories on a USB-C-only laptop with a hub or adapter. Setup and what to look for in a hub.",
    intro: "To connect USB-A devices to a USB-C laptop, use a USB-C hub or a USB-C to USB-A adapter. Modern thin laptops often have only USB-C ports, so a hub restores USB-A ports for flash drives, mice, and peripherals — and often adds HDMI, SD, and charging too.",
    methods: [
      { name: "USB-C Hub", type: "wired", steps: ["Choose a USB-C hub with the ports you need (USB-A, HDMI, SD).","Plug the hub into the laptop's USB-C port.","Connect your USB-A devices to the hub.","They work immediately — no drivers needed for standard devices."], parts: [{ name: "USB-C Multiport Hub", searchQuery: "USB-C hub multiport USB-A HDMI" }] },
    ],
    tips: ["Pick a hub with Power Delivery if you want to charge while connected.","Powered hubs handle multiple high-draw devices better.","A simple USB-C to USB-A adapter works for a single device."],
    faqs: [
      { q: "How do I use a USB stick on a laptop with only USB-C?", a: "Use a USB-C to USB-A adapter or a USB-C hub with USB-A ports. The drive then works normally." },
      { q: "Will a USB-C hub charge my laptop too?", a: "Only if it supports USB Power Delivery (PD) pass-through. Check the hub's specs for PD wattage." },
    ],
  },
  {
    slug: "thunderbolt-mac-to-dual-4k",
    deviceA: "Thunderbolt Mac", deviceB: "Dual 4K Monitors",
    title: "How to Connect Dual 4K Monitors to a Thunderbolt Mac",
    metaDescription: "Run two 4K monitors from a Thunderbolt Mac with a dock. Setup steps and how to get 60Hz on both.",
    intro: "To connect dual 4K monitors to a Thunderbolt Mac, use a Thunderbolt 4 dock that supports two 4K displays at 60Hz. Connect the dock to the Mac's Thunderbolt port, attach both monitors to the dock, and arrange them in System Settings. Thunderbolt's bandwidth handles two 4K 60Hz streams cleanly.",
    methods: [
      { name: "Thunderbolt Dock", type: "wired", steps: ["Get a Thunderbolt 4 dock rated for dual 4K 60Hz.","Connect the dock to the Mac's Thunderbolt/USB-C port.","Attach both monitors to the dock (HDMI or DisplayPort).","Arrange and set each to 4K 60Hz in System Settings → Displays."], parts: [{ name: "Thunderbolt 4 Dock", searchQuery: "Thunderbolt 4 dock dual monitor 4K" }] },
    ],
    tips: ["Confirm the Mac model supports two external displays (M1 Pro/Max and up).","Thunderbolt docks also charge the Mac over one cable.","Base M1/M2 chips need DisplayLink for true dual external displays."],
    faqs: [
      { q: "Can a Mac run two 4K monitors at 60Hz?", a: "Yes, with a Thunderbolt 4 dock and a Mac that supports multiple external displays (M1 Pro/Max and newer)." },
      { q: "Why does my base M1 MacBook only support one monitor?", a: "Base M1/M2 chips have a one-display limit; a DisplayLink dock is required to drive a second monitor." },
    ],
  },
  {
    slug: "hdmi-source-to-multiple-tvs",
    deviceA: "HDMI Device", deviceB: "Multiple TVs",
    title: "How to Connect One HDMI Device to Multiple TVs (Splitter)",
    metaDescription: "Send one HDMI source to two or more TVs with an HDMI splitter. Setup steps for displaying the same content everywhere.",
    intro: "To connect one HDMI device to multiple TVs, use an HDMI splitter, which duplicates a single source to two or more displays showing identical content. Connect your source to the splitter input and each TV to a splitter output. For long runs, choose a powered splitter that supports your resolution.",
    methods: [
      { name: "HDMI Splitter", type: "wired", steps: ["Connect your HDMI source to the splitter's input.","Run HDMI cables from each splitter output to a TV.","Power the splitter (most need external power).","Set each TV to its matching HDMI input."], parts: [{ name: "HDMI Splitter 1x2", searchQuery: "HDMI splitter 1 in 2 out 4K" }] },
    ],
    tips: ["A splitter shows the SAME content on every TV — not different sources.","Use a 4K-rated powered splitter to keep full resolution.","For long cable runs, HDMI over Ethernet extenders help."],
    faqs: [
      { q: "Splitter vs switch — what's the difference?", a: "A splitter sends one source to many TVs (same content). A switch lets many sources share one TV." },
      { q: "Will an HDMI splitter reduce my picture quality?", a: "A quality powered splitter rated for your resolution (e.g. 4K) maintains full quality across outputs." },
    ],
  },
  {
    slug: "two-hdmi-sources-to-one-tv",
    deviceA: "2 HDMI Sources", deviceB: "1 TV",
    title: "How to Connect Two HDMI Sources to One TV (Switch)",
    metaDescription: "Add more HDMI inputs to your TV with an HDMI switch. Connect multiple devices to a single port and switch between them.",
    intro: "To connect two HDMI sources to one TV, use an HDMI switch, which lets multiple devices share a single HDMI input. Connect each source to a switch input and the switch output to the TV. Switch between devices with a button or remote — handy when you've run out of TV HDMI ports.",
    methods: [
      { name: "HDMI Switch", type: "wired", steps: ["Connect each HDMI source to a switch input.","Run HDMI from the switch output to the TV.","Power the switch if required (some are passive).","Select the active source via the switch button or remote."], parts: [{ name: "HDMI Switch 2x1", searchQuery: "HDMI switch 2 port 4K" }] },
    ],
    tips: ["A switch adds inputs; a splitter adds outputs — don't mix them up.","Auto-switching models jump to whichever device powers on.","Pick a 4K 60Hz switch to preserve quality."],
    faqs: [
      { q: "How do I add more HDMI ports to my TV?", a: "Use an HDMI switch — it connects several sources to one TV port and lets you toggle between them." },
      { q: "Do HDMI switches need power?", a: "Some are passive; others need USB or wall power, especially auto-switching and 4K models." },
    ],
  },
];

export function amazonLink(query) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
