# Samip Hospital - React Application

A modern, responsive hospital website built with React, featuring state management, form handling, and Bootstrap styling.

## 🏥 Features

### Core Features
- **State Management**: Uses React hooks (useState) for component state management
- **Form Handling**: Comprehensive form validation and submission handling
- **Bootstrap Integration**: Modern, responsive design using React Bootstrap
- **React Router**: Client-side routing for seamless navigation
- **Responsive Design**: Mobile-first approach with responsive layouts

### Pages & Components
- **Home**: Carousel, service cards, about section, and specialities
- **About**: Hospital information, mission, vision, and statistics
- **Services**: Medical services with interactive cards and hover effects
- **Contact**: Contact form with validation and contact information
- **Profile**: Patient profile management with form editing capabilities
- **Navigation**: Responsive navbar with mobile hamburger menu
- **Footer**: Comprehensive footer with links and contact information

### Technical Features
- **Form Validation**: Real-time validation with error messages
- **Interactive Elements**: Hover effects, animations, and transitions
- **Accessibility**: Focus management and semantic HTML
- **Performance**: Optimized components and lazy loading ready
- **Modern UI/UX**: Clean, professional healthcare design

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hospital-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
hospital-react/
├── public/
│   ├── images/          # Hospital images and assets
│   └── index.html       # Main HTML file
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx   # Navigation component
│   │   ├── Home.jsx     # Home page component
│   │   ├── About.jsx    # About page component
│   │   ├── Services.jsx # Services page component
│   │   ├── Contact.jsx  # Contact page component
│   │   ├── Profile.jsx  # Profile page component
│   │   ├── Footer.jsx   # Footer component
│   │   └── *.css        # Component-specific styles
│   ├── App.jsx          # Main App component with routing
│   ├── App.css          # Global styles
│   └── index.js         # Application entry point
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **React Bootstrap** - UI component library
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icon library
- **CSS3** - Custom styling and animations

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Color Scheme**: Professional healthcare blue (#0069D9) with complementary colors
- **Typography**: Ubuntu font family for modern, clean appearance
- **Animations**: Smooth transitions and hover effects
- **Cards**: Modern card-based layouts with shadows and hover effects
- **Forms**: User-friendly forms with validation feedback

## 📋 Form Features

### Contact Form
- Real-time validation
- Success/error messages
- Loading states
- Form reset functionality

### Profile Form
- Edit/Save functionality
- Field validation
- Disabled state management
- Profile completion tracking

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/components/`
2. Add the route in `App.jsx`
3. Add navigation link in `Navbar.jsx`

### Styling
- Component-specific styles in individual `.css` files
- Global styles in `App.css`
- Bootstrap classes for layout and components

### Images
- Place images in `public/images/`
- Reference them as `/images/filename.ext`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect React settings
3. Deploy with default settings

## 📄 License

This project is created for educational purposes. All rights reserved.

## 👨‍💻 Author

**Samip Shrestha**
- GitHub: [@samipshrestha](https://github.com/samipshrestha)
- Email: hospital1234@gmail.com

## 🙏 Acknowledgments

- Original HTML/CSS hospital project
- React Bootstrap for UI components
- Font Awesome for icons
- Bootstrap team for the CSS framework

---

**Note**: This is a React conversion of the original HTML/CSS hospital project, featuring modern web development practices and enhanced user experience.
