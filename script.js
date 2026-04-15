/* ── DADOS DOS LABORATÓRIOS ── */

const DIS = 'disp';
const IND = 'indisp';

const labs = [
  // ── BLOCO A ──
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'A', lab:'LAB 5',  local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'A', lab:'CEAD',   local:'Bloco A, 2º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'CEAD',   local:'Bloco A, 2º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'A', lab:'CEAD',   local:'Bloco A, 2º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  // ── BLOCO EF ──
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 4º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 4º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 4º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 4º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 4º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 4º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, 4º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, 4º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, 4º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 2º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 2º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 2º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
];

/* ── DATAS DAS COLUNAS (fuso Brasília UTC-3) ── */
const DATAS_COLS = [
  new Date('2026-04-22T00:00:00-03:00'),
  new Date('2026-04-23T00:00:00-03:00'),
  new Date('2026-04-24T00:00:00-03:00'),
  new Date('2026-04-25T00:00:00-03:00'),
  new Date('2026-04-27T00:00:00-03:00'),
  new Date('2026-04-28T00:00:00-03:00'),
];

/* Retorna a data de hoje no fuso Brasília (UTC-3), zerando horas */
function hojeEmBrasilia() {
  const agora = new Date();
  // Offset em ms para UTC-3
  const offsetMs = -3 * 60 * 60 * 1000;
  const brasiliaMs = agora.getTime() + (agora.getTimezoneOffset() * 60 * 1000) + offsetMs;
  const d = new Date(brasiliaMs);
  d.setHours(0, 0, 0, 0);
  return d;
}

/* Para cada coluna: 'passado' | 'hoje' | 'futuro' */
function calcularEstadoColunas() {
  const hoje = hojeEmBrasilia();
  return DATAS_COLS.map(data => {
    const d = new Date(data);
    d.setHours(0, 0, 0, 0);
    if (d < hoje)  return 'passado';
    if (d.getTime() === hoje.getTime()) return 'hoje';
    return 'futuro';
  });
}

/* ── ESTADO DOS FILTROS ── */
let filtroBloco = 'todos';
let filtroTurno = 'todos';

/* ── RENDER DA TABELA ── */
function statusHTML(status, isSabado, turno, estado) {
  // Sábado: tarde e noite sempre indisponível
  if (isSabado && turno !== 'Manhã') {
    return `<span class="dot indisp${estado === 'passado' ? ' dot-passado' : ''}">Indisponível</span>`;
  }
  const passadoClass = estado === 'passado' ? ' dot-passado' : '';
  if (status === DIS) return `<span class="dot disp${passadoClass}">Disponível</span>`;
  return `<span class="dot indisp${passadoClass}">Indisponível</span>`;
}

function turnoClass(turno) {
  if (turno === 'Manhã') return 'turno-manha';
  if (turno === 'Tarde') return 'turno-tarde';
  return 'turno-noite';
}

function renderTable() {
  const tbody = document.getElementById('tbody-labs');
  tbody.innerHTML = '';

  const estados = calcularEstadoColunas();

  // Aplica classes nas colunas do thead
  const ths = document.querySelectorAll('thead th');
  // th índices: 0=Bloco,1=Lab,2=Turno, 3..8 = colunas de datas
  for (let i = 0; i < 6; i++) {
    const th = ths[i + 3];
    if (!th) continue;
    th.classList.remove('col-passado', 'col-hoje');
    if (i === 3) { // sábado já tem col-sabado, mantém
      if (estados[i] === 'passado') th.classList.add('col-passado');
      if (estados[i] === 'hoje')    th.classList.add('col-hoje');
    } else {
      if (estados[i] === 'passado') th.classList.add('col-passado');
      if (estados[i] === 'hoje')    th.classList.add('col-hoje');
    }
    // Adiciona/remove badge "Encerrado" ou "Hoje"
    let badge = th.querySelector('.th-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'th-badge';
      th.appendChild(badge);
    }
    if (estados[i] === 'passado') {
      badge.textContent = 'Encerrado';
      badge.className = 'th-badge badge-encerrado';
    } else if (estados[i] === 'hoje') {
      badge.textContent = 'Hoje';
      badge.className = 'th-badge badge-hoje';
    } else {
      badge.textContent = '';
      badge.className = 'th-badge';
    }
  }

  let lastBloco = null;
  let lastLab   = null;

  labs.forEach(row => {
    const matchBloco = filtroBloco === 'todos' || row.bloco === filtroBloco;
    const matchTurno = filtroTurno === 'todos' || row.turno === filtroTurno;
    if (!matchBloco || !matchTurno) return;

    if (row.bloco !== lastBloco) {
      const tr = document.createElement('tr');
      tr.className = 'bloco-header';
      tr.innerHTML = `<td colspan="9">Bloco ${row.bloco}</td>`;
      tbody.appendChild(tr);
      lastBloco = row.bloco;
      lastLab   = null;
    }

    const tr = document.createElement('tr');
    const blocoClass = row.bloco === 'A' ? 'bloco-a' : 'bloco-ef';
    const mostrarLab = row.lab !== lastLab;
    lastLab = row.lab;

    const notaCead = (row.lab === 'CEAD' && mostrarLab)
      ? `<span class="lab-napa">Exclusivo NAPA</span>` : '';

    // Gera as 6 células de status
    const celulas = row.d.map((status, i) => {
      const isSabado = (i === 3);
      const estado = estados[i];
      const tdClass = `status-cell${isSabado ? ' col-sabado' : ''}${estado === 'passado' ? ' col-passado' : ''}${estado === 'hoje' ? ' col-hoje-cell' : ''}`;
      return `<td class="${tdClass}">${statusHTML(status, isSabado, row.turno, estado)}</td>`;
    }).join('');

    tr.innerHTML = `
      <td class="${estados[0] !== 'futuro' ? '' : ''}">${mostrarLab ? `<span class="badge-bloco ${blocoClass}">${row.bloco}</span>` : ''}</td>
      <td>${mostrarLab ? `<span class="lab-nome">${row.lab}</span><span class="lab-local">${row.local}</span>${notaCead}` : ''}</td>
      <td>
        <span class="turno-tag ${turnoClass(row.turno)}">${row.turno}</span>
        <span class="turno-horario">${row.horario}</span>
      </td>
      ${celulas}
    `;
    tbody.appendChild(tr);
  });
}

/* ── FILTROS ── */
function filtrar(bloco, btn) {
  filtroBloco = bloco;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  renderTable();
}

function filtrarTurno(turno, btn) {
  filtroTurno = turno;
  document.querySelectorAll('.turno-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  renderTable();
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', renderTable);
