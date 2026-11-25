const CONFIG = {
  whatsapp: "5584991421656",
  nome: "Imperium Barber Club",
  slotMin: 30,
  diasAgenda: 14,
  horarios: {
    0: null,
    1: ["09:00", "20:00"],
    2: ["09:00", "20:00"],
    3: ["09:00", "20:00"],
    4: ["09:00", "20:00"],
    5: ["09:00", "20:00"],
    6: ["08:00", "18:00"]
  }
};

const CATEGORIAS = [
  { id: "cabelo", nome: "Cabelo" },
  { id: "barba", nome: "Barba" },
  { id: "combos", nome: "Combos" },
  { id: "quimica", nome: "Química e cor" },
  { id: "tratamentos", nome: "Tratamentos" },
  { id: "extras", nome: "Extras" }
];

const SERVICOS = [
  { id: "corte-social", cat: "cabelo", nome: "Corte social", desc: "Máquina e tesoura, lavagem e finalização.", preco: 40, dur: 30 },
  { id: "degrade", cat: "cabelo", nome: "Degradê / Fade", desc: "Low, mid ou high fade com transição perfeita.", preco: 45, dur: 40, tag: "Mais pedido" },
  { id: "navalhado", cat: "cabelo", nome: "Degradê navalhado", desc: "Fade com acabamento na navalha, pele limpa.", preco: 50, dur: 45 },
  { id: "tesoura", cat: "cabelo", nome: "Corte na tesoura", desc: "Para cabelos médios e longos, com textura.", preco: 55, dur: 45 },
  { id: "maquina", cat: "cabelo", nome: "Corte na máquina", desc: "Mesmo pente na cabeça toda.", preco: 30, dur: 20 },
  { id: "infantil", cat: "cabelo", nome: "Corte infantil", desc: "Até 12 anos, com paciência e carinho.", preco: 35, dur: 30 },
  { id: "pezinho", cat: "cabelo", nome: "Pezinho / acabamento", desc: "Contorno e nuca entre um corte e outro.", preco: 15, dur: 15 },
  { id: "freestyle", cat: "cabelo", nome: "Risco / Freestyle", desc: "Desenhos simples ou artísticos na lateral.", preco: 15, dur: 15 },

  { id: "barba", cat: "barba", nome: "Barba tradicional", desc: "Modelagem, navalha e pós-barba.", preco: 35, dur: 30 },
  { id: "barba-toalha", cat: "barba", nome: "Barba com toalha quente", desc: "Ritual completo com óleo, toalha quente e massagem.", preco: 45, dur: 40, tag: "Experiência" },
  { id: "barba-pig", cat: "barba", nome: "Pigmentação de barba", desc: "Preenche falhas e realça o desenho.", preco: 30, dur: 20 },
  { id: "barba-acab", cat: "barba", nome: "Contorno de barba", desc: "Só o alinhamento das linhas.", preco: 20, dur: 15 },
  { id: "bigode", cat: "barba", nome: "Bigode", desc: "Aparo e modelagem do bigode.", preco: 15, dur: 10 },

  { id: "combo-classico", cat: "combos", nome: "Corte + Barba", desc: "O clássico da casa com economia.", preco: 75, de: 80, dur: 60, tag: "Economize" },
  { id: "combo-completo", cat: "combos", nome: "Corte + Barba + Sobrancelha", desc: "Visual completo alinhado.", preco: 85, de: 95, dur: 70 },
  { id: "combo-imperial", cat: "combos", nome: "Combo Imperial", desc: "Corte, barba com toalha quente, sobrancelha e hidratação.", preco: 120, de: 145, dur: 90, tag: "Premium" },
  { id: "combo-pai-filho", cat: "combos", nome: "Pai e filho", desc: "Corte adulto + corte infantil.", preco: 65, de: 75, dur: 60 },
  { id: "dia-noivo", cat: "combos", nome: "Dia do noivo", desc: "Corte, barba, limpeza de pele, hidratação, manicure e espumante.", preco: 280, dur: 150, tag: "Especial" },

  { id: "platinado", cat: "quimica", nome: "Platinado / Nevou", desc: "Descoloração global com matização.", preco: 150, dur: 120 },
  { id: "luzes", cat: "quimica", nome: "Luzes", desc: "Mechas finas ou marcadas na touca.", preco: 120, dur: 90 },
  { id: "pigmentacao", cat: "quimica", nome: "Pigmentação capilar", desc: "Disfarça falhas e fios brancos.", preco: 40, dur: 30 },
  { id: "progressiva", cat: "quimica", nome: "Selagem / Progressiva", desc: "Reduz volume e frizz por semanas.", preco: 100, dur: 90 },
  { id: "relaxamento", cat: "quimica", nome: "Relaxamento", desc: "Diminui o volume mantendo o movimento.", preco: 60, dur: 45 },
  { id: "botox", cat: "quimica", nome: "Botox capilar", desc: "Reposição de massa e brilho intenso.", preco: 80, dur: 60 },

  { id: "hidratacao", cat: "tratamentos", nome: "Hidratação capilar", desc: "Máscara profissional e vapor de ozônio.", preco: 35, dur: 25 },
  { id: "limpeza", cat: "tratamentos", nome: "Limpeza de pele", desc: "Esfoliação, extração e máscara facial.", preco: 70, dur: 50 },
  { id: "black-mask", cat: "tratamentos", nome: "Black mask", desc: "Remove cravos e controla a oleosidade.", preco: 25, dur: 15 },
  { id: "massagem", cat: "tratamentos", nome: "Massagem relaxante", desc: "Cabeça, pescoço e ombros com óleos.", preco: 40, dur: 20 },
  { id: "terapia-capilar", cat: "tratamentos", nome: "Terapia antiqueda", desc: "Tônico, alta frequência e massagem.", preco: 60, dur: 40 },

  { id: "sobrancelha", cat: "extras", nome: "Sobrancelha", desc: "Na navalha ou na pinça.", preco: 15, dur: 10 },
  { id: "depilacao-nariz", cat: "extras", nome: "Depilação nariz / orelha", desc: "Com cera própria, rápida e segura.", preco: 20, dur: 10 },
  { id: "lavagem", cat: "extras", nome: "Lavagem + finalização", desc: "Shampoo, condicionador e pomada.", preco: 20, dur: 15 },
  { id: "manicure", cat: "extras", nome: "Mão masculina", desc: "Corte, lixa e cutícula.", preco: 30, dur: 30 }
];

