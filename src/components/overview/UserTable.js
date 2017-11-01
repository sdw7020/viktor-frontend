import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import '../style.css'

export default () => (
  <Table>
    <thead>
      <tr>
        <th></th>
        <th>UserID</th>
        <th>Username</th>
        <th>PassID</th>
        <th>Start time</th>
        <th>End time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>1</td>
        <td>jimd</td>
        <td>1, 2</td>
        <td>4:20:00</td>
        <td>16:20:00</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>2</td>
        <td>meesvd</td>
        <td>3</td>
        <td>4:20:00</td>
        <td>16:20:00</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>3</td>
        <td>loekvdg</td>
        <td>4</td>
        <td>4:20:00</td>
        <td>16:20:00</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>6</td>
        <td>tijmenk</td>
        <td>5</td>
        <td>4:20:00</td>
        <td>16:20:00</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>5</td>
        <td>shanweim</td>
        <td>6</td>
        <td>4:20:00</td>
        <td>16:20:00</td>
      </tr>
      <tr>
        <td className="deleteColumn"><Button className="delete" color="danger">×</Button>{' '}</td>
        <td>6</td>
        <td>sytzedw</td>
        <td>7, 8, 9, 10</td>
        <td>4:20:00</td>
        <td>16:20:00</td>
      </tr>
    </tbody>
  </Table>
)
