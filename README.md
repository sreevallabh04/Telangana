# Educational Platform

A comprehensive educational platform for students from grades 6-10.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── auth/           # Authentication related components
│   │   ├── layout/         # Layout components (Header, Sidebar, etc.)
│   │   ├── quiz/           # Quiz related components
│   │   ├── subjects/       # Subject selection and display
│   │   └── ui/            # Reusable UI components
│   ├── data/
│   │   └── curriculum/    # Educational content organized by grade
│   │       ├── grade6/
│   │       │   ├── mathematics/
│   │       │   │   ├── chapter1.ts
│   │       │   │   └── chapter2.ts
│   │       │   ├── science/
│   │       │   └── english/
│   │       ├── grade7/
│   │       ├── grade8/    # Physics, Chemistry, Biology split starts
│   │       ├── grade9/
│   │       └── grade10/
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── services/          # API and external service integrations
│   ├── store/             # State management
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
```

## Features

- Comprehensive curriculum for grades 6-10
- Interactive quizzes with explanations
- Progress tracking
- Dark/light theme support
- Responsive design
- Grade-appropriate subject organization
  - Grades 6-7: Mathematics, Science, English
  - Grades 8-10: Mathematics, Physics, Chemistry, Biology, English

## Adding New Content

To add new educational content:

1. Navigate to `src/data/curriculum/[grade]/[subject]/`
2. Create a new chapter file or modify existing ones
3. Export the chapter from the subject's index.ts
4. Update the grade's index.ts to include the new content

## Development

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`