const BARBEIROS = [
  { id: "rafael", nome: "Rafael Costa", cargo: "Barbeiro master e fundador", nivel: "Master", anos: 12, nota: 5.0, folga: null, tags: ["Navalhado", "Barba", "Dia do noivo"], bio: "Referência em degradê e barba clássica." },
  { id: "diego", nome: "Diego Almeida", cargo: "Especialista em fade", nivel: "Sênior", anos: 8, nota: 4.9, folga: 1, tags: ["Fade", "Freestyle", "Risco"], bio: "Transições limpas e desenhos criativos." },
  { id: "bruno", nome: "Bruno Martins", cargo: "Colorista e visagista", nivel: "Sênior", anos: 7, nota: 4.9, folga: 3, tags: ["Platinado", "Luzes", "Tesoura"], bio: "Cor, química e cortes na tesoura." },
  { id: "lucas", nome: "Lucas Oliveira", cargo: "Barbeiro", nivel: "Pleno", anos: 4, nota: 4.8, folga: 5, tags: ["Social", "Infantil", "Barba"], bio: "Paciência de sobra com a criançada." }
];

const DEPOIMENTOS = [
  { nome: "Thiago Rocha", info: "Cliente há 3 anos", texto: "Melhor barbearia que já frequentei. O Rafael entende exatamente o que eu quero sem precisar explicar duas vezes. Ambiente top e sempre pontual." },
  { nome: "Marcelo Lima", info: "Plano Clássico", texto: "Assinei o plano e não troco mais. Venho toda semana, cabelo e barba sempre alinhados e ainda tomo uma cerveja gelada enquanto espero." },
  { nome: "Felipe Andrade", info: "Dia do noivo", texto: "Fiz o Dia do Noivo com meus padrinhos e foi uma experiência incrível. Atendimento impecável, todo mundo saiu bonito nas fotos." },
  { nome: "Gustavo Henrique", info: "Cliente há 1 ano", texto: "O agendamento pelo site é muito prático, escolho o horário e o barbeiro em segundos. O degradê do Diego é outro nível." },
  { nome: "André Souza", info: "Pai do Davi, 6 anos", texto: "Meu filho tinha pavor de cortar o cabelo. Com o Lucas ele vai feliz e ainda pede para voltar. Recomendo demais." },
  { nome: "Rodrigo Nunes", info: "Platinado", texto: "Fiz o platinado com o Bruno e ficou perfeito, sem amarelar e sem agredir o couro cabeludo. Profissional demais." }
];

const PRODUTOS = [
  { nome: "Pomada Matte", cat: "Cabelo", desc: "Fixação forte e efeito seco, sem brilho.", preco: 49.9, tipo: "" },
  { nome: "Óleo para Barba", cat: "Barba", desc: "Amadeirado, hidrata e amacia os fios.", preco: 39.9, tipo: "bottle" },
  { nome: "Balm Modelador", cat: "Barba", desc: "Modela, nutre e controla os fios rebeldes.", preco: 44.9, tipo: "" },
  { nome: "Shampoo 3 em 1", cat: "Cabelo e barba", desc: "Limpa cabelo, barba e corpo com mentol.", preco: 54.9, tipo: "tube" },
  { nome: "Minoxidil Kit", cat: "Crescimento", desc: "Estimula o crescimento da barba. 60 dias.", preco: 89.9, tipo: "bottle" },
  { nome: "Pomada Brilho", cat: "Cabelo", desc: "Efeito molhado, ideal para penteados clássicos.", preco: 44.9, tipo: "" },
  { nome: "Pós-barba Calmante", cat: "Barba", desc: "Alivia ardência e previne irritação.", preco: 34.9, tipo: "tube" },
  { nome: "Kit Imperial", cat: "Kit presente", desc: "Pomada, óleo, balm e pente de madeira.", preco: 149.9, tipo: "" }
];

