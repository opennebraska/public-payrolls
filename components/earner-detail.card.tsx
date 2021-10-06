import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { formatCurrency } from "../utils/utils";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: "#f0f0f0",
    height: "400px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EarnerDetailCard({ employee }) {
  const { name, jobTitle, agency, totalAnnualAmount, year, originalHireDate } =
    employee;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            ({jobTitle})
          </Typography>
          <Typography variant="body2" component="p">
            Agency: {agency}
            <hr />
            Total Pay: {formatCurrency(totalAnnualAmount)}
            <hr />
            Year: {year}
            <hr />
            Hire date: {originalHireDate}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
