import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

import ActionExplore from 'material-ui/lib/svg-icons/action/explore';
import ActionBuild from 'material-ui/lib/svg-icons/action/build';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ActionLabel from 'material-ui/lib/svg-icons/action/label';
import ActionAns from 'material-ui/lib/svg-icons/action/class';
import ActionLock from 'material-ui/lib/svg-icons/action/fingerprint';
import ActionFace from 'material-ui/lib/svg-icons/action/face';
import ActionHTTP from 'material-ui/lib/svg-icons/action/http';
import HardwareComputer from 'material-ui/lib/svg-icons/hardware/computer';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
// import ContentSend from 'material-ui/lib/svg-icons/content/send';


import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
import {
  Colors,
  Spacing,
  Typography,
} from 'material-ui/lib/styles';
import {StylePropable} from 'material-ui/lib/mixins';

const SelectableList = SelectableContainerEnhance(List);

const AppLeftNav = React.createClass({

  propTypes: {
    docked: React.PropTypes.bool.isRequired,
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
    onRequestChangeLeftNav: React.PropTypes.func.isRequired,
    onRequestChangeList: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
    style: React.PropTypes.object,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func,
  },

  mixins: [
    StylePropable,
  ],

  handleRequestChangeLink(event, value) {
    window.location = value;
  },

  handleTouchTapHeader() {
    this.props.history.push('/');
    this.setState({
      leftNavOpen: false,
    });
  },

  getStyles() {
    return {
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: Typography.textFullWhite,
        lineHeight: Spacing.desktopKeylineIncrement + 'px',
        fontWeight: Typography.fontWeightLight,
        backgroundColor: Colors.cyan500,
        paddingLeft: Spacing.desktopGutter,
        marginBottom: 8,
      },
    };
  },

  render() {
    const {
      location,
      docked,
      onRequestChangeLeftNav,
      onRequestChangeList,
      open,
      style,
    } = this.props;

    const styles = this.getStyles();

    return (
      <LeftNav
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeLeftNav}
      >
        <div style={this.prepareStyles(styles.logo)} onTouchTap={this.handleTouchTapHeader}>
          ZS Blog
        </div>
        <SelectableList
          subheader="Categories"
          valueLink={{value: location.pathname, requestChange: onRequestChangeList}}
        >
        <ListItem primaryText="Go Home" value="/" leftIcon={<ActionHome />}/>
        <ListItem
          leftIcon={<ActionExplore />}
          primaryText="All Posts"
          value="/posts/"
        />
          <ListItem
            leftIcon={<ActionHTTP />}
            primaryText="Web Dev"
            value="/posts/web/"
          />
          <ListItem
            leftIcon={<ActionAns />}
            primaryText="Algorithm"
            value="/posts/algo/"
          />
          <ListItem
            leftIcon={<HardwareComputer />}
            primaryText="Linux/OSX"
            value="/posts/os/"
          />
          <ListItem
            leftIcon={<ActionBuild />}
            primaryText="General Dev"
            value="/posts/general/"
          />
          <ListItem
            leftIcon={<ActionLock />}
            primaryText="=Password="
            value="/posts/passwd/"
          />
        </SelectableList>
        <Divider /><br />
        <SelectableList
          subheader="Links"
          valueLink={{value: '', requestChange: this.handleRequestChangeLink}}
        >
          <ListItem primaryText="GitHub" value="https://github.com/RoyTimes" leftIcon={<ActionLabel />} />
          <ListItem primaryText="聚力星系BBS" value="http://stzone.org" leftIcon={<ActionLabel />} />
        </SelectableList>
      </LeftNav>
    );
  },
});

export default AppLeftNav;
