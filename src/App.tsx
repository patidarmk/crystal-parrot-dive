import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Dinosaurs from './pages/Dinosaurs';
import DinosaurDetail from './pages/DinosaurDetail';
import Map from './pages/Map';
import Story from './pages/Story';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Layout>
          <Outlet />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  ),
  notFoundComponent: NotFound,
})

// Create page routes
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const dinosaursRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/dinosaurs',
  component: Dinosaurs,
})

const dinosaurDetailRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/dinosaur/$dinoId',
  component: DinosaurDetail,
})

const mapRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/map',
  component: Map,
})

const storyRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/story',
  component: Story,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute, 
  dinosaursRoute, 
  dinosaurDetailRoute,
  mapRoute,
  storyRoute
])

// Create router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;