const FAQ = [
  { p: "Preciso agendar ou posso ir sem horário?", r: "Atendemos por ordem de chegada quando há encaixe, mas recomendamos agendar pelo site para garantir seu horário sem espera." },
  { p: "Qual a tolerância de atraso?", r: "Temos tolerância de 10 minutos. Depois disso o horário pode ser remanejado para não atrasar os próximos clientes." },
  { p: "Como cancelo ou remarco um horário?", r: "Na seção de agendamento aparecem seus próximos horários com a opção de cancelar. Também é possível remarcar pelo WhatsApp com até 2 horas de antecedência." },
  { p: "Quais formas de pagamento vocês aceitam?", r: "Pix, dinheiro, cartão de débito e crédito. Parcelamos em até 3x sem juros em serviços acima de R$ 150." },
  { p: "Como funcionam os planos de assinatura?", r: "Você paga um valor fixo mensal no cartão e usa os serviços do plano quantas vezes quiser, respeitando um intervalo mínimo de 5 dias entre cortes. Não há fidelidade." },
  { p: "Vocês atendem crianças?", r: "Sim, a partir de 2 anos. Temos cadeira especial e profissionais acostumados com os pequenos." },
  { p: "Fazem atendimento para eventos e casamentos?", r: "Sim. Temos o pacote Dia do Noivo e também atendemos padrinhos e grupos com espaço reservado. Fale com a gente pelo WhatsApp." },
  { p: "Tem estacionamento?", r: "Sim, estacionamento próprio e gratuito para clientes durante o atendimento." }
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const pad = n => String(n).padStart(2, "0");
const toMin = h => { const [a, b] = h.split(":").map(Number); return a * 60 + b; };
const toHora = m => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
const isoDate = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseISO = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const DIAS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const iniciais = nome => nome.split(" ").map(p => p[0]).slice(0, 2).join("");
const durTexto = m => m < 60 ? `${m} min` : `${Math.floor(m / 60)}h${m % 60 ? pad(m % 60) : ""}`;

const ICON_CLOCK = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
const ICON_CHECK = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

function whatsLink(msg) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("is-show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("is-show"), 3200);
}

const store = {
  key: "imperium_agendamentos",
  get() {
    try { return JSON.parse(localStorage.getItem(this.key)) || []; } catch { return []; }
  },
  set(list) {
    try { localStorage.setItem(this.key, JSON.stringify(list)); } catch {}
  }
};

function initHeader() {
  const header = $("#header");
  const burger = $("#burger");
  const nav = $("#nav");

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
    document.body.classList.toggle("no-scroll", open);
  });

  $$("a", nav).forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", false);
    document.body.classList.remove("no-scroll");
  }));

  const links = $$('a[href^="#"]:not(.btn)', nav);
  const sections = links.map(a => $(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle("is-current", l.getAttribute("href") === `#${e.target.id}`));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));
}

function initStatus() {
  const el = $("#statusAgora");
  const now = new Date();
  const h = CONFIG.horarios[now.getDay()];
  const m = now.getHours() * 60 + now.getMinutes();
  if (h && m >= toMin(h[0]) && m < toMin(h[1])) {
    el.textContent = `Aberto agora · fecha às ${h[1].replace(":00", "h")}`;
    el.classList.add("is-open");
  } else {
    el.textContent = "Fechado agora · agende online 24h";
    el.classList.add("is-closed");
  }

  const list = $("#hoursList");
  const ordem = [1, 2, 3, 4, 5, 6, 0];
  list.innerHTML = ordem.map(d => {
    const h = CONFIG.horarios[d];
    const cls = [d === now.getDay() ? "is-today" : "", !h ? "is-closed" : ""].join(" ");
    return `<li class="${cls}"><span>${DIAS[d]}${d === now.getDay() ? " (hoje)" : ""}</span><span>${h ? `${h[0]} às ${h[1]}` : "Fechado"}</span></li>`;
  }).join("");
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12 });
  $$(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });
}

function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const alvo = parseFloat(el.dataset.count);
      const dec = Number(el.dataset.decimal || 0);
      const ini = performance.now();
      const tick = t => {
        const p = Math.min((t - ini) / 1800, 1);
        const v = alvo * (1 - Math.pow(1 - p, 3));
        el.textContent = dec ? v.toFixed(dec).replace(".", ",") : Math.round(v).toLocaleString("pt-BR") + (alvo > 1000 && p === 1 ? "+" : "");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: .6 });
  $$("[data-count]").forEach(el => io.observe(el));
}

