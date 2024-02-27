const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Cannot load the database: ${err.message}`));
        return;
      }

      const rows = data.split('\n').filter(Boolean);
      const numberOfStudents = rows.length - 1;
      console.log(`Number of students: ${numberOfStudents}`);
      const fieldCounts = {};
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < rows.length; i++) {
        const fields = rows[i].split(',');
        fields.forEach((field, index) => {
          if (!fieldCounts[index]) {
            fieldCounts[index] = {
              count: 1,
              list: [field.trim()]
            };
          } else {
            fieldCounts[index].count += 1;
            fieldCounts[index].list.push(field.trim());
          }
        });
      }
      Object.keys(fieldCounts).forEach((index) => {
        const fieldName = rows[0].split(',')[index].trim();
        const fieldCount = fieldCounts[index].count;
        const fieldList = fieldCounts[index].list.join(', ');
        console.log(`Number of students in ${fieldName}: ${fieldCount}. List: ${fieldList} `);
      });
      resolve();
    });
  });
}

module.exports = countStudents;
