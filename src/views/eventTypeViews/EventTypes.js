import React, { Component } from 'react'
import EventTypeList from '../../components/eventTypeComponents/EventTypeList'
import { Typography } from "@material-ui/core"

export default class EventTypes extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2" color="primary">
          Our EventTypes
        </Typography>
        <EventTypeList />
      </div>
    )
  }
}