function initServicos() {
  const tabs = $("#serviceTabs");
  const list = $("#priceList");

  tabs.innerHTML = CATEGORIAS.map((c, i) =>
    `<button class="tab${i === 0 ? " is-active" : ""}" role="tab" data-cat="${c.id}">${c.nome}</button>`
  ).join("");

  const render = cat => {
    list.innerHTML = SERVICOS.filter(s => s.cat === cat).map((s, i) => `
      <div class="price-item" data-id="${s.id}" style="animation-delay:${i * 50}ms" title="Agendar ${s.nome}">
        <div class="price-item__name">${s.nome}${s.tag ? `<span class="price-item__tag">${s.tag}</span>` : ""}</div>
        <div class="price-item__price">${s.de ? `<small>${brl(s.de)}</small>` : ""}${brl(s.preco)}</div>
        <div class="price-item__desc">${s.desc}</div>
        <div class="price-item__dur">${ICON_CLOCK}${durTexto(s.dur)}</div>
      </div>`).join("");
  };

  render(CATEGORIAS[0].id);

  tabs.addEventListener("click", e => {
    const b = e.target.closest(".tab");
    if (!b) return;
    $$(".tab", tabs).forEach(t => t.classList.toggle("is-active", t === b));
    render(b.dataset.cat);
  });

  list.addEventListener("click", e => {
    const item = e.target.closest(".price-item");
    if (!item) return;
    Booking.preselecionarServico(item.dataset.id);
  });
}

function initEquipe() {
  $("#teamGrid").innerHTML = BARBEIROS.map(b => `
    <article class="barber reveal">
      <div class="barber__photo">
        <span class="barber__level">${b.nivel}</span>
        <span class="barber__initials">${iniciais(b.nome)}</span>
      </div>
      <div class="barber__body">
        <h3>${b.nome}</h3>
        <p class="barber__role">${b.cargo}</p>
        <div class="barber__meta"><span><b>${b.anos}</b> anos de profissão</span><span><b>${b.nota.toFixed(1).replace(".", ",")}</b> / 5</span></div>
        <div class="barber__tags">${b.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <button class="btn btn--ghost btn--block" data-barber="${b.id}">Agendar com ${b.nome.split(" ")[0]}</button>
      </div>
    </article>`).join("");

  $("#teamGrid").addEventListener("click", e => {
    const b = e.target.closest("[data-barber]");
    if (b) Booking.preselecionarBarbeiro(b.dataset.barber);
  });
}

