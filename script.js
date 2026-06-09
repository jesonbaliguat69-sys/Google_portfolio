const users = {
  angela: {
    password: "123",
    name: "Angela Samulde",
    role: "Office Administration",
    location: "Lau-an, Antique, Philippines",
    bio: "OFFICE ADMINISTRATION\n\n“Choose Office Administration for a better future!”\n\nOffice Administration is a course that teaches office management, communication, computer, and organizational skills. It prepares students for jobs like office assistant, secretary, and administrative officer. It helps build professionalism and skills for a successful career.",
    school: "Bachelor of Office Administration",
    skills: ["Communication skills", "Office management", "Filing and record keeping", "Customer service", "Administrative support", "Computer literacy"],
    image: "profile.jpg",
    goals: [
      ["school", "Finish my studies"],
      ["work", "Have a successful career"],
      ["family_restroom", "Help my family"],
      ["flag", "Travel to different countries"]
    ],
    gallery: [
      ["best_friends.jpg", "Best Friends", "A collection of unforgettable moments shared with my closest friends. These memories represent friendship, trust, support, and happiness throughout my journey."],
      ["classmate.jpg", "Classmate Moments", "Captured during school activities and classroom experiences. These moments reflect teamwork, learning, cooperation, and personal growth with my classmates."],
      ["friends.jpg", "Friends", "A special memory with friends who bring joy, encouragement, and positivity into my life. These friendships make every experience more meaningful."],
      ["outing_with_friends.jpg", "Outing With Friends", "A memorable outing filled with laughter, adventure, and bonding. These experiences strengthened our friendship and created lasting memories."]
    ],
    hobbies: [
      ["music_note", "Listening to music", "Enjoying songs that bring comfort, focus, and relaxation."],
      ["wb_twilight", "Watching sunsets", "Appreciating peaceful sunset views and quiet moments."],
      ["travel_explore", "Traveling", "Exploring new places and creating meaningful experiences."],
      ["church", "Visiting unfamiliar churches", "Discovering peaceful churches and learning from new places."],
      ["menu_book", "Reading Wattpad stories", "Enjoying Wattpad stories during free time."]
    ],
    music: [
      ["music_note", "Favorite Songs", "Soft pop, worship songs, and relaxing music that match her calm personality."],
      ["headphones", "Listening Time", "Music helps me relax, reflect, and stay inspired during busy school days."],
      ["queue_music", "Playlist Mood", "Peaceful, meaningful, and uplifting songs for studying, traveling, and quiet moments."]
    ],
    contact: [
      ["email", "Email", "samuldeangela99@gmail.com"],
      ["call", "Phone", "09688369563"],
      ["language", "Facebook", "facebook.com/angela samulde"]
    ]
  },
  chritine: {
    password: "123",
    name: "Chritine",
    role: "Student - Developer - Dreamer",
    location: "Cebu City, Philippines",
    bio: "I am a passionate student who enjoys building websites, learning new technologies, and improving my skills every day. I enjoy creating projects, solving problems, and turning ideas into reality through technology.",
    school: "Bachelor of Science in Computer Science",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Problem Solving", "Communication", "Teamwork", "Time Management"],
    image: "Paradise.png",
    goals: [
      ["school", "Finish my studies"],
      ["work", "Have a successful career"],
      ["family_restroom", "Help my family"],
      ["flag", "Build a stable future"]
    ],
    gallery: [
      ["best_friends.jpg", "Best Friends", "A collection of unforgettable moments shared with my closest friends. These memories represent friendship, trust, support, and happiness throughout my journey."],
      ["classmate.jpg", "Classmate Moments", "Captured during school activities and classroom experiences. These moments reflect teamwork, learning, cooperation, and personal growth with my classmates."],
      ["friends.jpg", "Friends", "A special memory with friends who bring joy, encouragement, and positivity into my life. These friendships make every experience more meaningful."],
      ["outing_with_friends.jpg", "Outing With Friends", "A memorable outing filled with laughter, adventure, and bonding. These experiences strengthened our friendship and created lasting memories."]
    ],
    hobbies: [
      ["code", "Coding", "Building websites and applications while continuously learning new technologies."],
      ["menu_book", "Reading", "Learning through books, articles, and educational resources."],
      ["camera_alt", "Photography", "Capturing beautiful moments and creating memories through photos."],
      ["sports_basketball", "Sports", "Playing basketball and maintaining an active lifestyle."]
    ],
    music: [
      ["music_note", "Favorite Songs", "Soft pop and relaxing instrumentals for focus."],
      ["headphones", "Listening Time", "Music helps during coding sessions and study time."],
      ["queue_music", "Playlist Mood", "Calm, uplifting, and motivational tracks."]
    ],
    contact: [
      ["email", "Email", "chritine@example.com"],
      ["call", "Phone", "09000000000"],
      ["language", "Facebook", "facebook.com/chritine"]
    ]
  }
};

const state = {
  currentUser: null,
  currentPage: "about"
};

