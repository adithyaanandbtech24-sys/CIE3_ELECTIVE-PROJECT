const STORAGE_KEY = "shelf_demo_state_v1";

const TEAM_MEMBERS = [
  "Adithya Anand",
  "Riya Sharma",
  "Karan Mehta",
  "Neha Patel",
  "Arjun Nair",
  "Unassigned",
];

const LOCATIONS_TREE = [
  {
    id: "loc-hq",
    name: "HQ · Block A (Media & Compute)",
    code: "HQ-A",
    children: [
      { id: "loc-vault", name: "Media Vault · Rack B2", floor: "Floor 2" },
      { id: "loc-studio", name: "Podcast & Broadcast Studio", floor: "Floor 2" },
      { id: "loc-it", name: "IT Provisioning Cage", floor: "Floor 1" },
    ],
  },
  {
    id: "loc-lab",
    name: "CIE3 Hardware & Robotics Lab",
    code: "LAB-C3",
    children: [
      { id: "loc-bench4", name: "Embedded Workbench 04", floor: "Ground" },
      { id: "loc-sensor", name: "Drone & Sensor Locker", floor: "Ground" },
    ],
  },
];

function flatLocations() {
  return LOCATIONS_TREE.flatMap((g) => g.children.map((c) => c.name));
}

const DEFAULT_STATE = {
  assets: [
    {
      id: "SHF-101",
      name: "Sony FX3 Cinema Camera",
      category: "Cameras",
      status: "Checked Out",
      custodian: "Riya Sharma",
      location: "Media Vault · Rack B2",
      serial: "SN-FX3-88412",
      value: 3899,
      warranty: "2027-08-15",
      icon: "🎥",
      tags: ["4K", "Cinema", "Production"],
      notes: ["Calibrated sensor & updated firmware v5.0"],
    },
    {
      id: "SHF-102",
      name: "MacBook Pro 16\" M4 Max",
      category: "Laptops",
      status: "Available",
      custodian: "Unassigned",
      location: "IT Provisioning Cage",
      serial: "C02ZM91QMD6R",
      value: 3499,
      warranty: "2028-01-20",
      icon: "💻",
      tags: ["64GB RAM", "Engineering"],
      notes: ["Fresh macOS image enrolled in MDM"],
    },
    {
      id: "SHF-103",
      name: "DJI Mavic 3 Pro Cine",
      category: "Drones",
      status: "Checked Out",
      custodian: "Karan Mehta",
      location: "Drone & Sensor Locker",
      serial: "DJI-M3P-4410",
      value: 4799,
      warranty: "2027-05-01",
      icon: "🚁",
      tags: ["Aerial", "ND Filters"],
      notes: ["Checked 3x Intelligent Flight Batteries before dispatch"],
    },
    {
      id: "SHF-104",
      name: "Saleae Logic Pro 16 Analyzer",
      category: "Lab Gear",
      status: "Available",
      custodian: "Unassigned",
      location: "Embedded Workbench 04",
      serial: "SAL-16P-0094",
      value: 999,
      warranty: "2027-11-30",
      icon: "🔬",
      tags: ["SPI/I2C", "Debugging"],
      notes: ["Includes micro-grabber harness kit"],
    },
    {
      id: "SHF-105",
      name: "Shure SM7B Dynamic Mic",
      category: "Audio",
      status: "Checked Out",
      custodian: "Neha Patel",
      location: "Podcast & Broadcast Studio",
      serial: "SHU-7B-7312",
      value: 399,
      warranty: "2027-03-11",
      icon: "🎙️",
      tags: ["XLR", "Studio"],
      notes: ["Paired with Cloudlifter CL-1"],
    },
    {
      id: "SHF-106",
      name: "Aputure 600d Pro LED Light",
      category: "Lighting",
      status: "In Maintenance",
      custodian: "Arjun Nair",
      location: "Media Vault · Rack B2",
      serial: "APU-600D-218",
      value: 1890,
      warranty: "2026-12-10",
      icon: "💡",
      tags: ["Bowens", "Key Light"],
      notes: ["DMX control box fan replacement scheduled"],
    },
    {
      id: "SHF-107",
      name: "Rigol DS1054Z Oscilloscope",
      category: "Lab Gear",
      status: "Available",
      custodian: "Unassigned",
      location: "Embedded Workbench 04",
      serial: "RIG-1054-992",
      value: 379,
      warranty: "2027-09-22",
      icon: "📈",
      tags: ["4-Ch", "50MHz"],
      notes: ["4x 100MHz probes verified"],
    },
    {
      id: "SHF-108",
      name: "NVIDIA Jetson AGX Orin DevKit",
      category: "Compute",
      status: "Checked Out",
      custodian: "Adithya Anand",
      location: "Embedded Workbench 04",
      serial: "NV-ORIN-64G-19",
      value: 1999,
      warranty: "2028-02-14",
      icon: "🧠",
      tags: ["Edge AI", "CUDA"],
      notes: ["Running JetPack 6.1 for CIE3 vision pipeline"],
    },
    {
      id: "SHF-109",
      name: "Sennheiser MKH 416 Shotgun",
      category: "Audio",
      status: "Available",
      custodian: "Unassigned",
      location: "Media Vault · Rack B2",
      serial: "SEN-416-5501",
      value: 999,
      warranty: "2027-07-04",
      icon: "🎧",
      tags: ["Boom", "Field"],
      notes: ["Stored with Rycote blimp windscreen"],
    },
    {
      id: "SHF-110",
      name: "Canon RF 24-70mm f/2.8L",
      category: "Cameras",
      status: "Available",
      custodian: "Unassigned",
      location: "Media Vault · Rack B2",
      serial: "CAN-RF2470-31",
      value: 2399,
      warranty: "2027-10-18",
      icon: "📷",
      tags: ["Optics", "L-Series"],
      notes: ["UV filter mounted, zero dust"],
    },
    {
      id: "SHF-111",
      name: "Rodecaster Pro II Console",
      category: "Audio",
      status: "Available",
      custodian: "Unassigned",
      location: "Podcast & Broadcast Studio",
      serial: "ROD-RCP2-774",
      value: 699,
      warranty: "2027-04-28",
      icon: "🎚️",
      tags: ["Mixer", "USB-C"],
      notes: ["4x XLR channels configured"],
    },
    {
      id: "SHF-112",
      name: "Fluke 87V Industrial Multimeter",
      category: "Lab Gear",
      status: "Available",
      custodian: "Unassigned",
      location: "Embedded Workbench 04",
      serial: "FLK-87V-6102",
      value: 445,
      warranty: "2029-01-05",
      icon: "⚡",
      tags: ["True-RMS", "Safety"],
      notes: ["Fuses tested Nov 2026"],
    },
    {
      id: "SHF-113",
      name: "ThinkPad X1 Carbon Gen 12",
      category: "Laptops",
      status: "Checked Out",
      custodian: "Riya Sharma",
      location: "IT Provisioning Cage",
      serial: "PF4K920L",
      value: 1849,
      warranty: "2028-06-01",
      icon: "💻",
      tags: ["Ubuntu", "Field"],
      notes: ["Dual-boot Ubuntu 24.04 LTS"],
    },
    {
      id: "SHF-114",
      name: "ATEM Mini Extreme ISO",
      category: "Cameras",
      status: "Available",
      custodian: "Unassigned",
      location: "Podcast & Broadcast Studio",
      serial: "BMD-ATEM-884",
      value: 1295,
      warranty: "2027-05-19",
      icon: "🎛️",
      tags: ["Switcher", "Livestream"],
      notes: ["8 HDMI inputs + SSD ISO recording"],
    },
  ],
  kits: [
    {
      id: "KIT-01",
      name: "Field Documentary Production Kit",
      description: "Complete 4K cinema camera, boom audio & key lighting bundle.",
      assetIds: ["SHF-101", "SHF-109", "SHF-110"],
      location: "Media Vault · Rack B2",
    },
    {
      id: "KIT-02",
      name: "Podcast & Demo Day Studio Rig",
      description: "Turnkey broadcast mixer, XLR mic and multi-cam switcher.",
      assetIds: ["SHF-105", "SHF-111", "SHF-114"],
      location: "Podcast & Broadcast Studio",
    },
    {
      id: "KIT-03",
      name: "Embedded Diagnostics Bench Kit",
      description: "Logic analyzer, 4-channel scope and True-RMS multimeter.",
      assetIds: ["SHF-104", "SHF-107", "SHF-112"],
      location: "Embedded Workbench 04",
    },
    {
      id: "KIT-04",
      name: "Edge Vision & Aerial Survey Kit",
      description: "Jetson AGX Orin edge compute paired with Mavic 3 Pro Cine.",
      assetIds: ["SHF-103", "SHF-108"],
      location: "Drone & Sensor Locker",
    },
  ],
  bookings: [
    {
      id: "BKG-401",
      title: "CIE3 Capstone Demo Shoot",
      assetId: "SHF-101",
      borrower: "Riya Sharma",
      startDay: 0,
      spanDays: 3,
      dateRange: "Nov 15 – Nov 18",
      status: "Active",
      color: "",
    },
    {
      id: "BKG-402",
      title: "Campus Aerial Mapping Flight",
      assetId: "SHF-103",
      borrower: "Karan Mehta",
      startDay: 1,
      spanDays: 2,
      dateRange: "Nov 16 – Nov 18",
      status: "Active",
      color: "blue",
    },
    {
      id: "BKG-403",
      title: "Alumni Tech Podcast Ep. 12",
      assetId: "SHF-105",
      borrower: "Neha Patel",
      startDay: 2,
      spanDays: 2,
      dateRange: "Nov 17 – Nov 19",
      status: "Confirmed",
      color: "green",
    },
    {
      id: "BKG-404",
      title: "SPI Bus Timing Validation",
      assetId: "SHF-104",
      borrower: "Adithya Anand",
      startDay: 3,
      spanDays: 3,
      dateRange: "Nov 18 – Nov 21",
      status: "Confirmed",
      color: "",
    },
    {
      id: "BKG-405",
      title: "Livestream Workshop Setup",
      assetId: "SHF-114",
      borrower: "Arjun Nair",
      startDay: 4,
      spanDays: 2,
      dateRange: "Nov 19 – Nov 21",
      status: "Confirmed",
      color: "blue",
    },
  ],
  activity: [
    { id: 1, text: "Adithya Anand checked out SHF-108 (NVIDIA Jetson AGX Orin)", time: "12 mins ago" },
    { id: 2, text: "Riya Sharma started booking BKG-401 for Sony FX3 Cinema Camera", time: "1 hour ago" },
    { id: 3, text: "Arjun Nair flagged SHF-106 (Aputure 600d Pro) for Maintenance", time: "3 hours ago" },
    { id: 4, text: "Karan Mehta scanned QR tag SHF-103 at Drone & Sensor Locker", time: "Yesterday, 18:40" },
    { id: 5, text: "Monthly Lab Audit #14 completed — 13/14 assets verified", time: "Nov 13, 2026" },
  ],
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return structuredClone(DEFAULT_STATE);
}

