<<<<<<< HEAD
import React, { Component } from 'react';
import _ from 'lodash'

export default class TableBody extends Component {

    renderCell = (item, column) => {
        if (column.content) return column.content(item)
        return _.get(item, column.column);
    }

    createKey = (item, column) => {
        return item._id + (column.column || column.key);
    }

    render() {
        const { data, columns } = this.props;
        return (
            <>
                <tbody>

                    {data.map(item => (
                        <tr key={item._id}>
                            {
                                columns.map(column => (
                                    <td key={this.createKey(item, column)} > {this.renderCell(item, column)}</td>
                                ))
                            }
                        </tr>
                    ))}



                </tbody>
            </>
        )

    }
}
=======
import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  renderCell(item, column) {
    if (column.content) return column.content(item);
    return _.get(item, column.column);
    }
    
    createKey(item, column) {
        return item._id + (column.column || column.key);
    }
  render() {
    const { data, columns } = this.props;

    return (
      <>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {columns.map((column) => (
                <td key={this.createKey(item, column)}>
                  {this.renderCell(item, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </>
    );
  }
}
>>>>>>> 1c277299681583cfb6de7b7d5e57fd2b0f0f3674
