import React from 'react';
import { Typography, Carousel, Table, Tag, Space, Input, Checkbox } from 'antd';

export const Data1 = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'New Accounts',
      data: [180, 202, 312, 430, 111, 165, 320, 290, 563, 640, 721, 821],
      backgroundColor: '#d8f3e5',
      borderColor: '#3ac47d',
      borderWidth: 6,
    },
  ],
};

export const Data2 = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Helpdesk Tickets',
      data: [200, 202, 212, 210, 220, 203, 205, 210, 209, 226, 220, 222],
      backgroundColor: '#fdf1d3',
      borderColor: '#f7b924',
      borderWidth: 6,
    },
  ],
};

export const Data3 = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Total Sales',
      data: [120, 122, 128, 130, 126, 125, 120, 123, 120, 125, 133, 127, 120],
      backgroundColor: '#dddef7',
      borderColor: '#545cd8',
      borderWidth: 6,
    },
  ],
};

export const Data4 = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Helpdesk Tickets',
      data: [120, 122, 128, 130, 126, 125, 120, 123, 120, 125, 133, 127, 120],
      backgroundColor: '#f1dae1',
      borderColor: '#d92550',
      borderWidth: 6,
    },
  ],
};

export const Data5 = {
  datasets: [
    {
      data: [
        0.3,
        0.4,
        0.5,
        0.35,
        0.28,
        0.3,
        0.43,
        0.51,
        0.39,
        0.45,
        0.41,
        0.45,
      ],
      borderWidth: 0,
      backgroundColor: '#6269d6',
    },
  ],
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
};

export const Options = {
  elements: {
    point: { radius: 0 },
  }, //point
  legend: {
    display: false,
  },
  maintainAspectRatio: false,
  label: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

export const Options2 = {
  elements: {
    point: { radius: 4 },
  }, //point
  legend: {
    display: false,
  },
  maintainAspectRatio: false,
  label: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
        stacked: false,
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

export const Options3 = {
  legend: { display: false },
  animation: {
    animateScale: true,
  },
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        barPercentage: 1,
        categoryPercentage: 1,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        barPercentage: 1,
        categoryPercentage: 1,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
  tooltips: {},
};

export const Columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    responsive: ['lg'],
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    responsive: ['lg'],
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

export const Data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