const Booking = {
  state: { servicos: new Set(), barbeiro: null, data: null, hora: null },
  step: 1,

  init() {
    this.renderServicos();
    this.renderBarbeiros();
    this.renderDatas();
    this.renderMeus();
    this.go(1);

    $("#btnNext").addEventListener("click", () => this.next());
    $("#btnPrev").addEventListener("click", () => this.go(this.step - 1));
    $("#newBooking").addEventListener("click", () => this.reset());

    const tel = $("#fTel");
    tel.addEventListener("input", () => {
      let v = tel.value.replace(/\D/g, "").slice(0, 11);
      if (v.length > 10) v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      else if (v.length > 6) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
      else if (v.length) v = v.replace(/(\d{0,2})/, "($1");
      tel.value = v;
    });

    $("#myBookingsList").addEventListener("click", e => {
      const b = e.target.closest("[data-cancel]");
      if (!b) return;
      const list = store.get().filter(x => x.id !== b.dataset.cancel);
      store.set(list);
      this.renderMeus();
      if (this.state.data) this.renderSlots();
      toast("Agendamento cancelado.");
    });
  },

  servicosSel() {
    return SERVICOS.filter(s => this.state.servicos.has(s.id));
  },

  duracao() {
    const total = this.servicosSel().reduce((a, s) => a + s.dur, 0);
    return Math.ceil(total / CONFIG.slotMin) * CONFIG.slotMin;
  },

  renderServicos() {
    const wrap = $("#pickServices");
    wrap.innerHTML = CATEGORIAS.map(c => `
      <div class="pick-group">
        <h5>${c.nome}</h5>
        <div class="pick-group__list">
          ${SERVICOS.filter(s => s.cat === c.id).map(s => `
            <button type="button" class="opt-card" data-id="${s.id}">
              <span class="opt-card__check">${ICON_CHECK}</span>
              <span class="opt-card__info"><strong>${s.nome}</strong><span>${durTexto(s.dur)}</span></span>
              <span class="opt-card__price">${brl(s.preco)}</span>
            </button>`).join("")}
        </div>
      </div>`).join("");

    wrap.addEventListener("click", e => {
      const card = e.target.closest(".opt-card");
      if (!card) return;
      const id = card.dataset.id;
      this.state.servicos.has(id) ? this.state.servicos.delete(id) : this.state.servicos.add(id);
      card.classList.toggle("is-selected", this.state.servicos.has(id));
      this.state.hora = null;
      this.updateSummary();
    });
  },

  renderBarbeiros() {
    const wrap = $("#pickBarbers");
    const qualquer = `
      <button type="button" class="opt-card barber-opt" data-id="any">
        <span class="opt-card__check">${ICON_CHECK}</span>
        <span class="barber-opt__top">
          <span class="barber-opt__avatar barber-opt__any"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9" r="2.6"/><path d="M3 20a6 6 0 0112 0M15 20a4.5 4.5 0 016-4.2"/></svg></span>
          <span class="opt-card__info"><strong>Sem preferência</strong><span>Mais horários livres</span></span>
        </span>
        <p>Atendimento com o primeiro profissional disponível.</p>
      </button>`;
    wrap.innerHTML = qualquer + BARBEIROS.map(b => `
      <button type="button" class="opt-card barber-opt" data-id="${b.id}">
        <span class="opt-card__check">${ICON_CHECK}</span>
        <span class="barber-opt__top">
          <span class="barber-opt__avatar">${iniciais(b.nome)}</span>
          <span class="opt-card__info"><strong>${b.nome}</strong><span>${b.nivel} · nota ${b.nota.toFixed(1).replace(".", ",")}</span></span>
        </span>
        <p>${b.bio}${b.folga !== null ? ` Folga às ${DIAS[b.folga].toLowerCase()}s.` : ""}</p>
      </button>`).join("");

    wrap.addEventListener("click", e => {
      const card = e.target.closest(".opt-card");
      if (!card) return;
      this.selBarbeiro(card.dataset.id);
    });
  },

  selBarbeiro(id) {
    this.state.barbeiro = id;
    this.state.hora = null;
    $$("#pickBarbers .opt-card").forEach(c => c.classList.toggle("is-selected", c.dataset.id === id));
    this.renderDatas();
    this.updateSummary();
  },

  renderDatas() {
    const wrap = $("#dates");
    const hoje = new Date();
    const dias = [];
    for (let i = 0; i < CONFIG.diasAgenda; i++) {
      const d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + i);
      dias.push(d);
    }
    wrap.innerHTML = dias.map((d, i) => {
      const iso = isoDate(d);
      const fechado = !CONFIG.horarios[d.getDay()] || this.barbeirosDoDia(d).length === 0;
      const label = i === 0 ? "Hoje" : i === 1 ? "Amanhã" : DIAS[d.getDay()].slice(0, 3);
      return `<button type="button" class="date-btn${this.state.data === iso ? " is-selected" : ""}" data-date="${iso}" ${fechado ? "disabled" : ""}>
        <small>${label}</small><strong>${pad(d.getDate())}</strong><em>${fechado ? "Fechado" : MESES[d.getMonth()]}</em>
      </button>`;
    }).join("");

    if (this.state.data && $(`[data-date="${this.state.data}"]`, wrap)?.disabled) this.state.data = null;

    wrap.onclick = e => {
      const b = e.target.closest(".date-btn");
      if (!b || b.disabled) return;
      this.state.data = b.dataset.date;
      this.state.hora = null;
      $$(".date-btn", wrap).forEach(x => x.classList.toggle("is-selected", x === b));
      this.renderSlots();
      this.updateSummary();
    };

    this.renderSlots();
  },

  barbeirosDoDia(date) {
    const dow = date.getDay();
    const todos = BARBEIROS.filter(b => b.folga !== dow);
    if (!this.state.barbeiro || this.state.barbeiro === "any") return todos;
    return todos.filter(b => b.id === this.state.barbeiro);
  },

  ocupadoFake(barbeiroId, iso, min) {
    let h = 0;
    const s = `${barbeiroId}|${iso}|${min}`;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return (h % 100) < 32;
  },

  livre(barbeiroId, iso, ini, dur) {
    const reservas = store.get().filter(r => r.barbeiro === barbeiroId && r.data === iso);
    for (let m = ini; m < ini + dur; m += CONFIG.slotMin) {
      if (this.ocupadoFake(barbeiroId, iso, m)) return false;
      if (reservas.some(r => m >= toMin(r.hora) && m < toMin(r.hora) + r.dur)) return false;
    }
    return true;
  },

  disponiveisNoHorario(iso, ini, dur) {
    return this.barbeirosDoDia(parseISO(iso)).filter(b => this.livre(b.id, iso, ini, dur));
  },

  renderSlots() {
    const wrap = $("#slots");
    if (!this.state.data) {
      wrap.innerHTML = `<div class="slots__empty">Selecione um dia para ver os horários disponíveis.</div>`;
      return;
    }
    const date = parseISO(this.state.data);
    const [abre, fecha] = CONFIG.horarios[date.getDay()].map(toMin);
    const dur = this.duracao() || CONFIG.slotMin;
    const agora = new Date();
    const ehHoje = isoDate(agora) === this.state.data;
    const minAgora = agora.getHours() * 60 + agora.getMinutes() + 30;

    const grupos = { "Manhã": [], "Tarde": [], "Noite": [] };
    let livres = 0;
    for (let m = abre; m + dur <= fecha; m += CONFIG.slotMin) {
      const passou = ehHoje && m < minAgora;
      const ok = !passou && this.disponiveisNoHorario(this.state.data, m, dur).length > 0;
      if (ok) livres++;
      const g = m < 720 ? "Manhã" : m < 1080 ? "Tarde" : "Noite";
      const hora = toHora(m);
      grupos[g].push(`<button type="button" class="slot${this.state.hora === hora ? " is-selected" : ""}" data-hora="${hora}" ${ok ? "" : "disabled"}>${hora}</button>`);
    }

    if (!livres) {
      wrap.innerHTML = `<div class="slots__empty">Sem horários livres neste dia para a duração escolhida. Tente outro dia ou outro profissional.</div>`;
      return;
    }

    wrap.innerHTML = Object.entries(grupos)
      .filter(([, v]) => v.length)
      .map(([k, v]) => `<div class="slots__group">${k}</div>${v.join("")}`).join("");

    wrap.onclick = e => {
      const b = e.target.closest(".slot");
      if (!b || b.disabled) return;
      this.state.hora = b.dataset.hora;
      $$(".slot", wrap).forEach(x => x.classList.toggle("is-selected", x === b));
      this.updateSummary();
    };
  },

  nomeBarbeiro(id) {
    if (!id) return "-";
    if (id === "any") return "Sem preferência";
    return BARBEIROS.find(b => b.id === id)?.nome || "-";
  },

  dataExtenso(iso) {
    const d = parseISO(iso);
    return `${DIAS[d.getDay()]}, ${pad(d.getDate())} de ${MESES[d.getMonth()]}`;
  },

  updateSummary() {
    const sel = this.servicosSel();
    $("#sumItems").innerHTML = sel.length
      ? sel.map(s => `<li><span>${s.nome}</span><span>${brl(s.preco)}</span></li>`).join("")
      : `<li class="empty">Nenhum serviço selecionado</li>`;
    $("#sumBarber").textContent = this.nomeBarbeiro(this.state.barbeiro);
    $("#sumDate").textContent = this.state.data ? this.dataExtenso(this.state.data) : "-";
    $("#sumTime").textContent = this.state.hora || "-";
    $("#sumDur").textContent = sel.length ? durTexto(sel.reduce((a, s) => a + s.dur, 0)) : "-";
    $("#sumTotal").textContent = brl(sel.reduce((a, s) => a + s.preco, 0));
  },

  validar(step) {
    if (step === 1 && !this.state.servicos.size) return "Escolha pelo menos um serviço.";
    if (step === 2 && !this.state.barbeiro) return "Escolha um profissional ou \"Sem preferência\".";
    if (step === 3 && !this.state.data) return "Escolha um dia.";
    if (step === 3 && !this.state.hora) return "Escolha um horário.";
    if (step === 4) {
      const nome = $("#fNome");
      const tel = $("#fTel");
      nome.classList.toggle("is-invalid", nome.value.trim().length < 3);
      tel.classList.toggle("is-invalid", tel.value.replace(/\D/g, "").length < 10);
      if (nome.value.trim().length < 3) return "Informe seu nome.";
      if (tel.value.replace(/\D/g, "").length < 10) return "Informe um WhatsApp válido com DDD.";
    }
    return null;
  },

  next() {
    const erro = this.validar(this.step);
    if (erro) {
      if (this.step === 4) $("#formError").textContent = erro;
      toast(erro);
      return;
    }
    $("#formError").textContent = "";
    if (this.step === 4) return this.confirmar();
    if (this.step === 2) this.renderDatas();
    this.go(this.step + 1);
  },

  go(n) {
    if (n < 1) return;
    this.step = n;
    $$(".step-panel").forEach(p => p.classList.toggle("is-active", Number(p.dataset.step) === n));
    $$("#steps li").forEach((li, i) => {
      li.classList.toggle("is-active", i + 1 === n);
      li.classList.toggle("is-done", i + 1 < n);
    });
    $("#btnPrev").classList.toggle("is-hidden", n === 1);
    $("#btnNext").textContent = n === 4 ? "Confirmar agendamento" : "Continuar";
    $("#bookingNav").classList.toggle("is-hidden", n === 5);
    if (n === 3) this.renderSlots();
  },

  confirmar() {
    const { data, hora } = this.state;
    const dur = this.duracao();
    let barbeiroId = this.state.barbeiro;

    if (barbeiroId === "any") {
      const livres = this.disponiveisNoHorario(data, toMin(hora), dur);
      if (!livres.length) {
        toast("Esse horário acabou de ser ocupado. Escolha outro.");
        return this.go(3);
      }
      barbeiroId = livres[0].id;
    } else if (!this.livre(barbeiroId, data, toMin(hora), dur)) {
      toast("Esse horário acabou de ser ocupado. Escolha outro.");
      return this.go(3);
    }

    const sel = this.servicosSel();
    const total = sel.reduce((a, s) => a + s.preco, 0);
    const reserva = {
      id: Date.now().toString(36),
      barbeiro: barbeiroId,
      data, hora, dur,
      servicos: sel.map(s => s.nome),
      total,
      nome: $("#fNome").value.trim(),
      tel: $("#fTel").value
    };
    store.set([...store.get(), reserva]);

    const obs = $("#fObs").value.trim();
    const msg = [
      `Olá! Gostaria de confirmar meu agendamento na ${CONFIG.nome}.`,
      "",
      `Nome: ${reserva.nome}`,
      `WhatsApp: ${reserva.tel}`,
      `Serviços: ${reserva.servicos.join(", ")}`,
      `Profissional: ${this.nomeBarbeiro(barbeiroId)}`,
      `Data: ${this.dataExtenso(data)}`,
      `Horário: ${hora}`,
      `Total: ${brl(total)}`,
      obs ? `Observações: ${obs}` : null,
      $("#fLembrete").checked ? "Quero lembrete 1h antes." : null
    ].filter(l => l !== null).join("\n");

    const link = whatsLink(msg);
    $("#doneWhats").href = link;
    $("#doneText").textContent = `${reserva.nome.split(" ")[0]}, seu horário com ${this.nomeBarbeiro(barbeiroId).split(" ")[0]} está reservado para ${this.dataExtenso(data).toLowerCase()} às ${hora}. Abrimos o WhatsApp para você enviar a confirmação.`;
    this.go(5);
    this.renderMeus();
    window.open(link, "_blank", "noopener");
  },

  reset() {
    this.state = { servicos: new Set(), barbeiro: null, data: null, hora: null };
    $$("#pickServices .opt-card, #pickBarbers .opt-card").forEach(c => c.classList.remove("is-selected"));
    $("#bookingForm").reset();
    this.renderDatas();
    this.updateSummary();
    this.go(1);
  },

  renderMeus() {
    const agora = new Date();
    const futuros = store.get()
      .filter(r => new Date(`${r.data}T${r.hora}`) > agora)
      .sort((a, b) => (a.data + a.hora).localeCompare(b.data + b.hora));
    const box = $("#myBookings");
    box.hidden = !futuros.length;
    $("#myBookingsList").innerHTML = futuros.map(r => `
      <li>
        <span><strong>${this.dataExtenso(r.data)} · ${r.hora}</strong> com ${this.nomeBarbeiro(r.barbeiro)}<br>${r.servicos.join(", ")} · ${brl(r.total)}</span>
        <button type="button" data-cancel="${r.id}">Cancelar</button>
      </li>`).join("");
  },

  irPara() {
    $("#agendar").scrollIntoView({ behavior: "smooth" });
  },

  preselecionarServico(id) {
    if (this.step === 5) this.reset();
    this.state.servicos.add(id);
    $(`#pickServices .opt-card[data-id="${id}"]`)?.classList.add("is-selected");
    this.state.hora = null;
    this.updateSummary();
    this.go(1);
    this.irPara();
    toast(`${SERVICOS.find(s => s.id === id).nome} adicionado ao agendamento.`);
  },

  preselecionarBarbeiro(id) {
    if (this.step === 5) this.reset();
    this.selBarbeiro(id);
    this.go(this.state.servicos.size ? 3 : 1);
    this.irPara();
    toast(`Profissional: ${this.nomeBarbeiro(id)}.`);
  }
};