const elements = {
  loginForm: document.getElementById("loginForm"),
  loginScreen: document.getElementById("loginScreen"),
  portfolioScreen: document.getElementById("portfolioScreen"),
  content: document.getElementById("content"),
  loginMessage: document.getElementById("loginMessage"),
  usernameInput: document.getElementById("username"),
  passwordInput: document.getElementById("password"),
  showPassword: document.getElementById("showPassword"),
  pageTitle: document.getElementById("pageTitle"),
  sidebar: document.getElementById("sidebar"),
  sidebarOverlay: document.getElementById("sidebarOverlay"),
  modalOverlay: document.getElementById("modalOverlay"),
  logoutDialog: document.getElementById("logoutDialog"),
  sidebarName: document.getElementById("sidebarName"),
  sidebarRole: document.getElementById("sidebarRole"),
  sidebarPhoto: document.getElementById("sidebarPhoto"),
  topAvatar: document.getElementById("topAvatar")
};

const pageLabels = {
  about: "About Me",
  travel: "Gallery",
  hobbies: "Hobbies",
  music: "Music",
  contact: "Contact"
};

const defaultGoals = [
  ["school", "Finish my studies"],
  ["work", "Have a successful career"],
  ["family_restroom", "Help my family"],
  ["flag", "Build a stable future"]
];

const defaultGallery = [
  ["best_friends.jpg", "Best Friends", "A collection of unforgettable moments shared with my closest friends. These memories represent friendship, trust, support, and happiness throughout my journey."],
  ["classmate.jpg", "Classmate Moments", "Captured during school activities and classroom experiences. These moments reflect teamwork, learning, cooperation, and personal growth with my classmates."],
  ["friends.jpg", "Friends", "A special memory with friends who bring joy, encouragement, and positivity into my life. These friendships make every experience more meaningful."],
  ["outing_with_friends.jpg", "Outing With Friends", "A memorable outing filled with laughter, adventure, and bonding. These experiences strengthened our friendship and created lasting memories."]
];

function signIn(userKey) {
  state.currentUser = users[userKey];
  state.currentPage = "about";

  elements.sidebarName.textContent = state.currentUser.name;
  elements.sidebarRole.textContent = state.currentUser.role;
  elements.sidebarPhoto.src = state.currentUser.image;
  elements.topAvatar.src = state.currentUser.image;

  renderPage("about");
  elements.loginScreen.classList.remove("active");
  elements.portfolioScreen.classList.add("active");
  document.title = `${state.currentUser.name} | Portfolio Connect`;

  elements.loginMessage.textContent = "";
  elements.loginForm.reset();
  elements.passwordInput.type = "password";
}

function signOut() {
  state.currentUser = null;
  closeLogoutDialog();
  elements.portfolioScreen.classList.remove("active");
  elements.loginScreen.classList.add("active");
  document.title = "Portfolio Connect";
  elements.usernameInput.focus();
}

function renderPage(page) {
  if (!state.currentUser) return;

  state.currentPage = page;
  elements.pageTitle.textContent = pageLabels[page];
  updateActiveNavigation(page);

  const templates = {
    about: renderAboutPage,
    travel: renderTravelPage,
    hobbies: renderHobbiesPage,
    music: renderMusicPage,
    contact: renderContactPage
  };

  elements.content.innerHTML = templates[page]();
  closeSidebar();
}

function updateActiveNavigation(page) {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  document.querySelectorAll(".menu-item[data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === page);
  });
}

