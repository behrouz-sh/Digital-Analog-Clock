# Digital & Analog Clock

A fully functional **digital and analog clock** built with **HTML, SCSS, and JavaScript**. This project demonstrates responsive design, dynamic time updates, and interactive UI for switching between clock types.

---

## Features

- **Digital Clock**

  - Shows current time in `HH:MM:SS` format.
  - Updates every second using JavaScript.

- **Analog Clock**

  - Realistic hour, minute, and second hands.
  - Smooth hour hand movement based on minutes.
  - Updates every second.

- **Settings Panel**

  - Switch between digital and analog clocks.
  - Modal with backdrop blur effect.

- **Responsive Design**

  - Fully responsive layout for desktop, tablet, and mobile.
  - Scales clock size dynamically with screen width.

- **Modern UI**

  - Clean, minimalistic look.
  - Hover effects for buttons.
  - Custom fonts included.

---

## Demo

[View Live Demo](https://behrouz-sh.github.io/Digital-Analog-Clock/)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/behrouz-sh/digital-analog-clock.git
```

2. Open `index.html` in your browser.

> SCSS is already compiled to CSS, all JS files are linked and functional.

---

## Project Structure

```
/project-root
│
├─ /css
│   └─ main.css       # Compiled CSS from SCSS
├─ /js
│   ├─ main.js        # UI and settings logic
│   ├─ digital.js     # Digital clock logic
│   └─ analog.js      # Analog clock logic
├─ /fonts             # Custom fonts
├─ /images            # Clock background, icons, etc.
└─ index.html
```

---

## Usage

- Open the page in any modern browser.
- Click the **gear icon** to open the settings panel.
- Switch between **Digital** and **Analog** clocks.

---

## Tech Stack

- **HTML5**
- **SCSS (compiled to CSS)**
- **Vanilla JavaScript**
- **Flexbox & Responsive Design**

---

## Future Improvements

- Add **theme switcher** (dark/light mode).
- Enable **timezones** support.
- Keyboard accessibility for settings modal.
- Smooth animations using `requestAnimationFrame` for analog clock.

---

## Author

**Behrouz** – [GitHub Profile](https://github.com/behrouz-sh)

---

## License

This project is open-source and available under the MIT License.
