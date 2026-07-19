// Wait for libraries to load, then initialize
window.addEventListener('DOMContentLoaded', () => {
    initBirthdayApp();
});

function initBirthdayApp() {
    // List of all 36 photos (original 32 + 4 newly added WhatsApp photos)
    const imagesToLoad = [
        "Photos/Lataguri ডাইরি  (32).jpg", // Front photo / hero
        "Photos/Lataguri ডাইরি  (25).jpg",
        "Photos/IMG_20260103_132952073_HDR_PORTRAIT.jpg",
        "Photos/IMG_20260103_133005969_HDR_PORTRAIT.jpg",
        "Photos/IMG_20260103_133022492_HDR_PORTRAIT.jpg",
        "Photos/IMG_20260103_133043516_HDR_PORTRAIT.jpg",
        "Photos/IMG_20260103_123127530_BURST000_COVER.jpg",
        "Photos/20230126_144216.jpg",
        "Photos/IMG-20220606-WA0197.jpg",
        "Photos/IMG-20220908-WA0020.jpg",
        "Photos/IMG-20230215-WA0022.jpg",
        "Photos/IMG-20230215-WA0026.jpg",
        "Photos/IMG-20230619-WA0117.jpg",
        "Photos/IMG-20240719-WA0024.jpg",
        "Photos/IMG-20240719-WA0025.jpg",
        "Photos/IMG-20240719-WA0026.jpg",
        "Photos/IMG-20240719-WA0027.jpg",
        "Photos/IMG-20240719-WA0028.jpg",
        "Photos/IMG-20240719-WA0029.jpg",
        "Photos/IMG-20240719-WA0030.jpg",
        "Photos/IMG-20240719-WA0031.jpg",
        "Photos/IMG-20240719-WA0032.jpg",
        "Photos/IMG-20240719-WA0033.jpg",
        "Photos/IMG-20240719-WA0034.jpg",
        "Photos/IMG-20240719-WA0036.jpg",
        "Photos/IMG-20240719-WA0037.jpg",
        "Photos/IMG-20240719-WA0038.jpg",
        "Photos/IMG-20240719-WA0039.jpg",
        "Photos/IMG-20240820-WA0001.jpg",
        "Photos/Screenshot_20251123-195722.WhatsApp.png",
        "Photos/SmartSelect_20220111-144444_WhatsApp.jpg",
        "Photos/SmartSelect_20221124-155543_WhatsApp.jpg",
        "Photos/WhatsApp Image 2026-07-19 at 7.34.10 PM.jpeg",
        "Photos/WhatsApp Image 2026-07-19 at 7.34.11 PM (1).jpeg",
        "Photos/WhatsApp Image 2026-07-19 at 7.34.11 PM.jpeg",
        "Photos/WhatsApp Image 2026-07-19 at 7.34.12 PM.jpeg"
    ];

    // Decorative graphical assets to load (music instruments, characters & lyric elements)
    const decorativeAssets = {
        guitar: "Photos/gold_guitar.png",
        piano: "Photos/gold_piano.png",
        notes: "Photos/gold_notes.png",
        girl: "Photos/dancing_girl.png",
        cupcake: "Photos/gold_cupcake.png",
        whiskey: "Photos/gold_whiskey.png",
        shake: "Photos/gold_shake.png",
        hugs: "Photos/gold_hugs.png"
    };

    // Synced Lyrics Data for "Happy Birthday (Goodbye)" or local custom song
    const lyricsData = [
        { time: 0.0, text: "H A P P Y Birthday birthday birthday" },
        { time: 3.2, text: "H A P P Y Birthday birthday birthday" },
        { time: 6.5, text: "H A P P Y Birthday birthday birthday" },
        { time: 9.8, text: "H A P P Y Birthday birthday birthday" },
        { time: 13.5, text: "Ye meri ada hai" },
        { time: 16.5, text: "Ye mera hai style" },
        { time: 19.5, text: "Ye meri ada hai" },
        { time: 22.5, text: "Ye mera hai style" },
        { time: 25.5, text: "Jo surprise ho gaye ho tum" },
        { time: 29.5, text: "Now don’t frown just smile" },
        { time: 34.5, text: "Happy birthday to you (to you)" },
        { time: 38.0, text: "Happy birthday to you (to you)" },
        { time: 41.0, text: "Happy birthday dear stufed" },
        { time: 44.5, text: "Happy birthday to you" },
        { time: 49.0, text: "Many cup cake to you" },
        { time: 52.2, text: "All sugar less to you" },
        { time: 55.5, text: "30ml vishky at night" },
        { time: 58.8, text: "Morning loki shave to you" },
        { time: 62.5, text: "H a p p y birthday birthday birthday" },
        { time: 66.0, text: "H a p p y birthday birthday birthday" },
        { time: 69.2, text: "H a p p y birthday birthday birthday" },
        { time: 72.5, text: "H a p p y birthday birthday birthday" },
        { time: 81.0, text: "Calender ke sare saal" },
        { time: 84.5, text: "Ho gaye kaha gum (gum)" },
        { time: 88.0, text: "Chalte chalte kitni dur" },
        { time: 91.5, text: "A pohoche hum tum (tum)" },
        { time: 95.0, text: "Cash de kar likhwayi hai dhun" },
        { time: 98.2, text: "So don’t frown" },
        { time: 101.5, text: "Just smile" },
        { time: 105.0, text: "Happy birthday to you (to you)" },
        { time: 108.2, text: "Happy birthday to you (to you)" },
        { time: 111.5, text: "Happy birthday dear stupid" },
        { time: 114.8, text: "Happy birthday to you" },
        { time: 119.5, text: "Many walnuts to you (to you)" },
        { time: 122.8, text: "Aur thori and nice kuchiku (kuchiku)" },
        { time: 126.0, text: "Tere sare gum lelu me (lelu me)" },
        { time: 129.5, text: "Aur meri sari khusi to you" },
        { time: 133.5, text: "H A P P Y Birthday birthday birthday" },
        { time: 137.0, text: "H A P P Y Birthday birthday birthday" },
        { time: 140.5, text: "H A P P Y Birthday birthday birthday" },
        { time: 144.0, text: "H A P P Y Birthday birthday birthday" }
    ];

    let preloadedTextures = {};
    let decorativeTextures = {};
    let loadedCount = 0;
    const totalCount = imagesToLoad.length + Object.keys(decorativeAssets).length;
    let sceneInitialized = false;

    // UI Elements
    const introScreen = document.getElementById('intro-screen');
    const btnEnter = document.getElementById('btn-enter');
    const loaderBarContainer = document.getElementById('loader-bar-container');
    const loaderBar = document.getElementById('loader-bar');
    const loaderText = document.getElementById('loader-text');
    const fixedMusicBtn = document.getElementById('music-toggle-fixed');
    const scrollHelper = document.getElementById('scroll-helper');
    const wishBg = document.getElementById('wish-bg');
    const wishCard = document.getElementById('wish-card');
    const btnLove = document.getElementById('btn-love');
    const btnMute = document.getElementById('btn-mute');
    const vinylDisc = document.getElementById('vinyl-disc');
    const audioIconSvg = document.getElementById('audio-icon-svg');
    const audioTrackName = document.getElementById('audio-track-name');

    // Synced Lyrics UI Elements
    const lyricsPanel = document.getElementById('lyrics-panel');
    const lyricsScroll = document.getElementById('lyrics-scroll');
    const lyricsToggleTab = document.getElementById('lyrics-toggle-tab');
    const lyricsHeaderTitle = document.getElementById('lyrics-header-title');

    // Gift Box reveal elements
    const giftBoxWrapper = document.getElementById('gift-box-wrapper');
    const giftBoxContainer = document.getElementById('gift-box-container');
    const wishRevealedContent = document.getElementById('wish-revealed-content');
    const wishControls = document.getElementById('wish-controls');

    // HTML5 Local Audio Tag
    const localAudio = document.getElementById('local-audio');
    let useLocalAudio = false;

    // Check if local audio is available
    localAudio.addEventListener('canplaythrough', () => {
        useLocalAudio = true;
        audioTrackName.textContent = "Surprise Birthday Song";
        lyricsHeaderTitle.textContent = "Surprise Track";
        console.log("Local audio (music.mp3) is available and will be used as the primary soundtrack!");
    }, { once: true });

    localAudio.addEventListener('error', () => {
        useLocalAudio = false;
        audioTrackName.textContent = "Happy Birthday (Goodbye)";
        lyricsHeaderTitle.textContent = "Happy Birthday (Goodbye)";
        console.log("Local audio (music.mp3) not found or failed to load. Falling back to YouTube soundtrack!");
    });

    // Populate Lyrics panel DOM
    lyricsData.forEach((line, index) => {
        const lineEl = document.createElement('div');
        lineEl.className = 'lyric-line';
        lineEl.textContent = line.text;
        lineEl.dataset.index = index;

        // Clicking a lyric line seeks the song and scrolls the website to that exact lyric segment
        lineEl.addEventListener('click', () => {
            const targetTime = line.time;
            
            if (useLocalAudio) {
                localAudio.currentTime = targetTime;
            } else if (ytPlayerReady && ytPlayer) {
                ytPlayer.seekTo(targetTime, true);
            }

            // Sync the webpage scrollbar to match the time percentage of the clicked lyric
            let duration = useLocalAudio ? localAudio.duration : (ytPlayerReady ? ytPlayer.getDuration() : 0);
            if (duration > 0) {
                const ratio = targetTime / duration;
                const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
                lastProgrammaticScrollTime = Date.now();
                window.scrollTo(0, ratio * maxScrollY);
            }
        });

        lyricsScroll.appendChild(lineEl);
    });

    // Expand/Collapse lyrics tab toggle click
    lyricsToggleTab.addEventListener('click', () => {
        lyricsPanel.classList.toggle('open');
    });

    // 1. Image Preloading System (Loads all 36 photos + 8 decorative graphics)
    function startPreloading() {
        btnEnter.style.display = 'none';
        loaderBarContainer.style.display = 'block';
        loaderText.style.display = 'block';

        const textureLoader = new THREE.TextureLoader();

        // Preload Photos
        imagesToLoad.forEach((url) => {
            textureLoader.load(
                url,
                (texture) => {
                    preloadedTextures[url] = texture;
                    texture.minFilter = THREE.LinearFilter;
                    texture.generateMipmaps = false;
                    imageLoadedSuccess();
                },
                undefined,
                (error) => {
                    console.error("Failed to load photo texture: ", url, error);
                    preloadedTextures[url] = createPlaceholderTexture();
                    imageLoadedSuccess();
                }
            );
        });

        // Preload Decorative Graphics
        Object.keys(decorativeAssets).forEach((key) => {
            const url = decorativeAssets[key];
            textureLoader.load(
                url,
                (texture) => {
                    decorativeTextures[key] = texture;
                    texture.minFilter = THREE.LinearFilter;
                    texture.generateMipmaps = false;
                    imageLoadedSuccess();
                },
                undefined,
                (error) => {
                    console.error("Failed to load decorative asset: ", url, error);
                    decorativeTextures[key] = createPlaceholderTexture();
                    imageLoadedSuccess();
                }
            );
        });

        wishBg.style.backgroundImage = `url('${imagesToLoad[0]}')`;
    }

    function imageLoadedSuccess() {
        loadedCount++;
        const percent = Math.floor((loadedCount / totalCount) * 100);
        loaderBar.style.width = percent + '%';
        loaderText.textContent = `Loading memories... ${percent}%`;

        if (loadedCount >= totalCount) {
            setTimeout(() => {
                loaderBarContainer.style.display = 'none';
                loaderText.textContent = "Ready to explore!";
                btnEnter.style.display = 'inline-flex';
                gsap.fromTo(btnEnter, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 });
            }, 600);
        }
    }

    function createPlaceholderTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0a081a';
        ctx.fillRect(0, 0, 128, 128);
        return new THREE.CanvasTexture(canvas);
    }

    startPreloading();

    // 2. YouTube IFrame API Background Music Integration (Fallback)
    let ytPlayer;
    let ytPlayerReady = false;
    let isPlaying = false;

    // Load YouTube API script asynchronously (Failsafe dynamic head append)
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = function() {
        ytPlayer = new YT.Player('youtube-player', {
            height: '1',
            width: '1',
            videoId: 'MNhKgf0yU0Q', // Video ID: Happy Birthday (Goodbye)
            playerVars: {
                'autoplay': 0,
                'loop': 1,
                'playlist': 'MNhKgf0yU0Q', // Loop workaround
                'controls': 0,
                'disablekb': 1,
                'fs': 0,
                'rel': 0,
                'modestbranding': 1
            },
            events: {
                'onReady': () => {
                    ytPlayerReady = true;
                    console.log("YouTube Player Loaded Successfully");
                },
                'onStateChange': (e) => {
                    if (e.data === YT.PlayerState.ENDED) {
                        ytPlayer.playVideo();
                    }
                }
            }
        });
    };

    function playAudio() {
        if (useLocalAudio) {
            localAudio.volume = 0.55;
            localAudio.play().then(() => {
                isPlaying = true;
                updateAudioUI(true);
                startAutoScrollSync(); // Start auto-scroll synchronization
            }).catch(err => {
                console.error("Local audio playback blocked. Falling back to YouTube.", err);
                useLocalAudio = false;
                playYoutubeAudio();
            });
        } else {
            playYoutubeAudio();
        }
    }

    function playYoutubeAudio() {
        if (ytPlayerReady && ytPlayer) {
            ytPlayer.setVolume(45);
            ytPlayer.playVideo();
            isPlaying = true;
            updateAudioUI(true);
            startAutoScrollSync(); // Start auto-scroll synchronization
        } else {
            setTimeout(playYoutubeAudio, 250);
        }
    }

    function toggleAudio() {
        if (useLocalAudio) {
            if (isPlaying) {
                localAudio.pause();
                isPlaying = false;
                updateAudioUI(false);
            } else {
                localAudio.play();
                isPlaying = true;
                updateAudioUI(true);
            }
        } else {
            if (!ytPlayerReady || !ytPlayer) return;
            
            if (isPlaying) {
                ytPlayer.pauseVideo();
                isPlaying = false;
                updateAudioUI(false);
            } else {
                ytPlayer.playVideo();
                isPlaying = true;
                updateAudioUI(true);
            }
        }
    }

    function updateAudioUI(playing) {
        if (playing) {
            vinylDisc.classList.add('playing');
            fixedMusicBtn.classList.add('playing');
            audioIconSvg.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
        } else {
            vinylDisc.classList.remove('playing');
            fixedMusicBtn.classList.remove('playing');
            audioIconSvg.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63(14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
        }
    }

    let countdownFinished = false;

    function handleIntroProceed() {
        if (sceneInitialized) return;
        if (!countdownFinished) return; // Prevent proceeding until countdown unlocks
        
        playAudio();
        setupWebGLScene();
        sceneInitialized = true;

        gsap.to(introScreen, {
            opacity: 0,
            duration: 1.4,
            ease: 'power3.inOut',
            onComplete: () => {
                introScreen.style.visibility = 'hidden';
                scrollHelper.classList.add('visible');
                fixedMusicBtn.classList.add('visible');
                lyricsPanel.classList.add('visible'); // Show lyrics tab on proceed
                triggerConfettiCelebrate();
            }
        });
    }

    btnEnter.addEventListener('click', handleIntroProceed);

    // Countdown Timer Logic
    const targetDate = new Date("July 20, 2026 00:00:00").getTime();
    
    function updateCountdown() {
        const now = Date.now();
        const difference = targetDate - now;
        
        const hoursVal = document.getElementById('hours');
        const minutesVal = document.getElementById('minutes');
        const secondsVal = document.getElementById('seconds');
        const countdownContainer = document.getElementById('countdown-container');

        if (difference <= 0) {
            countdownFinished = true;
            if (countdownContainer) countdownContainer.style.display = 'none';
            btnEnter.disabled = false;
            btnEnter.style.opacity = '1';
            btnEnter.style.pointerEvents = 'auto';
            return true;
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (hoursVal) hoursVal.textContent = String(hours).padStart(2, '0');
        if (minutesVal) minutesVal.textContent = String(minutes).padStart(2, '0');
        if (secondsVal) secondsVal.textContent = String(seconds).padStart(2, '0');

        btnEnter.disabled = true;
        btnEnter.style.opacity = '0.5';
        btnEnter.style.pointerEvents = 'none';
        return false;
    }

    const countdownInterval = setInterval(() => {
        const finished = updateCountdown();
        if (finished) {
            clearInterval(countdownInterval);
        }
    }, 1000);

    updateCountdown();

    // Developer secret bypass: Click the countdown title to unlock immediately for testing
    const countdownTitle = document.querySelector('.countdown-title');
    if (countdownTitle) {
        countdownTitle.addEventListener('click', () => {
            clearInterval(countdownInterval);
            countdownFinished = true;
            const countdownContainer = document.getElementById('countdown-container');
            if (countdownContainer) countdownContainer.style.display = 'none';
            btnEnter.disabled = false;
            btnEnter.style.opacity = '1';
            btnEnter.style.pointerEvents = 'auto';
            console.log("Countdown bypassed by developer click");
        });
    }

    introScreen.addEventListener('wheel', (e) => {
        if (e.deltaY > 0 && countdownFinished) {
            handleIntroProceed();
        }
    });

    let touchStartY = 0;
    introScreen.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    introScreen.addEventListener('touchmove', (e) => {
        const touchEndY = e.touches[0].clientY;
        if (touchStartY - touchEndY > 30 && countdownFinished) {
            handleIntroProceed();
        }
    }, { passive: true });

    fixedMusicBtn.addEventListener('click', toggleAudio);
    btnMute.addEventListener('click', toggleAudio);

    // 3. Bidirectional Audio-Scroll Synchronizer (Auto-Scroll duration = song duration)
    let lastProgrammaticScrollTime = 0;
    let lastUserScrollTime = 0;
    let isUserScrolling = false;
    let isTouching = false; // Flag to track actual touch state on mobile
    let userScrollTimeout = null;

    function setUserActiveScroll() {
        isUserScrolling = true;
        lastUserScrollTime = Date.now();
        
        if (userScrollTimeout) clearTimeout(userScrollTimeout);
        userScrollTimeout = setTimeout(() => {
            isUserScrolling = false;
        }, 2500); // 2.5 seconds of no interaction resets user scroll flag (covers momentum scroll)
    }

    // Capture manual user interactions
    window.addEventListener('wheel', setUserActiveScroll, { passive: true });
    window.addEventListener('touchmove', setUserActiveScroll, { passive: true });
    window.addEventListener('mousedown', (e) => {
        // Prevent click/taps from locking scroll forever on mobile by ignoring touch-initiated mouse events
        if (e.pointerType === 'touch' || e.pointerType === 'pen') return;
        setUserActiveScroll();
    }, { passive: true });
    
    // Explicit touch tracking to prevent auto-scrolling while user is touching screen
    window.addEventListener('touchstart', () => {
        isTouching = true;
        isUserScrolling = true;
    }, { passive: true });
    
    window.addEventListener('touchend', () => {
        isTouching = false;
        setUserActiveScroll(); // Resets userScrollTimeout to release lock 2.5s after touch ends
    }, { passive: true });

    window.addEventListener('keydown', (e) => {
        const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
        if (keys.includes(e.keyCode)) {
            setUserActiveScroll();
        }
    });

    function startAutoScrollSync() {
        // Log auto-scroll activation (Handled smoothly in animate loop)
        console.log("Smooth auto-scroll synchronization engine activated");
    }

    // Seek song progress when user manually scrolls
    window.addEventListener('scroll', () => {
        // ONLY seek the audio if the scroll event was triggered by manual user interaction
        if (!isUserScrolling) return;
        
        const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
        if (maxScrollY <= 0) return;
        
        const scrollProgress = window.scrollY / maxScrollY;

        if (useLocalAudio) {
            const duration = localAudio.duration;
            if (duration && duration > 0) {
                localAudio.currentTime = scrollProgress * duration;
            }
        } else if (ytPlayerReady && ytPlayer) {
            const duration = ytPlayer.getDuration();
            if (duration && duration > 0) {
                const targetTime = scrollProgress * duration;
                ytPlayer.seekTo(targetTime, true);
            }
        }
    });

    // Gift Box reveal
    let giftOpened = false;
    function openGift() {
        if (giftOpened) return;
        giftOpened = true;

        giftBoxContainer.classList.add('opened');
        triggerConfettiGiftOpen();

        gsap.to(giftBoxWrapper, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
                giftBoxWrapper.style.display = 'none';
                wishRevealedContent.style.display = 'block';
                wishControls.style.display = 'flex';

                gsap.fromTo([wishRevealedContent, wishControls],
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1.0, stagger: 0.15, ease: 'power3.out' }
                );
            }
        });
    }

    giftBoxWrapper.addEventListener('click', openGift);
    giftBoxWrapper.addEventListener('touchend', (e) => {
        e.preventDefault(); // Prevent double trigger
        openGift();
    }, { passive: false });

    function triggerConfettiGiftOpen() {
        let heart;
        if (typeof confetti.shapeFromPath === 'function') {
            try {
                heart = confetti.shapeFromPath({
                    path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                });
            } catch(e) {
                console.warn("SVG path shapes not supported by this canvas-confetti version", e);
            }
        }
        
        const colors = ['#f3557a', '#da2a54', '#e5c158', '#ffffff'];
        const shapes = heart ? [heart, 'circle'] : ['circle', 'square'];
        
        confetti({
            particleCount: 110,
            spread: 90,
            origin: { y: 0.6 },
            shapes: shapes,
            colors: colors
        });
        
        setTimeout(() => {
            confetti({
                particleCount: 70,
                angle: 60,
                spread: 55,
                origin: { x: 0.15, y: 0.6 },
                colors: colors
            });
        }, 150);

        setTimeout(() => {
            confetti({
                particleCount: 70,
                angle: 120,
                spread: 55,
                origin: { x: 0.85, y: 0.6 },
                colors: colors
            });
        }, 300);
    }

    // 4. Three.js WebGL Scene Setup
    function setupWebGLScene() {
        const canvasElement = document.getElementById('webgl-canvas');
        const scene = new THREE.Scene();
        
        // Camera
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 10);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas: canvasElement, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1.25);
        pointLight.position.set(0, 15, 20);
        scene.add(pointLight);

        // Spline Path
        const splinePath = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 5),        // Start
            new THREE.Vector3(2.5, 0.8, -18),  // Chapter 1 Smiles
            new THREE.Vector3(-3.2, -1.2, -45), // Turn
            new THREE.Vector3(-0.8, 0, -68),   // Chapter 2 Lataguri Forest
            new THREE.Vector3(3.5, 1.8, -95),  // Turn
            new THREE.Vector3(0.5, -1, -120),  // Chapter 3 Silly Moments
            new THREE.Vector3(-2.8, 1, -145),  // Turn
            new THREE.Vector3(0, 0, -170),     // Chapter 4 Birthdays
            new THREE.Vector3(0, 0, -200)      // End wishes
        ]);

        // Background colors array for smooth scroll-driven theme transitions
        const themeColors = [
            { t: 0.0, color: new THREE.Color(0x05030a) }, // Start
            { t: 0.2, color: new THREE.Color(0x0e0921) }, // Smiles (Violet)
            { t: 0.45, color: new THREE.Color(0x02160d) }, // Lataguri Forest (Lush Pine Emerald Green)
            { t: 0.65, color: new THREE.Color(0x190514) }, // Silly Moments (Magenta)
            { t: 0.85, color: new THREE.Color(0x050a1a) }, // Birthdays (Midnight Blue)
            { t: 1.0, color: new THREE.Color(0x080510) }  // Final Wish
        ];

        function getInterpolatedColor(progress) {
            let start = themeColors[0];
            let end = themeColors[themeColors.length - 1];
            
            for (let i = 0; i < themeColors.length - 1; i++) {
                if (progress >= themeColors[i].t && progress <= themeColors[i+1].t) {
                    start = themeColors[i];
                    end = themeColors[i+1];
                    break;
                }
            }
            
            const range = end.t - start.t;
            const factor = range > 0 ? (progress - start.t) / range : 0;
            return new THREE.Color().copy(start.color).lerp(end.color, factor);
        }

        // Starry Sky Background particles
        const starsCount = 2500;
        const starsGeometry = new THREE.BufferGeometry();
        const starsPositions = new Float32Array(starsCount * 3);
        const starsOpacities = new Float32Array(starsCount);

        for (let i = 0; i < starsCount * 3; i += 3) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 12 + Math.random() * 45;
            const z = -Math.random() * 220 + 10;
            
            starsPositions[i] = Math.cos(angle) * radius;
            starsPositions[i+1] = Math.sin(angle) * radius;
            starsPositions[i+2] = z;
            starsOpacities[i/3] = Math.random();
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
        starsGeometry.setAttribute('opacity', new THREE.BufferAttribute(starsOpacities, 1));

        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.28,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const starParticles = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starParticles);

        // Floating glowing orbs
        const orbsCount = 50;
        const orbsGroup = new THREE.Group();
        const orbGeometry = new THREE.SphereGeometry(0.15, 16, 16);
        const goldMaterial = new THREE.MeshBasicMaterial({ color: 0xe5c158, transparent: true, opacity: 0.65 });
        const pinkMaterial = new THREE.MeshBasicMaterial({ color: 0xf1a7b4, transparent: true, opacity: 0.65 });

        for (let i = 0; i < orbsCount; i++) {
            const material = Math.random() > 0.55 ? goldMaterial : pinkMaterial;
            const orb = new THREE.Mesh(orbGeometry, material);
            const t = Math.random();
            const pos = splinePath.getPointAt(t);
            const angle = Math.random() * Math.PI * 2;
            const offset = 3 + Math.random() * 9;
            
            orb.position.set(
                pos.x + Math.cos(angle) * offset,
                pos.y + Math.sin(angle) * offset,
                pos.z + (Math.random() - 0.5) * 6
            );
            
            orb.userData = {
                speed: 0.6 + Math.random() * 1.4,
                offset: Math.random() * Math.PI * 2,
                radius: 0.12 + Math.random() * 0.25
            };
            orbsGroup.add(orb);
        }
        scene.add(orbsGroup);

        // Floating 3D Balloons Group
        const balloonsGroup = new THREE.Group();
        const balloons = [];
        const balloonColors = [0xda2a54, 0xf1a7b4, 0xe5c158, 0x8a2be2, 0x00fa9a, 0x00bfff];

        for (let i = 0; i < 22; i++) {
            const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
            const balloonMat = new THREE.MeshPhongMaterial({
                color: color,
                shininess: 70,
                specular: 0xffffff,
                transparent: true,
                opacity: 0.82
            });

            const balloonGeo = new THREE.SphereGeometry(0.35, 16, 16);
            const balloonMesh = new THREE.Mesh(balloonGeo, balloonMat);
            balloonMesh.scale.set(1, 1.25, 1);

            const knotGeo = new THREE.ConeGeometry(0.06, 0.08, 6);
            const knotMesh = new THREE.Mesh(knotGeo, balloonMat);
            knotMesh.position.y = -0.42;
            knotMesh.rotation.x = Math.PI;
            balloonMesh.add(knotMesh);

            const stringGeo = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, -0.45, 0),
                new THREE.Vector3(0.04, -1.2, 0),
                new THREE.Vector3(-0.02, -2.0, 0)
            ]);
            const stringMat = new THREE.LineBasicMaterial({ color: 0xcccccc, transparent: true, opacity: 0.35 });
            const stringLine = new THREE.Line(stringGeo, stringMat);
            balloonMesh.add(stringLine);

            const t = Math.random();
            const pos = splinePath.getPointAt(t);
            const angle = Math.random() * Math.PI * 2;
            const offset = 4.5 + Math.random() * 8;

            balloonMesh.position.set(
                pos.x + Math.cos(angle) * offset,
                pos.y - 12 - Math.random() * 22,
                pos.z + (Math.random() - 0.5) * 8
            );

            balloonMesh.userData = {
                t: t,
                speedY: 0.028 + Math.random() * 0.042,
                swaySpeed: 0.8 + Math.random() * 1.2,
                swayOffset: Math.random() * Math.PI * 2,
                originalX: balloonMesh.position.x
            };

            balloonsGroup.add(balloonMesh);
            balloons.push(balloonMesh);
        }
        scene.add(balloonsGroup);

        // Place Photo Planes in 3D Space (All 36 photos)
        const photoGroup = new THREE.Group();
        const photoMeshes = [];

        imagesToLoad.forEach((url, index) => {
            let t = 0.06 + (index / (imagesToLoad.length - 1)) * 0.82;
            
            const pos = splinePath.getPointAt(t);
            const tangent = splinePath.getTangentAt(t).normalize();
            const normal = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize();
            
            const sideMultiplier = index % 2 === 0 ? 1 : -1;
            const offsetAmount = 2.4 + Math.random() * 1.2;
            
            const photoPos = new THREE.Vector3().copy(pos).addScaledVector(normal, sideMultiplier * offsetAmount);
            photoPos.y += (Math.random() - 0.5) * 1.3;

            const texture = preloadedTextures[url];
            let aspect = 1.33;
            
            if (texture && texture.image && texture.image.width && texture.image.height) {
                aspect = texture.image.width / texture.image.height;
            }
            
            const height = 3.3;
            const width = height * aspect;
            
            const frameGeometry = new THREE.PlaneGeometry(width + 0.25, height + 0.25);
            const frameMaterial = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.12,
                side: THREE.DoubleSide
            });
            const frameMesh = new THREE.Mesh(frameGeometry, frameMaterial);
            frameMesh.position.copy(photoPos);

            const edges = new THREE.EdgesGeometry(frameGeometry);
            const borderLines = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
                color: 0xe5c158,
                transparent: true,
                opacity: 0.35
            }));
            frameMesh.add(borderLines);

            const photoGeometry = new THREE.PlaneGeometry(width, height);
            const photoMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide
            });
            const photoMesh = new THREE.Mesh(photoGeometry, photoMaterial);
            photoMesh.position.set(0, 0, 0.015);
            frameMesh.add(photoMesh);

            const lookPos = splinePath.getPointAt(Math.min(t + 0.04, 1));
            frameMesh.lookAt(lookPos);
            frameMesh.rotation.z += (Math.random() - 0.5) * 0.12;
            frameMesh.rotation.y += (Math.random() - 0.5) * 0.08;

            frameMesh.userData = {
                bobSpeed: 0.8 + Math.random() * 0.8,
                bobOffset: Math.random() * Math.PI,
                originalY: photoPos.y,
                originalRotationX: frameMesh.rotation.x,
                originalRotationY: frameMesh.rotation.y
            };

            photoGroup.add(frameMesh);
            photoMeshes.push(frameMesh);
        });

        scene.add(photoGroup);

        // Place Decorative Musical Instruments, Characters & Lyric elements in 3D Space
        const decElementsGroup = new THREE.Group();
        const decElements = [];
        
        // Settings for musical decorative frames
        const decAssetsKeys = ['guitar', 'piano', 'notes', 'girl', 'cupcake', 'whiskey', 'shake', 'hugs'];
        
        // Spawn 32 glowing musical and lyric-based assets along the spline path
        for (let i = 0; i < 32; i++) {
            const key = decAssetsKeys[i % decAssetsKeys.length];
            const texture = decorativeTextures[key];
            if (!texture) continue;
            
            // Distributed progress factors
            const t = 0.08 + (i / 31) * 0.8;
            
            const pos = splinePath.getPointAt(t);
            const tangent = splinePath.getTangentAt(t).normalize();
            const normal = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize();
            
            // Place on opposite sides of photo planes to fill empty spaces
            const sideMultiplier = i % 2 === 0 ? -1 : 1; 
            const offsetAmount = 3.5 + Math.random() * 2.0; // Place slightly further out than photos
            
            const decPos = new THREE.Vector3().copy(pos).addScaledVector(normal, sideMultiplier * offsetAmount);
            decPos.y += (Math.random() - 0.5) * 3; // Vertical random offset
            
            // Additive blending material lets black backgrounds become transparent, making strokes glow!
            const size = key === 'notes' ? 1.4 : (key === 'girl' ? 1.8 : 2.0);
            const decGeo = new THREE.PlaneGeometry(size, size);
            const decMat = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false
            });
            
            const decMesh = new THREE.Mesh(decGeo, decMat);
            decMesh.position.copy(decPos);
            
            // Orient towards path
            const lookPos = splinePath.getPointAt(Math.min(t + 0.04, 1));
            decMesh.lookAt(lookPos);
            
            decMesh.userData = {
                key: key,
                originalY: decPos.y,
                bobSpeed: 1 + Math.random() * 1.5,
                bobOffset: Math.random() * Math.PI * 2,
                spinSpeed: 0.1 + Math.random() * 0.4
            };
            
            decElementsGroup.add(decMesh);
            decElements.push(decMesh);
        }
        
        scene.add(decElementsGroup);

        // Tracking Mouse Coordinates for Gaze Parallax
        let mouse = { x: 0, y: 0 };
        window.addEventListener('mousemove', (e) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        // Camera Update Logic with Walking Bobbing/Swaying Effect
        function updateCameraAlongSpline(progress) {
            if (progress >= 0.94) {
                canvasElement.classList.add('blurred');
                scrollHelper.classList.remove('visible');
            } else {
                canvasElement.classList.remove('blurred');
                scrollHelper.classList.add('visible');
            }

            // Interpolate theme color based on progress
            const currentBgColor = getInterpolatedColor(progress);
            renderer.setClearColor(currentBgColor, 1);

            const t = Math.min(progress * 0.99, 0.985);
            const targetPos = splinePath.getPointAt(t);
            
            // Calculate walking steps
            const stepsCount = 38;
            const walkPhase = progress * Math.PI * 2 * stepsCount;
            
            // Bobbing (up and down) and swaying (left and right)
            const bobY = Math.sin(walkPhase) * 0.12;
            const swayX = Math.cos(walkPhase * 0.5) * 0.09;
            const rollZ = Math.sin(walkPhase * 0.5) * 0.015;

            camera.position.set(
                targetPos.x + swayX,
                targetPos.y + bobY,
                targetPos.z
            );
            
            // Look ahead with mouse gaze shifting
            const lookAheadPoint = splinePath.getPointAt(Math.min(t + 0.02, 0.99));
            const lookGaze = lookAheadPoint.clone();
            lookGaze.x += mouse.x * 0.65;
            lookGaze.y += mouse.y * 0.65;
            
            camera.lookAt(lookGaze);
            camera.rotation.z += rollZ;
        }

        // GSAP ScrollTrigger Binding
        gsap.timeline({
            scrollTrigger: {
                trigger: "#scroll-container",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
                onUpdate: (self) => {
                    updateCameraAlongSpline(self.progress);
                    updateUIOverlays(self.progress);
                }
            }
        });

        // Resize Listener
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        // Animation Loop
        const clock = new THREE.Clock();

        function updateSmoothAutoScroll() {
            if (!isPlaying) return;
            
            // If user is currently touching or scrolled manually recently (2.5s for momentum), wait before auto-scrolling
            if (isTouching || (Date.now() - lastUserScrollTime < 2500)) return;
            
            let duration = 0;
            let currentTime = 0;

            if (useLocalAudio) {
                duration = localAudio.duration;
                currentTime = localAudio.currentTime;
            } else if (ytPlayerReady && ytPlayer) {
                duration = ytPlayer.getDuration();
                currentTime = ytPlayer.getCurrentTime();
            }

            if (!duration || duration <= 0) return;
            
            const ratio = currentTime / duration;
            const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
            if (maxScrollY <= 0) return;
            
            const targetScrollY = ratio * maxScrollY;
            
            // Directly scroll to the target position, GSAP scrub handles visual camera smoothing!
            lastProgrammaticScrollTime = Date.now();
            window.scrollTo(0, targetScrollY);

            // --- Spotify-style Lyrics Highlighter Sync ---
            let activeIndex = -1;
            for (let i = 0; i < lyricsData.length; i++) {
                if (currentTime >= lyricsData[i].time) {
                    activeIndex = i;
                } else {
                    break;
                }
            }

            const lines = lyricsScroll.querySelectorAll('.lyric-line');
            lines.forEach((lineEl, i) => {
                if (i === activeIndex) {
                    if (!lineEl.classList.contains('active')) {
                        lineEl.classList.add('active');
                        
                        // Center the active line inside the lyrics panel
                        const containerHeight = lyricsScroll.clientHeight;
                        const lineOffsetTop = lineEl.offsetTop;
                        const lineHeight = lineEl.clientHeight;
                        
                        lyricsScroll.scrollTo({
                            top: lineOffsetTop - containerHeight / 2 + lineHeight / 2,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    lineEl.classList.remove('active');
                }
            });
        }

        function animate() {
            requestAnimationFrame(animate);

            updateSmoothAutoScroll();

            const time = clock.getElapsedTime();

            // Photo meshes floating bobbing
            photoMeshes.forEach((mesh) => {
                const data = mesh.userData;
                mesh.position.y = data.originalY + Math.sin(time * 0.8 * data.bobSpeed + data.bobOffset) * 0.1;
                mesh.rotation.y = data.originalRotationY + Math.cos(time * 0.4 * data.bobSpeed + data.bobOffset) * 0.04;
            });

            // Decorative musical and lyric items floating and spinning
            decElements.forEach((mesh) => {
                const data = mesh.userData;
                // Float up and down
                mesh.position.y = data.originalY + Math.sin(time * 0.6 * data.bobSpeed + data.bobOffset) * 0.25;
                // Wobble spin
                mesh.rotation.z = Math.sin(time * data.spinSpeed) * 0.2;
                if (data.key === 'notes' || data.key === 'cupcake' || data.key === 'whiskey') {
                    // Make some items rotate slowly
                    mesh.rotation.y = time * 0.2;
                }
            });

            // Twinkle/rotate stars
            starParticles.rotation.z = time * 0.003;

            // Orb coordinates floating
            orbsGroup.children.forEach((orb) => {
                const data = orb.userData;
                orb.position.y += Math.sin(time * data.speed + data.offset) * 0.0015;
                orb.position.x += Math.cos(time * data.speed + data.offset) * 0.0008;
            });

            // Animate floating balloons rising upward
            balloons.forEach((balloon) => {
                const data = balloon.userData;
                balloon.position.y += data.speedY;
                balloon.position.x = data.originalX + Math.sin(time * data.swaySpeed + data.swayOffset) * 0.25;
                
                // Reset below screen if floated too high
                if (balloon.position.y > 16) {
                    balloon.position.y = -16;
                }
            });

            renderer.render(scene, camera);
        }

        animate();
    }

    // Story Cards & final layout sync
    const cards = [
        { progressMin: 0.12, progressMax: 0.32, id: 'card-chapter-1' },
        { progressMin: 0.32, progressMax: 0.54, id: 'card-chapter-2' },
        { progressMin: 0.54, progressMax: 0.74, id: 'card-chapter-3' },
        { progressMin: 0.74, progressMax: 0.92, id: 'card-chapter-4' }
    ];

    function updateUIOverlays(progress) {
        cards.forEach((card) => {
            const cardEl = document.getElementById(card.id);
            if (!cardEl) return;

            if (progress >= card.progressMin && progress <= card.progressMax) {
                const range = card.progressMax - card.progressMin;
                const mid = card.progressMin + range / 2;
                const distFromMid = Math.abs(progress - mid);
                let opacity = 1 - (distFromMid / (range / 2));
                opacity = Math.min(opacity * 1.5, 1);
                
                cardEl.style.opacity = opacity;
                cardEl.style.transform = `translateY(${20 * (1 - opacity)}px)`;
                cardEl.style.visibility = 'visible';
                cardEl.style.pointerEvents = opacity > 0.4 ? 'auto' : 'none';
            } else {
                cardEl.style.opacity = 0;
                cardEl.style.transform = 'translateY(20px)';
                cardEl.style.visibility = 'hidden';
                cardEl.style.pointerEvents = 'none';
            }
        });

        // Final Section wishes fade-in
        if (progress >= 0.90) {
            wishCard.classList.add('visible');
            wishCard.style.pointerEvents = 'auto';
        } else {
            wishCard.classList.remove('visible');
            wishCard.style.pointerEvents = 'none';
        }
    }

    // 4. Confetti Celebrations
    function triggerConfettiCelebrate() {
        const duration = 2.5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 1000 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 40 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

    // Custom Heart shower for the "Shower Love" button click
    btnLove.addEventListener('click', () => {
        const duration = 1.5 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#f1a7b4', '#da2a54', '#e5c158']
            });
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#f1a7b4', '#da2a54', '#e5c158']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        const scalar = 2;
        let heart;
        if (typeof confetti.shapeFromPath === 'function') {
            try {
                heart = confetti.shapeFromPath({
                    path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                });
            } catch(e) {}
        }

        confetti({
            particleCount: 45,
            scalar: 1.8,
            shapes: heart ? [heart] : ['circle'],
            spread: 90,
            origin: { y: 0.65 },
            colors: ['#f3557a', '#da2a54', '#e5c158']
        });
    });

    // 5. HTML Sparkles Overlay
    const decContainer = document.getElementById('decorations');
    const sparklesCount = 20;

    for (let i = 0; i < sparklesCount; i++) {
        createHtmlSparkle();
    }

    function createHtmlSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const size = 3 + Math.random() * 8;
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        
        decContainer.appendChild(sparkle);

        gsap.fromTo(sparkle, 
            { opacity: 0, scale: 0.2 },
            { 
                opacity: 0.3 + Math.random() * 0.5, 
                scale: 1, 
                duration: 2 + Math.random() * 3,
                yoyo: true, 
                repeat: -1, 
                delay: Math.random() * 4,
                pointerEvents: 'none',
                ease: 'power1.inOut' 
            }
        );
    }
}
