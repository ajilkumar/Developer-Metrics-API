import { Router } from 'express';

const router = Router();

// Import route modules (we'll create these in Phase 2)
// import authRoutes from './auth.routes';
// import repositoryRoutes from './repository.routes';
// import metricsRoutes from './metrics.routes';
// import usageRoutes from './usage.routes';

// Mount routes
// router.use('/auth', authRoutes);
// router.use('/repositories', repositoryRoutes);
// router.use('/metrics', metricsRoutes);
// router.use('/usage', usageRoutes);

// Temporary test route
router.get('/', (_req, res) => {
  res.json({
    message: 'Developer Metrics API',
    version: process.env.API_VERSION,
    status: 'operational',
    endpoints: {
      health: '/health',
      auth: '/api/v1/auth',
      repositories: '/api/v1/repositories',
      metrics: '/api/v1/metrics',
      usage: '/api/v1/usage',
    },
  });
});

export default router;