const cassandra = require('cassandra-driver');
const authProvider = new cassandra.auth.PlainTextAuthProvider('root', 'root');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'], keyspace: 'tutorialspoint', authProvider });
 
const query = 'SELECT * FROM emp';
client.execute(query, (err, result) => {
	if (err) console.log('ERROR: ', err);
	console.log('Employee with name %s, city %s', result.rows[0].emp_name, result.rows[0].emp_city);
});
