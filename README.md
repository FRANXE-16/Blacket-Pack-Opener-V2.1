# Blacket Pack Opener - Enhanced UI

A feature-rich, modern user interface for bulk pack opening in Blacket. This script provides a streamlined experience with real-time statistics, visual feedback, and an elegant design.

![Version](https://img.shields.io/badge/version-2.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

##  Features

### Core Functionality
- **Bulk Pack Opening** - Open hundreds of packs with a single click
- **Smart Rate Limiting** - Respects rarity-based delays to avoid API issues
- **Real-time Progress** - Visual progress bar and live statistics
- **Token Management** - Automatic token tracking and spend calculation

###  Visual Experience
- **Dual Layout Modes**
  - **Docked Mode**: Left sidebar for controls, right sidebar for results
  - **Floating Mode**: Draggable combined window
- **Live Results Feed** - See unlocked blooks with images as they appear
- **Rarity Gradient Colors** - Each item displays with its rarity-themed gradient
- **Smooth Animations** - Polished slide-in effects and transitions

###  Statistics & Tracking
- Total packs opened
- Total tokens spent
- Average packs per unique blook
- Individual blook counter with visual cards
- Session-based tracking

###  Quality of Life
- **Hotkey Support** - Press `O` to quick-open packs
- **Auto-sync Inputs** - Seamlessly switch between layouts
- **Smart Placeholders** - Shows maximum affordable packs
- **Stop/Reset Controls** - Full control over opening sessions
- **Toast Notifications** - Instant feedback for actions

##  Installation

### Method 1: Bookmarklet (Recommended)
1. Create a new bookmark in your browser
2. Name it "Blacket Opener"
3. Copy the entire script and wrap it in:
```javascript
   javascript:(function(){/* PASTE SCRIPT HERE */})();
