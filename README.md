# Microfrontend Architecture with Vite Module Federation

This project demonstrates a microfrontend architecture using React and Vite's module federation plugin. It consists of one host application and two remote frontend applications that can be developed, deployed, and updated independently.

## Architecture Overview

- **Host Application** (`host-app`): Main container running on port 3000
- **Remote Application 1** (`remote-app-1`): Standalone app running on port 3001
- **Remote Application 2** (`remote-app-2`): Standalone app running on port 3002

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Development Setup

1. **Install dependencies for all applications:**
   ```bash
   npm run install:all
   ```

2. **Start all applications concurrently:**
   ```bash
   npm run dev
   ```
   
   Or use the convenience script:
   ```bash
   ./start-dev.sh
   ```

3. **Access the applications:**
   - Host App: http://localhost:3000
   - Remote App 1: http://localhost:3001
   - Remote App 2: http://localhost:3002

### Individual Development

You can also run each application individually:

```bash
# Host application
npm run dev:host

# Remote application 1
npm run dev:remote1

# Remote application 2
npm run dev:remote2
```

## Project Structure

```
micro-frontend/
├── host-app/                 # Host application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.tsx
│   │   │   ├── RemoteWrapper.tsx
│   │   │   └── RemoteComponents.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts       # Federation consumer config
│   └── package.json
├── remote-app-1/            # Remote application 1
│   ├── src/
│   │   ├── components/
│   │   │   └── ExposedComponent.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts       # Federation provider config
│   └── package.json
├── remote-app-2/            # Remote application 2
│   ├── src/
│   │   ├── components/
│   │   │   └── ExposedComponent.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts       # Federation provider config
│   └── package.json
└── package.json             # Root package with scripts
```

## Features

### Host Application
- Dynamic loading of remote components
- Error boundaries for graceful failure handling
- Suspense for loading states
- Responsive layout and styling

### Remote Applications
- Independent development and deployment
- Component exposure via module federation
- Standalone development mode
- Hot module replacement support

### Error Handling
- Comprehensive error boundaries
- Fallback UI for failed remote loads
- Network error handling
- Graceful degradation

## Build for Production

```bash
# Build all applications
npm run build

# Build individual applications
npm run build:host
npm run build:remote1
npm run build:remote2
```

## Key Technologies

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **@originjs/vite-plugin-federation**: Module federation plugin
- **TypeScript**: Type safety
- **Concurrently**: Run multiple dev servers

## Development Workflow

1. **Independent Development**: Each application can be developed separately
2. **Hot Reloading**: Changes in remote apps automatically reflect in the host
3. **Error Isolation**: Failures in one remote don't crash the entire application
4. **Shared Dependencies**: React and React-DOM are shared across all apps

## Troubleshooting

### Common Issues

1. **Remote component not loading**
   - Ensure all applications are running
   - Check console for federation errors
   - Verify port configurations

2. **CORS errors**
   - All applications run on localhost in development
   - Production deployments may need CORS configuration

3. **Type errors**
   - Remote module types are declared in `host-app/src/vite-env.d.ts`
   - Update type declarations if remote component interfaces change

### Debugging

- Check browser console for federation errors
- Verify remote entry files are accessible:
  - http://localhost:3001/assets/remoteEntry.js
  - http://localhost:3002/assets/remoteEntry.js

## Next Steps

- Add routing to remote applications
- Implement shared state management
- Add authentication and authorization
- Set up CI/CD pipelines for independent deployments
- Add comprehensive testing suite