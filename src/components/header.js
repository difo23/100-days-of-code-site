import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import { FaDev } from 'react-icons/fa';


const useStyles = makeStyles(theme => ({
    avatarCt: {
        display: "flex",
        flexDirection: "row",
        maxWidth: 600
    },
    avatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: theme.spacing(2)
    }
}));

const Header = ({ avatar, siteDescription, twitterUrl }) => {
    const classes = useStyles();
    return (
        <header>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `1.45rem 1.0875rem`
                }}
            >
                <Grid container direction="row" spacing={2} justify="space-between">
                    <Grid item>
                        <div className={classes.avatarCt}>
                            <Link to={"/"}>
                                <Avatar
                                    src={avatar.childImageSharp.fixed.src}
                                    alt="A picture of me!"
                                    className={classes.avatar}
                                />
                            </Link>
                            <Typography gutterBottom variant="subtitle2">
                                {siteDescription}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item>
                        <div>


                            <Button
                                variant="text"
                                color="default"
                                href={twitterUrl}
                                target="_blank"
                                rel="noreferrer"
                                startIcon={<TwitterIcon />}
                            >

                                <strong> Follow me on Twitter</strong>
                            </Button>



                            <Button
                                variant="text"
                                color="default"
                                href={"https://dev.to/difo23"}
                                target="_blank"
                                rel="noreferrer"
                                startIcon={<FaDev />}

                            >
                                <strong>Follow me on Dev</strong>
                            </Button>
                        </div>


                    </Grid>
                </Grid>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteDescription: PropTypes.string
};

Header.defaultProps = {
    siteDescription: ""
};

export default Header;