function initGaleria() {
  const filtros = $("#galleryFilters");
  const itens = $$(".g-item");

  filtros.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    $$("button", filtros).forEach(x => x.classList.toggle("is-active", x === b));
    itens.forEach(i => i.classList.toggle("is-hidden", b.dataset.filter !== "todos" && i.dataset.cat !== b.dataset.filter));
  });

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `<button class="lightbox__close" aria-label="Fechar">&times;</button><div><div class="lightbox__img"></div><p class="lightbox__cap"></p></div>`;
  document.body.appendChild(lb);

  const fechar = () => { lb.classList.remove("is-open"); document.body.classList.remove("no-scroll"); };
  itens.forEach(i => i.addEventListener("click", () => {
    $(".lightbox__img", lb).style.backgroundImage = getComputedStyle(i).getPropertyValue("--img");
    $(".lightbox__cap", lb).textContent = $("figcaption", i).textContent;
    lb.classList.add("is-open");
    document.body.classList.add("no-scroll");
  }));
  lb.addEventListener("click", e => { if (e.target === lb || e.target.closest(".lightbox__close")) fechar(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") fechar(); });
}

function initDepoimentos() {
  const track = $("#sliderTrack");
  const dots = $("#sliderDots");
  track.innerHTML = DEPOIMENTOS.map(d => `
    <div class="testi">
      <div class="testi__card">
        <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <p>${d.texto}</p>
        <div class="testi__who"><i>${iniciais(d.nome)}</i><div><strong>${d.nome}</strong><span>${d.info}</span></div></div>
      </div>
    </div>`).join("");

  let idx = 0;
  let timer;
  const porTela = () => window.innerWidth <= 680 ? 1 : window.innerWidth <= 960 ? 2 : 3;
  const paginas = () => Math.ceil(DEPOIMENTOS.length / porTela());

  const renderDots = () => {
    dots.innerHTML = Array.from({ length: paginas() }, (_, i) => `<button aria-label="Página ${i + 1}" data-i="${i}" class="${i === idx ? "is-active" : ""}"></button>`).join("");
  };

  const ir = i => {
    idx = (i + paginas()) % paginas();
    const desloc = Math.min(idx * porTela(), DEPOIMENTOS.length - porTela());
    track.style.transform = `translateX(-${desloc * (100 / porTela())}%)`;
    $$("button", dots).forEach((b, j) => b.classList.toggle("is-active", j === idx));
  };

  const auto = () => { clearInterval(timer); timer = setInterval(() => ir(idx + 1), 5500); };

  dots.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    ir(Number(b.dataset.i));
    auto();
  });

  let x0 = null;
  track.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { ir(idx + (dx < 0 ? 1 : -1)); auto(); }
    x0 = null;
  });

  window.addEventListener("resize", () => { idx = 0; renderDots(); ir(0); });
  renderDots();
  auto();
}

