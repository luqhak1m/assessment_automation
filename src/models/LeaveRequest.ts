
export interface LeaveRequest{
    leave_type: string;
    from_date: string;
    to_date: string;
    comments?: string;
    employee: string;
}