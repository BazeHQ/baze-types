export enum DashboardFilter {
    today = 'today',
    thisWeek = 'this-week',
    thisMonth = 'this-month',
    allTime = 'all-time'
}

export interface IFilterDashboard {
    filter: DashboardFilter;
}

export interface IFilterDashboardRes {
    totalSales: number;
}