function initProdutos() {
  const grid = $("#productsGrid");
  grid.innerHTML = PRODUTOS.map((p, i) => `
    <article class="product reveal">
      <div class="product__visual"><span class="product__jar${p.tipo ? ` product__jar--${p.tipo}` : ""}"></span></div>
      <span class="product__cat">${p.cat}</span>
      <h4>${p.nome}</h4>
      <p>${p.desc}</p>
      <div class="product__foot"><strong>${brl(p.preco)}</strong><button type="button" data-prod="${i}">Reservar</button></div>
    </article>`).join("");

  grid.addEventListener("click", e => {
    const b = e.target.closest("[data-prod]");
    if (!b) return;
    const p = PRODUTOS[b.dataset.prod];
    window.open(whatsLink(`Olá! Quero reservar o produto ${p.nome} (${brl(p.preco)}) para retirar na barbearia.`), "_blank", "noopener");
  });
}

function initFaq() {
  const list = $("#faqList");
  list.innerHTML = FAQ.map((f, i) => `
    <div class="acc-item${i === 0 ? " is-open" : ""}">
      <button type="button" aria-expanded="${i === 0}">${f.p}<i></i></button>
      <div class="acc-item__body"><div><p>${f.r}</p></div></div>
    </div>`).join("");

  list.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    const item = b.parentElement;
    const abrir = !item.classList.contains("is-open");
    $$(".acc-item", list).forEach(x => {
      x.classList.remove("is-open");
      $("button", x).setAttribute("aria-expanded", false);
    });
    if (abrir) {
      item.classList.add("is-open");
      b.setAttribute("aria-expanded", true);
    }
  });
}