let state = loadState();
let currentView = "home";
let filters = { search: "", status: "ALL", category: "ALL", location: "ALL", viewMode: "table" };
let lastScannedId = "SHF-104";

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) {}
  updateNavCounts();
}

function updateNavCounts() {
  const ac = document.getElementById("navAssetsCount");
  const kc = document.getElementById("navKitsCount");
  const bc = document.getElementById("navBookingsCount");
  if (ac) ac.textContent = state.assets.length;
  if (kc) kc.textContent = state.kits.length;
  if (bc) bc.textContent = state.bookings.length;
}

function logActivity(text) {
  state.activity.unshift({ id: Date.now(), text, time: "Just now" });
  if (state.activity.length > 20) state.activity.pop();
}

function showToast(msg) {
  const stack = document.getElementById("toastStack");
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<span class="toast-dot"></span><span>${escapeHtml(msg)}</span>`;
  stack.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function statusBadge(status) {
  const cls =
    status === "Available"
      ? "badge-available"
      : status === "Checked Out"
      ? "badge-checkedout"
      : status === "In Maintenance"
      ? "badge-maintenance"
      : "badge-neutral";
  return `<span class="badge ${cls}"><span class="badge-dot"></span>${escapeHtml(status)}</span>`;
}

function initials(name) {
  if (!name || name === "Unassigned") return "—";
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* Deterministic QR SVG Matrix */
function generateQrSvg(code, size = 104) {
  const grid = 21;
  let hash = 2166136261;
  for (let i = 0; i < code.length; i++) {
    hash ^= code.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const isFinder = (r, c) =>
    (r < 7 && c < 7) || (r < 7 && c >= grid - 7) || (r >= grid - 7 && c < 7);

  const finderOn = (r, c, r0, c0) => {
    const dr = r - r0;
    const dc = c - c0;
    if (dr === 0 || dr === 6 || dc === 0 || dc === 6) return true;
    if (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4) return true;
    return false;
  };

  let rects = "";
  const cell = size / grid;
  for (let r = 0; r < grid; r++) {
    for (let c = 0; c < grid; c++) {
      let on = false;
      if (r < 7 && c < 7) on = finderOn(r, c, 0, 0);
      else if (r < 7 && c >= grid - 7) on = finderOn(r, c, 0, grid - 7);
      else if (r >= grid - 7 && c < 7) on = finderOn(r, c, grid - 7, 0);
      else if (!isFinder(r, c)) {
        const bit = ((hash >>> ((r * 5 + c * 3) % 24)) ^ (r * 7 + c * 11)) & 1;
        on = bit === 1;
      }
      if (on) {
        rects += `<rect x="${(c * cell).toFixed(2)}" y="${(r * cell).toFixed(2)}" width="${cell.toFixed(2)}" height="${cell.toFixed(2)}" fill="#101828"/>`;
      }
    }
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`;
}

