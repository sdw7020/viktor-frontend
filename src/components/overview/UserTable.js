import React from 'react'
import { Table, Button } from 'reactstrap'

export default () => (
  <Table id="userTable">
    <thead>
      <tr>
        <th />
        <th>UserID</th>
        <th>Username</th>
        <th>PassID</th>
        <th>Start time</th>
        <th>End time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="deleteColumn">
          <Button className="delete" color="danger">
            ×
          </Button>{' '}
        </td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8d1</td>
        <td>jimd</td>
        <td>1, 2</td>
        <td />
        <td />
      </tr>
      <tr>
        <td className="deleteColumn">
          <Button className="delete" color="danger">
            ×
          </Button>{' '}
        </td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8d2</td>
        <td>mees-</td>
        <td>3</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn">
          <Button className="delete" color="danger">
            ×
          </Button>{' '}
        </td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8d3</td>
        <td>loekvdg</td>
        <td>4</td>
        <td>8:30</td>
        <td>22:30</td>
      </tr>
      <tr>
        <td className="deleteColumn">
          <Button className="delete" color="danger">
            ×
          </Button>{' '}
        </td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8d4</td>
        <td>tijmen61</td>
        <td>5</td>
        <td />
        <td />
      </tr>
      <tr>
        <td className="deleteColumn">
          <Button className="delete" color="danger">
            ×
          </Button>{' '}
        </td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8d5</td>
        <td>shanweim</td>
        <td>6</td>
        <td>7:30</td>
        <td>22:22</td>
      </tr>
      <tr>
        <td className="deleteColumn">
          <Button className="delete" color="danger">
            ×
          </Button>{' '}
        </td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8d6</td>
        <td>sdw7020</td>
        <td>7, 8, 9, 10</td>
        <td>7:00</td>
        <td>22:00</td>
      </tr>
      {/*
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8d7</td>
        <td>jimd</td>
        <td>1, 2</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8e1</td>
        <td>mees-</td>
        <td>3</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8e2</td>
        <td>loekvdg</td>
        <td>4</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8e3</td>
        <td>tijmen61</td>
        <td>5</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8e4</td>
        <td>shanweim</td>
        <td>6</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8d0</td>
        <td>sdw7020</td>
        <td>7, 8, 9, 10</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813blol</td>
        <td>jimd</td>
        <td>1, 2</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8ba</td>
        <td>mees-</td>
        <td>3</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8du</td>
        <td>loekvdg</td>
        <td>4</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8d9</td>
        <td>tijmen61</td>
        <td>5</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8a0</td>
        <td>shanweim</td>
        <td>6</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>110ec58a-a0f2-4ac4-8393-c866d813b8aa</td>
        <td>sdw7020</td>
        <td>7, 8, 9, 10</td>
        <td>4:20</td>
        <td>16:20</td>
      </tr>
*/}
    </tbody>
  </Table>
)
