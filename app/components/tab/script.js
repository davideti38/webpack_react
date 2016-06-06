import React from 'react';
import Label from '../labels/script.js';

import icon from './img/icon.png';

var TabLine = React.createClass({



    render: function() {
        return (
            <tr>
                <td>
                  <h2 className="hdl__large">Email promotion</h2>
                  <p className="hdl__meduim">dibanez@yahoo.com</p>
                </td>
                <td>
                  <p className="para__meduim">Hello@test.com</p>
                </td>
                <td>
                      <img src={icon}/>
                      <span className="para__meduim">1</span>
                </td>
                <td>
                   <Label/>
                </td>
                <td>
                    <p className="para__Italic">13 hours ago</p>
                </td>
            </tr>

        );
    },


});

module.exports = TabLine;