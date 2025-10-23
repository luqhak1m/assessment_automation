import fs from 'fs';
import path from 'path';

const credentialsPath = path.join(__dirname, '../../credentials-temp.json');

export function getCredentials(){
  try {
    const data=fs.readFileSync(credentialsPath, 'utf-8');
    const creds = JSON.parse(data);

    return {
      employee:{
        id: creds.employee.id,
        first_name: creds.employee.first_name,
        middle_name: creds.employee.middle_name,
        last_name: creds.employee.last_name,
        username: creds.employee.username,
        password: creds.employee.password,
        status: creds.employee.status,
      },
      supervisor:{
        id: creds.supervisor.id,
        first_name: creds.supervisor.first_name,
        middle_name: creds.supervisor.middle_name,
        last_name: creds.supervisor.last_name,
        username: creds.supervisor.username,
        password: creds.supervisor.password,
        status: creds.supervisor.status,
      },
    };
  }catch(err){
    throw new Error(`error reading json: ${(err as Error).message}`);
  }
}
