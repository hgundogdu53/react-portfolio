import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class ContactPage extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Huseyin Gundogdu</h2>
                        <hr />
                        <img
                            src="https://github.com/hgundogdu53/myPortfolio-hg/blob/master/my%20icon.png?raw=true"
                            alt="icon"
                            style={{ height: '250px' }}
                        />
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '24px', fontFamily: 'Rationale' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (650) 753-3260
                                     </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '24px', fontFamily: 'Rationale' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        hgundogdu53@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '24px', fontFamily: 'Rationale' }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        live:hgundogdu53
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default ContactPage;