const express = require('express');
const metricsController = require('../controllers/metrics');

const router = express.Router();

/**
 * @swagger
 * /metrics:
 *   get:
 *     tags:
 *       - Metrics
 *     summary: Get metrics data
 *     description: Returns all app generation metric entries as JSON.
 *     responses:
 *       200:
 *         description: List of metric entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   app_name:
 *                     type: string
 *                   elapsed_time:
 *                     type: number
 *                   total_cost:
 *                     type: number
 *                   date:
 *                     type: string
 *                   project_link:
 *                     type: string
 *                   cga_version:
 *                     type: string
 *                   model:
 *                     type: string
 *                   streaming:
 *                     type: boolean
 */
router.get('/', metricsController.getAll.bind(metricsController));

module.exports = router;
