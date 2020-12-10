export const BandwidthReportData = [
    {
        id: 1,
        valueDetail: {
            value: '63%',
        },
        description: 'Server Errors'
    },
    {
        id: 2,
        valueDetail: {
            value: '63%',
        },
        description: 'Total Income'
    },
    {
        id: 3,
        valueDetail: {
            value: '61%',
            color: 'alt'
        },
        description: 'Server Target',
        progress : {
            value: 61,
            color: 'alt'
        }
    },
    {
        id: 4,
        valueDetail: {
            value: '71%',
            color: 'danger'
        },
        description: 'Income Target',
        progress : {
            value: 71,
            color: 'danger'
        }
    },
];

export const BandwidthReportData2 = [
    {
        id: 1,
        valueDetail: {
            value: '63%',
        },
        description: 'Generated Leads',
        progress : {
            value: 63,
            color: 'danger'
        }
    },
    {
        id: 2,
        valueDetail: {
            value: '32%',
        },
        description: 'Submitted Tickets',
        progress : {
            value: 32,
            color: 'success'
        }
    },
    {
        id: 3,
        valueDetail: {
            value: '71%',
        },
        description: 'Server Allocation',
        progress : {
            value: 71,
            color: 'dark'
        }
    },
    {
        id: 4,
        valueDetail: {
            value: '41%',
        },
        description: 'Generated Leads',
        progress : {
            value: 41,
            color: 'warning'
        }
    },
];

export const ChartBox3Data = [
    {
        id: 1,
        defaultValue: '1896',
        defaultValueColor: 'success',
        mainTitleText: "Total Orders",
        descriptionText: 'Last year expenses',
        progressBarValue: 80,
        strokeWidth: 8,
        progressBarColor: 'primary',
        descriptionProgressDetail: 'YoY Growth'
    },
    {
        id: 2,
        defaultValue: '$14M',
        defaultValueColor: 'warning',
        mainTitleText : 'Products Sold',
        descriptionText: 'Total revenue streams',
        progressBarValue: 90,
        strokeWidth: 8,
        progressBarColor: 'danger',
        descriptionProgressDetail :'Sales'
    },
    {
        id: 3,
        defaultValue: '$568',
        defaultValueColor: 'danger',
        mainTitleText : 'Followers',
        descriptionText : 'People Interested',
        progressBarValue: 40,
        strokeWidth : 8,
        progressBarColor : 'success',
        descriptionProgressDetail :'Twitter Progress'
    }
];

export const DataChart = {
    data1: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [230, 202, 312, 340, 291, 165, 320, 290, 563, 420, 281, 219],
            backgroundColor: 'transparent',
            borderColor: '#3ac47d',
            borderWidth: 3,  
        }]
        
    },
    data2: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [165, 230, 260, 463, 420, 481, 319, 320, 302, 312, 340, 291],
            backgroundColor: 'transparent',
            borderColor: '#545cd8',
            borderWidth: 3,  
        }]
    },
    data3: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [290, 202, 312, 240, 291, 165, 320, 256, 563, 420, 431, 389],
            backgroundColor: 'transparent',
            borderColor: '#f7b924',
            borderWidth: 3,  
        }]
        
    },
    data4: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [230, 277, 300, 263, 220, 481, 311, 320, 302, 412, 340, 391],
            backgroundColor: 'transparent',
            borderColor: '#d92550',
            borderWidth: 3,  
        }]
    },
    data5: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [290, 242, 312, 250, 291, 185, 320, 256, 363, 320, 331, 389],
            backgroundColor: '#fdeabc',
            borderColor: '#f5bf3c',
            borderWidth: 6,  
        }]
    },
    data6: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [290, 282, 302, 295, 291, 285, 320, 256, 363, 320, 331, 320],
            backgroundColor: '#e3e4f3',
            borderColor: '#9298f1',
            borderWidth: 3,  
        }]
    },
    data7: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [260, 252, 252, 265, 291, 285, 240, 256, 263, 320, 300, 309],
            backgroundColor: '#f3e3e7',
            borderColor: '#d92550',
            borderWidth: 3,  
        }]
    },
    data8: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [165, 230, 260, 463, 420, 481, 319, 320, 302, 312, 340, 291],
            backgroundColor: '#54595e',
            borderColor: '#808387',
            borderWidth: 3,  
        }]
    },
};

export const DataChartComponentList = [
    {
        id: 1,
        value: 874,
        description: 'Sales last month',
        graphData: DataChart.data1,
        borderColor: 'success'    
    },
    {
        id: 2,
        value: 1283,
        description: 'Sales income',
        graphData: DataChart.data2,
        borderColor: 'primary'  
    },
    {
        id: 3,
        value: 1286,
        description: 'Last month sales',
        graphData: DataChart.data3,
        borderColor: 'warning'  
    },
    {
        id: 4,
        value: 564,
        description: 'Total revenue',
        graphData: DataChart.data4,
        borderColor: 'danger'  
    },
];