function renderAboutPage() {
  const user = state.currentUser;

  return `
    <section class="profile-card page">
      <div class="profile-top">
        <img class="profile-photo" src="${user.image}" alt="${user.name}">
        <div>
          <h2 class="name">${user.name}</h2>
          <div class="role">${user.role}</div>
          <div class="location">${user.location}</div>
        </div>
      </div>
    </section>
    ${renderInfoCard("school", "Biography", user.bio)}
    ${renderInfoCard("school", "Education", user.school)}
    <section class="info-card page">
      <h3 class="section-title"><span class="material-icons">flag</span>My Goals in Life</h3>
      <div class="goal-grid">
        ${(user.goals || defaultGoals).map(([icon, goal]) => `
          <article class="goal-card">
            <span class="material-icons goal-icon">${icon}</span>
            <h4>${goal}</h4>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="info-card page">
      <h3 class="section-title"><span class="material-icons">check_circle</span>Skills</h3>
      <div class="skill-list">
        ${user.skills.map((skill) => `
          <div class="skill-item">
            <span class="material-icons">check_circle</span>
            <span>${skill}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTravelPage() {
  const gallery = state.currentUser.gallery || defaultGallery;

  return `
    ${renderSectionIntro("photo_library", "Gallery", "Meaningful memories captured with friends and classmates.")}
    <div class="gallery-grid">
      ${gallery.map(([image, title, description]) => `
        <article class="gallery-card page">
          <img src="${image}" alt="${title}">
          <div class="gallery-body">
            <span class="gallery-label">Memory</span>
            <h3 class="item-title">${title}</h3>
            <p class="item-meta">${description}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderHobbiesPage() {
  return `
    ${renderSectionIntro("interests", "Hobbies", "Things I enjoy in daily life.")}
    <div class="item-list">
      ${state.currentUser.hobbies.map(([icon, title, description]) => renderIconItem(icon, title, description)).join("")}
    </div>
  `;
}

function renderMusicPage() {
  return `
    ${renderSectionIntro("music_note", "Music", "Songs and playlists that fit the vibe.")}
    <div class="item-list">
      ${state.currentUser.music.map(([icon, title, description]) => renderIconItem(icon, title, description)).join("")}
    </div>
  `;
}

function renderContactPage() {
  return `
    ${renderSectionIntro("mail", "Contact", "Ways to get in touch.")}
    <div class="item-list">
      ${state.currentUser.contact.map(([icon, title, value]) => renderContactItem(icon, title, value)).join("")}
    </div>
  `;
}

function renderInfoCard(icon, title, text) {
  return `
    <section class="info-card page">
      <h3 class="section-title"><span class="material-icons">${icon}</span>${title}</h3>
      <p class="card-text">${text}</p>
    </section>
  `;
}

function renderSectionIntro(icon, title, text) {
  return `
    <section class="section-card page">
      <h2 class="section-title"><span class="material-icons">${icon}</span>${title}</h2>
      <p class="card-text">${text}</p>
    </section>
  `;
}

function renderIconItem(icon, title, description) {
  return `
    <article class="item-card page">
      <span class="material-icons item-icon">${icon}</span>
      <div>
        <h3 class="item-title">${title}</h3>
        <p class="item-meta">${description}</p>
      </div>
    </article>
  `;
}

function renderContactItem(icon, title, value) {
  const href = getContactHref(title, value);

  if (!href) {
    return `
      <article class="item-card page">
        <span class="material-icons item-icon">${icon}</span>
        <div>
          <h3 class="item-title">${title}</h3>
          <p class="item-meta">${value}</p>
        </div>
      </article>
    `;
  }

  return `
    <a class="item-card contact-link page" href="${href}" target="${href.startsWith("http") ? "_blank" : "_self"}" rel="noopener">
      <span class="material-icons item-icon">${icon}</span>
      <div>
        <h3 class="item-title">${title}</h3>
        <p class="item-meta">${value}</p>
      </div>
      <span class="material-icons contact-arrow">open_in_new</span>
    </a>
  `;
}

function getContactHref(title, value) {
  const normalizedTitle = title.toLowerCase();
  const normalizedValue = value.trim();

  if (normalizedTitle.includes("facebook")) {
    return "";
  }

  if (normalizedTitle.includes("email")) {
    return `mailto:${normalizedValue}`;
  }

  if (normalizedTitle.includes("phone")) {
    return `tel:${normalizedValue.replace(/\s+/g, "")}`;
  }

  if (normalizedValue.startsWith("http")) {
    return normalizedValue;
  }

  return `https://${normalizedValue}`;
}

function openSidebar() {
  elements.sidebar.classList.add("open");
  elements.sidebarOverlay.classList.add("open");
}

function closeSidebar() {
  elements.sidebar.classList.remove("open");
  elements.sidebarOverlay.classList.remove("open");
}

function openLogoutDialog() {
  closeSidebar();
  elements.modalOverlay.classList.add("open");
  elements.logoutDialog.classList.add("open");
}

function closeLogoutDialog() {
  elements.modalOverlay.classList.remove("open");
  elements.logoutDialog.classList.remove("open");
}

elements.showPassword.addEventListener("change", () => {
  elements.passwordInput.type = elements.showPassword.checked ? "text" : "password";
});

elements.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = elements.usernameInput.value.trim().toLowerCase();
  const password = elements.passwordInput.value.trim();

  if (users[username]?.password === password) {
    signIn(username);
    return;
  }

  elements.loginMessage.textContent = "Invalid username or password.";
});

document.getElementById("googleBtn").addEventListener("click", () => {
  elements.loginMessage.textContent = "Google sign-in is ready for design preview.";
});

document.getElementById("forgotLink").addEventListener("click", (event) => {
  event.preventDefault();
  elements.loginMessage.textContent = "Please contact the portfolio owner to reset access.";
});

document.getElementById("menuBtn").addEventListener("click", openSidebar);
elements.sidebarOverlay.addEventListener("click", closeSidebar);
elements.modalOverlay.addEventListener("click", closeLogoutDialog);
document.getElementById("cancelLogout").addEventListener("click", closeLogoutDialog);
document.getElementById("confirmLogout").addEventListener("click", signOut);
document.getElementById("logoutBtn").addEventListener("click", openLogoutDialog);

document.querySelectorAll(".nav-item, .menu-item[data-page]").forEach((button) => {
  button.addEventListener("click", () => renderPage(button.dataset.page));
});
