# SaveIt - Food Waste AI Platform

A comprehensive web platform designed to combat food waste through AI detection, real-time tracking, and community engagement.

## 📋 Platform Overview

SaveIt is a fully-integrated website consisting of 6 interconnected pages, each serving a specific purpose in the food waste prevention ecosystem:

### Pages

1. **Index (Home)** - `index.html`
   - Main landing hub
   - Platform overview and statistics
   - Quick access to all features
   - Value proposition

2. **Landing (About)** - `Landing.html`
   - Comprehensive mission statement
   - Impact metrics
   - Why SaveIt matters
   - Call to action

3. **AI Detection Page** - `AIPAGE.html`
   - Real-time AI vision system
   - Live camera feed visualization
   - Food detection and tracking
   - System status monitoring

4. **Dashboard** - `dashboard.html`
   - Personal waste prevention metrics
   - Action history
   - Impact tracking
   - Achievement badges
   - Level progression system

5. **Marketplace** - `marketplace.html`
   - NGO and food rescue organization directory
   - Available food listings
   - Donation opportunities
   - Logistics coordination
   - Sidebar-based navigation

6. **Tracking** - `Track.html`
   - Live rescue tracking
   - Real-time delivery maps
   - ETA monitoring
   - Impact metrics during transactions

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - fully static files
- Internet connection for external assets (Tailwind CSS, Google Fonts, Material Symbols)

### Installation

1. Extract all files to your desired directory
2. Open `index.html` in your web browser
3. Navigate through pages using the unified navigation bar

### File Structure
```
codexify/
├── index.html           # Main landing hub
├── Landing.html         # About/Mission page
├── AIPAGE.html          # AI detection system
├── dashboard.html       # Personal dashboard
├── marketplace.html     # Organization marketplace
├── Track.html           # Live tracking page
├── style.css            # Global styles and animations
├── script.js            # Core JavaScript functionality
├── food_waste_ai_local/ # Python backend files
│   ├── read_serial.py   # Serial data reading
│   └── requirements.txt  # Python dependencies
└── README.md            # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#21c45d` (Eco Green)
- **Background Dark**: `#0f1512`
- **Surface Dark**: `#1a241f`
- **Glass Border**: `rgba(255, 255, 255, 0.08)`

### Typography
- **Font Family**: Plus Jakarta Sans
- **Sizes**: Responsive scaling based on viewport

### Components
- Glass-morphism cards
- Gradient borders
- Animated elements
- Responsive grid layouts

## 🔗 Navigation System

All pages are interconnected through a unified navigation bar featuring:
- Logo/Home link
- Page links (Home, About, AI Detection, Dashboard, Marketplace, Tracking)
- Hover effects with underline animation
- Mobile-responsive menu toggle
- Active page highlighting

### Navigation Implementation
The navigation includes:
- Fixed header positions
- Smooth transitions
- Responsive design for mobile/tablet
- Accessibility features

## 🎯 Key Features

### 1. AI Food Detection (`AIPAGE.html`)
- Real-time camera feed
- ML-powered food identification
- Grid overlay visualization
- System status indicators

### 2. Dashboard (`dashboard.html`)
- Statistics and metrics
- Impact tracking
- Action history
- Achievement system
- Progress towards goals

### 3. Marketplace (`marketplace.html`)
- Browse organizations
- Filter by location
- Available food listings
- Direct donation interface
- Sidebar navigation

### 4. Live Tracking (`Track.html`)
- Real-time delivery maps
- ETA countdown
- Impact meters
- Notification system
- Progress tracking

### 5. Analytics & Stats
- Waste prevented metrics
- Meals rescued
- Environmental impact
- Community participation

## 📱 Responsive Design

All pages are fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Mobile Features:
- Hidden desktop navigation (shown via menu toggle)
- Stack-based layouts
- Touch-friendly buttons
- Optimized typography

## 🛠️ JavaScript Functionality

The `script.js` file provides:

### Navigation Manager
- Automatic page highlighting
- Mobile menu toggling
- Smooth navigation handling

### Theme Manager
- Dark/light mode toggle
- localStorage persistence
- System preference detection

### Analytics
- Page view tracking
- Event tracking
- Navigation tracking

### Form Validation
- Input validation
- Error messaging
- User feedback

### Notifications
- Success/error/warning toasts
- Auto-dismiss
- Positioned notifications

### Utilities
- Debounce/throttle helpers
- Query parameter handling
- Intersection observers for animations

## 🐍 Python Backend (Optional)

The `food_waste_ai_local/` directory contains:
- `read_serial.py` - Serial port communication for IoT devices
- `requirements.txt` - Python dependencies

### Setup Backend
```bash
cd food_waste_ai_local
pip install -r requirements.txt
python read_serial.py
```

## 🔐 Security Considerations

- All data processing happens client-side by default
- No API keys embedded in frontend code
- HTTPS recommended for production
- Input validation on all forms
- XSS protection through text escaping

## ♿ Accessibility

Features:
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus visible on all interactive elements

## 🚀 Deployment

### Static Hosting
Can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static web host

### Environment Setup
```bash
# No build step required
# Files are ready to deploy as-is
```

## 🔄 Integration Points

The platform can integrate with:
- IoT sensors (via serial communication)
- Mobile apps
- Third-party APIs
- Analytics platforms
- Payment processors

## 📊 Statistics Features

### Real-time Metrics
- Meals rescued count
- Waste prevented (kg)
- Users engaged
- Organizations connected
- Carbon impact

## 🎓 Learning Resources

The platform demonstrates:
- Modern CSS (Tailwind)
- Responsive web design
- JavaScript ES6+
- Accessibility best practices
- Glass-morphism UI patterns
- Animation techniques

## 🤝 Contributing

To extend the platform:
1. Maintain the unified navigation structure
2. Follow the design system colors and typography
3. Use Tailwind CSS classes
4. Update navigation links when adding pages
5. Test on mobile and desktop

## 📝 License

SaveIt Food Waste Platform - 2026

## 📞 Support

For issues or questions:
1. Check the documentation
2. Review console for error messages
3. Test in different browsers
4. Verify all files are in the correct directory

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real-time database
- [ ] Mobile app native versions
- [ ] Advanced analytics dashboard
- [ ] Social features
- [ ] Leaderboards
- [ ] Real-time notifications
- [ ] Multi-language support
- [ ] Integration with NGOs' systems

## 🌍 Impact Goals

SaveIt aims to:
- Reduce food waste by 25%
- Connect 1000+ food waste heroes
- Rescue 50,000+ meals
- Build sustainable communities
- Empower local organizations

---

**Made with ♻️ for a sustainable future**
