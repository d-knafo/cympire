import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { fetchAttacks } from './../../redux/actions/attacks'
import Team from './Team'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchAttacks()
  }

  title () {
    return (
      <div className='p-3 mb-2 bg-light'>
        <h3>{ this.props.attacks.campaign_name }</h3>
        <span className='text-muted'>
          { this.props.attacks.campaign_instance_id }
        </span>
      </div>
    )
  }

  render () {
    return (
      <div>
        { this.title() }
        {
          this.props.attacks.team_instances.map((item, i) => (
            <Team team={item} key={i} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({ attacks: state.attacks })

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchAttacks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
