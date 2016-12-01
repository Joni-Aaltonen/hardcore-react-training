/**
 * Created by joni on 30/11/16.
 */
import React from "react";
import styles from "./App.pcss";
import Loading from "./Loading";
//material
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

//grid

class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getPersons} = this.props;
    getPersons();
  }

  render() {

    const {loading, children, showDialog} = this.props;

    if (loading) {
      return (<Loading />);
    }

    return (
      <div className={styles.root}>
        <AppBar
          title="Hello World App"
          showMenuIconButton={false}
          iconElementRight={<FlatButton onClick={() => showDialog()} label="Add new" />}
        />

        {!!loading && <Loading />}

        {children}
      </div>
    );

  }//render

};

export default App;
