# Portfolio Website

This is a personal portfolio website built as a single-page application (SPA) using Angular. It showcases professional experience, skills, projects, education, certifications, and awards. The site serves as an online resume and portfolio for Asish Bishoi, an Associate Consultant at Infosys with expertise in cloud technologies, particularly AWS.

## Application Overview

The application is a modern, responsive portfolio website that displays professional information in an organized, visually appealing manner. It features two main views:
- A new, component-based Angular layout with dynamic data loading
- An archived view of the original static HTML site for comparison

The site is designed to be hosted on GitHub Pages and provides an interactive way for potential employers or collaborators to learn about the developer's background and capabilities.

## Technology Stack

### Primary Language
- **TypeScript**: Version ~5.8.2
- **Angular**: Version 19.2.19

### Key Frameworks and Libraries
- **Angular CLI**: 19.2.22 (for development and build tools)
- **Bootstrap**: 5.3.8 (for responsive design and UI components)
- **RxJS**: 7.8.2 (for reactive programming)
- **Zone.js**: 0.15.1 (for Angular change detection)
- **Lucide Angular**: 0.475.0 (for icons)

### Build Tools
- **Vite**: 6.2.0 (for fast development server and building)
- **Tailwind CSS**: 4.1.14 (integrated with Vite for utility-first CSS)

## How to Run Locally

### Prerequisites
- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/asishab/asishab.github.io.git
   cd asishab.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/portfolio` directory, ready for deployment.

## Architecture

The application follows Angular's component-based architecture with standalone components. Key architectural decisions:

- **Standalone Components**: Each component is self-contained with its own imports, styles, and templates
- **Global Styles**: Uses Bootstrap for consistent styling across components
- **View Encapsulation**: Most components use default encapsulation, while the old-site component uses `ViewEncapsulation.None` to apply global styles from the legacy design
- **Routing**: Simple client-side routing with two main routes
- **Data Management**: Static JSON files for content, loaded synchronously

## Components Structure

The application is organized into multiple Angular components, each responsible for displaying specific sections of the portfolio.

### Component Tree
```
app/
├── app.component.ts (root component)
├── app.routes.ts (routing configuration)
├── home/
│   ├── home.component.ts (main page container)
│   ├── home.component.html
│   └── home.component.css
├── header/
│   ├── header.component.ts (hero/intro section)
│   ├── header.component.html
│   └── header.component.css
├── career-summary/
│   ├── career-summary.component.ts (professional summary)
│   ├── career-summary.component.html
│   └── career-summary.component.css
├── work-experience/
│   ├── work-experience.component.ts (work history)
│   ├── work-experience.component.html
│   └── work-experience.component.css
├── projects/
│   ├── projects.component.ts (project showcase)
│   ├── projects.component.html
│   └── projects.component.css
├── skills-and-tools/
│   ├── skills-and-tools.component.ts (technical skills)
│   ├── skills-and-tools.component.html
│   └── skills-and-tools.component.css
├── education/
│   ├── education.component.ts (educational background)
│   ├── education.component.html
│   └── education.component.css
├── certificates/
│   ├── certificates.component.ts (certifications)
│   ├── certificates.component.html
│   └── certificates.component.css
├── awards/
│   ├── awards.component.ts (achievements and awards)
│   ├── awards.component.html
│   └── awards.component.css
├── common-components/
│   ├── navbar/
│   │   ├── navbar.component.ts (navigation bar)
│   │   ├── navbar.component.html
│   │   └── navbar.component.css
│   └── footer/
│       ├── footer.component.ts (site footer)
│       ├── footer.component.html
│       └── footer.component.css
└── old/
    └── old-site/
        ├── old-site.component.ts (legacy site view)
        ├── old-site.component.html
        └── old-site.component.css
```

### Component Purposes

- **app.component**: Root component that bootstraps the application
- **home.component**: Container component that orchestrates all main sections of the portfolio
- **header.component**: Displays the hero section with name, title, and contact information
- **career-summary.component**: Shows professional summary and key achievements
- **work-experience.component**: Lists work history with company details and responsibilities
- **projects.component**: Showcases completed projects and contributions
- **skills-and-tools.component**: Displays technical skills and tools proficiency
- **education.component**: Presents educational background and qualifications
- **certificates.component**: Lists professional certifications
- **awards.component**: Highlights achievements and recognitions
- **navbar.component**: Provides navigation between sections and external links
- **footer.component**: Contains copyright and additional links
- **old-site.component**: Displays the original static HTML portfolio design for comparison

## Routing

The application uses Angular Router for client-side navigation:

1. **Root Route (`''`)**: Maps to `HomeComponent`, displaying the main portfolio page with all sections
2. **Old Site Route (`'old'`)**: Maps to `OldSiteComponent`, showing the archived version of the portfolio

Navigation is handled through the navbar component, which includes links to social profiles (LinkedIn, GitHub) and the old site view.

## OLD Folder

The `OLD/` directory contains the original static HTML version of the portfolio website. This includes:

- **index.html**: The main HTML file with the complete portfolio layout
- **css/**: Stylesheets including Bootstrap, Font Awesome, and custom themes
  - `bootstrap.min.css`: Bootstrap framework
  - `font-awesome.css`: Font Awesome icons
  - `custom-css/`: Custom styling files
    - `custom-design.css`: Additional design elements (e.g., spoiler effects)
    - `pillar-1.css`: Main theme with Bootstrap customizations
- **js/**: JavaScript files (jQuery, Bootstrap JS)
- **icons/** and **webfonts/**: Icon fonts and web fonts

This folder preserves the original design for comparison and serves as a backup of the static version.

## Data Folder

The `src/data/` directory contains JSON files that store the portfolio content in a structured format:

- **awards.json**: List of professional awards and recognitions
- **experience.json**: Work experience details including companies, roles, and achievements
- **projects.json**: Project information with descriptions and technologies used

### Data Format
All data files use JSON format with consistent structures. For example:

```json
{
  "experiences": [
    {
      "company": "Company Name",
      "role": "Job Title",
      "period": "Start - End",
      "description": ["Array of achievement strings"],
      "cloudServices": ["Array of technologies used"]
    }
  ]
}
```

This structure allows for easy maintenance and updates to the portfolio content.

## Assets Folder

The `src/assets/` directory contains static assets used throughout the application:

- Images (profile photos, project screenshots, etc.)
- Icons and logos
- Other media files

These assets are copied to the build output during the build process and can be referenced in components.

## Additional Information

### Deployment
The application is configured for deployment on GitHub Pages. The build output in `dist/portfolio` can be directly deployed to any static hosting service.

### Responsive Design
The site is fully responsive, using Bootstrap's grid system and custom CSS to ensure optimal display across desktop, tablet, and mobile devices.

### Performance
- Uses Angular's Ahead-of-Time (AOT) compilation for optimized production builds
- Implements lazy loading where applicable
- Minimizes bundle size through tree-shaking

### Development Notes
- Components are standalone, allowing for better tree-shaking and modularity
- Uses Angular's latest features and best practices
- Includes TypeScript for type safety and better development experience

### Future Enhancements
Potential improvements could include:
- Dynamic content loading from a CMS or API
- Interactive project galleries
- Contact form integration
- Dark mode toggle
- Multi-language support

For any questions or contributions, please refer to the GitHub repository issues or contact the maintainer.
