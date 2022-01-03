const pool = require('../config/database');

module.exports = {

    call: async (res, callback) => {
        let connection;
        try {
            connection = await pool.getConnection();
            await callback(connection);
        } catch (error) {

            return res.status(500).json({ error })

        } finally {

            if (connection) connection.end();

        }
    }
}