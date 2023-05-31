const hambuger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
  navList.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-item');
for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    hambuger.classList.remove('active');
    navList.classList.remove('active');
  });
}

const featured = [
  {
    speaker: 'img/speaker_01.png',
    name: 'Yochai Benkler',
    profession: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    school: 'Benkler Studies Commons-based peer production, and published his seminal book The Wealth of Networks in 2006',

  },

  {
    speaker: 'img/speaker_03.png',
    name: 'SohYeong Noh',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    school: 'As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology,humanies,and the arts',

  },

  {
    speaker: 'img/speaker_02.png',
    name: 'Kilnam Chon',
    school: 'Kilman Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital coomons, In 2012, he was inducted into the inaugural class of the internent Society(ISOC)Internet Hall of Fame',

  },

  {
    speaker: 'img/speaker_04.png',
    name: 'julia Leda',
    profession: 'President of Young Pirates of Europe',
    school: 'Benkler Studies Commons-based peer produ Wealth of Networks in 2006',

  },

  {
    speaker: 'img/speaker_05.png',
    name: 'Lila Tretikov',
    profession: 'Executive Director of the Wikimedia Foundation',
    school: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation,the nonprofit organization that operates wikipedia.Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',

  },

  {
    speaker: 'img/speaker_06.png',
    name: 'Ryan Merkley',
    profession: 'CEO of Creative Commons,es COO of the Mozilla Foundation',
    school: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',

  },
];

const wholeSpeakers = document.getElementById('speakers-grid');
for (let i = 0; i < featured.length; i += 1) {
  const div = document.createElement('div');
  div.className = 'speaker';
  div.innerHTML = `

      <div class="speakers_div">
        <img src="${featured[i].speaker}" alt="${featured[i].name}" class="image">
             <div class="description">
             <h3>${featured[i].name}</h3>
             <p class="sub-heading push">${featured[i].profession}</p>
             <span class="institution">${featured[i].school}</span>
             </div>
      </div>
             `;
  wholeSpeakers.appendChild(div);
}

const seemore = document.getElementById('viewmore');
seemore.addEventListener('click', () => {
  wholeSpeakers.classList.toggle('activated');
  if (seemore.textContent === 'see more speakers') {
    seemore.textContent = 'see less';
  } else {
    seemore.textContent = 'see more speakers';
  }
});
