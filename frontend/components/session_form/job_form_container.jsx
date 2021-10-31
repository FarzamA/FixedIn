import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../util/session_api_util';
import { receiveUserJob, receiveCurrentUser } from '../../actions/session_actions';