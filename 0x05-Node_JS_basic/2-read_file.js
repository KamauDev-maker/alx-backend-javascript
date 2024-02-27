const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

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

      console.log(`Number of students in ${fieldName}: ${fieldCount}. List: ${fieldList}`);
    });
  } catch (error) {
    console.error(`Cannot load the database: ${error.message}`);
  }
}

module.exports = countStudents;
