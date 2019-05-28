import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

export class SidebarInvite extends Component {

  onAccept() {
    const { props } = this;
    let msg = props.msg;
    let cir = _.get(props, 'msg.sep.inv.cir', false);
    if (!cir) {
      return;
    }

    this.updateInvite(msg.uid, cir, 'Accept');
  }

  onReject() {
    const { props } = this;
    let msg = props.msg;
    let cir = _.get(props, 'msg.sep.inv.cir', false);
    if (!cir) {
      return;
    }
    
    this.updateInvite(msg.uid, cir, 'Reject');
  }

  updateInvite(uid, cir, resp) {
    let tagstring = resp ? "Accept" : "Reject";

    let msg = {
      aud: [`~${window.ship}/i`],
      ses: [{
        ire: {
          top: uid,
          sep: {
            lin: {
              msg: `${tagstring} ${cir}`,
              pat: false
            }
          }
        }
      }]
    };

    this.props.api.hall({
      phrase: msg
    });

    this.props.api.source(cir, true);
  }

  render() {
    const { props } = this;

    let cir = _.get(props, 'msg.sep.inv.cir', false);
    let aut = _.get(props, 'msg.aut', false);

    if (!aut || !cir) {
      return (
        <div></div>
      );
    }

    cir = cir.split('/')[1];

    return (
      <div className='pa3'>
        <div className='w-100 v-mid'>
          <div className="dib mr2 bg-nice-green" style={{
            borderRadius: 12,
            width: 12,
            height: 12
          }}></div>
          <p className="dib body-regular fw-normal">Invite to&nbsp;
            <span className='fw-bold'>
              {cir}
            </span>
          </p>
        </div>
        <div className="w-100">
          <p className='dib gray label-small-mono'>Hosted by {aut}</p>
        </div>
        <a className="dib w-50 pointer btn-font nice-green underline" onClick={this.onAccept.bind(this)}>Accept</a>
        <a className="dib w-50 tr pointer btn-font nice-red underline" onClick={this.onReject.bind(this)}>Reject</a>
      </div>
    )
  }
}
