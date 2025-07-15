const galleryDb = require('../../gallery_database');

/**
 * PUBLIC_INTERFACE
 * Fetches all metric entries from the gallery database (mocked via metrics.json).
 * @returns {Promise<Array<Object>>} List of metric objects.
 */
async function getAllMetrics() {
  return galleryDb.getAllMetrics();
}

module.exports = {
  getAllMetrics,
};
