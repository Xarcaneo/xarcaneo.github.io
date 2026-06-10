/* ==========================================================================
   PATRYK DUDKA PORTFOLIO JAVASCRIPT
   Indie Unity Game Developer - Retro / Hand-crafted Aesthetic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. CMS-Ready Content Structure (Database)
     -------------------------------------------------------------------------- */
  const PROJECTS_DATABASE = {
    reus2: {
      title: 'Reus 2',
      role: 'Unity Developer',
      status: 'Released',
      statusClass: 'released',
      description: [
        'Shape worlds with your godly titans. Make symbiotic ecosystems and inspire humanity with your creations. Their achievements unlock new possibilities. Make different planets for different human spirits, and fill the universe with life!'
      ],
      images: [
        'assets/img/developed-games/Reus_2/reus-2-pc-game-steam-cover.jpg',
        'assets/img/developed-games/Reus_2/Reus_2.jpg',
        'assets/img/developed-games/Reus_2/Reus_2-02.jpg',
        'assets/img/developed-games/Reus_2/Reus_2-03.jpg'
      ],
      links: [
        { label: 'Steam Store', url: 'https://store.steampowered.com/app/1875060/Reus_2/', type: 'primary' }
      ]
    },
    pythia: {
      title: 'Pythia',
      role: 'Unity Developer',
      status: 'In Development',
      statusClass: 'dev',
      description: [
        'New strategy game in development'
      ],
      images: [
        'assets/img/developed-games/Pythia/Cover.png'
      ],
      links: [
        { label: 'Steam Community Announcement', url: 'https://steamcommunity.com/groups/abbeygames/announcements/detail/631191808874907893', type: 'secondary' }
      ]
    },
    betterworld: {
      title: 'BetterWorld Earth',
      role: 'Unity Developer',
      status: 'Mobile Game',
      statusClass: 'mobile',
      description: [
        'A mobile city builder focused on education about sustainability and environmental impact. Players build and manage a city while learning how their decisions affect the world.'
      ],
      images: [
        'assets/img/developed-games/better-world/Minigames-better-world.jpg',
        'assets/img/developed-games/better-world/20240511-betterworld-1.jpg',
        'assets/img/developed-games/better-world/20240511-betterworld-2.jpg'
      ],
      links: [
        { label: 'Website Link', url: 'https://betterworld.earth/', type: 'primary' }
      ]
    },
    the_abyss: {
      title: 'The Abyss',
      role: 'Unity Developer',
      status: 'Released',
      statusClass: 'released',
      description: [
        'A Metroidvania-style action-adventure game set inside a mystical fortress on the border of the Abyss.',
        'Players explore interconnected areas, fight enemies, solve puzzles, and uncover the mystery behind the reawakening of the Abyss portal.'
      ],
      images: [
        'assets/img/developed-games/the-abyss/1.png',
        'assets/img/developed-games/the-abyss/2.png',
        'assets/img/developed-games/the-abyss/3.png',
        'assets/img/developed-games/the-abyss/4.png',
        'assets/img/developed-games/the-abyss/5.png',
        'assets/img/developed-games/the-abyss/6.png',    
      ],
      links: [
        { label: 'itch.io Page', url: 'https://xarcane.itch.io/the-abyss', type: 'primary' }
      ]
    },
    maze_bunny: {
      title: 'Maze Bunny',
      role: 'Unity Developer',
      status: 'Released',
      statusClass: 'released',
      description: [
        'A simple maze game where players choose between Prim and DFS maze generation algorithms.',
      ],
      images: [
        'assets/img/developed-games/MazeBunny/1.png',
        'assets/img/developed-games/MazeBunny/2.png',
        'assets/img/developed-games/MazeBunny/3.png',
        'assets/img/developed-games/MazeBunny/4.png',
        'assets/img/developed-games/MazeBunny/5.png', 
      ],
      links: [
        { label: 'itch.io Page', url: 'https://xarcane.itch.io/maze-bunny', type: 'primary' }
      ]
    },
    pixel_platformer: {
      title: 'Pixel Platformer',
      role: 'GODOT Developer',
      status: 'Mobile Game',
      statusClass: 'mobile',
      description: [
        'A hardcore mobile platformer game made in 2021. A challenging experience where you must collect all points and reach the exit.',
      ],
      images: [
        'assets/img/developed-games/PixelPlatformer/1.png',
        'assets/img/developed-games/PixelPlatformer/2.png',
        'assets/img/developed-games/PixelPlatformer/3.png',
      ],
      links: [
        { label: 'itch.io Page', url: 'https://xarcane.itch.io/pixel-platformer', type: 'primary' }
      ]
    },
    deckhexer: {
      title: 'Deckhexer',
      role: 'Unity Developer',
      status: 'In Development',
      statusClass: 'dev',
      description: [
        'A strategy game in development that mixes deckbuilding and roguelike mechanics.',
      ],
      images: [
        'assets/img/developed-games/Deckhexer/1.png',
        'assets/img/developed-games/Deckhexer/2.png',
      ],
      links: [
        { label: 'In development', url: '#', type: 'primary' }
      ]
    },
    freedomdefenders: {
      title: 'Freedom Defenders',
      role: 'C++ Developer',
      status: 'Released',
      statusClass: 'released',
      description: [
        'An old-school shooter game made in C++ using the SFML library in 2013.',
      ],
      images: [
        'assets/img/developed-games/Defenders/1.png',
        'assets/img/developed-games/Defenders/2.png',
        'assets/img/developed-games/Defenders/3.png',
      ]
    }
  };

  // COMMENTED OUT: Jams section disabled
  /*
  const JAMS_DATABASE = {
    'cyber-cleanup': {
      title: 'Cyber Cleanup',
      type: 'Game Jam #1',
      date: 'July 2023',
      desc: 'A chaotic physics action prototype where players control an automated junk disposal mech sweep. Created in 48 hours for a local game jam.',
      tech: 'Unity 2022.3, Physics2D, Custom Kinematic Controllers',
      link: 'https://xarcane.itch.io/'
    },
    'shadow-ascent': {
      title: 'Shadow Ascent',
      type: 'Experimental Platformer',
      date: 'October 2023',
      desc: 'A short platformer focusing on light-and-shadow gameplay mechanics. Players must manifest platforms using contrast shifting.',
      tech: 'Unity 2022.3, Universal Render Pipeline, Custom shader graphs',
      link: 'https://xarcane.itch.io/'
    },
    'echoes-void': {
      title: 'Echoes of the Void',
      type: 'Space Prototype',
      date: 'March 2024',
      desc: 'An exploration prototype examining orbital mechanics and silent communication systems in empty spaces.',
      tech: 'Unity 2023.2, C# System.Numerics, DOTS (Entities)',
      link: 'https://xarcane.itch.io/'
    }
  };
  */

  const QUOTES_DATABASE = [
    'Games are systems disguised as stories.',
    'Every bug teaches something.',
    'Players always find the edge case.',
    'Fun emerges from iteration.',
    'C# is my hammer, Unity is my sandbox.',
    'A good design handles errors gracefully.',
    'Optimize only when you have measurements.',
    'The best controller is the one that feels invisible.'
  ];

  /* --------------------------------------------------------------------------
     2. 8-Bit Web Audio Synthesizer
     -------------------------------------------------------------------------- */
  let audioCtx = null;
  let soundEnabled = localStorage.getItem('sound-enabled') === 'true';

  const initAudio = () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  };

  const playSynthesizedSound = (type) => {
    if (!soundEnabled) return;
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'boot') {
      // Short rising 8-bit melody
      osc.type = 'triangle';
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.15, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.frequency.setValueAtTime(261.63, now); // C4
      osc.frequency.setValueAtTime(329.63, now + 0.1); // E4
      osc.frequency.setValueAtTime(392.00, now + 0.2); // G4
      osc.frequency.setValueAtTime(523.25, now + 0.3); // C5

      osc.start(now);
      osc.stop(now + 0.65);
    } 
    else if (type === 'click') {
      // Quick retro blip
      osc.type = 'square';
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.08, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.08);

      osc.start(now);
      osc.stop(now + 0.09);
    } 
    else if (type === 'insert') {
      // Cartridge insert double chirp
      osc.type = 'square';
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.1, now + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.frequency.setValueAtTime(150, now);
      osc.frequency.setValueAtTime(400, now + 0.06);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.22);

      osc.start(now);
      osc.stop(now + 0.26);
    }
    else if (type === 'hover') {
      // Subtly high tick
      osc.type = 'sine';
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.03, now + 0.005);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.frequency.setValueAtTime(1800, now);

      osc.start(now);
      osc.stop(now + 0.035);
    }
    else if (type === 'easteregg') {
      // Upbeat 8-bit theme arpeggio
      osc.type = 'sawtooth';
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.12, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      const notes = [523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
      notes.forEach((freq, idx) => {
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      });

      osc.start(now);
      osc.stop(now + 1.25);
    }
  };

  // Sound Toggle Control wiring
  const soundToggleBtn = document.getElementById('sound-toggle');
  
  const updateSoundToggleButtonUI = () => {
    if (soundEnabled) {
      soundToggleBtn.innerHTML = '<span class="sound-icon">🔊</span>';
      soundToggleBtn.classList.remove('muted');
    } else {
      soundToggleBtn.innerHTML = '<span class="sound-icon">🔇</span>';
      soundToggleBtn.classList.add('muted');
    }
  };

  soundToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    soundEnabled = !soundEnabled;
    localStorage.setItem('sound-enabled', soundEnabled);
    updateSoundToggleButtonUI();
    
    if (soundEnabled) {
      initAudio();
      playSynthesizedSound('click');
    }
  });

  // Apply default sound settings UI
  updateSoundToggleButtonUI();

  /* --------------------------------------------------------------------------
     3. Custom Pixel Cursor
     -------------------------------------------------------------------------- */
  const customCursor = document.getElementById('custom-cursor');

  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    customCursor.classList.add('clicking');
  });

  document.addEventListener('mouseup', () => {
    customCursor.classList.remove('clicking');
  });

  // Attach hover triggers to interactive layout links and buttons
  const addCursorHoverListeners = () => {
    const interactives = document.querySelectorAll('a, button, [tabindex="0"], .project-card, .floating-circle');
    interactives.forEach(el => {
      // Remove old listeners to prevent duplicates
      el.removeEventListener('mouseenter', onInteractiveEnter);
      el.removeEventListener('mouseleave', onInteractiveLeave);
      
      el.addEventListener('mouseenter', onInteractiveEnter);
      el.addEventListener('mouseleave', onInteractiveLeave);
    });
  };

  const onInteractiveEnter = () => {
    customCursor.classList.add('hovering');
    playSynthesizedSound('hover');
  };

  const onInteractiveLeave = () => {
    customCursor.classList.remove('hovering');
  };

  addCursorHoverListeners();

  /* --------------------------------------------------------------------------
     4. Canvas Starfield Background
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('starfield-canvas');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let animationFrameId = null;
  let isTabActive = true;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
  };

  const initStars = () => {
    stars = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 11000);
    const starColors = ['#f4f3ef', '#e5989b', '#ffcdb2', '#6d6875'];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.4,
        speedX: (Math.random() - 0.5) * 0.05 - 0.02,
        speedY: (Math.random() - 0.5) * 0.05 - 0.02,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1
      });
    }
  };

  const updateAndDrawStars = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      // Drift physics
      s.x += s.speedX;
      s.y += s.speedY;

      // Wrap around edges
      if (s.x < 0) s.x = canvas.width;
      if (s.x > canvas.width) s.x = 0;
      if (s.y < 0) s.y = canvas.height;
      if (s.y > canvas.height) s.y = 0;

      // Twinkle opacity logic
      s.opacity += s.twinkleSpeed * s.twinkleDirection;
      if (s.opacity >= 0.8) {
        s.opacity = 0.8;
        s.twinkleDirection = -1;
      } else if (s.opacity <= 0.15) {
        s.opacity = 0.15;
        s.twinkleDirection = 1;
      }

      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.opacity;
      ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.size, s.size);
    }
    
    ctx.globalAlpha = 1.0;

    if (isTabActive) {
      animationFrameId = requestAnimationFrame(updateAndDrawStars);
    }
  };

  // Monitor tab focus to save CPU overhead
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isTabActive = false;
      cancelAnimationFrame(animationFrameId);
    } else {
      isTabActive = true;
      updateAndDrawStars();
    }
  });

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  updateAndDrawStars();

  /* --------------------------------------------------------------------------
     5. Press Start / Boot Loader Screen
     -------------------------------------------------------------------------- */
  // COMMENTED OUT: Boot screen disabled to load portfolio directly
  /*
  const pressStartBtn = document.getElementById('press-start-btn');
  const bootScreen = document.getElementById('retro-boot-screen');
  const mainHeader = document.getElementById('main-header');
  const mainContent = document.getElementById('main-content');

  pressStartBtn.addEventListener('click', () => {
    // Enable system sound contexts
    initAudio();
    playSynthesizedSound('boot');

    // Trigger boot transitions
    bootScreen.classList.add('fade-out');
    document.body.classList.remove('no-scroll');
    mainHeader.classList.remove('hidden');
    mainContent.classList.remove('hidden');

    // Focus first navigation link for screen readers
    setTimeout(() => {
      document.querySelector('.nav-link').focus();
    }, 800);
  });

  // Allow enter key triggers on loader screen
  document.addEventListener('keydown', function handleEnterBoot(e) {
    if (e.key === 'Enter' && !bootScreen.classList.contains('fade-out')) {
      document.removeEventListener('keydown', handleEnterBoot);
      pressStartBtn.click();
    }
  });
  */

  /* --------------------------------------------------------------------------
     6. Hero Circle Parallax & Mouse Interactions
     -------------------------------------------------------------------------- */
  const heroCirclesWrapper = document.querySelector('.hero-circles-wrapper');
  const floatingCircles = document.querySelectorAll('.floating-circle');

  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 1200) return; // Disable circle mousemove offsets on small screens
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    floatingCircles.forEach(circle => {
      const factor = parseFloat(circle.getAttribute('data-parallax-factor') || '0.05');
      // Apply offset transform
      const moveX = deltaX * factor * 10;
      const moveY = deltaY * factor * 10;
      
      // Merge mouse movement with drift animations using translate
      circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });

  /* --------------------------------------------------------------------------
     7. Scroll Reveal and Section Observer
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* --------------------------------------------------------------------------
     8. 3D Card Tilt Effect (Featured Projects)
     -------------------------------------------------------------------------- */
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return; // Disable tilt on mobile touch devices
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const midX = rect.width / 2;
      const midY = rect.height / 2;

      // Calculate tilt limits (max 8 degrees)
      const rotateY = ((x - midX) / midX) * 8;
      const rotateX = -((y - midY) / midY) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      // Revert to initial static stagger rotation
      card.style.transform = '';
    });
  });

  /* --------------------------------------------------------------------------
     9. Interactive Indie Experiments Cartridge Shelf
     -------------------------------------------------------------------------- */
  // COMMENTED OUT: Jams section disabled
  /*
  const cartridgeItems = document.querySelectorAll('.active-cartridge, .active-floppy');
  const jamLoadedContent = document.querySelector('.jam-loaded-content');
  const jamPlaceholderText = document.querySelector('.jam-placeholder-text');
  
  const jamTitleEl = document.getElementById('jam-title');
  const jamTypeEl = document.getElementById('jam-type');
  const jamDateEl = document.getElementById('jam-date');
  const jamDescEl = document.getElementById('jam-desc');
  const jamTechEl = document.getElementById('jam-tech');
  const jamLinkEl = document.getElementById('jam-link');

  const updateJamConsoleDetails = (jamKey) => {
    const data = JAMS_DATABASE[jamKey];
    if (!data) return;

    // Trigger double chirp audio
    playSynthesizedSound('insert');

    // Populate data details
    jamTitleEl.textContent = data.title;
    jamTypeEl.textContent = data.type;
    jamDateEl.textContent = data.date;
    jamDescEl.textContent = data.desc;
    jamTechEl.textContent = data.tech;
    jamLinkEl.href = data.link;

    // Show details monitor panel
    jamPlaceholderText.classList.add('hidden');
    jamPlaceholderText.style.display = 'none';
    jamLoadedContent.classList.remove('hidden');
    jamLoadedContent.style.display = 'flex';
  };

  cartridgeItems.forEach(cart => {
    const jamKey = cart.getAttribute('data-jam');
    
    // Clicking loads details
    cart.addEventListener('click', (e) => {
      e.stopPropagation();
      cartridgeItems.forEach(c => c.classList.remove('selected'));
      cart.classList.add('selected');
      updateJamConsoleDetails(jamKey);
    });

    // Keyboard support (Accessibility)
    cart.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cart.click();
      }
    });
  });

  // Clicking outside shelf resets active selections
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#cartridge-shelf') && !e.target.closest('#jam-details-panel')) {
      cartridgeItems.forEach(c => c.classList.remove('selected'));
      jamLoadedContent.classList.add('hidden');
      jamLoadedContent.style.display = 'none';
      jamPlaceholderText.classList.remove('hidden');
      jamPlaceholderText.style.display = 'block';
    }
  });
  */

  /* --------------------------------------------------------------------------
     10. Project Detail Modals & Carousels
     -------------------------------------------------------------------------- */
  const projectModal = document.getElementById('project-modal');
  const modalBox = projectModal.querySelector('.modal-box');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCloseBackdrop = document.getElementById('modal-close-backdrop');
  const imageLightbox = document.getElementById('image-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');

  let activeCarouselIndex = 0;
  let activeProjectImages = [];
  let modalTriggerSource = null;

  const openProjectModal = (projectKey) => {
    const project = PROJECTS_DATABASE[projectKey];
    if (!project) return;

    modalTriggerSource = document.activeElement; // Track element that opened modal
    playSynthesizedSound('click');

    // Populate modal text fields
    document.getElementById('modal-project-title').textContent = project.title;
    document.getElementById('modal-project-role').textContent = project.role;
    
    const statusBadge = document.getElementById('modal-project-status');
    statusBadge.textContent = project.status;
    statusBadge.className = `project-status ${project.statusClass}`;

    // Fill description bullets
    const contribsList = document.getElementById('modal-project-contribs');
    contribsList.innerHTML = '';
    if (project.description && project.description.length > 0) {
      project.description.forEach(desc => {
        const li = document.createElement('li');
        li.textContent = desc;
        contribsList.appendChild(li);
      });
    }

    // Fill action links
    const linksRow = document.getElementById('modal-links-row');
    linksRow.innerHTML = '';
    if (project.links && project.links.length > 0) {
      project.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = `btn pixel-corners ${link.type === 'primary' ? 'btn-primary' : 'btn-secondary'}`;
        a.innerHTML = `<span>${link.label}</span>`;
        linksRow.appendChild(a);
      });
    }

    // Handle Carousel slides setups
    activeProjectImages = project.images;
    activeCarouselIndex = 0;
    setupCarousel();

    // Show modal layer
    projectModal.classList.remove('hidden');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');

    // Trap focus inside modal overlay
    setTimeout(() => {
      modalBox.focus();
      addCursorHoverListeners(); // Bind custom cursor styles to newly created dynamic elements
    }, 100);
  };

  const closeProjectModal = () => {
    playSynthesizedSound('click');
    projectModal.classList.add('hidden');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');

    if (modalTriggerSource) {
      modalTriggerSource.focus(); // Return keyboard focus to source button
    }
  };

  // Setup Carousel Images and Slide Triggers
  const setupCarousel = () => {
    const slidesContainer = document.getElementById('modal-carousel-slides');
    const thumbnailsContainer = document.getElementById('modal-carousel-thumbnails');

    slidesContainer.innerHTML = '';
    thumbnailsContainer.innerHTML = '';

    // If only 1 image exists, hide carousel arrows
    const prevBtn = projectModal.querySelector('.prev-btn');
    const nextBtn = projectModal.querySelector('.next-btn');
    if (activeProjectImages.length <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      thumbnailsContainer.style.display = 'none';
    } else {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
      thumbnailsContainer.style.display = 'flex';
    }

    activeProjectImages.forEach((imgSrc, idx) => {
      // Create Slide element
      const slide = document.createElement('div');
      slide.className = `carousel-slide ${idx === activeCarouselIndex ? 'active' : ''}`;
      slide.innerHTML = `<img src="${imgSrc}" alt="Project slide image ${idx + 1}" loading="lazy">`;
      slide.querySelector('img').addEventListener('click', () => openImageLightbox(idx));
      slidesContainer.appendChild(slide);

      // Create Thumbnail indicator
      if (activeProjectImages.length > 1) {
        const thumb = document.createElement('button');
        thumb.className = `carousel-thumb ${idx === activeCarouselIndex ? 'active' : ''}`;
        thumb.setAttribute('aria-label', `View slide index ${idx + 1}`);
        thumb.innerHTML = `<img src="${imgSrc}" alt="Thumb ${idx + 1}" loading="lazy">`;
        thumb.addEventListener('click', () => {
          playSynthesizedSound('hover');
          activeCarouselIndex = idx;
          updateCarouselUI();
        });
        thumbnailsContainer.appendChild(thumb);
      }
    });
  };

  const updateCarouselUI = () => {
    const slides = projectModal.querySelectorAll('.carousel-slide');
    const thumbs = projectModal.querySelectorAll('.carousel-thumb');

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === activeCarouselIndex);
    });

    thumbs.forEach((thumb, idx) => {
      thumb.classList.toggle('active', idx === activeCarouselIndex);
    });
  };

  const updateLightboxImage = () => {
    lightboxImage.src = activeProjectImages[activeCarouselIndex];
    lightboxImage.alt = `Enlarged project screenshot ${activeCarouselIndex + 1}`;
  };

  const openImageLightbox = (idx) => {
    activeCarouselIndex = idx;
    updateCarouselUI();
    updateLightboxImage();
    imageLightbox.classList.remove('hidden');
    imageLightbox.setAttribute('aria-hidden', 'false');
  };

  const closeImageLightbox = () => {
    imageLightbox.classList.add('hidden');
    imageLightbox.setAttribute('aria-hidden', 'true');
  };

  const carouselNext = () => {
    playSynthesizedSound('hover');
    activeCarouselIndex = (activeCarouselIndex + 1) % activeProjectImages.length;
    updateCarouselUI();
    if (!imageLightbox.classList.contains('hidden')) updateLightboxImage();
  };

  const carouselPrev = () => {
    playSynthesizedSound('hover');
    activeCarouselIndex = (activeCarouselIndex - 1 + activeProjectImages.length) % activeProjectImages.length;
    updateCarouselUI();
    if (!imageLightbox.classList.contains('hidden')) updateLightboxImage();
  };

  // Carousel click handlers
  projectModal.querySelector('.next-btn').addEventListener('click', carouselNext);
  projectModal.querySelector('.prev-btn').addEventListener('click', carouselPrev);
  lightboxNextBtn.addEventListener('click', carouselNext);
  lightboxPrevBtn.addEventListener('click', carouselPrev);
  lightboxCloseBtn.addEventListener('click', closeImageLightbox);
  imageLightbox.addEventListener('click', (e) => {
    if (e.target === imageLightbox) closeImageLightbox();
  });

  // Bind Open modal action triggers to project card buttons
  document.querySelectorAll('.project-card').forEach(card => {
    const pKey = card.getAttribute('data-project');
    const btn = card.querySelector('.card-btn');
    btn.addEventListener('click', () => openProjectModal(pKey));
  });

  // Bind Open modal action triggers to hero section floating circles
  document.querySelectorAll('.floating-circle').forEach(circle => {
    const pKey = circle.getAttribute('data-project');
    if (pKey) {
      circle.addEventListener('click', (e) => {
        e.stopPropagation();
        openProjectModal(pKey);
      });
    }
  });

  // Close modal click triggers
  modalCloseBtn.addEventListener('click', closeProjectModal);
  modalCloseBackdrop.addEventListener('click', closeProjectModal);

  // Keyboard accessibility listeners (Escape to close, Tab trap)
  document.addEventListener('keydown', (e) => {
    if (projectModal.classList.contains('hidden')) return;

    if (!imageLightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        closeImageLightbox();
      }

      if (e.key === 'ArrowRight') {
        carouselNext();
      }

      if (e.key === 'ArrowLeft') {
        carouselPrev();
      }

      return;
    }

    if (e.key === 'Escape') {
      closeProjectModal();
    }

    if (e.key === 'Tab') {
      const focusables = modalBox.querySelectorAll('button, a, [tabindex="0"], select, textarea');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) { // Backtab
        if (document.activeElement === first || document.activeElement === modalBox) {
          e.preventDefault();
          last.focus();
        }
      } else { // Tab
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  /* --------------------------------------------------------------------------
     11. Dynamic Quote Board Terminal
     -------------------------------------------------------------------------- */
  const activeQuoteText = document.getElementById('active-quote-text');
  let currentQuoteIndex = 0;

  const typeQuote = (text) => {
    activeQuoteText.textContent = '';
    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        activeQuoteText.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 45);
  };

  const cycleQuotes = () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % QUOTES_DATABASE.length;
    typeQuote(QUOTES_DATABASE[currentQuoteIndex]);
  };

  // Cycle quote every 7 seconds
  setInterval(cycleQuotes, 7000);

  /* --------------------------------------------------------------------------
     12. Email Copy Button with Feedback
     -------------------------------------------------------------------------- */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailVal = 'patryk.dudka@hotmail.com';

  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailVal).then(() => {
      playSynthesizedSound('insert');
      const origText = copyEmailBtn.innerHTML;
      copyEmailBtn.innerHTML = '<span>Copied!</span>';
      copyEmailBtn.style.borderColor = 'var(--accent-pink)';
      copyEmailBtn.style.color = 'var(--accent-pink)';

      setTimeout(() => {
        copyEmailBtn.innerHTML = origText;
        copyEmailBtn.style.borderColor = '';
        copyEmailBtn.style.color = '';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });

  /* --------------------------------------------------------------------------
     13. Mobile Menu Navigation
     -------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const retroNav = document.getElementById('retro-nav');

  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    playSynthesizedSound('click');
    const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    
    mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
    mobileMenuBtn.classList.toggle('active');
    retroNav.classList.toggle('active');
  });

  // Clicking outside menu collapses it
  document.addEventListener('click', (e) => {
    if (retroNav.classList.contains('active') && !e.target.closest('#retro-nav') && !e.target.closest('#mobile-menu-btn')) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.classList.remove('active');
      retroNav.classList.remove('active');
    }
  });

  // Clicking links inside menu collapses menu
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.classList.remove('active');
      retroNav.classList.remove('active');
    });
  });

  /* --------------------------------------------------------------------------
     14. Konami Code Easter Egg (System Diagnostics Mode)
     -------------------------------------------------------------------------- */
  const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  let konamiIndex = 0;

  // Single key fallback for keyboard/mouse users: Pressing 'K', 'O', 'N', 'A', 'M', 'I' sequentially
  const alternateSequence = ['k', 'o', 'n', 'a', 'm', 'i'];
  let altIndex = 0;

  const triggerGlitchEasterEgg = () => {
    playSynthesizedSound('easteregg');

    // Add visual CRT glitch class to body/canvas
    document.body.style.filter = 'hue-rotate(90deg) contrast(1.5)';
    customCursor.style.backgroundColor = '#3df36f';

    // Print developer diagnostics inside PC terminal monitor
    const quoteTerm = document.getElementById('terminal-quote-display');
    quoteTerm.innerHTML = `
      <p class="terminal-meta">> DIAGNOSTIC MODE: ACTIVE</p>
      <p class="terminal-meta">> MEMORY_STATUS: OK</p>
      <p class="terminal-meta">> CODES_READ: 100% CORRECT</p>
      <p class="terminal-meta" style="color:#3df36f">> EASTER_EGG UNLOCKED!</p>
      <p class="terminal-meta">> PRESS ANY KEY TO REBOOT SYSTEM...</p>
    `;

    // Reset glitch style on any click
    setTimeout(() => {
      document.addEventListener('click', function resetGlitch() {
        document.body.style.filter = '';
        customCursor.style.backgroundColor = '';
        
        // Restore standard quotes box
        quoteTerm.innerHTML = `
          <p class="terminal-meta">> RUNNING: QUOTE_MODULE.EXE</p>
          <p class="terminal-meta">> FETCHING DEV_IDEAS...</p>
          <div class="quote-text-container">
            <span class="terminal-prompt">> </span><span id="active-quote-text" class="quote-text">Games are systems disguised as stories.</span>
          </div>
        `;
        // Re-grab reference to quote text element
        const newQuoteEl = document.getElementById('active-quote-text');
        // Temporarily reset global variable reference
        document.getElementById('active-quote-text').textContent = QUOTES_DATABASE[currentQuoteIndex];
        
        document.removeEventListener('click', resetGlitch);
      });
    }, 2000);
  };

  document.addEventListener('keydown', (e) => {
    // Check Konami Code
    if (e.key === konamiSequence[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        konamiIndex = 0;
        triggerGlitchEasterEgg();
      }
    } else {
      konamiIndex = 0;
    }

    // Check Alternative "KONAMI" keying
    const lowerKey = e.key.toLowerCase();
    if (lowerKey === alternateSequence[altIndex]) {
      altIndex++;
      if (altIndex === alternateSequence.length) {
        altIndex = 0;
        triggerGlitchEasterEgg();
      }
    } else {
      altIndex = 0;
    }
  });

});
