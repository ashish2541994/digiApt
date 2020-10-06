import React from "react";
import { Tab } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import {
  Checkbox,
  Dropdown,
  Pagination,
  Input,
  Button,
  Icon,
  Table,
  Image,
  Label,
  Progress,
  Menu,
} from "semantic-ui-react";
import "./home.css";
import setting from "../../assets/settings.png";
import subtaskIcon from "../../assets/Union.png";
import firstItem from "../../assets/firstItem.png";
import lastItem from "../../assets/lastItem.png";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import downSort from "../../assets/downSort.png";
import upSort from "../../assets/upSort.png";

import configData from "../configData.json";

const friendOptions = [
  {
    key: "Derek Roberts",
    text: "Derek Roberts",
    value: "Derek Roberts",
    image: (
      <Label className="Derek" as="a" circular>
        D
      </Label>
    ),
  },
  {
    key: "Jonathan Robertson",
    text: "Jonathan Robertson",
    value: "Jonathan Robertson",
    image: (
      <Label className="Jonathan" as="a" circular>
        J
      </Label>
    ),
  },
  {
    key: "Nichole Smith",
    text: "Nichole Smith",
    value: "Nichole Smith",
    image: (
      <Label className="Nichole" as="a" circular>
        N
      </Label>
    ),
  },
  {
    key: "Susan Miller",
    text: "Susan Miller",
    value: "Susan Miller",
    image: (
      <Label className="Susan" as="a" circular>
        S
      </Label>
    ),
  },
  {
    key: "Unassigned",
    text: "Unassigned",
    value: "Unassigned",
    image: (
      <Label as="a" circular>
        U
      </Label>
    ),
  },
];

