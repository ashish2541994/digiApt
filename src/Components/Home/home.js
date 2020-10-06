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
} from "semantic-ui-react";
import "./home.css";
import setting from "../../assets/settings.png";
import subtaskIcon from "../../assets/Union.png";

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: (
      <Label as="a" circular>
        J
      </Label>
    ),
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: (
      <Label as="a" circular>
        E
      </Label>
    ),
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: (
      <Label as="a" circular>
        S
      </Label>
    ),
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: (
      <Label as="a" circular>
        C
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
              <Grid.Column>
                <Checkbox className="toggleBtn" label="Multi Sort" toggle />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Clear All Filters"
                  icon="close"
                  clearable
                  fluid
                  multiple
                  options={options}
                  selection
                />
              </Grid.Column>
              <Grid.Column>
                <div class="ui ">Results: 1 to 5 of 144</div>
              </Grid.Column>
              <Grid.Column>
                <div class="ui ">Items per page</div>
              </Grid.Column>
              <Grid.Column>
                <Input type="number" />
              </Grid.Column>
              <Grid.Column>
                <div>
                  <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={10}
                  />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div class="ui ">Go to page</div>
              </Grid.Column>
              <Grid.Column>
                <Input type="number" />
              </Grid.Column>
              <Grid.Column>
                <div class="ui ">Go > </div>
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
                  Task Name
                </Table.HeaderCell>
                <Table.HeaderCell>LOB</Table.HeaderCell>
                <Table.HeaderCell>Subtasks</Table.HeaderCell>
                <Table.HeaderCell>ASSIGNED TO</Table.HeaderCell>
                <Table.HeaderCell>Step</Table.HeaderCell>
                <Table.HeaderCell>Due Date</Table.HeaderCell>
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
                <Table.Cell>
                  <div>
                    <Image className="subTaskIcon" src={subtaskIcon} />
                    <span>2</span>
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
                    className="timeProgress orangeProgress"
                    progress="value"
                    value="09/04/2020  @ 9:00 AM"
                  />
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
                    <span>3</span>
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
                    <span>3</span>
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
];

const Home = () => (
  <Tab className="tab-header" panes={panes} renderActiveOnly={false} />
);

export default Home;
