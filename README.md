# Splain 2.0

**Turning curiosity into things that work.**

The second version of my personal portfolio, exploring interfaces, systems, and creative coding through an interactive project showcase.

**[Visit v2.splain.dev](https://v2.splain.dev)**

## About

I’m John Ogunsola, an aspiring developer based in England.

Splain 2.0 is a space to explore web design, share technical ideas, and develop my skills through building. It brings together project previews, case studies, and interactive visuals in a responsive portfolio.

## Features

- Project filters for web apps, systems, and experiments
- Project detail dialogs with challenges, approaches, and technology tags
- An interactive Canvas particle field that responds to cursor movement
- Responsive layouts for desktop and mobile
- A live clock showing the time in England
- Navigation highlighting based on the visible section
- A brief animated introduction
- Keyboard focus indicators, a skip link, and reduced-motion support

## Sample projects

The portfolio currently includes four sample project showcases:

| Project | Concept |
| --- | --- |
| Orbit | Analytics workspace |
| Relay | Live event monitoring |
| Field | Interactive particle study |
| Index | Personal reading library |

These entries demonstrate the portfolio layout and case-study format. Orbit, Relay, and Index are interface mockups; Field includes a working particle animation.

## Built with

- **HTML5** — page structure and project previews
- **CSS3** — styling, responsive layouts, and animations
- **JavaScript** — filtering, dialogs, navigation, and the clock
- **Canvas 2D** — particle rendering
- **Google Fonts** — DM Sans typography

The portfolio itself uses plain HTML, CSS, and JavaScript. Technologies named in the sample project cards describe those concepts, rather than dependencies of this repository.

## Running locally

1. Clone the repository:

   ```bash
   git clone https://github.com/johnogunsola/Splain2.0.git
   ```

2. Open the project folder.
3. Open `index.html` in your browser, or serve the folder with an editor extension such as Live Server.

No package installation or build step is required. An internet connection is needed to load Google Fonts and the external analytics script.

## Project structure

```text
Splain2.0/
├── index.html             # Portfolio content and project previews
├── style.css              # Styles and responsive layouts
├── app.js                 # Filters, dialogs, clock, and particle animation
├── splain-intro.css       # Introduction animation styles
├── splain-intro.js        # Introduction animation behaviour
├── favicon.png
└── favicon.svg
```

## Customising the portfolio

- Edit `index.html` to update the introduction, project cards, and About section.
- Edit the `projects` array in `app.js` to change the case studies.
- Update the colours and layout in `style.css`.
- Replace the sample content with your own projects and results.
- Update or remove the analytics script in `index.html` when adapting the site.

## Explore

- [Splain 2.0](https://v2.splain.dev)
- [Splain Studio](https://splain.dev)
- [My GitHub](https://github.com/johnogunsola)

## Feedback

Found a bug or have an idea? Open an issue in this repository.

Built by **John Ogunsola**.
