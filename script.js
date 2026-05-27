/* =========================================================
   CRIA FRAMES — Interaction Layer v2
   ========================================================= */

const DB = {
    proposals: 'cria_proposals_v1',
    portfolio:  'cria_portfolio_v1',
    admin:      'cria_admin_v1',
    intro:      'cria_intro_v1',
};
const PWD = 'cria2026';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

function load(key)    { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; } }
function save(key, v) { localStorage.setItem(key, JSON.stringify(v)); }


/* =========================================================
   INTRO — JS state machine (no fragile CSS-chained animations)
   ========================================================= */
function initIntro() {
    const intro   = $('#intro');
    const spot    = $('#introSpot');
    const wrap    = $('#introLogoWrap');
    const curtain = $('#introCurtain');
    const flash   = $('#introFlash');
    const caption = $('#introCaption');
    const skipBtn = $('#skipIntro');
    const header  = $('#siteHeader');

    function showHeader() {
        header.classList.add('visible');
    }

    function exitIntro() {
        intro.classList.add('exiting');
        showHeader();
        sessionStorage.setItem(DB.intro, '1');
        setTimeout(() => { intro.style.display = 'none'; }, 900);
    }

    skipBtn.addEventListener('click', exitIntro);

    // If already seen this session → skip immediately
    if (sessionStorage.getItem(DB.intro)) {
        intro.style.display = 'none';
        showHeader();
        return;
    }

    // --- Animation timeline ---
    // t=0       : black screen, spotlight SVG visible
    // t=700ms   : flash on (spotlight "clicks on")
    // t=900ms   : flash off, logo wrap becomes visible, curtain starts opening
    // t=2500ms  : caption appears
    // t=4600ms  : auto-exit

    setTimeout(() => {
        // flash
        flash.classList.add('on');

        setTimeout(() => {
            flash.classList.remove('on');

            // hide SVG icon, show logo
            spot.classList.add('gone');
            wrap.classList.add('visible');

            // small delay then open the curtain
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    curtain.classList.add('open');
                });
            });

            // caption
            setTimeout(() => {
                caption.classList.add('show');
            }, 1400);

            // auto-exit
            setTimeout(exitIntro, 3700);

        }, 220);
    }, 700);
}


/* =========================================================
   TAB NAVIGATION
   ========================================================= */
function switchTab(name) {
    $$('.page').forEach(p => p.classList.toggle('active', p.dataset.tab === name));
    $$('[data-tab]').forEach(el => {
        if (el.classList.contains('nav-link') || el.classList.contains('nav-admin-btn')) {
            el.classList.toggle('active', el.dataset.tab === name);
        }
    });
    window.scrollTo({ top: 0 });

    if (name === 'portfolio') renderPortfolio();
    if (name === 'admin')     refreshAdmin();
}

function initNav() {
    const hamburger = $('#hamburger');
    const nav = $('#mainNav');

    hamburger.addEventListener('click', () => nav.classList.toggle('open'));

    // close mobile nav on outside click
    document.addEventListener('click', e => {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('open');
        }
    });

    // delegate all [data-tab] clicks
    document.addEventListener('click', e => {
        const el = e.target.closest('[data-tab]');
        if (!el) return;
        const tab = el.dataset.tab;
        if (!tab) return;
        e.preventDefault();
        switchTab(tab);
        nav.classList.remove('open');
    });
}


/* =========================================================
   PROPOSAL FORM
   ========================================================= */
function initProposalForm() {
    const form = $('#proposalForm');
    const ok   = $('#formSuccess');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        const list = load(DB.proposals);
        list.unshift({ id: 'p' + Date.now(), ...data, createdAt: new Date().toISOString(), read: false });
        save(DB.proposals, list);
        form.reset();
        ok.style.display = 'flex';
        setTimeout(() => { ok.style.display = 'none'; }, 7000);
    });
}


/* =========================================================
   PORTFOLIO
   ========================================================= */
function ytThumb(url) {
    const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : null;
}

