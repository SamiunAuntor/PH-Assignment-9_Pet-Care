# PawCare - Complete Pet Care Services

## Description
PawCare is a comprehensive platform designed for pet owners to ensure their furry friends receive the best care possible. Users can explore various pet care services, book appointments with expert veterinarians, access grooming options, and receive professional advice—all in one user-friendly interface.

## Live URL
[Visit PawCare](https://pawcare-pets.web.app/)

## Key Features
- **Single Page Application (SPA)** with smooth navigation using React Router
- **User Authentication System**
  - Email/Password Login and Registration
  - Google Sign-in Integration
  - Password Reset Functionality
- **Protected Routes** for authenticated users only
- **User Profile Management**
  - View Profile Information
  - Update Profile Details
- **Service Exploration**
  - Browse Various Pet Care Services
  - View Detailed Service Information
  - Book Services with Form Submission
- **Expert Veterinarians Section** showcasing professional profiles
- **Responsive Design** optimized for mobile, tablet, and desktop devices
- **Interactive UI Elements** with smooth animations
- **Toast Notifications** for user feedback on actions

## Technologies Used
- **Frontend Framework:** React 19
- **Routing:** React Router 7
- **Styling:**
  - Tailwind CSS 4
  - DaisyUI 5
- **Authentication:** Firebase Authentication
- **UI Components/Libraries:**
  - Swiper.js for carousels
  - Lucide React for icons
  - React Fast Marquee for scrolling content
  - Animate.css for animations
- **Notifications:** React Hot Toast
- **Build Tool:** Vite 7

## NPM Packages Used
```
"dependencies": {
  "@tailwindcss/vite": "^4.1.16",
  "animate.css": "^4.1.1",
  "daisyui": "^5.3.9",
  "firebase": "^12.4.0",
  "lucide-react": "^0.548.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-fast-marquee": "^1.6.5",
  "react-hot-toast": "^2.6.0",
  "react-router": "^7.9.4",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.16"
}
```

## How to Run Locally
1. Clone the repository
   ```
   git clone https://github.com/yourusername/pet-care.git
   ```
2. Navigate to the project directory
   ```
   cd pet-care
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Start the development server
   ```
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`

## Project Structure
- `/src` - Source code
  - `/Components` - Reusable UI components
  - `/Pages` - Application pages
  - `/Layouts` - Layout components
  - `/AuthProvider` - Authentication context and configuration
  - `/assets` - Images and static assets

## Future Enhancements
- Appointment scheduling system
- Pet health records management
- Online consultation with veterinarians
- E-commerce section for pet supplies

---
© 2024 PawCare. All rights reserved.
