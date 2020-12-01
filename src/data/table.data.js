import React from 'react';
import { Tag, Space, Avatar, Progress  } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

import CustomLabelBadge from 'Components/custom-label-badge/custom-label-badge.component';
import CustomButton from 'Components/custom-button/custom-button.component';
import { colorsPalette } from 'Components/custom-color/custom-color';
import './data.styles.css';

export const Columns1 = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
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
      render: tags => (
        <>
          {tags.map(tag => {
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

export const DataTable1 = [
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


export const Columns2 = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
    render: text => <span>#{text}</span>,
  },
  {
    title:  'Name',
    dataIndex: 'name',
    key: 'name',
    render: (data) => {
      const { img, nameText, position } = data;
      return  (
        <>
          <div className='tbl-2-name-container'>
            <Avatar size={38} src={img} />
            <div className='flex-column'>
              <p className='no-margin-no-padding fw-bold color5d'>{nameText}</p>
              <p className='no-margin-no-padding color98'>{position}</p>
            </div>
          </div>
        </>
      )
    }
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      return (
        <div>
           <CustomLabelBadge color={status.color}>
              {status.text}
          </CustomLabelBadge>
        </div>
      )
    }
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    render: (progress) => {
      const { progressBarColor, percent } = progress;
      return (
        <Progress strokeColor={`${colorsPalette[progressBarColor] ? colorsPalette[progressBarColor] : progressBarColor}`}  percent={percent} steps={5} />
      )
    }
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => (
      <CustomButton color='primary' variant='solid'>Details</CustomButton>
    )
  }
];
  
export const DataTable2 = [
  {
    key: '345',
    name: {
      nameText: 'John Doe',
      position: 'Web Developer',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    city: 'Madrid',
    status: {
      color: 'warning',
      text: 'PENDING'
    },
    progress: {
      progressBarColor: 'primary',
      percent: 70
    }
  },
  {
    key: '347',
    name: {
      nameText: 'Jungkat Jungkit',
      position: 'QA Engineer',
      img: 'https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    city: 'Jakarta',
    status: {
      color: 'primary',
      text: 'COMLETED'
    },
    progress: {
      progressBarColor: 'warning',
      percent: 80
    }
  },
  {
    key: '55',
    name: {
      nameText: 'Silaladungka',
      position: 'Senior Software Engineer',
      img: 'https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80'
    },
    city: 'Melbourne',
    status: {
      color: 'success',
      text: 'NEW'
    },
    progress: {
      progressBarColor: 'danger',
      percent: 90
    }
  },
  {
    key: '321',
    name: {
      nameText: 'Ana Mariana',
      position: 'Front End Engineer',
      img: 'https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    city: 'London',
    status: {
      color: 'danger',
      text: 'ON PROGRESS'
    },
    progress: {
      progressBarColor: 'info',
      percent: 100
    }
  },
]

export const Columns3 = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
    render: text => <span>#{text}</span>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      return (
        <div>
           <CustomLabelBadge pill color={status.color}>
              {status.text}
          </CustomLabelBadge>
        </div>
      )
    }
  },
  {
    title:  'Name',
    dataIndex: 'name',
    key: 'name',
    render: (data) => {
      const { img, nameText, position } = data;
      return  (
        <>
          <div className='tbl-2-name-container'>
            <Avatar size={38} src={img} />
            <div className='flex-column'>
              <p className='no-margin-no-padding fw-bold color5d'>{nameText}</p>
              <p className='no-margin-no-padding color98'>{position}</p>
            </div>
          </div>
        </>
      )
    }
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    render: (progress) => {
      const { progressBarColor, percent } = progress;
      return (
        <Progress strokeColor={`${colorsPalette[progressBarColor] ? colorsPalette[progressBarColor] : progressBarColor}`}  percent={percent} steps={5} />
      )
    }
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => (
      <CustomButton icon={<AppstoreOutlined />} color='light' variant='solid'></CustomButton>
    )
  }
];
  

export const DataHighlights = [
  {
      id: 1,
      img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      name: 'Beck Collier',
      badge: '$152',
      value: '$752',
      icon: {
          type: 'down',
          color: 'success'
      }
  },
  {
      id: 2,
      img: 'https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80',
      name: 'Angelo Hume',
      badge: '$53',
      value: '$543',
      icon: {
          type: 'up',
          color: 'danger'
      }
  },
  {
      id: 3,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Saim Melendez',
      badge: '$239',
      value: '$876',
      icon: {
          type: 'down',
          color: 'warning'
      }
  },
  {
      id: 4,
      img: 'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Johan Corbet',
      badge: '$74',
      value: '$395',
      icon: {
          type: 'down',
          color: 'dark'
      }
  },
  {
      id: 5,
      img: 'https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Kaja Wolve',
      badge: '$7',
      value: '$619',
      icon: {
          type: 'down',
          color: 'dark'
      }
  },
]


export const DataHighlights2 = [
  {
      id: 1,
      img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      name: 'Beck Collier',
      badge: '$152',
      value: '$752',
      icon: {
          type: 'down',
          color: 'success'
      }
  },
  {
      id: 2,
      img: 'https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80',
      name: 'Angelo Hume',
      badge: '$53',
      value: '$543',
      icon: {
          type: 'up',
          color: 'danger'
      }
  },
  {
      id: 3,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Saim Melendez',
      badge: '$239',
      value: '$876',
      icon: {
          type: 'down',
          color: 'warning'
      }
  },
  {
      id: 4,
      img: 'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Johan Corbet',
      badge: '$74',
      value: '$395',
      icon: {
          type: 'down',
          color: 'dark'
      }
  },
  {
      id: 5,
      img: 'https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Kaja Wolve',
      badge: '$7',
      value: '$619',
      icon: {
          type: 'down',
          color: 'dark'
      }
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    name: 'Beck Collier',
    badge: '$152',
    value: '$752',
    icon: {
        type: 'down',
        color: 'success'
    }
  },
  {
      id: 7,
      img: 'https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80',
      name: 'Angelo Hume',
      badge: '$53',
      value: '$543',
      icon: {
          type: 'up',
          color: 'danger'
      }
  },
  {
      id: 8,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Saim Melendez',
      badge: '$239',
      value: '$876',
      icon: {
          type: 'down',
          color: 'warning'
      }
  },
  {
      id: 9,
      img: 'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Johan Corbet',
      badge: '$74',
      value: '$395',
      icon: {
          type: 'down',
          color: 'dark'
      }
  },
  {
      id: 10,
      img: 'https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Kaja Wolve',
      badge: '$7',
      value: '$619',
      icon: {
          type: 'down',
          color: 'dark'
      }
  },
];

export const DataTopPerformanceLaptop = [
  {
    id: 1,
    progress: {
      value: '62',
      color: 'primary'
    },
    name: 'Asus Laptop',
    badge: '$152',
    value: '$752',
    icon: {
        type: 'down',
        color: 'warning'
    }
  },
  {
    id: 2,
    progress: {
      value: '43',
      color: 'primary'
    },
    name: 'Dell Inspire',
    badge: '$53',
    value: '$587',
    icon: {
        type: 'up',
        color: 'danger'
    }
  },
  {
    id: 3,
    progress: {
      value: '70',
      color: 'danger'
    },
    name: 'Lenovo IdeaPad',
    badge: '$239',
    value: '$163',
    icon: {
        type: 'down',
        color: 'dark'
    }
  },
  {
    id: 4,
    progress: {
      value: '23',
      color: 'success'
    },
    name: 'Asus Vivobook',
    badge: '$21',
    value: '$653',
    icon: {
        type: 'up',
        color: 'primary'
    }
  },
  {
    id: 5,
    progress: {
      value: '55',
      color: 'primary'
    },
    name: 'Apple Macbook',
    badge: '$381',
    value: '$629',
    icon: {
        type: 'up',
        color: 'dark'
    }
  },
  {
    id: 6,
    progress: {
      value: '17',
      color: 'warning'
    },
    name: 'HP Envy 13"',
    badge: '$74',
    value: '$462',
    icon: {
        type: 'down',
        color: 'dark'
    }
  },
  {
    id: 7,
    progress: {
      value: '19',
      color: 'primary'
    },
    name: 'Gaming Laptop HP',
    badge: '$7',
    value: '$956',
    icon: {
        type: 'up',
        color: 'success'
    }
  },
]


