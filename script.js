/* ── DADOS DOS LABORATÓRIOS ── */

// Status possíveis
const DIS = 'disp';
const IND = 'indisp';

// SAB = sábado: apenas manhã disponível (até 13h), tarde/noite sempre indisponível
// Para o sábado, a coluna é index 3 (0-based: Qua=0,Qui=1,Sex=2,Sab=3,Seg=4,Ter=5)

const labs = [
  // ── BLOCO A ──
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'A', lab:'LAB 1',  local:'Bloco A, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, Térreo', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, Térreo', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'A', lab:'LAB 2/3', local:'Bloco A, Térreo', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 2º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 2º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'A', lab:'LAB 4',  local:'Bloco A, 2º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'A', lab:'LAB 6',  local:'Bloco A, Térreo',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'LAB 6',  local:'Bloco A, Térreo',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'A', lab:'LAB 6',  local:'Bloco A, Térreo',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  { bloco:'A', lab:'CEAD',   local:'Bloco A, Térreo',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'A', lab:'CEAD',   local:'Bloco A, Térreo',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'A', lab:'CEAD',   local:'Bloco A, Térreo',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },

  // ── BLOCO EF ──
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'EF', lab:'LAB 7',  local:'Bloco EF, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, IND] },

  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 2º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 2º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'EF', lab:'LAB 9',  local:'Bloco EF, 2º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, DIS, IND] },

  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, Térreo',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, Térreo',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'EF', lab:'LAB 11', local:'Bloco EF, Térreo',   turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, IND, IND] },

  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, Térreo',   turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, Térreo',   turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'EF', lab:'LAB 12', local:'Bloco EF, Térreo',   turno:'Noite', horario:'17h – 22h',
    d: [IND, DIS, DIS, IND, IND, IND] },

  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 1º Andar', turno:'Manhã', horario:'08h30 – 12h',
    d: [DIS, DIS, DIS, DIS, DIS, DIS] },
  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 1º Andar', turno:'Tarde', horario:'12h – 17h',
    d: [DIS, DIS, DIS, IND, DIS, DIS] },
  { bloco:'EF', lab:'LAB 13', local:'Bloco EF, 1º Andar', turno:'Noite', horario:'17h – 22h',
    d: [DIS, DIS, DIS, IND, IND, IND] },
];

/* ── ESTADO DOS FILTROS ── */
let filtroBloco = 'todos';
let filtroTurno = 'todos';

/* ── RENDER DA TABELA ── */
function statusHTML(status, isSabado, turno) {
  // Sábado: tarde e noite sempre indisponível (só vai até 13h)
  if (isSabado && turno !== 'Manhã') {
    return `<span class="dot indisp">Encerrado</span>`;
  }
  if (status === DIS) return `<span class="dot disp">Disponível</span>`;
  return `<span class="dot indisp">Indisponível</span>`;
}

function turnoClass(turno) {
  if (turno === 'Manhã') return 'turno-manha';
  if (turno === 'Tarde') return 'turno-tarde';
  return 'turno-noite';
}

function renderTable() {
  const tbody = document.getElementById('tbody-labs');
  tbody.innerHTML = '';

  let lastBloco = null;
  let lastLab   = null;

  labs.forEach(row => {
    const matchBloco = filtroBloco === 'todos' || row.bloco === filtroBloco;
    const matchTurno = filtroTurno === 'todos' || row.turno === filtroTurno;
    if (!matchBloco || !matchTurno) return;

    // Separador de bloco
    if (row.bloco !== lastBloco) {
      const tr = document.createElement('tr');
      tr.className = 'bloco-header';
      tr.innerHTML = `<td colspan="9">Bloco ${row.bloco}</td>`;
      tbody.appendChild(tr);
      lastBloco = row.bloco;
      lastLab   = null;
    }

    const tr = document.createElement('tr');
    const blocoClass  = row.bloco === 'A' ? 'bloco-a' : 'bloco-ef';
    const mostrarLab  = row.lab !== lastLab;
    lastLab = row.lab;

    // Sábado é coluna index 3
    tr.innerHTML = `
      <td>${mostrarLab ? `<span class="badge-bloco ${blocoClass}">${row.bloco}</span>` : ''}</td>
      <td>${mostrarLab ? `<span class="lab-nome">${row.lab}</span><span class="lab-local">${row.local}</span>` : ''}</td>
      <td>
        <span class="turno-tag ${turnoClass(row.turno)}">${row.turno}</span>
        <span class="turno-horario">${row.horario}</span>
      </td>
      <td class="status-cell">${statusHTML(row.d[0], false, row.turno)}</td>
      <td class="status-cell">${statusHTML(row.d[1], false, row.turno)}</td>
      <td class="status-cell">${statusHTML(row.d[2], false, row.turno)}</td>
      <td class="status-cell col-sabado">${statusHTML(row.d[3], true, row.turno)}</td>
      <td class="status-cell">${statusHTML(row.d[4], false, row.turno)}</td>
      <td class="status-cell">${statusHTML(row.d[5], false, row.turno)}</td>
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
