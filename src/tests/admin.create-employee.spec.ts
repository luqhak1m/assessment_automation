
import { test, expect } from '../fixtures/roles';
import PIMPage from '../pages/PIMPage';
import { Page } from '@playwright/test';
import fs from 'fs';
import { Employee } from '../models/Employee';
import { SystemUser } from '../models/SystemUser';

function generateEmployee(): Employee&SystemUser{ // returns an object with Employee + SysUser model attributes
    const id = Math.floor(1000 + Math.random() * 9000).toString(); // 4 digit ID
    const first_name=`first_${id}`;
    const middle_name=`middle_${id}`;
    const last_name=`last_${id}`;
    const username=`emp_${id}`;
    const password=`Pass@${id}`;
    const status=true;
    return {id, first_name, middle_name, last_name, username, password, status};
};

// using admin login fixture by passing the admin_context
test('[TC01_01] Admin creates employee', async({ admin_context })=>{

    const page=admin_context;
    const pim_page=new PIMPage(page);

    const employee=generateEmployee(); // employee object
    const supervisor=generateEmployee(); // supervisor object

    await pim_page.createEmployee(
        employee.first_name,
        employee.middle_name,
        employee.last_name,
        employee.id,
        employee.username,
        employee.password
    );
   
    await pim_page.createEmployee(
        supervisor.first_name,
        supervisor.middle_name,
        supervisor.last_name,
        supervisor.id,
        supervisor.username,
        supervisor.password
    );
    
    // save credentials
    fs.writeFileSync(
        'credentials-temp.json',
        JSON.stringify(
            { 
                employee_username: employee.username, 
                employee_password: employee.password, 
                employee_id: employee.id,
                supervisor_username: supervisor.username, 
                supervisor_password: supervisor.password, 
                supervisor_id: supervisor.id,
            }
        , null, 2)
    );
})
