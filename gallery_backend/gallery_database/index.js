const fs = require('fs');
const path = require('path');

/**
 * PUBLIC_INTERFACE
 * Fetches all metrics data from the mock JSON files directory.
 * This is a mock version of the gallery_database layer for the initial phase.
 * Replace this with a database or S3 connector as the source evolves.
 *
 * @returns {Promise<Array<Object>>} Array of metric entry objects.
 */
async function getAllMetrics() {
  // Location of mock data files (initially metrics.json)
  const dataDir = path.join(__dirname, 'mock_data');
  const metricsFile = path.join(dataDir, 'metrics.json');

  // If file doesn't exist, return empty array
  if (!fs.existsSync(metricsFile)) {
    return [];
  }
  // Read file and parse JSON
  const data = fs.readFileSync(metricsFile, { encoding: 'utf8' });
  try {
    const metrics = JSON.parse(data);
    if (Array.isArray(metrics)) {
      return metrics;
    }
    return [];
  } catch (e) {
    console.error('Failed to parse metrics.json', e);
    return [];
  }
}

module.exports = {
  getAllMetrics,
};
