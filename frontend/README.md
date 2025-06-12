# ✅ To-Do List Application YAML Configuration

meta:
  title: "To-Do List Application"
  description: "A clean and functional full-stack To-Do List App"
  tech_stack:
    frontend: "React.js"
    backend: "Express.js + MongoDB"
  author:
    name: "Muhammad Usama"
    email: "usamakj47@gmail.com"
    role: "Full-Stack Web Developer"
    social: "🚀 Always exploring and building new things"

features:
  - icon: "➕"
    name: "Add new tasks"
    description: "Create and save new todo items"
  
  - icon: "🗑️"
    name: "Delete tasks"
    description: "Remove completed or unwanted tasks"
  
  - icon: "✅"
    name: "Toggle completion"
    description: "Mark tasks as complete/incomplete"
  
  - icon: "🔗"
    name: "Backend API"
    description: "Connects with Express.js backend"
  
  - icon: "🎨"
    name: "Responsive UI"
    description: "Works on all device sizes"

project_structure:
  frontend:
    - "src/components/ - React components"
    - "src/styles/ - CSS modules"
    - "src/App.js - Main application"
    - "src/index.js - Entry point"
  
  backend:
    - "server.js - Express server"
    - "routes/ - API endpoints"
    - "models/ - MongoDB schemas"
    - "controllers/ - Business logic"

installation:
  - step: "1. Clone repository"
    command: "git clone  "
    icon: "📥"
  
  - step: "2. Install dependencies"
    commands:
      - "cd todo-list-app/frontend && npm install"
      - "cd ../backend && npm install"
    icon: "📦"
  
  - step: "3. Configure environment"
    instructions: "Create .env files in both frontend and backend"
    icon: "⚙️"

configuration:
  frontend:
    port: 3000
    env_vars:
      REACT_APP_API_URL: "http://localhost:4000"
  
  backend:
    port: 4000
    env_vars:
      MONGODB_URI: "mongodb://localhost:27017/todoapp"
      JWT_SECRET: "your_secret_key"
  
  production:
    build_command: "npm run build"
    deploy_instructions: "Configure your hosting provider"

development:
  scripts:
    frontend:
      start: "npm start"
      test: "npm test"
      build: "npm run build"
    
    backend:
      start: "node server.js"
      dev: "nodemon server.js"
  
  testing:
    framework: "Jest"
    coverage: "75%"

contributing:
  guidelines: "Pull requests welcome!"
  steps:
    - "Fork the repository"
    - "Create your feature branch"
    - "Commit your changes"
    - "Push to the branch"
    - "Open a pull request"
  icon: "🤝"