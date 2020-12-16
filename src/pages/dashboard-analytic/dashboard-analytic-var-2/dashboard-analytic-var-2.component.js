import React from 'react';
import { Typography, Table, Input, Checkbox } from 'antd';
import { Line, Bar } from 'react-chartjs-2';
import {
  ScheduleOutlined,
  DownOutlined,
  AppstoreOutlined,
  QrcodeOutlined,
  GlobalOutlined,
  CheckOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import ChartBoxVar1 from 'Components/chart-box-var-1/chart-box-var-1.component';
import CustomButton from 'Components/custom-button/custom-button.component';
import CustomTimeline from 'Components/custom-timeline/custom-timeline.component';
import CustomTimelineItem from 'Components/custom-timeline-item/custom-timeline-item.component';
import TaskListContainer from 'Components/task-list-container/task-list-container.component';
import CustomLabelBadge from 'Components/custom-label-badge/custom-label-badge.component';
import ChatBallon from 'Components/chat-ballon/chat-ballon.component';
import ChartBoxVar3 from 'Components/chart-box-var-3/chart-box-var-3.component';
import ChartBoxGridContainer from 'Components/chart-box-grid/chart-box-grid.component';

import {
  CustomCard,
  CustomCardFooter,
  CustomCardBody,
  CustomCardHeader,
  CustomCardTitleText,
} from 'Components/custom-card/custom-card.styles';
import { ChatList2 } from '../../applications-chat/application-chat.data';
import { Data5, Data2, Data4 } from 'Data/chart.data';
import { Options, Options2, Options3 } from 'Data/settings-chart.data';
import { DataTable1, Columns1 } from 'Data/table.data';

const { Text } = Typography;

const DashboardAnalyticVariation2 = () => {
  return (
    <div>
      <div className="grid-3-gap-30 mb-30">
        <div className="da-box-chart-container-fixed">
          <ChartBoxVar1
            icon={<ScheduleOutlined />}
            iconBgColor="warning"
            iconContainerShape="square"
            iconColor="warning"
            defaultValue="3M"
            defaultValueDescription="Cash Deposit"
            defaultValueDescColor="warning"
            progressValueArrow="up"
            progressValue="176%"
            progressValueColor="success"
            chart={<Line data={Data2} height={240} options={Options} />}
          >
            <Text className="fw-bold color5d">
              <span className="danger">
                <DownOutlined /> 54.1%{' '}
              </span>{' '}
              down last 30 days
            </Text>
          </ChartBoxVar1>
        </div>
        <div className="da-box-chart-container-fixed">
          <ChartBoxVar1
            icon={<AppstoreOutlined />}
            iconBgColor="primary"
            iconContainerShape="square"
            iconColor="primary"
            defaultValue="1M"
            defaultValueDescription="Invested Dividents"
            defaultValueDescColor="primary"
            chart={<Bar data={Data5} height={240} options={Options3} />}
          >
            <Text className="fw-bold color5d">
              Compare to YoY{' '}
              <span className="info">
                <DownOutlined /> 14.1%{' '}
              </span>
            </Text>
          </ChartBoxVar1>
        </div>
        <div className="da-box-chart-container-fixed span-grid-column">
          <ChartBoxVar1
            icon={<QrcodeOutlined />}
            iconBgColor="danger"
            iconContainerShape="square"
            iconColor="danger"
            defaultValue="2M"
            defaultValueDescription="Withdrawals"
            defaultValueDescColor="danger"
            chart={<Line data={Data4} height={240} options={Options2} />}
          >
            <Text className="fw-bold color5d">
              Down by{' '}
              <span className="success">
                <DownOutlined /> 54.1%{' '}
              </span>
            </Text>
          </ChartBoxVar1>
        </div>
      </div>
      <div className="flex-row justify-content-center mb-30">
        <CustomButton
          shadow
          icon={<GlobalOutlined />}
          size="large"
          variant="solid"
          color="dark"
          pill={true}
        >
          View Complete Report
        </CustomButton>
      </div>
      <div className="da-var-2-grid-2">
        <CustomCard className="mb-30">
          <CustomCardHeader>
            <CustomCardTitleText>Timeline Example</CustomCardTitleText>
          </CustomCardHeader>
          <CustomCardBody>
            <div className="dashboard-analytic-timeline-container">
              <CustomTimeline size="regular">
                <CustomTimelineItem>
                  <Text className="color6d fs-14">All hands meeting</Text>
                </CustomTimelineItem>
                <CustomTimelineItem>
                  <Text className="color6d fs-14">
                    Another meeting today,{' '}
                    <span className="success">at 11.00 AM</span>
                  </Text>
                </CustomTimelineItem>
                <CustomTimelineItem>
                  <Text className="color6d fs-14">
                    Build the production release
                  </Text>
                </CustomTimelineItem>
                <CustomTimelineItem>
                  <Text className="fw-bold fs-14 success">
                    Something not important
                  </Text>
                </CustomTimelineItem>
                <CustomTimelineItem>
                  <Text className="color6d fs-14">All hands meeting</Text>
                </CustomTimelineItem>
                <CustomTimelineItem>
                  <Text className="color6d fs-14">
                    Another meeting today,{' '}
                    <span className="success">at 11.00 AM</span>
                  </Text>
                </CustomTimelineItem>
                <CustomTimelineItem>
                  <Text className="color6d fs-14">
                    Build the production release
                  </Text>
                </CustomTimelineItem>
                <CustomTimelineItem>
                  <Text className="fw-bold fs-14 success">
                    Something not important
                  </Text>
                </CustomTimelineItem>
              </CustomTimeline>
            </div>
          </CustomCardBody>
        </CustomCard>
        <CustomCard className="mb-30">
          <CustomCardHeader>
            <CustomCardTitleText>Easy Dynamic Tables</CustomCardTitleText>
          </CustomCardHeader>
          <CustomCardBody>
            <Table columns={Columns1} dataSource={DataTable1} />
          </CustomCardBody>
        </CustomCard>
      </div>
      <div className="grid-2-gap-30 mb-30">
        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitleText>Chat Box</CustomCardTitleText>
          </CustomCardHeader>
          <CustomCardBody>
            <ChatBallon
              className="dashboard-analytic-timeline-container"
              chatlist={ChatList2}
            />
            <div className="text-input-chat-container">
              <Input placeholder="Write here and hit enter to send..." />
            </div>
          </CustomCardBody>
        </CustomCard>
        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitleText>Task List</CustomCardTitleText>
          </CustomCardHeader>
          <CustomCardBody>
            <TaskListContainer className="da-tasklist" color="primary">
              <div className="da-task-list-container">
                <Checkbox></Checkbox>
                <div className="flex-column">
                  <div className="flex-row">
                    <Text className="fw-bold color5d mr-10">Wash the car</Text>
                    <CustomLabelBadge color="danger">Danger</CustomLabelBadge>
                  </div>
                  <Text className="color98">Written by Bob</Text>
                </div>
                <div className="da-task-list-hidden flex-row justify-content-end">
                  <CustomButton
                    className="mr-10"
                    color="success"
                    variant="solid"
                    icon={<CheckOutlined />}
                  />
                  <CustomButton
                    className="mr-10"
                    color="danger"
                    variant="solid"
                    icon={<DeleteOutlined />}
                  />
                </div>
              </div>
            </TaskListContainer>
            <TaskListContainer className="da-tasklist" color="warning">
              <div className="da-task-list-container">
                <Checkbox></Checkbox>
                <div className="flex-column">
                  <div className="flex-row">
                    <Text className="fw-bold color5d mr-10">
                      Task with badge
                    </Text>
                  </div>
                  <Text className="color98">Show on hover actions !</Text>
                </div>
                <div className="flex-row justify-content-end">
                  <div className="da-task-list-hidden">
                    <CustomButton
                      className="mr-10"
                      color="success"
                      variant="solid"
                      icon={<CheckOutlined />}
                    />
                  </div>
                  <CustomLabelBadge color="success">NEW</CustomLabelBadge>
                </div>
              </div>
            </TaskListContainer>
            <TaskListContainer className="da-tasklist" color="danger">
              <div className="da-task-list-container">
                <Checkbox></Checkbox>
                <div className="flex-column">
                  <Text className="fw-bold color5d mr-10">
                    Development Task
                  </Text>
                  <Text className="color98">Finish React ToDo AppList !</Text>
                </div>
                <div className="flex-row justify-content-end">
                  <CustomButton
                    className="mr-10"
                    color="success"
                    variant="solid"
                    icon={<CheckOutlined />}
                  />
                  <CustomButton
                    className="mr-10"
                    color="danger"
                    variant="solid"
                    icon={<DeleteOutlined />}
                  />
                </div>
              </div>
            </TaskListContainer>
            <TaskListContainer className="da-tasklist" color="success">
              <div className="da-task-list-container">
                <Checkbox></Checkbox>
                <div className="flex-column">
                  <div className="flex-row">
                    <Text className="fw-bold color5d mr-10">Wash the car</Text>
                    <CustomLabelBadge color="warning">INFO</CustomLabelBadge>
                  </div>
                  <Text className="color98">Written by Bob</Text>
                </div>
                <div className="da-task-list-hidden flex-row justify-content-end">
                  <CustomButton
                    className="mr-10"
                    color="success"
                    variant="solid"
                    icon={<CheckOutlined />}
                  />
                  <CustomButton
                    className="mr-10"
                    color="danger"
                    variant="solid"
                    icon={<DeleteOutlined />}
                  />
                </div>
              </div>
            </TaskListContainer>
          </CustomCardBody>
          <CustomCardFooter>
            <CustomButton color="link" variant="solid" className="mr-10">
              Cancel
            </CustomButton>
            <CustomButton color="primary" variant="solid">
              Add Task
            </CustomButton>
          </CustomCardFooter>
        </CustomCard>
      </div>
      <div className="mb-30">
        <ChartBoxGridContainer col={4}>
          <ChartBoxVar3
            defaultValue="1896"
            defaultValueColor="success"
            mainTitleText="Total Orders"
            descriptionText="Last year expenses"
            progressBarValue={80}
            strokeWidth={6}
            progressBarColor="primary"
            descriptionProgressDetail="YoY Growth"
          />
          <ChartBoxVar3
            defaultValue="$568"
            defaultValueColor="primary"
            mainTitleText="Clients"
            descriptionText="Total Clients Profit"
            progressBarValue={50}
            strokeWidth={6}
            progressBarColor="warning"
            descriptionProgressDetail="Retention"
          />
          <ChartBoxVar3
            defaultValue="$14M"
            defaultValueColor="warning"
            mainTitleText="Products Sold"
            descriptionText="Total revenue streams"
            progressBarValue={100}
            strokeWidth={6}
            progressBarColor="danger"
            descriptionProgressDetail="Sales"
          />
          <ChartBoxVar3
            defaultValue="46%"
            defaultValueColor="danger"
            mainTitleText="Followers"
            descriptionText="Peple interested"
            progressBarValue={40}
            strokeWidth={6}
            progressBarColor="success"
            descriptionProgressDetail="Twitter Progress"
          />
        </ChartBoxGridContainer>
      </div>
    </div>
  );
};

export default DashboardAnalyticVariation2;