function navigate(view) {
  currentView = view;
  document.querySelectorAll(".nav-item[data-view]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
  const titles = {
    home: "Home",
    assets: "Assets",
    kits: "Kits",
    locations: "Locations",
    bookings: "Bookings & Calendar",
    reports: "Reports & Audits",
    scanner: "QR Scanner",
  };
  document.getElementById("crumbCurrent").textContent = titles[view] || "Home";
  renderView();
}

function renderView() {
  const root = document.getElementById("pageContent");
  if (currentView === "home") root.innerHTML = renderHome();
  else if (currentView === "assets") root.innerHTML = renderAssets();
  else if (currentView === "kits") root.innerHTML = renderKits();
  else if (currentView === "locations") root.innerHTML = renderLocations();
  else if (currentView === "bookings") root.innerHTML = renderBookings();
  else if (currentView === "reports") root.innerHTML = renderReports();
  else if (currentView === "scanner") root.innerHTML = renderScanner();
}

function renderHome() {
  const total = state.assets.length;
  const available = state.assets.filter((a) => a.status === "Available").length;
  const checkedOut = state.assets.filter((a) => a.status === "Checked Out").length;
  const maintenance = state.assets.filter((a) => a.status === "In Maintenance").length;
  const totalValue = state.assets.reduce((acc, a) => acc + Number(a.value || 0), 0);

  const cats = {};
  state.assets.forEach((a) => {
    cats[a.category] = (cats[a.category] || 0) + 1;
  });
  const catRows = Object.entries(cats)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => {
      const pct = Math.round((count / total) * 100);
      return `
        <div class="bar-row">
          <div class="bar-label">${escapeHtml(name)}</div>
          <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
          <div class="bar-val">${count} (${pct}%)</div>
        </div>
      `;
    })
    .join("");

  const feedHtml = state.activity
    .slice(0, 5)
    .map(
      (item) => `
      <div class="feed-item">
        <div class="feed-dot"></div>
        <div>
          <div class="feed-text">${escapeHtml(item.text)}</div>
          <div class="feed-time">${escapeHtml(item.time)}</div>
        </div>
      </div>
    `
    )
    .join("");

  const recentAssets = state.assets
    .slice(0, 5)
    .map(
      (a) => `
      <tr class="clickable-row" onclick="openAssetDrawer('${a.id}')">
        <td>
          <div class="asset-cell">
            <div class="asset-thumb">${a.icon}</div>
            <div>
              <div class="asset-title">${escapeHtml(a.name)}</div>
              <div class="asset-sub mono">${escapeHtml(a.id)} · ${escapeHtml(a.serial)}</div>
            </div>
          </div>
        </td>
        <td>${statusBadge(a.status)}</td>
        <td>
          <div class="custody-pill">
            <span class="avatar-xs">${initials(a.custodian)}</span>
            <span>${escapeHtml(a.custodian)}</span>
          </div>
        </td>
        <td>${escapeHtml(a.location)}</td>
        <td style="text-align:right;font-weight:600">$${Number(a.value).toLocaleString()}</td>
      </tr>
    `
    )
    .join("");

  return `
    <div class="page-header">
      <div>
        <h1 class="page-title">Workspace Overview</h1>
        <p class="page-subtitle">Real-time asset custody, QR tag utilization, and active lab reservations.</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-secondary" onclick="navigate('scanner')">Open QR Scanner</button>
        <button class="btn btn-primary" onclick="navigate('assets')">Browse All ${total} Assets</button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-top"><span>Total Tracked Assets</span><div class="kpi-icon orange">📦</div></div>
        <div class="kpi-value">${total}</div>
        <div class="kpi-foot"><span class="trend-up">$${totalValue.toLocaleString()}</span> total insured value</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-top"><span>Ready &amp; Available</span><div class="kpi-icon">✅</div></div>
        <div class="kpi-value">${available}</div>
        <div class="kpi-foot"><span class="trend-up">${Math.round((available / total) * 100)}%</span> shelf readiness</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-top"><span>Checked Out (Custody)</span><div class="kpi-icon">👤</div></div>
        <div class="kpi-value">${checkedOut}</div>
        <div class="kpi-foot"><span>${state.bookings.length} active</span> scheduled bookings</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-top"><span>Maintenance Alerts</span><div class="kpi-icon">🛠️</div></div>
        <div class="kpi-value">${maintenance}</div>
        <div class="kpi-foot"><span class="trend-warn">1 due</span> calibration this week</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Inventory Distribution by Category</h3>
          <span class="badge badge-orange">Live Sync</span>
        </div>
        <div class="card-body">${catRows}</div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Recent Custody &amp; Audit Trail</h3>
          <button class="btn btn-ghost btn-sm" onclick="navigate('reports')">View Audits →</button>
        </div>
        <div class="card-body" style="padding-top:8px;padding-bottom:8px;">
          <div class="feed-list">${feedHtml}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Priority &amp; Checked-Out Equipment</h3>
        <button class="btn btn-secondary btn-sm" onclick="navigate('assets')">Manage Inventory</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Asset / QR Tag</th>
              <th>Status</th>
              <th>Custodian</th>
              <th>Location</th>
              <th style="text-align:right">Value</th>
            </tr>
          </thead>
          <tbody>${recentAssets}</tbody>
        </table>
      </div>
    </div>
  `;
}