function initContato() {
  $("#contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const nome = $("#cNome");
    const msg = $("#cMsg");
    const err = $("#contactError");
    nome.classList.toggle("is-invalid", !nome.value.trim());
    msg.classList.toggle("is-invalid", !msg.value.trim());
    if (!nome.value.trim() || !msg.value.trim()) {
      err.textContent = "Preencha seu nome e a mensagem.";
      return;
    }
    err.textContent = "";
    const texto = `Olá! Meu nome é ${nome.value.trim()}.\nAssunto: ${$("#cAssunto").value}\n\n${msg.value.trim()}`;
    window.open(whatsLink(texto), "_blank", "noopener");
    e.target.reset();
    toast("Mensagem pronta no WhatsApp.");
  });

  $$("[data-whats]").forEach(a => {
    a.href = whatsLink(a.dataset.whats);
    a.target = "_blank";
    a.rel = "noopener";
  });

  $$("[data-plan]").forEach(a => {
    a.href = whatsLink(`Olá! Tenho interesse no plano ${a.dataset.plan} da ${CONFIG.nome}. Como faço para assinar?`);
    a.target = "_blank";
    a.rel = "noopener";
  });

  $("#year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initStatus();
  initServicos();
  initEquipe();
  Booking.init();
  initGaleria();
  initDepoimentos();
  initProdutos();
  initFaq();
  initContato();
  initReveal();
  initCounters();
});
