
import fs from 'fs';

function saveCredentials(newUser: any) {
  const file='credentials-temp.json';
  let data: any[] = [];

  // if file exists: read and parse existing entries
  if(fs.existsSync(file)) {
    data = JSON.parse(fs.readFileSync(file, 'utf8'));
  }

  // push new user
  data.push(newUser);

  // write all users back to file
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}