function toEmbed(url) {
    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1`;
    const vm = url.match(/vimeo\.com\/(\d+)/);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
    return null;
}

function renderPortfolio() {
    const grid  = $('#portfolioGrid');
    const empty = $('#portfolioEmpty');
    const items = load(DB.portfolio);
    grid.innerHTML = '';

    if (!items.length) {
        empty.classList.add('show');
        return;
    }
    empty.classList.remove('show');

    items.forEach(it => {
        const thumb = it.thumb || ytThumb(it.url);
        const card = document.createElement('article');
        card.className = 'vid-card';
        card.innerHTML = `
            ${thumb
                ? `<img src="${esc(thumb)}" alt="${esc(it.title)}" loading="lazy" />`
                : `<div style="width:100%;height:100%;background:linear-gradient(135deg,#12151d,#1535b8)"></div>`}
            <div class="vid-overlay">
                <div class="vid-title">${esc(it.title)}</div>
                ${it.category ? `<div class="vid-cat">${esc(it.category)}</div>` : ''}
            </div>
            <div class="vid-play">▶</div>
        `;
        card.addEventListener('click', () => openVideoModal(it));
        grid.appendChild(card);
    });
}


/* =========================================================
   VIDEO MODAL
   ========================================================= */
function openVideoModal(it) {
    const modal = $('#videoModal');
    const wrap  = $('#playerWrap');
    $('#mTitle').textContent = it.title || '';
    $('#mCat').textContent   = it.category || '';
    $('#mDesc').textContent  = it.description || '';

    wrap.innerHTML = '';
    const embedUrl = toEmbed(it.url);
    if (embedUrl) {
        const f = document.createElement('iframe');
        f.src = embedUrl;
        f.allow = 'autoplay; encrypted-media; fullscreen';
        f.allowFullscreen = true;
        wrap.appendChild(f);
    } else {
        const v = document.createElement('video');
        v.src = it.url; v.controls = true; v.autoplay = true;
        wrap.appendChild(v);
    }
    modal.style.display = 'flex';
}

function initModals() {
    const closeVideo = () => { $('#videoModal').style.display = 'none'; $('#playerWrap').innerHTML = ''; };
    const closeProp  = () => { $('#propModal').style.display = 'none'; };

    $('#videoModalClose').addEventListener('click', closeVideo);
    $('#propModalClose').addEventListener('click', closeProp);
    $('#videoModal').addEventListener('click', e => { if (e.target === $('#videoModal')) closeVideo(); });
    $('#propModal').addEventListener('click', e => { if (e.target === $('#propModal')) closeProp(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeVideo(); closeProp(); } });
}


/* =========================================================
   ADMIN
   ========================================================= */
function initAdmin() {
    const form    = $('#adminLoginForm');
    const pass    = $('#adminPass');
    const errEl   = $('#adminError');
    const enterBtn = form.querySelector('button[type="submit"]');

    function tryLogin() {
        const val = (pass.value || '').trim();
        if (val === PWD) {
            sessionStorage.setItem(DB.admin, '1');
            errEl.style.display = 'none';
            pass.value = '';
            refreshAdmin();
        } else {
            errEl.style.display = 'block';
            errEl.textContent = val ? 'Senha incorreta. Tente novamente.' : 'Digite a senha.';
            pass.value = '';
            pass.focus();
        }
    }

    form.addEventListener('submit', e => { e.preventDefault(); tryLogin(); });
    if (enterBtn) enterBtn.addEventListener('click', e => { e.preventDefault(); tryLogin(); });

    $('#logoutBtn').addEventListener('click', () => {
        sessionStorage.removeItem(DB.admin);
        refreshAdmin();
    });

    // admin sub-tabs
    $$('.atab[data-atab]').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.atab[data-atab]').forEach(b => b.classList.toggle('active', b === btn));
            const key = btn.dataset.atab;
            $$('.admin-sec').forEach(s => s.classList.toggle('active', s.id === 'sec' + cap(key)));
        });
    });

    // add video form
    $('#addVideoForm').addEventListener('submit', e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        const list = load(DB.portfolio);
        list.unshift({ id: 'v' + Date.now(), ...data });
        save(DB.portfolio, list);
        e.target.reset();
        renderPortAdminList();
    });
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function refreshAdmin() {
    const authed = !!sessionStorage.getItem(DB.admin);
    $('#adminLogin').style.display = authed ? 'none' : 'block';
    $('#adminPanel').style.display = authed ? 'block' : 'none';
    if (authed) { renderProposalList(); renderPortAdminList(); }
}

function renderProposalList() {
    const list  = $('#proposalList');
    const empty = $('#propEmpty');
    const items = load(DB.proposals);
    list.innerHTML = '';

    const unread = items.filter(p => !p.read).length;
    $('#badgeCount').textContent = unread;

    if (!items.length) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';

    items.forEach(p => {
        const row = document.createElement('div');
        row.className = 'prop-item' + (p.read ? '' : ' unread');
        const preview = (p.message || '').replace(/\n/g, ' ').slice(0, 100);
        row.innerHTML = `
            <div>
                <div class="prop-from">${esc(p.name || '—')} <span style="color:var(--mute);font-size:.75em">${esc(p.company || p.email || '')}</span></div>
                <div class="prop-preview">${esc(preview)}${preview.length >= 100 ? '…' : ''}</div>
            </div>
            <span class="prop-type">${esc(p.type || '—')}</span>
            <span class="prop-date">${fmtDate(p.createdAt)}</span>
        `;
        row.addEventListener('click', () => openProposal(p.id));
        list.appendChild(row);
    });
}

function openProposal(id) {
    const items = load(DB.proposals);
    const p = items.find(x => x.id === id);
    if (!p) return;
    p.read = true;
    save(DB.proposals, items);

    $('#propDetail').innerHTML = `
        <h3>${esc(p.name || '—')}</h3>
        <p style="font-family:var(--fm);font-size:11px;letter-spacing:.2em;color:var(--beam);text-transform:uppercase;margin-top:4px">${esc(p.type || '—')} · ${fmtDate(p.createdAt)}</p>
        ${p.company ? pdField('Empresa', p.company) : ''}
        ${pdField('E-mail', `<a href="mailto:${esc(p.email)}" style="color:var(--beam)">${esc(p.email)}</a>`)}
        ${p.phone ? pdField('Telefone / WhatsApp', p.phone) : ''}
        ${pdField('Mensagem', `<pre style="white-space:pre-wrap;font-family:var(--fb)">${esc(p.message || '')}</pre>`)}
        <div class="pd-actions">
            <a class="btn btn-primary" href="mailto:${esc(p.email)}?subject=${encodeURIComponent('CRIA Frames — Retorno')}" target="_blank">Responder por E-mail</a>
            ${p.phone ? `<a class="btn btn-outline" href="https://wa.me/${digits(p.phone)}" target="_blank" rel="noopener">WhatsApp</a>` : ''}
            <button class="btn btn-outline" id="delPropBtn" style="border-color:#ff5a5f;color:#ff5a5f">Excluir</button>
        </div>
    `;

    $('#delPropBtn').addEventListener('click', () => {
        if (!confirm('Excluir esta proposta permanentemente?')) return;
        save(DB.proposals, load(DB.proposals).filter(x => x.id !== id));
        $('#propModal').style.display = 'none';
        renderProposalList();
    });

    $('#propModal').style.display = 'flex';
    renderProposalList();
}

function pdField(label, val) {
    return `<div class="pd-field"><div class="pd-label">${label}</div><div class="pd-val">${val}</div></div>`;
}

function renderPortAdminList() {
    const wrap  = $('#portList');
    const items = load(DB.portfolio);
    wrap.innerHTML = items.length
        ? `<h4 style="font-family:var(--fd);font-size:20px;color:var(--bone);letter-spacing:.02em;margin-bottom:16px">Publicados (${items.length})</h4>`
        : '<p style="color:var(--mute);font-size:13px">Nenhum vídeo publicado.</p>';

    items.forEach(it => {
        const thumb = it.thumb || ytThumb(it.url);
        const row = document.createElement('div');
        row.className = 'port-admin-item';
        row.innerHTML = `
            ${thumb ? `<img src="${esc(thumb)}" alt="" />` : `<div style="width:80px;height:45px;background:#12151d"></div>`}
            <div>
                <div class="pai-title">${esc(it.title)}</div>
                <div class="pai-cat">${esc(it.category || '—')}</div>
            </div>
            <button class="btn-del" data-id="${esc(it.id)}">Remover</button>
        `;
        row.querySelector('[data-id]').addEventListener('click', () => {
            if (!confirm('Remover do portfólio?')) return;
            save(DB.portfolio, load(DB.portfolio).filter(x => x.id !== it.id));
            renderPortAdminList();
            renderPortfolio();
        });
        wrap.appendChild(row);
    });
}


/* =========================================================
   UTILS
   ========================================================= */
function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c =>
        ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]);
}
function digits(s) { return String(s || '').replace(/\D/g, ''); }
function fmtDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()} · ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}


/* =========================================================
   BOOT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    initIntro();
    initNav();
    initProposalForm();
    initAdmin();
    initModals();
    renderPortfolio();
});