function getFilteredAssets() {
  const q = filters.search.trim().toLowerCase();
  return state.assets.filter((a) => {
    if (filters.status !== "ALL" && a.status !== filters.status) return false;
    if (filters.category !== "ALL" && a.category !== filters.category) return false;
    if (filters.location !== "ALL" && a.location !== filters.location) return false;
    if (q) {
      const hay = `${a.id} ${a.name} ${a.category} ${a.custodian} ${a.location} ${a.serial} ${a.tags.join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderAssets() {
  const list = getFilteredAssets();
  const categories = [...new Set(state.assets.map((a) => a.category))];
  const locations = [...new Set(state.assets.map((a) => a.location))];

  const tableHtml = list
    .map(
      (a) => `
      <tr class="clickable-row" onclick="openAssetDrawer('${a.id}')">
        <td>
          <div class="asset-cell">
            <div class="asset-thumb">${a.icon}</div>
            <div>
              <div class="asset-title">${escapeHtml(a.name)}</div>
              <div class="asset-sub mono">${escapeHtml(a.id)} · SN: ${escapeHtml(a.serial)}</div>
            </div>
          </div>
        </td>
        <td><span class="badge badge-neutral">${escapeHtml(a.category)}</span></td>
        <td>${statusBadge(a.status)}</td>
        <td>
          <div class="custody-pill">
            <span class="avatar-xs">${initials(a.custodian)}</span>
            <span>${escapeHtml(a.custodian)}</span>
          </div>
        </td>
        <td>${escapeHtml(a.location)}</td>
        <td style="text-align:right">
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); openAssetDrawer('${a.id}')">QR &amp; Actions</button>
        </td>
      </tr>
    `
    )
    .join("");

  const cardsHtml = list
    .map(
      (a) => `
      <div class="asset-card" onclick="openAssetDrawer('${a.id}')">
        <div class="asset-card-head">
          <div class="asset-cell">
            <div class="asset-thumb">${a.icon}</div>
            <div>
              <div class="asset-title">${escapeHtml(a.name)}</div>
              <div class="asset-sub mono">${escapeHtml(a.id)}</div>
            </div>
          </div>
          ${statusBadge(a.status)}
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12.5px;color:var(--gray-500);">
          <span>📍 ${escapeHtml(a.location)}</span>
          <strong style="color:var(--gray-900)">$${Number(a.value).toLocaleString()}</strong>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding-top:8px;border-top:1px solid var(--gray-100);">
          <div class="custody-pill">
            <span class="avatar-xs">${initials(a.custodian)}</span>
            <span style="font-size:12.5px">${escapeHtml(a.custodian)}</span>
          </div>
          <span class="badge badge-neutral">${escapeHtml(a.category)}</span>
        </div>
      </div>
    `
    )
    .join("");

  return `
    <div class="page-header">
      <div>
        <h1 class="page-title">Assets Inventory</h1>
        <p class="page-subtitle">Click any asset to inspect its QR tag, assign custody, update location, or view audit notes.</p>
      </div>
      <button class="btn btn-primary" onclick="openNewAssetModal()">+ Add Asset</button>
    </div>

    <div class="card">
      <div class="toolbar">
        <div class="toolbar-left">
          <div class="search-box">
            <svg class="icon-sm muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input type="text" placeholder="Search name, QR ID, serial, custodian..." value="${escapeHtml(filters.search)}" oninput="filters.search=this.value; renderView()" />
          </div>
          <select class="select-ctrl" onchange="filters.status=this.value; renderView()">
            <option value="ALL">All Statuses</option>
            <option value="Available" ${filters.status === "Available" ? "selected" : ""}>Available</option>
            <option value="Checked Out" ${filters.status === "Checked Out" ? "selected" : ""}>Checked Out</option>
            <option value="In Maintenance" ${filters.status === "In Maintenance" ? "selected" : ""}>In Maintenance</option>
          </select>
          <select class="select-ctrl" onchange="filters.category=this.value; renderView()">
            <option value="ALL">All Categories</option>
            ${categories.map((c) => `<option value="${escapeHtml(c)}" ${filters.category === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
          </select>
          <select class="select-ctrl" onchange="filters.location=this.value; renderView()">
            <option value="ALL">All Locations</option>
            ${locations.map((l) => `<option value="${escapeHtml(l)}" ${filters.location === l ? "selected" : ""}>${escapeHtml(l)}</option>`).join("")}
          </select>
        </div>

        <div class="view-toggle">
          <button class="${filters.viewMode === "table" ? "active" : ""}" onclick="filters.viewMode='table'; renderView()">Table</button>
          <button class="${filters.viewMode === "grid" ? "active" : ""}" onclick="filters.viewMode='grid'; renderView()">Cards</button>
        </div>
      </div>

      ${
        list.length === 0
          ? `<div class="card-body" style="text-align:center;padding:42px;color:var(--gray-500)">No assets match your active filters. <button class="btn btn-secondary btn-sm" onclick="filters={search:'',status:'ALL',category:'ALL',location:'ALL',viewMode:filters.viewMode}; renderView()">Clear Filters</button></div>`
          : filters.viewMode === "table"
          ? `<div class="table-wrap"><table><thead><tr><th>Asset</th><th>Category</th><th>Status</th><th>Custody</th><th>Location</th><th></th></tr></thead><tbody>${tableHtml}</tbody></table></div>`
          : `<div class="asset-cards">${cardsHtml}</div>`
      }
    </div>
  `;
}

function renderKits() {
  const cards = state.kits
    .map((kit) => {
      const items = kit.assetIds.map((id) => state.assets.find((a) => a.id === id)).filter(Boolean);
      const allReady = items.every((i) => i.status === "Available");
      return `
        <div class="card">
          <div class="card-header">
            <div>
              <h3 class="card-title">${escapeHtml(kit.name)}</h3>
              <div class="asset-sub mono">${escapeHtml(kit.id)} · 📍 ${escapeHtml(kit.location)}</div>
            </div>
            <span class="badge ${allReady ? "badge-available" : "badge-checkedout"}">
              <span class="badge-dot"></span>${allReady ? "Kit Ready" : "Partially Out"}
            </span>
          </div>
          <div class="card-body">
            <p style="margin:0 0 14px;color:var(--gray-600);font-size:13px">${escapeHtml(kit.description)}</p>
            <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
              ${items
                .map(
                  (i) => `
                  <div class="loc-child" onclick="openAssetDrawer('${i.id}')">
                    <span>${i.icon} <strong>${escapeHtml(i.name)}</strong> <span class="mono" style="color:var(--gray-400);font-size:11.5px">${i.id}</span></span>
                    ${statusBadge(i.status)}
                  </div>
                `
                )
                .join("")}
            </div>
            <button class="btn btn-primary btn-sm" onclick="checkoutKit('${kit.id}')">Check Out Entire Kit</button>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="page-header">
      <div>
        <h1 class="page-title">Equipment Kits</h1>
        <p class="page-subtitle">Bundle multi-item setups so teams can reserve and check out gear as a single unit.</p>
      </div>
    </div>
    <div class="grid-equal">${cards}</div>
  `;
}

function renderLocations() {
  const blocks = LOCATIONS_TREE.map((group) => {
    const children = group.children
      .map((loc) => {
        const count = state.assets.filter((a) => a.location === loc.name).length;
        return `
          <div class="loc-child" onclick="filters.location='${escapeHtml(loc.name)}'; navigate('assets')">
            <div>
              <div style="font-weight:600;color:var(--gray-900)">📍 ${escapeHtml(loc.name)}</div>
              <div style="font-size:12px;color:var(--gray-500)">${escapeHtml(loc.floor)}</div>
            </div>
            <span class="badge badge-orange">${count} assets →</span>
          </div>
        `;
      })
      .join("");
    return `
      <div class="loc-card">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-weight:700;font-size:15.5px;color:var(--gray-900)">${escapeHtml(group.name)}</div>
            <div class="mono" style="font-size:12px;color:var(--gray-500)">Site Code: ${escapeHtml(group.code)}</div>
          </div>
          <span class="badge badge-neutral">Active Site</span>
        </div>
        <div class="loc-children">${children}</div>
      </div>
    `;
  }).join("");

  return `
    <div class="page-header">
      <div>
        <h1 class="page-title">Locations Hierarchy</h1>
        <p class="page-subtitle">Click any room, rack, or workbench to filter inventory stored at that location.</p>
      </div>
    </div>
    <div class="grid-equal">${blocks}</div>
  `;
}

function renderBookings() {
  const days = ["Sun 15", "Mon 16", "Tue 17", "Wed 18", "Thu 19", "Fri 20", "Sat 21"];
  const tracks = state.bookings
    .map((b) => {
      const asset = state.assets.find((a) => a.id === b.assetId);
      const leftPct = (b.startDay / 7) * 100;
      const widthPct = (Math.min(b.spanDays, 7 - b.startDay) / 7) * 100;
      return `
        <div class="cal-row-label">
          <span>${asset ? asset.icon + " " + escapeHtml(asset.name) : escapeHtml(b.assetId)}</span>
          <span style="font-size:11.5px;color:var(--gray-500);font-weight:500">${escapeHtml(b.borrower)}</span>
        </div>
        <div class="cal-track">
          ${days.map(() => `<div class="cal-cell-bg"></div>`).join("")}
          <div class="cal-booking-bar ${b.color}" style="left:calc(${leftPct}% + 4px);width:calc(${widthPct}% - 8px);" onclick="openAssetDrawer('${b.assetId}')">
            <span>${escapeHtml(b.title)}</span>
            <span style="opacity:0.85;font-size:11px">${escapeHtml(b.dateRange)}</span>
          </div>
        </div>
      `;
    })
    .join("");

  const rows = state.bookings
    .map((b) => {
      const asset = state.assets.find((a) => a.id === b.assetId);
      return `
        <tr>
          <td class="mono" style="font-weight:600">${escapeHtml(b.id)}</td>
          <td><strong>${escapeHtml(b.title)}</strong></td>
          <td>${asset ? `${asset.icon} ${escapeHtml(asset.name)}` : escapeHtml(b.assetId)}</td>
          <td>${escapeHtml(b.borrower)}</td>
          <td>${escapeHtml(b.dateRange)}</td>
          <td><span class="badge ${b.status === "Active" ? "badge-checkedout" : "badge-available"}">${escapeHtml(b.status)}</span></td>
          <td style="text-align:right">
            <button class="btn btn-ghost btn-sm" onclick="completeBooking('${b.id}')">Mark Returned</button>
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <div class="page-header">
      <div>
        <h1 class="page-title">Bookings &amp; Equipment Calendar</h1>
        <p class="page-subtitle">Schedule reservations, prevent double-bookings, and track checkout windows.</p>
      </div>
      <button class="btn btn-primary" onclick="openNewBookingModal()">+ Create Booking</button>
    </div>

    <div class="card" style="margin-bottom:20px;">
      <div class="card-header">
        <h3 class="card-title">Weekly Reservation Timeline (Nov 15 – Nov 21, 2026)</h3>
        <span class="badge badge-orange">Conflict Guard Enabled</span>
      </div>
      <div class="calendar-grid">
        <div class="cal-head left">Equipment / Borrower</div>
        ${days.map((d, i) => `<div class="cal-head ${i === 0 ? "today" : ""}">${d}</div>`).join("")}
        ${tracks}
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3 class="card-title">All Reservations (${state.bookings.length})</h3></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>ID</th><th>Purpose</th><th>Asset</th><th>Borrower</th><th>Dates</th><th>Status</th><th></th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderScanner() {
  const target = state.assets.find((a) => a.id === lastScannedId) || state.assets[0];
  const quickTags = state.assets
    .slice(0, 6)
    .map(
      (a) =>
        `<button class="btn btn-secondary btn-sm" onclick="simulateScan('${a.id}')">${a.icon} Scan ${a.id}</button>`
    )
    .join("");

  return `
    <div class="page-header">
      <div>
        <h1 class="page-title">QR Asset Scanner</h1>
        <p class="page-subtitle">Simulate scanning any Shelf QR label for instant custody check-out, return, or location transfer.</p>
      </div>
    </div>

    <div class="scanner-layout">
      <div class="scanner-viewport">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span class="badge badge-orange">CAMERA SIMULATOR · 60 FPS</span>
          <span class="mono" style="font-size:12px;color:#98a2b3">AUTO-DECODE ON</span>
        </div>

        <div class="scanner-reticle">
          <div class="scanner-corner sc-tl"></div>
          <div class="scanner-corner sc-tr"></div>
          <div class="scanner-corner sc-bl"></div>
          <div class="scanner-corner sc-br"></div>
          <div class="scan-beam"></div>
          <div style="background:#fff;padding:10px;border-radius:10px;">
            ${generateQrSvg(target.id, 112)}
          </div>
        </div>

        <div>
          <div style="font-size:12px;color:#98a2b3;margin-bottom:8px;">Simulate scanning an equipment label:</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">${quickTags}</div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Last Decoded QR Tag</h3>
          <span class="mono badge badge-orange">${escapeHtml(target.id)}</span>
        </div>
        <div class="card-body" style="display:flex;flex-direction:column;gap:16px;">
          <div class="asset-cell">
            <div class="asset-thumb" style="width:52px;height:52px;font-size:24px">${target.icon}</div>
            <div>
              <div style="font-size:17px;font-weight:700">${escapeHtml(target.name)}</div>
              <div class="asset-sub mono">Serial: ${escapeHtml(target.serial)}</div>
            </div>
          </div>

          <div class="kv-grid">
            <div class="kv-box"><div class="kv-label">Status</div><div class="kv-val">${statusBadge(target.status)}</div></div>
            <div class="kv-box"><div class="kv-label">Current Custody</div><div class="kv-val">${escapeHtml(target.custodian)}</div></div>
            <div class="kv-box"><div class="kv-label">Location</div><div class="kv-val">${escapeHtml(target.location)}</div></div>
            <div class="kv-box"><div class="kv-label">Warranty</div><div class="kv-val mono">${escapeHtml(target.warranty)}</div></div>
          </div>

          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <button class="btn btn-primary" onclick="quickToggleCustody('${target.id}')">
              ${target.status === "Checked Out" ? "Release Custody (Return)" : "Quick Check-Out to Me"}
            </button>
            <button class="btn btn-secondary" onclick="openAssetDrawer('${target.id}')">Full Asset Details</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderReports() {
  const totalValue = state.assets.reduce((s, a) => s + Number(a.value || 0), 0);
  const byCatValue = {};
  state.assets.forEach((a) => {
    byCatValue[a.category] = (byCatValue[a.category] || 0) + Number(a.value || 0);
  });

  const valueBars = Object.entries(byCatValue)
    .sort((a, b) => b[1] - a[1])
    .map(([cat, val]) => {
      const pct = Math.round((val / totalValue) * 100);
      return `
        <div class="bar-row">
          <div class="bar-label">${escapeHtml(cat)}</div>
          <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
          <div class="bar-val">$${val.toLocaleString()}</div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="page-header">
      <div>
        <h1 class="page-title">Reports &amp; Asset Audits</h1>
        <p class="page-subtitle">Valuation analytics, audit completion tracking, and spreadsheet exports.</p>
      </div>
      <button class="btn btn-primary" onclick="exportAssetsCSV()">Download Full CSV Report</button>
    </div>

    <div class="grid-equal" style="margin-bottom:20px;">
      <div class="card">
        <div class="card-header"><h3 class="card-title">Asset Valuation by Category</h3><span class="badge badge-neutral">$${totalValue.toLocaleString()}</span></div>
        <div class="card-body">${valueBars}</div>
      </div>
      <div class="card">
        <div class="card-header"><h3 class="card-title">Scheduled Lab Audit #15</h3><span class="badge badge-available">93% Verified</span></div>
        <div class="card-body">
          <div class="kv-grid" style="margin-bottom:14px;">
            <div class="kv-box"><div class="kv-label">Scanned Assets</div><div class="kv-val">13 / ${state.assets.length}</div></div>
            <div class="kv-box"><div class="kv-label">Lead Auditor</div><div class="kv-val">Adithya Anand</div></div>
          </div>
          <p style="margin:0;color:var(--gray-600);font-size:13px">All high-value optical and compute gear verified against QR shelf tags. 1 item (Aputure 600d Pro) flagged for maintenance follow-up.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3 class="card-title">Complete Activity Audit Log</h3></div>
      <div class="card-body">
        <div class="feed-list">
          ${state.activity
            .map(
              (item) => `
              <div class="feed-item">
                <div class="feed-dot"></div>
                <div>
                  <div class="feed-text">${escapeHtml(item.text)}</div>
                  <div class="feed-time">${escapeHtml(item.time)}</div>
                </div>
              </div>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

/* Asset Detail Slide-over */
function openAssetDrawer(assetId) {
  const a = state.assets.find((x) => x.id === assetId);
  if (!a) return;
  const drawer = document.getElementById("assetDrawer");
  const backdrop = document.getElementById("assetDrawerBackdrop");

  const memberOptions = TEAM_MEMBERS.map(
    (m) => `<option value="${escapeHtml(m)}" ${a.custodian === m ? "selected" : ""}>${escapeHtml(m)}</option>`
  ).join("");

  const locOptions = flatLocations()
    .map((l) => `<option value="${escapeHtml(l)}" ${a.location === l ? "selected" : ""}>${escapeHtml(l)}</option>`)
    .join("");

  drawer.innerHTML = `
    <div class="drawer-head">
      <div class="asset-cell">
        <div class="asset-thumb" style="width:46px;height:46px;font-size:22px">${a.icon}</div>
        <div>
          <h3 style="margin:0;font-size:17px">${escapeHtml(a.name)}</h3>
          <div class="asset-sub mono">${escapeHtml(a.id)} · ${escapeHtml(a.category)}</div>
        </div>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="closeAssetDrawer()">✕</button>
    </div>

    <div class="drawer-body">
      <div class="qr-tag-card">
        <div class="qr-svg-box">${generateQrSvg(a.id, 92)}</div>
        <div style="flex:1">
          <div style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.05em">Shelf QR Asset Tag</div>
          <div class="mono" style="font-size:18px;font-weight:700;margin:2px 0">${escapeHtml(a.id)}</div>
          <div style="font-size:12px;color:var(--gray-500)">Scan to view custody, log audit, or report issue</div>
        </div>
        ${statusBadge(a.status)}
      </div>

      <div class="kv-grid">
        <div class="kv-box"><div class="kv-label">Serial Number</div><div class="kv-val mono">${escapeHtml(a.serial)}</div></div>
        <div class="kv-box"><div class="kv-label">Purchase Value</div><div class="kv-val">$${Number(a.value).toLocaleString()}</div></div>
        <div class="kv-box"><div class="kv-label">Warranty Expiry</div><div class="kv-val mono">${escapeHtml(a.warranty)}</div></div>
        <div class="kv-box"><div class="kv-label">Tags</div><div class="kv-val">${a.tags.map((t) => `<span class="badge badge-neutral">${escapeHtml(t)}</span>`).join(" ")}</div></div>
      </div>

      <div class="form-field">
        <label>Assign / Release Custody</label>
        <div style="display:flex;gap:8px;">
          <select id="drawerCustodian" style="flex:1">${memberOptions}</select>
          <button class="btn btn-primary btn-sm" onclick="updateCustody('${a.id}')">Save Custody</button>
        </div>
      </div>

      <div class="form-field">
        <label>Update Location</label>
        <div style="display:flex;gap:8px;">
          <select id="drawerLocation" style="flex:1">${locOptions}</select>
          <button class="btn btn-secondary btn-sm" onclick="updateLocation('${a.id}')">Move</button>
        </div>
      </div>

      <div style="display:flex;gap:8px;">
        <button class="btn btn-secondary btn-sm" onclick="toggleMaintenance('${a.id}')">
          ${a.status === "In Maintenance" ? "Mark Maintenance Complete" : "Flag for Maintenance"}
        </button>
        <button class="btn btn-secondary btn-sm" onclick="closeAssetDrawer(); openNewBookingModal('${a.id}')">Book This Asset</button>
      </div>

      <div class="form-field">
        <label>Audit Notes &amp; History</label>
        <div style="display:flex;gap:8px;">
          <input type="text" id="drawerNoteInput" placeholder="Add inspection or calibration note..." style="flex:1" />
          <button class="btn btn-secondary btn-sm" onclick="addAssetNote('${a.id}')">Add Note</button>
        </div>
        <div class="feed-list" style="margin-top:8px;">
          ${a.notes.map((n) => `<div class="feed-item"><div class="feed-dot"></div><div class="feed-text">${escapeHtml(n)}</div></div>`).join("")}
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add("open");
  drawer.classList.add("open");
}

function closeAssetDrawer() {
  document.getElementById("assetDrawerBackdrop").classList.remove("open");
  document.getElementById("assetDrawer").classList.remove("open");
}

function updateCustody(id) {
  const a = state.assets.find((x) => x.id === id);
  const val = document.getElementById("drawerCustodian").value;
  a.custodian = val;
  if (val === "Unassigned") {
    if (a.status === "Checked Out") a.status = "Available";
    logActivity(`Released custody of ${a.id} (${a.name})`);
    showToast(`${a.id} returned to shelf`);
  } else {
    a.status = "Checked Out";
    logActivity(`Assigned ${a.id} (${a.name}) to ${val}`);
    showToast(`Assigned ${a.id} to ${val}`);
  }
  saveState();
  renderView();
  openAssetDrawer(id);
}

function updateLocation(id) {
  const a = state.assets.find((x) => x.id === id);
  const loc = document.getElementById("drawerLocation").value;
  a.location = loc;
  logActivity(`Moved ${a.id} (${a.name}) to ${loc}`);
  saveState();
  renderView();
  openAssetDrawer(id);
  showToast(`Location updated to ${loc}`);
}

function toggleMaintenance(id) {
  const a = state.assets.find((x) => x.id === id);
  if (a.status === "In Maintenance") {
    a.status = a.custodian !== "Unassigned" ? "Checked Out" : "Available";
    logActivity(`Cleared maintenance flag on ${a.id}`);
    showToast(`${a.id} marked operational`);
  } else {
    a.status = "In Maintenance";
    logActivity(`Flagged ${a.id} (${a.name}) for Maintenance`);
    showToast(`${a.id} moved to Maintenance`);
  }
  saveState();
  renderView();
  openAssetDrawer(id);
}

function addAssetNote(id) {
  const inp = document.getElementById("drawerNoteInput");
  const text = inp.value.trim();
  if (!text) return;
  const a = state.assets.find((x) => x.id === id);
  a.notes.unshift(text);
  logActivity(`Note added on ${a.id}: "${text}"`);
  saveState();
  openAssetDrawer(id);
  showToast("Audit note saved");
}

function simulateScan(id) {
  lastScannedId = id;
  logActivity(`QR Scanner decoded tag ${id}`);
  saveState();
  renderView();
  showToast(`Decoded QR tag ${id}`);
}

function quickToggleCustody(id) {
  const a = state.assets.find((x) => x.id === id);
  if (a.status === "Checked Out") {
    a.custodian = "Unassigned";
    a.status = "Available";
    logActivity(`QR Quick-Return: ${a.id} (${a.name})`);
    showToast(`${a.id} checked back in`);
  } else {
    a.custodian = "Adithya Anand";
    a.status = "Checked Out";
    logActivity(`QR Quick-Checkout: ${a.id} to Adithya Anand`);
    showToast(`${a.id} checked out to Adithya Anand`);
  }
  saveState();
  renderView();
}

function checkoutKit(kitId) {
  const kit = state.kits.find((k) => k.id === kitId);
  if (!kit) return;
  kit.assetIds.forEach((aid) => {
    const a = state.assets.find((x) => x.id === aid);
    if (a) {
      a.status = "Checked Out";
      a.custodian = "Adithya Anand";
    }
  });
  logActivity(`Checked out bundle ${kit.name} (${kit.assetIds.length} assets)`);
  saveState();
  renderView();
  showToast(`Checked out ${kit.name}`);
}

function completeBooking(bookingId) {
  state.bookings = state.bookings.filter((b) => b.id !== bookingId);
  logActivity(`Completed and closed booking ${bookingId}`);
  saveState();
  renderView();
  showToast(`Booking ${bookingId} marked returned`);
}

/* Modals */
function openNewAssetModal() {
  const modal = document.getElementById("modalRoot");
  const backdrop = document.getElementById("modalBackdrop");
  const locOptions = flatLocations().map((l) => `<option>${escapeHtml(l)}</option>`).join("");

  modal.innerHTML = `
    <div class="modal-head">
      <h3 style="margin:0;font-size:16px">Add New Asset</h3>
      <button class="btn btn-ghost btn-sm" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="form-field"><label>Asset Name</label><input id="newAssetName" placeholder="e.g. Blackmagic Pocket 6K Pro" /></div>
      <div class="grid-equal">
        <div class="form-field"><label>Category</label>
          <select id="newAssetCat"><option>Cameras</option><option>Laptops</option><option>Audio</option><option>Lab Gear</option><option>Lighting</option><option>Compute</option></select>
        </div>
        <div class="form-field"><label>Value (USD)</label><input id="newAssetVal" type="number" value="1499" /></div>
      </div>
      <div class="form-field"><label>Location</label><select id="newAssetLoc">${locOptions}</select></div>
      <div class="form-field"><label>Serial Number</label><input id="newAssetSerial" placeholder="SN-2026-9910" /></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitNewAsset()">Create Asset &amp; Generate QR</button>
    </div>
  `;
  backdrop.classList.add("open");
  modal.classList.add("open");
}

function submitNewAsset() {
  const name = document.getElementById("newAssetName").value.trim();
  if (!name) return showToast("Please enter an asset name");
  const nextNum = 101 + state.assets.length;
  const newId = `SHF-${nextNum}`;
  const cat = document.getElementById("newAssetCat").value;
  const iconMap = { Cameras: "🎥", Laptops: "💻", Audio: "🎙️", "Lab Gear": "🔬", Lighting: "💡", Compute: "🧠" };
  state.assets.unshift({
    id: newId,
    name,
    category: cat,
    status: "Available",
    custodian: "Unassigned",
    location: document.getElementById("newAssetLoc").value,
    serial: document.getElementById("newAssetSerial").value.trim() || `SN-${nextNum}00`,
    value: Number(document.getElementById("newAssetVal").value) || 500,
    warranty: "2028-11-15",
    icon: iconMap[cat] || "📦",
    tags: ["New", cat],
    notes: ["Asset registered via Shelf Demo UI"],
  });
  logActivity(`Created asset ${newId} (${name})`);
  saveState();
  closeModal();
  navigate("assets");
  showToast(`Created ${newId} with QR tag`);
}

function openNewBookingModal(preselectAssetId) {
  const modal = document.getElementById("modalRoot");
  const backdrop = document.getElementById("modalBackdrop");
  const assetOptions = state.assets
    .map((a) => `<option value="${a.id}" ${a.id === preselectAssetId ? "selected" : ""}>${a.id} — ${escapeHtml(a.name)}</option>`)
    .join("");
  const memberOptions = TEAM_MEMBERS.filter((m) => m !== "Unassigned")
    .map((m) => `<option>${escapeHtml(m)}</option>`)
    .join("");

  modal.innerHTML = `
    <div class="modal-head">
      <h3 style="margin:0;font-size:16px">Create Equipment Booking</h3>
      <button class="btn btn-ghost btn-sm" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="form-field"><label>Booking Purpose</label><input id="bkgTitle" placeholder="e.g. Robotics Sensor Integration Test" /></div>
      <div class="form-field"><label>Select Asset</label><select id="bkgAsset">${assetOptions}</select></div>
      <div class="grid-equal">
        <div class="form-field"><label>Borrower</label><select id="bkgBorrower">${memberOptions}</select></div>
        <div class="form-field"><label>Start Day (This Week)</label>
          <select id="bkgStart">
            <option value="0">Sun Nov 15</option><option value="1">Mon Nov 16</option><option value="2">Tue Nov 17</option>
            <option value="3">Wed Nov 18</option><option value="4">Thu Nov 19</option><option value="5">Fri Nov 20</option>
          </select>
        </div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitNewBooking()">Confirm Booking</button>
    </div>
  `;
  backdrop.classList.add("open");
  modal.classList.add("open");
}

function submitNewBooking() {
  const title = document.getElementById("bkgTitle").value.trim() || "Lab Equipment Reservation";
  const assetId = document.getElementById("bkgAsset").value;
  const borrower = document.getElementById("bkgBorrower").value;
  const startDay = Number(document.getElementById("bkgStart").value);
  const newId = `BKG-${401 + state.bookings.length}`;
  state.bookings.unshift({
    id: newId,
    title,
    assetId,
    borrower,
    startDay,
    spanDays: 2,
    dateRange: `Nov ${15 + startDay} – Nov ${17 + startDay}`,
    status: "Confirmed",
    color: "green",
  });
  logActivity(`Scheduled ${newId} for ${assetId} (${borrower})`);
  saveState();
  closeModal();
  navigate("bookings");
  showToast(`Booking ${newId} confirmed`);
}

function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
  document.getElementById("modalRoot").classList.remove("open");
}

/* Command Palette */
function openCmdPalette() {
  document.getElementById("cmdBackdrop").classList.add("open");
  document.getElementById("cmdModal").classList.add("open");
  const inp = document.getElementById("cmdInput");
  inp.value = "";
  renderCmdResults("");
  setTimeout(() => inp.focus(), 20);
}

function closeCmdPalette() {
  document.getElementById("cmdBackdrop").classList.remove("open");
  document.getElementById("cmdModal").classList.remove("open");
}

function renderCmdResults(q) {
  const query = q.trim().toLowerCase();
  const matches = state.assets
    .filter((a) => !query || `${a.id} ${a.name} ${a.location} ${a.custodian}`.toLowerCase().includes(query))
    .slice(0, 7);
  document.getElementById("cmdResults").innerHTML = matches
    .map(
      (a) => `
      <div class="cmd-row" onclick="closeCmdPalette(); openAssetDrawer('${a.id}')">
        <span>${a.icon} <strong>${escapeHtml(a.name)}</strong> <span class="mono" style="color:var(--gray-400);font-size:12px">${a.id}</span></span>
        ${statusBadge(a.status)}
      </div>
    `
    )
    .join("");
}

function exportAssetsCSV() {
  const headers = ["ID", "Name", "Category", "Status", "Custodian", "Location", "Serial", "Value", "Warranty"];
  const rows = state.assets.map((a) =>
    [a.id, a.name, a.category, a.status, a.custodian, a.location, a.serial, a.value, a.warranty]
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(",")
  );
  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "shelf-assets-export.csv";
  link.click();
  URL.revokeObjectURL(url);
  showToast("Exported shelf-assets-export.csv");
}

function resetDemoData() {
  state = structuredClone(DEFAULT_STATE);
  saveState();
  renderView();
  showToast("Demo workspace reset to initial seed data");
}

document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openCmdPalette();
  } else if (e.key === "Escape") {
    closeCmdPalette();
    closeModal();
    closeAssetDrawer();
  }
});

/* Init with optional ?view=...&asset=... deep links */
(function init() {
  updateNavCounts();
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");
  const asset = params.get("asset");
  const mode = params.get("mode");
  if (mode === "grid") filters.viewMode = "grid";
  if (view && ["home", "assets", "kits", "locations", "bookings", "reports", "scanner"].includes(view)) {
    navigate(view);
  } else {
    navigate("home");
  }
  if (asset) {
    setTimeout(() => openAssetDrawer(asset), 50);
  }
})();
