export type Project = {
  slug: string
  title: string
  href: string
  logoSrc: string
  screenshotSrc?: string
  youtubeEmbed?: string 
  description: string
  firstRelease: string
  details?: string
}

export type PortfolioSet = {
  id: "digital" | "robotics"
  title: string
  blurb?: string
  projects: Project[]
}

/**
 * Edit these to your real projects.
 * Images live under /public/images
 */
export const portfolioSets: PortfolioSet[] = [
  {
    id: "digital",
    title: "Digital Solutions",
    blurb: "Apps, products, and interactive builds.",
    projects: [
{
  slug: "aita-the-game",
  title: "Am I the Asshole - The Game?",
  href: "https://aita-the-game.vercel.app/",
  logoSrc: "/images/aita-the-game-logo.png",
  screenshotSrc: "/images/aita-the-game-shot.png",
  description: "Test your moral compass by judging condensed internet drama and seeing if your gut instinct matches the final verdict of the digital court of public opinion.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "alternature",
  title: "AlterNature",
  href: "https://alternatureprod.vercel.app/",
  logoSrc: "/images/alternature-logo.png",
  screenshotSrc: "/images/alternature-shot.png",
  description: "Transform your shopping list into a force for good by swapping everyday products for ethical, planet-friendly alternatives that align with your values.",
  firstRelease: "2025",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "gen-z-eight-ball",
  title: "Gen Z 8 Ball",
  href: "https://gen-z-eight-ball.vercel.app/",
  logoSrc: "/images/gen-z-eight-ball-logo.png",
  screenshotSrc: "/images/gen-z-eight-ball-shot.png",
  description: "Get your life together with a vibe check from the universe's most main character 8-ball, delivering straight facts and zero cap wisdom to keep your aura immaculate.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "corgi-coin-flip",
  title: "Corgi Coin Flip",
  href: "https://corgi-coin-flip.vercel.app/",
  logoSrc: "/images/corgi-coin-flip-logo.png",
  screenshotSrc: "/images/corgi-coin-flip-shot.png",
  description: "Settle every life-changing dilemma with a flick of your thumb and the ultimate wag of fate—will it be the adorable face or the iconic fluffy butt?",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "friend-maker-missions",
  title: "Friend Maker Missions",
  href: "https://friend-maker-missions.vercel.app/",
  logoSrc: "/images/friend-maker-missions-logo.png",
  screenshotSrc: "/images/friend-maker-missions-shot.png",
  description: "Turn your social life into an epic quest with gamified missions designed to break the ice and transform awkward hellos into genuine, lifelong connections.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "pet-speak",
  title: "Pet Speak",
  href: "https://petspeak.vercel.app/",
  logoSrc: "/images/pet-speak-logo.png",
  screenshotSrc: "/images/pet-speak-shot.png",
  description: "Unleash your inner beast and transform your boring human sentences into a chorus of barks, meows, or roars that would make Dr. Dolittle proud.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "pocketpedia",
  title: "Pocketpedia",
  href: "https://pocketpedia.vercel.app/",
  logoSrc: "/images/pocketpedia-logo.png",
  screenshotSrc: "/images/pocketpedia-shot.png",
  description: "Skip the rabbit hole and get the 'too long; didn't read' version of the world's knowledge with instant, high-impact summaries that give you the facts without the filler.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "gas-or-pass",
  title: "Gas or Pass",
  href: "https://gas-or-pass.vercel.app/",
  logoSrc: "/images/gas-or-pass-logo.png",
  screenshotSrc: "/images/gas-or-pass-shot.png",
  description: "Step into the shoes of a professional appraiser and test your market savvy by predicting the cost of everything from thrift store treasures to luxury high-rises in a race against the clock.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "pawsonality",
  title: "Pawsonality",
  href: "https://pawsonality-iota.vercel.app/",
  logoSrc: "/images/pawsonality-logo.png",
  screenshotSrc: "/images/pawsonality-shot.png",
  description: "Unlock the secrets of your pet’s psyche with a personality deep-dive that transforms their quirks and zoomies into a definitive four-letter profile.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "dumplings-anime-list",
  title: "Dumpling's Anime List",
  href: "https://dumplings-anime-list.vercel.app/",
  logoSrc: "/images/dumplings-anime-list-logo.png",
  screenshotSrc: "/images/dumplings-anime-list-shot.png",
  description: "From adrenaline-pumping battles to heart-wrenching stories that will leave you in your feelings, this handpicked collection is your ultimate map to the very best of Japanese animation.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "guess-the-weight",
  title: "Guess the Weight",
  href: "https://guess-the-weight.vercel.app/",
  logoSrc: "/images/guess-the-weight-logo.png",
  screenshotSrc: "/images/guess-the-weight-shot.png",
  description: "Put your shopping instincts to the ultimate test and see if you’ve got an appreciation for the value of money in this game where knowing the market value is the difference between a jackpot and a total bust.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "guess-the-price",
  title: "Guess the Price",
  href: "https://guess-the-price-one.vercel.app/",
  logoSrc: "/images/guess-the-price-logo.png",
  screenshotSrc: "/images/guess-the-price-shot.png",
  description: "Step into the shoes of a professional appraiser and test your market savvy by predicting the cost of everything from thrift store treasures to luxury high-rises in a race against the clock.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
},
{
  slug: "ace-rocket",
  title: "Ace Rocket Tennis",
  href: "https://acerockettennis.com.au/",
  logoSrc: "/images/ace-rocket-logo.png",
  screenshotSrc: "/images/ace-rocket-shot.png",
  description: "Elevate your game with professional-grade precision and a customized tension that transforms your racket into the ultimate weapon on the court.",
  firstRelease: "2026",
  details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
}
    ]
  },
  {
    id: "robotics",
    title: "Robotics Solutions",
    blurb: "Robotics prototypes, experiments, and field projects.",
    projects: [
      {
        slug: "chinese-new-year-music-box",
        title: "Chinese New Year Music Box",
        href: "https://www.youtube.com/watch?v=2dXpbO5ZseM&list=PLoPgGJSMp6CgpWlflE6Z-RWCPsMF7MlVD&index=9",
        logoSrc: "/images/chinese-new-year-music-box.png",
        youtubeEmbed: "https://www.youtube.com/embed/2dXpbO5ZseM",
        description: "Celebrate the spirit of the lunar new year with a sensory feast of traditional treats and festive melodies that bring the joy of the reunion right to your doorstep.",
        firstRelease: "2022",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "chinese-new-year-dragon-bow",
        title: "Chinese New Year Dragon Bow",
        href: "https://www.youtube.com/watch?v=R3_vmLR0gyk",
        logoSrc: "/images/chinese-new-year-dragon-bow.png",
        youtubeEmbed: "https://www.youtube.com/embed/R3_vmLR0gyk",
        description: "Ignite your backyard battles with a legendary fusion of foam and flame that launches blazing projectiles for the ultimate high-stakes archery experience.",
        firstRelease: "2024",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "roller-shoes",
        title: "Roller Shoes",
        href: "https://www.youtube.com/watch?v=7PrBtM9i0GE",
        logoSrc: "/images/roller-shoes.png",
        youtubeEmbed: "https://www.youtube.com/embed/7PrBtM9i0GE",
        description: "Glide through your daily commute and turn every sidewalk into your personal runway with a seamless blend of classic footwear and high-speed mobility.",
        firstRelease: "2021",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "card-gun",
        title: "Playing Card Dealing Gun",
        href: "https://www.youtube.com/watch?v=Iqo2Ja1oTTQ",
        logoSrc: "/images/card-gun.png",
        youtubeEmbed: "https://www.youtube.com/embed/Iqo2Ja1oTTQ",
        description: "Raise the stakes of every game night by firing a high-speed stream of cards straight into the hands of your fellow players with mechanical precision.",
        firstRelease: "2023",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "led-backpack",
        title: "LED Backpack",
        href: "https://www.youtube.com/watch?v=1FsTQ9Pd5t8",
        logoSrc: "/images/led-backpack.png",
        youtubeEmbed: "https://www.youtube.com/embed/1FsTQ9Pd5t8",
        description: "Light up the night and turn your commute into a moving masterpiece with a customizable canvas of vibrant pixels that expresses your mood in real time.",
        firstRelease: "2022",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "hat-mask",
        title: "Bad Guys Disguise Mask",
        href: "https://www.youtube.com/watch?v=m0Cx_3btZxk",
        logoSrc: "/images/hat-mask.png",
        youtubeEmbed: "https://www.youtube.com/embed/m0Cx_3btZxk",
        description: "Step into the shadows and claim your privacy with a sleek, wearable shield that transforms your profile into an enigma.",
        firstRelease: "2023",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "uber-bot",
        title: "Automatic Uber Eats Meal Ordering",
        href: "https://www.youtube.com/watch?v=6KG5xVhP-fI",
        logoSrc: "/images/uber-bot.png",
        youtubeEmbed: "https://www.youtube.com/embed/6KG5xVhP-fI",
        description: "Streamline your cravings with a digital concierge that navigates menus and builds the ultimate basket based on your budget and dietary goals.",
        firstRelease: "2022",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "job-bot",
        title: "Job Hunting Bot",
        href: "https://www.youtube.com/watch?v=Gg9xeeUH3jE",
        logoSrc: "/images/job-bot.png",
        youtubeEmbed: "https://www.youtube.com/embed/Gg9xeeUH3jE",
        description: "Stop shouting into the void of job boards and let a digital headhunter do the heavy lifting by scanning, filtering, and tailoring your path to a paycheck.",
        firstRelease: "2021",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "shut-up-bot",
        title: "Automatically Yell at Your Neighbours",
        href: "https://www.youtube.com/watch?v=pkT-mvlipLg",
        logoSrc: "/images/shut-up-bot.png",
        youtubeEmbed: "https://www.youtube.com/embed/pkT-mvlipLg",
        description: "Restore your peace and quiet without the awkward hallway confrontation by letting a digital mediator deliver a firm, yet tactful, nudge to your noisy surroundings.",
        firstRelease: "2021",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "pickup-bot",
        title: "Pick Up Lines Tester",
        href: "https://www.youtube.com/watch?v=jvOHcbQbh0U",
        logoSrc: "/images/pickup-bot.png",
        youtubeEmbed: "https://www.youtube.com/embed/jvOHcbQbh0U",
        description: "Sharpen your social skills and test your best material on a digital wingman that gives you real-time feedback on your charm, wit, and cringe factor.",
        firstRelease: "2021",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "beer-near-bot",
        title: "Beer Near Me",
        href: "https://www.youtube.com/watch?v=uGxqM2YITIM",
        logoSrc: "/images/beer-near-bot.png",
        youtubeEmbed: "https://www.youtube.com/embed/uGxqM2YITIM",
        description: "Stay safe and bear-aware with a real-time tracking network that turns your smartphone into a high-tech wildlife radar for the backcountry.",
        firstRelease: "2023",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "news-bot",
        title: "Voice to Text News Reporter",
        href: "https://www.youtube.com/watch?v=hBgBd4jnE-E",
        logoSrc: "/images/news-bot.png",
        youtubeEmbed: "https://www.youtube.com/embed/hBgBd4jnE-E",
        description: "Turn your morning routine into a hands-free briefing with a digital anchor that filters the noise and delivers only the stories that matter to you.",
        firstRelease: "2021",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "tinder-bot",
        title: "Tinder Automatic Swiping",
        href: "https://www.youtube.com/watch?v=vfxA04a8_hU",
        logoSrc: "/images/tinder-bot.png",
        youtubeEmbed: "https://www.youtube.com/embed/vfxA04a8_hU",
        description: "Take the manual labor out of modern romance and let a digital wingman handle the heavy lifting while you focus on the actual conversation.",
        firstRelease: "2021",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "cheer-bot",
        title: "Anti-Procrastination Cheerleader",
        href: "https://www.youtube.com/watch?v=iAIy05y_E9c",
        logoSrc: "/images/cheer-bot.png",
        youtubeEmbed: "https://www.youtube.com/embed/iAIy05y_E9c",
        description: "Turn your inner critic into a world-class hype squad with a digital coach that transforms every I'll do it later into a high-energy Let’s go right now!",
        firstRelease: "2021",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "oop-cards",
        title: "Object Orientated Playing Cards",
        href: "https://www.youtube.com/watch?v=ovqwXjHzY8o",
        logoSrc: "/images/oop-cards.png",
        youtubeEmbed: "https://www.youtube.com/embed/ovqwXjHzY8o",
        description: "Elevate your next poker night or magic trick with a deck that exists entirely in the digital realm, blending classic gameplay with futuristic flair.",
        firstRelease: "2021",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "movie-bot",
        title: "IMDb Movie Recommender",
        href: "https://www.youtube.com/watch?v=iryn04kvxfw",
        logoSrc: "/images/movie-bot.png",
        youtubeEmbed: "https://www.youtube.com/embed/iryn04kvxfw",
        description: "End the eternal scroll with a digital curator that syncs your mood, your subscriptions, and your social circle to find the perfect match for your screen.",
        firstRelease: "2022",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
      {
        slug: "screen-on-bot",
        title: "Always On : Active Status",
        href: "https://www.youtube.com/watch?v=eaAJTWm-3Uw",
        logoSrc: "/images/screen-on-bot.png",
        youtubeEmbed: "https://www.youtube.com/embed/eaAJTWm-3Uw",
        description: "Stay visible and available across your entire digital workspace with a virtual presence engine that keeps your green light glowing while you focus on deep work.",
        firstRelease: "2021",
        details: "TODO: case study notes (what it is, what you built, the stack, outcomes)."
      },
    ]
  }
]

export function getAllProjects(): Project[] {
  return portfolioSets.flatMap((s) => s.projects)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug)
}
