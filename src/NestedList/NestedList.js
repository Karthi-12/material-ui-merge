import React from "react";
import PropTypes from "prop-types";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Icon from '../Icon/Icon';
import Divider from "@material-ui/core/Divider";
import Image  from "../Image/Image";

import user from "../SampleNestedList/account-circle.svg"

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        background: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});

class NestedList extends React.Component {
    state = {};
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };
    render() {
        const items = this.props.classes;
        return (
            <div>
                {items.list.map(list => {
                    return (
                        <List
                            key={list.id} 
                        >
                            {list.items.map(item => {
                                return (
                                    <div key={item.id}>
                                        {item.subitems != null ? (
                                            <div key={item.id}>
                                                <ListItem
                                                    button
                                                    key={item.id}
                                                    onClick={this.handleClick.bind(
                                                        this,
                                                        item.name
                                                    )}
                                                >
                                                    <Icon>{item.icon}</Icon> &nbsp;&nbsp;&nbsp;
                                                    {/* <Image   src={item.icon} height={item.height} width={item.width}></Image>  */}
                                                    {console.log(user+{user})}
                                                    <ListItemText
                                                        primary={item.name}
                                                    />
                                                    {this.state[item.name] ? (
                                                        <Icon>expand_more</Icon>
                                                    ) : (
                                                        <Icon>chevron_right</Icon>
                                                    )}
                                                </ListItem>
                                                <Collapse
                                                    key={list.items.id}
                                                    component="li"
                                                    in={this.state[item.name]}
                                                    timeout="auto"
                                                    unmountOnExit
                                                >
                                                    <List disablePadding>
                                                        {item.subitems.map(
                                                            sitem => {
                                                                return (
                                                                    <ListItem
                                                                        button
                                                                        key={
                                                                            sitem.id
                                                                        }
                                                                    > &nbsp;&nbsp;&nbsp;
                                                                        &nbsp;&nbsp;&nbsp;
                                                                        <ListItemText
                                                                            key={
                                                                                sitem.id
                                                                            }
                                                                            primary={
                                                                                sitem.name
                                                                            }
                                                                        />
                                                                    </ListItem>
                                                                );
                                                            }
                                                        )}
                                                    </List>
                                                </Collapse>{" "}
                                            </div>
                                        ) : (
                                            <ListItem
                                                button
                                                onClick={this.handleClick.bind(
                                                    this,
                                                    item.name
                                                )}
                                                key={item.id}
                                            >
                                                <Icon>{item.icon}</Icon> &nbsp;&nbsp;&nbsp;
                                                {/* <Image   src={item.icon} height={item.height} width={item.width}></Image>  */}

                                                <ListItemText
                                                    primary={item.name}
                                                />
                                            </ListItem>
                                        )}
                                    </div>
                                );
                            })}
                            <Divider key={list.id} absolute />
                        </List>
                    );
                })}
            </div>
        );
    }
}
NestedList.propTypes = {
    classes: PropTypes.array.isRequired,
    // data: PropTypes.shape({
    //     body: PropTypes.array,
    //   }),
};
//export default withStyles(styles)(SampleNestedList);
export default NestedList;
