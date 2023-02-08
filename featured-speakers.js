const speakers = [
  {
    name: 'Ken Thompson',
    profilePicture: './assets/speakers/ken_thompson.jpg',
    title: 'American computer designer',
    description: 'Kenneth Lane Thompson is an American pioneer of computer science.',
  },
  {
    name: 'Radia Perlman',
    profilePicture: './assets/speakers/Radia-Perlman.jpg',
    title: 'American network engineer',
    description: 'Radia Joy Perlman is an American computer programmer and network engineer.',
  },
  {
    name: 'Dennis Ritchie',
    profilePicture: './assets/speakers/Dennis_Ritchie.jpg',
    title: 'American computer scientist',
    description: 'Dennis MacAlistair Ritchie was an American computer scientist.',
  },
  {
    name: 'Larry Page',
    profilePicture: './assets/speakers/Larry_Page.jpg',
    title: 'American business magnate',
    description: 'Lawrence Edward Page is an American business magnate, computer scientist and internet entrepreneur.',
  },
  {
    name: 'Brendan Eich',
    profilePicture: './assets/speakers/Brendan_Eich.jpg',
    title: 'American computer programmer',
    description: 'Brendan Eich is an American computer programmer and technology executive.',
  },
  {
    name: 'Margaret Hamilton',
    profilePicture: './assets/speakers/Margaret_Hamilton.jpg',
    title: 'American computer scientist',
    description: 'Margaret Heafield Hamilton is an American computer scientist.',
  },
];

const featuredSpeakers = document.getElementById('featured-speakers');

speakers.forEach((speaker) => {
  const listItem = document.createElement('li');
  listItem.className = 'featured-speaker';
  listItem.innerHTML = `<div class="featured-speaker-profile-container">
            <img src="${speaker.profilePicture}" alt="${speaker.name}">
        </div>
        <div class="featured-speaker__info">
            <h4 class="featured-speaker__name">${speaker.name}</h4>
            <p class="featured-speaker__designation">${speaker.title}</p>
            <hr>
            <p class="featured-speaker__about">${speaker.description}</p>
        </div>`;
  featuredSpeakers.appendChild(listItem);
});