const panes = [
  {
    menuItem: "UNASSIGNED TASKS",
    pane: (
      <div>
        <div className="content">
          <Grid columns={9}>
            <Grid.Row>
              <Grid.Column width={2}>
                <Checkbox
                  className="toggleBtn"
                  label="Multi Sort"
                  defaultChecked
                  toggle
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <Dropdown
                  placeholder="Clear All Filters"
                  icon="close"
                  className="filterDrop"
                  clearable
                  iconPosition="left"
                  fluid
                  multiple
                  options={configData.options}
                  selection
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <div class="ui ">Results: 1 to 5 of 144</div>
              </Grid.Column>
              <Grid.Column className="itemPerPage" width={1} textAlign="right">
                <div class="ui  ">Items per page</div>
              </Grid.Column>
              <Grid.Column width={1} textAlign="left">
                <Input className="itemPage" value="10" type="number" />
              </Grid.Column>
              <Grid.Column width={4} textAlign="left">
                <div>
                  <Pagination
                    className="tablePaginator"
                    defaultActivePage={1}
                    ellipsisItem={{
                      content: <Icon name="ellipsis horizontal" />,
                      icon: true,
                    }}
                    firstItem={{
                      content: <Image src={lastItem}></Image>,
                      image: true,
                    }}
                    lastItem={{
                      content: <Image src={firstItem}></Image>,
                      image: true,
                    }}
                    prevItem={{
                      content: <Image src={leftArrow}></Image>,
                      image: true,
                    }}
                    nextItem={{
                      content: <Image src={rightArrow}></Image>,
                      image: true,
                    }}
                    totalPages={4}
                    siblingRange={1}
                  />
                  {/* <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={10}
                  /> */}
                </div>
              </Grid.Column>
              <Grid.Column width={1} className="itemPerPage" textAlign="right">
                <div class="ui ">Go to page</div>
              </Grid.Column>
              <Grid.Column width={1} className="nopad">
                <Input className="itemPage" value="6" type="number" />
              </Grid.Column>
              <Grid.Column width={1} className="nopad" textAlign="left">
                <div class="ui ">of 10</div>
              </Grid.Column>
              <Grid.Column width={1}>
                <div class="ui go">
                  <span>Go ></span>{" "}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className="table">
          <Table className="table-container" celled compact definition>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell width="1">
                  <Image src={setting} />
                </Table.HeaderCell>
                <Table.HeaderCell className="checkColumn">
                  <Checkbox />
                </Table.HeaderCell>
                <Table.HeaderCell className="taskName">
                  <Label className="rightIcon" as="a">
                    Task Name
                    <Image className="sortIcon" src={downSort}></Image>
                  </Label>
                </Table.HeaderCell>
                <Table.HeaderCell className="taskName">
                  <Label className="rightIcon" as="a">
                    LOB
                    <Image className="sortIcon" src={downSort}></Image>
                  </Label>
                </Table.HeaderCell>
                <Table.HeaderCell className="taskName">
                  <Label className="rightIcon" as="a">
                    SUBTASKS
                    <Image className="sortIcon" src={downSort}></Image>
                  </Label>
                </Table.HeaderCell>
                <Table.HeaderCell className="taskName">
                  <Label className="rightIcon" as="a">
                    ASSIGNED TO
                    <Image className="sortIcon" src={downSort}></Image>
                  </Label>
                </Table.HeaderCell>
                <Table.HeaderCell className="taskName">
                  <Label className="rightIcon" as="a">
                    Step
                    <Image className="sortIcon" src={downSort}></Image>
                  </Label>
                </Table.HeaderCell>
                <Table.HeaderCell className="taskName">
                  <Label className="rightIcon dueDate" as="a">
                    Due Date
                    <Image className="sortIcon" src={upSort}></Image>
                  </Label>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row className="borderTab">
                <Table.Cell width="1"></Table.Cell>
                <Table.Cell className="checkColumn" collapsing>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="taskName">
                  <div class="ui taskName">
                    <span class="dottedUnderline">Task name</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Label className="purple labelTag"> Medicare</Label>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>
                  <Dropdown
                    inline
                    className="assignDrops"
                    options={friendOptions}
                    defaultValue={friendOptions[4].value}
                  />
                </Table.Cell>
                <Table.Cell>In Review</Table.Cell>
                <Table.Cell>
                  <Progress
                    className="timeProgress orangeProgress"
                    progress="value"
                    value="09/04/2020  @ 9:00 AM"
                  />
                  <Label className="rightIcon expandIcon dueDate" as="a">
                    <Image className="sortIcon" src={rightArrow}></Image>
                  </Label>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width="1"></Table.Cell>
                <Table.Cell className="checkColumn" collapsing>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="taskName">
                  <div class="ui taskName">
                    <span class="dottedUnderline">Task name</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Label className="Commercial labelTag"> Commercial</Label>
                </Table.Cell>
                <Table.Cell>
                  <div>
                    <Image className="subTaskIcon" src={subtaskIcon} />
                    <span className="noOfTask">3</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Dropdown
                    inline
                    className="assignDrops"
                    options={friendOptions}
                    defaultValue={friendOptions[4].value}
                  />
                </Table.Cell>
                <Table.Cell>In Review</Table.Cell>
                <Table.Cell>
                  <Progress
                    className="timeProgress purpleProgress"
                    progress="value"
                    value="09/09/2020  @ 5:00 PM"
                  />
                  <Label className="rightIcon expandIcon dueDate" as="a">
                    <Image className="sortIcon" src={rightArrow}></Image>
                  </Label>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width="1"></Table.Cell>
                <Table.Cell className="checkColumn" collapsing>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="taskName">
                  <div class="ui taskName">
                    <span class="dottedUnderline">Task name</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Label className="Exchange labelTag"> Exchange</Label>
                </Table.Cell>
                <Table.Cell>
                  <div>
                    <Image className="subTaskIcon" src={subtaskIcon} />
                    <span className="noOfTask">2</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Dropdown
                    inline
                    className="assignDrops"
                    options={friendOptions}
                    defaultValue={friendOptions[4].value}
                  />
                </Table.Cell>
                <Table.Cell>In Build</Table.Cell>
                <Table.Cell>
                  <Progress
                    className="timeProgress greenProgress"
                    progress="value"
                    value="09/18/2020  @ 10:30 AM"
                  />
                  <Label className="rightIcon expandIcon dueDate" as="a">
                    <Image className="sortIcon" src={rightArrow}></Image>
                  </Label>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width="1"></Table.Cell>
                <Table.Cell className="checkColumn" collapsing>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="taskName">
                  <div class="ui taskName">
                    <span class="dottedUnderline">Task name</span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Label className="Medicaid labelTag"> Medicaid</Label>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>
                  <Dropdown
                    inline
                    className="assignDrops"
                    options={friendOptions}
                    defaultValue={friendOptions[4].value}
                  />
                </Table.Cell>
                <Table.Cell>In Review</Table.Cell>
                <Table.Cell>
                  <Progress
                    className="timeProgress noProgress"
                    progress="value"
                    value="No due date"
                  />
                  <Label className="rightIcon expandIcon dueDate" as="a">
                    <Image className="sortIcon" src={rightArrow}></Image>
                  </Label>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    ),
  },
  { menuItem: "ASSIGNED TASKS", pane: "Tab 2 Content" },
  { menuItem: "ALL TASKS", pane: "Tab 3 Content" },
  {
    menuItem: (
      <Menu.Item key="messages" className="to-right">
        Assign Task(s)
      </Menu.Item>
    ),
    render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>,
  },
];

const Home = () => (
  <div>
    <Tab className="tab-header" panes={panes} renderActiveOnly={false} />
    <div>{configData.SERVER_URL}</div>
  </div>
);

export default Home;
