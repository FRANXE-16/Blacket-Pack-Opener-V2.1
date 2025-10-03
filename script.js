(() => {
  if (!window.blacket?.packs || !blacket?.rarities || !blacket?.requests || !blacket?.blooks) {
    console.error("Blacket not detected. Open the game/site first, then paste this.");
    return;
  }
  if (window.__BLK_COMBINED_UI_V3__) {
    console.log("Blacket Combined UI (images + no left Drops) already loaded.");
    return;
  }
  window.__BLK_COMBINED_UI_V3__ = true;

  const addOnce = (tag, attrs) => {
    const exists = [...document.querySelectorAll(tag)].some(n =>
      Object.entries(attrs).every(([k,v]) => n.getAttribute(k) === v)
    );
    if (exists) return;
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  };
  addOnce("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" });
  addOnce("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" });

  const css = document.createElement("style");
  css.textContent = `
  :root {
    --bg:#f7f7f8; --panel:#fff; --text:#0f172a; --muted:#64748b; --line:#e7e7ea;
    --brand:#3b82f6; --brand-weak:#eaf2ff; --shadow:0 10px 30px rgba(0,0,0,.08); --radius:16px;
  }
  .blk *{ box-sizing:border-box; font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }

  .blk-left {
    position:fixed; inset:0 auto 0 0; width:340px; z-index:2147482000;
    display:flex; flex-direction:column; gap:12px; padding:16px;
    background:var(--bg); border-right:1px solid var(--line);
  }
  .blk-right {
    position:fixed; inset:0 0 0 auto; width:380px; padding:16px;
    display:flex; flex-direction:column; gap:12px; z-index:2147482000;
    pointer-events:none;
  }

  .blk-card{ background:var(--panel); border:1px solid var(--line); border-radius:var(--radius); box-shadow:var(--shadow); padding:14px; }
  .blk-row{ display:flex; align-items:center; gap:10px; }
  .blk-row.between{ justify-content:space-between; }
  .blk-title{ font-weight:700; color:var(--text); }
  .blk-sub{ color:var(--muted); font-size:12px; }
  .blk-sep{ height:1px; background:var(--line); margin:12px 0; border:0; }

  .blk-input,.blk-select{
    width:100%; padding:10px 12px; border-radius:12px; border:1px solid var(--line);
    background:#fff; color:var(--text); font-weight:500; outline:none;
  }
  .blk-input:focus,.blk-select:focus{ border-color:var(--brand); box-shadow:0 0 0 4px var(--brand-weak); }
  .blk-btn{
    display:inline-flex; align-items:center; justify-content:center; gap:8px;
    padding:10px 12px; border-radius:12px; border:1px solid var(--line);
    background:#fff; color:var(--text); font-weight:600; cursor:pointer;
    transition:transform .04s, background .2s, border-color .2s;
  }
  .blk-btn:hover{ background:#fafafa; } .blk-btn:active{ transform:translateY(1px); }
  .blk-btn.brand{ border-color:var(--brand); background:var(--brand); color:#fff; }
  .blk-badge{ display:inline-flex; align-items:center; gap:6px; border-radius:999px; padding:6px 10px; font-weight:600; font-size:12px; border:1px solid var(--line); background:#fff; color:var(--muted); }
  .blk-chip{ font-size:11px; padding:4px 8px; border-radius:999px; border:1px solid var(--line); color:var(--muted); background:#fff; }
  .blk-kbd{ font-family:ui-monospace, SFMono-Regular, Menlo, monospace; font-size:12px; padding:2px 6px; border:1px solid var(--line); border-bottom-width:2px; border-radius:8px; background:#fff; color:var(--text); }

  .blk-progress{ height:10px; width:100%; background:#f1f2f4; border-radius:999px; overflow:hidden; border:1px solid var(--line); }
  .blk-progress>div{ height:100%; width:0%; background:linear-gradient(90deg, var(--brand), #60a5fa); transition:width .25s; border-right:1px solid rgba(255,255,255,.6); }

  .blk-footer{ margin-top:auto; display:flex; align-items:center; justify-content:space-between; color:var(--muted); font-size:12px; }
  .blk-toast{ position:fixed; left:360px; top:16px; padding:10px 12px; background:#111; color:#fff; border-radius:10px; box-shadow:var(--shadow); font-weight:600; z-index:2147483000; opacity:0; transform:translateY(-6px); transition:opacity .2s, transform .2s; }
  .blk-toast.show{ opacity:1; transform:translateY(0); }

  .blk-r-head{ background:#ffffffcc; backdrop-filter: blur(6px); border:1px solid var(--line); border-radius:16px; padding:10px 12px; display:flex; align-items:center; justify-content:space-between; gap:10px; position:sticky; top:16px; z-index:2; pointer-events:auto; }
  .blk-r-grid{ display:flex; flex-direction:column; gap:10px; }
  .blk-r-card{ pointer-events:auto; background:#fff; border:1px solid var(--line); border-radius:16px; box-shadow:var(--shadow); padding:10px 12px; display:flex; align-items:center; gap:12px; transform:translateX(16px); opacity:0; animation:slideIn .2s ease forwards; }
  @keyframes slideIn{ to{ transform:none; opacity:1; } }
  .blk-r-imgwrap{ width:56px; height:56px; border-radius:12px; overflow:hidden; border:1px solid var(--line); background:#f3f4f6; display:flex; align-items:center; justify-content:center; flex:none; }
  .blk-r-imgwrap img{ width:100%; height:100%; object-fit:contain; image-rendering:auto; }
  .blk-r-title{ font-weight:700; color:#0f172a; line-height:1.15; }
  .blk-r-sub{ font-size:12px; color:#64748b; }
  .blk-r-col{ width:10px; height:44px; border-radius:8px; background:#ddd; flex:none; border:1px solid #e7e7ea; }
  .blk-r-count{ margin-left:auto; font-weight:700; color:#0f172a; background:#f6f7fb; border:1px solid #e7e7ea; padding:6px 10px; border-radius:999px; min-width:44px; text-align:center; }

  .blk-float {
    position:fixed; top:60px; left:calc(50% - 420px); width:840px; z-index:2147483500;
    background:var(--panel); border:1px solid var(--line); border-radius:20px; box-shadow:0 20px 60px rgba(0,0,0,.15);
    display:flex; flex-direction:column; overflow:hidden;
  }
  .blk-f-head{
    cursor:move; user-select:none; padding:12px 14px; display:flex; align-items:center; justify-content:space-between; gap:8px;
    background:linear-gradient(180deg, #ffffff, #fafafa); border-bottom:1px solid var(--line);
  }
  .blk-f-body{ display:grid; grid-template-columns: 360px 1fr; gap:0; min-height:420px; }
  .blk-f-left{ padding:14px; background:var(--bg); border-right:1px solid var(--line); }
  .blk-f-right{ padding:14px; background:#fff; }
  .blk-hide{ display:none !important; }
  `;
  document.head.appendChild(css);

  const pSBC = (p,c0,c1,l)=>{let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;if(!this.pSBCr)this.pSBCr=(d)=>{let n=d.length,x={};if(n>9){[r,g,b,a]=d=d.split(","),n=d.length;if(n<3||n>4)return null;x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1}else{if(n==8||n==6||n<4)return null;if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");d=i(d.slice(1),16);if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1}return x};h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;if(!f||!t)return null;if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b**2+p*t.b**2?0:(P*f.b**2+p*t.b**2)**0.5);else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)};
  const toast = (msg) => {
    const el = document.createElement("div");
    el.className = "blk-toast";
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));
    setTimeout(() => { el.classList.remove("show"); setTimeout(() => el.remove(), 200); }, 1400);
  };
  const fmt = (n) => Number(n || 0).toLocaleString();

  function resolveBlookImg(name) {
    try {
      if (typeof window.BLK_BLOOK_IMG_RESOLVER === "function") {
        const u = window.BLK_BLOOK_IMG_RESOLVER(name, blacket.blooks[name]);
        if (u) return u;
      }
      const meta = blacket.blooks[name] || {};
      const candidates = [
        meta.img, meta.image, meta.icon, meta.sprite, meta.src, meta.url,
        (meta.images && (meta.images.big || meta.images.small || meta.images.default)),
      ].filter(Boolean);
      for (const c of candidates) {
        if (typeof c === "string" && /(https?:|data:|\.png|\.jpg|\.jpeg|\.svg)/i.test(c)) return c;
      }
      const safe = String(name).replace(/\s+/g, "%20");
      const guesses = [
        `/content/blooks/${safe}.png`,
        `/images/blooks/${safe}.png`,
        `/blooks/${safe}.png`,
      ];
      for (const g of guesses) {
        return g;
      }
    } catch {}
    return "";
  }

  const extraDelayDefault = 0;
  const maxDelay = Object.values(blacket.rarities).map(x => x.wait).reduce((a,b)=>a>b?a:b) + extraDelayDefault;
  const rarityOrder = Object.entries(blacket.rarities).sort((a,b)=>a[1].exp - b[1].exp).map(x=>x[0]);

  const left = document.createElement("aside");
  left.className = "blk blk-left";
  left.innerHTML = `
    <div class="blk-card blk-row between">
      <div class="blk-row">
        <i class="fa-solid fa-cubes-stacked" style="color:var(--brand);font-size:18px;"></i>
        <div>
          <div class="blk-title">Pack Opener</div>
          <div class="blk-sub">Control center</div>
        </div>
      </div>
      <div class="blk-row">
        <span class="blk-badge" title="Your tokens"><i class="fa-solid fa-coins"></i> <span id="blkToken">${fmt(blacket.user?.tokens ?? 0)}</span></span>
      </div>
    </div>

    <div class="blk-card">
      <div class="blk-row between">
        <div class="blk-title">Controls</div>
        <span class="blk-chip"><i class="fa-regular fa-clock"></i> <span id="blkDelayChip">${extraDelayDefault}</span>ms</span>
      </div>
      <hr class="blk-sep"/>
      <div class="blk-row" style="gap:12px">
        <div style="flex:1">
          <label class="blk-sub">Pack</label>
          <select id="blkPack" class="blk-select"></select>
        </div>
        <div style="width:120px">
          <label class="blk-sub">Amount</label>
          <input id="blkAmount" class="blk-input" type="number" min="1" step="1" placeholder="e.g. 50"/>
        </div>
      </div>
      <div class="blk-row" style="gap:12px; margin-top:10px;">
        <div style="flex:1">
          <label class="blk-sub">Extra Delay (ms)</label>
          <input id="blkExtraDelay" class="blk-input" type="number" min="0" step="25" value="${extraDelayDefault}" />
        </div>
        <button id="blkOpen" class="blk-btn brand" style="width:140px"><i class="fa-solid fa-box-open"></i> Open</button>
      </div>
      <div style="margin-top:12px;">
        <div class="blk-row between">
          <div class="blk-sub"><i class="fa-regular fa-circle-play"></i> Progress</div>
          <div class="blk-sub"><span id="blkProgressLabel">0/0</span></div>
        </div>
        <div class="blk-progress" style="margin-top:8px;"><div id="blkProgressBar"></div></div>
      </div>
      <div class="blk-row between" style="margin-top:10px;">
        <div class="blk-row" style="gap:8px;">
          <button id="blkStop" class="blk-btn" title="Stop current run"><i class="fa-solid fa-stop"></i> Stop</button>
          <button id="blkReset" class="blk-btn" title="Reset counters"><i class="fa-solid fa-rotate"></i> Reset</button>
        </div>
        <div class="blk-row" style="gap:8px;">
          <button id="blkLayout" class="blk-btn" title="Toggle layout"><i class="fa-solid fa-window-restore"></i> Toggle Layout</button>
        </div>
      </div>
    </div>

    <div class="blk-card">
      <div class="blk-row between">
        <div class="blk-title">Stats</div>
        <span class="blk-chip"><i class="fa-solid fa-hourglass-half"></i> max wait ${maxDelay}ms</span>
      </div>
      <hr class="blk-sep"/>
      <div class="blk-row between"><span class="blk-sub">Total Opened</span><strong id="blkTotal">0</strong></div>
      <div class="blk-row between"><span class="blk-sub">Total Spent</span><strong id="blkSpent">0</strong></div>
      <div class="blk-row between"><span class="blk-sub">Avg / unique</span><span id="blkAvg" class="blk-sub">—</span></div>
      <div class="blk-sub" style="margin-top:8px;">Hotkey: <span class="blk-kbd">O</span> to open</div>
    </div>

    <div class="blk-footer">
      <span>v2.1 • combined</span>
      <span class="blk-sub">clean & fast</span>
    </div>
  `;
  document.body.appendChild(left);

  const right = document.createElement("aside");
  right.className = "blk blk-right";
  right.innerHTML = `
    <div class="blk-r-head">
      <div style="display:flex; align-items:center; gap:8px;">
        <i class="fa-solid fa-gift" style="color:var(--brand);"></i>
        <div>
          <div class="blk-title">Unlocked</div>
          <div class="blk-sub">Newest first</div>
        </div>
      </div>
      <div style="display:flex; gap:8px; align-items:center;">
        <span id="blkRTotal" class="blk-chip"><i class="fa-regular fa-square-plus"></i> 0 total</span>
        <button id="blkRClear" class="blk-btn"><i class="fa-solid fa-eraser"></i> Clear</button>
      </div>
    </div>
    <div id="blkRGrid" class="blk-r-grid"></div>
  `;
  document.body.appendChild(right);

  const float = document.createElement("div");
  float.className = "blk blk-float blk-hide";
  float.innerHTML = `
    <div class="blk-f-head" id="blkDragBar">
      <div class="blk-row">
        <i class="fa-solid fa-grip-lines"></i>
        <div class="blk-title">Pack Opener • Floating</div>
      </div>
      <div class="blk-row">
        <button id="blkDockBtn" class="blk-btn"><i class="fa-solid fa-window-maximize"></i> Dock</button>
      </div>
    </div>
    <div class="blk-f-body">
      <div class="blk-f-left" id="blkFloatLeft"></div>
      <div class="blk-f-right">
        <div class="blk-r-head" style="position:sticky; top:0;">
          <div style="display:flex; align-items:center; gap:8px;">
            <i class="fa-solid fa-gift" style="color:var(--brand);"></i>
            <div>
              <div class="blk-title">Unlocked</div>
              <div class="blk-sub">Newest first</div>
            </div>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <span id="blkRTotalF" class="blk-chip"><i class="fa-regular fa-square-plus"></i> 0 total</span>
            <button id="blkRClearF" class="blk-btn"><i class="fa-solid fa-eraser"></i> Clear</button>
          </div>
        </div>
        <div id="blkRGridF" class="blk-r-grid" style="max-height:60vh; overflow:auto;"></div>
      </div>
    </div>
  `;
  document.body.appendChild(float);

  (() => {
    const bar = float.querySelector("#blkDragBar");
    let drag=false, ox=0, oy=0;
    bar.addEventListener("mousedown", (e)=>{ drag=true; ox=e.clientX - float.offsetLeft; oy=e.clientY - float.offsetTop; });
    window.addEventListener("mousemove", (e)=>{ if(!drag) return; float.style.left=(e.clientX-ox)+"px"; float.style.top=(e.clientY-oy)+"px"; });
    window.addEventListener("mouseup", ()=> drag=false);
  })();

  const el = {
    token: left.querySelector("#blkToken"),
    pack: left.querySelector("#blkPack"),
    amount: left.querySelector("#blkAmount"),
    extra: left.querySelector("#blkExtraDelay"),
    delayChip: left.querySelector("#blkDelayChip"),
    open: left.querySelector("#blkOpen"),
    stop: left.querySelector("#blkStop"),
    reset: left.querySelector("#blkReset"),
    layout: left.querySelector("#blkLayout"),
    total: left.querySelector("#blkTotal"),
    spent: left.querySelector("#blkSpent"),
    avg: left.querySelector("#blkAvg"),
    pbar: left.querySelector("#blkProgressBar"),
    plabel: left.querySelector("#blkProgressLabel"),

    rGrid: right.querySelector("#blkRGrid"),
    rTotal: right.querySelector("#blkRTotal"),
    rClear: right.querySelector("#blkRClear"),

    dockBtn: float.querySelector("#blkDockBtn"),
    floatLeft: float.querySelector("#blkFloatLeft"),
    rGridF: float.querySelector("#blkRGridF"),
    rTotalF: float.querySelector("#blkRTotalF"),
    rClearF: float.querySelector("#blkRClearF"),
  };

  el.floatLeft.appendChild(left.children[1].cloneNode(true)); // Controls
  el.floatLeft.appendChild(left.children[2].cloneNode(true)); // Stats

  const packs = Object.keys(blacket.packs);
  const setPackOptions = (selectEl) => {
    selectEl.innerHTML = "";
    for (const pk of packs) {
      const o = document.createElement("option");
      o.value = pk; o.textContent = `${pk} — ${blacket.packs[pk].price} 🪙`;
      selectEl.appendChild(o);
    }
    selectEl.value = packs[0];
  };
  setPackOptions(el.pack);
  setPackOptions(float.querySelector("#blkPack"));

  const syncPairs = [
    ["#blkPack","value"], ["#blkAmount","value"], ["#blkExtraDelay","value"]
  ];
  const linkSync = (rootA, rootB) => {
    syncPairs.forEach(([sel, prop]) => {
      const a = rootA.querySelector(sel), b = rootB.querySelector(sel);
      const sync = (src, dst) => () => { dst[prop] = src[prop]; if (sel==="#blkExtraDelay") left.querySelector("#blkDelayChip").textContent = left.querySelector("#blkExtraDelay").value; };
      a.addEventListener("input", sync(a,b));
      b.addEventListener("input", sync(b,a));
    });
    rootB.querySelector("#blkOpen").addEventListener("click", () => el.open.click());
    rootB.querySelector("#blkStop").addEventListener("click", () => el.stop.click());
    rootB.querySelector("#blkReset").addEventListener("click", () => el.reset.click());
  };
  linkSync(left, float.querySelector(".blk-f-left"));

  const computeMaxPacks = () => Math.max(0, Math.floor((blacket.user.tokens || 0) / blacket.packs[el.pack.value].price));
  const updatePlaceholders = () => {
    left.querySelector("#blkAmount").placeholder = `Max: ${computeMaxPacks()}`;
    float.querySelector("#blkAmount").placeholder = `Max: ${computeMaxPacks()}`;
  };
  updatePlaceholders();
  el.pack.addEventListener("change", updatePlaceholders);

  let running=false, stopFlag=false;
  let attained = {}; 
  let totalOpened=0, totalSpent=0;

  const counts = {}; let totalRail = 0;

  const openPack = (pack) => new Promise((resolve, reject) => {
    blacket.requests.post("/worker3/open", { pack }, (data) => {
      if (data?.error) return reject(data.error);
      resolve(data.blook);
    });
  });

  const renderStats = () => {
    const totalEls = [el.total, float.querySelector("#blkTotal")].filter(Boolean);
    const tokenEls = [el.token];
    const spentEls = [el.spent, float.querySelector("#blkSpent")].filter(Boolean);
    const avgEls = [el.avg, float.querySelector("#blkAvg")].filter(Boolean);
    totalEls.forEach(n => n.textContent = fmt(totalOpened));
    tokenEls.forEach(n => n.textContent = fmt(blacket.user.tokens || 0));
    spentEls.forEach(n => n.textContent = fmt(totalSpent));
    const uniq = Object.keys(attained).length || 1;
    avgEls.forEach(n => n.textContent = `${(totalOpened/uniq).toFixed(2)} / unique`);
  };

  const setProgress = (n, max) => {
    const pBarEls = [el.pbar, float.querySelector("#blkProgressBar")].filter(Boolean);
    const pLabEls = [el.plabel, float.querySelector("#blkProgressLabel")].filter(Boolean);
    const pct = max ? Math.min(100, Math.round(n/max*100)) : 0;
    pBarEls.forEach(b => b.style.width = pct + "%");
    pLabEls.forEach(l => l.textContent = `${fmt(n)}/${fmt(max)}`);
  };

  const updatePlannedSpend = () => {
    const price = blacket.packs[el.pack.value].price;
    const amt = parseInt(el.amount.value || 0, 10);
    const cost = isFinite(amt) ? amt * price : 0;
    [el.spent, float.querySelector("#blkSpent")].forEach(n => n && (n.textContent = fmt(cost)));
  };
  el.amount.addEventListener("input", updatePlannedSpend);
  float.querySelector("#blkAmount").addEventListener("input", updatePlannedSpend);
  el.extra.addEventListener("input", () => {
    const val = el.extra.value || "0";
    el.delayChip.textContent = val;
    const chipF = float.querySelector("#blkDelayChip");
    if (chipF) chipF.textContent = val;
  });

  const makeRailCardHTML = (name, count) => {
    const rarity = blacket.blooks[name]?.rarity ?? "Common";
    const base = blacket.rarities[rarity]?.color ?? "#9aa0a6";
    const accent = pSBC(0.4, base);
    const img = resolveBlookImg(name);
    return `
      <div class="blk-r-card" data-name="${name.replace(/"/g,'&quot;')}">
        <div class="blk-r-col" style="background:linear-gradient(180deg, ${base}, ${accent}); border-color:${accent}"></div>
        <div class="blk-r-imgwrap">${img ? `<img src="${img}" alt="${name}">` : `<i class="fa-regular fa-image" style="color:#9aa0a6;"></i>`}</div>
        <div style="flex:1; min-width:0;">
          <div class="blk-r-title" style="background:linear-gradient(90deg, ${base}, ${accent}); -webkit-background-clip:text; background-clip:text; color:transparent;">
            ${name}
          </div>
          <div class="blk-r-sub">${rarity}</div>
        </div>
        <div class="blk-r-count" data-count>×${fmt(count)}</div>
      </div>`;
  };

  const upsertRail = (name) => {
    counts[name] = (counts[name] || 0) + 1;
    for (const [grid, totalChip] of [[el.rGrid, el.rTotal], [el.rGridF, el.rTotalF]]) {
      if (!grid) continue;
      let card = grid.querySelector(`.blk-r-card[data-name="${CSS.escape(name)}"]`);
      if (!card) {
        grid.insertAdjacentHTML("afterbegin", makeRailCardHTML(name, counts[name]));
      } else {
        card.querySelector("[data-count]").textContent = "×" + fmt(counts[name]);
        grid.prepend(card);
      }
      if (totalChip) {
        totalRail += 1;
        totalChip.innerHTML = `<i class="fa-regular fa-square-plus"></i> ${fmt(totalRail)} total`;
      }
    }
  };

  const clearRail = () => {
    [el.rGrid, el.rGridF].forEach(g => g && (g.innerHTML = ""));
    Object.keys(counts).forEach(k => delete counts[k]);
    totalRail = 0;
    [el.rTotal, el.rTotalF].forEach(t => t && (t.innerHTML = `<i class="fa-regular fa-square-plus"></i> 0 total`));
  };
  el.rClear.addEventListener("click", clearRail);
  el.rClearF && el.rClearF.addEventListener("click", clearRail);

  async function runOpen(pack, amount) {
    running = true; stopFlag = false;
    const dockCtrls = [el.open, el.stop, el.reset, el.pack, el.amount, el.extra];
    const floatCtrls = [float.querySelector("#blkOpen"), float.querySelector("#blkStop"), float.querySelector("#blkReset"),
                        float.querySelector("#blkPack"), float.querySelector("#blkAmount"), float.querySelector("#blkExtraDelay")].filter(Boolean);
    const setDisabled = (nodes, disabled) => nodes.forEach(n => n && (n.disabled = disabled));

    setDisabled([el.open, float.querySelector("#blkOpen")], true);
    setDisabled([el.stop, float.querySelector("#blkStop")], false);
    setDisabled([el.reset, float.querySelector("#blkReset")], true);
    setDisabled([el.pack, el.amount, el.extra, float.querySelector("#blkPack"), float.querySelector("#blkAmount"), float.querySelector("#blkExtraDelay")], true);

    totalOpened = 0; totalSpent = 0; attained = {};
    renderStats(); setProgress(0, amount);

    while (totalOpened < amount && !stopFlag) {
      try {
        const blook = await openPack(pack);
        const price = blacket.packs[pack].price;
        blacket.user.tokens -= price; totalSpent += price;

        attained[blook] = (attained[blook] || 0) + 1;
        totalOpened++;
        renderStats(); setProgress(totalOpened, amount);

        upsertRail(blook);

        const rarity = blacket.blooks[blook].rarity;
        const delay = (blacket.rarities[rarity].wait || 0) + Number(el.extra.value || 0);
        await new Promise(r => setTimeout(r, delay));
      } catch (e) {
        await new Promise(r => setTimeout(r, maxDelay + Number(el.extra.value || 0)));
      }
    }

    toast(!stopFlag ? "Run complete." : "Run stopped.");
    setDisabled([el.open, float.querySelector("#blkOpen")], false);
    setDisabled([el.stop, float.querySelector("#blkStop")], true);
    setDisabled([el.reset, float.querySelector("#blkReset")], false);
    setDisabled([el.pack, el.amount, el.extra, float.querySelector("#blkPack"), float.querySelector("#blkAmount"), float.querySelector("#blkExtraDelay")], false);
    running = false;
  }

  const doOpen = () => {
    const pk = el.pack.value;
    const amt = parseInt(el.amount.value || float.querySelector("#blkAmount")?.value || "0", 10);
    if (!pk) return toast("pick a pack first");
    if (!amt || amt < 1) return toast("enter a valid amount");
    const maxP = Math.floor((blacket.user.tokens || 0) / blacket.packs[pk].price);
    if (amt > maxP) return toast("not enough tokens");
    runOpen(pk, amt);
  };
  el.open.addEventListener("click", doOpen);
  float.querySelector("#blkOpen").addEventListener("click", doOpen);

  const doStop = () => { if (running) stopFlag = true; };
  el.stop.addEventListener("click", doStop);
  float.querySelector("#blkStop").addEventListener("click", doStop);

  const doReset = () => {
    attained = {}; totalOpened = 0; totalSpent = 0;
    setProgress(0, 0); renderStats(); toast("reset.");
    clearRail();
  };
  el.reset.addEventListener("click", doReset);
  float.querySelector("#blkReset").addEventListener("click", doReset);

  let floating = false;
  const setLayout = (toFloating) => {
    floating = toFloating;
    left.classList.toggle("blk-hide", toFloating);
    right.classList.toggle("blk-hide", toFloating);
    float.classList.toggle("blk-hide", !toFloating);
  };
  el.layout.addEventListener("click", () => setLayout(!floating));
  el.dockBtn.addEventListener("click", () => setLayout(false));

  window.addEventListener("keydown", (e) => {
    const a = document.activeElement;
    const inField = a && (a.tagName === "INPUT" || a.tagName === "SELECT" || a.tagName === "TEXTAREA" || a.isContentEditable);
    if (!inField && (e.key === "o" || e.key === "O")) el.open.click();
  });

  (function initSpend(){ const price = blacket.packs[el.pack.value].price; el.spent.textContent = "0"; })();

  if (!window.__BLK_POST_WRAP_IMG__) {
    window.__BLK_POST_WRAP_IMG__ = true;
    const origPost = blacket.requests.post.bind(blacket.requests);
    blacket.requests.post = (url, payload, cb) => {
      const wrapped = (data) => {
        try {
          if (typeof url === "string" && url.includes("/worker3/open") && data && data.blook) {
            upsertRail(data.blook);
          }
        } catch {}
        cb && cb(data);
      };
      return origPost(url, payload, wrapped);
    };
  }

  console.log("Blacket Combined UI loaded (left controls, right results with images, floating toggle).");
})();


