const metricsService = require('../services/metrics');

/**
 * PUBLIC_INTERFACE
 * Express controller for the /metrics endpoint.
 * Responds with a list of metric entries as JSON.
 */
class MetricsController {
  async getAll(req, res) {
    try {
      const metrics = await metricsService.getAllMetrics();
      res.status(200).json(metrics);
    } catch (err) {
      console.error('Error getting metrics:', err);
      res.status(500).json({ status: 'error', message: 'Could not fetch metrics' });
    }
  }
}

module.exports = new MetricsController();
