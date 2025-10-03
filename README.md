# Blacket Pack Opener - Enhanced UI

A feature-rich, modern user interface for bulk pack opening in Blacket. This script provides a streamlined experience with real-time statistics, visual feedback, and an elegant design.

![Version](https://img.shields.io/badge/version-2.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Screenshots

### Floating Mode
![Floating Mode](https://i.postimg.cc/C5VngZXZ/Screenshot-2025-10-03-185601.png)

### Docked Mode
![Docked Mode](https://i.postimg.cc/MHxHLCf1/ggg.png)

## Features

### Core Functionality
- **Bulk Pack Opening** - Open hundreds of packs with a single click
- **Smart Rate Limiting** - Respects rarity-based delays to avoid API issues
- **Real-time Progress** - Visual progress bar and live statistics
- **Token Management** - Automatic token tracking and spend calculation

### Visual Experience
- **Dual Layout Modes**
  - **Docked Mode**: Left sidebar for controls, right sidebar for results
  - **Floating Mode**: Draggable combined window
- **Live Results Feed** - See unlocked blooks with images as they appear
- **Rarity Gradient Colors** - Each item displays with its rarity-themed gradient
- **Smooth Animations** - Polished slide-in effects and transitions

### Statistics & Tracking
- Total packs opened
- Total tokens spent
- Average packs per unique blook
- Individual blook counter with visual cards
- Session-based tracking

### Quality of Life
- **Hotkey Support** - Press `O` to quick-open packs
- **Auto-sync Inputs** - Seamlessly switch between layouts
- **Smart Placeholders** - Shows maximum affordable packs
- **Stop/Reset Controls** - Full control over opening sessions
- **Toast Notifications** - Instant feedback for actions

## How to Use

### Step 1: Open Blacket
Navigate to Blacket in your browser and make sure you're logged in.

### Step 2: Open Browser Console
- **Windows/Linux**: Press `F12` or `Ctrl + Shift + J` (Chrome/Edge) / `Ctrl + Shift + K` (Firefox)
- **Mac**: Press `Cmd + Option + J` (Chrome/Edge) / `Cmd + Option + K` (Firefox)

### Step 3: Paste the Script
1. Copy the entire script from the repository
2. Paste it into the console
3. Press `Enter` to execute

The interface will immediately appear on your screen.

### Step 4: Start Opening Packs
1. **Select a Pack** - Choose from the dropdown menu
2. **Set Amount** - Enter how many packs to open (or use the suggested max)
3. **Adjust Delay** (Optional) - Add extra milliseconds between opens if needed
4. **Click Open** - Start the opening process
5. **View Results** - Watch unlocked blooks appear in real-time on the right panel

## Alternative Installation Methods

### Method 1: Bookmarklet
1. Create a new bookmark in your browser
2. Name it "Blacket Opener"
3. Copy the entire script and wrap it in:
```javascript
